import { log } from "../../helpers/log";
import { useForm } from "../../hooks/useForm";

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    log("FormWithCustomHook", formValues);
  };
  return (
    <form onSubmit={handleSubmit}>
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
      <div className="form-group my-1">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="****"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  );
};
