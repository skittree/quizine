import React from "react";
import "../../pages/Game.css";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import GameQuestion from "./GameQuestion";
import ProgressDot from "../progressDot/ProgressDot";
import {Link} from 'react-router-dom';

const GameModule = ({ clues }) => {
  const [activeClue, setActiveClue] = useState(-1);
  const [gameStarted, setGameStarted] = useState(false);
  const [answerLog, setAnswerLog] = useState(new Array(10).fill(0));
  const [inputQuery, setInputQuery] = useState("");
  const [gameFinish, setGameFinish] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  if (activeClue === 10) {
    setGameFinish(true);
    setActiveClue(-1);
  }

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
    setWrongAnswers(wrongAnswers + 1);
  };

  const handleSubmit = () => {
    if (
      clues[activeClue].answer
        .toLowerCase()
        .includes(inputQuery.toLowerCase()) &&
      !inputQuery.length == 0
    ) {
      handleLogChange(2);
      setInputQuery("");
      setActiveClue(activeClue + 1);
      setCorrectAnswers(correctAnswers + 1);
      return;
    }
    handleLogChange(3);
    setInputQuery("");
    setActiveClue(activeClue + 1);
    setWrongAnswers(wrongAnswers + 1);
    return;
  };

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
        <div>
          {!gameFinish ? (
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
                  <div className="progress-bar">
                    {answerLog.map((value, index) => (
                      <ProgressDot key={index + 1} value={value} />
                    ))}
                  </div>
                  <div className="question-count">
                    <a id="text">{activeClue + 1}/10</a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="answer-container">
                <div className="gameFinishInfo">
                  <h1 className="finishHeader">Quiz complete!</h1>
                  <div>
                    <h3 className="gameFinishText" style={{ color: "green" }}>
                      Correct answers: {correctAnswers}
                    </h3>
                    <h3 className="gameFinishText" style={{ color: "red" }}>
                      Incorrect Answers:{wrongAnswers}
                    </h3>
                    <button
                      className="submit"
                      id="return-button"
                      onClick={console.log()}
                    >
                      <Link className="toMain" to='/' >Main Page</Link> 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GameModule;
