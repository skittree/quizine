import React, { useState } from "react";
import cl from "./CategoryItem.module.css";

const CategoryItem = (props) => {
  return (
    <div className={cl.box}>
      <div className={cl.category}>{props.category.title}</div>
      <div className={cl.clues}>{props.category.clues_count} Questions</div>
    </div>
  );
};

export default CategoryItem;
