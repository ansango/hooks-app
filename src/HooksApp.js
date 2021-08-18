import { Container } from "./components/Container";

import * as modules from "./components/";

const components = Object.values(modules).map((module) => {
  return { name: module.name, component: module };
});

export const HooksApp = () => {
  return (
    <div className="App">
      <Container>
        <h1>Samples Hooks</h1>
      </Container>
      {components.map((module, index) => (
        <Container key={index} title={module.name}>
          <module.component></module.component>
        </Container>
      ))}
    </div>
  );
};
