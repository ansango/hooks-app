import { useContext } from "react";
import { log } from "../../../../helpers/log";
import { Container } from "../Container";
import { UserContext } from "../UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  log("MainApp - LoginPage", { user, setUser });
  return (
    <Container title="Login">
      <button
        className="btn btn-primary"
        onClick={() => setUser({ id: 123, name: "Anibal" })}
      >
        Login
      </button>
    </Container>
  );
};
