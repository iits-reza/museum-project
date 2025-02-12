import React from "react";
import "./AnimatedAvatar.css";
import * as motion from "motion/react-client";

import BuddhaImage from "../../images/buddha.png";
export const AnimatedAvatar = () => {
  return (
    <div className="animatedAvatar">
      <motion.div className="animatedAvatar__frame">
        <img
          className="buddhaImagePainting"
          src={BuddhaImage}
          alt="Buddha painting"
        />
      </motion.div>
    </div>
  );
};
