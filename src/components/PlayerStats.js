import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { PlayerTrendGraph } from './PlayerTrendGraph';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
const playerData = {
    "Erling Haaland": [
        { season: "2022/23", goals: 36, assists: 8, matches: 35 },
        { season: "2023/24", goals: 18, assists: 5, matches: 22 },
    ],
    "Kevin De Bruyne": [
        { season: "2020/21", goals: 6, assists: 12, matches: 25 },
        { season: "2021/22", goals: 15, assists: 8, matches: 30 },
        { season: "2022/23", goals: 7, assists: 16, matches: 32 },
        { season: "2023/24", goals: 1, assists: 6, matches: 8 },
    ],
    "Phil Foden": [
        { season: "2020/21", goals: 9, assists: 5, matches: 28 },
        { season: "2021/22", goals: 9, assists: 5, matches: 28 },
        { season: "2022/23", goals: 11, assists: 5, matches: 32 },
        { season: "2023/24", goals: 8, assists: 7, matches: 24 },
    ],
};
export function PlayerStats() {
    const [selectedPlayer, setSelectedPlayer] = useState("Erling Haaland");
    const [selectedStat, setSelectedStat] = useState('goals');
    return (_jsx("section", { className: "py-20 bg-[#1C2C5B]", id: "stats", children: _jsxs("div", { className: "container mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, className: "text-center mb-12", children: [_jsx("h2", { className: "text-4xl font-bold text-white mb-4", children: "Player Statistics" }), _jsx("p", { className: "text-[#6CABDD]", children: "Track player performance over seasons" })] }), _jsx("div", { className: "mb-8 flex flex-wrap gap-4 justify-center", children: Object.keys(playerData).map((player) => (_jsx("button", { onClick: () => setSelectedPlayer(player), className: `px-6 py-2 rounded-full transition-colors ${selectedPlayer === player
                            ? 'bg-[#6CABDD] text-white'
                            : 'bg-[#243772] text-[#6CABDD]'}`, children: player }, player))) }), _jsx("div", { className: "mb-8 flex flex-wrap gap-4 justify-center", children: ['goals', 'assists', 'matches'].map((stat) => (_jsx("button", { onClick: () => setSelectedStat(stat), className: `px-6 py-2 rounded-full transition-colors ${selectedStat === stat
                            ? 'bg-[#6CABDD] text-white'
                            : 'bg-[#243772] text-[#6CABDD]'}`, children: stat.charAt(0).toUpperCase() + stat.slice(1) }, stat))) }), _jsx("div", { className: "bg-[#243772] p-6 rounded-lg", children: _jsx(PlayerTrendGraph, { playerName: selectedPlayer, data: playerData[selectedPlayer], statType: selectedStat }) }), _jsxs(motion.div, { animate: { y: [0, 10, 0] }, transition: { duration: 2, repeat: Infinity }, className: "mt-8 text-center text-[#6CABDD]", children: [_jsx(ChevronDown, { className: "mx-auto", size: 32 }), _jsx("p", { className: "text-sm", children: "Scroll for more" })] })] }) }));
}
