import todo from "../assets/todo.svg";
import trash from "../assets/trash.svg";

function ItemsList() {
  return (
    <section className="mt-10 space-y-3 ">
      <article className="flex w-full gap-4">
        <img src={todo} alt="#" />
        <div className="flex-1">
          <p>Leite</p>
          <p className="text-sm text-slate-400">3 Caixas</p>
        </div>
        <img src={trash} alt="ícone de lixeira" className="justify-self-end" />
      </article>
      <hr />
      <article className="flex w-full gap-4">
        <img src={todo} alt="#" />
        <div className="flex-1">
          <p>Maçã</p>
          <p className="text-sm text-slate-400">500g</p>
        </div>
        <img src={trash} alt="ícone de lixeira" className="justify-self-end" />
      </article>
      <hr />
    </section>
  );
}

export default ItemsList;
