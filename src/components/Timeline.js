import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
const trophyHistory = [
    {
        year: 2023,
        trophies: [
            {
                name: "UEFA Champions League",
                date: "June 10, 2023",
                context: "First Champions League trophy in club history, completing the historic treble",
                opponent: "Inter Milan",
                score: "1-0"
            },
            {
                name: "Premier League",
                date: "May 21, 2023",
                context: "Third consecutive Premier League title",
                points: "89"
            },
            {
                name: "FA Cup",
                date: "June 3, 2023",
                context: "Seventh FA Cup triumph",
                opponent: "Manchester United",
                score: "2-1"
            }
        ]
    },
    {
        year: 2022,
        trophies: [
            {
                name: "Premier League",
                date: "May 22, 2022",
                context: "Dramatic final day victory secured the title",
                points: "93"
            }
        ]
    },
    {
        year: 2021,
        trophies: [
            {
                name: "Premier League",
                date: "May 11, 2021",
                context: "Dominated the league with 15-game winning streak",
                points: "86"
            },
            {
                name: "League Cup",
                date: "April 25, 2021",
                context: "Fourth consecutive League Cup victory",
                opponent: "Tottenham",
                score: "1-0"
            }
        ]
    }
];
export function Timeline() {
    return (_jsx("section", { className: "py-20 bg-[#0A1128]", id: "timeline", children: _jsxs("div", { className: "container mx-auto px-6", children: [_jsx(motion.h2, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, className: "text-4xl font-bold text-white mb-12 text-center", children: "Trophy Timeline" }), _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#1C2C5B]" }), trophyHistory.map((year, yearIndex) => (_jsxs("div", { className: "mb-16", children: [_jsx(motion.div, { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.5, delay: yearIndex * 0.2 }, className: "flex items-center justify-center mb-8", children: _jsx("span", { className: "text-3xl font-bold text-[#6CABDD]", children: year.year }) }), _jsx("div", { className: "space-y-8", children: year.trophies.map((trophy, trophyIndex) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: (yearIndex * 0.2) + (trophyIndex * 0.1) }, className: `flex items-center gap-8 ${trophyIndex % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`, children: [_jsx("div", { className: "flex-1", children: _jsxs("div", { className: `bg-[#243772] p-6 rounded-lg ${trophyIndex % 2 === 0 ? 'text-right' : 'text-left'}`, children: [_jsxs("div", { className: "flex items-center gap-2 mb-2 justify-end", children: [_jsx(Trophy, { className: "text-[#FFD700]" }), _jsx("h3", { className: "text-xl font-bold text-white", children: trophy.name })] }), _jsx("p", { className: "text-[#6CABDD] mb-2", children: trophy.date }), _jsx("p", { className: "text-white text-sm", children: trophy.context }), trophy.opponent && (_jsxs("p", { className: "text-[#6CABDD] text-sm mt-2", children: ["vs ", trophy.opponent, " \u2022 ", trophy.score] })), trophy.points && (_jsxs("p", { className: "text-[#6CABDD] text-sm mt-2", children: [trophy.points, " points"] }))] }) }), _jsx("div", { className: "relative flex items-center justify-center w-8", children: _jsx("div", { className: "h-4 w-4 rounded-full bg-[#6CABDD] z-10" }) }), _jsx("div", { className: "flex-1" })] }, trophy.name))) })] }, year.year)))] })] }) }));
}
