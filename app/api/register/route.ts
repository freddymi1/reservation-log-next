import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { User } from "@prisma/client";

export async function POST(
    request: Request
){
    const body = await request.json();
    const {
        email,
        name,
        password
    } = body;
    
    
    const hashedPassword = await bcrypt.hash(password, 12);
    console.log(body, hashedPassword)

    const user: User = await prisma.user.create({
        data: {
            email,
            name,
            hashedPassword
        }
    });

    return NextResponse.json(user);
}