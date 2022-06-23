import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";

const ResumePage = () => {
  return (
    <section id="resume">
      <h1>Resume</h1>
      <div className="dl">
        <a
          href={require("../document/resume.pdf")}
          target="_blank"
          rel="noreferrer noopen"
        >
          <FaFilePdf />
          <>download pdf version</>
        </a>
      </div>
      <div className="resume-body">
        <section className="container-fluid resume-header">
          <h2 className="res-title">William Lowrimore</h2>
          <ul className="resume-contact-info">
            <li emailto="wlowrimore@gmail.com">wlowrimore@gmail.com</li>
            <li>901.568.7941</li>
            <a
              href="https://github.com/wlowrimore"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubAlt className="gh" />
              <span>Github</span>
            </a>
          </ul>
        </section>

        <section className="objective">
          <h2>Objective</h2>
          <p>
            I am a graduate of Vanderbilt University's Full Stack Coding
            Bootcamp, where I earned my full stack developer ceritification. The
            MERN stack was the main focus of my overall studies. As I have
            become well-versed in numerous programming languages from front-end
            to back-end development, I do find front-end functionality and
            design to be where my skills take flight. I am currently seeking
            employment where my front-end knowledge and skills will be utilized.
            I am continually learning and developing new skills while, also
            stregnthening the skills I already possess.
          </p>
        </section>

        <section className="education">
          <div className="section-titles">
            <h2>Education</h2>
            <h4>Certification of Full Stack Web Development</h4>
            <h4>
              Vanderbilt University Full Stack Coding Bootcamp, Nashville, TN
              2021-2022
            </h4>
          </div>
          <ul>
            <li>3.8 GPA</li>
            <li>
              Completed a first quarter project building a front-end web app
              using third-party APIs and local storage
            </li>
            <li>
              Completed a second quarter project building a MVC using
              server-side JavaScript, RESTful APIs, databases, ORM, environment
              variables, templating, and authentication
            </li>
          </ul>
        </section>

        <section className="coursework">
          <div className="section-titles">
            <h4>Relevant coursework</h4>
          </div>
          <ul>
            <li>MERN</li>
            <li>REACT</li>
            <li>Progressive Web Application</li>
            <li>NoSQL</li>
            <li>Computer Science for JavaScript</li>
            <li>Model View Controller</li>
            <li>Object Relational Mapping</li>
            <li>SQL</li>
            <li>Express.js</li>
            <li>Object Oriented Mapping</li>
            <li>Node.js</li>
            <li>Server-Side APIs</li>
            <li>Third-Party APIs</li>
            <li>JavaScript / jQuery</li>
            <li>Advanced CSS</li>
            <li>HTML, CSS, and Git</li>
          </ul>
        </section>

        <section className="skills">
          <div className="section-titles"></div>
          <h2>Skills</h2>
          <ul>
            <li>Excellent communication skills</li>
            <li>Time management, critical thinking and problem-solving</li>
            <li>React</li>
            <li>SQL</li>
            <li>Progressive web app design</li>
            <li>Single page web app design</li>
            <li>UI design</li>
            <li>Full stack MERN</li>
          </ul>
        </section>
        <br></br>
        <hr />
        <br></br>
      </div>
    </section>
  );
};
export default ResumePage;
