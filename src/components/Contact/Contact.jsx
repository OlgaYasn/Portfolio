import React from "react";
import github from "../../assets/images/logo_git.png";
import linkedin from "../../assets/images/linkedin.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact__page">
      <div></div>
      <div id="contact__container">
        <h1 className="first__title">&bull; Contact &bull;</h1>
        <div className="text__underline"></div>
        <div className="contact__logo">
          <a href="https://github.com/OlgaYasn" target="blank">
            <img src={github} className="github__logo" alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/olga-yasnopolskaya/"
            target="blank"
          >
            <img src={linkedin} className="linkedin__logo" alt="linkedin" />
          </a>{" "}
        </div>
        <form
          action="/contact/submit"
          name="contact"
          method="post"
          id="contact_form"
          data-netlify="true"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="form__name">
            <label for="name"></label>
            <input
              type="text"
              placeholder="Mon nom"
              name="name"
              id="name_input"
              required
            />
          </div>
          <div className="form__email">
            <label for="email"></label>
            <input
              type="email"
              placeholder="Mon email"
              name="email"
              id="email_input"
              required
            />
          </div>
          <div className="form__telephone">
            <label for="name"></label>
            <input
              type="text"
              placeholder="Mon numéro"
              name="telephone"
              id="telephone_input"
              required
            />
          </div>
          <div className="subject">
            <label for="subject"></label>
          </div>
          <div className="message">
            <label for="message"></label>
            <textarea
              name="message"
              placeholder="Mon message"
              id="message_input"
              cols="30"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="button_div">
            <button type="submit" className="form_button">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
