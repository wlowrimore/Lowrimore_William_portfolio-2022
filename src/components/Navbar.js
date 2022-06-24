import React from "react";

function Navbar(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <header className="header">
      <nav>
        <h4 className={currentTab === "main" ? "navActive" : "q-pos"}>
          <span onClick={() => setCurrentTab("main")}>William Lowrimore</span>
        </h4>
      </nav>
      <div className="pageTabs">
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
      </div>
    </header>
  );
}

export default Navbar;
