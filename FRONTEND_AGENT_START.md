# 🚀 FRONTEND AGENT: Iraqi Election Platform Build Guide

## 📋 YOUR MISSION
Build a complete, production-ready Iraqi election platform frontend over 6 weeks. You will work independently using mock data initially, then integrate with the deployed backend API.

## 🎯 PROJECT OVERVIEW

### What You're Building
A comprehensive Iraqi election platform with TWO main applications:

1. **Social Platform** (`hamlat-social`) - A social media interface for voters and candidates
2. **Civic Dashboard** (`hamlat-civic`) - Analytics and civic engagement tools

### Technology Stack
- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context API / Zustand
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **UI Components**: Headless UI / Radix UI
- **Icons**: Lucide React
- **Internationalization**: react-i18next (Arabic RTL + English)

## 🎨 IRAQI DESIGN SPECIFICATIONS

### Color Palette
```css
/* Primary Iraqi Colors */
--primary-red: #CE1126;      /* Iraqi flag red */
--primary-green: #007A3D;    /* Iraqi flag green */
--primary-black: #000000;    /* Iraqi flag black */
--primary-white: #FFFFFF;    /* Iraqi flag white */

/* UI Colors */
--background: #F9FAFB;       /* Light background */
--surface: #FFFFFF;          /* Cards, modals */
--text-primary: #1F2937;     /* Main text */
--text-secondary: #6B7280;   /* Secondary text */
--border: #E5E7EB;           /* Borders */
--success: #10B981;          /* Success states */
--warning: #F59E0B;          /* Warnings */
--error: #EF4444;            /* Errors */
```

### Typography
- **Arabic Font**: 'Tajawal', 'Cairo', sans-serif
- **English Font**: 'Inter', system-ui, sans-serif
- **Font Sizes**: 
  - Headings: 32px, 24px, 20px, 18px
  - Body: 16px
  - Small: 14px, 12px

### RTL (Right-to-Left) Support
- All layouts must support Arabic RTL
- Use logical properties: `start/end` instead of `left/right`
- Flip icons and layouts appropriately
- Test both Arabic and English modes

### Iraqi Cultural Elements
- Use Iraqi flag colors prominently in headers/CTAs
- Include Arabic calligraphy in logos where appropriate
- Respect cultural sensitivities (modest imagery, formal tone)
- Support Arabic numerals (٠١٢٣٤٥٦٧٨٩) option

## 📡 API INTEGRATION STRATEGY

### Phase 1: Mock Data (Weeks 1-4)
Use local mock data to build all UI without backend dependency.

**Mock Data Structure** (create in `/src/mocks/`):

```typescript
// /src/mocks/users.ts
export const mockUsers = [
  {
    id: "usr_001",
    name: "أحمد محمود",
    role: "Candidate",
    governorate: "Baghdad",
    party: "Democratic Party",
    verified: true,
    avatarUrl: "/avatars/candidate1.jpg",
    bio: "مرشح عن محافظة بغداد..."
  },
  // ... more users
];

// /src/mocks/posts.ts
export const mockPosts = [
  {
    id: "post_001",
    authorId: "usr_001",
    content: "نحن ملتزمون بخدمة شعب العراق...",
    type: "Post",
    likes: 142,
    comments: 23,
    createdAt: "2025-10-20T10:30:00Z",
    governorate: "Baghdad"
  },
  // ... more posts
];

// /src/mocks/stats.ts
export const mockDashboardStats = {
  totalRegisteredVoters: 21500000,
  expectedTurnoutPercentage: 67.5,
  turnoutChangeLastWeek: 2.3,
  approvedCandidatesCount: 3247,
  verifiedViolationsCount: 12,
  newViolationsChangeLastWeek: -3,
  greenCampaignImpact: {
    treesSaved: 45230,
    paperPostersSaved: 1250000,
    co2EmissionsReducedKg: 89400
  },
  candidateDistribution: {
    men: { count: 2598, percentage: 80 },
    women: { count: 649, percentage: 20 }
  }
};
```

