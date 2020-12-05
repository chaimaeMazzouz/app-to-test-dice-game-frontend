import React, { Component } from "react";
import "./components/cubeDesign/Cube.css";
class Cube extends Component {
  render() {
    return (
      <div>
        <div id="cube">
          <div className="front">
            <span className="dot dot1" />
          </div>
          <div className="back">
            <span className="dot dot1" />
            <span className="dot dot2" />
          </div>
          <div className="right">
            <span className="dot dot1" />
            <span className="dot dot2" />
            <span className="dot dot3" />
          </div>
          <div className="left">
            <span className="dot dot1" />
            <span className="dot dot2" />
            <span className="dot dot3" />
            <span className="dot dot4" />
          </div>
          <div className="top">
            <span className="dot dot1" />
            <span className="dot dot2" />
            <span className="dot dot3" />
            <span className="dot dot4" />
            <span className="dot dot5" />
          </div>
          <div className="bottom">
            <span className="dot dot1" />
            <span className="dot dot2" />
            <span className="dot dot3" />
            <span className="dot dot4" />
            <span className="dot dot5" />
            <span className="dot dot6" />
          </div>
        </div>
      </div>
    );
  }
}
export default Cube;
