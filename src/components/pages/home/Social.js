import React from "react";

const Social = () => {
  return (
    <>
      <div className="home__social">
        <a
          href="https://www.instagram.com/jankuhta"
          className="home__social-icon"
          target="blank"
        >
          <i className="uil uil-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/jan.kuhta"
          className="home__social-icon"
          target="blank"
        >
          <i className="uil uil-facebook"></i>
        </a>
        <a
          href="https://github.com/jkuhta"
          className="home__social-icon"
          target="blank"
        >
          <i className="uil uil-github"></i>
        </a>
        <a
          href="https://si.linkedin.com/in/jan-kuhta"
          className="home__social-icon"
          target="blank"
        >
          <i className="uil uil-linkedin"></i>
        </a>
      </div>
    </>
  );
};

export default Social;
