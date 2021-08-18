import { useContext } from "react";
import { log } from "../../../../helpers/log";
import { Container } from "../Container";
import { UserContext } from "../UserContext";

export const LogoutPage = () => {
  const { user, setUser } = useContext(UserContext);
  log("MainApp - LogoutPage", { user, setUser });

  const handleClick = () => setUser({});
  return (
    <Container title="Logout">
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button className="btn btn-warning" onClick={handleClick}>
        Logout
      </button>
    </Container>
  );
};
