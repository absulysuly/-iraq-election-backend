# 🚀 FRONTEND DEVELOPMENT MISSION: Iraqi Election Platform

## 🎯 PRIMARY OBJECTIVE
Build a production-ready frontend for the Iraqi National Election Platform that seamlessly integrates with the backend at `absulysuly/-iraq-election-backend`.

---

## 📋 COORDINATION PROTOCOL

### **Backend Repository:**
- **REPO**: `absulysuly/-iraq-election-backend`
- **BRANCH**: `main`
- **BASE URL**: `http://localhost:4000` (dev) / `https://your-backend.railway.app` (prod)
- **COORDINATION**: Monitor backend commits for API changes

---

## 🔌 ACTUAL API CONTRACT (VERIFIED)

Based on the current backend implementation in `/workspace/src/routes/`:

### **Authentication** (`/auth`)
```typescript
POST /auth/login
  Body: { role: "Voter" | "Candidate" }
  Response: { user: User, token: string }
```

### **Social Features** (`/social`)
```typescript
// Users
GET /social/users
  Query: { role?: "Voter" | "Candidate", governorate?: string }
  Response: User[]

// Posts & Reels
GET /social/posts
  Query: { type?: "Post" | "Reel", governorate?: string, authorId?: string }
  Response: Post[]

POST /social/posts
  Body: { content: string, authorId: string, governorate?: string }
  Response: Post

POST /social/reels
  Body: { caption: string, authorId: string, mediaUrl?: string, governorate?: string }
  Response: Post

// Events
GET /social/events
  Query: { governorate?: string }
  Response: Event[]

POST /social/events
  Body: { title: string, date: string, location: string, organizerId?: string, governorate?: string }
  Response: Event

// Debates
GET /social/debates
  Query: { governorate?: string, participantIds?: string }
  Response: Debate[]

// Articles
GET /social/articles
  Query: { governorate?: string }
  Response: Article[]

// Interactions
POST /social/follow
  Body: { candidateId: string }
  Response: { success: boolean, candidateId: string }

POST /social/like
  Body: { postId: string }
  Response: { success: boolean, postId: string }
```

### **Civic Dashboard** (`/civic`)
```typescript
GET /civic/stats/dashboard
  Response: DashboardStats

GET /civic/stats/participation
  Response: GovernorateParticipation[]

GET /civic/governorates/:slug
  Params: { slug: string }
  Response: GovernorateData

GET /civic/parties/:id
  Params: { id: string }
  Response: { party: Party, candidates: Candidate[] }

POST /civic/reports/integrity
  Body: FormData { governorate, violationType, description, evidence? }
  Response: { success: boolean, trackingId: string }
```

### **Candidate Portal** (`/portal/candidates`)
```typescript
GET /portal/candidates
  Response: StoredCandidate[]

GET /portal/candidates/stats
  Response: { total: number, byStatus: Record<string, number>, ... }

POST /portal/candidates
  Body: { name, phone, province, district, party?, facebookUrl?, notes? }
  Response: StoredCandidate

POST /portal/candidates/bulk
  Body: { candidates: CandidateInput[] }
  Response: { created: StoredCandidate[], failed: any[] }

PUT /portal/candidates/:id/status
  Body: { status: "new" | "contacted" | "interested" | "not-interested" }
  Response: StoredCandidate

DELETE /portal/candidates/:id
  Response: { success: boolean }

POST /portal/candidates/send-invitations
  Body: { candidateIds: string[], message?: string }
  Response: { sent: number, failed: number }
```

### **Facebook Integration** (`/facebook`)
```typescript
GET /facebook/status
  Response: { configured: boolean, pageId?: string, pageName?: string }

GET /facebook/debug
  Response: { ... debug info ... }

GET /facebook/pages/:pageId
  Response: { page data }

GET /facebook/pages/:pageId/posts
  Response: Post[]

POST /facebook/pages/posts
  Body: { message: string, pageId?: string }
  Response: { success: boolean, postId?: string }
```

### **Health Check**
```typescript
GET /health
  Response: { status: "ok" }
```

---

## 🏗️ RECOMMENDED ARCHITECTURE

### **Technology Stack:**
- **Framework**: Next.js 14 (App Router) ✅
- **Styling**: Tailwind CSS + Shadcn/ui ✅
- **State Management**: Zustand (lightweight, perfect for this size)
- **API Client**: Axios with interceptors ✅
- **Authentication**: JWT tokens (simple bearer token)
- **i18n**: next-intl (Arabic RTL + English) ✅
- **Forms**: React Hook Form + Zod validation
- **Real-time**: Polling (start simple) → WebSocket later

