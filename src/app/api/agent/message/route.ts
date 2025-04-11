import { NextResponse } from "next/server";
import axios from "axios";

const AGENT_SERVER = process.env.N8N_WEBHOOK_URL!;

export async function POST(request: Request) {
    const { chatId, chatInput } = await request.json();

    if (!chatId || !chatInput) {
        return Response.json(
            {
                message: "Messaegem Obrigatoria",
                status: 400,
            },
            { status: 400 }
        );
    }

    try {
        const response = await axios.post(AGENT_SERVER, {
            chatId,
            chatInput,
        });

        return NextResponse.json(response.data);
    } catch (error) {
        console.error("Erro ao chamar n8n:", error);
        return NextResponse.json({ error: "Erro interno" }, { status: 500 });
    }
}
