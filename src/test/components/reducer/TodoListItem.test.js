import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/reducer/children/TodoListItem";
import { todos } from "../../fixtures/todos";
describe("Test in <TodoListItem/>", () => {
  const handleDeleteTodo = jest.fn();
  const handleToggleTodo = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={todos[0]}
      index={0}
      handleDeleteTodo={handleDeleteTodo}
      handleToggleTodo={handleToggleTodo}
    />
  );
  test("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should call delete function", () => {
    wrapper.find("button").simulate("click");
    expect(handleDeleteTodo).toHaveBeenCalledWith(todos[0].id);
  });
  test("should call toggle function", () => {
    wrapper.find("p").simulate("click");
    expect(handleToggleTodo).toHaveBeenCalledWith(todos[0].id);
  });

  test("should has class complete if todo is done", () => {
    todos[0].done = true;
    const wrapper = shallow(<TodoListItem todo={todos[0]} index={0} />);
    expect(wrapper.find("p").hasClass("complete")).toBe(true);
  });
  test("should render correct text", () => {
    const p = wrapper.find("p");
    expect(p.text()).toBe(`${0 + 1}. ${todos[0].description}`);
  });
});
