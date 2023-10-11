import React from "react";
import "./Skills.css";

const OtherSkills = () => {
  const skillsData = [
    { name: "C", level: "Intermediate" },
    { name: "C++", level: "Basic" },
    { name: "Docker", level: "Basic" },
    { name: "Git", level: "Intermediate" },
    { name: "Photoshop", level: "Intermediate" },
    { name: "Illustrator", level: "Intermediate" },
    { name: "Jira", level: "Intermediate" },
    { name: "LaTeX", level: "Intermediate" },
  ];
  return (
    <>
      <div className="skills__content">
        <h3 className="skills__title">Other</h3>
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

export default OtherSkills;
