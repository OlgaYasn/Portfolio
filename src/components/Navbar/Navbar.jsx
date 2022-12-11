import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="myName"> Olga YASNOPOLSKAYA</h1>{" "}
      </Link>
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
          <NavLink activeClassName="active" to="/parcours">
            Mon parcours{" "}
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
