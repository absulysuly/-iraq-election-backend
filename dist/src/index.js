"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const social_1 = require("./routes/social");
const civic_1 = require("./routes/civic");
const auth_1 = require("./routes/auth");
const candidatePortal_1 = __importDefault(require("./routes/candidatePortal"));
console.log('🚀 Starting Iraq Election Backend...');
console.log('📍 Port:', config_1.config.port);
console.log('🌐 Allowed Origins:', config_1.config.allowedOrigins);
console.log('💾 Database:', process.env.DATABASE_URL ? 'Connected' : 'Not configured (using mock data)');
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: config_1.config.allowedOrigins,
    credentials: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Mount routes with /api prefix
app.use('/api/auth', auth_1.authRouter);
app.use('/api/social', social_1.socialRouter);
app.use('/api/civic', civic_1.civicRouter);
app.use('/api/candidates', candidatePortal_1.default);
app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
});
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'Iraq Election Backend', version: '1.0.0' });
});
const PORT = config_1.config.port;
// Only start server if not in Vercel serverless environment
// Railway and other platforms need the server to start
if (!process.env.VERCEL) {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`✅ Server running on port ${PORT}`);
        console.log(`✅ Health check: http://localhost:${PORT}/health`);
        console.log(`🌍 Environment: ${config_1.config.environment}`);
    });
}
// Export for Vercel serverless
exports.default = app;
