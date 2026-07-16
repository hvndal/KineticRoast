"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, ContactShadows, PresentationControls } from "@react-three/drei";
import * as THREE from "three";

function PourOverSet() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* Carafe */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.8, 1.2, 1.8, 32]} />
        <meshPhysicalMaterial
          transmission={1}
          thickness={0.1}
          roughness={0.1}
          ior={1.5}
          color="#ffffff"
          transparent
        />
      </mesh>

      {/* Coffee Liquid inside */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.95, 1.15, 0.8, 32]} />
        <meshPhysicalMaterial
          color="#2d1b0e"
          roughness={0.2}
          transmission={0.5}
          thickness={0.5}
        />
      </mesh>

      {/* Dripper (Copper) */}
      <mesh position={[0, 1.9, 0]}>
        <cylinderGeometry args={[0.9, 0.2, 1, 32]} />
        <meshStandardMaterial
          color="#b87333"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

export function CoffeeRitual() {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={1} color="#ffbf00" />

        <PresentationControls
          global
          rotation={[0.13, 0.1, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          snap
        >
          <Float rotationIntensity={0.4} floatIntensity={0.5} speed={1.5}>
            <PourOverSet />
          </Float>
        </PresentationControls>

        <ContactShadows position={[0, -1.5, 0]} opacity={0.5} scale={10} blur={2} far={4} color="#000000" />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
