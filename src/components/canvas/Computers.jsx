import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ screenSize }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  const scale =
    screenSize === "mobile"
      ? 0.45
      : screenSize === "tablet"
      ? 0.55
      : 0.62;

  const position =
    screenSize === "mobile"
      ? [0, -2.2, -2.5]
      : screenSize === "tablet"
      ? [1.5, -2.8, -3]
      : [1, -3.8, -2.5];

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />

      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <pointLight intensity={1} />

      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

useGLTF.preload("./desktop_pc/scene.gltf");

const ComputersCanvas = () => {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setScreenSize("mobile");
      } else if (width < 1280) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        preserveDrawingBuffer: true,
        antialias: false,
        powerPreference: "high-performance",
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Computers screenSize={screenSize} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;