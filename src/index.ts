import express, { type Request, type Response } from 'express';
import cors from 'cors';

import { config } from './config';
import { socialRouter } from './routes/social';
import { civicRouter } from './routes/civic';
import { authRouter } from './routes/auth';
import candidatePortalRouter from './routes/candidatePortal';

console.log('🚀 Starting Iraq Election Backend...');
console.log('📍 Port:', config.port);
console.log('🌐 Allowed Origins:', config.allowedOrigins);
console.log('💾 Database:', process.env.DATABASE_URL ? 'Connected' : 'Not configured (using mock data)');

const app = express();

app.use(cors({
    origin: config.allowedOrigins,
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount routes with /api prefix
app.use('/api/auth', authRouter);
app.use('/api/social', socialRouter);
app.use('/api/civic', civicRouter);
app.use('/api/candidates', candidatePortalRouter);

app.get('/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok' });
});

app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok', service: 'Iraq Election Backend', version: '1.0.0' });
});

const PORT = config.port;

// Only start server if not in Vercel serverless environment
// Railway and other platforms need the server to start
if (!process.env.VERCEL) {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`✅ Server running on port ${PORT}`);
        console.log(`✅ Health check: http://localhost:${PORT}/health`);
        console.log(`🌍 Environment: ${config.environment}`);
    });
}

// Export for Vercel serverless
export default app;
