import "./TodoListItem.css";

export const TodoListItem = ({
  todo,
  index,
  handleDeleteTodo,
  handleToggleTodo,
}) => {
  return (
    <li className="list-group-item d-flex items-center justify-content-between">
      <p
        className={`${todo.done && "complete"}`}
        onClick={() => handleToggleTodo(todo.id)}
      >
        {index + 1}. {todo.description}
      </p>
      <button
        className="btn btn-danger"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
};
