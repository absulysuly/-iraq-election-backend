# 🇮🇶 Iraqi Election Platform - Frontend

A comprehensive election platform for Iraq featuring social engagement and civic dashboards.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Configuration

Create a `.env` file based on `.env.example`:

```bash
# Use mock data (default)
VITE_API_URL=

# OR connect to backend API
VITE_API_URL=https://your-backend-api.com
```

## 📁 Project Structure

```
src/
├── apps/
│   ├── social/          # Social platform app
│   └── civic/           # Civic dashboard app
├── components/
│   ├── common/          # Shared components
│   ├── layout/          # Layout components (Header, Footer)
│   └── ui/              # UI primitives
├── services/
│   └── api.ts           # API abstraction layer (mock/real mode)
├── mocks/               # Mock data for development
│   ├── users.ts
│   ├── posts.ts
│   ├── events.ts
│   ├── debates.ts
│   └── stats.ts
├── hooks/               # Custom React hooks
├── contexts/            # React contexts
├── i18n/                # Internationalization (AR/EN)
├── types/               # TypeScript type definitions
└── utils/               # Utility functions
```

## 🎨 Features

### Social Platform
- User profiles (Candidates & Voters)
- Social media feed
- Reels/video content
- Campaign events
- Candidate debates
- News articles
- Follow/like/comment system

### Civic Dashboard
- Voter statistics
- Turnout predictions
- Governorate information (18 regions)
- Political party directory
- Integrity violation reporting
- Environmental impact tracking

## 🌍 Internationalization

The platform supports:
- **Arabic (RTL)** - Primary language
- **English (LTR)** - Secondary language

Switch languages using the globe icon in the header.

## 🎨 Design System

### Colors
- **Iraqi Red**: `#CE1126` (Primary actions, Iraqi flag)
- **Iraqi Green**: `#007A3D` (Success states, Iraqi flag)
- **Iraqi Black**: `#000000` (Text, Iraqi flag)
- **Iraqi White**: `#FFFFFF` (Backgrounds, Iraqi flag)

### Fonts
- **Arabic**: Tajawal, Cairo
- **English**: Inter

## 📱 Responsive Design

The platform is mobile-first and works on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)

## 🔌 API Integration

The app uses an abstraction layer that automatically switches between:
- **Mock Data** (default): For development without backend
- **Real API** (when configured): Connect to deployed backend

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State**: Zustand
- **HTTP**: Axios
- **i18n**: react-i18next
- **UI Components**: Headless UI
- **Icons**: Lucide React

## 📦 Week 1 Status - COMPLETED ✅

- ✅ Project initialized with Vite + React + TypeScript
- ✅ Tailwind CSS configured with Iraqi colors
- ✅ Project structure created
- ✅ React Router setup (Social + Civic apps)
- ✅ i18n configured (Arabic/English)
- ✅ Layout components with language switcher
- ✅ Comprehensive mock data created
- ✅ API abstraction layer built

## 📅 Upcoming (Week 2)

- Social feed component
- Post cards with interactions
- User profile pages
- Reels interface
- Post creation form

## 📝 Development Guidelines

### Adding New Features
1. Create component in appropriate `apps/` folder
2. Use TypeScript for type safety
3. Follow naming conventions (PascalCase for components)
4. Add mock data if needed
5. Test with both Arabic and English

### Styling
- Use Tailwind utility classes
- Follow Iraqi color palette
- Ensure RTL support (use `ltr:`/`rtl:` prefixes)
- Test responsiveness

### API Calls
- Always use the abstraction layer from `services/api.ts`
- Handle loading states
- Handle errors gracefully
- Show user-friendly messages

## 🤝 Contributing

This is being built by an AI frontend agent following a 6-week roadmap!

## 📄 License

Copyright © 2025 Iraqi Election Platform

---

**Built with ❤️ for Iraq 🇮🇶**
