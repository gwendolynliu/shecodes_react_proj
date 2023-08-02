import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />
        <footer>
          This project is created by Gwendolyn Liu and is{" "}
          <a
            href="https://github.com/gwendolynliu/shecodes_react_proj"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
