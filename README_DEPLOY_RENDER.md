
# 🇮🇶 Iraqi Election Platform — Render Deployment Guide

## Backend (Node.js + Prisma)
1. Go to [https://dashboard.render.com](https://dashboard.render.com)
2. Create a **Web Service** → connect your GitHub repo or upload files.
3. Set **Root Directory:** `backend/-iraq-election-backend`
4. Set **Build Command:** `npm install && npm run build`
5. Set **Start Command:** `npm start`
6. Add Environment Variables:
   - NODE_VERSION = 20
   - PORT = 10000
   - DATABASE_URL = your_postgres_url (Render will give this automatically if DB is added)
7. Deploy. Wait for build success (should take ~2–3 minutes).

## Frontend (React + Vite)
1. Create another **Static Site** in Render.
2. Set **Root Directory:** `Copy-of-Hamlet-social`
3. Set **Build Command:** `npm install && npm run build`
4. Set **Publish Directory:** `dist`
5. Add Environment Variables:
   - VITE_API_URL = https://iraq-election-backend.onrender.com
   - GENAI_API_KEY = (optional if not using AI feature)
6. Deploy.

✅ Done — your full platform (frontend + backend) will be live.
