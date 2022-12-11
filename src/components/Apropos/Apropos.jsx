import React from "react";
import debout from "../../assets/images/photo_debout.JPG";
import Pdf from "../../assets/documents/cv_web.pdf";
import "./Apropos.css";

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
      <div className="description">
        <h1 className="about__maintitle"> A propos</h1>
        <div class="timeline">
          <ul>
            <li>
              <h2>2011-2014</h2>
              <div class="container">
                <h3>
                  Licence Droit International et Droit Européen (Université Jean
                  Moulin Lyon III)
                </h3>
                <p>
                  Originaire de Saint-Pétersbourg, je suis venue en France à
                  l'âge de 17 ans afin d'y suivre le cursus de Droit
                </p>
              </div>
            </li>
            <li>
              <h2>2014</h2>
              <div class="container">
                <h3>
                  Déménagement à Bordeaux et inscription à l'Université Bordeaux
                  IV
                </h3>
              </div>
            </li>
            <li>
              <h2>2018</h2>
              <div class="container">
                <h3>
                  Obtention d'un double Master II dans le domaine du droit
                  social (Université Bordeaux IV)
                </h3>
                <p>
                  - Master II "Droit du travail et de la protection sociale"
                  (mémoire de recherche) <br /> - Master II "Droit de l'emploi
                  et des relations sociales" (réalisé en alternance)
                </p>
              </div>
            </li>
            <li>
              <h2>Octobre 2017 - Avril 2019</h2>
              <div class="container">
                <h3>Poste de Chargée d'Affaires sociales (Groupe Pichet)</h3>
                <p>
                  Assistance aux RRH sur les questions du droit du travail
                  (individuel et collectif)
                </p>
              </div>
            </li>
            <li>
              <h2>Mai 2019 - Juillet 2022</h2>
              <div class="container">
                <h3>Poste de Juriste en droit social (GIE Elsan)</h3>
                <p>
                  Le conseil juridique auprès des établissements de santé du
                  groupe Elsan
                </p>
              </div>
            </li>
            <li>
              <h2>Septembre 2022 - Février 2023</h2>
              <div class="container">
                <h3>
                  Formation Développeur Web Full-Stack (Wild Code School de
                  Bordeaux)
                </h3>
                <p>
                  Formation intensive de 5 mois centrée sur les technologies
                  suivantes :{" "}
                  <span className="techno">
                    {" "}
                    HTML, CSS, JavaScript, React, Node.js, Express, MySQL
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Apropos;
