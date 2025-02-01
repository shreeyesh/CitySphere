import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Stars } from '@react-three/drei'
import { FootballModel } from './FootballModel'
import { StadiumModel } from './StadiumModel'
import { Particles } from './Particles'
import { TeamStats } from './TeamStats'

export function Scene() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001
    }
  })

  return (
    <>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
      
      <group ref={groupRef}>
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <FootballModel position={[0, 0, 0]} scale={0.5} />
        </Float>

        <StadiumModel position={[0, -2, -5]} scale={0.01} />
        
        <TeamStats position={[2, 1, 0]} />
      </group>

      <Particles count={1000} />
    </>
  )
}