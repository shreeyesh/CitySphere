import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Html, useProgress } from '@react-three/drei';
export function LoadingScreen() {
    const { progress } = useProgress();
    return (_jsx(Html, { center: true, children: _jsxs("div", { className: "text-white text-2xl font-bold", children: ["Loading... ", progress.toFixed(0), "%"] }) }));
}
