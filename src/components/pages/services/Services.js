import React from "react";
import "./Services.css";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const serviceData = [
    "I develop the user interface.",
    "Web page development.",
    "I create UX element interactions.",
    "I position your company brand.",
    "Design and mockups for companies.",
  ];
  return (
    <>
      <section className="services section" id="services">
        <h1 className="section__title">Services</h1>
        <span className="section__subtitle">What I offer</span>
        <div className="services__container container grid">
          <ServiceItem
            title="Product <br/> Designer"
            modalTitle="Product Designer"
            description="Service with more than 3 years of experience. Providing quality work to clients and companies."
            serviceData={serviceData}
            icon="web-grid"
          />
          <ServiceItem
            title="Ui/Ux <br/> Designer"
            modalTitle="UI/UX Designer"
            description="Service with more than 3 years of experience. Providing quality work to clients and companies."
            serviceData={serviceData}
            icon="arrow"
          />
          <ServiceItem
            title="Visual <br/> Designer"
            modalTitle="Visual Designer"
            description="Service with more than 3 years of experience. Providing quality work to clients and companies."
            serviceData={serviceData}
            icon="edit"
          />
        </div>
      </section>
    </>
  );
};

export default Services;