### **Project Structure:**
```
frontend/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (main)/
│   │   │   ├── feed/              # Social feed
│   │   │   ├── candidates/        # Candidate directory
│   │   │   ├── events/            # Events calendar
│   │   │   ├── debates/           # Debate listing
│   │   │   └── dashboard/         # User dashboard
│   │   ├── (portal)/
│   │   │   └── candidates/        # Candidate admin portal
│   │   ├── (civic)/
│   │   │   ├── governorates/      # Governorate pages
│   │   │   ├── parties/           # Party pages
│   │   │   └── stats/             # Statistics
│   │   └── layout.tsx
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
│   │   ├── api.ts               # Axios client
│   │   ├── auth.ts              # Auth utilities
│   │   └── constants.ts         # Iraqi governorates, etc.
│   ├── stores/
│   │   ├── authStore.ts
│   │   └── socialStore.ts
│   ├── types/
│   │   └── api.ts               # Match backend types
│   └── hooks/
│       ├── useAuth.ts
│       ├── usePosts.ts
│       └── useCandidates.ts
├── public/
└── package.json
```

---

## 🎨 UI/UX REQUIREMENTS

### **Design Priorities:**
1. **RTL Support** for Arabic (critical!)
2. **Mobile-First** design
3. **Accessible** (WCAG 2.1 AA)
4. **Iraqi Theme** (flag colors: red, white, black, green)

### **Key Pages:**

#### **1. Landing Page** (`/`)
- Hero with election countdown timer
- Featured candidates carousel
- Latest election news feed
- Call-to-action buttons

#### **2. Social Feed** (`/feed`)
- Infinite scroll feed (posts + reels)
- Filter by governorate
- Create post/reel composer
- Like/Comment interactions
- Event and debate announcements

#### **3. Candidate Directory** (`/candidates`)
- Grid/List view toggle
- Search and filters (governorate, party)
- Candidate cards with follow button
- Verified badge display

#### **4. Candidate Profile** (`/candidates/[id]`)
- Profile header with stats
- Campaign promises
- Timeline of posts
- Endorsements
- Contact form

#### **5. Events** (`/events`)
- Calendar view + list view
- RSVP functionality
- Location on map
- Share event

#### **6. Debates** (`/debates`)
- Upcoming/Past debates
- Participant profiles
- Watch live (YouTube embed)
- Comment section

#### **7. Civic Dashboard** (`/civic/stats`)
- Dashboard statistics cards
- Governorate participation map
- Charts and graphs
- Export data button

#### **8. Governorate Pages** (`/civic/governorates/[slug]`)
- Governorate info
- Local candidates
- Polling stations
- Statistics

#### **9. Candidate Portal** (`/portal/candidates`)
- Admin dashboard for candidates
- Manage profile
- Create posts/events
- View analytics
- Send invitations

#### **10. User Dashboard** (`/dashboard`)
- Personal feed
- Saved posts
- Following list
- Settings

---

## 🔧 TECHNICAL IMPLEMENTATION

### **API Client Setup:**
```typescript
// lib/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirect to login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
```

### **Type Definitions:**
```typescript
// types/api.ts (match backend Prisma schema)
export type UserRole = 'Voter' | 'Candidate';
export type PostType = 'Post' | 'Reel';

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  role: UserRole;
  verified: boolean;
  party: string;
  governorate: string;
  bio?: string;
  createdAt: string;
}

export interface Post {
  id: string;
  author: User;
  timestamp: string;
  content: string;
  mediaUrl?: string;
  likes: number;
  comments: number;
  shares: number;
  isSponsored: boolean;
  type: PostType;
  governorates: string[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  organizer: User;
  governorate: string;
}

export interface Debate {
  id: string;
  title: string;
  topic: string;
  scheduledTime: string;
  isLive: boolean;
  participants: User[];
}

// ... more types matching backend schema
```

### **Authentication Hook:**
```typescript
// hooks/useAuth.ts
import { create } from 'zustand';
import api from '@/lib/api';

interface AuthState {
  user: User | null;
  token: string | null;
  login: (role: UserRole) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  
  login: async (role) => {
    const { data } = await api.post('/auth/login', { role });
    localStorage.setItem('auth_token', data.token);
    set({ user: data.user, token: data.token, isAuthenticated: true });
  },
  
  logout: () => {
    localStorage.removeItem('auth_token');
    set({ user: null, token: null, isAuthenticated: false });
  },
}));
```

### **Data Fetching Hooks:**
```typescript
// hooks/usePosts.ts
import useSWR from 'swr';
import api from '@/lib/api';

export const usePosts = (filters?: { governorate?: string; type?: PostType }) => {
  const { data, error, mutate } = useSWR(
    ['/social/posts', filters],
    async ([url, params]) => {
      const { data } = await api.get(url, { params });
      return data;
    }
  );

  return {
    posts: data || [],
    isLoading: !error && !data,
    isError: error,
    refresh: mutate,
  };
};
```

