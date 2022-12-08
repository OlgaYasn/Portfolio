import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="myName"> Olga YASNOPOLSKAYA</h1>
      <ul className="links">
        <li>
          {" "}
          <NavLink exact activeClassName="active" to="/">
            Accueil{" "}
          </NavLink>
        </li>

        <li>
          <NavLink activeClassName="active" to="/portfolio">
            Portfolio
          </NavLink>
        </li>

        <li>
          <NavLink activeClassName="active" to="/apropos">
            A propos{" "}
          </NavLink>
        </li>

        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact{" "}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