**API Abstraction Layer** (create in `/src/services/api.ts`):

```typescript
// /src/services/api.ts
import axios from 'axios';

const USE_MOCK_DATA = !import.meta.env.VITE_API_URL;
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

// Mock imports
import { mockUsers } from '../mocks/users';
import { mockPosts } from '../mocks/posts';
import { mockDashboardStats } from '../mocks/stats';

export const api = {
  // Social endpoints
  async getPosts(filters?: { type?: string; governorate?: string }) {
    if (USE_MOCK_DATA) {
      await simulateDelay();
      return mockPosts.filter(post => 
        (!filters?.type || post.type === filters.type) &&
        (!filters?.governorate || post.governorate === filters.governorate)
      );
    }
    const { data } = await axios.get(`${API_BASE_URL}/social/posts`, { params: filters });
    return data;
  },

  async getUsers(filters?: { role?: string; governorate?: string }) {
    if (USE_MOCK_DATA) {
      await simulateDelay();
      return mockUsers.filter(user =>
        (!filters?.role || user.role === filters.role) &&
        (!filters?.governorate || user.governorate === filters.governorate)
      );
    }
    const { data } = await axios.get(`${API_BASE_URL}/social/users`, { params: filters });
    return data;
  },

  // Civic endpoints
  async getDashboardStats() {
    if (USE_MOCK_DATA) {
      await simulateDelay();
      return mockDashboardStats;
    }
    const { data } = await axios.get(`${API_BASE_URL}/civic/stats/dashboard`);
    return data;
  },

  // ... more endpoints
};

function simulateDelay(ms = 300) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```

### Phase 2: Backend Integration (Week 5)
- Receive backend API URL from coordinator
- Set `VITE_API_URL` environment variable
- Test all endpoints with real data
- Handle authentication tokens

## 📅 6-WEEK BUILD ROADMAP

### **WEEK 1: Project Foundation & Setup**
**Goal**: Complete project structure, routing, and basic UI

#### Day 1-2: Project Initialization
- [ ] Create Vite + React + TypeScript project
  ```bash
  npm create vite@latest hamlat-platform -- --template react-ts
  cd hamlat-platform
  npm install
  ```
- [ ] Install dependencies:
  ```bash
  npm install react-router-dom axios zustand react-i18next
  npm install @headlessui/react lucide-react clsx
  npm install -D tailwindcss postcss autoprefixer
  npm install -D @types/node
  npx tailwindcss init -p
  ```
- [ ] Configure Tailwind with RTL support
- [ ] Setup project structure:
  ```
  src/
  ├── apps/
  │   ├── social/          # Social platform
  │   └── civic/           # Civic dashboard
  ├── components/
  │   ├── common/          # Shared components
  │   ├── layout/          # Layout components
  │   └── ui/              # UI primitives
  ├── services/
  │   ├── api.ts           # API abstraction
  │   └── auth.ts          # Auth service
  ├── mocks/               # Mock data
  ├── hooks/               # Custom hooks
  ├── contexts/            # React contexts
  ├── i18n/                # Translations
  ├── types/               # TypeScript types
  └── utils/               # Utilities
  ```

#### Day 3-4: Routing & Navigation
- [ ] Setup React Router with two main routes:
  - `/social/*` - Social platform
  - `/civic/*` - Civic dashboard
- [ ] Create main navigation component
- [ ] Implement language switcher (AR/EN)
- [ ] Create basic layout components (Header, Sidebar, Footer)

#### Day 5-7: Mock Data & API Layer
- [ ] Create comprehensive mock data files (users, posts, events, debates, stats)
- [ ] Build API abstraction layer with mock/real mode switching
- [ ] Create TypeScript types matching backend contract
- [ ] Test API layer with mock data

