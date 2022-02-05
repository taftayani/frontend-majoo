import React from "react";
const Label = ({ labelText, classText }) => {
  return (
    <div>
      <label className={classText}>{labelText}</label>
    </div>
  );
};
export default Label;
