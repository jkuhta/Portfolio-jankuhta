import "./Qualification.css";
import QualificationContent from "./QualificationContent";

const Qualification = ({ toggleTab, toggle }) => {
  const educationItems = [
    {
      title: "Computer and Information Science",
      subtitle:
        "University of Ljubljana Faculty of Computer and Information Science",
      duration: "2020 - 2024",
      award: "Bachelor's Degree",
      type: 1,
    },
    {
      title: "High School",
      subtitle: "II. gimnazija Maribor",
      duration: "2015 - 2019",
      award: "High School Diploma",
      type: 0,
    },

    // {
    //   title: "Data Science Master",
    //   subtitle: "TBA",
    //   duration: "2024 - Future",
    //   type: 1,
    // },
  ];
  const experienceItems = [
    {
      title: "Full - Stack Developer",
      subtitle: "Medius.si",
      duration: "2024 - Present",
      type: 1,
    },
    {
      title: "Web QA Tester",
      subtitle: "Plume Design, inc.",
      duration: "2022 - 2023",
      type: 0,
    },
    {
      title: "Bike retail sales",
      subtitle: "Freestyle d.o.o",
      duration: "2020 - 2021",
      type: 1,
    },
  ];

  return (
    <>
      <section className="qualification section" id="qualification">
        <h1 className="section__title">Qualification</h1>
        <span className="section__subtitle">My personal journey</span>
        <div className="qualification__container container grid">
          <div className="qualification__tabs">
            <div
              className={
                toggle === 1
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>
            <div
              className={
                toggle === 2
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Experience
            </div>
          </div>
          <div className="qualification__sections">
            <div
              className={
                toggle === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <QualificationContent qualificationItems={educationItems} />
            </div>
            <div
              className={
                toggle === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <QualificationContent qualificationItems={experienceItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualification;
