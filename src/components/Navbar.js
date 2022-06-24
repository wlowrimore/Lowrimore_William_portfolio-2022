import React from "react";

function Navbar(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <header className="header">
      <h4 className={currentTab === "main" ? "navActive" : ""}>
        <span onClick={() => setCurrentTab("main")}>William Lowrimore</span>
      </h4>
      <nav>
        <ul>
          <li className={currentTab === "about" ? "navActive" : "q-pos"}>
            <span onClick={() => setCurrentTab("about")}>About</span>
          </li>
          <li className={currentTab === "projects" ? "navActive" : "q-pos"}>
            <span onClick={() => setCurrentTab("projects")}>Projects</span>
          </li>
          <li className={currentTab === "contact" ? "navActive" : "q-pos"}>
            <span onClick={() => setCurrentTab("contact")}>Contact</span>
          </li>
          <li className={currentTab === "resume" ? "navActive" : "q-pos"}>
            <span onClick={() => setCurrentTab("resume")}>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
