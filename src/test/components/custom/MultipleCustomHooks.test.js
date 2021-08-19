import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/custom/MultipleCustomHooks";
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";

jest.mock("../../../hooks/useFetch");
//jest.mock("../../../hooks/useCounter");

describe("Test in <MultipleCustomHooks/>", () => {
  // useCounter.mockReturnValue({
  //   counter: 10,
  //   increment: () => {},
  // });

  test("should be rendered", () => {
    useFetch.mockReturnValue({ data: null, loading: true, error: null });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should showing data", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Anibal", quote: "Hello World" }],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find(".alert").exists()).not.toBe(true);
    expect(wrapper.find("p").exists()).toBe(true);
    expect(wrapper.find("p").text()).toBe("Hello World");
    expect(wrapper.find("footer").text()).toBe("Anibal");
  });
});
