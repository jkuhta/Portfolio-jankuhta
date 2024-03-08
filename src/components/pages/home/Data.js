import React from "react";
import "./Home.css";

const Data = () => {
  return (
    <>
      <div className="home__data">
        <h1 className="home__title">Jan Kuhta</h1>
        <h3 className="home__subtitle">Computer Science Engineer</h3>
        <p className="home__description">
          Having successfully completed my bachelor's thesis, I'm keen to
          explore new opportunities to apply my skills and passion. Next on the
          agenda: diving into master's studies.
        </p>
        <a href="#contact" className="button button--flex">
          Contact Me <i className="uil uil-message contact-icon"></i>
        </a>
      </div>
    </>
  );
};

export default Data;
