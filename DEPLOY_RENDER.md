# 🚀 DEPLOY TO RENDER - 10 MINUTE GUIDE (FREE!)

## ✅ Why Render?
- **FREE tier:** 750 hours/month (enough for 24/7 operation)
- **Free PostgreSQL:** 90 days free, then $7/month
- **Auto-deploy:** Push to GitHub = auto deploy
- **No credit card:** Required but won't charge during free tier

---

## STEP 1: Create Render Account (1 minute)

1. Go to: **https://render.com**
2. Click **"Get Started"**
3. Click **"Sign in with GitHub"**
4. Authorize Render

---

## STEP 2: Create PostgreSQL Database (2 minutes)

1. Click **"New +"** button (top right)
2. Select **"PostgreSQL"**
3. Fill in:
   - **Name:** `iraq-election-db`
   - **Database:** `iraq_election`
   - **User:** `iraq_election_user`
   - **Region:** Choose closest to Iraq (Frankfurt or Singapore)
   - **Plan:** **Free** ✅

4. Click **"Create Database"**

5. **IMPORTANT:** Copy the **Internal Database URL** (starts with `postgresql://`)
   - Save it somewhere safe!

---

## STEP 3: Create Web Service (3 minutes)

1. Click **"New +"** button again
2. Select **"Web Service"**
3. Connect your GitHub repo: `absulysuly/-iraq-election-backend`

4. Fill in settings:
   - **Name:** `iraq-election-backend`
   - **Region:** Same as your database
   - **Branch:** `main`
   - **Root Directory:** leave blank
   - **Runtime:** `Node`
   - **Build Command:** 
     ```bash
     npm install && npm run prisma:generate && npm run prisma:migrate:deploy
     ```
   - **Start Command:**
     ```bash
     npm run prisma:seed && npm run start:prod
     ```
   - **Plan:** **Free** ✅

5. Click **"Advanced"** and add these **Environment Variables:**

```
DATABASE_URL=<paste your Internal Database URL here>
NODE_ENV=production
PORT=4000
ALLOWED_ORIGINS=*
LOG_LEVEL=info
```

6. Click **"Create Web Service"**

---

## STEP 4: Wait for Deployment (3-4 minutes)

Render will:
- Install dependencies
- Generate Prisma Client
- Run database migrations
- Seed database with sample data
- Start server

Watch the logs - you'll see:
```
✓ Build succeeded
✓ Database migrations applied
✓ Database seeded
✓ Server started on port 4000
==> Your service is live! 🎉
```

---

## STEP 5: Get Your URL (30 seconds)

After deployment succeeds, you'll see your URL at the top:
```
https://iraq-election-backend.onrender.com
```

**Copy this URL!**

---

## STEP 6: Test It! (30 seconds)

Open browser and go to:
```
https://your-url.onrender.com/health
```

Should return:
```json
{"status":"ok"}
```

Test candidates endpoint:
```
https://your-url.onrender.com/portal/candidates
```

Should return array of candidates!

---

## ⚠️ IMPORTANT: Free Tier Limitations

### **Spin Down:**
- Free services **spin down after 15 minutes** of inactivity
- First request after spin down takes **30-60 seconds** to wake up
- Solution: Use a free uptime monitor (like UptimeRobot.com) to ping every 14 minutes

### **Database:**
- **Free for 90 days**
- After 90 days: **$7/month** for PostgreSQL
- Your data is safe, just need to upgrade

---

## 🆙 Keep Your Service Awake (Optional)

### **Use UptimeRobot (Free):**

1. Go to: **https://uptimerobot.com**
2. Sign up (free)
3. Add New Monitor:
   - **Type:** HTTP(s)
   - **Friendly Name:** Iraq Election Backend
   - **URL:** `https://your-url.onrender.com/health`
   - **Monitoring Interval:** 5 minutes
4. Your service will never sleep! ✅

---

## 💰 Cost Summary

| Service | First 90 Days | After 90 Days |
|---------|--------------|---------------|
| Web Service | **FREE** ✅ | **FREE** ✅ |
| PostgreSQL | **FREE** ✅ | **$7/month** |
| **Total** | **$0** | **$7/month** |

Still cheaper than Railway! 🎉

---

## 🆘 Troubleshooting

### **Build Failed:**
- Check build logs
- Verify `package.json` exists
- Make sure Node 20.x is detected

### **Database Connection Failed:**
- Check `DATABASE_URL` in environment variables
- Make sure you copied **Internal Database URL** (not External)
- Format: `postgresql://user:pass@host:5432/db`

### **Service Keeps Sleeping:**
- Normal for free tier
- Set up UptimeRobot to keep it awake
- Or upgrade to paid tier ($7/month for always-on)

### **Migrations Failed:**
- Check logs for error message
- Might need to manually run: `npm run prisma:migrate:deploy`
- Contact Render support (they're very helpful!)

---

## 🎉 SUCCESS!

Your backend is now live at:
```
https://your-url.onrender.com
```

**Next Steps:**
1. Test all endpoints
2. Set up UptimeRobot (optional)
3. Give URL to frontend agent
4. Start building frontend!

---

## 📊 Render vs Railway Comparison

| Feature | Render Free | Railway |
|---------|------------|---------|
| **Cost** | FREE ✅ | $5/month |
| **Database** | FREE 90 days | Included |
| **Spin down** | After 15 min | No spin down |
| **Build time** | ~2-3 min | ~2 min |
| **Setup** | Easy | Easier |

**Verdict:** Render is PERFECT for starting! 🏆

---

## 🚀 Ready to Deploy?

Follow the 6 steps above and you'll be live in 10 minutes!

**Come back with your Render URL and we'll continue!** 🎯
