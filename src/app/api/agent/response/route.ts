import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("📩 Webhook recebido do n8n:", body);

    return NextResponse.json({ message: "Recebido com sucesso" });
  } catch (error) {
    console.error("Erro ao receber dados do n8n:", error);
    return NextResponse.json({ message: "Erro interno" }, { status: 500 });
  }
}
