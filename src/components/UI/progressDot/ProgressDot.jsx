import React from "react";
import cl from "./ProgressDot.module.css";

const ProgressDot = ({ value }) => {
  const rootClasses = [];

  if (value === 0) {
    rootClasses.push(cl.progDotInactive);
  }
  if (value === 1) {
    rootClasses.push(cl.progDotActive);
  }
  if (value === 2) {
    rootClasses.push(cl.progDotCorrect);
  }
  if (value === 3) {
    rootClasses.push(cl.progDotWrong);
  }

  return <div className={rootClasses.join("")}></div>;
};

export default ProgressDot;
