import React from "react";
import "./Skills.css";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import OtherSkills from "./OtherSkills";

const Skills = () => {
  return (
    <>
      <section className="skills section" id="skills">
        <h1 className="section__title">Skills</h1>
        <span className="section__subtitle">My technical level</span>
        <div className="skills__container container grid">
          <FrontendSkills />
          <BackendSkills />
          <OtherSkills />
        </div>
      </section>
    </>
  );
};

export default Skills;
