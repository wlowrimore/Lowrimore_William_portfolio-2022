import React from "react";


import {
  FaGithubAlt,
  FaLinkedinIn,
  FaMailchimp,
  FaMobileAlt,
  FaAt,
} from "react-icons/fa";

export default function Contact() {
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
              <a
                href={"email-service.js"}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="icon">
                  <FaAt />
                </span>
                Email
              </a>
            </li>
            <li>
              <a
                href="tel:+19015687961"
                target="_blank"
                rel="noreferrer noopener"
              >
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
