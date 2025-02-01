import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Trophy, Info } from 'lucide-react';
import { useState } from 'react';
const trophyData = [
    {
        name: "Premier League",
        city: 7,
        united: 20,
        liverpool: 19,
        arsenal: 13,
        chelsea: 6
    },
    {
        name: "FA Cup",
        city: 7,
        united: 12,
        liverpool: 8,
        arsenal: 14,
        chelsea: 8
    },
    {
        name: "Champions League",
        city: 1,
        united: 3,
        liverpool: 6,
        arsenal: 0,
        chelsea: 2
    },
    {
        name: "League Cup",
        city: 8,
        united: 6,
        liverpool: 9,
        arsenal: 2,
        chelsea: 5
    }
];
const clubColors = {
    city: "#6CABDD",
    united: "#DA291C",
    liverpool: "#C8102E",
    arsenal: "#EF0107",
    chelsea: "#034694"
};
export function RivalComparison() {
    const [hoveredClub, setHoveredClub] = useState(null);
    const getMaxValue = (trophyName) => {
        const trophy = trophyData.find(t => t.name === trophyName);
        if (!trophy)
            return 0;
        return Math.max(trophy.city, trophy.united, trophy.liverpool, trophy.arsenal, trophy.chelsea);
    };
    const calculateWidth = (value, trophyName) => {
        const maxValue = getMaxValue(trophyName);
        return `${(value / maxValue) * 100}%`;
    };
    return (_jsx("section", { className: "py-20 bg-[#1C2C5B]", children: _jsxs("div", { className: "container mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, className: "text-center mb-12", children: [_jsx("h2", { className: "text-4xl font-bold text-white mb-4", children: "Trophy Cabinet Comparison" }), _jsx("p", { className: "text-[#6CABDD]", children: "How we stack up against our rivals" })] }), _jsx("div", { className: "grid gap-8", children: trophyData.map((trophy) => (_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, className: "bg-[#243772] rounded-lg p-6", children: [_jsxs("div", { className: "flex items-center gap-2 mb-6", children: [_jsx(Trophy, { className: "text-[#FFD700]" }), _jsx("h3", { className: "text-xl font-bold text-white", children: trophy.name })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("div", { className: "relative", onMouseEnter: () => setHoveredClub('city'), onMouseLeave: () => setHoveredClub(null), children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("span", { className: "text-white w-24", children: "Man City" }), _jsx("div", { className: "flex-1 bg-[#0A1128] rounded-full h-6 overflow-hidden", children: _jsx(motion.div, { initial: { width: 0 }, animate: { width: calculateWidth(trophy.city, trophy.name) }, transition: { duration: 1, ease: "easeOut" }, className: "h-full rounded-full", style: { backgroundColor: clubColors.city } }) }), _jsx("span", { className: "text-white w-12 text-right", children: trophy.city })] }) }), _jsx("div", { className: "relative", onMouseEnter: () => setHoveredClub('united'), onMouseLeave: () => setHoveredClub(null), children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("span", { className: "text-white w-24", children: "Man United" }), _jsx("div", { className: "flex-1 bg-[#0A1128] rounded-full h-6 overflow-hidden", children: _jsx(motion.div, { initial: { width: 0 }, animate: { width: calculateWidth(trophy.united, trophy.name) }, transition: { duration: 1, ease: "easeOut" }, className: "h-full rounded-full", style: { backgroundColor: clubColors.united } }) }), _jsx("span", { className: "text-white w-12 text-right", children: trophy.united })] }) }), _jsx("div", { className: "relative", onMouseEnter: () => setHoveredClub('liverpool'), onMouseLeave: () => setHoveredClub(null), children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("span", { className: "text-white w-24", children: "Liverpool" }), _jsx("div", { className: "flex-1 bg-[#0A1128] rounded-full h-6 overflow-hidden", children: _jsx(motion.div, { initial: { width: 0 }, animate: { width: calculateWidth(trophy.liverpool, trophy.name) }, transition: { duration: 1, ease: "easeOut" }, className: "h-full rounded-full", style: { backgroundColor: clubColors.liverpool } }) }), _jsx("span", { className: "text-white w-12 text-right", children: trophy.liverpool })] }) }), _jsx("div", { className: "relative", onMouseEnter: () => setHoveredClub('arsenal'), onMouseLeave: () => setHoveredClub(null), children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("span", { className: "text-white w-24", children: "Arsenal" }), _jsx("div", { className: "flex-1 bg-[#0A1128] rounded-full h-6 overflow-hidden", children: _jsx(motion.div, { initial: { width: 0 }, animate: { width: calculateWidth(trophy.arsenal, trophy.name) }, transition: { duration: 1, ease: "easeOut" }, className: "h-full rounded-full", style: { backgroundColor: clubColors.arsenal } }) }), _jsx("span", { className: "text-white w-12 text-right", children: trophy.arsenal })] }) }), _jsx("div", { className: "relative", onMouseEnter: () => setHoveredClub('chelsea'), onMouseLeave: () => setHoveredClub(null), children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("span", { className: "text-white w-24", children: "Chelsea" }), _jsx("div", { className: "flex-1 bg-[#0A1128] rounded-full h-6 overflow-hidden", children: _jsx(motion.div, { initial: { width: 0 }, animate: { width: calculateWidth(trophy.chelsea, trophy.name) }, transition: { duration: 1, ease: "easeOut" }, className: "h-full rounded-full", style: { backgroundColor: clubColors.chelsea } }) }), _jsx("span", { className: "text-white w-12 text-right", children: trophy.chelsea })] }) })] }), hoveredClub && (_jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "mt-4 flex items-center gap-2 text-[#6CABDD]", children: [_jsx(Info, { size: 16 }), _jsxs("span", { className: "text-sm", children: ["Latest ", trophy.name, " win: ", hoveredClub === 'city' ? '2023' :
                                                hoveredClub === 'united' ? '2013' :
                                                    hoveredClub === 'liverpool' ? '2020' :
                                                        hoveredClub === 'arsenal' ? '2004' :
                                                            '2017'] })] }))] }, trophy.name))) })] }) }));
}
