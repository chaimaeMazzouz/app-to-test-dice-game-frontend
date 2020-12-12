import React from "react";
/*import PropTypes from "prop-types";*/
import "./Cube.css";
function Cube(props) {
  return (
    <div className="cubeContainer">
      <div id="Cube" onClick={props.onRoll}>
        <div className="side face1">
          <div className="dot1 dot" />
        </div>
        <div className="side face2">
          <div className="dot1 dot" />
          <div className="dot2 dot" />
        </div>
        <div className="side face3">
          <div className="dot1 dot" />
          <div className="dot2 dot" />
          <div className="dot3 dot" />
        </div>
        <div className="side face4">
          <div className="dot1 dot" />
          <div className="dot2 dot" />
          <div className="dot3 dot" />
          <div className="dot4 dot" />
        </div>
        <div className="side face5">
          <div className="dot1 dot" />
          <div className="dot2 dot" />
          <div className="dot3 dot" />
          <div className="dot4 dot" />
          <div className="dot5 dot" />
        </div>
        <div className="side face6">
          <div className="dot1 dot" />
          <div className="dot2 dot" />
          <div className="dot3 dot" />
          <div className="dot4 dot" />
          <div className="dot5 dot" />
          <div className="dot6 dot" />
        </div>
      </div>
    </div>
  );
}
/*Cube.propTypes = {
  onRoll: PropTypes.func.isRequired,
};*/
export default Cube;
/*import React, { Component } from "react";
import "./Cube.css";
class Cube extends Component {
  onRollDice() {
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
  }
  render() {
    return (
      <div className="cubeContainer">
        <div id="Cube" onClick={this.onRollDice}>
          <div className="side face1">
            <div className="dot1 dot" />
          </div>
          <div className="side face2">
            <div className="dot1 dot" />
            <div className="dot2 dot" />
          </div>
          <div className="side face3">
            <div className="dot1 dot" />
            <div className="dot2 dot" />
            <div className="dot3 dot" />
          </div>
          <div className="side face4">
            <div className="dot1 dot" />
            <div className="dot2 dot" />
            <div className="dot3 dot" />
            <div className="dot4 dot" />
          </div>
          <div className="side face5">
            <div className="dot1 dot" />
            <div className="dot2 dot" />
            <div className="dot3 dot" />
            <div className="dot4 dot" />
            <div className="dot5 dot" />
          </div>
          <div className="side face6">
            <div className="dot1 dot" />
            <div className="dot2 dot" />
            <div className="dot3 dot" />
            <div className="dot4 dot" />
            <div className="dot5 dot" />
            <div className="dot6 dot" />
          </div>
        </div>
      </div>
    );
  }
}
export default Cube;
*/
