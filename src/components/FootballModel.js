import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
export function FootballModel({ position, scale }) {
    const meshRef = useRef(null);
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });
    return (_jsx(Sphere, { ref: meshRef, position: position, scale: scale, args: [1, 32, 32], children: _jsx("meshStandardMaterial", { color: "#ffffff", metalness: 0.7, roughness: 0.3 }) }));
}
