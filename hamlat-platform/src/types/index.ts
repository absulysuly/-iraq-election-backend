// User types
export type UserRole = 'Voter' | 'Candidate';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  governorate: string;
  party?: string;
  verified: boolean;
  avatarUrl?: string;
  coverUrl?: string;
  bio?: string;
  platformSummary?: string;
  followersCount?: number;
  followingCount?: number;
  postsCount?: number;
}

// Post types
export type PostType = 'Post' | 'Reel';

export interface Post {
  id: string;
  authorId: string;
  author?: User;
  content: string;
  type: PostType;
  mediaUrl?: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked?: boolean;
  createdAt: string;
  governorate?: string;
}

// Event types
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  governorate: string;
  organizerId: string;
  organizer?: User;
  attendeesCount: number;
  isAttending?: boolean;
  imageUrl?: string;
}

// Debate types
export interface Debate {
  id: string;
  title: string;
  description: string;
  topic: string;
  date: string;
  status: 'scheduled' | 'live' | 'completed';
  participantIds: string[];
  participants?: User[];
  governorate?: string;
  viewersCount?: number;
}

// Article types
export interface Article {
  id: string;
  title: string;
  content: string;
  summary: string;
  authorId: string;
  author?: User;
  featuredImage?: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
}

// Candidate types
export interface Candidate {
  id: string;
  name: string;
  party: string;
  imageUrl: string;
  verified: boolean;
  governorate: string;
  platformSummary?: string;
  votes?: number;
}

// Dashboard stats types
export interface DashboardStats {
  totalRegisteredVoters: number;
  expectedTurnoutPercentage: number;
  turnoutChangeLastWeek: number;
  approvedCandidatesCount: number;
  verifiedViolationsCount: number;
  newViolationsChangeLastWeek: number;
  greenCampaignImpact: {
    treesSaved: number;
    paperPostersSaved: number;
    co2EmissionsReducedKg: number;
  };
  candidateDistribution: {
    men: { count: number; percentage: number };
    women: { count: number; percentage: number };
  };
}

// Governorate types
export interface GovernorateParticipation {
  governorateId: string;
  governorateName: string;
  estimatedTurnout: number;
}

export interface GovernorateData {
  governorate: Governorate;
  candidates: Candidate[];
  news: Array<{
    id: number;
    title: string;
    summary: string;
    date: string;
    source?: string;
  }>;
  localStats: {
    registeredVoters: number;
    pollingStations: number;
  };
}

export interface Governorate {
  id: string;
  nameEn: string;
  nameAr: string;
  slug: string;
  population: number;
  area: number;
}

// Party types
export interface Party {
  id: string;
  name: string;
  nameAr: string;
  logoUrl: string;
  leader: string;
  founded: number;
  description: string;
  descriptionAr: string;
  candidatesCount: number;
}

// Violation report types
export interface ViolationReport {
  id?: string;
  governorate: string;
  violationType: string;
  description: string;
  evidenceUrl?: string;
  trackingId?: string;
  status?: 'pending' | 'investigating' | 'resolved';
  createdAt?: string;
}
