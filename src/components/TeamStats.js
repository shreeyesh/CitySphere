import { jsx as _jsx } from "react/jsx-runtime";
import { Text } from '@react-three/drei';
export function TeamStats({ position }) {
    const stats = [
        "Premier League Champions 2023",
        "FA Cup Winners 2023",
        "Champions League Winners 2023",
        "Treble Winners 2023",
        "Most Points in a Season: 100",
    ];
    return (_jsx("group", { position: position, children: stats.map((stat, index) => (_jsx(Text, { position: [0, -index * 0.3, 0], fontSize: 0.15, color: "#ffffff", anchorX: "left", anchorY: "middle", children: stat }, index))) }));
}
