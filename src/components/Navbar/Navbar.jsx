import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="myName"> Olga YASNOPOLSKAYA</h1>
      <ul className="links">
        <Link to="/">
          <li>Accueil</li>
        </Link>
        <Link to="/portfolio">
          <li>Portfolio</li>
        </Link>
        <Link to="/apropos">
          <li>A propos</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
