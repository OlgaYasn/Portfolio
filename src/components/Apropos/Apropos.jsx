import React from 'react';
import debout from "../../assets/images/photo_debout.JPG"
import "./Apropos.css"

const Apropos = () => {
    return (
      <div className="about__mainblock">
        <img src={debout} className="debout" alt="photo_femme" />
        <div className="description">
          <h1 className="about__maintitle"> A propos</h1>
          <p>
            Originaire de Saint-Pétersbourg, je suis venue en France à l'âge de
            17 ans afin d'y poursuivre mes études supérieures. C'est ainsi que
            j'ai intégré la faculté de droit de l'Université Jean Moulin Lyon
            III. En 2014, je suis venue à Bordeaux et je suis tombée absolument
            amoureuse de cette ville.{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
            repudiandae eaque ex quidem quam cumque? Ea asperiores totam harum
            sint placeat mollitia veniam, libero maxime non vel, quo assumenda
            molestias?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
            repudiandae eaque ex quidem quam cumque? Ea asperiores totam harum
            sint placeat mollitia veniam, libero maxime non vel, quo assumenda
            molestias? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Sapiente, repudiandae eaque ex quidem quam cumque? Ea asperiores
            totam harum sint placeat mollitia veniam, libero maxime non vel, quo
            assumenda molestias?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
            repudiandae eaque ex quidem quam cumque? Ea asperiores totam harum
            sint placeat mollitia veniam, libero maxime non vel, quo assumenda
            molestias?
          </p>
        </div>
      </div>
    );
};

export default Apropos;