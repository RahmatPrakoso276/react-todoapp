import { Todo } from "../types/todo";
interface TodoItemProps {
  todo: Todo;
  onCompleteChange: (id: number, completed: boolean) => void;
}

//todo dan oncompleteChange itu adalah props dan harus di definisikan di parameter function sehingga dapat
//digunakan
export default function TodoItem({ todo, onCompleteChange }: TodoItemProps) {
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
    </div>
  );
}
