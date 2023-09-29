import React from "react";
import AboutImg from "../../../assets/about.jpg";
import CV from "../../../assets/cv_jankuhta.pdf";
import Info from "./Info";
import "./About.css";

function About() {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>
        <div className="about__container container grid">
          <img src={AboutImg} alt="" className="about__img" />
          <div className="about__data">
            <Info />
            <p className="about__description">
              Computer Science Student, I am interested in Data Science,
              Compuuter Vision and Web Developement, I have work experience as
              QA Engineer and I am eager to gain new knowledge.
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
