import React, { useState, useEffect } from "react";
import "../../App.css";
import Header from "../Header.module/Header";
import CategoryCardService from "../API/CategoryCardService";
import { useFetchingCategoryCard } from "./../hooks/useFetchingCategoryCard";
import CategoryCard from "../CategoryCard";
import Loader from "./../UI/Loader/Loader";

function Category({ id }) {
  const [category, setCategory] = useState({});

  const [fetchCategory, isCategoryLoading, categoryError] =
    useFetchingCategoryCard(async () => {
      const category = await CategoryCardService.getAll(id);
      setCategory(category);
    });

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="App">
      <Header></Header>
      {isCategoryLoading ? <Loader /> : <CategoryCard category={category} />}
    </div>
  );
}

export default Category;
