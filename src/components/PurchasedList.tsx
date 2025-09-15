import { Dispatch, SetStateAction } from "react";

import Item from "./Item";
import { ItemProps } from "../types/index";

type ItemsListProps = {
  items: ItemProps[];
  onItemsPurchased: Dispatch<SetStateAction<ItemProps[]>>;
};

function PurchasedList({ items, onItemsPurchased }: ItemsListProps) {
  function handleItemRemove(itemName: string) {
    const newList = items.filter(({ name }) => name !== itemName);

    onItemsPurchased(newList);
  }
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
          onItemRemove={() => handleItemRemove(name)}
        />
      ))}
    </section>
  ) : null;
}

export default PurchasedList;
