import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface TrophyParticlesProps {
  position: [number, number, number]
  isActive: boolean
}

export function TrophyParticles({ position, isActive }: TrophyParticlesProps) {
  const particlesRef = useRef<THREE.Points>(null)
  const particleCount = 100
  
  // Create particles geometry
  const particlesGeometry = new THREE.BufferGeometry()
  const positions = new Float32Array(particleCount * 3)
  
  // Initialize particle positions in a sphere around the trophy
  for (let i = 0; i < particleCount; i++) {
    const radius = 1
    const theta = Math.random() * Math.PI * 2
    const phi = Math.random() * Math.PI
    
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = radius * Math.cos(phi)
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  useFrame((state) => {
    if (particlesRef.current && isActive) {
      particlesRef.current.rotation.y += 0.01
      particlesRef.current.rotation.x += 0.005
    }
  })

  return (
    <points ref={particlesRef} position={position}>
      <bufferGeometry {...particlesGeometry} />
      <pointsMaterial
        size={0.03}
        color="#FFD700"
        transparent
        opacity={isActive ? 0.6 : 0}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}