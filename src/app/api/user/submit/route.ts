import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return Response.json(
        {
          message: "Nome e email são obrigatórios",
          status: 400,
        },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      return Response.json(
        {
          message: "Usuário já existe",
          status: 400,
        },
        { status: 400 }
      );
    }

    await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return Response.json(
      {
        message: "Usuário criado com sucesso!",
        status: 201,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro na API:", error);
    return Response.json(
      {
        message: "Erro interno do servidor",
        status: 500,
      },
      { status: 500 }
    );
  }
}
