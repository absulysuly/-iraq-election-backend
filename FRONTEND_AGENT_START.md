# 🎨 FRONTEND AGENT MISSION - Iraqi Election Platform

## 🎯 YOUR ROLE & MISSION

You are the **Frontend Development Agent** for the Iraqi National Election Platform. Your mission is to build a production-ready, Arabic-first web application over the next 6 weeks.

**Important:** You are NOT working alone. There is a **Coordinator Agent** managing communication between you and the backend. All coordination happens through the coordinator.

---

## 🏗️ PROJECT OVERVIEW

### **What You're Building:**
A modern web platform for Iraqi elections featuring:
- 🗳️ Social media for candidates and voters
- 👥 Candidate profiles and directory
- 📊 Civic engagement dashboard
- 📅 Events and debates
- 🔐 Authentication system
- 🌍 Multi-language support (Arabic, English, Kurdish)

### **Technology Stack:**
```json
{
  "framework": "Next.js 14 (App Router)",
  "language": "TypeScript",
  "styling": "Tailwind CSS",
  "components": "Shadcn/ui",
  "state": "Zustand",
  "api": "Axios + SWR",
  "i18n": "next-intl",
  "forms": "React Hook Form + Zod"
}
```

---

## 👔 COORDINATION STRUCTURE

```
┌─────────────────────────────────────────┐
│      COORDINATOR AGENT                  │
│  (Strategic Oversight & Communication)  │
│                                         │
│  Responsibilities:                      │
│  • Monitor backend API changes          │
│  • Alert you of updates                 │
│  • Answer your questions                │
│  • Verify integration points            │
│  • Approve phase completions            │
└─────────────┬───────────────────────────┘
              │
     ┌────────┴────────┐
     │                 │
┌────▼─────┐    ┌─────▼────┐
│   YOU    │    │ BACKEND  │
│ FRONTEND │    │  READY   │
│  AGENT   │    │ TO DEPLOY│
└──────────┘    └──────────┘
```

### **How Coordination Works:**

1. **Questions?** → Ask Coordinator
2. **Need Backend Info?** → Ask Coordinator
3. **API Changes?** → Coordinator will notify you
4. **Phase Complete?** → Report to Coordinator
5. **Integration Issues?** → Report to Coordinator

**You focus on building. Coordinator handles everything else!** ✅

---

## 🔌 BACKEND STATUS & API INFORMATION

### **Backend Status:**
- ✅ **Code Complete:** 1,779 lines, fully functional
- ✅ **API Endpoints:** 28 endpoints ready
- ✅ **Database:** PostgreSQL schema defined
- ⏳ **Deployment:** Will deploy to Render during your development

### **Backend Deployment Timeline:**
The backend will be deployed **anytime during your Weeks 1-5**. Don't worry about when - the Coordinator will notify you and provide the production URL when ready.

### **Your Development Approach:**
```
Phase 1 (Weeks 1-5): Build with MOCK DATA
Phase 2 (Week 6): Switch to REAL BACKEND
```

This means you can start building TODAY without waiting! 🚀

---

## 📋 VERIFIED API STRUCTURE

The Coordinator has verified these endpoints. Build your API client based on this structure:

### **Authentication (`/auth`)**
```typescript
POST /auth/login
  Body: { role: "Voter" | "Candidate" }
  Response: { user: User, token: string }
```

### **Social Features (`/social`)**
```typescript
// Users
GET  /social/users?role=&governorate=
POST /social/posts
POST /social/reels
GET  /social/events?governorate=
POST /social/events
GET  /social/debates?governorate=
POST /social/follow
POST /social/like
GET  /social/articles?governorate=
```

### **Civic Dashboard (`/civic`)**
```typescript
GET  /civic/stats/dashboard
GET  /civic/stats/participation
GET  /civic/governorates/:slug
GET  /civic/parties/:id
POST /civic/reports/integrity
```

### **Candidate Portal (`/portal/candidates`)**
```typescript
GET    /portal/candidates
GET    /portal/candidates/stats
POST   /portal/candidates
POST   /portal/candidates/bulk
PUT    /portal/candidates/:id/status
DELETE /portal/candidates/:id
POST   /portal/candidates/send-invitations
```

