import React from "react";
import gymnaste from "../../assets/images/gymnaste.jpg";
import cocktail from "../../assets/images/cocktail.jpg";
import travel from "../../assets/images/travel.jpg";
import jobs from "../../assets/images/jobs.jpg";

import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio_images">
      <div className="project__bloc">
        <div className="project__title">
          <h1> Projet 1 </h1>
          <h2>Wild Circus </h2>
        </div>
        <img src={gymnaste} className="p_image" alt="gymnaste" />
      </div>
      <div className="project__bloc">
        <div className="project__title">
          <h1> Projet 2 </h1> <h2>Drink'r</h2>{" "}
        </div>
        <img src={cocktail} className="p_image" alt="cocktai" />
      </div>
      <div className="project__bloc">
        <div className="project__title">
          <h1> Hackaton </h1>
          <h2>Voyage sans retour </h2>
        </div>
        <img src={travel} className="p_image" alt="travel" />
      </div>
      <div className="project__bloc">
        <div className="project__title">
          <h1>Projet 3 </h1> <h2>WorkIt</h2>
        </div>
        <img src={jobs} className="p_image" alt="jobs" />
      </div>
    </div>
  );
};

export default Portfolio;
