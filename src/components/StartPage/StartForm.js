import React, { Component } from "react";
import "./StartForm.css";

class StartForm extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>
            <span>DICE</span>
            <span>GAME</span>
          </h1>
        </header>
        <section>
          <a className="button">New Game </a>
          <a className="button">Join Game</a>
        </section>
      </div>
    );
  }
}
export default StartForm;