### **Health Check**
```typescript
GET /health
```

**Note:** The Coordinator will update you if any endpoints change!

---

## 🏗️ PROJECT STRUCTURE (Create This)

```
iraq-election-frontend/
├── src/
│   ├── app/
│   │   ├── [locale]/              # i18n routing
│   │   │   ├── (auth)/
│   │   │   │   ├── login/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── layout.tsx
│   │   │   ├── (main)/
│   │   │   │   ├── page.tsx       # Landing page
│   │   │   │   ├── feed/          # Social feed
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── candidates/    # Candidate directory
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [id]/
│   │   │   │   │       └── page.tsx
│   │   │   │   ├── events/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── debates/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── layout.tsx
│   │   │   ├── (civic)/
│   │   │   │   ├── stats/
│   │   │   │   ├── governorates/
│   │   │   │   └── parties/
│   │   │   ├── (portal)/
│   │   │   │   └── candidates/
│   │   │   └── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                    # Shadcn components
│   │   ├── social/
│   │   │   ├── PostCard.tsx
│   │   │   ├── PostComposer.tsx
│   │   │   ├── EventCard.tsx
│   │   │   └── DebateCard.tsx
│   │   ├── candidates/
│   │   │   ├── CandidateCard.tsx
│   │   │   └── CandidateProfile.tsx
│   │   └── layout/
│   │       ├── Header.tsx
│   │       ├── Sidebar.tsx
│   │       └── Footer.tsx
│   ├── lib/
│   │   ├── api.ts                 # API client
│   │   ├── mockApi.ts             # Mock data (Phase 1)
│   │   ├── constants.ts           # Iraqi governorates
│   │   └── utils.ts
│   ├── stores/
│   │   ├── authStore.ts
│   │   └── socialStore.ts
│   ├── types/
│   │   └── api.ts                 # Match backend types
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── usePosts.ts
│   │   └── useCandidates.ts
│   └── messages/                  # i18n translations
│       ├── ar.json                # Arabic
│       ├── en.json                # English
│       └── ku.json                # Kurdish (optional)
├── public/
│   ├── icons/
│   └── images/
├── .env.local
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## 🎯 6-WEEK DEVELOPMENT PLAN

### **WEEK 1: Foundation & Setup** 🏗️

**Goals:**
- ✅ Next.js project initialized
- ✅ UI components library ready
- ✅ i18n configured with Arabic RTL
- ✅ Basic routing structure

**Tasks:**
1. Create Next.js 14 project with TypeScript
2. Install dependencies:
   ```bash
   npm install axios zustand swr react-hook-form zod next-intl sonner
   npx shadcn-ui@latest init
   ```
3. Configure Tailwind for RTL support
4. Setup next-intl for Arabic/English/Kurdish
5. Create basic layout components (Header, Footer, Sidebar)
6. Install Shadcn UI components (Button, Card, Input, etc.)
7. Setup mock data structures

**Deliverables:**
- Project runs: `npm run dev`
- Arabic RTL works correctly
- Layout components render
- Navigation works

**Report to Coordinator:** "Week 1 complete - Foundation ready"

---

### **WEEK 2: Authentication & User System** 🔐

**Goals:**
- ✅ Login/Register pages built
- ✅ Auth state management
- ✅ Protected routes
- ✅ User profile dropdown

**Tasks:**
1. Build login page with form validation
2. Create auth store (Zustand):
   ```typescript
   interface AuthState {
     user: User | null;
     token: string | null;
     login: (role: UserRole) => Promise<void>;
     logout: () => void;
   }
   ```
3. Implement protected route middleware
4. Create user profile dropdown component
5. Build role selection (Voter/Candidate)
6. Add error handling and loading states
7. Use mock authentication (returns fake token)

**Deliverables:**
- Can "log in" as Voter or Candidate
- Protected pages redirect to login
- User info displays in header
- Can log out

**Report to Coordinator:** "Week 2 complete - Authentication UI ready"

---

### **WEEK 3: Social Feed & Posts** 📱

**Goals:**
- ✅ Social feed page functional
- ✅ Post creation works
- ✅ Like/Comment UI
- ✅ Infinite scroll

**Tasks:**
1. Build social feed page (`/[locale]/feed`)
2. Create PostCard component:
   - User avatar and name
   - Post content
   - Like button with count
   - Comment button
   - Share button
   - Timestamp
3. Build PostComposer component:
   - Text input with validation
   - Character counter (500 max)
   - Submit button
   - Preview mode
4. Implement infinite scroll with SWR
5. Add governorate filter dropdown
6. Create mock posts data (10-20 sample posts)
7. Add like functionality (optimistic updates)

**Deliverables:**
- Feed page displays mock posts
- Can create new posts (saves to local state)
- Like button works
- Responsive on mobile

**Report to Coordinator:** "Week 3 complete - Social feed functional"

---

### **WEEK 4: Candidate Features** 👥

**Goals:**
- ✅ Candidate directory page
- ✅ Candidate profile pages
- ✅ Search and filters
- ✅ Follow system

**Tasks:**
1. Build candidate directory page (`/[locale]/candidates`)
2. Create CandidateCard component:
   - Avatar, name, party
   - Verified badge
   - Governorate
   - Follow button
   - Quick stats
3. Implement search bar (filter by name)
4. Add filter dropdowns:
   - By governorate
   - By party
   - By verification status
5. Build candidate profile page (`/[locale]/candidates/[id]`):
   - Full profile header
   - Campaign promises
   - Timeline of posts
   - Contact section
6. Implement follow/unfollow functionality (local state)
7. Create mock candidate data (20+ candidates)

**Deliverables:**
- Can browse candidates
- Search and filters work
- Profile pages display correctly
- Follow button works

**Report to Coordinator:** "Week 4 complete - Candidate features done"

---

### **WEEK 5: Events, Debates & Civic Dashboard** 📊

**Goals:**
- ✅ Events page with calendar
- ✅ Debates listing
- ✅ Civic dashboard with statistics
- ✅ Governorate pages

**Tasks:**
1. Build events page (`/[locale]/events`):
   - List view of upcoming events
   - EventCard component
   - RSVP button
2. Build debates page (`/[locale]/debates`):
   - Upcoming/Past tabs
   - DebateCard with participants
   - Watch live button (placeholder)
3. Build civic stats dashboard (`/[locale]/civic/stats`):
   - Stats cards (total voters, turnout, etc.)
   - Participation chart (Recharts)
   - Governorate breakdown
4. Build governorate pages (`/[locale]/civic/governorates/[slug]`):
   - Governorate info
   - Local statistics
   - Candidates from governorate
5. Add party pages (`/[locale]/civic/parties/[id]`)
6. Create mock data for events, debates, stats

**Deliverables:**
- Events page shows upcoming events
- Debates page functional
- Stats dashboard displays charts
- All pages mobile responsive

**Report to Coordinator:** "Week 5 complete - Public features done"

---

### **WEEK 6: Backend Integration & Polish** 🚀

**Goals:**
- ✅ Switch from mock to real API
- ✅ Real authentication working
- ✅ All data flows connected
- ✅ Production ready

**Tasks:**
1. **WAIT FOR COORDINATOR** to provide production backend URL
2. Update API client to use real URL:
   ```typescript
   const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://backend.onrender.com";
   ```
3. Switch from mock API to real API:
   - Test all endpoints
   - Fix any integration issues
   - Handle real error responses
4. Test real authentication flow
5. Verify data persistence
6. Add loading states everywhere
7. Add error boundaries
8. Optimize performance:
   - Image optimization
   - Code splitting
   - Lazy loading
9. Mobile responsiveness final check
10. Accessibility audit (WCAG 2.1)
11. SEO optimization:
    - Meta tags
    - Open Graph
    - Structured data

**Deliverables:**
- Real API integration working
- Authentication fully functional
- All features tested with real data
- Production deployment ready

**Report to Coordinator:** "Week 6 complete - READY FOR LAUNCH! 🎉"

---

## 🎨 DESIGN SPECIFICATIONS

### **Color Palette (Iraqi Flag Colors):**
```css
/* Primary Colors */
--red: #CE1126;       /* Iraqi red */
--white: #FFFFFF;
--black: #000000;
--green: #007A3D;     /* Iraqi green */

