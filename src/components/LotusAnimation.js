import React from "react";
import { useSpring, animated, useTrail } from "@react-spring/web";
import "./LotusAnimation.css";

const LotusAnimation = () => {
  const petalLayers = [
    { count: 3, radius: 0 }, // Innermost layer
    { count: 5, radius: 50 }, // Middle layer
    { count: 7, radius: 100 }, // Outermost layer
  ];

  // Animation for each layer
  const trail = useTrail(petalLayers.length, {
    from: { opacity: 0, scale: 0.5 },
    to: { opacity: 1, scale: 1 },
    config: { tension: 150, friction: 20 },
    delay: 300,
  });

  return (
    <div className="lotus-container">
      {petalLayers.map(
        (layer, layerIndex) =>
          trail[layerIndex] && (
            <animated.div
              key={layerIndex}
              className="petal-layer"
              style={trail[layerIndex]}
            >
              {/* Render petals within each layer */}
              {Array.from({ length: layer.count }).map((_, petalIndex) => (
                <div
                  key={petalIndex}
                  className="petal"
                  style={{
                    transform: `rotate(${
                      (360 / layer.count) * petalIndex
                    }deg) translateY(${layer.radius}px)`,
                  }}
                />
              ))}
            </animated.div>
          )
      )}
    </div>
  );
};

export default LotusAnimation;
