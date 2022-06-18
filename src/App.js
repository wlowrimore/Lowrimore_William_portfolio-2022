import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Main from "./components/Main";

function App() {
  const [currentTab, setCurrentTab] = useState("main");

  const renderTab = () => {
    switch (currentTab) {
      case "main":
        return <Main />;
    }
  };
  return (
    <div>
      <Navbar />
      <main>{renderTab()}</main>
      <Footer />
    </div>
  );
}

export default App;
