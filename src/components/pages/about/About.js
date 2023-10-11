import React from "react";
import AboutImg from "../../../assets/about.jpg";
import CV from "../../../assets/jankuhta_cv_eng.pdf";
import Info from "./Info";
import "./About.css";

function About({ toggleTab }) {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>
        <div className="about__container container grid">
          <img src={AboutImg} alt="" className="about__img" />
          <div className="about__data">
            <Info toggleTab={toggleTab} />
            <p className="about__description">
              As a Computer Science student with a diverse skill set, I'm eager
              to explore fields of Data Science, Computer Vision and Web
              Development. Coming from a QA Engineering background, I bring a
              sharp eye for detail and a commitment to quality. I'm enthusiastic
              about expanding my knowledge in these fields.
            </p>
            <div className="button__cv">
              <a download="" href={CV} className="button button--flex">
                Download CV
                <i className="uil uil-file-download-alt button__cv-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
