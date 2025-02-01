import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function StadiumModel({ position, scale }) {
    return (_jsxs("mesh", { position: position, scale: scale, children: [_jsx("boxGeometry", { args: [100, 50, 100] }), _jsx("meshStandardMaterial", { color: "#1C2C5B", wireframe: true })] }));
}
