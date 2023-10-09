import NextAuth from "next-auth/next"
import { db } from "@/database/models"
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter Email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log(Credentials)
                if (!credentials || !credentials.email || !credentials.password) {
                    return null;
                }
                const user = db.Users.findAll({
                    where: {
                        email: credentials.email
                    }
                })
                if (user) {
                    return user;
                }
                // if(user?.password === credentials.password){
                //     return user;
                // }
                return null;
            },
        }),
    ],
};

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }