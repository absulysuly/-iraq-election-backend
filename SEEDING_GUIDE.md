# 🌱 DATABASE SEEDING GUIDE

## 📋 **WHAT IS SEEDING?**

**Simple Explanation:**
Seeding is like filling an empty warehouse with products. Your database is the warehouse, and candidate data is the products!

```
Empty Database        →      Seed Script Runs      →      Database Full of Data
     [ ]                            🌱                           [📊 Data]
```

---

## 📊 **WHAT DATA GETS IMPORTED?**

When you run the seed script, it automatically creates:

### **1. All 18 Iraqi Governorates** ✅
```
- بغداد (Baghdad)
- البصرة (Basra)  
- نينوى (Nineveh/Mosul)
- أربيل (Erbil)
- النجف (Najaf)
- كربلاء (Karbala)
- الأنبار (Anbar)
- ذي قار (Dhi Qar)
- ميسان (Maysan)
- بابل (Babylon)
- واسط (Wasit)
- صلاح الدين (Saladin)
- ديالى (Diyala)
- المثنى (Muthanna)
- القادسية (Qadisiyyah)
- كركوك (Kirkuk)
- السليمانية (Sulaymaniyah)
- دهوك (Dohuk)
```

### **2. Political Parties** ✅
```
- التحالف الديمقراطي (Democratic Alliance)
- حزب التقدم (Progress Party)
- الوحدة الوطنية (National Unity)
- حركة الإصلاح (Reform Movement)
- التحالف الكردستاني (Kurdish Alliance)
- التيار الوطني (National Current)
```

### **3. Candidates** ✅
```
16 Realistic Iraqi Candidates including:
- أحمد محمود الجبوري (Baghdad)
- فاطمة علي السامرائي (Basra)
- حسن الموصلي (Mosul)
- زينب الأربيلي (Erbil)
- ليلى كريم النجفي (Najaf)
- سارة الكربلائي (Karbala)
- كريم العبيدي (Anbar)
+ 9 more from other governorates

Each candidate has:
- Name (Arabic)
- Party affiliation
- Governorate
- Bio
- Platform summary
- Vote count
- Profile picture
```

### **4. Sample Data** ✅
```
- 5 Sample voters
- 2 Social media posts
- 2 Campaign events
- Governorate statistics (voter counts, polling stations)
- Dashboard metrics
```

---

## 🚀 **HOW TO IMPORT DATA (STEP-BY-STEP)**

### **METHOD 1: During Deployment (Automatic)** 🤖

When you deploy to Railway/Render, seeding happens automatically!

```bash
# Railway/Render will automatically run:
1. npm install
2. npm run prisma:generate
3. npm run prisma:migrate:deploy
4. npm run prisma:seed          ← DATA IMPORTED HERE!
5. npm start
```

**You do nothing!** ✅ Data appears automatically.

---

### **METHOD 2: Manual Seeding (Local Testing)** 💻

If you want to test locally before deployment:

```bash
# Step 1: Make sure you have PostgreSQL running
# (Can use Docker, local PostgreSQL, or cloud database)

# Step 2: Set database URL
export DATABASE_URL="postgresql://user:password@localhost:5432/election_db"

# Step 3: Run migrations (creates tables)
npm run prisma:migrate:dev

# Step 4: Run seed script (imports data)
npm run prisma:seed
```

**Output you'll see:**
```
🌱 Starting database seed...

🗑️  Clearing existing data...
✅ Existing data cleared

📍 Creating governorates...
✅ Created 18 governorates

🏛️  Creating political parties...
✅ Created 6 parties

👥 Creating users and candidates...
✅ Created 16 candidates

🗳️  Creating sample voters...
✅ Created 5 voters

📝 Creating posts...
✅ Created 2 posts

📅 Creating events...
✅ Created 2 events

📊 Creating governorate statistics...
✅ Created statistics for 18 governorates

📈 Creating dashboard snapshot...
✅ Created dashboard snapshot

🎉 Database seeding completed successfully!

📊 Summary:
   - 18 Governorates
   - 6 Political Parties
   - 16 Candidates
   - 5 Voters
   - 2 Posts
   - 2 Events
   - Dashboard statistics initialized
```

---

## ➕ **HOW TO ADD MORE CANDIDATES**

### **Option 1: Edit the Seed Script** 📝

Open: `/workspace/prisma/seed.js`

Find the `CANDIDATES_DATA` array and add more:

```javascript
const CANDIDATES_DATA = [
  // ... existing candidates ...
  
  // ADD YOUR NEW CANDIDATE HERE:
  {
    name: 'اسم المرشح الجديد',           // Candidate name in Arabic
    governorateId: 'baghdad',           // Governorate ID
    partyId: 'party_001',               // Party ID
    bio: 'السيرة الذاتية...',           // Biography
    platformSummary: 'البرنامج الانتخابي...', // Platform
    votes: 5000,                        // Initial votes
    avatarUrl: 'https://i.pravatar.cc/150?img=70' // Profile pic
  },
];
```

**Then run:** `npm run prisma:seed`

---

### **Option 2: Use the API** 🌐

After backend is deployed, add candidates through the API:

```bash
# Create a new candidate
curl -X POST https://your-backend.railway.app/portal/candidates \
  -H "Content-Type: application/json" \
  -d '{
    "name": "اسم المرشح",
    "governorate": "Baghdad",
    "party": "Democratic Alliance",
    "bio": "السيرة الذاتية",
    "verified": true
  }'
```

