import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Main from "./components/Main";
import About from "./components/About";
import ProjectInfo from "./components/ProjectInfo";

function App() {
  const [currentTab, setCurrentTab] = useState("main");

  const renderTab = () => {
    switch (currentTab) {
      case "main":
        return <Main />;
      case "about":
        return <About />;
      case "projects":
        return <ProjectInfo />;
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
