import { Canvas } from "@react-three/fiber";
import Light from "./light";
import { CameraControls } from "@react-three/drei";

import { Suspense } from "react";

import * as THREE from "three";
import sceneStore from "../store/sceneStore";

import { observer } from "mobx-react-lite";

import Model from "./model";

const Scene = observer(() => {
  return (
    <Canvas
      gl={{ antialias: true, alpha: true }}
      camera={{ fov: 50, position: [0, 2, 3.0] }}
      style={{ backgroundColor: "#333", zIndex: 1 }}
      shadows
      onCreated={({ gl, camera, scene }) => {
        gl.localClippingEnabled = true;
        sceneStore.setCamera(camera as THREE.PerspectiveCamera);
        sceneStore.setScene(scene as THREE.Scene);
      }}
    >
      <Suspense fallback={null}>
        <Light />
        <CameraControls makeDefault />
        <Model />
      </Suspense>
    </Canvas>
  );
});
export default Scene;
