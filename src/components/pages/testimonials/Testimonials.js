import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <>
      <section className="testimonials section" id="testimonials">
        <h1 className="section__title">Testimonials</h1>
        <span className="section__subtitle">My clients say</span>
        <div className="testimonials__container container grid"></div>
      </section>
    </>
  );
};

export default Testimonials;
