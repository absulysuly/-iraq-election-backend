# 🚀 RAILWAY DEPLOYMENT INSTRUCTIONS - STEP BY STEP

## ✅ STATUS: READY TO DEPLOY

Your backend is fixed and tested locally. Follow these steps to deploy to Railway TONIGHT.

---

## 📋 PRE-DEPLOYMENT CHECKLIST

- [x] Local server starts successfully ✅
- [x] Health endpoint responds ✅
- [x] All code changes committed ✅
- [x] TypeScript compiles ✅
- [x] Prisma Client generated ✅
- [x] Railway configuration created ✅

---

## 🚀 STEP 1: PUSH TO GITHUB

```bash
cd /workspace
git push origin HEAD
```

**What this does**: Pushes all your fixes to GitHub, which Railway will pull from.

**Expected result**: GitHub should show your latest commit with message "fix: Railway deployment configuration..."

---

## 🛠️ STEP 2: CONFIGURE RAILWAY BACKEND SERVICE

### Go to Railway Dashboard

1. Open: https://railway.com/project/a11e1ef5-2bad-4cb4-98ad-c01acef00b8a
2. Click on your **backend service** (iraq-election-backend)
3. Go to **Settings** tab

### Update Build Settings

In **Settings → Deploy**:

**Build Command**:
```bash
npm install && node node_modules/prisma/build/index.js generate && cp -r shared-schema dist/ && npm run build && cd dist && sed -i 's|require("shared-schema/types")|require("./shared-schema/types")|g' mockData.js services/mappers.js
```

**Start Command**:
```bash
node dist/index.js
```

**Or use the railway.toml** (already created in your repo):
Railway should automatically detect `railway.toml` and use those settings.

### Set Environment Variables

In **Settings → Variables**, ensure these are set:

```env
NODE_ENV=production
PORT=3000
DATABASE_URL=<copy from your Postgres service>
ALLOWED_ORIGINS=https://your-frontend-url.vercel.app,http://localhost:5173
```

**How to get DATABASE_URL**:
1. Click on your **Postgres service** in Railway
2. Go to **Variables** tab
3. Copy the **DATABASE_URL** value
4. Paste it into your backend service variables

---

## 🎯 STEP 3: DEPLOY

### Option A: Automatic Deploy (Recommended)
Railway will automatically deploy when you push to GitHub.

1. Wait 2-3 minutes after pushing
2. Check the **Deployments** tab
3. Watch the build logs

### Option B: Manual Deploy
1. In Railway backend service
2. Click **Deployments** tab
3. Click **Deploy** button (top right)
4. Select your latest commit
5. Click **Deploy**

---

## 🔍 STEP 4: MONITOR DEPLOYMENT

### Watch the Build Logs

In **Deployments → [Your Deployment] → Build Logs**:

**✅ Look for these SUCCESS indicators**:
```
✔ Generated Prisma Client
✔ Built TypeScript successfully
✔ Deployment successful
```

**❌ If you see errors**:
- **"Module not found"**: Build command didn't run properly
- **"Prisma Client not initialized"**: Database URL missing or wrong
- **"Cannot find shared-schema"**: Copy command didn't work

---

## ✅ STEP 5: VERIFY DEPLOYMENT

### Get Your Backend URL

1. In Railway backend service
2. Go to **Settings → Domains**
3. Copy the public URL (e.g., `https://your-app.railway.app`)

### Test Endpoints

**Health Check**:
```bash
curl https://your-backend-url.railway.app/health
```

**Expected response**:
```json
{"status":"ok"}
```

**If this works**, your backend is LIVE! 🎉

---

## 🔧 TROUBLESHOOTING

### Problem: Build Fails

**Check**:
1. Look at build logs for specific error
2. Verify `package.json` has all dependencies
3. Ensure TypeScript compiles locally: `npm run build`

