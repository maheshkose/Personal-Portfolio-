import connectDb from "@/lib/dbconnect";
import FeedBack from "@/lib/Models/feedback";
import { ErrorHandler } from "@/lib/type";
import { AwardIcon } from "lucide-react";
import { NextRequest, NextResponse } from "next/server";

export type feedback = {
    name:string;
    feedback:string;
}

export type contact = {
    name:string;
    email:string;
    message:string;
}
export async function GET(req:NextRequest){
    try {
        await connectDb();
        const feedbacks = await FeedBack.find().sort({createdAt:-1});
        return NextResponse.json({success:true,feedbacks}, {status:200});
    } catch (error) {
        
    }
}
export async function POST(req:NextRequest){
    await connectDb();
   
    try {
        const body = await req.json();
    const {name ,feedback} = body;
    if (!name || !feedback) {
        return ErrorHandler(400,"Provide all credentials");
    }
    const feedb = await FeedBack.create({name,feedback});
    if (!feedb) {
        return ErrorHandler(400,"database error");
    }

    return NextResponse.json({success:true,message:"Feedback added ",feedback:feedb});
    } catch (error) {
        console.log(error);
        
        return ErrorHandler(500,"async error");
    }
    
     
}
