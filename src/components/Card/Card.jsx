import React from "react";
import { useState } from "react";
import "./Card.scss";

const Card = ({ card }) => {
  const [popUp, setPopUp] = useState(false);
  const handleClick = (e) => {
    setPopUp(!popUp);
  };
  const leave = () => {
    if (popUp === true) {
      setPopUp(false);
    }
  };
  return (
    <div className="project__bloc" onMouseLeave={leave}>
      <div key={card.id} className="project__title">
        <h1> {card.type_project} </h1>
        <h2>{card.name_project} </h2>
      </div>
      <img src={card.image_project} className="p_image" alt="image_projet" />
      <div className="content" onClick={handleClick}>
        <svg id="more-arrows">
          <polygon
            className="arrow-top"
            points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
          />
          <polygon
            className="arrow-middle"
            points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
          />
          <polygon
            className="arrow-bottom"
            points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
          />
        </svg>
      </div>
      {popUp && (
        <div className="hidden_block">
          <a href={card.github_link} target="blank">
            <img
              src={card.github_icon}
              className="github_image shake-bottom"
              alt="github"
            />
          </a>
          <a href={card.netlify_link} target="blank">
            <img
              src={card.netlify_icon}
              className="netlify_image shake-bottom"
              alt="netlify"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default Card;
