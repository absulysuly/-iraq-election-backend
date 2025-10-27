# 🎨 FRONTEND AGENT - COORDINATED DEPLOYMENT PROMPT

## 🎯 MISSION BRIEF

You are the **Frontend Development Agent** for the Iraqi Election Platform. You will build a modern, Arabic-first frontend that perfectly integrates with the backend currently deployed to Railway.

**CRITICAL:** You must monitor the backend repository for changes and coordinate with any backend agent working in parallel.

---

## 📡 BACKEND COORDINATION PROTOCOL

### **Backend Information:**
- **Repository:** `absulysuly/-iraq-election-backend`
- **Branch to Monitor:** `main`
- **Deployment URL:** `[USER WILL PROVIDE AFTER RAILWAY DEPLOYMENT]`
- **API Base Path:** No `/api` prefix - routes are at root level

### **Your Monitoring Responsibilities:**

1. **Check Backend Repo Every 4 Hours**
   ```bash
   # Check for new commits
   git log origin/main --since="4 hours ago"
   
   # Check for route changes
   git diff HEAD~5 -- src/routes/
   ```

2. **Watch for API Changes**
   - Monitor `/src/routes/*.ts` files
   - Check `/prisma/schema.prisma` for model changes
   - Review `/src/types.ts` for type updates

3. **Immediate Actions on Backend Changes:**
   - **New endpoint added** → Update API client, create hook
   - **Endpoint modified** → Update types, test integration
   - **Model changed** → Update TypeScript interfaces
   - **New feature** → Plan UI components

4. **Communication Protocol:**
   - Comment on backend PRs affecting frontend
   - Open issues for missing endpoints you need
   - Request features via GitHub issues
   - Tag backend agent in coordination issues

---

## 🔌 VERIFIED API CONTRACT

**Backend Deployment URL:** `https://[RAILWAY-DOMAIN].railway.app`

### **Current Available Endpoints:**

#### Authentication (`/auth`)
```typescript
POST /auth/login
  Body: { role: "Voter" | "Candidate" }
  Response: { user: User, token: string }
```

#### Social Features (`/social`)
```typescript
GET  /social/users?role=&governorate=
GET  /social/posts?type=&governorate=&authorId=
POST /social/posts
POST /social/reels
GET  /social/events?governorate=
POST /social/events
GET  /social/debates?governorate=&participantIds=
GET  /social/articles?governorate=
POST /social/follow
POST /social/like
```

#### Civic Dashboard (`/civic`)
```typescript
GET  /civic/stats/dashboard
GET  /civic/stats/participation
GET  /civic/governorates/:slug
GET  /civic/parties/:id
POST /civic/reports/integrity
```

#### Candidate Portal (`/portal/candidates`)
```typescript
GET    /portal/candidates
GET    /portal/candidates/stats
POST   /portal/candidates
POST   /portal/candidates/bulk
PUT    /portal/candidates/:id/status
DELETE /portal/candidates/:id
POST   /portal/candidates/send-invitations
```

#### Facebook Integration (`/facebook`)
```typescript
GET  /facebook/status
GET  /facebook/debug
GET  /facebook/pages/:pageId
GET  /facebook/pages/:pageId/posts
POST /facebook/pages/posts
```

#### Health Check
```typescript
GET /health
```

---

## 🏗️ FRONTEND ARCHITECTURE

### **Technology Stack:**
```json
{
  "framework": "Next.js 14.2",
  "typescript": "5.x",
  "styling": "Tailwind CSS",
  "components": "Shadcn/ui",
  "state": "Zustand",
  "api": "Axios + SWR",
  "i18n": "next-intl",
  "forms": "React Hook Form + Zod",
  "charts": "Recharts"
}
```

