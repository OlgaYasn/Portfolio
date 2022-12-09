import React from "react";
import { data } from "../../utils/portfolio";
import Card from "../Card/Card";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div className="portfolio_images">
      {data.map((card) => (
        <Card key={card.id} card={card}/>
      ))}
    </div>
  );
};

export default Portfolio;
