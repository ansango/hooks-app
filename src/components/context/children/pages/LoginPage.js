import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { log } from "../../../../helpers/log";
import { Container } from "../Container";
import { UserContext } from "../UserContext";

export const LoginPage = () => {
  const { push: goTo } = useHistory();
  const { user, setUser } = useContext(UserContext);
  log("MainApp - LoginPage", { user, setUser });

  const handleClick = () => {
    setUser({ id: 123, name: "Anibal" });
    goTo("/");
  };
  return (
    <Container title="Login">
      <button className="btn btn-primary" onClick={handleClick}>
        Login
      </button>
    </Container>
  );
};
