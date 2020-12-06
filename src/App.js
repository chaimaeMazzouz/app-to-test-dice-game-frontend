import React, { Component } from "react";
import Player from "./Components/PlayerPanel/Player";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  resetState = () => {
    this.setState(initialState);
  };
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
      </div>
    );
  }
}

export default App;
