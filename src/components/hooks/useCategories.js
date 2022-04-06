import React from "react";
import { useMemo } from "react";

export const useSortedCategories = (categories, sortBy) => {
  const sortedCategories = useMemo(() => {
    if (sortBy == "name") {
      return [...categories].sort((a, b) =>
        a["title"].localeCompare(b["title"])
      );
    }
    if (sortBy == "clues") {
      return [...categories].sort(
        (a, b) => b["clues_count"] - a["clues_count"]
      );
    }
    return categories;
  }, [sortBy, categories]);
  return sortedCategories;
};

export const useCategories = (categories, sortBy, query) => {
  const sortedCategories = useSortedCategories(categories, sortBy);

  const sortedAndSearchedCategories = useMemo(() => {
    return sortedCategories.filter((category) =>
      category.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedCategories]);

  return sortedAndSearchedCategories;
};
