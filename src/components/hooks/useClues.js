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

export const useClues = (clues, sort, query, difficulty, date) => {
  // const sortedClues = useSortedClues(clues, sort);
  const sortedClues = clues;

  const difficultyOptions = [
    [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    [100, 200, 300],
    [400, 500, 600],
    [700, 800, 900, 1000],
  ];

  const dateOptions = [
    new Date("2013-01-06T12:00:00.000Z"),
    new Date("2015-01-01T12:00:00.000Z"),
    new Date("2014-01-06T12:00:00.000Z"),
    new Date("2014-01-01T12:00:00.000Z"),
  ];

  const sortedAndSearchedClues = useMemo(() => {
    return sortedClues
      .filter((clue) =>
        clue.question.toLowerCase().includes(query.toLowerCase())
      )
      .filter((clue) => difficultyOptions[difficulty].includes(clue.value))
      .filter((clue) => dateOptions[date] < new Date(clue.airdate))
      .filter((clue) => !(clue.question.length === 0));
  }, [query, difficulty, date, sortedClues]);
  return sortedAndSearchedClues;
};
