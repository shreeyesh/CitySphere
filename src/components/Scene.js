import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Stars } from '@react-three/drei';
import { FootballModel } from './FootballModel';
import { StadiumModel } from './StadiumModel';
import { Particles } from './Particles';
import { TeamStats } from './TeamStats';
export function Scene() {
    const groupRef = useRef(null);
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.001;
        }
    });
    return (_jsxs(_Fragment, { children: [_jsx(OrbitControls, { enableZoom: false }), _jsx("ambientLight", { intensity: 0.5 }), _jsx("pointLight", { position: [10, 10, 10] }), _jsx(Stars, { radius: 100, depth: 50, count: 5000, factor: 4, fade: true, speed: 1 }), _jsxs("group", { ref: groupRef, children: [_jsx(Float, { speed: 1.5, rotationIntensity: 0.5, floatIntensity: 0.5, children: _jsx(FootballModel, { position: [0, 0, 0], scale: 0.5 }) }), _jsx(StadiumModel, { position: [0, -2, -5], scale: 0.01 }), _jsx(TeamStats, { position: [2, 1, 0] })] }), _jsx(Particles, { count: 1000 })] }));
}
