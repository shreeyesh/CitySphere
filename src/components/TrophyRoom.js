import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Html } from '@react-three/drei';
import { TrophyModel } from './TrophyModel';
import { TrophyParticles } from './TrophyParticles';
import { LoadingScreen } from './LoadingScreen';
import { motion } from 'framer-motion';
const trophies = [
    {
        id: 1,
        name: "Premier League",
        year: "2023",
        description: "Champions of England",
        position: [-4, 0, 0],
    },
    {
        id: 2,
        name: "FA Cup",
        year: "2023",
        description: "FA Cup Winners",
        position: [0, 0, 0],
    },
    {
        id: 3,
        name: "Champions League",
        year: "2023",
        description: "European Champions",
        position: [4, 0, 0],
    },
];
export function TrophyRoom() {
    const [hoveredTrophy, setHoveredTrophy] = useState(null);
    const [selectedTrophy, setSelectedTrophy] = useState(null);
    return (_jsxs("section", { className: "h-screen bg-[#0A1128] relative", id: "trophies", children: [_jsx("div", { className: "absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-[#1C2C5B] p-8", children: _jsx(motion.h2, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, className: "text-4xl font-bold text-white text-center", children: "Trophy Room" }) }), _jsx(Canvas, { camera: { position: [0, 2, 10], fov: 45 }, children: _jsxs(Suspense, { fallback: _jsx(LoadingScreen, {}), children: [_jsx("ambientLight", { intensity: 1 }), _jsx("pointLight", { position: [10, 10, 10], intensity: 1.5 }), _jsx("pointLight", { position: [-10, -10, -10], intensity: 1 }), _jsx("spotLight", { position: [0, 10, 0], angle: 0.3, penumbra: 1, intensity: 2, castShadow: true }), _jsx(OrbitControls, { enableZoom: false, enablePan: false, minPolarAngle: Math.PI / 3, maxPolarAngle: Math.PI / 2 }), trophies.map((trophy) => (_jsxs("group", { children: [_jsx(TrophyModel, { position: trophy.position, scale: 1.5, isHovered: hoveredTrophy === trophy.id }), _jsx(TrophyParticles, { position: trophy.position, isActive: hoveredTrophy === trophy.id }), _jsx(Text, { position: [trophy.position[0], -2, trophy.position[2]], fontSize: 0.3, color: "#FFFFFF", anchorX: "center", anchorY: "middle", children: trophy.name }), _jsx(Html, { position: [trophy.position[0], 2, trophy.position[2]], children: _jsxs("div", { className: `w-48 p-4 bg-[#243772]/90 rounded-lg backdrop-blur-sm transition-opacity duration-300 ${hoveredTrophy === trophy.id ? 'opacity-100' : 'opacity-0'}`, children: [_jsx("h3", { className: "text-white font-bold", children: trophy.name }), _jsx("p", { className: "text-[#6CABDD] text-sm", children: trophy.description }), _jsx("p", { className: "text-white text-sm mt-1", children: trophy.year })] }) }), _jsxs("mesh", { position: trophy.position, onPointerOver: () => setHoveredTrophy(trophy.id), onPointerOut: () => setHoveredTrophy(null), onPointerDown: () => setSelectedTrophy(trophy.id), visible: false, children: [_jsx("boxGeometry", { args: [2, 4, 2] }), _jsx("meshBasicMaterial", { transparent: true, opacity: 0 })] })] }, trophy.id)))] }) }), _jsxs("div", { className: "absolute bottom-8 left-8 text-white text-sm", children: [_jsx("p", { children: "Hover over trophies to see details" }), _jsx("p", { children: "Drag to rotate \u2022 Click to focus" })] })] }));
}
