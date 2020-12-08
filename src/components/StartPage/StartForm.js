import React, { Component } from "react";
import "./StartForm.css";

class StartForm extends Component {
  onSwitchClick() {
    var checkBox = document.getElementById("myCheck");
    var button1 = document.getElementById("btn1");
    var button2 = document.getElementById("btn2");
    var button3 = document.getElementById("btn3");
    if (checkBox.checked == true) {
      button3.style.display = "none";
      button1.style.display = "block";
      button2.style.display = "block";
      document.getElementById("label-check").style.color = "#1e9feb";
      document.getElementById("label-check").innerHTML = "Online";
    } else {
      button3.style.display = "block";
      button1.style.display = "none";
      button2.style.display = "none";
      document.getElementById("label-check").style.color = "#cccccc";
      document.getElementById("label-check").innerHTML = "Offline";
    }
  }
  render() {
    return (
      <div>
        <header>
          <h1>
            <span>DICE</span>
            <span>GAME</span>
          </h1>
          <span id="label-check"></span>
          <label className="switch">
            <input type="checkbox" id="myCheck" onClick={this.onSwitchClick} />
            <div className="slider" />
          </label>
        </header>
        <section>
          <a className="button" id="btn1">
            New Game
          </a>
          <a className="button" id="btn2">
            Join Game
          </a>
          <a className="button" id="btn3">
            Go Offline
          </a>
        </section>
      </div>
    );
  }
}
export default StartForm;
