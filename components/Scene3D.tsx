"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

/**
 * peachweb tarzı etkileşimli WebGL sahnesi:
 * imlece tepki veren, nefes alıp dağılan (distort) merkez küre +
 * çevresinde yüzen küçük geometriler ve parçacık bulutu. Yeşil palet.
 */

function DistortBlob() {
  const mesh = useRef<THREE.Mesh>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const matRef = useRef<any>(null);
  const { pointer } = useThree();

  useFrame((state, delta) => {
    const m = mesh.current;
    if (!m) return;
    // imlece doğru yumuşak yönelme + sürekli yavaş dönüş
    m.rotation.y += delta * 0.15;
    m.rotation.x = THREE.MathUtils.lerp(m.rotation.x, pointer.y * 0.35, 0.05);
    m.rotation.z = THREE.MathUtils.lerp(m.rotation.z, -pointer.x * 0.25, 0.05);
    // imleç hareketinde distortion'ı canlandır
    if (matRef.current) {
      const target = 0.32 + Math.abs(pointer.x) * 0.18 + Math.abs(pointer.y) * 0.18;
      matRef.current.distort = THREE.MathUtils.lerp(matRef.current.distort, target, 0.04);
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.9}>
      <Icosahedron ref={mesh} args={[1.55, 12]}>
        <MeshDistortMaterial
          ref={matRef}
          color="#10b981"
          emissive="#053a2a"
          emissiveIntensity={0.55}
          roughness={0.18}
          metalness={0.85}
          distort={0.32}
          speed={1.6}
        />
      </Icosahedron>
      {/* tel kafes (wireframe) gölge katmanı — derinlik hissi */}
      <Icosahedron args={[1.62, 4]}>
        <meshBasicMaterial color="#34d399" wireframe transparent opacity={0.12} />
      </Icosahedron>
    </Float>
  );
}

function FloatingBits() {
  const group = useRef<THREE.Group>(null);
  const bits = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        pos: [
          Math.sin(i * 1.7) * (2.6 + (i % 3) * 0.5),
          Math.cos(i * 2.3) * 2.1,
          Math.sin(i * 0.9) * 1.4 - 1,
        ] as [number, number, number],
        scale: 0.06 + (i % 4) * 0.04,
        speed: 0.6 + (i % 5) * 0.25,
      })),
    []
  );

  useFrame((state, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.05;
  });

  return (
    <group ref={group}>
      {bits.map((b, i) => (
        <Float key={i} speed={b.speed} floatIntensity={2} rotationIntensity={1.2}>
          <mesh position={b.pos}>
            <octahedronGeometry args={[b.scale, 0]} />
            <meshStandardMaterial
              color={i % 2 ? "#34d399" : "#10b981"}
              emissive="#10b981"
              emissiveIntensity={0.6}
              roughness={0.3}
              metalness={0.6}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const n = 220;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      arr[i * 3] = (Math.sin(i * 12.9898) * 43758.5453 % 1) * 14 - 7;
      arr[i * 3 + 1] = (Math.sin(i * 78.233) * 43758.5453 % 1) * 10 - 5;
      arr[i * 3 + 2] = (Math.sin(i * 37.719) * 43758.5453 % 1) * 8 - 5;
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#34d399" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      className="!absolute inset-0"
      style={{ pointerEvents: "none" }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 5.2], fov: 45 }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={2.4} color="#34d399" />
      <pointLight position={[-5, -3, 2]} intensity={1.6} color="#10b981" />
      <pointLight position={[0, 3, -4]} intensity={1.2} color="#a7f3d0" />
      <DistortBlob />
      <FloatingBits />
      <Particles />
    </Canvas>
  );
}
