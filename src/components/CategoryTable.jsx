import React from "react";
import "./CategoryTable.css";
import TableRow from "./UI/table/TableRow";

const CategoryTable = ({ clues }) => {
  return (
    <table className="table">
      <tr>
        <th>Question</th>
        <th>Answer</th>
        <th>Difficulty</th>
      </tr>

      {clues.map((clue) => (
        <TableRow key={clue.id} clue={clue}></TableRow>
      ))}
    </table>
  );
};

export default CategoryTable;
