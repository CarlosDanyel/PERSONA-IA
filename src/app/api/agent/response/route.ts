/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextRequest, NextResponse } from "next/server";

let latestData: any = null;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("📩 Webhook recebido do n8n:", body.data);
    latestData = body.data;

    return NextResponse.json({ message: "Recebido com sucesso" });
  } catch (error) {
    console.error("Erro ao receber dados do n8n:", error);
    return NextResponse.json({ message: "Erro interno" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(
    latestData || { message: "Nenhum dado recebido ainda" }
  );
}