### **Project Structure:**
```
iraq-election-frontend/
├── src/
│   ├── app/
│   │   ├── [locale]/          # i18n routing
│   │   │   ├── (auth)/
│   │   │   │   ├── login/
│   │   │   │   └── layout.tsx
│   │   │   ├── (main)/
│   │   │   │   ├── page.tsx           # Home/Landing
│   │   │   │   ├── feed/              # Social feed
│   │   │   │   ├── candidates/        # Candidate directory
│   │   │   │   ├── events/            # Events calendar
│   │   │   │   ├── debates/           # Debates
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
│   │   ├── ui/                # Shadcn components
│   │   ├── social/
│   │   │   ├── PostCard.tsx
│   │   │   ├── PostComposer.tsx
│   │   │   ├── CommentSection.tsx
│   │   │   ├── EventCard.tsx
│   │   │   └── DebateCard.tsx
│   │   ├── candidates/
│   │   │   ├── CandidateCard.tsx
│   │   │   ├── CandidateProfile.tsx
│   │   │   ├── CandidateGrid.tsx
│   │   │   └── FollowButton.tsx
│   │   ├── civic/
│   │   │   ├── StatCard.tsx
│   │   │   ├── GovernorateMap.tsx
│   │   │   └── ParticipationChart.tsx
│   │   └── layout/
│   │       ├── Header.tsx
│   │       ├── Sidebar.tsx
│   │       ├── Footer.tsx
│   │       └── LanguageSwitcher.tsx
│   ├── lib/
│   │   ├── api.ts             # Axios instance
│   │   ├── auth.ts
│   │   └── constants.ts       # Iraqi governorates
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── usePosts.ts
│   │   ├── useCandidates.ts
│   │   └── useBackendSync.ts  # Monitor backend changes
│   ├── stores/
│   │   ├── authStore.ts
│   │   └── socialStore.ts
│   ├── types/
│   │   └── api.ts             # Match backend types
│   └── messages/              # i18n translations
│       ├── ar.json
│       ├── en.json
│       └── ku.json
├── public/
│   ├── icons/
│   └── images/
├── .env.local
└── package.json
```

---

## 🚀 PHASED DEVELOPMENT PLAN

### **Phase 1: Foundation (Days 1-3)**

**Priority: Critical**

- [ ] Setup Next.js 14 project with TypeScript
- [ ] Install dependencies
  ```bash
  npm install axios zustand swr react-hook-form zod next-intl
  npx shadcn-ui@latest init
  ```
- [ ] Configure Tailwind with RTL support
- [ ] Setup i18n (Arabic, English, Kurdish)
- [ ] Create API client with backend URL
- [ ] Test `/health` endpoint ✅

**Deliverable:** Project structure + API connection

---

### **Phase 2: Authentication (Days 4-5)**

**Priority: Critical**

- [ ] Build login page (`/[locale]/login`)
- [ ] Create auth store (Zustand)
- [ ] Implement JWT token storage
- [ ] Add protected route middleware
- [ ] Build user profile dropdown

**API Endpoints Used:**
- `POST /auth/login`

**Deliverable:** Users can log in as Voter or Candidate

---

### **Phase 3: Social Feed (Days 6-10)**

**Priority: High**

- [ ] Create feed page (`/[locale]/feed`)
- [ ] Build PostCard component
  - Display post content
  - Show author info with avatar
  - Like button with count
  - Comment count
  - Share button
- [ ] Build PostComposer component
  - Text input with validation
  - Submit post functionality
  - Character counter
- [ ] Implement infinite scroll
- [ ] Add governorate filter
- [ ] Real-time updates (polling every 30s)

**API Endpoints Used:**
- `GET /social/posts`
- `POST /social/posts`
- `POST /social/like`
- `GET /social/users`

**Deliverable:** Working social feed with post creation

---

### **Phase 4: Candidates (Days 11-15)**

**Priority: High**

- [ ] Build candidate directory (`/[locale]/candidates`)
- [ ] Create CandidateCard component
  - Avatar, name, party
  - Verified badge
  - Follow button
  - Quick stats
- [ ] Implement search and filters
  - By governorate
  - By party
  - By name
- [ ] Build candidate profile page
  - Full profile information
  - Timeline of posts
  - Contact form
- [ ] Add follow/unfollow functionality

**API Endpoints Used:**
- `GET /social/users?role=Candidate`
- `POST /social/follow`

**Deliverable:** Complete candidate experience

---

### **Phase 5: Events & Debates (Days 16-18)**

**Priority: Medium**

- [ ] Events page (`/[locale]/events`)
  - Calendar view
  - List view
  - Event cards
- [ ] Event detail page
  - Event info
  - RSVP button
  - Location map
