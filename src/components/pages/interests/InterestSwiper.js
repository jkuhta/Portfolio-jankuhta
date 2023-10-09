import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const InterestSwiper = (props) => {
  const { item } = props;

  return (
    <>
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
                <h5 className="interest__subtitle-text">{subItem.subtitle}</h5>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default InterestSwiper;
