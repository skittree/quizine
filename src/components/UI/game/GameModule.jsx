import React from "react";
import "../../pages/Game.css";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import GameQuestion from "./GameQuestion";

const GameModule = ({ clues }) => {
  const [activeClue, setActiveClue] = useState(-1);
  const [gameStarted, setGameStarted] = useState(false);
  const [answerLog, setAnswerLog] = useState(new Array(10).fill(0));
  const [inputQuery, setInputQuery] = useState("");

  const handleGameStart = () => {
    setGameStarted(true);
    setActiveClue(activeClue + 1);
    handleLogChange(1);
  };

  const handleLogChange = (value) => {
    setAnswerLog(
      answerLog.map((answer, index) =>
        index == activeClue ? (answer = value) : answer
      )
    );
  };

  const handleSkip = () => {
    handleLogChange(3);
    setInputQuery("");
    setActiveClue(activeClue + 1);
  };

  const handleSubmit = () => {
    console.log([
      clues[activeClue].answer.toLowerCase().includes(inputQuery.toLowerCase()),
    ]);
    if (
      clues[activeClue].answer.toLowerCase().includes(inputQuery.toLowerCase())
    ) {
      handleLogChange(2);
      setInputQuery("");
      setActiveClue(activeClue + 1);
      return;
    }
    handleLogChange(3);
    setInputQuery("");
    setActiveClue(activeClue + 1);
    return;
  };
  console.log(clues);
  console.log(answerLog);

  const verifyActive = (questionIndex) => {
    return activeClue == questionIndex;
  };

  return (
    <div className="game-wrapper">
      {!gameStarted ? (
        <button
          className="submit"
          id="start-button"
          onClick={() => handleGameStart()}
        >
          Start Game
        </button>
      ) : (
        <div className="game-container">
          <div>
            {clues.map((clue, index) => (
              <GameQuestion
                key={clue.id}
                questionNumber={index + 1}
                clue={clue}
                isActive={verifyActive(index)}
              ></GameQuestion>
            ))}
          </div>

          <div className="answer-container">
            <div className="input-container">
              <input
                className="answer-bar"
                id="text"
                placeholder="Type answer..."
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
              ></input>
              <div className="input-buttons">
                <button
                  className="submit"
                  id="input-button"
                  onClick={() => handleSubmit()}
                >
                  SUBMIT
                </button>
                <button
                  className="skip"
                  id="input-button"
                  onClick={() => handleSkip()}
                >
                  SKIP
                </button>
              </div>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar"></div>
              <div className="question-count">
                <a id="text">{activeClue + 1}/10</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameModule;
