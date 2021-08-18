import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { NavBar } from "./children/NavBar";
import { AboutPage } from "./children/pages/AboutPage";
import { HomePage } from "./children/pages/HomePage";
import { LoginPage } from "./children/pages/LoginPage";

const routes = [
  { path: "/", component: HomePage, name: "Home" },
  { path: "/about", component: AboutPage, name: "About" },
  { path: "/login", component: LoginPage, name: "Login" },
];

export const AppRouter = () => {
  return (
    <Router>
      <NavBar routes={routes} />

      <Switch>
        {routes.map((route) => (
          <Route
            exact
            key={route.name}
            path={route.path}
            component={route.component}
          />
        ))}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
