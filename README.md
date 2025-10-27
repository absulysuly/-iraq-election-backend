# 🇮🇶 Iraq Election Platform - Backend

> A comprehensive backend system for Iraq's election platform featuring social media integration, civic engagement tools, and candidate management.

[![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-blue.svg)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5.5-blueviolet.svg)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-blue.svg)](https://www.postgresql.org/)

## 📋 Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Database Schema](#database-schema)

---

## ✨ Features

### 🗳️ Election Core
- ✅ Candidate profiles and registration
- ✅ Multi-party system support
- ✅ Vote tracking and statistics
- ✅ Governorate-based organization (18 Iraqi governorates)

### 📱 Social Media Platform
- ✅ Posts and Reels for candidates
- ✅ Follow/Like/Comment system
- ✅ Event scheduling and management
- ✅ Debate organization and tracking
- ✅ News articles aggregation

### 📊 Civic Dashboards
- ✅ Real-time voter participation statistics
- ✅ Governorate-level data visualization
- ✅ Party and candidate distribution analytics
- ✅ Integrity reporting system

### 🔐 Security & Verification
- ✅ User authentication system
- ✅ Candidate verification badges
- ✅ CORS protection
- ✅ Environment-based configuration

---

## 🚀 Quick Start

**Get running in 5 minutes:**

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp .env.example .env
# Edit .env with your database URL

# 3. Run database migrations
npm run prisma:migrate:dev

# 4. Seed with sample data
npm run prisma:seed

# 5. Start development server
npm run dev
```

**Server runs at:** `http://localhost:4000`

📖 **Detailed setup guide:** See [QUICK_START.md](./QUICK_START.md)

---

## 📁 Project Structure

```
/workspace
├── src/                          # TypeScript source code
│   ├── index.ts                  # Main Express server
│   ├── config.ts                 # Environment configuration
│   ├── types.ts                  # TypeScript type definitions
│   ├── mockData.ts               # Sample data structures
│   ├── routes/                   # API route handlers
│   │   ├── auth.ts              # Authentication endpoints
│   │   ├── social.ts            # Social media features
│   │   ├── civic.ts             # Civic dashboard APIs
│   │   ├── candidatePortal.ts   # Candidate management
│   │   └── facebook.ts          # Facebook integration
│   ├── services/                 # Business logic layer
│   │   ├── authService.ts
│   │   ├── socialService.ts
│   │   ├── candidateService.ts
│   │   ├── governorateService.ts
│   │   ├── facebookService.ts
│   │   ├── verificationService.ts
│   │   └── mappers.ts
│   └── lib/
│       └── prisma.ts            # Prisma client setup
│
├── prisma/
│   ├── schema.prisma            # Database schema (11 models)
│   └── seed.js                  # Database seeding script
│
├── dist/                        # Compiled JavaScript (build output)
│
├── archive/
│   └── server.js               # Legacy Express server (reference)
│
├── iraq-election-platform/     # Simple deployment version
│   ├── index.html              # Standalone voting UI
│   └── api/                    # Serverless API functions
│       ├── candidates.js
│       └── health.js
│
├── .env.example                # Environment variables template
├── Dockerfile                  # Docker configuration
├── .dockerignore              # Docker ignore rules
│
├── API_CONTRACT.md            # Complete API documentation
├── DEPLOYMENT.md              # Production deployment guide
├── QUICK_START.md             # Quick setup instructions
├── package.json               # Dependencies & scripts
└── tsconfig.json              # TypeScript configuration
```

---

## 📚 API Documentation

### Base URL
- Development: `http://localhost:4000`
- Production: `https://your-domain.com`

### Core Endpoints

#### Authentication
```bash
POST /auth/login              # User login
```

#### Social Features
```bash
GET  /social/users            # List users (voters/candidates)
GET  /social/posts            # Get posts/reels
POST /social/posts            # Create new post
POST /social/reels            # Create new reel
GET  /social/events           # List events
POST /social/events           # Create event
GET  /social/debates          # List debates
GET  /social/articles         # Get news articles
POST /social/follow           # Follow candidate
POST /social/like             # Like post
```

#### Civic Dashboard
```bash
GET /civic/stats/dashboard           # Dashboard statistics
GET /civic/stats/participation       # Voter participation by governorate
GET /civic/governorates/:slug        # Governorate details
GET /civic/parties/:id               # Party information
POST /civic/reports/integrity        # Report integrity violations
```

#### Candidate Portal
```bash
GET /portal/candidates               # List all candidates
GET /portal/candidates/:id           # Get candidate details
```

#### Health Check
```bash
GET /health                          # Server health status
```

**📖 Full API documentation:** See [API_CONTRACT.md](./API_CONTRACT.md)

---

## 🗄️ Database Schema

### Models (11 total)

- **Governorate** - Iraqi governorate data
- **User** - Voters and candidates
- **Post** - Social media posts and reels
- **Event** - Campaign events
- **Debate** - Candidate debates
- **Article** - News articles
- **Party** - Political parties
- **Candidate** - Candidate profiles
- **GovernorateStatistic** - Voter statistics per governorate
- **GovernorateParticipation** - Turnout estimates
- **DashboardSnapshot** - Cached dashboard metrics

**View schema:** `prisma/schema.prisma`

---

## 🚀 Deployment

### Recommended Platforms

#### 1. **Railway** (Easiest)
```bash
# Free PostgreSQL + auto-deploy
# https://railway.app
```

#### 2. **Render**
```bash
# Free tier available
# https://render.com
```

#### 3. **Docker**
```bash
docker build -t iraq-election-backend .
docker run -p 4000:4000 iraq-election-backend
```

**📖 Complete deployment guide:** See [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 🛠️ Available Scripts

```bash
# Development
npm run dev                       # Start dev server with hot reload
npm run build                     # Build TypeScript to JavaScript

# Prisma Database
npm run prisma:generate           # Generate Prisma Client
npm run prisma:migrate:dev        # Create & apply migrations (dev)
npm run prisma:migrate:deploy     # Apply migrations (production)
npm run prisma:studio             # Open database GUI
npm run prisma:seed               # Populate with sample data

# Production
npm run start                     # Start production server
npm run start:prod                # Alias for production start
```

---

## 🌍 Supported Governorates

Baghdad • Basra • Nineveh • Erbil • Najaf • Karbala • Sulaymaniyah • Dhi Qar • Anbar • Diyala • Kirkuk • Saladin • Wasit • Babil • Duhok • Maysan • Muthanna • Qadisiyyah

---

## 📦 Tech Stack

- **Runtime:** Node.js 20.x
- **Framework:** Express.js 4.18
- **Database:** PostgreSQL 15+
- **ORM:** Prisma 5.5
- **Language:** TypeScript
- **Deployment:** Docker, Railway, Render

---

## 🔐 Environment Variables

Required environment variables (see `.env.example`):

```bash
DATABASE_URL=postgresql://...     # PostgreSQL connection
PORT=4000                         # Server port
NODE_ENV=development              # Environment
ALLOWED_ORIGINS=http://...        # CORS origins
LOG_LEVEL=info                    # Logging level
```

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🆘 Support & Documentation

- 📖 **Quick Start:** [QUICK_START.md](./QUICK_START.md)
- 🚀 **Deployment:** [DEPLOYMENT.md](./DEPLOYMENT.md)
- 📡 **API Docs:** [API_CONTRACT.md](./API_CONTRACT.md)
- 💬 **Issues:** [GitHub Issues](https://github.com/absulysuly/-iraq-election-backend/issues)

---

## 📊 Project Status

✅ **Backend Infrastructure:** Complete  
✅ **Database Schema:** Complete  
✅ **API Endpoints:** Complete  
⚠️ **Database Seeding:** Available (needs production data)  
⚠️ **Frontend Integration:** In Progress  
⏳ **Authentication:** Basic (needs JWT implementation)  
⏳ **Testing:** Not implemented  

---

Built with ❤️ for a better Iraq 🇮🇶
