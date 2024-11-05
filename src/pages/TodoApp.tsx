import { useState } from "react";
import TodoItem from "../components/TodoItem.tsx";
import { dummyData } from "../data/todos.ts";
import TodoInput from "../components/TodoInput.tsx";
export default function TodoApp() {
  //deklarasi state hooks?
  const [todos, setTodos] = useState(dummyData);

  //callback function dibuat!
  function setTodoCompleted(id: number, completed: boolean) {
    // alert(`Todo ${id} is now ${completed ? "completed" : "not completed"}`);
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  function addTodo(title: string) {
    setTodos((prevTodos) => [
      {
        id: prevTodos.length + 1,
        title,
        completed: false,
      },
      // menampilkan dipaling atas todo
      ...prevTodos,
    ]);
  }

  return (
    <main className="min-h-screen">
      <h1 className="text-3xl font-bold text-center py-20">Todo App</h1>
      <div>
        <div>
          <TodoInput onSubmit={addTodo} />
          {todos.map((todo) => (
            <TodoItem
              //mengirim props ke component child (TodoItem)
              todo={todo}
              onCompleteChange={setTodoCompleted}
              key={todo.id}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
