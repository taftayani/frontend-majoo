import React from "react";
const SelectInput = ({ className, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      id="select-list"
      className={className}
    >
      <option value={1}>Done</option>
      <option value={0}>Undone</option>
    </select>
  );
};
export default SelectInput;
