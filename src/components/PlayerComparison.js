import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Star, Trophy, Award, TrendingUp, X } from 'lucide-react';
import { useState } from 'react';
const playerStats = [
    {
        name: "Kevin De Bruyne",
        club: "Manchester City",
        goals: 96,
        assists: 297,
        matches: 542,
        awards: [
            { name: "PFA Player of the Year", year: "2021, 2022", club: "Manchester City", description: "Best player in the Premier League" },
            { name: "UEFA Midfielder of the Year", year: "2020", club: "Manchester City", description: "Best midfielder in Europe" }
        ]
    },
    {
        name: "Marcus Rashford",
        club: "Manchester United",
        goals: 123,
        assists: 71,
        matches: 389,
        awards: [
            { name: "PFA Young Player of the Year", year: "2020", club: "Manchester United", description: "Best young player" }
        ]
    },
    {
        name: "Mohamed Salah",
        club: "Liverpool",
        goals: 204,
        assists: 88,
        matches: 332,
        awards: [
            { name: "Golden Boot", year: "2018, 2019", club: "Liverpool", description: "Premier League top scorer" }
        ]
    }
];
const clubColors = {
    "Manchester City": "#6CABDD",
    "Manchester United": "#DA291C",
    "Liverpool": "#C8102E",
    "Arsenal": "#EF0107",
    "Chelsea": "#034694"
};
export function PlayerComparison() {
    const [selectedCategory, setSelectedCategory] = useState('stats');
    const [selectedPlayerA, setSelectedPlayerA] = useState(null);
    const [selectedPlayerB, setSelectedPlayerB] = useState(null);
    const getMaxStat = (statName) => {
        const values = [selectedPlayerA?.[statName] ?? 0, selectedPlayerB?.[statName] ?? 0];
        return Math.max(...values);
    };
    const calculateWidth = (value, statName) => {
        const maxValue = getMaxStat(statName);
        return maxValue > 0 ? `${(value / maxValue) * 100}%` : '0%';
    };
    const clearSelections = () => {
        setSelectedPlayerA(null);
        setSelectedPlayerB(null);
    };
    return (_jsx("section", { className: "py-20 bg-[#1C2C5B]", children: _jsxs("div", { className: "container mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, className: "text-center mb-12", children: [_jsx("h2", { className: "text-4xl font-bold text-white mb-4", children: "Player Comparisons" }), _jsx("p", { className: "text-[#6CABDD]", children: "Individual achievements and statistics" })] }), _jsxs("div", { className: "flex justify-center gap-4 mb-8", children: [_jsx("button", { onClick: () => setSelectedCategory('stats'), className: `px-6 py-2 rounded-full transition-colors ${selectedCategory === 'stats'
                                ? 'bg-[#6CABDD] text-white'
                                : 'bg-[#243772] text-[#6CABDD]'}`, children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(TrendingUp, { size: 16 }), _jsx("span", { children: "Statistics" })] }) }), _jsx("button", { onClick: () => setSelectedCategory('awards'), className: `px-6 py-2 rounded-full transition-colors ${selectedCategory === 'awards'
                                ? 'bg-[#6CABDD] text-white'
                                : 'bg-[#243772] text-[#6CABDD]'}`, children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Trophy, { size: 16 }), _jsx("span", { children: "Awards" })] }) })] }), !selectedPlayerA || !selectedPlayerB ? (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: playerStats.map((player) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, className: "bg-[#243772] rounded-lg p-6 cursor-pointer hover:bg-[#2d407a] transition-colors", onClick: () => {
                            if (!selectedPlayerA)
                                setSelectedPlayerA(player);
                            else if (!selectedPlayerB)
                                setSelectedPlayerB(player);
                        }, children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "w-12 h-12 rounded-full flex items-center justify-center", style: { backgroundColor: clubColors[player.club] }, children: _jsx(Star, { className: "text-white", size: 24 }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-bold text-white", children: player.name }), _jsx("p", { className: "text-[#6CABDD]", children: player.club })] })] }) }, player.name))) })) : (_jsxs("div", { className: "space-y-8", children: [_jsx("div", { className: "flex justify-end", children: _jsxs("button", { onClick: clearSelections, className: "flex items-center gap-2 text-[#6CABDD] hover:text-white transition-colors", children: [_jsx(X, { size: 18 }), "Change Players"] }) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [selectedPlayerA, selectedPlayerB].map((player, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: index % 2 === 0 ? -20 : 20 }, animate: { opacity: 1, x: 0 }, className: "bg-[#243772] rounded-lg p-6", children: [_jsxs("div", { className: "flex items-center gap-4 mb-6", children: [_jsx("div", { className: "w-12 h-12 rounded-full flex items-center justify-center", style: { backgroundColor: clubColors[player?.club] }, children: _jsx(Star, { className: "text-white", size: 24 }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-bold text-white", children: player?.name }), _jsx("p", { className: "text-[#6CABDD]", children: player?.club })] })] }), selectedCategory === 'stats' ? (_jsx("div", { className: "space-y-4", children: ['goals', 'assists', 'matches'].map((stat) => (_jsxs("div", { children: [_jsxs("div", { className: "flex justify-between text-sm text-[#6CABDD] mb-1", children: [_jsx("span", { children: stat.charAt(0).toUpperCase() + stat.slice(1) }), _jsx("span", { children: player?.[stat] })] }), _jsx("div", { className: "bg-[#0A1128] rounded-full h-4 overflow-hidden", children: _jsx(motion.div, { initial: { width: 0 }, animate: { width: calculateWidth(player?.[stat], stat) }, transition: { duration: 1 }, className: "h-full rounded-full", style: { backgroundColor: clubColors[player?.club] } }) })] }, stat))) })) : (_jsx("div", { className: "space-y-4", children: player?.awards.map((award, awardIndex) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: awardIndex * 0.1 }, className: "flex items-start gap-4 bg-[#1C2C5B] p-4 rounded-lg", children: [_jsx(Award, { className: "text-[#FFD700] flex-shrink-0 mt-1" }), _jsxs("div", { children: [_jsx("h4", { className: "text-white font-semibold", children: award.name }), _jsx("p", { className: "text-[#6CABDD] text-sm", children: award.year }), _jsx("p", { className: "text-white/70 text-sm mt-1", children: award.description })] })] }, awardIndex))) }))] }, index))) })] }))] }) }));
}
