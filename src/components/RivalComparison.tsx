import { motion } from 'framer-motion';
import { Trophy, Info } from 'lucide-react';
import { useState } from 'react';

interface TrophyData {
  name: string;
  city: number;
  united: number;
  liverpool: number;
  arsenal: number;
  chelsea: number;
}

const trophyData: TrophyData[] = [
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
  const [hoveredClub, setHoveredClub] = useState<string | null>(null);
  const [selectedTrophy, setSelectedTrophy] = useState<string | null>(null);

  const getMaxValue = (trophyName: string) => {
    const trophy = trophyData.find(t => t.name === trophyName);
    if (!trophy) return 0;
    return Math.max(trophy.city, trophy.united, trophy.liverpool, trophy.arsenal, trophy.chelsea);
  };

  const calculateWidth = (value: number, trophyName: string) => {
    const maxValue = getMaxValue(trophyName);
    return `${(value / maxValue) * 100}%`;
  };

  return (
    <section className="py-20 bg-[#1C2C5B]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Trophy Cabinet Comparison</h2>
          <p className="text-[#6CABDD]">How we stack up against our rivals</p>
        </motion.div>

        <div className="grid gap-8">
          {trophyData.map((trophy) => (
            <motion.div
              key={trophy.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-[#243772] rounded-lg p-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <Trophy className="text-[#FFD700]" />
                <h3 className="text-xl font-bold text-white">{trophy.name}</h3>
              </div>

              <div className="space-y-4">
                {/* Manchester City */}
                <div 
                  className="relative"
                  onMouseEnter={() => setHoveredClub('city')}
                  onMouseLeave={() => setHoveredClub(null)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-white w-24">Man City</span>
                    <div className="flex-1 bg-[#0A1128] rounded-full h-6 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: calculateWidth(trophy.city, trophy.name) }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: clubColors.city }}
                      />
                    </div>
                    <span className="text-white w-12 text-right">{trophy.city}</span>
                  </div>
                </div>

                {/* Manchester United */}
                <div 
                  className="relative"
                  onMouseEnter={() => setHoveredClub('united')}
                  onMouseLeave={() => setHoveredClub(null)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-white w-24">Man United</span>
                    <div className="flex-1 bg-[#0A1128] rounded-full h-6 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: calculateWidth(trophy.united, trophy.name) }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: clubColors.united }}
                      />
                    </div>
                    <span className="text-white w-12 text-right">{trophy.united}</span>
                  </div>
                </div>

                {/* Liverpool */}
                <div 
                  className="relative"
                  onMouseEnter={() => setHoveredClub('liverpool')}
                  onMouseLeave={() => setHoveredClub(null)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-white w-24">Liverpool</span>
                    <div className="flex-1 bg-[#0A1128] rounded-full h-6 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: calculateWidth(trophy.liverpool, trophy.name) }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: clubColors.liverpool }}
                      />
                    </div>
                    <span className="text-white w-12 text-right">{trophy.liverpool}</span>
                  </div>
                </div>

                {/* Arsenal */}
                <div 
                  className="relative"
                  onMouseEnter={() => setHoveredClub('arsenal')}
                  onMouseLeave={() => setHoveredClub(null)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-white w-24">Arsenal</span>
                    <div className="flex-1 bg-[#0A1128] rounded-full h-6 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: calculateWidth(trophy.arsenal, trophy.name) }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: clubColors.arsenal }}
                      />
                    </div>
                    <span className="text-white w-12 text-right">{trophy.arsenal}</span>
                  </div>
                </div>

                {/* Chelsea */}
                <div 
                  className="relative"
                  onMouseEnter={() => setHoveredClub('chelsea')}
                  onMouseLeave={() => setHoveredClub(null)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-white w-24">Chelsea</span>
                    <div className="flex-1 bg-[#0A1128] rounded-full h-6 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: calculateWidth(trophy.chelsea, trophy.name) }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: clubColors.chelsea }}
                      />
                    </div>
                    <span className="text-white w-12 text-right">{trophy.chelsea}</span>
                  </div>
                </div>
              </div>

              {hoveredClub && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 flex items-center gap-2 text-[#6CABDD]"
                >
                  <Info size={16} />
                  <span className="text-sm">
                    Latest {trophy.name} win: {
                      hoveredClub === 'city' ? '2023' :
                      hoveredClub === 'united' ? '2013' :
                      hoveredClub === 'liverpool' ? '2020' :
                      hoveredClub === 'arsenal' ? '2004' :
                      '2017'
                    }
                  </span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}