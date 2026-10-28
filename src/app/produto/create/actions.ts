"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createProduto(formData: FormData) {
  const nome = String(formData.get("nome") ?? "").trim();
  const descricao = String(formData.get("descricao") ?? "").trim();
  const preco = Number(formData.get("preco"));

  if (!nome || !descricao || !Number.isFinite(preco) || preco < 0) {
    throw new Error("Preencha os campos corretamente.");
  }

  await prisma.produto.create({
    data: {
      nome,
      descricao,
      preco,
    },
  });

  redirect("/");
}