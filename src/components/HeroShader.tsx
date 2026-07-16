"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;

    // Smooth, slow flowing heat noise
    float heat1 = 0.5 + 0.5 * sin(uv.x * 2.0 + uTime * 0.5 + uv.y * 1.5);
    float heat2 = 0.5 + 0.5 * cos(uv.y * 3.0 - uTime * 0.7 + uv.x * 2.0);

    float combined = (heat1 + heat2) * 0.5;

    // Brand colors from DESIGN.md
    vec3 deepBlack = vec3(0.04, 0.04, 0.0);
    vec3 espresso = vec3(0.17, 0.11, 0.06); // Tertiary
    vec3 amber = vec3(0.91, 0.72, 0.14); // Primary (eab924)
    vec3 copper = vec3(0.72, 0.45, 0.20); // Secondary (b87333)

    vec3 color = mix(deepBlack, espresso, combined);
    color = mix(color, copper, pow(combined, 3.0));
    color = mix(color, amber, pow(combined, 5.0));

    // Vignette
    float dist = distance(uv, vec2(0.5));
    color *= 1.2 - dist;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function ShaderPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
        }}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

export function HeroShader() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ShaderPlane />
      </Canvas>
    </div>
  );
}
