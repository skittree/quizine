import React, { useState, useEffect } from "react";
import "../../App.css";
import Header from "../Header.module/Header";
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
    filter.sort,
    filter.query,
    filter.difficulty,
    filter.date
  );

  const sortedAndSearchedCategories = useCategories(
    categories,
    filter.sort,
    filter.query
  );

  useEffect(() => {
    fetchClues();
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  // const [modal, setModal] = useState(false);

  return (
    <div className="App">
      {/* <MyModal visible={modal} setVisible={setModal}>
        <PostFrom create={createPost} />
      </MyModal> */}
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
