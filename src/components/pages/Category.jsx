import React, { useState, useEffect } from "react";
import "../../App.css";
import Header from "../Header";
import CategoryCardService from "../API/CategoryCardService";
import { useFetchingCategoryCard } from "./../hooks/useFetchingCategoryCard";
import CategoryCard from "../CategoryCard";
import Loader from "./../UI/Loader/Loader";
import "./Category.css";

function Category({ id }) {
  id = 1542;
  const [category, setCategory] = useState({});

  const [fetchCategory, isCategoryLoading, categoryError] =
    useFetchingCategoryCard(async () => {
      const category = await CategoryCardService.getAll(id);
      setCategory(category);
      console.log(category);
    });

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="category">
      <Header></Header>
      {isCategoryLoading ? (
        <Loader />
      ) : (
        <div className="category_content">
          <CategoryCard category={category} />
        </div>
      )}
    </div>
  );
}

export default Category;
