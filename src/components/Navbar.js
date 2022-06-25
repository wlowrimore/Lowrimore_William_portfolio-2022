import React from "react";

function Navbar(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <header className="header">
      <div className="my-title">
        <h4 onClick={() => setCurrentTab("main")}>William Lowrimore</h4>
      </div>
      <div className="pageTabs">
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
      </div>
    </header>
  );
}

export default Navbar;
