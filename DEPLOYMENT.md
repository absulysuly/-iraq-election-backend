# Deployment Guide - Iraq Election Backend

## Prerequisites

Before deploying, ensure you have:
- ✅ PostgreSQL database (Railway, Supabase, or Neon recommended)
- ✅ Environment variables configured
- ✅ Node.js 20.x installed locally for testing

---

## Local Development Setup

### 1. Clone and Install

```bash
git clone https://github.com/absulysuly/-iraq-election-backend.git
cd -iraq-election-backend
npm install
```

### 2. Configure Environment

```bash
# Copy the example env file
cp .env.example .env

# Edit .env with your database credentials
nano .env
```

### 3. Database Setup

```bash
# Run migrations to create tables
npm run prisma:migrate:dev

# (Optional) Open Prisma Studio to view/edit data
npm run prisma:studio
```

### 4. Start Development Server

```bash
npm run dev
```

Server runs at: `http://localhost:4000`

---

## Production Deployment

### Option 1: Railway (Recommended for Beginners)

**Why Railway?**
- ✅ Free PostgreSQL database included
- ✅ Automatic deployments from GitHub
- ✅ Zero-config database connection
- ✅ Built-in environment variables

**Steps:**

1. **Create Railway Account**: https://railway.app

2. **New Project → Deploy from GitHub**
   - Connect your GitHub repo: `absulysuly/-iraq-election-backend`
   - Railway auto-detects Node.js

3. **Add PostgreSQL Database**
   - Click "New" → "Database" → "PostgreSQL"
   - Railway automatically sets `DATABASE_URL`

4. **Configure Build Settings**
   - Build Command: `npm install && npm run prisma:generate && npm run prisma:migrate:deploy`
   - Start Command: `npm run start:prod`

5. **Set Environment Variables**
   ```
   NODE_ENV=production
   PORT=4000
   ALLOWED_ORIGINS=https://your-frontend.vercel.app
   ```

6. **Deploy**
   - Push to `main` branch
   - Railway auto-deploys
   - Get your URL: `your-app.railway.app`

---

### Option 2: Render

**Why Render?**
- ✅ Free tier available
- ✅ Auto-deploy from GitHub
- ✅ PostgreSQL database included

**Steps:**

1. **Create Render Account**: https://render.com

2. **New Web Service**
   - Connect GitHub repo
   - Name: `iraq-election-backend`
   - Environment: `Node`
   - Build Command: `npm install; npm run prisma:generate; npm run prisma:migrate:deploy`
   - Start Command: `npm run start:prod`

3. **Add PostgreSQL Database**
   - Dashboard → "New PostgreSQL"
   - Copy internal database URL

4. **Environment Variables**
   ```
   DATABASE_URL=<your-internal-postgres-url>
   NODE_ENV=production
   PORT=4000
   ALLOWED_ORIGINS=https://your-frontend.vercel.app
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Get URL: `your-app.onrender.com`

---

### Option 3: Docker (For Advanced Users)

**Build and Run Locally:**

```bash
# Build image
docker build -t iraq-election-backend .

# Run with environment variables
docker run -d \
  -p 4000:4000 \
  -e DATABASE_URL="postgresql://user:pass@host:5432/db" \
  -e NODE_ENV=production \
  iraq-election-backend
```

**Deploy to Cloud:**
- Push to Docker Hub or GitHub Container Registry
- Deploy to AWS ECS, Google Cloud Run, or Azure Container Instances

---

## Database Providers

### Recommended Free PostgreSQL Options:

1. **Supabase** (Recommended)
   - URL: https://supabase.com
   - Free tier: 500MB database
   - ✅ Excellent for production

2. **Neon**
   - URL: https://neon.tech
   - Free tier: 3GB database
   - ✅ Serverless Postgres

3. **Railway**
   - Included with Railway deployment
   - Free tier: 512MB
   - ✅ Zero-config

---

## Post-Deployment Checklist

After deploying, verify:

- [ ] Health endpoint responds: `GET /health`
- [ ] Database connection works
- [ ] CORS configured for your frontend
- [ ] Environment variables set correctly
- [ ] Prisma migrations applied: `npm run prisma:migrate:deploy`

**Test Endpoints:**

```bash
# Health check
curl https://your-app.railway.app/health

# Get candidates (will be empty until you seed data)
curl https://your-app.railway.app/api/candidates
```

---

## Seeding Data (Important!)

Your database is empty after deployment. You need to add data:

**Option 1: Create a seed script**

```bash
# Add to package.json
"scripts": {
  "seed": "node prisma/seed.js"
}
```

**Option 2: Use Prisma Studio**

```bash
npm run prisma:studio
# Opens UI to manually add data
```

**Option 3: Import from API**

Create initial data via POST requests to your API endpoints.

---

## Troubleshooting

### Error: "Prisma Client not initialized"
```bash
npm run prisma:generate
```

### Error: "Database connection failed"
- Check `DATABASE_URL` format
- Ensure database allows external connections
- Verify SSL mode: `?sslmode=require` for production

### Error: "CORS blocked"
- Add your frontend URL to `ALLOWED_ORIGINS`
- Restart server after env changes

---

## Monitoring and Logs

### Railway
- Dashboard → Your Service → "Logs" tab

### Render
- Dashboard → Your Service → "Logs"

### Docker
```bash
docker logs <container-id>
```

---

## Cost Estimates

| Platform | Free Tier | Paid (Starter) |
|----------|-----------|----------------|
| Railway | $5/month credit | $5-20/month |
| Render | 750 hours/month | $7-25/month |
| Supabase DB | 500MB free | $25/month |
| Neon DB | 3GB free | $19/month |

**Recommendation**: Start with Railway or Render free tier, upgrade when needed.

---

## Security Notes

- ✅ Never commit `.env` file
- ✅ Use strong `DATABASE_URL` passwords
- ✅ Enable SSL for database connections
- ✅ Set `NODE_ENV=production`
- ✅ Implement rate limiting (add later)
- ✅ Add authentication before going live

---

## Need Help?

- Railway Docs: https://docs.railway.app
- Render Docs: https://render.com/docs
- Prisma Docs: https://www.prisma.io/docs
