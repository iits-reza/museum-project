// src/components/ModelComponent.js
import React, { useRef } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  CameraControls,
  Environment,
  SoftShadows,
  useGLTF,
} from "@react-three/drei";
import { easing, geometry } from "maath";
import "./BuddhaModel.css";

extend(geometry);

export const BuddhaModel = () => {
  return (
    <Canvas
      shadows="basic"
      eventSource={document.getElementById("root")}
      eventPrefix="client"
      camera={{ position: [0, 1.5, 14], fov: 45 }}
    >
      <fog attach="fog" args={["black", 0, 20]} />
      <pointLight position={[10, -10, -20]} intensity={10} />
      <pointLight position={[-10, -10, -20]} intensity={10} />
      <Model position={[0, -5.5, 3]} rotation={[0, -0.2, 0]} />
      <SoftShadows samples={3} />
      <CameraControls
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

function Model(props) {
  const group = useRef();
  const light = useRef();
  const { nodes } = useGLTF("/head_of_the_buddha.glb");
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
        geometry={nodes.Sketchfab_model.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.2}
        dispose={null}
      >
        <meshLambertMaterial color="#404044" />
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
