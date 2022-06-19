import React from "react";
import ProfilePic from "../images/profile-pic.jpg";

export default function Main() {
  return (
    <section className="main-container" id="main">
      <div className="intro">
        <h1>Full Stack Developer</h1>
        <span>
          <p>certified in:</p>
        </span>
        <ul>
          <li>MERN Stack</li>|<li>Front-End Development</li>|
          <li>Back-End Development</li>|<li>UI Design</li>
        </ul>
      </div>

      {/* <img src={ProfilePic} alt="William Lowrimore" /> */}
    </section>
  );
}