/* UI Colors */
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-300: #D1D5DB;
--gray-500: #6B7280;
--gray-700: #374151;
--gray-900: #111827;
```

### **Typography:**
```css
/* Arabic Fonts */
font-family: 'Tajawal', 'Cairo', 'Noto Sans Arabic', sans-serif;

/* English Fonts */
font-family: 'Inter', 'SF Pro Display', system-ui, sans-serif;
```

### **RTL Support (CRITICAL!):**
```css
[dir="rtl"] {
  direction: rtl;
  text-align: right;
}

[dir="rtl"] .ml-4 { /* Flip margins and padding */
  margin-left: 0;
  margin-right: 1rem;
}
```

### **Responsive Breakpoints:**
```javascript
const breakpoints = {
  sm: '640px',   // Mobile
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large Desktop
  '2xl': '1536px'
};
```

---

## 💾 MOCK DATA STRATEGY (Weeks 1-5)

### **Create Mock API (`src/lib/mockApi.ts`):**

```typescript
// Mock Iraqi Governorates
export const GOVERNORATES = [
  'Baghdad', 'Basra', 'Nineveh', 'Erbil', 
  'Najaf', 'Karbala', 'Sulaymaniyah', 
  'Dhi Qar', 'Anbar', 'Diyala'
];

// Mock Users
export const mockUsers: User[] = [
  {
    id: 'user-1',
    name: 'أحمد علي الحسيني',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    role: 'Candidate',
    verified: true,
    party: 'تحالف النصر',
    governorate: 'Baghdad',
    bio: 'مرشح للبرلمان العراقي'
  },
  // ... more mock users
];

