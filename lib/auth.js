import { db } from "@/database/models"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    pages: {
        signIn: "/Auth/Signin",
        signOut: "/",
        error: "/"
    },
    session: {
        strategy: "jwt",
        maxAge: 15 * 24 * 60 * 60,
        generateSessionToken: () => {
            return randomUUID?.() ?? randomBytes(32).toString("hex")
        }
    },
    jwt: {  
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter Email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                console.log(credentials)
                if (!credentials || !credentials.email || !credentials.password) {
                    return null;
                }
                const user = db.Users.findAll({
                    where: {
                        email: credentials.email
                    }
                })
                if (user) {
                    console.log("user DATA: ", user)
                    return user;
                }
                return null;
            },
        }),
    ],
    callbacks: {
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    randomKey: token.randomKey,
                },
            };
        },
        jwt: ({ token, user }) => {
            if (user) {
                const u = user;
                return {
                    ...token,
                    id: u.id,
                    randomKey: u.randomKey,
                };
            }
            return token;
        },
    },
};