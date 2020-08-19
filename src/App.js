import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/MyButton";
import Welcome from "./components/Welcome";
import MyLink from "./components/MyLink";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
         */}
        <Welcome name="Hannah" />
        <p>
          JS lesson 1
          <MyButton title="Tryck här" />
          <MyButton title="Eller här" />
          <MyButton title="Varför inte här" />
        </p>
        <MyLink title="www.google.com" name="Google" />
        <p>
          <code>src/App.js</code> and save to reload.
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
