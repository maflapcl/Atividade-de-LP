import Link from "next/link";
import prisma from "@/lib/prisma";
import { deleteProduto } from "./actions";

export default async function DeleteProduto() {
  const produtos = await prisma.produto.findMany({
    orderBy: { id: "asc" },
  });

  return (
    <main className="min-h-screen p-8">
      <h1 className="mb-6 text-3xl font-bold">Excluir Produto</h1>

      <p className="mb-4">
        Selecione o produto que deseja excluir:
      </p>

      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        <div className="flex max-w-2xl flex-col gap-3">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="flex items-center justify-between gap-4 rounded border p-4"
            >
              <div>
                <p className="font-semibold">
                  {produto.id} — {produto.nome}
                </p>

                <p className="text-sm text-gray-600">
                  Preço:{" "}
                  {produto.preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>

              <form action={deleteProduto}>
                <input
                  type="hidden"
                  name="id"
                  value={produto.id}
                />

                <button
                  type="submit"
                  className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                  Excluir
                </button>
              </form>
            </div>
          ))}
        </div>
      )}

      <Link href="/" className="mt-6 inline-block underline">
        Voltar para a página inicial
      </Link>
    </main>
  );
}