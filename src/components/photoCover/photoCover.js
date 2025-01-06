import React from "react";
import "./photoCover.css";
import photoPng from "../../images/buddha.png";
const AvatarFrame = ({ photo_src }) => {
  return (
    <div className="photo-container">
      <img src={photoPng} className="photo-container__photo" alt="photoWithCover" />
    </div>
  );
};
export default AvatarFrame;
