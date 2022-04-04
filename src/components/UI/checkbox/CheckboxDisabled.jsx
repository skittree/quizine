import React from "react";
import "./CheckboxDisabled.css";

const CheckboxDisabled = ({ id, label }) => {
  return (
    <div className="containerDis">
      <div className="circle"></div>
      {label}
    </div>
  );
};

export default CheckboxDisabled;
