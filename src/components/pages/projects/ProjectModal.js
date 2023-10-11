import React from "react";
import { createPortal } from "react-dom";
import "./Projects.css";

const ProjectModal = ({
  title,
  modalTitle,
  description,
  projectData,
  icon,
  labels,
  github_link,
  website,
  report,
  toggleTab,
  images,
}) => {
  return createPortal(
    <div className="project__modal active-modal">
      <div className="project__modal-content">
        <div className="">
          <i
            onClick={() => toggleTab(0)}
            className="uil uil-times project__modal-close"
          ></i>
          <div className="project__modal-head-icon">
            <i className={`${icon} project__icon`}></i>
          </div>

          <h3
            className="project__modal-title"
            dangerouslySetInnerHTML={{ __html: modalTitle }}
          ></h3>
          <p className="project__modal-description">{description}</p>

          <div className="project__modal-labels">
            {labels.map((label, index) => (
              <div className="project__modal-label" key={index}>
                <span className="project__modal-label-text">{label}</span>
              </div>
            ))}
          </div>
          <div className="project__modal-links">
            {github_link && (
              <a
                href={github_link}
                className="project__link-icon"
                target="blank"
              >
                <i className="uil uil-github"></i>
              </a>
            )}
            {website && (
              <a href={website} className="project__link-icon" target="blank">
                <i className="uil uil-globe"></i>
              </a>
            )}
            {report && (
              <a href={report} className="project__link-icon" download>
                <i className="uil uil-file-download-alt"></i>
              </a>
            )}
            {images && (
              <a href={images} className="project__link-icon">
                <i className="uil uil-images"></i>
              </a>
            )}
          </div>
          <ul className="project__modal-project grid">
            {projectData.map((project, index) => (
              <li className="project__modal-project" key={index}>
                <i className="uil uil-check-circle project__modal-icon"></i>
                <p className="project__modal-info">{project}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default ProjectModal;
