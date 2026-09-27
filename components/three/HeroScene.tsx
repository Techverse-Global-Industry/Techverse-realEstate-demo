"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, RoundedBox } from "@react-three/drei"
import { Suspense, useMemo, useRef } from "react"
import * as THREE from "three"
import { useMediaQuery } from "@/hooks/useMediaQuery"

function Tower() {
  const group = useRef<THREE.Group>(null)
  const floors = useMemo(() => Array.from({ length: 12 }, (_, index) => index), [])

  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.025
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.015
    state.camera.position.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.55
    state.camera.lookAt(0, 1.4, 0)
  })

  return (
    <group ref={group} position={[0.8, -1.1, 0]} rotation={[0, -0.45, 0]}>
      <RoundedBox args={[3.6, 0.42, 2.35]} radius={0.08} smoothness={3} position={[0, 0, 0]}>
        <meshStandardMaterial color="#171c1a" roughness={0.52} metalness={0.12} />
      </RoundedBox>
      {floors.map((floor) => {
        const width = 3.35 - floor * 0.035
        const z = floor % 2 === 0 ? 0.05 : -0.03
        return (
          <group key={floor} position={[0, 0.55 + floor * 0.42, z]}>
            <RoundedBox args={[width, 0.32, 2.1]} radius={0.04} smoothness={2}>
              <meshPhysicalMaterial color="#dfe5df" roughness={0.18} metalness={0.08} clearcoat={0.35} />
            </RoundedBox>
            <mesh position={[0, 0.02, 1.07]}>
              <boxGeometry args={[width * 0.88, 0.2, 0.03]} />
              <meshPhysicalMaterial color="#80928c" transparent opacity={0.58} roughness={0.08} metalness={0.25} />
            </mesh>
          </group>
        )
      })}
      <mesh position={[0, 5.55, 0]}>
        <boxGeometry args={[2.45, 0.18, 1.55]} />
        <meshStandardMaterial color="#b39a71" roughness={0.34} metalness={0.22} />
      </mesh>
    </group>
  )
}

function ArchitecturalSlabs({ compact }: { compact: boolean }) {
  const count = compact ? 4 : 8
  return (
    <group>
      {Array.from({ length: count }, (_, index) => {
        const side = index % 2 === 0 ? -1 : 1
        const y = -0.2 + index * 0.72
        const x = side * (2.7 + (index % 3) * 0.35)
        return (
          <Float key={index} speed={0.55 + index * 0.04} rotationIntensity={0.08} floatIntensity={0.18}>
            <mesh position={[x, y, -1.8 - (index % 2) * 0.5]} rotation={[0.02, side * 0.3, side * 0.03]}>
              <boxGeometry args={[1.8, 0.09, 1.1]} />
              <meshStandardMaterial color={index % 3 === 0 ? "#b39a71" : "#68746f"} roughness={0.5} metalness={0.16} />
            </mesh>
          </Float>
        )
      })}
    </group>
  )
}

function Trees({ compact }: { compact: boolean }) {
  const positions: [number, number, number][] = compact
    ? [[-2.7, -1.45, 1.7], [3.1, -1.45, 0.7]]
    : [[-3.3, -1.45, 1.5], [-2.7, -1.45, 2.4], [3.2, -1.45, 0.6], [3.75, -1.45, 1.6]]
  return (
    <group>
      {positions.map((position, index) => (
        <group key={index} position={position}>
          <mesh position={[0, 0.48, 0]}>
            <cylinderGeometry args={[0.05, 0.08, 0.9, 7]} />
            <meshStandardMaterial color="#4b392a" roughness={1} />
          </mesh>
          <mesh position={[0, 1.15, 0]}>
            <icosahedronGeometry args={[0.52, 1]} />
            <meshStandardMaterial color="#34493d" roughness={0.82} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

function Scene({ compact }: { compact: boolean }) {
  return (
    <>
      <color attach="background" args={["#d8dfdb"]} />
      <fog attach="fog" args={["#d8dfdb", 8, 20]} />
      <ambientLight intensity={1.15} />
      <directionalLight position={[7, 9, 5]} intensity={3.6} color="#fff4da" />
      <directionalLight position={[-6, 4, -5]} intensity={1.2} color="#bfd3d5" />
      <Tower />
      <ArchitecturalSlabs compact={compact} />
      <Trees compact={compact} />
      <gridHelper args={[18, 24, "#77817c", "#b7c0bb"]} position={[0, -1.45, 0]} />
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#cbd3cf" roughness={0.95} />
      </mesh>
    </>
  )
}

export default function HeroScene() {
  const compact = useMediaQuery("(max-width: 767px)")
  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 2.2, compact ? 9.4 : 8.3], fov: compact ? 52 : 46 }} dpr={[1, compact ? 1.2 : 1.5]} gl={{ antialias: true, powerPreference: "high-performance" }}>
        <Suspense fallback={null}>
          <Scene compact={compact} />
        </Suspense>
      </Canvas>
    </div>
  )
}
