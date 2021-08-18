import { useEffect, useReducer } from "react";
import { useForm } from "../../hooks/useForm";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./children/TodoList";
import { generateId } from "../../helpers/generateId";

const init = () => JSON.parse(localStorage.getItem("todos")) || [];

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (description.trim().length !== 0) {
      const newTodo = {
        id: generateId(),
        description: description,
        done: false,
      };
      const action = {
        type: "add",
        payload: newTodo,
      };
      dispatchTodo(action);
      reset();
    }
  };

  const handleDeleteTodo = (todoId) => {
    const action = { type: "delete", payload: todoId };
    dispatchTodo(action);
  };

  const handleToggleTodo = (todoId) => {
    const action = { type: "toggle", payload: todoId };
    dispatchTodo(action);
  };

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
          <h3> Add Todo</h3>
          <hr />
          <form onSubmit={handleAddTodo} className="py-2">
            <input
              type="text"
              placeholder="Add a todo"
              name="description"
              autoComplete="off"
              className="form-control mb-3"
              value={description}
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-primary w-100" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
