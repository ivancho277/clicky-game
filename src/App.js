//import React from "react";
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navebar from "./Navbar"
import Jumbotron from "./Jumbotron"
import characters from "../characters.json"
//import Images from "../public/images"

class App extends Component{
  state = {
    topScore: 0,
    score: 0
    
  }
  


  render() {
    return (
      <div className="App">
        <Navebar />
        <Jumbotron />


      </div>
    );
  }
}

export default App;
