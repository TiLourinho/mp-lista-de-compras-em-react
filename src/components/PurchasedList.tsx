import Item from "./Item";
import { ItemProps } from "../types/index";

type ItemsListProps = {
  items: ItemProps[];
};

function PurchasedList({ items }: ItemsListProps) {
  return items.length > 0 ? (
    <section className="mt-16 space-y-3">
      <h2 className="mb-10 text-3xl text-center font-display">
        Itens já comprados
      </h2>
      {items.map(({ name, quantity, purchased }: ItemProps, index) => (
        <Item
          key={index}
          name={name}
          quantity={quantity}
          purchased={purchased}
        />
      ))}
    </section>
  ) : null;
}

export default PurchasedList;
