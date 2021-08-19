import { AppRouter } from "../../../components/context/AppRouter";
import { UserContext } from "../../../components/context/children/UserContext";
import { mount } from "enzyme";

describe("Test in <AppRouter/>", () => {
  const user = { id: 123, name: "Anibal" };
  const setUser = jest.fn();
  const wrapper = mount(
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
  test("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
