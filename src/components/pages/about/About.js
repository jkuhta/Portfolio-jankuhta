import React from "react";
import AboutImg from "../../../assets/about.jpg";
import CV from "../../../assets/jan-kuhta_CV_ENG.pdf";
import Info from "./Info";
import "./About.css";

function About({toggleTab}) {
    return (
        <>
            <section className="about section" id="about">
                <h2 className="section__title">About Me</h2>
                <span className="section__subtitle">My Introduction</span>
                <div className="about__container container grid">
                    <img src={AboutImg} alt="" className="about__img"/>
                    <div className="about__data">
                        <Info toggleTab={toggleTab}/>
                        <p className="about__description">
                            I'm a Computer Science master’s student at TU Delft, with previous
                            experience as a Full-Stack Developer at Medius.si. I enjoy building web
                            applications, tackling challenging problems, and exploring areas like
                            Machine Learning, Computer Vision, and Web Development. I’m always
                            looking
                            for opportunities to learn, grow, and take on new challenges.
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