import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/ref/RealExampleRef";

describe("Test in <RealExampleRef/>", () => {
  const wrapper = shallow(<RealExampleRef />);
  test("should render", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("MultipleCustomHooks").exists()).not.toBe(true);
  });

  test("should show <MultipleCustomHooks/>", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
  });
});
