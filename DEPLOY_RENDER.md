# 🚀 Deploy Backend to Render (FREE)

## 📋 Overview

This guide walks you through deploying your Iraqi Election Platform backend to Render.com - **completely free for 3 months** (no credit card charges)!

**⏱️ Time Required**: 10 minutes  
**💰 Cost**: $0 (Free tier)  
**🔧 Difficulty**: Easy

## 🎯 What You'll Get

After deployment, you'll have:
- ✅ Live backend API accessible via URL
- ✅ Automatic HTTPS security
- ✅ 750 free hours per month (enough for development)
- ✅ Automatic deploys from Git
- ✅ PostgreSQL database included

## 📚 Prerequisites

- [x] Git repository with your backend code (you already have this!)
- [x] GitHub/GitLab/Bitbucket account
- [x] Render.com account (free - we'll create this)

## 🚀 STEP-BY-STEP DEPLOYMENT

### **STEP 1: Create Render Account** (2 minutes)

1. Go to [https://render.com](https://render.com)
2. Click **"Get Started"**
3. Sign up with GitHub (recommended) or email
4. Verify your email if needed

**✅ Done!** You now have a Render account.

---

### **STEP 2: Connect Your Repository** (2 minutes)

1. In Render dashboard, click **"New +"** button (top right)
2. Select **"Web Service"**
3. Click **"Connect GitHub"** (or your Git provider)
4. Authorize Render to access your repositories
5. Find and select your backend repository (`iraq-election-backend`)

**✅ Done!** Render can now access your code.

---

### **STEP 3: Configure Web Service** (3 minutes)

Fill out the form with these settings:

#### Basic Info
- **Name**: `iraq-election-api` (or your choice)
- **Region**: Select closest to Iraq (Europe Central recommended)
- **Branch**: `main` (or your default branch)
- **Root Directory**: Leave blank (unless backend is in subfolder)

#### Build Settings
- **Runtime**: `Node`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`

#### Instance Type
- **Plan**: Select **"Free"** (750 hours/month)

**✅ Done!** Basic configuration complete.

---

### **STEP 4: Add PostgreSQL Database** (2 minutes)

Your app needs a database. Let's add one:

1. Scroll down to **"Environment"** section
2. Click **"Add Environment Variable"**
3. You'll add database later - skip for now
4. Click **"Create Web Service"** at the bottom

**Alternative: Create Database First**
1. Go back to Render dashboard
2. Click **"New +"** → **"PostgreSQL"**
3. Name it: `iraq-election-db`
4. Region: Same as web service
5. Plan: **Free**
6. Click **"Create Database"**

Once database is created:
1. Go to database dashboard
2. Copy the **"Internal Database URL"**
3. Go back to your web service settings
4. Add environment variable:
   - **Key**: `DATABASE_URL`
   - **Value**: [Paste the database URL]

**✅ Done!** Database connected.

---

### **STEP 5: Add Environment Variables** (1 minute)

Add any other required environment variables:

In your web service settings, add:

```
NODE_ENV=production
PORT=10000
CORS_ORIGIN=*
```

Optional (if using Gemini AI):
```
GEMINI_API_KEY=your_gemini_api_key_here
```

**How to add:**
1. Web Service dashboard → **"Environment"** tab
2. Click **"Add Environment Variable"**
3. Enter Key and Value
4. Click **"Save Changes"**

**✅ Done!** All variables configured.

---

### **STEP 6: Deploy & Test** (1 minute + wait)

1. Render automatically deploys when you create the service
2. Watch the **"Logs"** tab for build progress
3. Wait for "Build succeeded" and "Service is live" messages (2-5 minutes)
4. Copy your service URL (looks like: `https://iraq-election-api.onrender.com`)

**Test your API:**
1. Open browser
2. Go to: `https://your-service-url.onrender.com/health`
3. You should see a success response!

**✅ DONE!** Your backend is live! 🎉

---

## 📝 Post-Deployment Checklist

After successful deployment:

- [ ] Copy your service URL
- [ ] Test a few API endpoints (e.g., `/social/users`, `/civic/stats/dashboard`)
- [ ] Give the URL to your coordinator agent
- [ ] Verify database is connected (check `/social/users` returns data)
- [ ] Check logs for any errors

## 🔗 Share With Coordinator

Send this message to your coordinator agent:

```
🎉 Backend deployed successfully!

📍 API URL: https://[your-service-url].onrender.com
✅ Status: All systems operational
🗄️ Database: Connected
📅 Deployed: [Today's date]

Ready for frontend integration!
```

---

## ⚙️ Important Render Settings

### Free Tier Limitations

✅ **Included Free:**
- 750 hours/month (enough for 24/7 if only one service)
- 512 MB RAM
- Automatic HTTPS
- Custom domains
- PostgreSQL database (1GB storage)

⚠️ **Limitations:**
- Service sleeps after 15 min inactivity (wakes on request in ~30 seconds)
- Shared CPU (slower than paid tiers)
- 100GB bandwidth/month

💡 **Note**: The sleep behavior means first request might be slow, but subsequent requests are fast. Perfect for development!

### Keeping Service Awake (Optional)

If you want to prevent sleeping (uses more hours):

**Option 1**: Upgrade to paid tier ($7/month) - no sleeping
**Option 2**: Use a free pinger service:
- [UptimeRobot](https://uptimerobot.com) - pings your URL every 5 minutes
- [Cron-Job.org](https://cron-job.org) - scheduled HTTP requests

---

## 🐛 TROUBLESHOOTING

### Issue 1: Build Failed

**Error**: `npm install failed` or `Module not found`

**Fix:**
1. Check your `package.json` has all dependencies
2. Verify Node version in `package.json`:
   ```json
   "engines": {
     "node": "20.x"
   }
   ```
3. Make sure build command is correct
4. Check build logs for specific error

### Issue 2: Service Won't Start

**Error**: `Application failed to respond`

**Fix:**
1. Check start command is correct: `npm start`
2. Verify your `server.js` listens on correct port:
   ```javascript
   const PORT = process.env.PORT || 10000;
   app.listen(PORT, () => console.log(`Server on ${PORT}`));
   ```
3. Check service logs for errors

### Issue 3: Database Connection Failed

**Error**: `connect ECONNREFUSED` or `Database not found`

**Fix:**
1. Verify `DATABASE_URL` environment variable is set
2. Make sure you copied "Internal Database URL" (not External)
3. Check database is in same region as web service
4. Run Prisma migrations: Add build command:
   ```
   npm install && npx prisma migrate deploy && npm run build
   ```

### Issue 4: CORS Errors

**Error**: Frontend gets CORS errors when calling API

**Fix:**
1. Add environment variable: `CORS_ORIGIN=*` (or specific frontend URL)
2. Make sure your Express app has CORS configured:
   ```javascript
   const cors = require('cors');
   app.use(cors({
     origin: process.env.CORS_ORIGIN || '*'
   }));
   ```
3. Redeploy service after changes

### Issue 5: Service URL Not Working

**Error**: `503 Service Unavailable` or URL not loading

**Fix:**
1. Check service status in Render dashboard (should be green "Live")
2. Check recent logs for errors
3. Try manual deploy: Settings → Manual Deploy
4. Wait for service to wake up if it was sleeping (~30 seconds)

---

## 📊 Monitoring Your Service

### View Logs
1. Go to web service dashboard
2. Click **"Logs"** tab
3. See real-time logs of your application
4. Filter by severity: Info, Warning, Error

### Check Metrics
1. Go to web service dashboard
2. Click **"Metrics"** tab
3. See:
   - CPU usage
   - Memory usage
   - Response times
   - Error rates

### Set Up Alerts (Optional)
1. Service Settings → **"Notifications"**
2. Add email or Slack webhook
3. Get notified of:
   - Deploy failures
   - Service crashes
   - High error rates

---

## 🔄 Updating Your Backend

Render auto-deploys when you push to your repository!

**Process:**
1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update API endpoints"
   git push origin main
   ```
3. Render automatically detects push and redeploys
4. Watch deploy progress in Render dashboard
5. New version live in ~2-5 minutes!

**Manual Deploy:**
If auto-deploy didn't trigger:
1. Web service dashboard
2. Click **"Manual Deploy"** button
3. Select branch: `main`
4. Click **"Deploy"**

---

## 💡 Pro Tips

1. **Use Environment Variables**: Never commit secrets to Git. Use Render's environment variables.

2. **Check Logs Often**: Logs are your friend for debugging. Check them regularly.

3. **Test Locally First**: Always test changes locally before deploying.

4. **Use Database Backups**: Render auto-backs up free databases, but you can manually backup too:
   - Database dashboard → "Backups" tab

5. **Monitor Usage**: Keep an eye on your 750 free hours. One service running 24/7 = ~720 hours/month.

6. **Custom Domain** (Optional): You can add your own domain in Settings → Custom Domain

---

## 📞 Need Help?

### Render Support
- **Docs**: https://render.com/docs
- **Community**: https://community.render.com
- **Status**: https://status.render.com

### Coordinator Agent
If deployment issues persist, contact your coordinator agent with:
- Service URL
- Error message from logs
- What you've tried
- Screenshots if helpful

---

## ✅ SUCCESS CHECKLIST

You're done when:

- [x] Render account created
- [x] Web service deployed and "Live"
- [x] Database connected
- [x] Environment variables set
- [x] Service URL accessible
- [x] Test endpoint working (e.g., `/health`)
- [x] URL shared with coordinator
- [x] No errors in logs

---

## 🎊 CONGRATULATIONS!

Your backend is now live on the internet! 🌍

**Next Steps:**
1. Share URL with coordinator agent
2. They'll coordinate frontend integration
3. Monitor logs for any issues
4. Relax - the hard part is done! ☕

---

**Questions?** Ask your coordinator agent anytime!

**Happy deploying! 🚀**
