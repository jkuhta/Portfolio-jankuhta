import React from "react";
import "./Footer.css";

const Footer = () => {
  const footerLinks = [
    {
      href: "#about",
      name: "About",
    },
    {
      href: "#portfolio",
      name: "Projects",
    },
    {
      href: "#testimonial",
      name: "Testimonials",
    },
  ];
  const socialLinks = [
    {
      url: "https://www.instagram.com/jankuhta",
      iconClass: "bx bxl-instagram",
    },
    {
      url: "https://facebook.com/jan.kuhta",
      iconClass: "bx bxl-facebook",
    },
    {
      url: "https://github.com/jkuhta",
      iconClass: "bx bxl-github",
    },
    {
      url: "https://si.linkedin.com/in/jan-kuhta",
      iconClass: "bx bxl-linkedin",
    },
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">Jan Kuhta</h1>
          <ul className="footer__list">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a href={`${link.href}`} className="footer__link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="footer__social">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="footer__social-link"
                target="blank"
                rel="noopener noreferrer"
              >
                <i className={link.iconClass}></i>
              </a>
            ))}
          </div>
          <span className="footer__copy">
            &#169; jankuhta. All rights reserved
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
