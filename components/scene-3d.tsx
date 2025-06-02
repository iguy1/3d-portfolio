"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type { Group } from "three"
import ComputerSetup from "./computer-setup"
import FlowingLines from "./flowing-lines"

export default function Scene3D() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {/* Ambient and directional lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[10, -10, -5]} intensity={0.5} color="#3b82f6" />

      {/* Flowing background lines */}
      <FlowingLines />

      {/* Computer setup */}
      <ComputerSetup />
    </group>
  )
}
