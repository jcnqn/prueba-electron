import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
const { ipcRenderer } = window.require("electron");

function App() {
  const [replay, setReplay] = useState(null);

  useEffect(() => {
    ipcRenderer.on("replay", (event, arg) => {
      setReplay(arg);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          onClick={() => {
            ipcRenderer.send("asynchronous-message", "ping");
          }}
        >
          Com
        </button>
        <div>{replay}</div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
