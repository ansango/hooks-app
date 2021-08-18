import { Container } from "./components/Container";

import * as modules from "./components/";

const components = Object.values(modules);

export const HooksApp = () => {
  return (
    <div className="App">
      <Container>
        <h1>Samples Hooks</h1>
      </Container>
      {components.map((Component, index) => (
        <Container key={index}>
          <Component></Component>
        </Container>
      ))}
    </div>
  );
};
