import React, { useEffect, useState } from "react";
import "./Header.css";

const ProgressBar = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = (winScroll / height) * 100;

    setScrollTop(scroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="progress-bar-light"></div>
      <div
        className="progress-bar-dark"
        style={{ width: `${scrollTop}%` }}
      ></div>
    </>
  );
};

export default ProgressBar;
