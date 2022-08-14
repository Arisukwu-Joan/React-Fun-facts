import React from "react";
import logo from "./logo.svg";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-title">
          <img src={logo} alt="logo" className="nav-logo" />
          <h3 className="logo-title">ReactFacts</h3>
        </div>
        <div className="title">
          <h4 className="h3">React Cousre -Project 1</h4>
        </div>
      </nav>
    </header>
  );
}

export default Header;
