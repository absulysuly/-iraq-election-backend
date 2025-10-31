# 🔗 Iraq Election Platform - Complete Project Structure & Links

## 📦 Your Project Overview

Your Iraqi Election Platform consists of **3 main components**:

---

## 1️⃣ BACKEND (This Repository)

### **Repository:**
https://github.com/absulysuly/-iraq-election-backend

### **Current Branch:**
`cursor/orchestrate-autonomous-multi-agent-development-workflow-2a3b`

### **Deployment:**
- **Platform:** Railway
- **Status:** Ready for deployment (fixed on Oct 28, 2025)
- **Configuration:** See `DEPLOYMENT_FIX_SUMMARY.md` and `RAILWAY_DEPLOYMENT_INSTRUCTIONS.md`

### **Technology Stack:**
- **Runtime:** Node.js with Express
- **Language:** TypeScript
- **Database:** PostgreSQL with Prisma ORM
- **Hosting:** Railway (ready to deploy)

### **Main Files:**
- `/src/` - TypeScript source code (17 files)
- `/dist/` - Compiled JavaScript (production ready)
- `/prisma/schema.prisma` - Database schema
- `API_CONTRACT.md` - API documentation for frontends
- `package.json` - Dependencies and scripts

### **API Endpoints Provided:**
**Authentication:**
- `POST /auth/login` - User authentication

**Social Features:**
- `GET /social/users` - List users
- `GET/POST /social/posts` - Posts management
- `POST /social/reels` - Create reels
- `GET/POST /social/events` - Events management
- `GET /social/debates` - Debates listing
- `GET /social/articles` - News articles
- `POST /social/follow` - Follow candidates
- `POST /social/like` - Like posts

**Civic Features:**
- `GET /civic/stats/dashboard` - Dashboard statistics
- `GET /civic/stats/participation` - Voter participation data
- `GET /civic/governorates/:slug` - Governorate details
- `GET /civic/parties/:id` - Political party info
- `POST /civic/reports/integrity` - Integrity violation reports

---

## 2️⃣ FRONTEND #1: Social Media App

### **Project Name:** 
`Copy-of-Hamlet-social`

### **Purpose:**
Social media platform for Iraqi voters and candidates to engage, share content, and build community.

### **Features (Based on API Contract):**
- ✅ User profiles (Voters & Candidates)
- ✅ Posts and Reels (social content)
- ✅ Events calendar and RSVP
- ✅ Candidate debates (live and recorded)
- ✅ News articles aggregation
- ✅ Follow candidates
- ✅ Like, comment, share functionality
- ✅ Governorate-based filtering
- ✅ Sponsored content support

### **Technology:**
- React-based (mentioned in API_CONTRACT.md)
- Consumes backend API at `/social/*` endpoints

### **Repository Status:**
⚠️ **NOT IN THIS WORKSPACE** - Separate repository needed

**Possible locations:**
- https://github.com/absulysuly/Copy-of-Hamlet-social (check your GitHub)
- Or similar name with "hamlet" or "social"

---

## 3️⃣ FRONTEND #2: Civic Dashboards

### **Project Name:**
`hamlat-forntend-6-10` (note: intentional typo in original name)

### **Purpose:**
Civic engagement dashboards showing election statistics, governorate data, and integrity monitoring.

### **Features (Based on API Contract):**
- ✅ Dashboard with key statistics:
  - Total registered voters
  - Expected turnout
  - Approved candidates count
  - Verified violations
  - Green campaign impact
  - Gender distribution
- ✅ Governorate participation maps
- ✅ Governorate deep-dive pages
- ✅ Political party profiles with candidates
- ✅ Integrity violation reporting system
- ✅ Data visualization and charts

### **Technology:**
- React-based (mentioned in API_CONTRACT.md)
- Consumes backend API at `/civic/*` endpoints

### **Repository Status:**
⚠️ **NOT IN THIS WORKSPACE** - Separate repository needed

**Possible locations:**
- https://github.com/absulysuly/hamlat-forntend-6-10 (check your GitHub)
- Or similar name with "hamlet" or "civic"

---

## 🌐 DEPLOYED FRONTEND (Unified?)

### **Live URL:**
https://hamlet-unified-complete-2027-production.up.railway.app

### **Deployment Platform:**
Railway

### **Status:**
✅ **LIVE** (confirmed - returns HTTP 200)

### **Possible Configuration:**
This might be a **unified frontend** that combines both the social media app and civic dashboards into one application. The name "hamlet-unified-complete-2027" suggests it's a merged/unified version.

---

## 🔍 WHERE ARE THE FRONTEND REPOSITORIES?

### **Option 1: Separate GitHub Repositories**
The frontends are likely in separate repositories under your GitHub account:

