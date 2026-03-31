import { NextResponse } from "next/server";

export type error = {success:boolean,message:string};


export const ErrorHandler = async (statusCode: number, message: string) => {
    return NextResponse.json({success:false,message},{status:statusCode});
}