**Fix**:
- Make sure all dependencies are in `dependencies`, not `devDependencies`
- Add missing packages: `npm install <package> --save`
- Commit and push again

---

### Problem: Server Starts But Crashes

**Check**:
1. Look at deploy logs
2. Check if Prisma Client is generated
3. Verify DATABASE_URL is set

**Fix**:
- Ensure `prisma generate` is in build command
- Double-check DATABASE_URL value
- Make sure it's the **internal** URL from Railway Postgres

---

### Problem: Health Check Returns 404

**Check**:
1. Verify start command is `node dist/index.js`
2. Check if dist/index.js exists in deployment
3. Look at deploy logs for port binding

**Fix**:
- Ensure `npm run build` creates `dist/index.js`
- Verify server listens on `process.env.PORT`
- Check `config.ts` uses Railway's PORT variable

---

### Problem: "Cannot find module 'shared-schema/types'"

**Check**:
1. Verify shared-schema is copied to dist/
2. Check sed command ran successfully

**Fix**:
- Add to build command: `cp -r shared-schema dist/`
- Run sed fix: `cd dist && sed -i 's|require("shared-schema/types")|require("./shared-schema/types")|g' **/*.js`

---

## 🎉 SUCCESS CHECKLIST

After deployment, verify:

- [ ] Railway build completed successfully
- [ ] Deploy logs show "Server running on port XXXX"
- [ ] Health check returns `{"status":"ok"}`
- [ ] No errors in Railway logs
- [ ] Frontend can connect to backend
- [ ] Database queries work (check logs)

---

## 📊 EXPECTED DEPLOYMENT TIMELINE

1. **Push to GitHub**: 30 seconds
2. **Railway detects push**: 10 seconds
3. **Build process**: 2-3 minutes
4. **Deploy and start**: 30 seconds
5. **Health check**: 10 seconds

**Total: ~4-5 minutes from push to live!**

---

## 🔗 CONNECT FRONTEND TO BACKEND

Once backend is deployed:

### Update Frontend Environment Variables

In your **Vercel** (or frontend hosting):

**Add/Update**:
```env
VITE_API_URL=https://your-backend-url.railway.app
NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app
```

**Redeploy frontend** to use new backend URL.

---

## 💡 POST-LAUNCH MONITORING

### Railway Observability

**Metrics to watch**:
1. **CPU Usage**: Should be < 50% normally
2. **Memory**: Should be < 80%
3. **Response Time**: Health check < 100ms
4. **Error Rate**: Should be 0%

**Access**: Railway → Backend Service → **Observability** tab

### Set Up Alerts

Railway Pro plan allows:
- Email alerts on crashes
- Slack notifications
- Webhook integrations

---

## 🆘 IF EVERYTHING FAILS

### Emergency Fallback

If Railway deployment keeps failing:

**Option 1: Render.com** (Alternative hosting)
- Free tier available
- Similar to Railway
- Works with same setup

**Option 2: Heroku**
- Use same build process
- Requires Procfile: `web: node dist/index.js`

**Option 3: DigitalOcean App Platform**
- $5/month
- Simple deployment
- Good documentation

---

## 📞 NEED HELP?

**Check these resources**:
1. Railway Docs: https://docs.railway.app
2. Your deployment logs in Railway
3. GitHub Actions (if set up)
4. This file: `DEPLOYMENT_FIX_SUMMARY.md`

**Common Commands**:
```bash
# Test locally
npm run build && npm start

# Check what's in dist/
ls -la dist/

# Test health endpoint locally
curl http://localhost:4000/health
```

---

## 🎯 FINAL WORDS

You've done the hard part - the code is fixed and working locally!

Railway deployment is just:
1. Push code ✅
2. Railway builds it ✅
3. Verify it works ✅

**You're 5 minutes away from a live backend. Let's go! 🚀**

---

**Last Updated**: October 28, 2025
**Status**: Ready for Production
**Next Step**: PUSH TO GITHUB AND DEPLOY!
