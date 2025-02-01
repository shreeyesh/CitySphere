import { motion } from 'framer-motion';
import { Medal, Star, Trophy, Award, TrendingUp, X } from 'lucide-react';
import { useState } from 'react';

interface PlayerAward {
  name: string;
  year: string;
  club: string;
  description: string;
}

interface PlayerStat {
  name: string;
  club: string;
  goals: number;
  assists: number;
  matches: number;
  awards: PlayerAward[];
}

const playerStats: PlayerStat[] = [
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
  const [selectedCategory, setSelectedCategory] = useState<'stats' | 'awards'>('stats');
  const [selectedPlayerA, setSelectedPlayerA] = useState<PlayerStat | null>(null);
  const [selectedPlayerB, setSelectedPlayerB] = useState<PlayerStat | null>(null);

  const getMaxStat = (statName: 'goals' | 'assists' | 'matches') => {
    const values = [selectedPlayerA?.[statName] ?? 0, selectedPlayerB?.[statName] ?? 0];
    return Math.max(...values);
  };

  const calculateWidth = (value: number, statName: 'goals' | 'assists' | 'matches') => {
    const maxValue = getMaxStat(statName);
    return maxValue > 0 ? `${(value / maxValue) * 100}%` : '0%';
  };

  const clearSelections = () => {
    setSelectedPlayerA(null);
    setSelectedPlayerB(null);
  };

  return (
    <section className="py-20 bg-[#1C2C5B]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Player Comparisons</h2>
          <p className="text-[#6CABDD]">Individual achievements and statistics</p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedCategory('stats')}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === 'stats'
                ? 'bg-[#6CABDD] text-white'
                : 'bg-[#243772] text-[#6CABDD]'
            }`}
          >
            <div className="flex items-center gap-2">
              <TrendingUp size={16} />
              <span>Statistics</span>
            </div>
          </button>
          <button
            onClick={() => setSelectedCategory('awards')}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === 'awards'
                ? 'bg-[#6CABDD] text-white'
                : 'bg-[#243772] text-[#6CABDD]'
            }`}
          >
            <div className="flex items-center gap-2">
              <Trophy size={16} />
              <span>Awards</span>
            </div>
          </button>
        </div>

        {!selectedPlayerA || !selectedPlayerB ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {playerStats.map((player) => (
              <motion.div
                key={player.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-[#243772] rounded-lg p-6 cursor-pointer hover:bg-[#2d407a] transition-colors"
                onClick={() => {
                  if (!selectedPlayerA) setSelectedPlayerA(player);
                  else if (!selectedPlayerB) setSelectedPlayerB(player);
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: clubColors[player.club as keyof typeof clubColors] }}
                  >
                    <Star className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{player.name}</h3>
                    <p className="text-[#6CABDD]">{player.club}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex justify-end">
              <button
                onClick={clearSelections}
                className="flex items-center gap-2 text-[#6CABDD] hover:text-white transition-colors"
              >
                <X size={18} />
                Change Players
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[selectedPlayerA, selectedPlayerB].map((player, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-[#243772] rounded-lg p-6"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: clubColors[player?.club as keyof typeof clubColors] }}
                    >
                      <Star className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{player?.name}</h3>
                      <p className="text-[#6CABDD]">{player?.club}</p>
                    </div>
                  </div>

                  {selectedCategory === 'stats' ? (
                    <div className="space-y-4">
                      {['goals', 'assists', 'matches'].map((stat) => (
                        <div key={stat}>
                          <div className="flex justify-between text-sm text-[#6CABDD] mb-1">
                            <span>{stat.charAt(0).toUpperCase() + stat.slice(1)}</span>
                            <span>{(player as any)?.[stat]}</span>
                          </div>
                          <div className="bg-[#0A1128] rounded-full h-4 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: calculateWidth((player as any)?.[stat as keyof PlayerStat] as number, stat as 'goals' | 'assists' | 'matches') }}
                              transition={{ duration: 1 }}
                              className="h-full rounded-full"
                              style={{ backgroundColor: clubColors[player?.club as keyof typeof clubColors] }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {player?.awards.map((award, awardIndex) => (
                        <motion.div
                          key={awardIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: awardIndex * 0.1 }}
                          className="flex items-start gap-4 bg-[#1C2C5B] p-4 rounded-lg"
                        >
                          <Award className="text-[#FFD700] flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="text-white font-semibold">{award.name}</h4>
                            <p className="text-[#6CABDD] text-sm">{award.year}</p>
                            <p className="text-white/70 text-sm mt-1">{award.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}