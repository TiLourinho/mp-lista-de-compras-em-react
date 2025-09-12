import done from "../assets/done.svg";
import trash from "../assets/trash.svg";

function PurchasedList() {
  return (
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
        <img src={trash} alt="ícone de lixeira" className="justify-self-end" />
      </article>
      <hr />
      <article className="flex w-full gap-4">
        <img src={done} alt="#" />
        <div className="flex-1">
          <p className="line-through text-slate-400">Maçã</p>
          <p className="text-sm line-through text-slate-400">500g</p>
        </div>
        <img src={trash} alt="ícone de lixeira" className="justify-self-end" />
      </article>
      <hr />
    </section>
  );
}

export default PurchasedList;
