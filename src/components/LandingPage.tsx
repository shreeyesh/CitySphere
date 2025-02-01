import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface LandingPageProps {
  activeSection: string;
}

export function LandingPage({ activeSection }: LandingPageProps) {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1C2C5B]/90 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        {/* Navigation content remains the same... */}
      </nav>

      {/* Hero Section */}
      <div ref={heroRef} className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#1C2C5B] to-[#0A1128]" id="home">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{ y, opacity }}
        >
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#6CABDD]/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: -20,
              }}
              animate={{
                y: [
                  -20,
                  window.innerHeight + 20,
                ],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * -10,
              }}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
}