import axios from 'axios';
import { User, Post, Event, Debate, Article, DashboardStats, GovernorateParticipation, Party, ViolationReport } from '../types';

// Mock data imports
import { mockUsers } from '../mocks/users';
import { mockPosts } from '../mocks/posts';
import { mockEvents } from '../mocks/events';
import { mockDebates } from '../mocks/debates';
import { mockDashboardStats, mockGovernorateParticipation } from '../mocks/stats';

// Check if we should use mock data (no API URL configured)
const USE_MOCK_DATA = !import.meta.env.VITE_API_URL;
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

// Create axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Simulate API delay for realistic UX
function simulateDelay(ms: number = 500): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ===== AUTHENTICATION API =====
export const authApi = {
  async login(role: 'Voter' | 'Candidate'): Promise<{ user: User; token: string }> {
    if (USE_MOCK_DATA) {
      await simulateDelay();
      const user = mockUsers.find(u => u.role === role) || mockUsers[0];
      return {
        user,
        token: 'mock_token_' + Date.now()
      };
    }
    const { data } = await axiosInstance.post('/auth/login', { role });
    return data;
  },
};

// ===== SOCIAL API =====
export const socialApi = {
  // Get users with optional filters
  async getUsers(filters?: { role?: string; governorate?: string }): Promise<User[]> {
    if (USE_MOCK_DATA) {
      await simulateDelay();
      return mockUsers.filter(user =>
        (!filters?.role || user.role === filters.role) &&
        (!filters?.governorate || user.governorate === filters.governorate)
      );
    }
    const { data } = await axiosInstance.get('/social/users', { params: filters });
    return data;
  },

  // Get user by ID
  async getUserById(id: string): Promise<User> {
    if (USE_MOCK_DATA) {
      await simulateDelay();
      const user = mockUsers.find(u => u.id === id);
      if (!user) throw new Error('User not found');
      return user;
    }
    const { data } = await axiosInstance.get(`/social/users/${id}`);
    return data;
  },

  // Get posts with optional filters
  async getPosts(filters?: { type?: 'Post' | 'Reel'; governorate?: string; authorId?: string }): Promise<Post[]> {
    if (USE_MOCK_DATA) {
      await simulateDelay(300);
      let filteredPosts = mockPosts;
      
      if (filters?.type) {
        filteredPosts = filteredPosts.filter(post => post.type === filters.type);
      }
      if (filters?.governorate) {
        filteredPosts = filteredPosts.filter(post => post.governorate === filters.governorate);
      }
      if (filters?.authorId) {
        filteredPosts = filteredPosts.filter(post => post.authorId === filters.authorId);
      }

      // Attach author info
      return filteredPosts.map(post => ({
        ...post,
        author: mockUsers.find(u => u.id === post.authorId)
      }));
    }
    const { data } = await axiosInstance.get('/social/posts', { params: filters });
    return data;
  },

  // Create new post
  async createPost(content: string): Promise<Post> {
    if (USE_MOCK_DATA) {
      await simulateDelay();
      const newPost: Post = {
        id: 'post_' + Date.now(),
        authorId: mockUsers[0].id,
        author: mockUsers[0],
        content,
        type: 'Post',
        likes: 0,
        comments: 0,
        shares: 0,
        isLiked: false,
        createdAt: new Date().toISOString(),
        governorate: mockUsers[0].governorate
      };
      return newPost;
    }
    const { data } = await axiosInstance.post('/social/posts', { content });
    return data;
  },

  // Get events
  async getEvents(governorate?: string): Promise<Event[]> {
    if (USE_MOCK_DATA) {
      await simulateDelay();
      let filteredEvents = mockEvents;
      if (governorate) {
        filteredEvents = filteredEvents.filter(event => event.governorate === governorate);
      }
      // Attach organizer info
      return filteredEvents.map(event => ({
        ...event,
        organizer: mockUsers.find(u => u.id === event.organizerId)
      }));
    }
    const { data } = await axiosInstance.get('/social/events', { params: { governorate } });
    return data;
  },

  // Create event
  async createEvent(event: Omit<Event, 'id' | 'organizerId' | 'attendeesCount'>): Promise<Event> {
    if (USE_MOCK_DATA) {
      await simulateDelay();
      const newEvent: Event = {
        ...event,
        id: 'evt_' + Date.now(),
        organizerId: mockUsers[0].id,
        attendeesCount: 0,
        isAttending: false
      };
      return newEvent;
    }
    const { data } = await axiosInstance.post('/social/events', event);
    return data;
  },

  // Get debates
  async getDebates(filters?: { governorate?: string; participantIds?: string }): Promise<Debate[]> {
    if (USE_MOCK_DATA) {
      await simulateDelay();
      let filteredDebates = mockDebates;
      if (filters?.governorate) {
        filteredDebates = filteredDebates.filter(debate => debate.governorate === filters.governorate);
      }
      // Attach participants info
      return filteredDebates.map(debate => ({
        ...debate,
        participants: debate.participantIds.map(id => mockUsers.find(u => u.id === id)).filter(Boolean) as User[]
      }));
    }
    const { data } = await axiosInstance.get('/social/debates', { params: filters });
    return data;
  },

  // Get articles
  async getArticles(governorate?: string): Promise<Article[]> {
    if (USE_MOCK_DATA) {
      await simulateDelay();
      // For now, return empty array (will be populated in Week 3)
      return [];
    }
    const { data } = await axiosInstance.get('/social/articles', { params: { governorate } });
    return data;
  },

  // Follow user
  async followUser(candidateId: string): Promise<{ success: boolean }> {
    if (USE_MOCK_DATA) {
      await simulateDelay(200);
      return { success: true };
    }
    const { data } = await axiosInstance.post('/social/follow', { candidateId });
    return data;
  },

  // Like post
  async likePost(postId: string): Promise<{ success: boolean }> {
    if (USE_MOCK_DATA) {
      await simulateDelay(200);
      return { success: true };
    }
    const { data } = await axiosInstance.post('/social/like', { postId });
    return data;
  },
};

