import React, { useStatem, usceContext, useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../context";
import "./CategoryItem.css";

const CategoryItem = (props) => {
  const { categoryId, setCategoryId } = useContext(CategoryContext);

  return (
    <div className="boxC" >
      <div className="categoryC"> <Link to='/category' onClick={() => setCategoryId(props.category.id)}> {props.category.title}</Link></div>
      <div className="cluesC">{props.category.clues_count} Questions</div>
    </div>
  );
};

export default CategoryItem;
