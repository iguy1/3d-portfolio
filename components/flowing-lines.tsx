"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Line } from "@react-three/drei"
import type { Group } from "three"

export default function FlowingLines() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.05
    }
  })

  // Generate flowing line points
  const generateLinePoints = (radius: number, height: number, segments: number) => {
    const points = []
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 4
      const x = Math.cos(angle) * radius
      const y = (i / segments) * height - height / 2
      const z = Math.sin(angle) * radius
      points.push([x, y, z])
    }
    return points
  }

  return (
    <group ref={groupRef}>
      {/* Multiple flowing lines with different radii and positions */}
      {[...Array(8)].map((_, i) => (
        <Line
          key={i}
          points={generateLinePoints(3 + i * 0.5, 10, 100)}
          color={i % 2 === 0 ? "#8b5cf6" : "#3b82f6"}
          lineWidth={1}
          position={[Math.cos(i * 0.8) * 2, 0, Math.sin(i * 0.8) * 2 - 3]}
          rotation={[0, i * 0.3, 0]}
        />
      ))}

      {/* Additional curved lines */}
      {[...Array(6)].map((_, i) => (
        <Line
          key={`curve-${i}`}
          points={generateLinePoints(2 + i * 0.3, 8, 80)}
          color="#6366f1"
          lineWidth={0.5}
          position={[Math.sin(i * 1.2) * 3, Math.cos(i * 0.5) * 2, -4]}
          rotation={[i * 0.2, i * 0.4, i * 0.1]}
        />
      ))}
    </group>
  )
}
