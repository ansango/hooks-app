import { shallow } from "enzyme";
import { TodoList } from "../../../components/reducer/children/TodoList";
import { todos } from "../../fixtures/todos";
describe("Test in <TodoList/>", () => {
  const handleToggleTodo = jest.fn();
  const handleDeleteTodo = jest.fn();

  const wrapper = shallow(
    <TodoList
      todos={todos}
      handleDeleteTodo={handleDeleteTodo}
      handleToggleTodo={handleToggleTodo}
    />
  );
  test("should render component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should has three <TodoListItem/> components", () => {
    expect(wrapper.find("TodoListItem").length).toBe(todos.length);
    expect(wrapper.find("TodoListItem").at(0).prop("handleDeleteTodo")).toEqual(
      expect.any(Function)
    );
  });
});
