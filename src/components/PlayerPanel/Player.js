import React from "react";
import PropTypes from "prop-types";
import "./Player.css";

function Player(props) {
  const { id, score, winner, playerName } = props;
  return (
    <div
      id={`player${id}`}
      className={props.active + (winner === id ? "winner" : "")}
    >
      <div className="player-name" id={`name-${id}`}>
        {winner === id ? "Winner!" : `Player ${id + 1}`}
      </div>
      <div className="player-score" id={`score-${id}`}>
        {score}
      </div>
      <div className="player-current-box">
        <div className="player-current-label">Current</div>
        <div className="player-current-score" id={`current-${id}`}>
          {props.current}
        </div>
      </div>
    </div>
  );
}
Player.propTypes = {
  id: PropTypes.number.isRequired,
  active: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  winner: PropTypes.number,
};
export default Player;
