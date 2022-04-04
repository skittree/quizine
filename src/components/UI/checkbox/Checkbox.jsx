import React from "react";
import "./Checkbox.css";

const Checkbox = ({ id, label, value, onChange }) => {
  return (
    <label className="container" onClick={() => onChange(id)}>
      <input type="checkbox" checked={value} />
      <span className="checkmark"></span>
      {label}
    </label>
  );
};

export default Checkbox;
