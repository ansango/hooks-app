import { renderHook, act } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

const url = "https://www.breakingbadapi.com/api/quotes/1";
const urlErr = "https://reqres.in/apid/users?page=2";

describe("Test useFetch Hook", () => {
  test("should return data by default", () => {
    const { result } = renderHook(() => useFetch(url));
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test("should return data asked", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(url));
    await waitForNextUpdate();
    const { data, loading, error } = result.current;
    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test("should handle error in fetch", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(urlErr));
    await waitForNextUpdate();
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe("Error fetch data");
  });
});
