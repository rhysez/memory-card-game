import { useState } from "react";

export default function Score(props) {

  return (
    <div className="scoreContainer">
      <span>Current score: {props.currentScore}</span>
      <span>Best score: {props.bestScore}</span>
    </div>
  );
}
