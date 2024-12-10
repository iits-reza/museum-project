import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./LotusAnimation.css";

const LotusAnimation = () => {
  const numberOfPetals = 8; // Adjust based on desired petal count

  return (
    <div className="lotus-container">
      {Array.from({ length: numberOfPetals }).map((_, index) => {
        const angle = (index / numberOfPetals) * 360; // Calculate angle for each petal

        // Animation for each petal
        const petalSpring = useSpring({
          from: { transform: `scale(0.5) rotate(${angle}deg)`, opacity: 0 },
          to: { transform: `scale(1) rotate(${angle}deg)`, opacity: 1 },
          delay: index * 300, // Staggered animation for each petal
          config: { tension: 120, friction: 20 },
        });

        return (
          <animated.div
            key={index}
            className="petal"
            style={{
              ...petalSpring,
              transformOrigin: "center center",
            }}
          />
        );
      })}
    </div>
  );
};

export default LotusAnimation;
