import React, { useRef } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  CameraControls,
  ScrollControls,
  SoftShadows,
  useGLTF,
} from "@react-three/drei";

import { easing, geometry } from "maath";
import "./BuddhaModel.css";

extend(geometry);

export const BuddhaModel = () => {
  return (
    <Canvas
      className="model__canvas"
      shadows="basic"
      eventPrefix="client"
      camera={{
        position: [-40.556, 12.267, 115.498],
        rotation: [-67.57, 56.68, 4.39],
        fov: 40,
        // far: 1000.0,
      }}
    >
      <directionalLight position={(1, 1, 1)} intensity={3} />
      {/* <fog attach="fog" args={["grey", 1, 1.0]} /> */}
      <pointLight position={[10, 10, -20]} intensity={10} />
      <pointLight position={[-10, -10, -20]} intensity={10} />
      <Model />
      <SoftShadows samples={3} />
      <CameraControls
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
        mouseButtons={{ wheel: 0 }}
      />
    </Canvas>
  );
};

function Model(props) {
  const group = useRef();
  const light = useRef();
  const { nodes } = useGLTF("/scene.glb");
  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [0, -state.pointer.x * (Math.PI / 10), 0],
      1.5,
      delta
    );
    easing.damp3(
      group.current.position,
      [0, -5.5, 1 - Math.abs(state.pointer.x)],
      1,
      delta
    );
    easing.damp3(
      light.current.position,
      [state.pointer.x * 12, 0, 8 + state.pointer.y * 4],
      0.2,
      delta
    );
  });
  return (
    <group ref={group} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buddha.geometry}
        scale={0.45}
        position={[-25.9, -25.317, -0.956]}
        rotation={[20.3, -0.09, 19]}
        dispose={null}
      >
        <meshStandardMaterial color="grey" />
      </mesh>

      <spotLight
        angle={0.5}
        penumbra={0.5}
        ref={light}
        castShadow
        intensity={10}
        shadow-mapSize={1024}
        shadow-bias={-0.001}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-10, 10, -10, 10, 0.1, 50]}
        />
      </spotLight>
    </group>
  );
}
