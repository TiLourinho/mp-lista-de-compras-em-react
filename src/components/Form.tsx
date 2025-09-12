import { useState } from "react";

import Input from "./Input";

function Form() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;

    if (id === "name") setName(value);
    else if (id === "quantity") setQuantity(value);
  }

  return (
    <form className="flex gap-2">
      <Input
        label="Item"
        id="name"
        value={name}
        onChange={(event) => handleInput(event)}
      />
      <Input
        label="Quantidade"
        id="quantity"
        value={quantity}
        onChange={(event) => handleInput(event)}
      />
      <button className="self-end flex-shrink h-10 px-4 font-extrabold text-white rounded-lg bg-fuchsia-300">
        +
      </button>
    </form>
  );
}

export default Form;
