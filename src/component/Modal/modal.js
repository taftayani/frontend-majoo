import React, { useEffect } from "react";

const ModalDetail = ({ closeModal, children }) => {
  useEffect(() => {
    if (closeModal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  });
  return (
    <div>
      <div className="container-modal">
        <div className="close-container" onClick={closeModal} />
        <div className="modal-wrap">{children}</div>
      </div>
    </div>
  );
};
export default ModalDetail;
