import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const produtos = await prisma.produto.findMany();

    return NextResponse.json({
      mensagem: "Conexão com o banco de dados funcionando!",
      produtos,
    });
  } catch (error) {
    console.error("Erro ao consultar o banco:", error);

    return NextResponse.json(
      { erro: "Não foi possível consultar o banco de dados." },
      { status: 500 }
    );
  }
}