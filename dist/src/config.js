"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const parsePort = (value, fallback) => {
    if (!value)
        return fallback;
    const parsed = Number.parseInt(value, 10);
    return Number.isNaN(parsed) ? fallback : parsed;
};
const parseAllowedOrigins = (value) => {
    if (!value) {
        return [
            'http://localhost:5173',
            'http://localhost:4173',
            'https://hamlet-unified-complete-2027-production.up.railway.app',
            'https://hamlet-unified-complete-2027-staging.up.railway.app',
            'https://iraq-election-platform.vercel.app'
        ];
    }
    return value.split(',').map(origin => origin.trim()).filter(Boolean);
};
exports.config = {
    port: parsePort(process.env.PORT, 4000),
    allowedOrigins: parseAllowedOrigins(process.env.ALLOWED_ORIGINS),
    logLevel: process.env.LOG_LEVEL ?? 'info',
    environment: process.env.NODE_ENV ?? 'development',
};
