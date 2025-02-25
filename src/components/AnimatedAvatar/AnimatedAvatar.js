import React from "react";
import "./AnimatedAvatar.css";
import * as motion from "motion/react-client";

import BuddhaImage from "../../images/buddha.png";
import secondImg from "../../images/moughul.png";
import ThirdImg from "../../images/zuhak.png";
export const AnimatedAvatar = () => {
  return (
    <div className="animatedAvatar">
      <motion.div
        initial={{
          translateY: 80,
        }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{
          translateY: 0,
        }}
        className="animatedAvatar__frame"
      >
        <img
          className="buddhaImagePainting"
          src={ThirdImg}
          alt="Buddha painting"
        />
      </motion.div>
      <motion.div
        initial={{
          translateY: 40,
        }}
        transition={{
          duration: 0.3,
        }}
        whileInView={{
          translateY: 0,
        }}
        className="animatedAvatar__frame"
      >
        <img
          className="buddhaImagePainting"
          src={BuddhaImage}
          alt="Buddha painting"
        />
      </motion.div>
      <motion.div
        initial={{
          translateY: 60,
        }}
        transition={{
          duration: 0.4,
        }}
        whileInView={{
          translateY: 0,
        }}
        className="animatedAvatar__frame"
      >
        <img
          className="buddhaImagePainting"
          src={secondImg}
          alt="Buddha painting"
        />
      </motion.div>
    </div>
  );
};
