
import { Vector3 } from 'three'

interface StadiumModelProps {
  position: Vector3 | [number, number, number]
  scale: number
}

export function StadiumModel({ position, scale }: StadiumModelProps) {
  return (
    <mesh position={position} scale={scale}>
      <boxGeometry args={[100, 50, 100]} />
      <meshStandardMaterial color="#1C2C5B" wireframe />
    </mesh>
  )
}
