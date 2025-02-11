import React from "react";
import "./AnimatedAvatar.css";
import BuddhaImage from "../../images/buddha.png";
export const AnimatedAvatar = () => {
  return (
    <div className="animatedAvatar">
      <img
        className="buddhaImagePainting"
        src={BuddhaImage}
        alt="Buddha painting"
      />
    </div>
  );
};
