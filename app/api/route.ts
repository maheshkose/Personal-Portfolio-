import connectDb from "@/lib/dbconnect";

import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest){
   await connectDb();
   return NextResponse.json({success:true, message:"home route"});
}