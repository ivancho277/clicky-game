import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navebar from "./Navbar"

class App extends React.Component() {
  state = {
    topScore: 0,
    score: 0
  }


  render() {
    return (
      <div className="App">
        <Navebar />
      </div>
    );
  }
}

export default App;
