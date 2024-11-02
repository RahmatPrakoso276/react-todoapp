import React, { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function Hooks1() {
  const [greetings, setGreetings] = useState("Halo Selamat Datang!!");
  const [inputs, setInputs] = useState(true);
  const [datas, setDatas] = useState<Todo[]>([]); // Mengatur tipe array `datas` sebagai `Todo[]`

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json: Todo[]) => setDatas(json)) // Pastikan TypeScript tahu bahwa `json` adalah array `Todo`
      .catch((error) => console.error("Error Fetching data", error));
  }, []);
  function handleClick() {
    setInputs(!inputs);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setGreetings(e.target.value);
  }
  function setTodoCompleted(id: number, completed: boolean) {
    // alert(`Todo ${id} is now ${completed ? "completed" : "not completed"}`);
    setDatas((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  return (
    <div>
      <h1>input greetings!!!</h1>
      <input
        onChange={handleChange}
        type="text"
        className="border border-black my-2"
      />
      <div>{greetings}</div>
      <button
        onClick={handleClick}
        className="block border border-black rounded px-3 py-2"
      >
        klik saya!
      </button>
      <h1>Pesan : {inputs ? "Show" : "noShow :D"}</h1>
      {inputs ? <p>{greetings}</p> : null}
      <br />
      <br />
      <div>
        {datas.map(({ id, title, completed }) => {
          return (
            <div
              key={id}
              className={completed ? "line-through text-gray-400" : ""}
            >
              {title}
              <input
                type="checkbox"
                defaultChecked={completed}
                onChange={() => setTodoCompleted(id, !completed)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
