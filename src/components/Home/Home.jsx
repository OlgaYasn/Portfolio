import React from "react";
import { Link } from "react-router-dom";
import chargeur from "../../assets/images/chargeur.jpg";
import clavier from "../../assets/images/clavier.jpg";
import chat from "../../assets/images/chat.jpg";

import "./Home.css";

const Home = () => {
  return (
    <div className="general__block">
      <div className="presentation__block">
        <h1> Olga Yasnopolskaya </h1>
        <h2>
          {" "}
          Développeuse Web Full-Stack junior <br /> Bordeaux{" "}
        </h2>
        <Link to="/portfolio">
          <button className="main__button"> En savoir plus </button>
        </Link>
      </div>
      <div className="home__images">
        <img src={chargeur} className="chargeur" alt="chargeur" />
        <img src={chat} className="chat" alt="chat" />
        <img src={clavier} className="clavier" alt="clavier" />
      </div>
    </div>
  );
};

export default Home;
