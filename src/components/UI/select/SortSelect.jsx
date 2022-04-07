import React from "react";
import "./SortSelect.css";

const SortSelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className="sortSelect"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SortSelect;
