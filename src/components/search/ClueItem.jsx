import React, { useContext, useState } from "react";
import "./ClueItem.css";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../context";

const ClueItem = (props) => {
  const {categoryId, setCategoryId} = useContext(CategoryContext);

  const [showAnswer, setShowAnswer] = useState(false);

  const [showContent, setShowContent] = useState(false);

  const difficultyOptions = [
    [100, 200, 300],
    [400, 500, 600],
    [700, 800, 900, 1000],
  ];

  const setDifficulty = (value) => {
    if (difficultyOptions[0].includes(value)) {
      return "easy";
    }
    if (difficultyOptions[1].includes(value)) {
      return "medium";
    }
    if (difficultyOptions[2].includes(value)) {
      return "hard";
    }
    return "undefined";
  };
  return (
    <div className="box">
      <div className="question">{props.clue.question}</div>
      <div className="options">
        <div>
          {showAnswer ? (
            <div className="contentItem">
              <button
                className="showButton"
                onClick={() => setShowAnswer(!showAnswer)}
              >
                Hide Answer
              </button>
              <div>{props.clue.answer}</div>
            </div>
          ) : (
            <button
              className="showButton"
              onClick={() => setShowAnswer(!showAnswer)}
            >
              Show Answer
            </button>
          )}
        </div>
        <button
          className="showButton"
          style={showContent ? { display: "none" } : {}}
          onClick={() => setShowContent(!showContent)}
        >
          More Options...
        </button>
      </div>
      {showContent ? (
        <div className="content">
          <div className="contentItem">
            <h3>Category:</h3>
            <Link to='/category' onClick={() => setCategoryId(props.clue.category.id) }>{props.clue.category.title}</Link>
          </div>
          <div className="contentItem">
            <h3>Difficulty:</h3>
            <div>{setDifficulty(props.clue.value)}</div>
          </div>
          <div className="contentItem">
            <h3>Date:</h3>
            <div>
              {new Date(props.clue.airdate).getUTCDate()}.
              {new Date(props.clue.airdate).getMonth() + 1}.
              {new Date(props.clue.airdate).getFullYear() + 7}
            </div>
          </div>
          <button
            style={showContent ? {} : { display: "none" }}
            onClick={() => setShowContent(!showContent)}
            className="hideButton"
          >
            Hide
          </button>
        </div>
      ) : (
        <div style={{ display: "none" }} />
      )}
    </div>
  );
};

export default ClueItem;
