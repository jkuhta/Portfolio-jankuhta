import React from "react";
import "./Interests.css";

import { interestItems } from "./Data";
import InterestSwiper from "./InterestSwiper";

const Interests = () => {
  return (
    <>
      <section className="interest section" id="interests">
        <h1 className="section__title">Interests</h1>
        <span className="section__subtitle">What I do in my free time</span>
        <div className="interest__container container grid">
          {interestItems.map((item) => (
            <div className="interest__content" key={item.id}>
              <h3 className="interest__title">
                <i className={`${item.icon} interest__icon`}></i>
                <span className="interest__title-text">{item.title}</span>
              </h3>
              <div className="interest__box">
                <InterestSwiper item={item} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Interests;
