import React, { useState } from "react";
import cl from "./ClueItem.module.css";

const ClueItem = (props) => {
  return (
    <div className={cl.box}>
      <div className={cl.question}>{props.clue.question}</div>
      <div className={cl.options}>
        <div>Show Anwer</div>
        <div>more options</div>
      </div>
    </div>
  );
};

export default ClueItem;
