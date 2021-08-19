import { mount } from "enzyme";
//import { useHistory } from "react-router-dom";
import { LoginPage } from "../../../components/context/children/pages/LoginPage";
import { UserContext } from "../../../components/context/children/UserContext";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({ push: jest.fn() }),
}));

describe("Test in <LoginPage/>", () => {
  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginPage />
    </UserContext.Provider>
  );

  test("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should set user", () => {
    wrapper.find("button").prop("onClick")();
    expect(setUser).toHaveBeenCalledWith({ id: 123, name: "Anibal" });
  });
});
