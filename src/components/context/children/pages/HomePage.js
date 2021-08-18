import { useContext } from "react";
import { log } from "../../../../helpers/log";
import { Container } from "../Container";
import { UserContext } from "../UserContext";

export const HomePage = () => {
  const userContext = useContext(UserContext);
  log("MainApp - HomePage",userContext)
  return <Container title="Home"></Container>;
};
