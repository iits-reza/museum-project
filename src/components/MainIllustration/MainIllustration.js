import * as motion from "motion/react-client";
export default function MainIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      style={bluebg}
    ></motion.div>
  );
}
const bluebg = {
  width: 600,
  height: 600,
  background: "#5D96FC",
  borderRadius: "50%",
};
