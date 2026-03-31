import connectDb from "@/lib/dbconnect";
import Contact from "@/lib/Models/contact";
import { ErrorHandler } from "@/lib/type";

import { NextRequest, NextResponse } from "next/server";


export async function POST(req : NextRequest) {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
        return ErrorHandler(400, "All fields are required");
    }
    try {
        await connectDb();
        const contact = await Contact.create({ name, email, message });
        if (!contact) {
            return ErrorHandler(500, "Failed to create contact");
        }
        return NextResponse.json({ success: true, message: "Contact created successfully", contact }, {status: 201});
    } catch (error: any) {
        console.log(error.message);
        return ErrorHandler(500, error.message || "Failed to create contact");
    }
}
export async function GET(req : NextRequest) {
    try {
        await connectDb();
        const contacts = await Contact.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, contacts }, {status: 200});
    } catch (error:any) {
        console.log(error);
        return ErrorHandler(500, error.message || "Failed to fetch contacts");
    }
}