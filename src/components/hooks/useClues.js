import React from "react";
import { useMemo } from "react";

export const useSortedClues = (clues, sortBy) => {
  const sortedClues = useMemo(() => {
    if (sortBy == "name") {
      return [...clues].sort((a, b) =>
        a["question"].localeCompare(b["question"])
      );
    }
    if (sortBy == "date") {
      return [...clues].sort(
        (a, b) => new Date(b["airdate"]) - new Date(a["airdate"])
      );
    }
    return clues;
  }, [sortBy, clues]);
  return sortedClues;
};

export const useClues = (clues, sortBy, query, difficulty, date) => {
  const sortedClues = useSortedClues(clues, sortBy);

  const difficultyOptions = [
    [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    [100, 200, 300],
    [400, 500, 600],
    [700, 800, 900, 1000],
  ];

  const dateOptions = [
    new Date("2013-01-06T12:00:00.000Z"),
    new Date("2015-03-01T12:00:00.000Z"),
    new Date("2014-09-01T12:00:00.000Z"),
    new Date("2014-03-01T12:00:00.000Z"),
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
