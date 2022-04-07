import React from "react";
import "../../pages/Game.css";

const GameQuestion = ({ clue, questionNumber, isActive }) => {
  return (
    <div
      style={!isActive ? { display: "none" } : {}}
      className="question-container"
    >
      <div className="info-container">
        <div className="info">
          <h1 id="h1">Question {questionNumber}</h1>
          <h2 id="h2">{clue.category.title}</h2>
        </div>
        <div className="timer">{/* <h1 id="h1">{timer}</h1> */}</div>
      </div>
      <div className="question-text">
        <a id="text">{clue.question}</a>
      </div>
      <div className="correct-answer"></div>
    </div>
  );
};

export default GameQuestion;
