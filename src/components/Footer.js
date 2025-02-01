import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, Star } from 'lucide-react';
export function Footer() {
    return (_jsx("footer", { className: "bg-[#0A1128] text-white py-12", children: _jsxs("div", { className: "container mx-auto px-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, className: "space-y-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Star, { className: "text-[#6CABDD]" }), _jsx("h3", { className: "text-xl font-bold", children: "Manchester City" })] }), _jsxs("p", { className: "text-sm text-gray-400", children: ["Etihad Stadium", _jsx("br", {}), "Manchester M11 3FF", _jsx("br", {}), "United Kingdom"] })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: "space-y-4", children: [_jsx("h4", { className: "text-lg font-semibold", children: "Quick Links" }), _jsxs("ul", { className: "space-y-2", children: [_jsx("li", { children: _jsx("a", { href: "#home", className: "text-gray-400 hover:text-[#6CABDD] transition-colors", children: "Home" }) }), _jsx("li", { children: _jsx("a", { href: "#trophies", className: "text-gray-400 hover:text-[#6CABDD] transition-colors", children: "Trophies" }) }), _jsx("li", { children: _jsx("a", { href: "#stats", className: "text-gray-400 hover:text-[#6CABDD] transition-colors", children: "Stats" }) }), _jsx("li", { children: _jsx("a", { href: "#team", className: "text-gray-400 hover:text-[#6CABDD] transition-colors", children: "Team" }) })] })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "space-y-4", children: [_jsx("h4", { className: "text-lg font-semibold", children: "Connect" }), _jsxs("div", { className: "flex gap-4", children: [_jsx("a", { href: "#", className: "text-gray-400 hover:text-[#6CABDD] transition-colors", children: _jsx(Facebook, { size: 20 }) }), _jsx("a", { href: "#", className: "text-gray-400 hover:text-[#6CABDD] transition-colors", children: _jsx(Twitter, { size: 20 }) }), _jsx("a", { href: "#", className: "text-gray-400 hover:text-[#6CABDD] transition-colors", children: _jsx(Instagram, { size: 20 }) }), _jsx("a", { href: "#", className: "text-gray-400 hover:text-[#6CABDD] transition-colors", children: _jsx(Youtube, { size: 20 }) })] })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: 0.3 }, className: "space-y-4", children: [_jsx("h4", { className: "text-lg font-semibold", children: "Newsletter" }), _jsx("p", { className: "text-sm text-gray-400", children: "Stay updated with the latest news and updates." }), _jsxs("div", { className: "flex gap-2", children: [_jsx("input", { type: "email", placeholder: "Enter your email", className: "bg-[#243772] px-4 py-2 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-[#6CABDD]" }), _jsx("button", { className: "bg-[#6CABDD] p-2 rounded-lg hover:bg-[#5b9ac9] transition-colors", children: _jsx(Mail, { size: 20 }) })] })] })] }), _jsx(motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { delay: 0.4 }, className: "mt-12 pt-8 border-t border-[#243772] text-center text-sm text-gray-400", children: _jsx("p", { children: "\u00A9 2024 Manchester City. All rights reserved." }) })] }) }));
}
