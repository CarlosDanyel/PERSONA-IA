import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    const { name, email } = await request.json();

    if (!name || !email) {
        return NextResponse.json({
            message: "Nome e email são obrigatórios",
            status: 400,
        });
    }

    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (user) {
        return NextResponse.json({
            message: "Usuario já existe",
            status: 400,
        });
    }

    await prisma.user.create({
        data: {
            name,
            email,
        },
    });
}
