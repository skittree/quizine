import React from "react";
import "./SearchButton.css";

const SearchButton = ({ children, ...props }) => {
  return (
    <button {...props} className="MyBtn">
      {children}
    </button>
  );
};

export default SearchButton;
