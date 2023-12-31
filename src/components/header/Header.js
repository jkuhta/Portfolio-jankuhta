import React, { useState } from "react";
import "./Header.css";
import ProgressBar from "./ProgressBar";
// import { Link } from "react-router-dom";

function Header() {
  // CHANGE BACKGROUND HEADER

  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  const [toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  console.log(document.documentElement.scrollHeight);
  const headerItems = [
    {
      href: "#home",
      icon: "estate",
      name: "Home",
    },
    {
      href: "#about",
      icon: "user",
      name: "About",
    },
    {
      href: "#skills",
      icon: "file-alt",
      name: "Skills",
    },
    {
      href: "#qualification",
      icon: "briefcase",
      name: "Qualification",
    },
    {
      href: "#projects",
      icon: "check-circle",
      name: "Projects",
    },
    {
      href: "#interests",
      icon: "water",
      name: "Interests",
      id: "interests_header",
    },
    {
      href: "#contact",
      icon: "message",
      name: "Contact",
    },
  ];
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="/" className="nav__logo">
            <div className="nav__logo-img"></div>
          </a>
          <div className={toggle ? "nav__menu show_menu" : "nav__menu"}>
            <ul className="nav__list grid">
              {headerItems.map((item, index) => (
                <li className="nav__item" id={item.id} key={index}>
                  <a
                    href={item.href}
                    onClick={() => setActiveNav(item.href)}
                    className={
                      activeNav === item.href
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                  >
                    <i className={`uil uil-${item.icon} nav__icon`}></i>{" "}
                    {item.name}
                  </a>
                </li>
              ))}
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

        <ProgressBar />
      </header>
    </>
  );
}

export default Header;
