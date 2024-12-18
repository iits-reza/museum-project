import React from "react";
import { useSpring, animated } from "@react-spring/web";

const Petal = ({ rotationAngle, delay }) => {
  const styles = useSpring({
    from: { transform: "rotate(0deg" },
    to: { transform: `rotate(${rotationAngle}deg)` },
    delay: delay, // Delay before this animation starts
    config: { duration: 1000 },
  });
  return (
    <animated.g style={styles} transform-origin="100 100">
      {/* Petal shape */}
      <path d="M100,50 Q130,80 100,110 Q70,80 100,50 Z" fill="#FFB6C1" />
    </animated.g>
  );
};

const LotusAnimation = () => {
  const petals = [
    { angle: 0, delay: 0 },
    { angle: 30, delay: 300 },
    { angle: 55, delay: 300 },
    { angle: 90, delay: 200 },
    { angle: -55, delay: 300 },
    { angle: -30, delay: 300 },
    { angle: -90, delay: 200 },
  ];

  return (
    <svg
      width="600"
      height="600"
      viewBox="0 0 200 200"
      style={{ border: "1px solid lightgray" }}
    >
      {/* Center of the SVG */}
      {petals.map((petal, index) => (
        <Petal key={index} rotationAngle={petal.angle} delay={petal.delay} />
      ))}
    </svg>
  );
};

export default LotusAnimation;
