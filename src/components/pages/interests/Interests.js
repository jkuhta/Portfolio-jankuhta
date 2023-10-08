import React from "react";
import "./Interests.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { interestItems } from "./Data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
                {" "}
                <i className={`${item.icon} interest__icon`}></i>
                {item.title}
              </h3>
              <div className="interest__box">
                <div>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="interest__slider"
                  >
                    {item.subItems.map((subItem, subIndex) => {
                      return (
                        <SwiperSlide key={subIndex}>
                          <figure className="interest__swiper-pic-warp">
                            <img
                              className="interest__swiper-img"
                              src={subItem.image}
                              alt=""
                            />
                          </figure>
                          <div className="interest__subtitle">
                            <h5 className="interest__subtitle-text">
                              {subItem.subtitle}
                            </h5>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Interests;
