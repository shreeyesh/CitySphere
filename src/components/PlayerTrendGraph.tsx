import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface SeasonStats {
  season: string;
  goals: number;
  assists: number;
  matches: number;
}

interface PlayerTrendGraphProps {
  playerName: string;
  data: SeasonStats[];
  statType: 'goals' | 'assists' | 'matches';
}

const colors = {
  goals: "#6CABDD",
  assists: "#FFD700",
  matches: "#4CAF50"
};

export function PlayerTrendGraph({ playerName, data, statType }: PlayerTrendGraphProps) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#243772" />
          <XAxis 
            dataKey="season" 
            stroke="#6CABDD"
            tick={{ fill: '#6CABDD' }}
          />
          <YAxis 
            stroke="#6CABDD"
            tick={{ fill: '#6CABDD' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#243772',
              border: 'none',
              borderRadius: '8px',
              color: '#fff'
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey={statType}
            name={statType.charAt(0).toUpperCase() + statType.slice(1)}
            stroke={colors[statType]}
            strokeWidth={2}
            dot={{ fill: colors[statType] }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}