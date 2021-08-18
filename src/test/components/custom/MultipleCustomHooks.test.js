import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/custom/MultipleCustomHooks";

describe("Test in <MultipleCustomHooks/>", () => {
  test("should be rendered", () => {
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });
});
