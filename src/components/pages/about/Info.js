import React from "react";

const Info = ({ toggleTab }) => {

  const birthDate = new Date(2000, 6, 17);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear() -
      (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate()) ? 1 : 0);

  return (
    <>
      <div className="about__info grid">
        <div className="about__box">
          <i className="uil uil-user-circle about__icon"></i>
          <h3 className="about__title">Age</h3>
          <span className="about__subtitle">{age} years old</span>
        </div>
        <div className="about__box">
          <i className="uil uil-location-point about__icon"></i>
          <h3 className="about__title">Country</h3>
          <span className="about__subtitle">Slovenia</span>
        </div>
        <div className="about__box">
          <i className="uil uil-globe about__icon"></i>
          <h3 className="about__title">Languages</h3>
          <span className="about__subtitle">SLO, ENG, GER, CRO</span>
        </div>

        <a
          href="#qualification"
          className="about__box "
          onClick={() => toggleTab(2)}
        >
          <i className="uil uil-briefcase-alt about__icon"></i>
          <h3 className="about__title">Experience</h3>
          <span className="about__subtitle">2 Years Working</span>
        </a>
        <a
          href="#qualification"
          className="about__box"
          onClick={() => toggleTab(1)}
        >
          <i className="uil uil-medal about__icon"></i>
          <h3 className="about__title">Education</h3>
          <span className="about__subtitle">Bachlor's degree</span>
        </a>
        <a href="#projects" className="about__box">
          <i className="uil uil-check-circle about__icon"></i>
          <h3 className="about__title">Completed</h3>
          <span className="about__subtitle">9+ projects</span>
        </a>
      </div>
    </>
  );
};

export default Info;
