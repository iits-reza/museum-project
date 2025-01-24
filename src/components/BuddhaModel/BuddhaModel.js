import { OrbitControls } from "@react-three/drei";

export const BuddhaModel = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};
