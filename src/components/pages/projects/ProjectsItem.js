import React, { useState } from "react";
import "./Projects.css";
import ProjectModal from "./ProjectModal";

function ProjectsItem({
  title,
  modalTitle,
  description,
  projectData,
  icon,
  labels,
  github_link,
  website,
  report,
  images,
}) {
  const [toggle, setToggle] = useState(0);
  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <div className="project__content">
      <div>
        <i className={`${icon} project__icon`}></i>
        <h3
          className="project__title"
          onClick={() => toggleTab(1)}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h3>
      </div>
      <span className="project__button" onClick={() => toggleTab(1)}>
        View More
        <i className="uil uil-arrow-right project__button-icon"></i>
      </span>

      <div>
        {toggle === 1 && (
          <ProjectModal
            title={title}
            modalTitle={modalTitle}
            description={description}
            projectData={projectData}
            icon={icon}
            labels={labels}
            github_link={github_link}
            website={website}
            report={report}
            toggleTab={toggleTab}
            images={images}
          />
        )}
      </div>
    </div>
  );
}

export default ProjectsItem;
