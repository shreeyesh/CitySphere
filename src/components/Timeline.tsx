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
  return (
    <section className="py-20 bg-[#0A1128]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Trophy Timeline
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#1C2C5B]" />

          {trophyHistory.map((year, yearIndex) => (
            <div key={year.year} className="mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: yearIndex * 0.2 }}
                className="flex items-center justify-center mb-8"
              >
                <span className="text-3xl font-bold text-[#6CABDD]">{year.year}</span>
              </motion.div>

              <div className="space-y-8">
                {year.trophies.map((trophy, trophyIndex) => (
                  <motion.div
                    key={trophy.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (yearIndex * 0.2) + (trophyIndex * 0.1) }}
                    className={`flex items-center gap-8 ${
                      trophyIndex % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className="flex-1">
                      <div className={`bg-[#243772] p-6 rounded-lg ${
                        trophyIndex % 2 === 0 ? 'text-right' : 'text-left'
                      }`}>
                        <div className="flex items-center gap-2 mb-2 justify-end">
                          <Trophy className="text-[#FFD700]" />
                          <h3 className="text-xl font-bold text-white">{trophy.name}</h3>
                        </div>
                        <p className="text-[#6CABDD] mb-2">{trophy.date}</p>
                        <p className="text-white text-sm">{trophy.context}</p>
                        {trophy.opponent && (
                          <p className="text-[#6CABDD] text-sm mt-2">
                            vs {trophy.opponent} • {trophy.score}
                          </p>
                        )}
                        {trophy.points && (
                          <p className="text-[#6CABDD] text-sm mt-2">
                            {trophy.points} points
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="relative flex items-center justify-center w-8">
                      <div className="h-4 w-4 rounded-full bg-[#6CABDD] z-10" />
                    </div>

                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}