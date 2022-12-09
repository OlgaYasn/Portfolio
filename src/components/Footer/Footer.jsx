import React from "react";
import logogit from "../../assets/images/logo_git.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h2> Développeuse web junior - olga_yasn@hotmail.com - Bordeaux </h2>
      <a href="https://github.com/OlgaYasn">
        {" "}
        <img src={logogit} className="logo_git" alt="logo_git" />{" "}
      </a>
    </div>
  );
};

export default Footer;
