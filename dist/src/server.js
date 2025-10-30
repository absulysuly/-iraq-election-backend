"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const config_1 = require("./config");
const { port, allowedOrigins, environment } = config_1.config;
console.log('🚀 Starting Iraq Election Backend...');
console.log('📍 Port:', port);
console.log('🌐 Allowed Origins:', allowedOrigins);
console.log('💾 Database:', process.env.DATABASE_URL ? 'Configured' : 'Not configured (using mock data)');
console.log('🏞️ Environment:', environment);
app_1.app.listen(port, '0.0.0.0', () => {
    console.log(`✅ Server running on port ${port}`);
    console.log(`✅ Health check: http://localhost:${port}/health`);
});
