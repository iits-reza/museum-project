// src/components/ModelComponent.js
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  CameraControls,
  Html,
  OrbitControls,
  SoftShadows,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";
import { easing, geometry } from "maath";

export const BuddhaModel = () => {
  return (
    <Canvas shadows="basic" camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
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
  const { scene } = useGLTF("models/spinb.glb");
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
        geometry={new THREE.SphereGeometry(1, 16, 16)}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.2}
        dispose={null}
      >
        <meshLambertMaterial color="#404044" />
      </mesh>
      <Annotation position={[1.75, 3, 2.5]}>
        Thalia <span style={{ fontSize: "1.5em" }}>🌗</span>
      </Annotation>
      <Annotation position={[-4.5, 3.6, -3]}>
        Euphrosyne <span style={{ fontSize: "1.5em" }}>🌖</span>
      </Annotation>
      <Annotation position={[1.5, 8, -3]}>
        <span style={{ fontSize: "1.5em" }}>🌕</span> Aglaia
      </Annotation>
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
function Annotation({ children, ...props }) {
  return (
    <Html
      {...props}
      transform
      occlude="blending"
      geometry={
        /** The geometry is optional, it allows you to use any shape.
         *  By default it would be a plane. We need round edges here ...
         */
        <roundedPlaneGeometry args={[1.66, 0.47, 0.24]} />
      }
    >
      <div className="annotation" onClick={() => console.log(".")}>
        {children}
      </div>
    </Html>
  );
}
