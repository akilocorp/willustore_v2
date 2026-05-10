"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Text } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type FileSpec = {
  label: string;
  color: string;
  textColor: string;
  from: [number, number, number];
  to: [number, number, number];
  rot: number;
  delay: number;
};

const FILES: FileSpec[] = [
  { label: "PDF",  color: "#c44d2e", textColor: "#fafaf7", from: [-4.0,  2.6, 1.4], to: [-0.55, -0.10, 0.18], rot: -0.18, delay: 0.0 },
  { label: "DOCX", color: "#2c5e3f", textColor: "#fafaf7", from: [ 4.0,  2.4, 1.4], to: [-0.18,  0.05, 0.24], rot:  0.10, delay: 0.4 },
  { label: "CSV",  color: "#1a1a1a", textColor: "#fafaf7", from: [-4.0, -2.4, 1.4], to: [ 0.20, -0.02, 0.30], rot:  0.06, delay: 0.8 },
  { label: "MD",   color: "#a8e0bf", textColor: "#0a0a0a", from: [ 4.0, -2.6, 1.4], to: [ 0.55,  0.08, 0.36], rot: -0.14, delay: 1.2 },
];

const MODELS = ["GPT-5", "Claude", "Llama 4", "Gemini"];

function FileIcon({ spec }: { spec: FileSpec }) {
  const groupRef = useRef<THREE.Group>(null!);

  const curve = useMemo(() => {
    const start = new THREE.Vector3(...spec.from);
    const end = new THREE.Vector3(...spec.to);
    const mid = new THREE.Vector3(
      (start.x + end.x) * 0.5,
      Math.max(start.y, end.y) + 0.6,
      (start.z + end.z) * 0.5 + 0.7
    );
    return new THREE.QuadraticBezierCurve3(start, mid, end);
  }, [spec.from, spec.to]);

  useGSAP(
    () => {
      const g = groupRef.current;
      if (!g) return;
      const obj = { t: 0, r: spec.rot - 0.5 };
      // Initial pose
      const p0 = curve.getPoint(0);
      g.position.copy(p0);
      g.rotation.set(0, 0, obj.r);

      gsap.to(obj, {
        t: 1,
        r: spec.rot,
        duration: 0.8,
        delay: 0.6 + spec.delay, // wait for card entrance
        ease: "power2.out",
        onUpdate: () => {
          const p = curve.getPoint(obj.t);
          g.position.copy(p);
          g.rotation.z = obj.r;
        },
      });
    },
    { dependencies: [spec, curve] }
  );

  return (
    <group ref={groupRef}>
      <RoundedBox args={[0.5, 0.66, 0.06]} radius={0.05} smoothness={3}>
        <meshStandardMaterial
          color={spec.color}
          roughness={0.55}
          metalness={0.05}
        />
      </RoundedBox>
      {/* Subtle horizontal "lines" hint on the file face */}
      <mesh position={[0, 0.18, 0.032]}>
        <planeGeometry args={[0.34, 0.02]} />
        <meshBasicMaterial color={spec.textColor} transparent opacity={0.18} />
      </mesh>
      <mesh position={[0, 0.10, 0.032]}>
        <planeGeometry args={[0.30, 0.02]} />
        <meshBasicMaterial color={spec.textColor} transparent opacity={0.14} />
      </mesh>
      <Text
        position={[0, -0.14, 0.034]}
        fontSize={0.10}
        color={spec.textColor}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.04}
      >
        {spec.label}
      </Text>
    </group>
  );
}

function DropzoneCard() {
  const groupRef = useRef<THREE.Group>(null!);

  useGSAP(
    () => {
      const g = groupRef.current;
      if (!g) return;
      g.scale.setScalar(0.9);
      gsap.to(g.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.6,
        ease: "power2.out",
      });
    },
    { dependencies: [] }
  );

  return (
    <group ref={groupRef}>
      {/* Card body */}
      <RoundedBox args={[3.2, 1.9, 0.04]} radius={0.08} smoothness={4}>
        <meshStandardMaterial color="#f4f2ec" roughness={0.7} metalness={0} />
      </RoundedBox>
      {/* Inner outline ring – evokes a dropzone */}
      <mesh position={[0, 0, 0.022]}>
        <ringGeometry args={[0.0, 0.0, 4]} />
        <meshBasicMaterial visible={false} />
      </mesh>
      {/* Soft inset hint rectangle */}
      <mesh position={[0, -0.05, 0.022]}>
        <planeGeometry args={[2.95, 1.65]} />
        <meshBasicMaterial color="#a8e0bf" transparent opacity={0.06} />
      </mesh>

      <Text
        position={[0, 0.62, 0.025]}
        fontSize={0.16}
        color="#0a0a0a"
        anchorX="center"
        anchorY="middle"
        letterSpacing={-0.01}
      >
        Drop your files
      </Text>
      <Text
        position={[0, 0.44, 0.025]}
        fontSize={0.085}
        color="#6b6b6b"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.02}
      >
        PDF · DOCX · CSV · MD · or anything else
      </Text>
    </group>
  );
}

function AmbientParticles() {
  const ref = useRef<THREE.Points>(null!);
  const COUNT = 70;
  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 5;
      arr[i * 3 + 2] = -Math.random() * 4 - 0.5;
    }
    return arr;
  }, []);
  const drift = useMemo(() => new Float32Array(COUNT).map(() => 0.4 + Math.random() * 0.6), []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    const attr = ref.current.geometry.attributes
      .position as THREE.BufferAttribute;
    for (let i = 0; i < COUNT; i++) {
      let y = attr.getY(i) + delta * 0.06 * drift[i];
      if (y > 2.6) y = -2.6;
      attr.setY(i, y);
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#c44d2e"
        size={0.05}
        transparent
        opacity={0.45}
        depthWrite={false}
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.55} />
      {/* Soft green spotlight on the card */}
      <spotLight
        position={[0, 2.5, 3]}
        angle={0.55}
        penumbra={0.7}
        intensity={1.7}
        color="#a8e0bf"
        target-position={[0, 0, 0]}
      />
      <pointLight position={[3, -1.5, 2]} intensity={0.6} color="#c44d2e" />
      <pointLight position={[-3, 1.5, 2]} intensity={0.4} color="#fafaf7" />

      <AmbientParticles />
      <DropzoneCard />
      {FILES.map((f) => (
        <FileIcon key={f.label} spec={f} />
      ))}
    </>
  );
}

function ModelPill() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = window.setInterval(
      () => setIdx((i) => (i + 1) % MODELS.length),
      1200
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-[6%] flex justify-center">
      <div className="inline-flex items-center gap-3 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-2 backdrop-blur">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-cream/55">
          Answers from
        </span>
        <span className="relative inline-block min-w-[68px] text-[14px] font-medium text-cream">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={MODELS[idx]}
              initial={{ opacity: 0, filter: "blur(6px)", y: 4 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(6px)", y: -4 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="inline-block"
            >
              {MODELS[idx]}
            </motion.span>
          </AnimatePresence>
        </span>
        <span className="relative inline-flex h-1.5 w-1.5 items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-green-bright live-dot" />
        </span>
      </div>
    </div>
  );
}

export default function Chapter1Upload() {
  return (
    <div className="relative h-full w-full">
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0.2, 4.4], fov: 38 }}
      >
        <Scene />
      </Canvas>
      <ModelPill />
    </div>
  );
}
