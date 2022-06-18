import React from "react";
import ProfilePic from "../images/profile-pic.jpg";

export default function Main() {
  return (
    <section className="main-container" id="main">
      <img src={ProfilePic} alt="William Lowrimore" />
      <h1>Main Content Container</h1>
    </section>
  );
}
