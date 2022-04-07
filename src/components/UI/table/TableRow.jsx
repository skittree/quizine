import React from "react";
import { useState } from "react";
import "./TableRow.css";

const TableRow = ({ clue }) => {
  const [showAnswer, setShowAnswer] = useState(false);

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
    <tr>
      <td>{clue.question}</td>
      <td onClick={() => setShowAnswer(!showAnswer)} className="answer_column">
        {!showAnswer ? "Show Answer" : clue.answer}
      </td>
      <td>{setDifficulty(clue.value)}</td>
    </tr>
  );
};

export default TableRow;