---

### **Option 3: Use Prisma Studio (Visual Editor)** 🎨

```bash
# Open visual database editor
npm run prisma:studio
```

This opens a web interface where you can:
- ✅ View all data
- ✅ Add new candidates (click "Add record")
- ✅ Edit existing candidates
- ✅ Delete candidates
- ✅ See all relationships

**URL:** http://localhost:5555

---

## 🔄 **HOW THE FLOW WORKS**

```
┌─────────────────────────────────────────────────────────┐
│                   COMPLETE DATA FLOW                    │
└─────────────────────────────────────────────────────────┘

1. SEED SCRIPT RUNS
   ├─ Creates 18 governorates
   ├─ Creates 6 parties
   ├─ Creates 16 candidates
   └─ Creates sample posts/events
   
2. DATA IN DATABASE
   ├─ PostgreSQL stores everything
   └─ Ready to be accessed
   
3. BACKEND API READS DATA
   ├─ GET /social/users → Returns candidates
   ├─ GET /civic/governorates → Returns all governorates
   └─ GET /portal/candidates → Returns candidate list
   
4. FRONTEND DISPLAYS DATA
   ├─ Shows candidate profiles
   ├─ Shows governorate pages
   └─ Shows statistics
```

---

## 📅 **WHEN DOES SEEDING HAPPEN?**

### **Timeline:**

```
TODAY:
✅ Seed script created
✅ 16 candidates defined
✅ All governorates included

TOMORROW (When Backend Deploys):
📦 Railway creates PostgreSQL database
🌱 Seed script runs automatically
✅ Database filled with data

DAY AFTER:
🔗 Frontend connects to backend
📊 Your frontend shows real candidate data!
```

---

## 🎯 **CURRENT CANDIDATES IN SEED SCRIPT**

| # | Name | Governorate | Party | Votes |
|---|------|-------------|-------|-------|
| 1 | أحمد محمود الجبوري | Baghdad | التحالف الديمقراطي | 15,420 |
| 2 | سارة علي البغدادي | Baghdad | حزب التقدم | 12,350 |
| 3 | كريم حسن الخزرجي | Baghdad | الوحدة الوطنية | 9,870 |
| 4 | فاطمة علي السامرائي | Basra | حزب التقدم | 23,150 |
| 5 | عمر البصري | Basra | التحالف الديمقراطي | 18,900 |
| 6 | حسن الموصلي | Mosul | الوحدة الوطنية | 31,200 |
| 7 | ليلى يونس | Mosul | حركة الإصلاح | 15,600 |
| 8 | زينب الأربيلي | Erbil | التحالف الكردستاني | 19,500 |
| 9 | بيشوا محمد | Erbil | التحالف الكردستاني | 22,100 |
| 10 | ليلى كريم النجفي | Najaf | حركة الإصلاح | 18,900 |
| 11 | عادل الياسري | Najaf | التحالف الديمقراطي | 25,400 |
| 12 | سارة الكربلائي | Karbala | حزب التقدم | 16,700 |
| 13 | كريم العبيدي | Anbar | التيار الوطني | 27,800 |
| 14 | علي الناصري | Dhi Qar | الوحدة الوطنية | 14,200 |
| 15 | نور العمارة | Maysan | حزب التقدم | 11,500 |
| 16 | جمال الكركوكي | Kirkuk | التيار الوطني | 19,800 |
| 17 | آلان السليماني | Sulaymaniyah | التحالف الكردستاني | 17,300 |

**Total: 17 Candidates across 12 governorates**

---

## 🔍 **HOW TO CHECK IF DATA WAS IMPORTED**

### **Method 1: Check via API**
```bash
# After backend is deployed
curl https://your-backend.railway.app/social/users

# Should return all candidates in JSON
```

### **Method 2: Use Prisma Studio**
```bash
npm run prisma:studio
# Opens http://localhost:5555
# You'll see all tables with data
```

### **Method 3: Check Logs**
```bash
# During deployment, check Railway logs
# Look for: "✅ Created 16 candidates"
```

---

## ⚠️ **IMPORTANT NOTES**

### **Seeding is Idempotent**
- ✅ Safe to run multiple times
- ✅ Clears old data before inserting new
- ✅ Won't create duplicates

### **When to Re-seed**
- When you add new candidates to seed script
- When you want to reset database to initial state
- When testing different data scenarios

### **Backup Before Re-seeding**
```bash
# If you have real data, backup first:
pg_dump $DATABASE_URL > backup.sql

# Then you can restore later:
psql $DATABASE_URL < backup.sql
```

---

## 💡 **QUICK REFERENCE**

```bash
# View database visually
npm run prisma:studio

# Run seed script (import data)
npm run prisma:seed

# Generate Prisma Client
npm run prisma:generate

# Create new migration
npm run prisma:migrate:dev

# Apply migrations in production
npm run prisma:migrate:deploy
```

---

## 🎊 **SUMMARY**

**What:** Import 17 Iraqi candidates + parties + governorates into database

**When:** Automatically when backend deploys (tomorrow!)

**How:** Seed script runs and fills database

**Result:** Frontend can show real Iraqi candidate data!

**You do:** Nothing! It's automatic ✅

(Or manually run `npm run prisma:seed` to test locally)

---

**Questions?** The seed script is at: `/workspace/prisma/seed.js`

**Ready to deploy backend now?** Follow `/workspace/DEPLOY_RENDER.md`!
