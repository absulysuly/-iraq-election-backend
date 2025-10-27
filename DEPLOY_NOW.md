# 🚀 DEPLOY BACKEND TO RAILWAY - 10 MINUTE GUIDE

## Step 1: Create Railway Account (2 minutes)

1. Go to: **https://railway.app**
2. Click **"Login with GitHub"**
3. Authorize Railway to access your GitHub

## Step 2: Create New Project (3 minutes)

1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose: **`absulysuly/-iraq-election-backend`**
4. Railway detects Node.js automatically ✅

## Step 3: Add PostgreSQL Database (1 minute)

1. In your project, click **"+ New"**
2. Select **"Database"** → **"Add PostgreSQL"**
3. Railway automatically connects it ✅
4. The `DATABASE_URL` is auto-set ✅

## Step 4: Configure Environment Variables (2 minutes)

1. Click on your backend service
2. Go to **"Variables"** tab
3. Click **"+ Add Variable"**
4. Add these:

```
NODE_ENV=production
PORT=4000
ALLOWED_ORIGINS=*
LOG_LEVEL=info
```

**Note:** `DATABASE_URL` is already set by Railway automatically!

## Step 5: Deploy! (2 minutes)

1. Click **"Deploy"**
2. Railway will:
   - Install dependencies
   - Generate Prisma Client
   - Run migrations
   - Seed database with sample data
   - Start server

3. Wait for "✅ Deployed" (takes ~2 minutes)

## Step 6: Get Your URL

1. Click **"Settings"** tab
2. Under **"Networking"** → Click **"Generate Domain"**
3. You'll get: `your-app-name.up.railway.app`

## Step 7: Test It!

```bash
# Replace with your Railway URL
curl https://your-app-name.up.railway.app/health

# Should return:
# {"status":"ok"}
```

```bash
# Test candidates endpoint
curl https://your-app-name.up.railway.app/portal/candidates

# Should return array of candidates
```

---

## 🎉 SUCCESS!

Your backend is now LIVE at:
```
https://your-app-name.up.railway.app
```

**Next Steps:**
1. Copy this URL
2. Save it somewhere safe
3. Give it to the frontend agent

---

## 💰 Cost

- **Railway Free Tier:** $5 credit/month
- **PostgreSQL:** Included in free tier
- **Your Usage:** ~$3-4/month
- **First month:** FREE ✅

---

## 🆘 Troubleshooting

### Build Failed?
- Check **"Build Logs"** tab
- Make sure Node 20.x is detected
- Run: `npm install` succeeded

### Database Connection Failed?
- Check **"Variables"** tab
- Verify `DATABASE_URL` exists
- Format: `postgresql://user:pass@host:port/db`

### Deployment Timeout?
- Increase timeout in Settings
- Check if migrations are stuck

### Need Help?
- Railway Discord: https://discord.gg/railway
- Documentation: https://docs.railway.app
