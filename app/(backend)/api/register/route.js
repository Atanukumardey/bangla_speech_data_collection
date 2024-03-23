import { NextResponse } from "next/server";
import { db } from "@/database/models"

export async function POST(req) {
    try {
        const { name, email, password } = await req.json()
        // const hashed_password = await hash(password, 12);

        const user = await db.Users.create({
            user_name: name,
            email: email.toLowerCase(),
            password: password,
            user_role: "user"
        });
        return NextResponse.json({
            user: {
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        return new NextResponse(
            JSON.stringify({
                status: "error",
                message: error.message,
            }),
            { status: 500 }
        );
    }
}