**Deliverables**: 
- ✅ Running development server
- ✅ Basic routing working
- ✅ Mock data loading correctly
- ✅ RTL/LTR switching functional

---

### **WEEK 2: Social Platform Core**
**Goal**: Build main social features (feed, posts, profiles)

#### Day 1-3: Social Feed
- [ ] Create post feed component
- [ ] Implement post card with:
  - User info (avatar, name, party, verified badge)
  - Post content (text with Arabic support)
  - Like/comment/share buttons
  - Timestamp (Arabic/English)
- [ ] Add infinite scroll or pagination
- [ ] Implement post filtering (by governorate, type)
- [ ] Create "New Post" form with rich text editor

#### Day 4-5: User Profiles
- [ ] Build candidate profile page:
  - Cover photo and avatar
  - Bio and platform summary
  - Posts tab
  - Events tab
  - Statistics (followers, posts)
- [ ] Build voter profile page (simplified)
- [ ] Implement follow/unfollow functionality
- [ ] Add verified badge system

#### Day 6-7: Reels & Media
- [ ] Create reels feed (vertical scroll)
- [ ] Build reel viewer component
- [ ] Add media upload interface (UI only, mock functionality)
- [ ] Implement video player controls

**Deliverables**:
- ✅ Functional social feed
- ✅ Working profile pages
- ✅ Interactive reels interface
- ✅ Post creation working with mock data

---

### **WEEK 3: Social Platform Extended**
**Goal**: Events, debates, articles, and interactions

#### Day 1-2: Events System
- [ ] Create events list view (card grid)
- [ ] Build event detail modal/page:
  - Title, date, location, description
  - RSVP button
  - Attendee count
  - Google Maps integration (optional)
- [ ] Implement event filtering by governorate/date
- [ ] Create "Create Event" form (candidates only)

#### Day 3-4: Debates Feature
- [ ] Build debates listing page
- [ ] Create debate detail view:
  - Participants info
  - Debate topic and description
  - Live badge for ongoing debates
  - Schedule/past debates tabs
- [ ] Add debate search and filtering

#### Day 5-6: Articles & News
- [ ] Create articles feed (news-style layout)
- [ ] Build article reader component:
  - Featured image
  - Title, author, date
  - Rich text content
  - Related articles
- [ ] Implement article categories/tags
- [ ] Add bookmark functionality

#### Day 7: Interactions Polish
- [ ] Enhance like/comment systems
- [ ] Add real-time-like animations
- [ ] Implement comment threads
- [ ] Create notifications UI (bell icon with badge)

**Deliverables**:
- ✅ Events management working
- ✅ Debates system functional
- ✅ Articles displaying correctly
- ✅ All interactions working smoothly

---

### **WEEK 4: Civic Dashboard**
**Goal**: Build analytics and civic engagement tools

#### Day 1-2: Dashboard Overview
- [ ] Create main dashboard layout with widgets
- [ ] Build statistics cards:
  - Total registered voters (with trend)
  - Expected turnout percentage
  - Approved candidates count
  - Verified violations
- [ ] Add environmental impact section:
  - Trees saved
  - Paper posters saved
  - CO2 emissions reduced
- [ ] Create gender distribution chart (pie/donut chart)

#### Day 3-4: Governorate Pages
- [ ] Build governorate directory (grid/list view)
- [ ] Create detailed governorate page:
  - Local statistics
  - Candidate list with filters
  - Recent news feed
  - Polling stations map
- [ ] Add governorate comparison tool
- [ ] Implement participation heatmap (Iraq map)

#### Day 5-6: Party Information
- [ ] Create party directory page
- [ ] Build party detail page:
  - Party info (logo, leader, founded, description)
  - Candidates list
  - Platform summary
  - Historical performance
- [ ] Add party comparison feature

#### Day 7: Integrity Reporting
- [ ] Build violation reporting form:
  - Governorate selector
  - Violation type dropdown
  - Description textarea (Arabic support)
  - Evidence upload (UI only)
