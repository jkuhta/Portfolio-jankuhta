import React, { useState } from "react";
import "./Services.css";

function ServiceItem({ title, modalTitle, description, serviceData, icon }) {
  const [toggle, setToggle] = useState(0);
  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <div className="services__content">
      <div>
        <i className={`uil uil-${icon} services__icon`}></i>
        <h3
          className="services__title"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h3>
      </div>
      <span className="services__button" onClick={() => toggleTab(1)}>
        View More
        <i className="uil uil-arrow-right services__button-icon"></i>
      </span>

      <div
        className={
          toggle === 1 ? "services__modal active-modal" : "services__modal"
        }
      >
        <div className="services__modal-content">
          <div className="services__modal-icon">
            <i
              onClick={() => toggleTab(0)}
              className="uil uil-times services__modal-close"
            ></i>
            <h3
              className="services__modal-title"
              dangerouslySetInnerHTML={{ __html: modalTitle }}
            ></h3>
            <p className="services__modal-description">{description}</p>
            <ul className="services__modal-services grid">
              {serviceData.map((service, index) => (
                <li className="services__modal-service" key={index}>
                  <i className="uil uil-check-circle services modal-icon"></i>
                  <p className="services__modal-info">{service}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
