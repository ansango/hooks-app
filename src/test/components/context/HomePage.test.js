import { mount } from "enzyme";
import { HomePage } from "../../../components/context/children/pages/HomePage";
import { UserContext } from "../../../components/context/children/UserContext";

describe("Test in <HomePage/>", () => {
  const user = {
    name: "Anibal",
    email: "anibalsantosgo@gmail.com",
  };
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomePage />
    </UserContext.Provider>
  );

  test("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
