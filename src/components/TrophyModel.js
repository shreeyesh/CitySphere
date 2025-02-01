import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Box } from '@react-three/drei';
export function TrophyModel({ position, scale = 1, color = '#FFD700', isHovered = false }) {
    const groupRef = useRef(null);
    useFrame((state) => {
        if (groupRef.current) {
            if (isHovered) {
                groupRef.current.rotation.y += 0.02;
            }
            else {
                groupRef.current.rotation.y += 0.001;
            }
        }
    });
    return (_jsxs("group", { ref: groupRef, position: position, scale: scale, children: [_jsx(Cylinder, { args: [0.5, 0.7, 0.2, 32], position: [0, -1, 0], children: _jsx("meshPhysicalMaterial", { color: color, metalness: 0.8, roughness: 0.2, reflectivity: 1, clearcoat: 1 }) }), _jsx(Cylinder, { args: [0.1, 0.1, 1.2, 32], position: [0, -0.3, 0], children: _jsx("meshPhysicalMaterial", { color: color, metalness: 0.8, roughness: 0.2, reflectivity: 1, clearcoat: 1 }) }), _jsx(Cylinder, { args: [0.4, 0.2, 0.8, 32], position: [0, 0.5, 0], children: _jsx("meshPhysicalMaterial", { color: color, metalness: 0.8, roughness: 0.2, reflectivity: 1, clearcoat: 1 }) }), _jsx(Box, { args: [0.1, 0.4, 0.1], position: [0.3, 0.5, 0], children: _jsx("meshPhysicalMaterial", { color: color, metalness: 0.8, roughness: 0.2, reflectivity: 1, clearcoat: 1 }) }), _jsx(Box, { args: [0.1, 0.4, 0.1], position: [-0.3, 0.5, 0], children: _jsx("meshPhysicalMaterial", { color: color, metalness: 0.8, roughness: 0.2, reflectivity: 1, clearcoat: 1 }) })] }));
}