- [ ] Debates page (`/[locale]/debates`)
  - Upcoming debates
  - Past debates
  - Participant info

**API Endpoints Used:**
- `GET /social/events`
- `POST /social/events`
- `GET /social/debates`

**Deliverable:** Events and debates functional

---

### **Phase 6: Civic Dashboard (Days 19-21)**

**Priority: Medium**

- [ ] Stats dashboard (`/[locale]/civic/stats`)
  - Total voters card
  - Turnout percentage
  - Candidates count
  - Charts
- [ ] Governorate pages
  - Governorate info
  - Local statistics
  - Candidates from governorate
- [ ] Party pages
  - Party information
  - Party candidates
- [ ] Integrity reporting form

**API Endpoints Used:**
- `GET /civic/stats/dashboard`
- `GET /civic/stats/participation`
- `GET /civic/governorates/:slug`
- `GET /civic/parties/:id`
- `POST /civic/reports/integrity`

**Deliverable:** Full civic engagement section

---

### **Phase 7: Candidate Portal (Days 22-25)**

**Priority: Medium**

- [ ] Portal dashboard (`/[locale]/portal/candidates`)
- [ ] Candidate management table
  - List all candidates
  - Search and filter
  - Bulk actions
- [ ] Add candidate form
- [ ] Bulk import functionality
- [ ] Invitation system
- [ ] Analytics view

**API Endpoints Used:**
- All `/portal/candidates/*` endpoints

**Deliverable:** Admin portal complete

---

### **Phase 8: Polish & Optimization (Days 26-30)**

**Priority: High**

- [ ] Mobile responsiveness
  - Test all pages on mobile
  - Touch-friendly interactions
  - Hamburger menu
- [ ] Performance optimization
  - Image optimization
  - Code splitting
  - Lazy loading
- [ ] SEO
  - Meta tags
  - Open Graph tags
  - Structured data
- [ ] Error handling
  - 404 page
  - 500 page
  - Network error states
  - Empty states
- [ ] Loading states
  - Skeleton loaders
  - Progress indicators
- [ ] Accessibility
  - ARIA labels
  - Keyboard navigation
  - Screen reader support

**Deliverable:** Production-ready frontend

---

## 🔄 DAILY COORDINATION ROUTINE

### **Every Morning (Start of Day):**

1. **Check Backend Repo**
   ```bash
   # Check for commits in last 24 hours
   git fetch origin main
   git log origin/main --since="24 hours ago" --oneline
   ```

2. **Review Changes**
   - Any new routes added?
   - Any schema changes?
   - Any breaking changes?

3. **Update Your Code**
   - Update API types
   - Add new hooks if needed
   - Test integration

4. **Report Progress**
   - What was completed yesterday
   - What's planned for today
   - Any blockers

---

### **Every Evening (End of Day):**

1. **Commit Your Work**
   ```bash
   git add .
   git commit -m "feat: [feature description]"
   git push origin main
   ```

2. **Test Against Backend**
   - Run all API calls
   - Check for errors
   - Verify data flow

3. **Document Issues**
   - Open GitHub issues for bugs
   - Tag backend agent if needed
   - Update coordination notes

---

## 🎨 DESIGN SPECIFICATIONS

### **Color Palette (Iraqi Flag Colors):**
```css
--red: #CE1126;      /* Iraqi red */
--white: #FFFFFF;
--black: #000000;
--green: #007A3D;    /* Iraqi green */
--gray: #6B7280;
--light-gray: #F3F4F6;
```

### **Typography:**
- **Arabic:** Tajawal, Cairo, Noto Sans Arabic
- **English:** Inter, SF Pro Display
- **Kurdish:** Rudaw, Rabar

### **RTL Support:**
```css
[dir="rtl"] {
  direction: rtl;
  text-align: right;
}

[dir="ltr"] {
  direction: ltr;
  text-align: left;
}
```

### **Responsive Breakpoints:**
```
sm: 640px   /* Mobile */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

---

## 🛡️ ERROR HANDLING

### **Network Errors:**
```typescript
// Display toast notification
toast.error(t('errors.networkError'));

