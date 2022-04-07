import React from "react";
import ClueItem from "./ClueItem";
import cl from "./ClueList.module.css";
import { useState } from "react";

const ClueList = ({ clues, title }) => {
  if (!clues.length) {
    return <h1 className={cl.title}>No questions found!</h1>;
  }
  return (
    <div className={cl.body}>
      <div style={{ width: "880px" }}>
        <h1 className={cl.title}>{title}</h1>
        {clues.map((clue, index) => (
          <ClueItem
            key={clue.id}
            number={index + 1}
            clue={clue}
            isOpened={false}
          />
        ))}
      </div>
    </div>
  );
};

export default ClueList;
