import React, { useState } from "react";
import "./Header.css";
// import { Link } from "react-router-dom";

function Header() {
  const [toggle, showMenu] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="/" className="nav__logo">
            <div className="nav__logo-img"></div>
          </a>
          <div className={toggle ? "nav__menu show_menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="/" className="nav__link active-link">
                  <i className="uil uil-estate nav__icon "></i> Home
                </a>
              </li>
              <li className="nav__item">
                <a href="/about" className="nav__link">
                  <i className="uil uil-user nav__icon"></i> About
                </a>
              </li>
              <li className="nav__item">
                <a href="/" className="nav__link">
                  <i className="uil uil-file-alt nav__icon"></i> Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="/" className="nav__link">
                  <i className="uil uil-briefcase nav__icon"></i> Work
                </a>
              </li>
              <li className="nav__item">
                <a href="/" className="nav__link">
                  <i className="uil uil-book nav__icon"></i> Education
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link-contact">
                  <i className="uil uil-message nav__icon"></i> Contact
                </a>
              </li>
            </ul>
            <i
              className="uil uil-times nav__close"
              onClick={() => showMenu(!toggle)}
            ></i>
          </div>
          <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
            <i className="uil uil-bars"></i>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
