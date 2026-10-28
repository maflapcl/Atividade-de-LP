import Link from "next/link";
import prisma from "@/lib/prisma";

export default async function Home() {
  const produtos = await prisma.produto.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <main className="min-h-screen p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Cadastro de Produtos
      </h1>

      <nav className="mb-6 flex gap-4">
        <Link
          href="/produto/create"
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Cadastrar produto
        </Link>

        <Link
          href="/produto/update"
          className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
        >
          Alterar produto
        </Link>

        <Link
          href="/produto/delete"
          className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          Excluir produto
        </Link>
      </nav>

      <h2 className="mb-4 text-xl font-semibold">
        Produtos cadastrados
      </h2>

      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3">ID</th>
                <th className="border border-gray-300 p-3">Nome</th>
                <th className="border border-gray-300 p-3">Descrição</th>
                <th className="border border-gray-300 p-3">Preço</th>
              </tr>
            </thead>

            <tbody>
              {produtos.map((produto) => (
                <tr key={produto.id}>
                  <td className="border border-gray-300 p-3">
                    {produto.id}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {produto.nome}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {produto.descricao}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {produto.preco.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}