import { useState } from "react";

//props
interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}

export default function TodoInput({ onSubmit }: AddTodoFormProps) {
  const [input, setInput] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return;

    onSubmit(input);

    setInput("");
  }

  return (
    <form action="" className="flex h-10" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className=" px-3 py-2 border border-gray-300 rounded"
        placeholder="What needs to be done?"
      />
      <button
        type="submit"
        className="bg bg-black text-white text-2xl border border-black rounded ml-2 w-20 "
      >
        Add
      </button>
    </form>
  );
}
