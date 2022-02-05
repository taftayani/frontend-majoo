/* eslint-disable jsx-a11y/alt-text */
import React from "react";
const ImageComponent = ({ srcImg, classImg }) => {
  return (
    //   this component for images need
    <div>
      <img className={classImg} src={srcImg} />
    </div>
  );
};
export default ImageComponent;
