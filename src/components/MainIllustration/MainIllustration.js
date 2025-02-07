import * as motion from "motion/react-client";
import "./MainIllustration.css";
import BuddhaStatueSrc from "../../images/asset_main/buddha_statue.png";
import FirstBirdSrc from "../../images/asset_main/bird1.png";
import SecondtBirdSrc from "../../images/asset_main/bird2.png";
import MountainsSrc from "../../images/asset_main/mountains.png";
import CloudsSrc from "../../images/asset_main/clouds.png";

import Lottie from "react-lottie";
import ScrollIcon from "../../lotties/mouse_animation";

export default function MainIllustration() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ScrollIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="illustration">
      <div className="illustration__left">
        <motion.h1 className="illustration__title">
          The greate Buddha statues of Bamiyan
        </motion.h1>
        <motion.p className="illustration__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </motion.p>
      </div>
      <div className="illustration__right">
        <motion.div
          className="illustration__bluebg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        ></motion.div>
        <motion.img
          src={BuddhaStatueSrc}
          className="illsutration__buddhaImageStyle"
          alt="Buddha statue"
          initial={{ translateY: 100 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration: 1.3 }}
        />
        <motion.img
          src={FirstBirdSrc}
          className="illsutration__Bird1ImageStyle"
          alt="Flying bird"
          initial={{ translateX: -100 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 1.3 }}
        />
        <motion.img
          src={SecondtBirdSrc}
          className="illsutration__Bird2ImageStyle"
          alt="Flying bird"
          initial={{ translateY: -100 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration: 1.3 }}
        />
        <motion.img
          src={MountainsSrc}
          className="illsutration__mounts"
          alt="Flying bird"
          initial={{ translateY: 100 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={CloudsSrc}
          className="illsutration__clouds"
          alt="Flying bird"
          initial={{ translateX: 100 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 1.3 }}
        />
      </div>
      {/* <Lottie options={defaultOptions} height={40} width={40} /> */}
    </div>
  );
}
