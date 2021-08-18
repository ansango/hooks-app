import { useContext } from "react";
import { log } from "../../../../helpers/log";
import { Container } from "../Container";
import { UserContext } from "../UserContext";

export const HomePage = () => {
  const { user } = useContext(UserContext);
  log("MainApp - HomePage", user);
  return (
    <Container title="Home">
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </Container>
  );
};
