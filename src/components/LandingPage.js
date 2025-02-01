import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ChevronDown, Trophy, Users } from 'lucide-react';
const players = [
    {
        name: "Erling Haaland",
        position: "Striker",
        number: "9",
        image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p223094.png",
        stats: { goals: 36, assists: 8 }
    },
    {
        name: "Kevin De Bruyne",
        position: "Midfielder",
        number: "17",
        image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p61366.png",
        stats: { goals: 7, assists: 16 }
    },
    {
        name: "Phil Foden",
        position: "Midfielder",
        number: "47",
        image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p209244.png",
        stats: { goals: 11, assists: 5 }
    },
    {
        name: "Rodri",
        position: "Midfielder",
        number: "16",
        image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p220566.png",
        stats: { goals: 3, assists: 7 }
    },
    {
        name: "Bernardo Silva",
        position: "Midfielder",
        number: "20",
        image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p165809.png",
        stats: { goals: 7, assists: 8 }
    },
    {
        name: "Jack Grealish",
        position: "Midfielder",
        number: "10",
        image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p114283.png",
        stats: { goals: 5, assists: 11 }
    },
    {
        name: "Julian Alvarez",
        position: "Forward",
        number: "19",
        image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p461358.png",
        stats: { goals: 9, assists: 4 }
    },
    {
        name: "Kyle Walker",
        position: "Defender",
        number: "2",
        image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p58621.png",
        stats: { goals: 0, assists: 2 }
    }
];
const navItems = [
    { name: 'Home', hash: 'home' },
    { name: 'Trophies', hash: 'trophies' },
    { name: 'Stats', hash: 'stats' },
    { name: 'Timeline', hash: 'timeline' },
];
export function LandingPage({ activeSection }) {
    const [scrolled, setScrolled] = useState(false);
    const [hoveredPlayer, setHoveredPlayer] = useState(null);
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.
            addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx("nav", { className: `fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#1C2C5B]/90 backdrop-blur-sm' : 'bg-transparent'}`, children: _jsx("div", { className: "container mx-auto px-6 py-4", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 20 }, className: "flex items-center gap-2", children: _jsx("h1", { className: "text-2xl font-bold text-white", children: "Manchester City" }) }), _jsx("div", { className: "hidden md:flex space-x-8", children: navItems.map((item) => (_jsx(motion.button, { onClick: () => scrollToSection(item.hash), whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 }, className: `transition-colors ${activeSection === item.hash
                                        ? 'text-[#6CABDD]'
                                        : 'text-white hover:text-[#6CABDD]'}`, children: item.name }, item.hash))) })] }) }) }), _jsxs("div", { ref: heroRef, className: "min-h-screen relative overflow-hidden bg-gradient-to-b from-[#1C2C5B] to-[#0A1128]", id: "home", children: [_jsx(motion.div, { className: "absolute inset-0 pointer-events-none", style: { y, opacity }, children: Array.from({ length: 50 }).map((_, i) => (_jsx(motion.div, { className: "absolute w-2 h-2 bg-[#6CABDD]/20 rounded-full", initial: {
                                x: Math.random() * window.innerWidth,
                                y: -20
                            }, animate: {
                                y: [
                                    -20, // Start position (above viewport)
                                    window.innerHeight + 20, // End position (below viewport)
                                ],
                            }, transition: {
                                duration: Math.random() * 3 + 2, repeat: Infinity,
                                ease: 'linear',
                            } }, i))) }), _jsx("div", { className: "relative z-10 container mx-auto px-6 pt-32 pb-20", children: _jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-start", children: [_jsxs(motion.div, { className: "space-y-8", style: { opacity }, children: [_jsx(motion.div, { initial: { opacity: 0,
                                                y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, children: _jsxs("h2", { className: "text-5xl md:text-7xl font-bold text-white leading-tight", children: ["Triple Champions", _jsx("span", { className: "text-[#6CABDD] block", children: "2023" })] }) }), _jsx(motion.p, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4 }, className: "text-lg text-white/80", children: "Experience the glory of Manchester City's historic treble-winning season. Relive the moments that made history." }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6 }, className: "flex gap-4", children: [_jsxs(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: () => scrollToSection('trophies'), className: "px-8 py-3 bg-[#6CABDD] text-white rounded-full flex items-center gap-2 hover:bg-[#5b9ac9] transition-colors", children: [_jsx(Trophy, { size: 20 }), "View Trophies"] }), _jsxs(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: () => scrollToSection('timeline'), className: "px-8 py-3 border-2 border-[#6CABDD] text-white rounded-full flex items-center gap-2 hover:bg-[#6CABDD]/10 transition-colors", children: [_jsx(Users, { size: 20 }), "Timeline"] })] })] }), _jsx("div", { className: "relative h-[70vh] overflow-y-auto custom-scrollbar", children: _jsx("div", { className: "grid grid-cols-2 gap-4 pr-4", children: players.map((player, index) => (_jsx(motion.div, { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.4 + index * 0.1 }, className: "relative", onMouseEnter: () => setHoveredPlayer(player.name), onMouseLeave: () => setHoveredPlayer(null), children: _jsxs(motion.div, { whileHover: { scale: 1.05, y: -10 }, className: "bg-[#243772]/80 backdrop-blur-sm rounded-lg p-4 relative overflow-hidden group", children: [_jsxs("div", { className: "absolute top-2 right-2 bg-[#6CABDD] text-white text-xs font-bold px-2 py-1 rounded-full", children: ["#", player.number] }), _jsx("img", { src: player.image, alt: player.name, className: "w-full h-32 object-contain rounded-lg mb-2" }), _jsx("h3", { className: "text-white font-bold", children: player.name }), _jsx("p", { className: "text-[#6CABDD] text-sm", children: player.position }), _jsx("div", { className: `absolute inset-0 bg-[#1C2C5B]/90 backdrop-blur-sm p-4 transition-all duration-300 ${hoveredPlayer === player.name ? 'opacity-100' : 'opacity-0 pointer-events-none'}`, children: _jsxs("div", { className: "h-full flex flex-col justify-center items-center text-center", children: [_jsx("p", { className: "text-white font-bold mb-2", children: player.name }), _jsxs("div", { className: "text-[#6CABDD] space-y-2", children: [_jsxs("p", { children: ["Goals: ", player.stats.goals] }), _jsxs("p", { children: ["Assists: ", player.stats.assists] })] })] }) })] }) }, player.name))) }) })] }) }), _jsxs(motion.div, { animate: { y: [0, 10, 0] }, transition: { duration: 2, repeat: Infinity }, className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center", style: { opacity }, children: [_jsx(ChevronDown, { className: "mx-auto", size: 32 }), _jsx("p", { className: "text-sm mt-2", children: "Scroll to explore" })] })] })] }));
}
