import {
  useState,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  FormEvent,
  useRef,
} from "react";

import Input from "./Input";
import { ItemProps } from "../types/index";

type FormProps = {
  onItemsToBuy: Dispatch<SetStateAction<ItemProps[]>>;
};

function Form({ onItemsToBuy }: FormProps) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;

    if (id === "name") setName(value);
    else if (id === "quantity") setQuantity(value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name || !quantity) return;

    const newItem: ItemProps = {
      name,
      quantity,
      purchased: false,
      onItemsToBuy: () => {},
      onItemsPurchased: () => {},
    };
    onItemsToBuy((currItems) => [...currItems, newItem]);
    setName("");
    setQuantity("");
    inputRef.current?.focus();
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)} className="flex gap-2">
      <Input
        label="Item"
        id="name"
        ref={inputRef}
        value={name}
        onChange={(event) => handleInput(event)}
      />
      <Input
        label="Quantidade"
        id="quantity"
        value={quantity}
        onChange={(event) => handleInput(event)}
      />
      <button
        type="submit"
        className="self-end flex-shrink h-10 px-4 font-extrabold text-white rounded-lg bg-fuchsia-300"
      >
        +
      </button>
    </form>
  );
}

export default Form;
