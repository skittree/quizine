import React, { useState } from "react";
import "./CategoryItem.css";

const CategoryItem = (props) => {
  return (
    <div className="boxC">
      <div className="categoryC">{props.category.title}</div>
      <div className="cluesC">{props.category.clues_count} Questions</div>
    </div>
  );
};

export default CategoryItem;
