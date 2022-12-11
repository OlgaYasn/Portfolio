import gymnaste from "../assets/images/gymnaste.jpg";
import cocktail from "../assets/images/cocktail.jpg";
import travel from "../assets/images/travel.jpg";
import jobs from "../assets/images/jobs.jpg";
import logogit from "../assets/images/logo_git.png";
import netlify from "../assets/images/netlify.png";

export const data = [
  {
    id: 1,
    type_project: "Projet 1",
    name_project: "Wild Circus",
    image_project: gymnaste,
    github_icon: logogit,
    github_link: "https://github.com/OlgaYasn/Wild-Circus",
    netlify_icon: netlify,
    netlify_link: "https://circus-wild.netlify.app/",
  },
  {
    id: 2,
    type_project: "Projet 2",
    name_project: "Drink'r",
    image_project: cocktail,
    github_icon: logogit,
    github_link: "https://github.com/OlgaYasn/Drink-r_-projet2-",
    netlify_icon: netlify,
    netlify_link: "https://drink-r.netlify.app/",
  },
  {
    id: 3,
    type_project: "Hackathon",
    name_project: "Voyage sans retour",
    image_project: travel,
    github_icon: logogit,
    github_link: "https://github.com/OlgaYasn/Voyage_sans_retour",
    netlify_icon: netlify,
    netlify_link: "à venir",
  },
  {
    id: 4,
    type_project: "Projet 3",
    name_project: "WorkIt",
    image_project: jobs,
    github_icon: logogit,
    github_link: "à venir",
    netlify_icon: netlify,
    netlify_link: "à venir",
  },
];

export const timeline = [
  {
    id: 1,
    year: "2011-2014",
    class_timeline: "container",
    evenement:
      "Licence Droit International et Droit Européen (Université Jean Moulin Lyon III)",
  },
  {
    id: 2,
    year: "2014",
    class_timeline: "container",
    evenement:
      "Déménagement à Bordeaux et inscription à l'Université Bordeaux IV",
  },
  {
    id: 3,
    year: "2018",
    class_timeline: "container",
    evenement:
      "Obtention d'un double Master II dans le domaine du droit social (Université Bordeaux IV)",
    commentaire:
      "Master II Droit du travail et de la protection sociale (mémoire de recherche) et Master II Droit de l'emploi et des relations sociales (réalisé en alternance)",
  },
  {
    id: 4,
    year: "Octobre 2017 - Avril 2019",
    class_timeline: "container",
    evenement: "Poste de Chargée d'Affaires sociales (Groupe Pichet)",
    commentaire:
      "Assistance aux RRH sur les questions du droit du travail (individuel et collectif)",
  },

  {
    id: 5,
    year: "Mai 2019 - Juillet 2022",
    class_timeline: "container",
    evenement: "Poste de Juriste en droit social (GIE Elsan)",
    commentaire:
      "Le conseil juridique auprès des établissements de santé du groupe Elsan",
  },

  {
    id: 6,
    year: "Septembre 2022 - Février 2023",
    class_timeline: "container",
    evenement:
      "Formation Développeur Web Full-Stack (Wild Code School de Bordeaux)",
    commentaire:
      "Formation intensive de 5 mois orientée sur les technologies                   suivantes : HTML, CSS, JavaScript, React, Node.js, Express, MySQL",
  },
];