---

## 📱 MOBILE & PWA

### **Progressive Web App:**
```javascript
// public/manifest.json
{
  "name": "Iraq Election Platform",
  "short_name": "Iraq Election",
  "description": "Iraqi National Election Platform",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#ce1126",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

---

## 🌍 INTERNATIONALIZATION

### **Supported Languages:**
- **Arabic (ar)** - Default, RTL
- **English (en)** - LTR
- **Kurdish (ku)** - Optional, RTL

### **next-intl Setup:**
```typescript
// i18n.ts
export const locales = ['ar', 'en', 'ku'];
export const defaultLocale = 'ar';

// messages/ar.json
{
  "common": {
    "login": "تسجيل الدخول",
    "logout": "تسجيل الخروج",
    "candidate": "مرشح",
    "voter": "ناخب"
  },
  "social": {
    "createPost": "إنشاء منشور",
    "like": "إعجاب",
    "comment": "تعليق",
    "share": "مشاركة"
  }
}
```

---

## 🚀 DEPLOYMENT

### **Environment Variables:**
```bash
# .env.local
NEXT_PUBLIC_API_URL=https://your-backend.railway.app
NEXT_PUBLIC_APP_NAME="Iraqi Election Platform"
```

### **Vercel Deployment:**
1. Connect GitHub repo to Vercel
2. Set environment variables
3. Deploy automatically on push to `main`

### **Performance Targets:**
- Lighthouse Score: > 90
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Mobile-friendly: 100%

---

## ✅ DEVELOPMENT CHECKLIST

### **Phase 1: Foundation (Week 1)**
- [ ] Setup Next.js 14 project with TypeScript
- [ ] Install dependencies (Tailwind, Shadcn, Axios, Zustand)
- [ ] Configure i18n with Arabic RTL
- [ ] Setup API client with auth interceptors
- [ ] Create layout components (Header, Sidebar, Footer)

### **Phase 2: Authentication (Week 1)**
- [ ] Build login page
- [ ] Implement auth flow (JWT)
- [ ] Protected route middleware
- [ ] User profile dropdown

### **Phase 3: Social Features (Week 2-3)**
- [ ] Social feed page with infinite scroll
- [ ] Post composer (create post/reel)
- [ ] Like/Comment components
- [ ] Events listing and RSVP
- [ ] Debates listing

### **Phase 4: Candidates (Week 3-4)**
- [ ] Candidate directory with search/filters
- [ ] Candidate profile pages
- [ ] Follow/Unfollow functionality
- [ ] Candidate comparison tool

### **Phase 5: Civic Dashboard (Week 4)**
- [ ] Dashboard statistics page
- [ ] Governorate pages
- [ ] Party pages
- [ ] Integrity reporting form

### **Phase 6: Candidate Portal (Week 5)**
- [ ] Admin dashboard
- [ ] Profile management
- [ ] Analytics view
- [ ] Invitation system

### **Phase 7: Polish (Week 6)**
- [ ] Mobile optimization
- [ ] Performance optimization
- [ ] SEO meta tags
- [ ] Error handling
- [ ] Loading states
- [ ] Empty states

---

## 🔄 BACKEND COORDINATION

### **Daily Checks:**
1. Monitor backend repo commits
2. Check for API changes in `/src/routes/`
3. Verify new Prisma schema fields
4. Test API endpoints

### **Communication:**
- Comment on backend PRs for frontend impact
- Create issues for API inconsistencies
- Share frontend API requirements
- Coordinate breaking changes

---

## 🎯 SUCCESS CRITERIA

### **Must Have:**
- ✅ Authentication working end-to-end
- ✅ Social feed with posts/reels
- ✅ Candidate directory and profiles
- ✅ Arabic RTL support
- ✅ Mobile responsive
- ✅ API integration complete

### **Should Have:**
- ✅ Events and debates
- ✅ Civic dashboard
- ✅ Candidate portal
- ✅ Multi-language support
- ✅ PWA capabilities

### **Nice to Have:**
- ⏳ Real-time updates (WebSocket)
- ⏳ Push notifications
- ⏳ Offline support
- ⏳ Advanced analytics

---

## 🚀 START HERE

### **Immediate Actions:**
1. Create Next.js project: `npx create-next-app@latest iraq-election-frontend`
2. Install core dependencies
3. Setup API client pointing to backend
4. Test `/health` endpoint
5. Build login flow
6. Create social feed

**Backend is ready. Frontend can start NOW!** 🎉
