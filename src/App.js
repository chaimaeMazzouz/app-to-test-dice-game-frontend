import React, { Component } from "react";
import Player from "./Components/PlayerPanel/Player";
import Cube from "./Components/CubeDesign/Cube";
const initialState = {
  playerOneScore: 0,
  playerTwoScore: 0,
  activePlayer: 0,
  playerOneCurrentScore: 0,
  playerTwoCurrentScore: 0,
  gamePlaying: true,
  diceNumber: null,
  winner: null,
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.rollDice = this.rollDice.bind(this);
  }

  resetState = () => {
    this.setState(initialState);
  };
  checkWinner() {
    const maxScore = 100;
    const playerOneWinner = this.state.playerOneScore >= maxScore;
    const playerTwoWinner = this.state.playerTwoScore >= maxScore;
    if (playerOneWinner || playerTwoWinner) {
      this.setState(() => {
        return {
          winner: playerOneWinner ? 0 : 1,
          activePlayer: null,
          diceNumber: null,
          gamePlaying: false,
        };
      });
    } else {
      this.nextPlayer();
    }
  }
  addPlayerScore() {
    this.setState(
      () => ({
        playerOneScore:
          this.state.playerOneScore + this.state.playerOneCurrentScore,
        playerTwoScore:
          this.state.playerTwoScore + this.state.playerTwoCurrentScore,
      }),
      this.checkWinner
    );
  }
  holdScore() {
    if (this.state.gamePlaying) {
      this.addPlayerScore();
    }
  }

  nextPlayer(diceNumber) {
    this.setState(() => ({
      diceNumber,
      activePlayer: this.state.activePlayer === 0 ? 1 : 0,
      playerOneCurrentScore: this.state.playerOneCurrentScore && 0,
      playerTwoCurrentScore: this.state.playerTwoCurrentScore && 0,
    }));
  }
  setCurrentScore(diceNumber) {
    if (this.state.activePlayer === 0) {
      return this.setState(() => ({
        diceNumber,
        playerOneCurrentScore: this.state.playerOneCurrentScore + diceNumber,
      }));
    }
    return this.setState(() => ({
      diceNumber,
      playerTwoCurrentScore: this.state.playerTwoCurrentScore + diceNumber,
    }));
  }
  rollDice() {
    var cube = document.getElementById("Cube");
    var min = 1;
    var max = 24;
    cube.onclick = function () {
      var xRand = getRandom(max, min);
      var yRand = getRandom(max, min);

      cube.style.transform =
        "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
    };

    function getRandom(max, min) {
      return (Math.floor(Math.random() * (max - min)) + min) * 90;
    }
    if (this.state.gamePlaying) {
      const diceNumber = getRandom(max, min);
      if (diceNumber !== 1) {
        return this.setCurrentScore(diceNumber);
      }
      return this.nextPlayer(diceNumber);
    }
    return null;
  }
  render() {
    const playerOne = 0;
    const playerTwo = 1;
    return (
      <div>
        <Player
          id={playerOne}
          active={this.state.activePlayer === playerOne ? "active " : ""}
          score={this.state.playerOneScore}
          current={this.state.playerOneCurrentScore}
          winner={this.state.winner}
        />
        <Player
          id={playerTwo}
          active={this.state.activePlayer === playerTwo ? "active " : ""}
          score={this.state.playerTwoScore}
          current={this.state.playerTwoCurrentScore}
          winner={this.state.winner}
        />
        <Cube />
      </div>
    );
  }
}

export default App;
