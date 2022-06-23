import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Main from "./components/Main";
import About from "./components/About";
import ProjectInfo from "./components/ProjectInfo";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [currentTab, setCurrentTab] = useState("main");
  // Switch/Case Renders Selected Tab in NavBar
  const renderTab = () => {
    switch (currentTab) {
      case "main":
        return <Main />;
      case "about":
        return <About />;
      case "projects":
        return <ProjectInfo />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      case "default":
        return null;
    }
  };

  return (
    <div>
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main>{renderTab()}</main>
      <Footer />
    </div>
  );
}

export default App;
