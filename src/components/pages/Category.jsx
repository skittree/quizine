import React, { useState, useEffect, useContext } from "react";
import "../../App.css";
import Header from "../Header";
import CategoryCardService from "../API/CategoryCardService";
import { useFetchingCategoryCard } from "./../hooks/useFetchingCategoryCard";
import CategoryCard from "../CategoryCard";
import Loader from "./../UI/Loader/Loader";
import "./Category.css";
import Footer from "./../Footer";
import { CategoryContext } from "../../context";

function Category({ id }) {
  const { categoryId, setCategoryId } = useContext(CategoryContext);

  id = categoryId;

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
      <Footer />
    </div>
  );
}

export default Category;
