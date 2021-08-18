import { shallow } from "enzyme";
import { HooksApp } from "../HooksApp";

describe("Test in HooksApp", () => {
  test("should render", () => {
    const wrapper = shallow(<HooksApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
