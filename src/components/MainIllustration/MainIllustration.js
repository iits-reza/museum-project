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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bluebg}
      ></motion.div>
      <motion.div>
        <img src={BuddhaStatueSrc} alt="Buddha statue" />
      </motion.div>
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
