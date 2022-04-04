import React from "react";
import cl from "./SearchSelect.module.css";

const SearchSelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className={cl.searchSelect}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SearchSelect;
