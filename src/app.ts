import express, { Router, type Request, type Response } from 'express';
import cors from 'cors';

import { config } from './config';
import { socialRouter } from './routes/social';
import { civicRouter } from './routes/civic';
import { authRouter } from './routes/auth';
import candidatePortalRouter from './routes/candidatePortal';

const app = express();

app.use(cors({
    origin: config.allowedOrigins,
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/social', socialRouter);
apiRouter.use('/civic', civicRouter);
apiRouter.use('/portal/candidates', candidatePortalRouter);

apiRouter.get('/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok' });
});

app.use('/', apiRouter);
app.use('/api', apiRouter);

export { app };
