import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text, Html } from '@react-three/drei'
import { TrophyModel } from './TrophyModel'
import { TrophyParticles } from './TrophyParticles'
import { LoadingScreen } from './LoadingScreen'
import { motion } from 'framer-motion'

const trophies = [
  {
    id: 1,
    name: "Premier League",
    year: "2023",
    description: "Champions of England",
    position: [-4, 0, 0] as [number, number, number],
  },
  {
    id: 2,
    name: "FA Cup",
    year: "2023",
    description: "FA Cup Winners",
    position: [0, 0, 0] as [number, number, number],
  },
  {
    id: 3,
    name: "Champions League",
    year: "2023",
    description: "European Champions",
    position: [4, 0, 0] as [number, number, number],
  },
]

export function TrophyRoom() {
  const [hoveredTrophy, setHoveredTrophy] = useState<number | null>(null)
  const [selectedTrophy, setSelectedTrophy] = useState<number | null>(null)

  return (
    <section className="h-screen bg-[#0A1128] relative" id="trophies">
      <div className="absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-[#1C2C5B] p-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white text-center"
        >
          Trophy Room
        </motion.h2>
      </div>

      <Canvas camera={{ position: [0, 2, 10], fov: 45 }}>
        <Suspense fallback={<LoadingScreen />}>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            castShadow
          />

          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
          />

          {trophies.map((trophy) => (
            <group key={trophy.id}>
              <TrophyModel
                position={trophy.position}
                scale={1.5}
                isHovered={hoveredTrophy === trophy.id}
              />
              
              <TrophyParticles
                position={trophy.position}
                isActive={hoveredTrophy === trophy.id}
              />
              
              <Text
                position={[trophy.position[0], -2, trophy.position[2]]}
                fontSize={0.3}
                color="#FFFFFF"
                anchorX="center"
                anchorY="middle"
              >
                {trophy.name}
              </Text>

              <Html position={[trophy.position[0], 2, trophy.position[2]]}>
                <div
                  className={`w-48 p-4 bg-[#243772]/90 rounded-lg backdrop-blur-sm transition-opacity duration-300 ${
                    hoveredTrophy === trophy.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <h3 className="text-white font-bold">{trophy.name}</h3>
                  <p className="text-[#6CABDD] text-sm">{trophy.description}</p>
                  <p className="text-white text-sm mt-1">{trophy.year}</p>
                </div>
              </Html>

              <mesh
                position={trophy.position}
                onPointerOver={() => setHoveredTrophy(trophy.id)}
                onPointerOut={() => setHoveredTrophy(null)}
                onPointerDown={() => setSelectedTrophy(trophy.id)}
                visible={false}
              >
                <boxGeometry args={[2, 4, 2]} />
                <meshBasicMaterial transparent opacity={0} />
              </mesh>
            </group>
          ))}
        </Suspense>
      </Canvas>

      <div className="absolute bottom-8 left-8 text-white text-sm">
        <p>Hover over trophies to see details</p>
        <p>Drag to rotate • Click to focus</p>
      </div>
    </section>
  )
}