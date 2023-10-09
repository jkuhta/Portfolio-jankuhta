import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const InterestSwiper = (props) => {
  const { item, isModalOpen, setIsModalOpen } = props;

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="interest__content" key={item.id}>
        <div className="interest__header">
          <h3 className="interest__title">
            <i className={`${item.icon} interest__icon`}></i>
            <span className="interest__title-text">{item.title}</span>
          </h3>
          {isModalOpen && (
            <i
              className="uil uil-times interest__close-button"
              onClick={handleCloseModal}
            ></i>
          )}
        </div>

        <div className="interest__box">
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
    </>
  );
};

export default InterestSwiper;
