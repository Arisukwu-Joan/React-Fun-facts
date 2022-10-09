import React from "react";
import logo from "../image/logo.svg";

function Header(props) {
  return (
    <header className={props.darkMode ? "dark" : ""}>
      <div className="nav-title">
        <img src={logo} alt="logo" className="nav-logo" />
        <h3 className="logo-title">ReactFacts</h3>
      </div>
      <div className="toggle">
        <h5 className="h3">Light</h5>
        <div className="toggle-slider" onClick={props.toggleDarkMode}>
          <div className="toggle-circle"></div>
        </div>
        <h5 className="h3">Dark</h5>
      </div>
    </header>
  );
}

export default Header;
