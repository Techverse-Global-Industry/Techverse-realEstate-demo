"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Html, RoundedBox } from "@react-three/drei"
import { Suspense, useMemo, useRef, useState } from "react"
import * as THREE from "three"
import { properties } from "@/lib/data"
import type { Language } from "@/lib/types"

function City({ language }: { language: Language }) {
  const group = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState<number | null>(null)
  const buildings = useMemo(
    () => Array.from({ length: 38 }, (_, index) => ({
      x: (index % 8) * 1.05 - 3.7,
      z: Math.floor(index / 8) * 1.15 - 2.2,
      h: 0.45 + ((index * 7) % 12) * 0.14,
    })),
    [],
  )

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.008
  })

  const pins: [number, number, number][] = [[-2.3, 0, -0.9], [0.6, 0, 1.2], [2.65, 0, -1.55]]

  return (
    <group ref={group} rotation={[-0.64, 0, -0.13]} position={[0, -0.65, 0]}>
      <mesh position={[0, -0.08, 0]}>
        <boxGeometry args={[9.5, 0.12, 7.2]} />
        <meshStandardMaterial color="#d1d7d3" roughness={0.92} />
      </mesh>
      <gridHelper args={[8.8, 16, "#9aa49e", "#bac2be"]} position={[0, 0, 0]} />
      {buildings.map((building, index) => (
        <RoundedBox key={index} args={[0.68, building.h, 0.72]} radius={0.04} smoothness={2} position={[building.x, building.h / 2, building.z]}>
          <meshStandardMaterial color={index % 5 === 0 ? "#9c896a" : "#6f7c76"} roughness={0.68} metalness={0.08} />
        </RoundedBox>
      ))}
      {pins.map((position, index) => (
        <group key={properties[index].id} position={position}>
          <mesh
            position={[0, 1.1, 0]}
            onPointerEnter={(event) => { event.stopPropagation(); setHovered(index) }}
            onPointerLeave={() => setHovered(null)}
          >
            <sphereGeometry args={[0.16, 18, 18]} />
            <meshStandardMaterial color="#c6a66c" emissive="#8c6f3c" emissiveIntensity={hovered === index ? 1.1 : 0.3} />
          </mesh>
          <mesh position={[0, 0.6, 0]}>
            <cylinderGeometry args={[0.025, 0.025, 0.9, 8]} />
            <meshStandardMaterial color="#c6a66c" />
          </mesh>
          {hovered === index && (
            <Html center position={[0, 1.75, 0]} distanceFactor={7} style={{ pointerEvents: "none" }}>
              <div className="map-popover">
                <strong>{properties[index].name}</strong>
                <span>{language === "fr" ? properties[index].typeFr : properties[index].type}</span>
                <span>{properties[index].priceLabel}</span>
              </div>
            </Html>
          )}
        </group>
      ))}
    </group>
  )
}

export default function CityMap({ language }: { language: Language }) {
  return (
    <div className="city-canvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 6.8, 8.2], fov: 43 }} dpr={[1, 1.35]} gl={{ antialias: true, powerPreference: "high-performance" }}>
        <color attach="background" args={["#101612"]} />
        <fog attach="fog" args={["#101612", 9, 18]} />
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 8, 6]} intensity={4} color="#f5e4bf" />
        <Suspense fallback={null}>
          <City language={language} />
        </Suspense>
      </Canvas>
    </div>
  )
}
