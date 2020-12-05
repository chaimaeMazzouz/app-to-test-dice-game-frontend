import React, { Component } from "react";
import "./Cube.css";
class Cube extends Component {
  onRollDice() {
    var cube = document.getElementById("cube");

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
  }
  render() {
    return (
      <section className="container">
        <div id="cube" onClick={this.onRollDice}>
          <div className="front">
            <span className="dot dot1"></span>
          </div>
          <div className="back">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
          </div>
          <div className="right">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
          </div>
          <div className="left">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
            <span className="dot dot4"></span>
          </div>
          <div className="top">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
            <span className="dot dot4"></span>
            <span className="dot dot5"></span>
          </div>
          <div className="bottom">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
            <span className="dot dot4"></span>
            <span className="dot dot5"></span>
            <span className="dot dot6"></span>
          </div>
        </div>
      </section>
    );
  }
}
export default Cube;
