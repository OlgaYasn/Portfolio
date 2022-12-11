import React from "react";
import debout from "../../assets/images/photo_debout.JPG";
import Pdf from "../../assets/documents/cv_web.pdf";
import { timeline } from "../../utils/portfolio";
import "./Parcours.css";

const Apropos = () => {
  return (
    <div className="about__mainblock">
      <div className="image__div">
        <img src={debout} className="debout" alt="photo_femme" />{" "}
        <div className="download">
          {" "}
          <a href={Pdf} target="blank" className="link__download">
            Télécharger CV
          </a>
        </div>
      </div>
      <div className="parcours">
        <div class="timeline">
          <ul>
            {timeline.map((el) => (
              <li key={el.id}>
                <h2>{el.year}</h2>
                <div className={el.class_timeline}>
                  <h3>{el.evenement}</h3>
                  {el.commentaire && <p>{el.commentaire}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="description">
        <h1 className="about__maintitle"> Mon parcours</h1>
        <p></p>
      </div>
    </div>
  );
};

export default Apropos;
