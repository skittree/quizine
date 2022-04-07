import React from "react";
import ClueList from "./search/ClueList";
import CategoryList from "./search/CategoryList";
import Loader from "./UI/Loader/Loader";

const SearchResult = ({
  filter,
  categories,
  clues,
  isClueLoading,
  isCategoryLoading,
}) => {
  return (
    <div>
      {filter.sort === "question" ? (
        <div>
          {isClueLoading ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Loader />
            </div>
          ) : (
            <ClueList clues={clues} title={clues.length + " Results found"} />
          )}
        </div>
      ) : (
        <div>
          {isCategoryLoading ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Loader />
            </div>
          ) : (
            <CategoryList
              categories={categories}
              title={categories.length + " Results found"}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
{
}
