import React from "react";

const Info = () => {
  return (
    <>
      <div className="about__info grid">
        <div className="about__box">
          <i className="uil uil-user-circle about__icon"></i>
          <h3 className="about__title">Age</h3>
          <span className="about__subtitle">23 years old</span>
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

        <div className="about__box">
          <i className="uil uil-briefcase-alt about__icon"></i>
          <h3 className="about__title">Experience</h3>
          <span className="about__subtitle">1 Year Working</span>
        </div>
        <div className="about__box">
          <i className="uil uil-medal about__icon"></i>
          <h3 className="about__title">Education</h3>
          <span className="about__subtitle">Bachlor's degree TBA</span>
        </div>
        <div className="about__box">
          <i className="uil uil-check-circle about__icon"></i>
          <h3 className="about__title">Completed</h3>
          <span className="about__subtitle">7+ projects</span>
        </div>
      </div>
    </>
  );
};

export default Info;
