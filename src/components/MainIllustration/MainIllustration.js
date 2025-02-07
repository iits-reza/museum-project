import * as motion from "motion/react-client";
import "./MainIllustration.css";
import BuddhaStatueSrc from "../../images/asset_main/buddha_statue.png";

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
      <div className="illustration_left">
        <motion.h1>The greate Buddha statue of Bamiyan</motion.h1>
        <motion.p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </motion.p>
      </div>
      <div className="illustration_right">
        <motion.div
          className="illustration_bluebg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        ></motion.div>
        <motion.img
          src={BuddhaStatueSrc}
          className="illsutration_buddhaImageStyle"
          alt="Buddha statue"
          initial={{ translateY: 100 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration: 1.3 }}
        />
      </div>
      {/* <Lottie options={defaultOptions} height={40} width={40} /> */}
    </div>
  );
}
