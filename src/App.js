import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState();
  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }
  return (
    <div className="App">
      <div className="container">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Content darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