// ===== CIVIC API =====
export const civicApi = {
  // Get dashboard stats
  async getDashboardStats(): Promise<DashboardStats> {
    if (USE_MOCK_DATA) {
      await simulateDelay();
      return mockDashboardStats;
    }
    const { data } = await axiosInstance.get('/civic/stats/dashboard');
    return data;
  },

  // Get participation by governorate
  async getGovernorateParticipation(): Promise<GovernorateParticipation[]> {
    if (USE_MOCK_DATA) {
      await simulateDelay();
      return mockGovernorateParticipation;
    }
    const { data } = await axiosInstance.get('/civic/stats/participation');
    return data;
  },

  // Get governorate details
  async getGovernorateDetails(slug: string): Promise<any> {
    if (USE_MOCK_DATA) {
      await simulateDelay();
      // Mock governorate data (will be expanded in Week 4)
      return {
        governorate: {
          id: slug,
          nameEn: slug.charAt(0).toUpperCase() + slug.slice(1),
          nameAr: 'محافظة ' + slug,
          slug,
          population: 3000000,
          area: 5000
        },
        candidates: mockUsers.filter(u => u.role === 'Candidate').slice(0, 5),
        news: [],
        localStats: {
          registeredVoters: 1500000,
          pollingStations: 250
        }
      };
    }
    const { data } = await axiosInstance.get(`/civic/governorates/${slug}`);
    return data;
  },

  // Get parties
  async getParties(): Promise<Party[]> {
    if (USE_MOCK_DATA) {
      await simulateDelay();
      // Mock party data (will be expanded in Week 4)
      return [
        {
          id: 'party_001',
          name: 'Democratic Alliance',
          nameAr: 'التحالف الديمقراطي',
          logoUrl: 'https://via.placeholder.com/100',
          leader: 'أحمد محمود',
          founded: 2005,
          description: 'A progressive democratic party',
          descriptionAr: 'حزب ديمقراطي تقدمي',
          candidatesCount: 245
        }
      ];
    }
    const { data } = await axiosInstance.get('/civic/parties');
    return data;
  },

  // Submit violation report
  async submitViolationReport(report: Omit<ViolationReport, 'id' | 'trackingId' | 'status' | 'createdAt'>): Promise<{ success: boolean; trackingId: string }> {
    if (USE_MOCK_DATA) {
      await simulateDelay();
      return {
        success: true,
        trackingId: 'TRK' + Date.now().toString().slice(-8)
      };
    }
    const { data } = await axiosInstance.post('/civic/reports/integrity', report);
    return data;
  },
};

// Export configured mode for components to check
export const isUsingMockData = USE_MOCK_DATA;
