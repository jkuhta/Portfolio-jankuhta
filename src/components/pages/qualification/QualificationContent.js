import React from "react";
import "./Qualification.css";

const QualificationContent = ({ qualificationItems, status }) => {
  return (
    <>
      {qualificationItems.map((item, index) => (
        <div className="qualification__data" key={index}>
          {item.type === 0 && (
            <>
              <div></div>
              <div className="qualification__dividor">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </>
          )}
          <div>
            <h3 className="qualification__title">{item.title}</h3>
            <span className="qualification__subtitle">{item.subtitle}</span>
            <div className="qualification__calendar">
              <i className="uil uil-calendar-alt"></i> {item.duration}
            </div>
          </div>
          {item.type === 1 && (
            <div className="qualification__dividor">
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default QualificationContent;
