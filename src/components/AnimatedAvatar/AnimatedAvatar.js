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
        className="avatar__info"
      >
        <h1 className="avatar__title">Shahr-e- Zohak or Red city</h1>
        <p className="avatar__description">
          There are many legends among the Hazara people about this city. One of
          them is the following legend: In this military fortress, a powerful
          king known as Zahhak ruled. To protect himself from enemies, he kept
          two snakes on his shoulders, which were said to eat human brains. The
          local population had to prepare one of their own people to feed these
          snakes. One day, one of them attacked the king, ate his brains, and
          disappeared into the valley near the palace.
        </p>
      </motion.div>
    </div>
  );
};
