import React from "react";
import "./CategoryCard.css";

const CategoryCard = ({ category }) => {
  //   const air_date = new Date(category.clues[0].airdate);

  //   console.log(category.clues[0].airdate.date);
  return (
    <div className="bodyC">
      <h1>{category.title}</h1>
      <div>
        <h3>Created at:</h3>
        <div>{}</div>
      </div>
      <div>
        <h3>Question count:</h3>
        <div>{category.clues_count}</div>
      </div>
    </div>
  );
};

export default CategoryCard;
