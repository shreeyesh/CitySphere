import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const colors = {
    goals: "#6CABDD",
    assists: "#FFD700",
    matches: "#4CAF50"
};
export function PlayerTrendGraph({ data, statType }) {
    return (_jsx("div", { className: "h-64 w-full", children: _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(LineChart, { data: data, margin: {
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#243772" }), _jsx(XAxis, { dataKey: "season", stroke: "#6CABDD", tick: { fill: '#6CABDD' } }), _jsx(YAxis, { stroke: "#6CABDD", tick: { fill: '#6CABDD' } }), _jsx(Tooltip, { contentStyle: {
                            backgroundColor: '#243772',
                            border: 'none',
                            borderRadius: '8px',
                            color: '#fff'
                        } }), _jsx(Legend, {}), _jsx(Line, { type: "monotone", dataKey: statType, name: statType.charAt(0).toUpperCase() + statType.slice(1), stroke: colors[statType], strokeWidth: 2, dot: { fill: colors[statType] }, activeDot: { r: 8 } })] }) }) }));
}
