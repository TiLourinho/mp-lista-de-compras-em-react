import { Dispatch, SetStateAction } from "react";

import Item from "./Item";
import { ItemProps } from "../types/index";

type ItemsListProps = {
  items: ItemProps[];
  onItemsPurchased: Dispatch<SetStateAction<ItemProps[]>>;
  onItemsToBuy: Dispatch<SetStateAction<ItemProps[]>>;
};

function ItemsList({ items, onItemsPurchased, onItemsToBuy }: ItemsListProps) {
  function handleItemPurchased(itemName: string) {
    const purchasedItem = items.find(({ name }) => name === itemName);
    const newList = items.filter(({ name }) => name !== itemName);

    if (purchasedItem) {
      onItemsPurchased((prevItems) => [
        ...prevItems,
        { ...purchasedItem, purchased: true },
      ]);
      onItemsToBuy(newList);
    }
  }

  function handleItemRemove(itemName: string) {
    const newList = items.filter(({ name }) => name !== itemName);

    onItemsToBuy(newList);
  }

  return (
    <section className="mt-10 space-y-3 ">
      {items.map(({ name, quantity }: ItemProps, index) => (
        <Item
          key={index}
          name={name}
          quantity={quantity}
          onItemsPurchased={() => handleItemPurchased(name)}
          onItemRemove={() => handleItemRemove(name)}
        />
      ))}
    </section>
  );
}

export default ItemsList;
