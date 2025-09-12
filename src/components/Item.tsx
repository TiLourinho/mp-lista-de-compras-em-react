import todo from "../assets/todo.svg";
import trash from "../assets/trash.svg";
import { ItemProps } from "../types/index.tsx";

function Item({ name, quantity }: ItemProps) {
  return (
    <>
      <article className="flex w-full gap-4">
        <img src={todo} alt="#" />
        <div className="flex-1">
          <p>{name}</p>
          <p className="text-sm text-slate-400">{quantity}</p>
        </div>
        <img src={trash} alt="ícone de lixeira" className="justify-self-end" />
      </article>
      <hr />
    </>
  );
}

export default Item;
