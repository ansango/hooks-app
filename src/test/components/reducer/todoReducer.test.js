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
});
