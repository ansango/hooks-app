import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoAdd } from "./children/TodoAdd";
import { TodoList } from "./children/TodoList";

const init = () => JSON.parse(localStorage.getItem("todos")) || [];

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newTodo) =>
    dispatchTodo({ type: "add", payload: newTodo });

  const handleDeleteTodo = (todoId) =>
    dispatchTodo({ type: "delete", payload: todoId });

  const handleToggleTodo = (todoId) =>
    dispatchTodo({ type: "toggle", payload: todoId });

  return (
    <>
      <p>useReducer sample:</p>
      <br />

      <div className="row">
        <div className="col-12 col-md-7">
          <h3> Todos: ({todos.length})</h3>
          <hr />
          <TodoList
            todos={todos}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-12 col-md-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </>
  );
};
