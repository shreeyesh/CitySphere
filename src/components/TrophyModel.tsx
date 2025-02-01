import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Cylinder, Box } from '@react-three/drei'
import { Vector3 } from 'three'
import * as THREE from 'three'

interface TrophyModelProps {
  position: Vector3 | [number, number, number]
  scale?: number
  color?: string
  isHovered?: boolean
}

export function TrophyModel({ 
  position, 
  scale = 1, 
  color = '#FFD700',
  isHovered = false 
}: TrophyModelProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      if (isHovered) {
        groupRef.current.rotation.y += 0.02
      } else {
        groupRef.current.rotation.y += 0.001
      }
    }
  })

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Base */}
      <Cylinder args={[0.5, 0.7, 0.2, 32]} position={[0, -1, 0]}>
        <meshPhysicalMaterial 
          color={color} 
          metalness={0.8}
          roughness={0.2}
          reflectivity={1}
          clearcoat={1}
        />
      </Cylinder>

      {/* Stem */}
      <Cylinder args={[0.1, 0.1, 1.2, 32]} position={[0, -0.3, 0]}>
        <meshPhysicalMaterial 
          color={color} 
          metalness={0.8}
          roughness={0.2}
          reflectivity={1}
          clearcoat={1}
        />
      </Cylinder>

      {/* Cup */}
      <Cylinder args={[0.4, 0.2, 0.8, 32]} position={[0, 0.5, 0]}>
        <meshPhysicalMaterial 
          color={color} 
          metalness={0.8}
          roughness={0.2}
          reflectivity={1}
          clearcoat={1}
        />
      </Cylinder>

      {/* Handles */}
      <Box args={[0.1, 0.4, 0.1]} position={[0.3, 0.5, 0]}>
        <meshPhysicalMaterial 
          color={color} 
          metalness={0.8}
          roughness={0.2}
          reflectivity={1}
          clearcoat={1}
        />
      </Box>
      <Box args={[0.1, 0.4, 0.1]} position={[-0.3, 0.5, 0]}>
        <meshPhysicalMaterial 
          color={color} 
          metalness={0.8}
          roughness={0.2}
          reflectivity={1}
          clearcoat={1}
        />
      </Box>
    </group>
  )
}