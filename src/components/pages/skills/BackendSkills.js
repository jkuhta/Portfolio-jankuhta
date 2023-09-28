import React from "react";
import "./Skills.css";

const BackendSkills = () => {
  const skillsData = [
    { name: "Python", level: "Advanced" },
    { name: "Java", level: "Intermediate" },
    { name: "SQL", level: "Basic" },
    { name: "NodeJS", level: "Basic" },
  ];
  return (
    <>
      <div className="skills__content">
        <h3 className="skills__title">Backend</h3>
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

export default BackendSkills;
