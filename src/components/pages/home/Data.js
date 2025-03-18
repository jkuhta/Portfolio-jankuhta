import React from "react";
import "./Home.css";

const Data = () => {
    return (
        <>
            <div className="home__data">
                <h1 className="home__title">Jan Kuhta</h1>
                <h3 className="home__subtitle">Software Developer</h3>
                <p className="home__description">
                    I'm a Software developer at Medius.si with a bachelor's degree in Computer Science.
                    I enjoy learning new things and building useful projects.
                    Soon, I'm starting my master's to keep growing both personally and professionally.
                </p>
                <a href="#contact" className="button button--flex">
                    Contact Me <i className="uil uil-message contact-icon"></i>
                </a>
            </div>
        </>
    );
};

export default Data;
