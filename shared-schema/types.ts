// Shared types and constants for Iraq Election Platform

// Enums
export enum UserRole {
  Voter = 'Voter',
  Candidate = 'Candidate',
}

export enum PostType {
  Post = 'Post',
  Reel = 'Reel',
}

// Export PostType values as constants for easier use
export const POST_TYPES = PostType;

// Iraqi Governorates
export const GOVERNORATES = [
  'Baghdad',
  'Basra',
  'Nineveh',
  'Erbil',
  'Sulaymaniyah',
  'Dohuk',
  'Anbar',
  'Diyala',
  'Kirkuk',
  'Saladin',
  'Najaf',
  'Karbala',
  'Wasit',
  'Babil',
  'Maysan',
  'Dhi Qar',
  'Al-Qādisiyyah',
  'Muthanna',
] as const;

export type GovernorateId = typeof GOVERNORATES[number];

// Type definitions matching Prisma models with API flexibility
export interface Governorate {
  id: string;
  name: string;
  enName: string;
  slug: string;
  path?: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  role: UserRole | string;  // Allow string literals for flexibility
  verified: boolean;
  party: string;
  governorate?: string;  // Optional for simplified API responses
  governorateId: string;
  bio?: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface Post {
  id: string;
  author?: User;  // Optional populated relation for API responses
  authorId: string;
  timestamp: Date | string;  // Allow both Date objects and ISO strings
  content: string;
  mediaUrl?: string | null;
  likes: number;
  comments: number;
  shares: number;
  isSponsored: boolean;
  type: PostType | string;  // Allow string literals like 'Post' or 'Reel'
  governorates: string[];
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface Event {
  id: string;
  title: string;
  date: Date | string;
  location: string;
  organizer?: User;  // Optional populated relation
  organizerId: string;
  governorate?: string;  // Optional for simplified views
  governorateId: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface Article {
  id: string;
  source: string;
  timestamp: Date | string;
  title: string;
  authorName: string;
  contentSnippet: string;
  url: string;
  governorates: string[];
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface Debate {
  id: string;
  title: string;
  topic: string;
  scheduledTime: Date | string;
  isLive: boolean;
  participants?: DebateParticipant[] | any[];  // Optional populated relation
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface DebateParticipant {
  debateId: string;
  userId: string;
  user?: User;  // Optional populated relation
}

export interface Party {
  id: string;
  name: string;
  logoUrl: string;
  leader: string;
  founded: number;
  description: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface Candidate {
  id: string;
  userId: string;
  partyId: string;
  platformSummary?: string | null;
  votes: number;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface GovernorateStatistic {
  governorateId: string;
  registeredVoters: number;
  pollingStations: number;
  createdAt: Date | string;
  updatedAt: Date | string;
}