// Mock Posts
export const mockPosts: Post[] = [
  {
    id: 'post-1',
    author: mockUsers[0],
    timestamp: new Date().toISOString(),
    content: 'نعمل من أجل عراق أفضل! 🇮🇶',
    likes: 245,
    comments: 34,
    shares: 12,
    type: 'Post',
    governorates: ['Baghdad']
  },
  // ... more mock posts
];

// Mock API Functions
export const mockApi = {
  login: async (role: UserRole) => {
    await delay(1000); // Simulate network
    return {
      user: mockUsers.find(u => u.role === role),
      token: 'mock-jwt-token-123'
    };
  },
  
  getPosts: async () => {
    await delay(500);
    return mockPosts;
  },
  
  createPost: async (content: string) => {
    await delay(800);
    const newPost = {
      id: `post-${Date.now()}`,
      content,
      likes: 0,
      // ... other fields
    };
    mockPosts.unshift(newPost);
    return newPost;
  },
  
  // ... more mock functions
};
```

### **Switchable API Client (`src/lib/api.ts`):**

```typescript
import axios from 'axios';
import { mockApi } from './mockApi';

// Check if real backend is available
const USE_REAL_API = process.env.NEXT_PUBLIC_API_URL !== undefined;

export const api = {
  login: USE_REAL_API 
    ? async (role) => {
        const { data } = await axios.post('/auth/login', { role });
        return data;
      }
    : mockApi.login,
    
  getPosts: USE_REAL_API
    ? async () => {
        const { data } = await axios.get('/social/posts');
        return data;
      }
    : mockApi.getPosts,
    
  // ... more functions
};
```

**This way:** 
- Weeks 1-5: Use mock data (works immediately)
- Week 6: Set `NEXT_PUBLIC_API_URL` = real backend (switches automatically)

---

## 📞 COMMUNICATION PROTOCOL

### **Daily Updates:**
At the end of each day, report:
```
Day X of Week Y complete:
✅ Tasks completed: [list]
⏳ In progress: [list]
❌ Blockers: [list]
```

### **Weekly Checkpoints:**
At end of each week, report:
```
Week X complete!
✅ Deliverables: [list]
📊 Demo: [what you can show]
🔄 Next week focus: [brief summary]
```

### **Questions/Issues:**
Whenever you need help:
```
Question for Coordinator:
Category: [API | Design | Technical | Other]
Question: [clear question]
Context: [why you're asking]
```

### **Backend Updates:**
The Coordinator will notify you:
```
Backend Update:
Type: [Deployment | API Change | Bug Fix]
Action Required: [what you need to do]
Timeline: [when to implement]
```

---

## 🚨 IMPORTANT RULES

### **✅ DO:**
- Build features incrementally
- Test on mobile frequently
- Use TypeScript strictly
- Follow Arabic RTL best practices
- Report progress daily
- Ask Coordinator when unclear
- Use mock data for Weeks 1-5
- Keep code clean and documented

### **❌ DON'T:**
- Try to deploy backend yourself
- Contact backend agent directly (go through Coordinator)
- Skip mobile responsive testing
- Ignore accessibility
- Hardcode backend URLs (use env variables)
- Deploy to production without Coordinator approval
- Make breaking changes without notification

---

## 🎯 SUCCESS CRITERIA

### **Each Week:**
- All tasks completed
- Deliverables working
- Code committed to GitHub
- Progress reported to Coordinator

### **Final Product:**
- ✅ All 7 weeks of features working
- ✅ Real backend integration complete
- ✅ Mobile responsive
- ✅ Arabic RTL functional
- ✅ Accessibility compliant
- ✅ Performance optimized
- ✅ Ready for production

---

## 🚀 YOUR IMMEDIATE NEXT STEPS

### **RIGHT NOW:**

1. **Confirm Understanding:**
   Report to Coordinator:
   ```
   Frontend Agent ready!
   ✅ Mission understood
   ✅ 6-week plan clear
   ✅ Mock data strategy understood
   ✅ Communication protocol clear
   
   Starting Week 1: Foundation & Setup
   ```

2. **Setup Development Environment:**
   ```bash
   # Create Next.js project
   npx create-next-app@latest iraq-election-frontend \
     --typescript \
     --tailwind \
     --app \
     --src-dir
   
   cd iraq-election-frontend
   
   # Install dependencies
   npm install axios zustand swr react-hook-form zod next-intl sonner
   
   # Install Shadcn UI
   npx shadcn-ui@latest init
   
   # Start development
   npm run dev
   ```

3. **Begin Week 1 Tasks:**
   - Configure Tailwind for RTL
   - Setup next-intl
   - Create layout components
   - Test Arabic RTL rendering

---

## 📋 QUICK REFERENCE

### **Key Files to Create:**
- `src/lib/api.ts` - API client
- `src/lib/mockApi.ts` - Mock data
- `src/stores/authStore.ts` - Auth state
- `src/types/api.ts` - TypeScript types
- `src/lib/constants.ts` - Iraqi governorates

### **Environment Variables:**
```bash
# .env.local (Week 1-5)
NEXT_PUBLIC_API_URL=  # Empty = use mock data

# .env.local (Week 6)
NEXT_PUBLIC_API_URL=https://backend.onrender.com  # Real backend
```

### **Coordinator Contact:**
- Daily updates: End of each day
- Weekly reports: End of each week
- Questions: Anytime
- Blockers: Immediately

---

## 🎊 LET'S BUILD SOMETHING AMAZING!

You have:
- ✅ Clear 6-week roadmap
- ✅ All technical specs
- ✅ Mock data strategy
- ✅ Coordinator support
- ✅ Design guidelines

**Everything you need is ready!**

**Report to Coordinator that you're starting, then begin Week 1!** 🚀🇮🇶

---

## 📌 REMEMBER:

**Your Job:** Build amazing frontend
**Coordinator's Job:** Handle everything else
**Backend:** Will deploy during your work (don't worry about it)
**Timeline:** 6 weeks to production
**Support:** Coordinator available anytime

**Let's make this the best election platform Iraq has ever seen!** 🏆
