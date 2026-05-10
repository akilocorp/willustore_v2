"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const PHONE_COUNT = 60;
const RADIUS = 1.6;
const PULSE_COUNT = 8;

function fibonacciSphere(n: number, radius: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const phi = Math.PI * (Math.sqrt(5) - 1);
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    points.push(
      new THREE.Vector3(Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius)
    );
  }
  return points;
}

type PhoneState = {
  litUntil: number;
  nextLightAt: number;
};

function Phones({ positions }: { positions: THREE.Vector3[] }) {
  const screensRef = useRef<THREE.InstancedMesh>(null!);
  const bodiesRef = useRef<THREE.InstancedMesh>(null!);
  const states = useRef<PhoneState[]>(
    positions.map(() => ({
      litUntil: -1,
      nextLightAt: Math.random() * 8,
    }))
  );

  const dim = useMemo(() => new THREE.Color(0x141414), []);
  const lit = useMemo(() => new THREE.Color("#4a9d6f"), []);
  const current = useMemo(
    () => positions.map(() => new THREE.Color(0x141414)),
    [positions]
  );

  // Setup instanced matrices once: each phone faces outward from origin.
  useEffect(() => {
    const dummy = new THREE.Object3D();
    const up = new THREE.Vector3(0, 1, 0);
    positions.forEach((p, i) => {
      const forward = p.clone().normalize();
      const target = p.clone().add(forward); // look further out so +Z points outward
      // Body matrix
      dummy.position.copy(p);
      dummy.up.copy(up);
      dummy.lookAt(target);
      dummy.updateMatrix();
      bodiesRef.current.setMatrixAt(i, dummy.matrix);

      // Screen sits slightly in front of the body
      dummy.position.copy(p.clone().add(forward.clone().multiplyScalar(0.028)));
      dummy.lookAt(target.clone().add(forward));
      dummy.updateMatrix();
      screensRef.current.setMatrixAt(i, dummy.matrix);

      // Initial dim instance color
      screensRef.current.setColorAt(i, dim);
    });
    bodiesRef.current.instanceMatrix.needsUpdate = true;
    screensRef.current.instanceMatrix.needsUpdate = true;
    if (screensRef.current.instanceColor) {
      screensRef.current.instanceColor.needsUpdate = true;
    }
  }, [positions, dim]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    let dirty = false;
    for (let i = 0; i < positions.length; i++) {
      const s = states.current[i];
      if (t > s.litUntil && t > s.nextLightAt) {
        s.litUntil = t + 0.9 + Math.random() * 0.4;
        s.nextLightAt = s.litUntil + 2 + Math.random() * 6;
      }
      const isLit = t < s.litUntil;
      const target = isLit ? lit : dim;
      const c = current[i];
      const before = c.getHex();
      c.lerp(target, 0.12);
      if (c.getHex() !== before) {
        screensRef.current.setColorAt(i, c);
        dirty = true;
      }
    }
    if (dirty && screensRef.current.instanceColor) {
      screensRef.current.instanceColor.needsUpdate = true;
    }
  });

  return (
    <group>
      <instancedMesh
        ref={bodiesRef}
        args={[undefined, undefined, positions.length]}
      >
        <boxGeometry args={[0.16, 0.32, 0.05]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} metalness={0.1} />
      </instancedMesh>
      <instancedMesh
        ref={screensRef}
        args={[undefined, undefined, positions.length]}
      >
        <planeGeometry args={[0.12, 0.26]} />
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>
    </group>
  );
}

type Pulse = {
  fromIdx: number;
  toIdx: number;
  startedAt: number;
  duration: number;
};

function Pulses({ positions }: { positions: THREE.Vector3[] }) {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const pulses = useRef<Pulse[]>(
    Array.from({ length: PULSE_COUNT }, () => ({
      fromIdx: 0,
      toIdx: 1,
      startedAt: -10,
      duration: 1,
    }))
  );

  const tmp = useMemo(() => new THREE.Object3D(), []);
  const fromV = useMemo(() => new THREE.Vector3(), []);
  const toV = useMemo(() => new THREE.Vector3(), []);
  const cur = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    for (let i = 0; i < PULSE_COUNT; i++) {
      const p = pulses.current[i];
      const elapsed = t - p.startedAt;
      // Recycle expired pulses
      if (elapsed > p.duration) {
        const stagger = 0.15 + Math.random() * 0.4;
        p.fromIdx = Math.floor(Math.random() * positions.length);
        do {
          p.toIdx = Math.floor(Math.random() * positions.length);
        } while (p.toIdx === p.fromIdx);
        p.startedAt = t + stagger;
        p.duration = 0.9 + Math.random() * 0.5;
      }
      const localT = (t - p.startedAt) / p.duration;
      if (localT < 0 || localT > 1) {
        // Hide off-screen
        tmp.position.set(0, 0, 0);
        tmp.scale.setScalar(0);
        tmp.updateMatrix();
        meshRef.current.setMatrixAt(i, tmp.matrix);
        continue;
      }
      fromV.copy(positions[p.fromIdx]);
      toV.copy(positions[p.toIdx]);
      cur.copy(fromV).lerp(toV, localT);
      // Slight outward bow on the path so it arcs above the surface
      const mid = fromV.clone().add(toV).multiplyScalar(0.5).normalize().multiplyScalar(RADIUS * 1.15);
      const arcBlend = Math.sin(localT * Math.PI);
      cur.lerp(mid, arcBlend * 0.35);

      tmp.position.copy(cur);
      // Fade in/out: full size mid-flight
      const scale = 0.05 + 0.04 * arcBlend;
      tmp.scale.setScalar(scale);
      tmp.updateMatrix();
      meshRef.current.setMatrixAt(i, tmp.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, PULSE_COUNT]}
    >
      <sphereGeometry args={[1, 12, 12]} />
      <meshBasicMaterial color="#c44d2e" toneMapped={false} />
    </instancedMesh>
  );
}

function Rings() {
  return (
    <group>
      {/* Outer torus */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[RADIUS * 1.32, 0.005, 8, 96]} />
        <meshBasicMaterial color="#4a9d6f" transparent opacity={0.35} toneMapped={false} />
      </mesh>
      {/* Three latitude rings */}
      {[-0.55, 0, 0.55].map((y, i) => {
        const r = Math.sqrt(Math.max(0, 1 - y * y)) * RADIUS;
        return (
          <mesh
            key={i}
            position={[0, y * RADIUS, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <torusGeometry args={[r, 0.003, 6, 64]} />
            <meshBasicMaterial color="#a8e0bf" transparent opacity={0.18} toneMapped={false} />
          </mesh>
        );
      })}
    </group>
  );
}

function Globe() {
  const positions = useMemo(() => fibonacciSphere(PHONE_COUNT, RADIUS), []);
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.05 * delta;
    }
  });

  return (
    <group ref={groupRef}>
      <Phones positions={positions} />
      <Rings />
      <Pulses positions={positions} />
    </group>
  );
}

export default function HeroGlobe() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0.2, 4.4], fov: 38 }}
    >
      <ambientLight intensity={0.45} />
      <pointLight position={[3, 2, 4]} intensity={1.4} color="#a8e0bf" />
      <pointLight position={[-3, -2, 3]} intensity={0.5} color="#c44d2e" />
      <Globe />
    </Canvas>
  );
}
