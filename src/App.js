//import React from "react";
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navebar from "./Navbar";
import Jumbotron from "./Jumbotron";
import ImageCard from "./ImageCard";
import characters from "./characters.json";
//import Images from "../public/images"

class App extends Component {
  state = {
    topScore: 0,
    score: 0,
    characters
  };

  render() {
    return (
      <div className="App">
        <Navebar
        score={this.state.score}
        />
        <Jumbotron />
        <div className="cardWrap">
          {this.state.characters.map((character, i) => (
            <ImageCard
              key={i}
              image={character.image}
               />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
