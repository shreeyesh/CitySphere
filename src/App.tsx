import { useEffect, useState } from 'react'
import { LandingPage } from './components/LandingPage'
import { TrophyRoom } from './components/TrophyRoom'
import { Timeline } from './components/Timeline'
import { RivalComparison } from './components/RivalComparison'
import { PlayerComparison } from './components/PlayerComparison'
import { PlayerStats } from './components/PlayerStats'
import { Footer } from './components/Footer'
import { ErrorBoundary } from './components/ErrorBoundary'

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

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#1C2C5B]">
        <LandingPage activeSection={activeSection} />
        <TrophyRoom />
        <PlayerStats />
        <RivalComparison />
        <PlayerComparison />
        <Timeline />
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default App