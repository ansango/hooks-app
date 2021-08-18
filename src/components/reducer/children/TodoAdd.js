import { generateId } from "../../../helpers/generateId";
import { useForm } from "../../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length !== 0) {
      const newTodo = {
        id: generateId(),
        description: description,
        done: false,
      };

      handleAddTodo(newTodo);
      reset();
    }
  };
  return (
    <>
      <h3> Add Todo</h3>
      <hr />
      <form onSubmit={handleSubmit} className="py-2">
        <input
          type="text"
          placeholder="Add a todo"
          name="description"
          autoComplete="off"
          className="form-control mb-3"
          value={description}
          onChange={handleInputChange}
        />
        <button className="btn btn-outline-primary w-100" type="submit">
          Add
        </button>
      </form>
    </>
  );
};
