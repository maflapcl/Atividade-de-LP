import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { updateProduto } from "./actions";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditarProduto({ params }: Props) {
  const { id } = await params;
  const produtoId = Number(id);

  if (!Number.isInteger(produtoId) || produtoId <= 0) {
    notFound();
  }

  const produto = await prisma.produto.findUnique({
    where: { id: produtoId },
  });

  if (!produto) {
    notFound();
  }

  const atualizarProduto = updateProduto.bind(null, produto.id);

  return (
    <main className="min-h-screen p-8">
      <h1 className="mb-6 text-3xl font-bold">Editar Produto</h1>

      <form
        action={atualizarProduto}
        className="flex max-w-md flex-col gap-4"
      >
        <div>
          <label htmlFor="nome" className="mb-1 block">
            Nome:
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            defaultValue={produto.nome}
            required
            className="w-full rounded border p-2"
          />
        </div>

        <div>
          <label htmlFor="descricao" className="mb-1 block">
            Descrição:
          </label>
          <textarea
            id="descricao"
            name="descricao"
            defaultValue={produto.descricao}
            required
            className="w-full rounded border p-2"
          />
        </div>

        <div>
          <label htmlFor="preco" className="mb-1 block">
            Preço:
          </label>
          <input
            id="preco"
            name="preco"
            type="number"
            step="0.01"
            min="0"
            defaultValue={produto.preco}
            required
            className="w-full rounded border p-2"
          />
        </div>

        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Salvar alterações
        </button>
      </form>

      <Link
        href="/produto/update"
        className="mt-6 inline-block underline"
      >
        Voltar
      </Link>
    </main>
  );
}