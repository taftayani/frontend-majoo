import React from "react";
const Label = ({ children, classText }) => {
  return (
    //   this component for label need
    <div>
      <label className={classText}>{children}</label>
    </div>
  );
};
export default Label;
