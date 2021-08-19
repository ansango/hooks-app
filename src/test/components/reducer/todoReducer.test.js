import { todoReducer } from "../../../components/reducer/todoReducer";
import { todos } from "../../fixtures/todos";
import { generateId } from "../../../helpers/generateId";

describe("Test in todoReducer", () => {
  test("should return initial state", () => {
    const state = todoReducer(todos, {});
    expect(state).toEqual(todos);
  });

  test("should add a todo", () => {
    const newTodo = { id: generateId(), description: "Learn Vue", done: false };
    const action = { type: "add", payload: newTodo };
    const state = todoReducer(todos, action);

    expect(state.length).toEqual(4);
    expect(state).toEqual([...todos, newTodo]);
  });

  test("should delete a todo", () => {
    const action = { type: "delete", payload: 1 };
    const state = todoReducer(todos, action);

    expect(state).toEqual(todos.filter((todo) => todo.id !== action.payload));
  });

  test("should toggle a todo", () => {
    const action = { type: "toggle", payload: 2 };
    const state = todoReducer(todos, action);
    expect(state).toEqual(
      todos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      )
    );
  });
});
