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
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: config_1.config.allowedOrigins,
    credentials: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/auth', auth_1.authRouter);
app.use('/social', social_1.socialRouter);
app.use('/civic', civic_1.civicRouter);
app.use('/portal/candidates', candidatePortal_1.default);
app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
});
const PORT = config_1.config.port;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`✅ Health check: http://localhost:${PORT}/health`);
});
