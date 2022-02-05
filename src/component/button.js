import React from "react";
const ButtonComponent = ({ children, classButton, onClick }) => {
  return (
    //   this component for button need
    <div>
      <button type="button" onClick={onClick} className={classButton}>
        {children}
      </button>
    </div>
  );
};
export default ButtonComponent;
