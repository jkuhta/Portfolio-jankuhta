import React from "react";
import "./Home.css";

const Data = () => {
  return (
    <>
      <div className="home__data">
        <h1 className="home__title">Jan Kuhta</h1>
        <h3 className="home__subtitle">Computer Science Student</h3>
        <p className="home__description">
          I am finishing my bachlor thesis, I am very passionate and dedicated
          to my work, and open to new opportunities.
        </p>
        <a href="#contact" className="button button--flex">
          Contact Me <i className="uil uil-message contact-icon"></i>
        </a>
      </div>
    </>
  );
};

export default Data;
