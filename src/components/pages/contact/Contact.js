import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const contactItems = [
    {
      title: "Email",
      data: "jan.kuhta@gmail.com",
      icon: "bx-mail-send",
      href: "mailto:jan.kuhta@gmail.com",
    },
    {
      title: "Messenger",
      data: "jan.kuhta",
      icon: "bxl-messenger",
      href: "https://m.me/jan.kuhta",
    },
    {
      title: "WhatsApp",
      data: "TBA",
      icon: "bxl-whatsapp",
      href: "https://whatsapp.com",
    },
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_k9uy5ox",
      "template_rlymyqt",
      form.current,
      "WQkf4Ycycqy6cti-S"
    );
    e.target.reset();
  };
  return (
    <>
      <section className="contact section" id="contact">
        <h1 className="section__title">Contact Me</h1>
        <span className="section__subtitle">Get in touch</span>
        <div className="contact__container container grid">
          <div className="contact__content">
            <h3 className="contact__title">Talk to me</h3>
            <div className="contact__info">
              {contactItems.map((item, index) => (
                <div className="contact__card" key={index}>
                  <i className={`bx ${item.icon} contact__card-icon`}></i>
                  <h3 className="contact__card-title">{item.title}</h3>
                  <span className="contact__card-data">{item.data}</span>
                  <a
                    href={item.href}
                    className="contact__button"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    Write me
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="contact__content">
            <h3 className="contact__title">Write me your project</h3>
            <form className="contact__form " ref={form} onSubmit={sendEmail}>
              <div className="contact__form-div">
                <label className="contact__form-tag">Name</label>
                <input
                  type="text"
                  name="name"
                  className="contact__form-input"
                  placeholder="Insert your name"
                />
              </div>
              <div className="contact__form-div">
                <label className="contact__form-tag">Email</label>
                <input
                  type="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="Insert your email"
                />
              </div>
              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag">Project</label>
                <textarea
                  name="project"
                  cols="30"
                  rows="10"
                  className="contact__form-input"
                  placeholder="Write your project"
                ></textarea>
              </div>
              <button
                type="submit"
                href="#contact"
                className="button button--flex"
              >
                Send Message <i className="uil uil-message contact-icon"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
