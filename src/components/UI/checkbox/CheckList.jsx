import React from "react";
import Checkbox from "./Checkbox";
import cl from "./CheckList.module.css";
import { useState } from "react";
import CheckboxDisabled from "./CheckboxDisabled";

const CheckList = ({ options, prevSelect, isDisabled, onChange }) => {
  const handleChange = (selectedValue) => {
    options[prevSelect].value = false;
    onChange(selectedValue);
    options[selectedValue].value = true;
  };

  return (
    <div className={cl.checkList} onChange={options}>
      {!isDisabled
        ? options.map((option) => (
            <Checkbox
              key={option.id}
              id={option.id}
              label={option.label}
              value={option.value}
              onChange={(selectedValue) => handleChange(selectedValue)}
            />
          ))
        : options.map((option) => (
            <CheckboxDisabled
              key={option.id}
              id={option.id}
              label={option.label}
            />
          ))}
    </div>
  );
};

export default CheckList;
