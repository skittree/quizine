import React from "react";
import "CategoryTable.css";

const CategoryTable = () => {
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
    <table>
      <tr>
        <th>Question</th>
        <th>Answer</th>
        <th>Difficulty</th>
      </tr>
    </table>
  );
};

export default CategoryTable;
