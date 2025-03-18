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
                            I'm a Computer Science graduate working as a Full-Stack Developer at Medius.si. I enjoy
                            building web applications and solving problems, with experience in both frontend and backend
                            development and a strong eye for detail from my QA Engineering background. <br/>
                            I’m especially interested in Data Science, Computer Vision, and Web Development, and I’m
                            always looking for ways to learn and grow. Next, I’ll be starting my master’s studies to
                            dive deeper into these fields and take on new challenges.
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
