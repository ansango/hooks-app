import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleDeleteTodo, handleToggleTodo }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, index) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          index={index}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleTodo={handleToggleTodo}
        />
      ))}
    </ul>
  );
};
