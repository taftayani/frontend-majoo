import React from "react";
const InputComponent = ({
  className,
  onChange,
  placeholder,
  valueInput,
  typeInput,
}) => {
  return (
    //   this component for input text need
    <input
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={valueInput}
      type={typeInput}
    />
  );
};
export default InputComponent;
