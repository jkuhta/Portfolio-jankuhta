import React from "react";
import "./Skills.css";

const FrontendSkills = () => {
  const skillsData = [
    { name: "HTML", level: "Intermediate" },
    { name: "CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Intermediate" },
    { name: "TypeScript", level: "Basic" },
    { name: "Angular", level: "Basic" },
  ];
  return (
    <>
      <div className="skills__content">
        <h3 className="skills__title">Frontend</h3>
        <div className="skills__box">
          <div className="skills__group">
            {skillsData.map((skill, index) => (
              <div key={index} className="skills__data">
                <i className="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills__name">{skill.name}</h3>
                  <span className="skills__level">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontendSkills;
