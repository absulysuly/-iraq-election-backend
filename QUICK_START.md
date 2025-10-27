# 🚀 Quick Start - Iraq Election Backend

## Get Running in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Set Up Database

**Option A: Local PostgreSQL**
```bash
# If you have PostgreSQL installed locally
createdb iraq_election

# Add to .env
echo 'DATABASE_URL="postgresql://postgres:password@localhost:5432/iraq_election"' > .env
```

**Option B: Free Cloud Database (Recommended)**

1. Go to https://supabase.com or https://neon.tech
2. Create free account
3. Create new project
4. Copy connection string
5. Add to .env:
```bash
echo 'DATABASE_URL="your-connection-string-here"' > .env
```

### Step 3: Run Migrations
```bash
npm run prisma:migrate:dev
```

### Step 4: Seed Database with Sample Data
```bash
npm run prisma:seed
```

### Step 5: Start Server
```bash
npm run dev
```

✅ Server running at `http://localhost:4000`

---

## Test It Works

```bash
# Health check
curl http://localhost:4000/health

# Get candidates
curl http://localhost:4000/api/candidates

# Get social posts
curl http://localhost:4000/social/posts

# Get events
curl http://localhost:4000/social/events
```

---

## What's Next?

1. ✅ **View Data**: Run `npm run prisma:studio` to open database UI
2. ✅ **Read API Docs**: Check `API_CONTRACT.md` for all endpoints
3. ✅ **Deploy**: Follow `DEPLOYMENT.md` for production deployment
4. ✅ **Connect Frontend**: Point your frontend to `http://localhost:4000`

---

## Common Issues

**"Cannot connect to database"**
- Check your `DATABASE_URL` is correct
- Make sure PostgreSQL is running (if local)

**"Prisma Client not found"**
```bash
npm run prisma:generate
```

**"No data returned"**
```bash
npm run prisma:seed
```

---

## Project Structure

```
/workspace
├── src/              # TypeScript source code
│   ├── routes/       # API endpoints
│   ├── services/     # Business logic
│   └── index.ts      # Main server file
├── prisma/
│   ├── schema.prisma # Database schema
│   └── seed.js       # Sample data
├── archive/
│   └── server.js     # Old Express server (reference)
└── package.json      # Dependencies & scripts
```

---

## Available npm Scripts

```bash
npm run dev                    # Start dev server with hot reload
npm run start                  # Start production server
npm run prisma:generate        # Generate Prisma Client
npm run prisma:migrate:dev     # Create & run migrations (dev)
npm run prisma:migrate:deploy  # Apply migrations (production)
npm run prisma:studio          # Open database UI
npm run prisma:seed            # Populate database with sample data
```

---

## Need Help?

- 📖 Full deployment guide: `DEPLOYMENT.md`
- 🔧 API documentation: `API_CONTRACT.md`
- 💬 Open an issue on GitHub
