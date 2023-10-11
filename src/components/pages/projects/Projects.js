import React from "react";
import "./Projects.css";
import ProjectsItem from "./ProjectsItem";
import { projectItems } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Projects = () => {
  return (
    <>
      <section className="project section" id="projects">
        <h1 className="section__title">Projects</h1>
        <span className="section__subtitle">My recent work</span>
        <div className="project__container container grid">
          <Swiper
            className="project__swiper"
            slidesPerView={1}
            spaceBetween={20}
            loop={false}
            grabCursor={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              800: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            modules={[Navigation, Pagination]}
          >
            {projectItems.map((item, index) => {
              return (
                <SwiperSlide className="project__slide" key={index}>
                  <ProjectsItem
                    title={item.title}
                    modalTitle={item.modalTitle}
                    description={item.description}
                    projectData={item.projectData}
                    icon={item.icon}
                    labels={item.labels}
                    github_link={item.github_link}
                    website={item.website}
                    report={item.report}
                    images={item.images}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Projects;
