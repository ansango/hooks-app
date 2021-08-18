import { useEffect, useRef, useState } from "react";
import { log } from "../helpers/log";

export const useFetch = (url) => {
  // estado

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  // montaje/desmontaje por referencia

  const isMounted = useRef(true);
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  // petición con delay

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) =>
        setTimeout(() => {
          if (isMounted.current) {
            setState({ loading: false, error: null, data });
          } else {
            log("useFetch Hook - ", "setState not called");
          }
        }, 4000)
      );
  }, [url]);

  return state;
};
