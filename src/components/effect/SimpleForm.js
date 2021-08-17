import { useEffect, useState } from "react";
import { Message } from "./Message";
import "./SimpleForm.css";
export const SimpleForm = () => {
  const [formState, setFormState] = useState({ name: "", email: "" });
  const { name, email } = formState;
  useEffect(() => {
    console.log("una ejecución");
  }, []);
  useEffect(() => {
    console.log("formState cambió a:", formState);
  }, [formState]);

  useEffect(() => {
    console.log("formState cambió a:", formState);
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: [target.value] });
  };
  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group my-1">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your Name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group my-1">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Your Email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {name == "123" && <Message />}
    </>
  );
};
