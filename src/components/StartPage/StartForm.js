import React, { Component } from "react";
import "./StartForm.css";

class StartForm extends Component {
  onSwitchClick() {
    document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("flip-card-btn-turn-to-back").style.visibility =
        "visible";
      document.getElementById("flip-card-btn-turn-to-front").style.visibility =
        "visible";

      document.getElementById(
        "flip-card-btn-turn-to-back"
      ).onclick = function () {
        document.getElementById("flip-card").classList.toggle("do-flip");
      };

      document.getElementById(
        "flip-card-btn-turn-to-front"
      ).onclick = function () {
        document.getElementById("flip-card").classList.toggle("do-flip");
      };
    });
  }
  render() {
    return (
      <div className="flip-card-3D-wrapper">
        <div id="flip-card">
          <div className="flip-card-front">
            <header className="header">
              <h1 className="title">
                <span>DICE</span>
                <span>GAME</span>
              </h1>
            </header>
            <div className="buttons">
              <a className="button btn1"> New Game </a>
              <a className="button btn2"> Join Game </a>
            </div>
            <button
              id="flip-card-btn-turn-to-back"
              onClick={this.onSwitchClick}
            >
              Offline
            </button>
          </div>
          <div className="flip-card-back">
            <header className="header">
              <h1 className="title">
                <span>DICE</span>
                <span>GAME</span>
              </h1>
            </header>
            <div className="buttons">
              <a className="button btn3"> Play </a>
            </div>
            <button
              id="flip-card-btn-turn-to-front"
              onClick={this.onSwitchClick}
            >
              Online
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default StartForm;
