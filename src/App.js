import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Main from "./components/Main";
import About from "./components/About";
import ProjectInfo from "./components/ProjectInfo";
import Contact from "./components/Contact";
import Modal from "./components/Modal";
import { render } from "react-dom";

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
      case "contact":
        return <Contact />;
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
