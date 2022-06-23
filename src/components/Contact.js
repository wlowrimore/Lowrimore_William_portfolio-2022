import React, { useState } from "react";
import Modal from "./Modal";
import { FaGithubAlt, FaLinkedinIn, FaMobileAlt, FaAt } from "react-icons/fa";

export default function Contact() {
  // Sets Modal State
  const [isOpen, setIsOpen] = useState(false);

  // Modal Actions
  const showModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <section id="contact" className="contact-container">
      <div className="contact-intro">
        <h1>Let's work together!</h1>
        <div className="contact-links">
          <ul>
            <li>
              <a
                href="https://github.com/wlowrimore"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="icon">
                  <FaGithubAlt />
                </span>
                Github
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/william-lowrimore-21778310"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="icon">
                  <FaLinkedinIn />
                </span>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="modal" onClick={showModal}>
                <span className="icon">
                  <FaAt />
                </span>
                Email
              </a>
              <Modal onClose={hideModal} isOpened={isOpen} />
            </li>
            <li>
              <a href="tel:+19015687961">
                <span className="icon">
                  <FaMobileAlt />
                </span>
                Phone
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
