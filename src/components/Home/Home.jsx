import React from "react";
import { Link } from "react-router-dom";
import chargeur from "../../assets/images/chargeur.jpg";
import prises from "../../assets/images/prises.jpg";
import roue from "../../assets/images/roue.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="general__block">
      <div className="presentation__block">
        <h1> Olga Yasnopolskaya </h1>
        <h2>
          {" "}
          Développeuse Web junior <br /> Bordeaux{" "}
        </h2>
        <Link to="/portfolio">
          <button className="main__button"> En savoir plus </button>
        </Link>
      </div>
      <div className="home__images">
        <img src={chargeur} className="chargeur" alt="chargeur" />
        <img src={roue} className="roue" alt="roue" />
        <img src={prises} className="prises" alt="prises" />
      </div>
    </div>
  );
};

export default Home;
