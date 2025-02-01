
import { Text } from '@react-three/drei'
import { Vector3 } from 'three'

interface TeamStatsProps {
  position: Vector3 | [number, number, number]
}

export function TeamStats({ position }: TeamStatsProps) {
  const stats = [
    "Premier League Champions 2023",
    "FA Cup Winners 2023",
    "Champions League Winners 2023",
    "Treble Winners 2023",
    "Most Points in a Season: 100",
  ]

  return (
    <group position={position}>
      {stats.map((stat, index) => (
        <Text
          key={index}
          position={[0, -index * 0.3, 0]}
          fontSize={0.15}
          color="#ffffff"
          anchorX="left"
          anchorY="middle"
        >
          {stat}
        </Text>
      ))}
    </group>
  )
}
