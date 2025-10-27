# Iraq Election Platform

## Quick Deploy to Vercel

### Method 1: Import from GitHub (EASIEST)
1. Go to: https://vercel.com/new
2. Import: `absulysuly/-iraq-election-backend`
3. Root Directory: `iraq-election-platform`
4. Click Deploy

### Method 2: Vercel CLI
```bash
cd iraq-election-platform
vercel login
vercel --prod
```

### Method 3: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/absulysuly/-iraq-election-backend/tree/claude/deploy-iraq-election-platform-011CUXHH1CnbzyTMcQKWnLAo/iraq-election-platform)

## Platform Features
- Bilingual UI (Arabic/English) with RTL support
- Real-time voting system
- 4 Presidential candidates
- Live vote statistics
- Health monitoring endpoint
- Fully responsive design

## API Endpoints
- `GET /api/candidates` - Fetch all candidates
- `POST /api/candidates` - Submit a vote
- `GET /api/health` - Health check