- [ ] Create reporting success/tracking page
- [ ] Add violation statistics dashboard

**Deliverables**:
- ✅ Complete dashboard with all widgets
- ✅ Governorate pages fully functional
- ✅ Party information system working
- ✅ Integrity reporting form operational

---

### **WEEK 5: Backend Integration & Polish**
**Goal**: Connect to real API and refine UX

#### Day 1-2: API Integration
- [ ] Receive backend URL from coordinator
- [ ] Configure environment variables
- [ ] Test all API endpoints
- [ ] Handle authentication (login/logout)
- [ ] Implement token management
- [ ] Add loading states for all API calls

#### Day 3-4: Error Handling & Edge Cases
- [ ] Add error boundaries
- [ ] Implement retry logic for failed requests
- [ ] Create user-friendly error messages (AR/EN)
- [ ] Handle empty states (no posts, no events, etc.)
- [ ] Add offline detection

#### Day 5-6: UX Polish
- [ ] Add skeleton loaders
- [ ] Implement smooth transitions/animations
- [ ] Optimize images (lazy loading)
- [ ] Add toast notifications
- [ ] Improve mobile responsiveness

#### Day 7: Accessibility & Testing
- [ ] Add ARIA labels
- [ ] Test keyboard navigation
- [ ] Check color contrast ratios
- [ ] Test with screen readers
- [ ] Manual testing on mobile devices

**Deliverables**:
- ✅ Fully integrated with backend API
- ✅ Robust error handling
- ✅ Polished user experience
- ✅ Accessibility compliant

---

### **WEEK 6: Final Testing & Deployment**
**Goal**: Production-ready deployment

#### Day 1-2: Cross-Browser Testing
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Fix browser-specific issues
- [ ] Test on various screen sizes (mobile, tablet, desktop)
- [ ] Verify Arabic RTL on all browsers

#### Day 3-4: Performance Optimization
- [ ] Run Lighthouse audit
- [ ] Optimize bundle size (code splitting)
- [ ] Implement service worker (PWA)
- [ ] Add caching strategies
- [ ] Compress images and assets

#### Day 5: Deployment Preparation
- [ ] Create production build
- [ ] Configure environment variables for production
- [ ] Setup Vercel/Netlify deployment
- [ ] Configure custom domain (if provided)
- [ ] Setup CDN for assets

#### Day 6-7: Final QA & Documentation
- [ ] Complete end-to-end testing
- [ ] Create user guide (basic docs)
- [ ] Document environment variables
- [ ] Write deployment instructions
- [ ] Prepare handoff documentation

**Deliverables**:
- ✅ Production deployment on Vercel/Netlify
- ✅ Performance score >90 on Lighthouse
- ✅ Complete documentation
- ✅ Handoff ready for maintainers

---

## 📞 COMMUNICATION PROTOCOLS

### Daily Reporting
At the END of each day, send a brief update to the coordinator:

```
📅 Daily Report - [Date]
✅ Completed: [List completed tasks]
🔄 In Progress: [Current task]
🚧 Blockers: [Any issues]
📊 Progress: [X/Y tasks done]
⏰ ETA: [On schedule / Behind X days]
```

### Weekly Milestones
Every Sunday, send detailed weekly report:

```
📊 Week X Report

✅ COMPLETED FEATURES:
- [Feature 1 with description]
- [Feature 2 with description]

🎯 NEXT WEEK GOALS:
- [Goal 1]
- [Goal 2]

📷 SCREENSHOTS:
[Link to screenshots of completed work]

⚠️ ISSUES/CONCERNS:
[Any concerns or suggestions]

📈 OVERALL PROGRESS: X% complete
```

### Requesting Help
If you encounter blockers:

