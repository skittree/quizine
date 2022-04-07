import React from "react";
import "./CategoryCard.css";
import CategoryTable from "./CategoryTable";
import { useState } from "react";

const CategoryCard = ({ category }) => {
  const [showTable, setShowTable] = useState(false);

  console.log(category.clues);
  return (
    <div className="bodyC">
      <h1>{category.title}</h1>
      <div className="contentC">
        <h3>Question count:</h3>
        <div>{category.clues_count}</div>
      </div>
      {showTable ? (
        <button className="showButton" onClick={() => setShowTable(!showTable)}>
          Hide questions
        </button>
      ) : (
        <button className="showButton" onClick={() => setShowTable(!showTable)}>
          Show questions
        </button>
      )}
      {showTable ? <CategoryTable clues={category.clues} /> : <div />}
    </div>
  );
};

export default CategoryCard;