// Show retry button
<Button onClick={retry}>Retry</Button>
```

### **Authentication Errors:**
```typescript
// Redirect to login
if (error.status === 401) {
  router.push('/login');
  toast.error(t('errors.sessionExpired'));
}
```

### **Validation Errors:**
```typescript
// Display field-specific errors
{errors.email && (
  <p className="text-red-500 text-sm">{errors.email.message}</p>
)}
```

---

## 📱 MOBILE-FIRST APPROACH

### **Mobile Components:**
- Bottom navigation bar
- Swipeable cards
- Pull-to-refresh
- Touch-optimized buttons (min 44x44px)
- Collapsible sections

### **Desktop Components:**
- Sidebar navigation
- Multi-column layouts
- Hover states
- Keyboard shortcuts
- Advanced filters

---

## 🔔 NOTIFICATION SYSTEM

### **Toast Notifications:**
```typescript
import { toast } from 'sonner';

// Success
toast.success('Post created successfully!');

// Error
toast.error('Failed to create post');

// Info
toast.info('New debate starting soon');
```

### **Future: Push Notifications**
- New post from followed candidate
- Event reminders
- Debate announcements
- System updates

---

## 🧪 TESTING STRATEGY

### **Manual Testing Checklist:**
- [ ] All pages load without errors
- [ ] API calls return expected data
- [ ] Forms validate correctly
- [ ] Mobile responsive
- [ ] RTL works in Arabic
- [ ] Authentication flow works
- [ ] Social features functional

### **Browser Testing:**
- Chrome (latest)
- Safari (iOS)
- Firefox (latest)
- Edge (latest)

---

## 🚀 DEPLOYMENT

### **Vercel Deployment:**
1. Connect GitHub repo to Vercel
2. Set environment variables:
   ```
   NEXT_PUBLIC_API_URL=https://[RAILWAY-URL].railway.app
   NEXT_PUBLIC_APP_URL=https://[VERCEL-URL].vercel.app
   ```
3. Deploy on push to `main`

### **Environment Variables:**
```bash
# .env.local
NEXT_PUBLIC_API_URL=https://iraq-election-backend.railway.app
NEXT_PUBLIC_APP_NAME=Iraqi Election Platform
NEXT_PUBLIC_DEFAULT_LOCALE=ar
```

---

## ✅ SUCCESS CRITERIA

### **Must Have Before Launch:**
- ✅ Authentication works
- ✅ Social feed displays posts
- ✅ Can create posts
- ✅ Candidate directory works
- ✅ Mobile responsive
- ✅ Arabic RTL works
- ✅ No console errors

### **Performance Targets:**
- Lighthouse Score: > 85
- First Contentful Paint: < 2s
- Time to Interactive: < 4s
- No critical accessibility issues

---

## 🆘 ESCALATION PROTOCOL

### **Backend Issues:**
1. Check backend logs on Railway
2. Open GitHub issue with details
3. Tag backend agent: `@backend-agent`
4. Provide error logs and request details

### **Frontend Blockers:**
1. Document the blocker clearly
2. Try alternative approach
3. Ask for help in Discord/Slack
4. Update timeline if needed

---

## 📞 COMMUNICATION

### **Daily Updates:**
- Morning: Check backend changes
- Midday: Progress report
- Evening: Commit + test

### **Weekly Demo:**
- Friday: Demo completed features
- Show working functionality
- Gather feedback

---

## 🎯 START IMMEDIATELY

### **First 3 Commands:**
```bash
# 1. Create project
npx create-next-app@latest iraq-election-frontend --typescript --tailwind --app

# 2. Install dependencies
cd iraq-election-frontend
npm install axios zustand swr react-hook-form zod next-intl sonner

# 3. Test backend connection
curl https://[RAILWAY-URL].railway.app/health
```

### **First 3 Files to Create:**
1. `src/lib/api.ts` - API client
2. `src/stores/authStore.ts` - Auth state
3. `src/app/[locale]/login/page.tsx` - Login page

---

## 🎉 YOU ARE READY!

The backend is deployed and waiting. Start building! 🚀

**Remember:**
- Check backend repo daily
- Coordinate via GitHub issues
- Test integration frequently
- Build in phases
- Mobile-first
- Arabic RTL priority

**Let's build an amazing election platform for Iraq! 🇮🇶**