```
🚨 BLOCKER ALERT

📍 Location: [Which feature/component]
❓ Issue: [Clear description]
🔍 What I've tried: [Your attempts]
💡 Possible solutions: [Your ideas]
⏰ Urgency: [High/Medium/Low]
```

### Backend Integration Request
When ready for backend (Week 5):

```
🔗 READY FOR BACKEND INTEGRATION

✅ All mock data working
✅ API layer abstraction complete
✅ Ready to test with real endpoints

📋 Needed from backend:
- API base URL
- Authentication instructions
- Any API key requirements
```

## 🎯 SUCCESS CRITERIA

Your frontend is complete when:

1. **Functionality**: All features in roadmap working
2. **Design**: Matches Iraqi design specifications
3. **Responsive**: Works on mobile, tablet, desktop
4. **RTL**: Perfect Arabic right-to-left support
5. **Performance**: Lighthouse score >85
6. **Accessibility**: WCAG 2.1 AA compliant
7. **Integration**: Successfully connected to backend API
8. **Polish**: Smooth animations, loading states, error handling
9. **Tested**: Works across all major browsers
10. **Deployed**: Live on production URL

## 📚 TECHNICAL REFERENCES

### Backend API Endpoints
Refer to `/workspace/API_CONTRACT.md` in backend repo for:
- Authentication endpoints
- Social platform endpoints
- Civic dashboard endpoints
- Request/response schemas

### TypeScript Types
Use types from `/workspace/src/types.ts`:
- User, Post, Event, Debate, Article
- DashboardStats, GovernorateData
- Candidate, Party

### Mock Data Examples
Generate realistic Iraqi data:
- **Names**: أحمد محمود، فاطمة علي، حسن الجبوري، ليلى السامرائي
- **Governorates**: Baghdad, Basra, Mosul, Erbil, Najaf, Karbala, etc.
- **Parties**: Use realistic Iraqi party names
- **Dates**: Use Iraqi time zone (GMT+3)

## 🚀 GETTING STARTED NOW

### Immediate Next Steps:

1. **Initialize Project** (30 mins)
   ```bash
   npm create vite@latest hamlat-platform -- --template react-ts
   cd hamlat-platform
   npm install
   ```

2. **Install Dependencies** (10 mins)
   ```bash
   npm install react-router-dom axios zustand react-i18next @headlessui/react lucide-react clsx tailwindcss postcss autoprefixer
   ```

3. **Setup Tailwind** (15 mins)
   - Configure `tailwind.config.js` with Iraqi colors
   - Add RTL plugin: `npm install tailwindcss-rtl`

4. **Create Project Structure** (20 mins)
   - Setup folders as outlined above
   - Create basic index files

5. **Send First Report** (5 mins)
   - Confirm setup complete
   - Share repository link
   - Confirm Week 1 start

---

## 💡 IMPORTANT NOTES

- **Work Independently**: Use mock data to avoid backend dependency
- **Iraqi Focus**: Every design decision should consider Iraqi users
- **Arabic First**: Prioritize Arabic experience (RTL, fonts, content)
- **Mobile First**: Most Iraqi users access via mobile
- **Cultural Sensitivity**: Respectful imagery and language
- **Security**: Never expose API keys in frontend code
- **Performance**: Iraqi internet can be slow - optimize aggressively

## 🎊 YOU'VE GOT THIS!

You have everything you need to build an amazing platform. Work through the roadmap day by day, communicate regularly with the coordinator, and deliver something Iraq can be proud of!

**Start now. Build confidently. Report daily. Ask when stuck.**

---

## 📞 COORDINATOR CONTACT

For all updates, questions, and reports, communicate with the **Coordinator Agent** who will:
- Track your daily progress
- Coordinate backend integration
- Resolve blockers
- Provide backend API access when ready

**Remember**: You're not alone. The coordinator is monitoring and supporting you throughout this build!

---

**LET'S BUILD SOMETHING GREAT FOR IRAQ! 🇮🇶**
