import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Test useForm Hook", () => {
  const initialForm = {
    name: "Anibal",
    email: "anibalsantosgo@gmail.com",
  };
  test("should return default values (a default form)", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;
    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });
  test("should change form value (name)", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() => handleInputChange({ target: { name: "name", value: "Juan" } }));
    const [values] = result.current;
    expect(values).toEqual({ ...initialForm, name: "Juan" });
  });
  test("should reset form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, , reset] = result.current;
    act(() => reset());
    const [values] = result.current;
    expect(values).toEqual(initialForm);
  });
});
