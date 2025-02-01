import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from 'react';
export class ErrorBoundary extends Component {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {
                hasError: false,
                error: null
            }
        });
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (_jsx("div", { className: "h-screen w-screen flex items-center justify-center bg-[#1C2C5B] text-white p-4", children: _jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "Something went wrong" }), _jsx("p", { className: "text-red-400", children: this.state.error?.message }), _jsx("button", { className: "mt-4 px-4 py-2 bg-[#6CABDD] rounded hover:bg-[#5b9ac9]", onClick: () => window.location.reload(), children: "Reload page" })] }) }));
        }
        return this.props.children;
    }
}
