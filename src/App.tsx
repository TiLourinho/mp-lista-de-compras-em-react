import Header from "./components/Header";
import Form from "./components/Form";

import trash from "./assets/trash.svg";
import todo from "./assets/todo.svg";
import done from "./assets/done.svg";

function App() {
  return (
    <main className="max-w-2xl px-6 py-12 pb-20 mx-auto my-10 bg-white md:my-20 md:px-32 md:rounded-3xl">
      <Header />
      <Form />
      <section className="mt-10 space-y-3 ">
        <article className="flex w-full gap-4">
          <img src={todo} alt="#" />
          <div className="flex-1">
            <p>Leite</p>
            <p className="text-sm text-slate-400">3 Caixas</p>
          </div>
          <img
            src={trash}
            alt="ícone de lixeira"
            className="justify-self-end"
          />
        </article>
        <hr />
        <article className="flex w-full gap-4">
          <img src={todo} alt="#" />
          <div className="flex-1">
            <p>Maçã</p>
            <p className="text-sm text-slate-400">500g</p>
          </div>
          <img
            src={trash}
            alt="ícone de lixeira"
            className="justify-self-end"
          />
        </article>
        <hr />
      </section>
      <section className="mt-16 space-y-3">
        <h2 className="mb-10 text-3xl text-center font-display">
          Itens já comprados
        </h2>
        <article className="flex w-full gap-4">
          <img src={done} alt="#" />
          <div className="flex-1">
            <p className="line-through text-slate-400">Leite</p>
            <p className="text-sm line-through text-slate-400">3 Caixas</p>
          </div>
          <img
            src={trash}
            alt="ícone de lixeira"
            className="justify-self-end"
          />
        </article>
        <hr />
        <article className="flex w-full gap-4">
          <img src={done} alt="#" />
          <div className="flex-1">
            <p className="line-through text-slate-400">Maçã</p>
            <p className="text-sm line-through text-slate-400">500g</p>
          </div>
          <img
            src={trash}
            alt="ícone de lixeira"
            className="justify-self-end"
          />
        </article>
        <hr />
      </section>
    </main>
  );
}

export default App;
