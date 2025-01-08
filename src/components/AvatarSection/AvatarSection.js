import AvatarFrame from "../photoCover/photoCover";
import { useScroll, animated } from "@react-spring/web";

const AvatarSection = ({}) => {
  const { scrollYProgress } = useScroll({});
  return (
    <animated.div
      style={{
        opacity: scrollYProgress,
        translate: 200,
        transform: scrollYProgress.interpolate(
          (y) => `translateY(${y * 100}px)` // Translate up on scroll
        ),
      }}
    >
      <AvatarFrame />
    </animated.div>
  );
};

export default AvatarSection;
