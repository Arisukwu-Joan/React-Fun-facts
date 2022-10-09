import React from "react";

function Content(props) {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      {/* <div className="maincontent"> */}
      <h1 className="maincontent">Fun facts about React</h1>
      <ul className="list">
        <li>Was release in the year 2013</li>
        <li>Was originally created by Jordan Walker</li>
        <li>Has over 100k star GitHub</li>
        <li>It's been Maintained by facebook</li>
        <li>Powers over thousands of Enterprise App, including mobile App</li>
      </ul>
      {/* </div> */}
    </main>
  );
}

export default Content;
