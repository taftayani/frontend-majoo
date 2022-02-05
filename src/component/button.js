import React from "react";
const ButtonComponent = ({ children, classButton, onClick }) => {
  return (
    //   this component for button need
    <div>
      <label onClick={onClick} className={classButton}>
        {children}
      </label>
    </div>
  );
};
export default ButtonComponent;
