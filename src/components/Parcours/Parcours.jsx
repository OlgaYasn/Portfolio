import React from "react";
import debout from "../../assets/images/photo_debout.JPG";
import Pdf from "../../assets/documents/cv_web.pdf";
import { timeline } from "../../utils/portfolio";
import guillemets from "../../assets/images/guillemets2.png"
import guillemets2 from "../../assets/images/guillemets.png";
import "./Parcours.css";

const Apropos = () => {
  return (
    <div className="about__mainblock">
      <div className="introduction">
        <div className="image__div">
          <img src={debout} className="debout" alt="photo_femme" />{" "}
          <div className="download">
            {" "}
            <a href={Pdf} target="blank" className="link__download">
              Télécharger CV
            </a>
          </div>
        </div>
        <div className="about__me">
          <img src={guillemets} className="guillemets1" alt="guillemets" />
          <div className="description">
            <p className="mon__parcours">
              Originaire de Saint Pétersbourg, je suis venue en France à l'âge
              de 17 ans afin d'y suivre un cursus de droit.{" "}
            </p>{" "}
            <p className="mon__parcours">
              Après quelques années d'exercice en tant que juriste en droit social,
              j'ai pris la décision de me reconvertir dans le domaine du développement
              web en intégrant le bootcamp "Wild Code School" de Bordeaux.
            </p>
            <p className="mon__parcours">
              Aujourd'hui, je recherche une entreprise qui pourrait m'accueillir
              dans le cadre d'un <span className="underline_line">contrat d'alternance à compter de mars 2023.
            </span></p>
          </div>
          <img src={guillemets2} className="guillemets2" alt="guillemets" />
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
    </div>
  );
};

export default Apropos;
