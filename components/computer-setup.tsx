"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Box, Cylinder, Plane } from "@react-three/drei"
import type { Mesh } from "three"

export default function ComputerSetup() {
  const monitorRef = useRef<Mesh>(null)
  const speakerRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (monitorRef.current) {
      monitorRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02
    }
  })

  return (
    <group position={[0, -1, 0]}>
      {/* Desk surface */}
      <Box args={[6, 0.1, 3]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#1f2937" />
      </Box>

      {/* Monitor */}
      <group position={[0, 0.5, -0.5]}>
        {/* Monitor base */}
        <Cylinder args={[0.3, 0.3, 0.1]} position={[0, -0.5, 0]}>
          <meshStandardMaterial color="#111827" />
        </Cylinder>

        {/* Monitor stand */}
        <Box args={[0.1, 0.8, 0.1]} position={[0, -0.1, 0]}>
          <meshStandardMaterial color="#111827" />
        </Box>

        {/* Monitor screen */}
        <Box ref={monitorRef} args={[2, 1.2, 0.1]} position={[0, 0.3, 0]}>
          <meshStandardMaterial color="#000000" />
        </Box>

        {/* Screen content */}
        <Plane args={[1.8, 1]} position={[0, 0.3, 0.06]}>
          <meshBasicMaterial color="#0f172a" />
        </Plane>

        {/* Code lines simulation */}
        {[...Array(8)].map((_, i) => (
          <Plane key={i} args={[0.1, 0.02]} position={[-0.7 + i * 0.2, 0.4 - i * 0.08, 0.07]}>
            <meshBasicMaterial color={i % 3 === 0 ? "#8b5cf6" : i % 3 === 1 ? "#3b82f6" : "#10b981"} />
          </Plane>
        ))}
      </group>

      {/* Left Speaker */}
      <group position={[-1.5, 0, 0]}>
        <Box args={[0.3, 0.8, 0.3]}>
          <meshStandardMaterial color="#111827" />
        </Box>
        {/* Speaker lights */}
        <Cylinder args={[0.05, 0.05, 0.02]} position={[0, 0.2, 0.16]}>
          <meshBasicMaterial color="#8b5cf6" />
        </Cylinder>
        <Cylinder args={[0.05, 0.05, 0.02]} position={[0, -0.2, 0.16]}>
          <meshBasicMaterial color="#3b82f6" />
        </Cylinder>
      </group>

      {/* Right Speaker */}
      <group position={[1.5, 0, 0]}>
        <Box args={[0.3, 0.8, 0.3]}>
          <meshStandardMaterial color="#111827" />
        </Box>
        {/* Speaker lights */}
        <Cylinder args={[0.05, 0.05, 0.02]} position={[0, 0.2, 0.16]}>
          <meshBasicMaterial color="#ef4444" />
        </Cylinder>
        <Cylinder args={[0.05, 0.05, 0.02]} position={[0, -0.2, 0.16]}>
          <meshBasicMaterial color="#f59e0b" />
        </Cylinder>
      </group>

      {/* Keyboard */}
      <Box args={[1.2, 0.05, 0.4]} position={[0, -0.4, 0.8]}>
        <meshStandardMaterial color="#1f2937" />
      </Box>

      {/* Mouse */}
      <Box args={[0.15, 0.05, 0.25]} position={[0.8, -0.4, 0.6]}>
        <meshStandardMaterial color="#111827" />
      </Box>

      {/* Mouse pad */}
      <Plane args={[0.8, 0.6]} position={[0.8, -0.44, 0.6]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#7c3aed" />
      </Plane>
    </group>
  )
}
