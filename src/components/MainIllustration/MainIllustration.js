import * as motion from "motion/react-client";
import "./MainIllustration.css";
import BuddhaStatueSrc from "../../images/asset_main/buddha_statue.png";
import rightTreeSrc from "../../images/asset_main/right_tree.png";
import leftTreeSrc from "../../images/asset_main/left_tree.png";

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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bluebg}
      ></motion.div>
      {/* <motion.div> */}
      <motion.img
        src={BuddhaStatueSrc}
        alt="Buddha statue"
        style={buddhaImageStyle}
        initial={{ translateY: 100 }}
        whileInView={{ translateY: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.img
        src={rightTreeSrc}
        alt="Buddha statue"
        style={rightThreeImageStyle}
        initial={{ translateX: 220 }}
        whileInView={{ translateX: 120 }}
        transition={{ duration: 0.3 }}
      />
      <motion.img
        src={leftTreeSrc}
        alt="Buddha statue"
        style={leftThreeImageStyle}
        initial={{ translateX: -200 }}
        whileInView={{ translateX: -180 }}
        transition={{ duration: 0.3 }}
      />
      {/* </motion.div> */}
      <Lottie options={defaultOptions} height={40} width={40} />
    </div>
  );
}
const bluebg = {
  position: "absolute",
  left: "50%",
  width: 600,
  height: 600,
  background: "#5D96FC",
  borderRadius: "50%",
};
const buddhaImageStyle = {
  position: "absolute",
  width: 618,
  left: "49.3%",
  top: "18%",
};
const rightThreeImageStyle = {
  position: "absolute",
  width: 518,
  left: "49.3%",
  top: "18%",
};
const leftThreeImageStyle = {
  position: "absolute",
  width: 518,
  left: "49.3%",
  top: "18%",
};
