"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function deleteProduto(formData: FormData) {
  const id = Number(formData.get("id"));

  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("ID do produto inválido.");
  }

  await prisma.produto.delete({
    where: { id },
  });

  redirect("/produto/delete");
}