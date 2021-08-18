import { NavLink } from "react-router-dom";

export const NavBar = ({ routes }) => {
  return (
    <nav className="navbar navbar-light bg-light d-flex flex-row justify-content-end">
      <div className="navbar-nav">
        <div className="d-flex">
          {routes.map((route) => (
            <NavLink
              key={route.name}
              exact
              activeClassName="active"
              className="nav-item nav-link mx-3"
              to={route.path}
            >
              {route.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
