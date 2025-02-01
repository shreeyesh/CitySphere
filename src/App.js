import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { TrophyRoom } from './components/TrophyRoom';
import { Timeline } from './components/Timeline';
import { RivalComparison } from './components/RivalComparison';
import { PlayerComparison } from './components/PlayerComparison';
import { PlayerStats } from './components/PlayerStats';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
function App() {
    const [activeSection, setActiveSection] = useState('home');
    useEffect(() => {
        const handleHash = () => {
            const hash = window.location.hash.slice(1) || 'home';
            setActiveSection(hash);
            // Smooth scroll to section
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        };
        window.addEventListener('hashchange', handleHash);
        handleHash(); // Initial check
        return () => window.removeEventListener('hashchange', handleHash);
    }, []);
    return (_jsx(ErrorBoundary, { children: _jsxs("div", { className: "min-h-screen bg-[#1C2C5B]", children: [_jsx(LandingPage, { activeSection: activeSection }), _jsx(TrophyRoom, {}), _jsx(PlayerStats, {}), _jsx(RivalComparison, {}), _jsx(PlayerComparison, {}), _jsx(Timeline, {}), _jsx(Footer, {})] }) }));
}
export default App;
