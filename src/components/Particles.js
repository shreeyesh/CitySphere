import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
export function Particles({ count }) {
    const mesh = useRef(null);
    const particlesPosition = new Float32Array(count * 3);
    const particlesColor = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        particlesPosition[i * 3] = (Math.random() - 0.5) * 10;
        particlesPosition[i * 3 + 1] = (Math.random() - 0.5) * 10;
        particlesPosition[i * 3 + 2] = (Math.random() - 0.5) * 10;
        // Alternate between sky blue and white
        const isBlue = Math.random() > 0.5;
        particlesColor[i * 3] = isBlue ? 0.42 : 1;
        particlesColor[i * 3 + 1] = isBlue ? 0.67 : 1;
        particlesColor[i * 3 + 2] = isBlue ? 0.87 : 1;
    }
    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y += 0.001;
            mesh.current.rotation.x += 0.001;
        }
    });
    return (_jsxs("points", { ref: mesh, children: [_jsxs("bufferGeometry", { children: [_jsx("bufferAttribute", { attach: "attributes-position", count: count, array: particlesPosition, itemSize: 3 }), _jsx("bufferAttribute", { attach: "attributes-color", count: count, array: particlesColor, itemSize: 3 })] }), _jsx("pointsMaterial", { size: 0.02, vertexColors: true, transparent: true, opacity: 0.6, sizeAttenuation: true })] }));
}
