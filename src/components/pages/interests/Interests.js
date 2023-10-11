import React, { useState, useEffect } from "react";
import "./Interests.css";

import { interestItems } from "./Data";
import InterestSwiper from "./InterestSwiper";

const Interests = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleTab = (itemId) => {
    setSelectedItemId(selectedItemId === itemId ? null : itemId);
    setIsModalOpen(!isModalOpen); // Toggle modal state
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (selectedItemId !== null && !event.target.closest(".interest__box")) {
        setSelectedItemId(null);
        setIsModalOpen(false); // Close the modal
      }
    };

    if (selectedItemId !== null) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [selectedItemId]);

  return (
    <>
      <section className="interest section" id="interests">
        <h1 className="section__title">Interests</h1>
        <span className="section__subtitle">What I do in my free time</span>
        <div className="interest__container container grid">
          {interestItems.map((item) => (
            <div key={item.id}>
              <div className="show-swiper">
                <InterestSwiper
                  item={item}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              </div>
              <div className="show-grid">
                <div
                  className="interest__content interest__content-small"
                  key={item.id}
                  onClick={() => toggleTab(item.id)}
                >
                  <div className="interest__title interest__title-small">
                    <i
                      className={`${item.icon} interest__icon interest__icon-small`}
                    ></i>
                    <span className="interest__title-text">{item.title}</span>
                  </div>
                </div>
              </div>
              <div>
                {selectedItemId === item.id && (
                  <div className="interest__modal">
                    <InterestSwiper
                      item={item}
                      isModalOpen={isModalOpen}
                      setIsModalOpen={setIsModalOpen}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Interests;
