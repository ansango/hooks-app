import { TodoAdd } from "../../../components/reducer/children/TodoAdd";
import { shallow } from "enzyme";

describe("Test <TodoAdd/>", () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);
  test("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should not to call add todo", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test("should call handleAddTodo", () => {
    const value = "Learn Vue";
    wrapper.find("input").simulate("change", {
      target: { value, name: "description" },
    });

    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      description: value,
      done: false,
      id: expect.any(String),
    });

    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
