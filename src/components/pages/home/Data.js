import React from "react";
import "./Home.css";

const Data = () => {
    return (
        <>
            <div className="home__data">
                <h1 className="home__title">Jan Kuhta</h1>
                <h3 className="home__subtitle">MSc Computer Science student</h3>
                <p className="home__description">
                    I'm a Computer Science master’s student at TU Delft with experience as a
                    Full-Stack Developer and QA Tester. I enjoy learning new things and building
                    useful projects.
                </p>
                <a href="#contact" className="button button--flex">
                    Contact Me <i className="uil uil-message contact-icon"></i>
                </a>
            </div>
        </>
    );
};

export default Data;