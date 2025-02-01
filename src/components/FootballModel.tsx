
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import { Vector3 } from 'three'

interface FootballModelProps {
  position: Vector3 | [number, number, number]
  scale: number
}

export function FootballModel({ position, scale }: FootballModelProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <Sphere ref={meshRef} position={position} scale={scale} args={[1, 32, 32]}>
      <meshStandardMaterial
        color="#ffffff"
        metalness={0.7}
        roughness={0.3}
      />
    </Sphere>
  )
}
