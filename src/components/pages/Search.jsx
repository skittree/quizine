import React, { useState, useEffect } from "react";
import "../../App.css";
import Header from "../Header";
import { useCategories } from "../hooks/useCategories";
import ClueFilter from "../filter/ClueFilter";
import { useClues } from "../hooks/useClues";
import { useFetchingCategories } from "./../hooks/useFetchingCategories";
import { useFetchingClues } from "./../hooks/useFetchingClues";
import ClueService from "./../API/ClueService";
import CategoryService from "./../API/CategoryService";
import SearchResult from "./../SearchResult";

function Search() {
  const [clues, setClues] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState({
    sort: "question",
    query: "",
    difficulty: 0,
    date: 0,
    sortBy: "name",
  });
  const [modalTab, setModalTab] = useState(true);

  const [fetchClues, isClueLoading, clueError] = useFetchingClues(async () => {
    const clues = await ClueService.getAll();
    setClues(clues);
  });

  const [fetchCategories, isCategoryLoading, categoryError] =
    useFetchingCategories(async () => {
      const categories = await CategoryService.getAll();
      setCategories(categories);
    });

  const sortedAndSearchedClues = useClues(
    clues,
    filter.sortBy,
    filter.query,
    filter.difficulty,
    filter.date
  );

  const sortedAndSearchedCategories = useCategories(
    categories,
    filter.sortBy,
    filter.query
  );

  useEffect(() => {
    fetchClues();
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="App">
      <Header></Header>

      <ClueFilter
        filter={filter}
        setFilter={setFilter}
        setModalTab={setModalTab}
        modalTab={modalTab}
      />
      <SearchResult
        filter={filter}
        categories={sortedAndSearchedCategories}
        clues={sortedAndSearchedClues}
        isCategoryLoading={isCategoryLoading}
        isClueLoading={isClueLoading}
      />
    </div>
  );
}

export default Search;
