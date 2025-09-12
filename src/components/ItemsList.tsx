import Item from "./Item";
import { ItemProps } from "../types/index";

type ItemsListProps = {
  items: ItemProps[];
};

function ItemsList({ items }: ItemsListProps) {
  return (
    <section className="mt-10 space-y-3 ">
      {items.map(({ name, quantity }: ItemProps, index) => (
        <Item key={index} name={name} quantity={quantity} />
      ))}
    </section>
  );
}

export default ItemsList;
