import { connectDB } from "@/app/backend/database/dbConfiguration";
// import { NextResponse } from "next/server";

export default async function handler(req, res) {
    let res_data = await connectDB();
    res.status(200).json({ data: {res_data} })
}

