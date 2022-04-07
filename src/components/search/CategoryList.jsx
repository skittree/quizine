import React from "react";
import CategoryItem from "./CategoryItem";
import cl from "./CategoryList.module.css";

const CategoryList = ({ categories, title }) => {
  if (!categories.length) {
    return <h1 className={cl.title}>No questions found!</h1>;
  }
  return (
    <div className={cl.body}>
      <div style={{ width: "880px" }}>
        <h1 className={cl.title}>{title}</h1>
        {categories.map((category, index) => (
          <CategoryItem
            key={category.id}
            number={index + 1}
            category={category}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
