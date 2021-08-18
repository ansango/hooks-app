import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [{ id: 1, description: "Learn React", done: false }];
export const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <p>useReducer sample:</p>
      <br />

      <div className="row">
        <div className="col-12 col-md-7">
          <h3> Todos: ({todos.length})</h3>
          <hr />
          <ul className="list-group list-group-flush">
            {todos.map((todo, index) => (
              <li
                className="list-group-item d-flex items-center justify-content-between"
                key={index}
              >
                <p>
                  {index + 1} - {todo.description}
                </p>
                <button className="btn btn-danger">Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-md-5">
          <h3> Add Todo</h3>
          <hr />
          <form onSubmit={handleSubmit} className="py-2">
            <input
              type="text"
              placeholder="Add a todo"
              name="description"
              autoComplete="off"
              className="form-control mb-3"
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
