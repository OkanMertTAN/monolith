"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Float, Stars, Sparkles } from "@react-three/drei"; // CameraControls yerine OrbitControls
import * as THREE from "three";
import { useRef, useMemo } from "react";

// RASTGELE GÖKDELEN OLUŞTURUCU
function Skyscraper({ position, scale, color }: any) {
  return (
    <mesh position={position} scale={scale} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial
        color={color}
        metalness={0.1}
        roughness={0}
        transmission={0.6}
        thickness={2}
        ior={1.5}
        clearcoat={1}
      />
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
        <lineBasicMaterial color="white" transparent opacity={0.1} />
      </lineSegments>
    </mesh>
  );
}

// TRAFİK IŞIKLARI
function TrafficLines({ count = 50 }) {
  const lines = useMemo(() => {
    return new Array(count).fill(0).map(() => ({
      position: [
        (Math.random() - 0.5) * 20,
        -0.5,
        (Math.random() - 0.5) * 20
      ],
      speed: Math.random() * 0.2 + 0.1,
      length: Math.random() * 2 + 1
    }));
  }, [count]);

  const group = useRef<THREE.Group>(null);

  useFrame(() => {
    if (group.current) {
        group.current.children.forEach((child, i) => {
            const line = lines[i];
            child.position.z += line.speed;
            if (child.position.z > 10) child.position.z = -10;
        });
    }
  });

  return (
    <group ref={group}>
      {lines.map((line, i) => (
        <mesh key={i} position={line.position as any} rotation={[Math.PI/2, 0, 0]}>
           <planeGeometry args={[0.05, line.length]} />
           <meshBasicMaterial color="#f59e0b" transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

export default function CityScene() {
  return (
    <div className="absolute inset-0 h-full w-full bg-slate-900">
      <Canvas shadows camera={{ position: [-5, 5, 10], fov: 45 }}>
        
        <color attach="background" args={['#0f172a']} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Environment preset="city" />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#3b82f6" />
        <pointLight position={[-10, 5, -10]} intensity={2} color="#f97316" />

        <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
            <group rotation={[0, Math.PI / 4, 0]}>
                <Skyscraper position={[0, 4, 0]} scale={[3, 12, 3]} color="#e2e8f0" />
                <Skyscraper position={[-3, 2, 2]} scale={[2, 6, 2]} color="#cbd5e1" />
                <Skyscraper position={[3, 3, -1]} scale={[2, 8, 2]} color="#94a3b8" />
                <Skyscraper position={[-2, 1, -4]} scale={[1.5, 5, 1.5]} color="#64748b" />
                <Skyscraper position={[4, 1, 3]} scale={[1.5, 4, 1.5]} color="#475569" />
                <Skyscraper position={[-6, 0, -2]} scale={[1, 3, 1]} color="#334155" />
                <Skyscraper position={[5, -1, -5]} scale={[1, 4, 1]} color="#334155" />
            </group>
        </Float>

        <TrafficLines />
        <Sparkles count={100} scale={12} size={2} speed={0.4} opacity={0.5} color="#60a5fa" />

        {/* DÜZELTME BURADA: CameraControls yerine OrbitControls */}
        <OrbitControls 
            minPolarAngle={Math.PI / 3} 
            maxPolarAngle={Math.PI / 2}
            autoRotate={true}
            autoRotateSpeed={0.5}
            enableZoom={false}
            enablePan={false}
        />

      </Canvas>
    </div>
  );
}