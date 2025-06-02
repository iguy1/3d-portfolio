"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { Suspense } from "react"
import Scene3D from "@/components/scene-3d"
import Navigation from "@/components/navigation"
import HeroContent from "@/components/hero-content"
import AboutSection from "@/components/about-section"
import WorkSection from "@/components/work-section"
import ContactSection from "@/components/contact-section"

export default function Portfolio() {
  return (
    <div className="bg-gray-900">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section with 3D Scene */}
      <section id="home" className="w-full h-screen relative overflow-hidden">
        {/* 3D Scene */}
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} className="absolute inset-0">
          <Suspense fallback={null}>
            <Environment preset="night" />
            <Scene3D />
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
          </Suspense>
        </Canvas>

        {/* Hero Content Overlay */}
        <HeroContent />
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Work Section */}
      <WorkSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
