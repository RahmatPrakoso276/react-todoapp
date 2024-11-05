import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    /**
     * Fetches data from the API and sets the state `datas` accordingly.
     * Uses the `fetch` API to fetch data from the API and the `json()` method to parse it as JSON.
     * If there is an error, logs the error to the console.
     */
    const fetchData = async () => {
      try {
        /**
         * Fetches the data from the API and waits for the response to be ready.
         * The `fetch` API returns a Promise that resolves to the Response object.
         */
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/"
        );

        /**
         * Parses the response as JSON and waits for the Promise to be resolved.
         * The `json()` method returns a Promise that resolves to the parsed JSON.
         */
        const json: Todo[] = await response.json();

        /**
         * Sets the state `datas` to the parsed JSON data.
         * Makes sure TypeScript knows that `json` is an array of `Todo` objects.
         */
        setDatas(json);
      } catch (error) {
        console.error("Error Fetching data", error);
      }
    };
    fetchData();
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
              <Link to={`/hooks1/${id}`}>{title}</Link>
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
