import { Container } from "./components/Container";

import * as modules from "./components/";

const components = Object.entries(modules);

export const HooksApp = () => {
  return (
    <div className="App">
      <Container>
        <h1>Hooks Samples</h1>
        <a
          href="https://github.com/ansango/hooks-app"
          target="_blank"
          rel="noreferrer"
        >
          Code
        </a>
        <a className="mx-3" href="https://github.com/ansango/custom-hooks">
          Custom Hooks code
        </a>
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
