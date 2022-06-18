import React from "react";

function Navbar(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <header className="header">
      <h1 className={currentTab === "main" ? "navActive" : "mx-2"}>
        <span onClick={() => setCurrentTab("main")}> William Lowrimore</span>
      </h1>
      <nav>
        <ul>
          <li className={currentTab === "about" ? "navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("about")}>About</span>
          </li>
          <li className={currentTab === "projects" ? "navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("projects")}>Projects</span>
          </li>
          <li className={currentTab === "contact" ? "navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("contact")}>Contact</span>
          </li>
          <li className={currentTab === "resume" ? "navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("resume")}>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
