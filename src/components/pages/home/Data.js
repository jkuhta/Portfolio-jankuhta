import React from "react";
import "./Home.css";

const Data = () => {
  return (
    <>
      <div className="home__data">
        <h1 className="home__title">Jan Kuhta</h1>
        <h3 className="home__subtitle">Full-Stack Developer</h3>
        <p className="home__description">
          I'm an enthusiastic Full-Stack Developer at Medius.si, holding a
          bachelor's degree in Computer Science, driven by a passion for
          learning and soon embarking on a master's journey.
        </p>
        <a href="#contact" className="button button--flex">
          Contact Me <i className="uil uil-message contact-icon"></i>
        </a>
      </div>
    </>
  );
};

export default Data;
