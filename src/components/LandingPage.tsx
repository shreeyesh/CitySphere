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

interface LandingPageProps {
  activeSection: string;
}

const navItems = [
  { name: 'Home', hash: 'home' },
  { name: 'Trophies', hash: 'trophies' },
  { name: 'Stats', hash: 'stats' },
  { name: 'Timeline', hash: 'timeline' },
];

export function LandingPage({ activeSection }: LandingPageProps) {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPlayer, setHoveredPlayer] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1C2C5B]/90 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 20 }}
              className="flex items-center gap-2"
            >
              {/* <Star className="text-[#6CABDD]" /> */}
              <h1 className="text-2xl font-bold text-white">Manchester City</h1>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.hash}
                  onClick={() => scrollToSection(item.hash)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`transition-colors ${
                    activeSection === item.hash
                      ? 'text-[#6CABDD]'
                      : 'text-white hover:text-[#6CABDD]'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
      </div>
          </div>
        </div>
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
                y: -20 }}
              animate={{
                y: [
                  -20, // Start position (above viewport)
                  window.innerHeight + 20, // End position (below viewport)
                ],
              }}
              transition={{
                duration: Math.random() * 3 + 2, repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
                                </motion.div>


        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              className="space-y-8"
              style={{ opacity }}
            >
              <motion.div
                initial={{ opacity: 0,
                y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  Triple Champions
                  <span className="text-[#6CABDD] block">2023</span>
                </h2>
              </motion.div>


              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-white/80"
              >
                Experience the glory of Manchester City's historic treble-winning season. Relive the moments that made history.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('trophies')}
                  className="px-8 py-3 bg-[#6CABDD] text-white rounded-full flex items-center gap-2 hover:bg-[#5b9ac9] transition-colors"
                >
                  <Trophy size={20} />
                  View Trophies
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('timeline')}
                  className="px-8 py-3 border-2 border-[#6CABDD] text-white rounded-full flex items-center gap-2 hover:bg-[#6CABDD]/10 transition-colors"
                >
                  <Users size={20} />
                  Timeline
                </motion.button>
                
              </motion.div>

            </motion.div>

            <div className="relative h-[70vh] overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-2 gap-4 pr-4">
                {players.map((player, index) => (
                  <motion.div
                    key={player.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="relative"
                    onMouseEnter={() => setHoveredPlayer(player.name)}
                    onMouseLeave={() => setHoveredPlayer(null)}
                  >
                    <motion. div
                      whileHover={{ scale: 1.05, y: -10 }}
                      className="bg-[#243772]/80 backdrop-blur-sm rounded-lg p-4 relative overflow-hidden group"
                    >
                      <div className="absolute top-2 right-2 bg-[#6CABDD] text-white text-xs font-bold px-2 py-1 rounded-full">
                        #{player.number}
                      </div>
                      <img
                        src={player.image}
                        alt={player.name}
                        className="w-full h-32 object-contain rounded-lg mb-2"
                      />
                      <h3 className="text-white font-bold">{player.name}</h3>
                      <p className="text-[#6CABDD] text-sm">{player.position}</p>
                      
                      <div className={`absolute inset-0 bg-[#1C2C5B]/90 backdrop-blur-sm p-4 transition-all duration-300 ${
                        hoveredPlayer === player.name ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}>
                        <div className="h-full flex flex-col justify-center items-center text-center">
                          <p className="text-white font-bold mb-2">{player.name}</p>
                          <div className="text-[#6CABDD] space-y-2">
                            <p>Goals: {player.stats.goals}</p>
                            <p>Assists: {player.stats.assists}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
      <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center"
          style={{ opacity }}
        >
          <ChevronDown className="mx-auto" size={32} />
          <p className="text-sm mt-2">Scroll to explore</p>
        </motion.div>
    </div>
    </>
  );
}