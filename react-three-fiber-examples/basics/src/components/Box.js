import React from "react";
import { useBox } from "@react-three/cannon";

export default function Box({color}) {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));

  console.log("color", color)

  //const {r,g,b} = color.rgb;

  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      ref={ref}
      position={[0, 2, 0]}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color={color.hex} />
    </mesh>
  );
}
