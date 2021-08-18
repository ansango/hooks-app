import { useEffect, useState } from "react";
import { log } from "../../helpers/log";
import { Message } from "./children/Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({ name: "", email: "" });
  const { name, email } = formState;
  useEffect(() => {
    log("SimpleForm", "First execution");
  }, []);
  useEffect(() => {
    log("SimpleForm", formState);
  }, [formState]);

  useEffect(() => {
    log("SimpleForm", formState);
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: [target.value] });
  };
  return (
    <>
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
