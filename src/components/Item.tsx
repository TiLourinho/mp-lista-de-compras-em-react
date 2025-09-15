import todo from "../assets/todo.svg";
import done from "../assets/done.svg";
import trash from "../assets/trash.svg";
import { ItemProps } from "../types/index.tsx";

function Item({
  name,
  quantity,
  purchased = false,
  onItemsPurchased,
}: ItemProps) {
  return (
    <>
      <article className="flex w-full gap-4">
        <button onClick={onItemsPurchased}>
          <img src={purchased ? done : todo} alt="#" />
        </button>
        <div className="flex-1">
          <p className={purchased ? "line-through text-slate-400" : ""}>
            {name}
          </p>
          <p
            className={`${
              purchased ? "line-through" : ""
            } text-sm text-slate-400`}
          >
            {quantity}
          </p>
        </div>
        <img src={trash} alt="ícone de lixeira" className="justify-self-end" />
      </article>
      <hr />
    </>
  );
}

export default Item;
