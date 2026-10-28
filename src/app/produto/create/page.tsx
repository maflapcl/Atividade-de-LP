import { createProduto } from "./actions";

export default function CreateProduto() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="mb-6 text-3xl font-bold">Cadastrar Produto</h1>

      <form
        action={createProduto}
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
            required
            className="w-full rounded border p-2"
          />
        </div>

        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Cadastrar
        </button>
      </form>
    </main>
  );
}