import * as motion from "motion/react-client";
import "./MainIllustration.css";
import BuddhaStatueSrc from "../../images/asset_main/buddha_statue.png";
export default function MainIllustration() {
  return (
    <div className="illustration">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        style={bluebg}
      ></motion.div>
      <motion.div>
        <img src={BuddhaStatueSrc} alt="Buddha statue" />
      </motion.div>
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
