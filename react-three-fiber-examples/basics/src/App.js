import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, PerspectiveCamera } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import Box from "./components/Box";
import Plane from "./components/Plane";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState({ hex: "#AC1515" });

  const handleChange = (color, event) => {
    console.log("handleChange", color);
    setColor(color);
  };

  return (
    <>
      <SketchPicker
        style={{ position: "static" }}
        color={color}
        onChange={handleChange}
      />
      <Canvas>
        <OrbitControls />
        <PerspectiveCamera makeDefault position={[Math.PI * 5, 10, 5]} fov={30} />
        <Stars />

        <ambientLight intensity={0.7} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Physics>
          <Box color={color} />
          <Plane />
        </Physics>
      </Canvas>
    </>
  );
}
