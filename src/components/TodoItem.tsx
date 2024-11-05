import { Todo } from "../types/todo";
import { GlobalContext } from "../context";
import { useContext } from "react";
interface TodoItemProps {
  todo: Todo;
  onCompleteChange: (id: number, completed: boolean) => void;
}

//todo dan oncompleteChange itu adalah props dan harus di definisikan di parameter function sehingga dapat
//digunakan
export default function TodoItem({ todo, onCompleteChange }: TodoItemProps) {
  const user = useContext(GlobalContext);
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onCompleteChange(todo.id, e.target.checked)}
        />
        <span className={todo.completed ? "line-through text-gray-400 " : ""}>
          {todo.title}
        </span>
      </label>
      <div>
        {user ? user.username : "Guest"}
        <br />
        {user ? user.age : "0"}
      </div>
    </div>
  );
}
