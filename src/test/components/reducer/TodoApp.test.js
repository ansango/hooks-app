import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import { TodoApp } from "../../../components/reducer/TodoApp";
import { todos } from "../../fixtures/todos";

describe("Test <TodoApp/>", () => {
  const wrapper = shallow(<TodoApp />);
  Storage.prototype.setItem = jest.fn(() => {});
  test("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should add a todo", () => {
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find("TodoAdd").prop("handleAddTodo")(todos[0]);
      wrapper.find("TodoAdd").prop("handleAddTodo")(todos[1]);
      wrapper.find("TodoAdd").prop("handleAddTodo")(todos[2]);
    });

    expect(wrapper.find("h3.title").text().trim()).toBe("Todos: (3)");
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test("should delete a todo", () => {
    wrapper.find("TodoAdd").prop("handleAddTodo")(todos[0]);
    wrapper.find("TodoList").prop("handleDeleteTodo")(todos[0].id);
    expect(wrapper.find("h3.title").text().trim()).toBe("Todos: (0)");
  });
});
