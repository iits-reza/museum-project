import React from "react";
import "./AnimatedAvatar.css";
import * as motion from "motion/react-client";

import BuddhaImage from "../../images/buddha.png";
export const AnimatedAvatar = () => {
  return (
    <div className="animatedAvatar">
      <img
        className="buddhaImagePainting"
        src={BuddhaImage}
        alt="Buddha painting"
      />
      <motion.span className="animatedAvtar_circle"></motion.span>
    </div>
  );
};
