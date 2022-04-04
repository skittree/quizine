import React from "react";
import { useMemo } from "react";

// export const useSortedClues = (clues, sort) => {
//   const sortedClues = useMemo(() => {
//     if (sort) {
//       return [...clues].sort((a, b) => a[sort].localeCompare(b[sort]));
//     }
//     return clues;
//   }, [sort, clues]);
//   return sortedClues;
// };

export const useCategories = (categories, sort, query) => {
  // const sortedClues = useSortedClues(clues, sort);
  const sortedCategories = categories;
  const sortedAndSearchedCategories = useMemo(() => {
    return sortedCategories.filter((category) =>
      category.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedCategories]);

  return sortedAndSearchedCategories;
};