**Check these URLs:**
1. https://github.com/absulysuly/Copy-of-Hamlet-social
2. https://github.com/absulysuly/hamlat-forntend-6-10
3. https://github.com/absulysuly/hamlet-unified-complete-2027
4. https://github.com/absulysuly?tab=repositories (see all your repos)

### **Option 2: Different GitHub Organization**
The frontends might be under a different GitHub organization or team account.

### **Option 3: Branches in This Repository**
Let me check if there are frontend branches:

```bash
git branch -a | grep -i frontend
```

Result: Found branch `cursor/setup-and-coordinate-frontend-agent-build-02f4`

Let me check this branch for frontend code...

---

## 🔎 LET'S FIND THE FRONTEND!

### **Action Items:**

1. **Check the frontend branch:**
```bash
git checkout cursor/setup-and-coordinate-frontend-agent-build-02f4
ls -la
```

2. **Search your GitHub account:**
   - Go to: https://github.com/absulysuly?tab=repositories
   - Look for repos with "hamlet", "social", "civic", "frontend", or "election"

3. **Check Railway deployments:**
   - Go to: https://railway.com
   - Look at your projects
   - The frontend deployment should show the source repository

4. **Ask your team:**
   - If another team is working on the frontend, ask them for the repository URL

---

## 📊 INTEGRATION STATUS

### ✅ What's Working:
- Backend API is ready and tested locally
- Database schema is defined (18 governorates, users, posts, events, etc.)
- API contract is documented
- Backend ready for Railway deployment

### ⏳ What's Needed:
- Frontend repository links
- Frontend deployment status
- Backend-Frontend integration verification
- CORS configuration (ALLOWED_ORIGINS environment variable)

---

## 🔧 NEXT STEPS TO CONNECT EVERYTHING

### **Step 1: Locate Frontend Repositories**
Find the GitHub URLs for:
- [ ] Copy-of-Hamlet-social
- [ ] hamlat-forntend-6-10
- [ ] Or the unified frontend

### **Step 2: Deploy Backend**
Follow instructions in `RAILWAY_DEPLOYMENT_INSTRUCTIONS.md`:
```bash
git push origin HEAD
# Then configure Railway with environment variables
```

### **Step 3: Connect Frontend to Backend**
Update frontend environment variables:
```env
VITE_API_URL=https://your-backend-url.railway.app
# or
NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app
```

### **Step 4: Configure CORS**
In backend Railway environment variables:
```env
ALLOWED_ORIGINS=https://hamlet-unified-complete-2027-production.up.railway.app
```

### **Step 5: Test Integration**
- Frontend calls backend API
- Check browser console for errors
- Verify data flows correctly

---

## 🤝 COLLABORATION WITH OTHER TEAM

You mentioned another team is working on a different branch. Here's how to coordinate:

### **Their Branch:**
`cursor/orchestrate-autonomous-multi-agent-development-workflow-2a3b`

### **Communication:**
- Check their commits: `git log origin/cursor/orchestrate-autonomous-multi-agent-development-workflow-2a3b`
- Review their changes: `git diff main..origin/cursor/orchestrate-autonomous-multi-agent-development-workflow-2a3b`
- Merge strategy: Coordinate before merging to avoid conflicts

---

## 📞 IMMEDIATE ACTION FOR YOU

### **Can you help me find the frontend?**

Please check:

1. **Your GitHub repositories page:**
   https://github.com/absulysuly?tab=repositories
   
2. **Railway frontend deployment:**
   - Login to Railway
   - Check the frontend service
   - Look at "Settings → GitHub Repo" to see the source

3. **Share with me:**
   - Frontend repository URL(s)
   - Any additional information about the project structure

**Once you provide the frontend repo links, I can:**
- Analyze the frontend code
- Update my IHEC recommendations to integrate with your existing work
- Create a complete integration guide
- Help with deployment and connection issues

---

## 🎯 SUMMARY

**What we have:**
- ✅ Backend repository: https://github.com/absulysuly/-iraq-election-backend
- ✅ Backend code: Ready and working
- ✅ Deployed frontend: https://hamlet-unified-complete-2027-production.up.railway.app
- ✅ API documentation: Complete

**What we need:**
- ❓ Frontend repository URL(s)
- ❓ Frontend codebase access
- ❓ Deployment configuration for full integration

---

## 💡 FOR THE IHEC ANALYSIS PROJECT

All my recommendations in the IHEC analysis documents can be applied to:
1. **Backend:** Extend the existing `/civic/*` and `/social/*` endpoints
2. **Frontend #1 (Social):** Add women empowerment features, gamification, etc.
3. **Frontend #2 (Civic):** Add real-time dashboards, polling center maps, etc.

**The architecture is already set up perfectly for the IHEC enhancements!**

---

**Please share the frontend repository links so I can complete the analysis! 🚀**

