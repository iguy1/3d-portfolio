"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Torus } from "@react-three/drei"
import type { Mesh } from "three"

export default function ContactAnimation() {
  const groupRef = useRef<Mesh>(null)
  const torus1Ref = useRef<Mesh>(null)
  const torus2Ref = useRef<Mesh>(null)
  const torus3Ref = useRef<Mesh>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }

    if (torus1Ref.current) {
      torus1Ref.current.rotation.x = state.clock.elapsedTime * 0.5
      torus1Ref.current.rotation.z = state.clock.elapsedTime * 0.2
    }

    if (torus2Ref.current) {
      torus2Ref.current.rotation.x = state.clock.elapsedTime * -0.3
      torus2Ref.current.rotation.y = state.clock.elapsedTime * 0.4
    }

    if (torus3Ref.current) {
      torus3Ref.current.rotation.z = state.clock.elapsedTime * 0.6
      torus3Ref.current.rotation.y = state.clock.elapsedTime * -0.2
    }
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />

      {/* Stacked rotating torus rings */}
      <Torus ref={torus1Ref} args={[1.5, 0.3, 16, 100]} position={[0, 1, 0]}>
        <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
      </Torus>

      <Torus ref={torus2Ref} args={[1.2, 0.25, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
      </Torus>

      <Torus ref={torus3Ref} args={[0.9, 0.2, 16, 100]} position={[0, -1, 0]}>
        <meshStandardMaterial color="#06b6d4" metalness={0.8} roughness={0.2} />
      </Torus>

      {/* Additional smaller rings for complexity */}
      <Torus args={[0.6, 0.15, 16, 100]} position={[0, -2, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <meshStandardMaterial color="#10b981" metalness={0.8} roughness={0.2} />
      </Torus>

      <Torus args={[0.3, 0.1, 16, 100]} position={[0, -2.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#f59e0b" metalness={0.8} roughness={0.2} />
      </Torus>
    </group>
  )
}
