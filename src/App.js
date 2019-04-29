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
    characters,
    clicked: []
  };

  imageClick = event => {
    const curCharacter = event.target.alt;
    const hasBeenClicked =
      this.state.clicked.indexOf(curCharacter) > -1;

//if you click on a fish that has already been selected, the game is reset and cards reordered
    if (hasBeenClicked) {
      this.setState({
        characters: this.state.characters.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clicked: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available fish, your score is increased and cards reordered
    } else {
      this.setState({
          characters: this.state.characters.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          hasBeenClicked: this.state.clicked.concat(
            curCharacter
          ),
          score: this.state.score + 1
        },() => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              characters: this.state.characters.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clicked: [],
              score: 0
            });
          }
        }
      );
    }
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
              onClick={this.imageClick}
               />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
