import { Container } from "./components/Container";

import * as modules from "./components/";

const components = Object.entries(modules);

export const HooksApp = () => {
  return (
    <div className="App">
      <Container>
        <h1>Samples Hooks</h1>
      </Container>
      {components.map((module, index) => {
        const name = module[0];
        const Component = module[1];
        return (
          <Container key={index} title={name}>
            <Component />
          </Container>
        );
      })}
    </div>
  );
};
