// Shared types for Iraq Election Platform

export enum UserRole {
  Voter = 'Voter',
  Candidate = 'Candidate',
}

export enum PostType {
  Post = 'Post',
  Reel = 'Reel',
}

export interface Governorate {
  id: string;
  name: string;
  enName: string;
  slug: string;
  path?: string;
}

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  role: UserRole;
  verified: boolean;
  party: string;
  governorateId: string;
  bio?: string;
}

export interface Post {
  id: string;
  authorId: string;
  timestamp: Date;
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
  date: Date;
  location: string;
  organizerId: string;
  governorateId: string;
}

export interface Article {
  id: string;
  source: string;
  timestamp: Date;
  title: string;
  authorName: string;
  contentSnippet: string;
  url: string;
  governorates: string[];
}

export interface Debate {
  id: string;
  title: string;
  topic: string;
  scheduledTime: Date;
  isLive: boolean;
}

export interface Candidate {
  id: string;
  userId: string;
  partyId: string;
  platformSummary?: string;
  votes: number;
}

export interface Party {
  id: string;
  name: string;
  logoUrl: string;
  leader: string;
  founded: number;
  description: string;
}

// Iraq Governorates
export const GOVERNORATES: Governorate[] = [
  { id: 'baghdad', name: 'بغداد', enName: 'Baghdad', slug: 'baghdad' },
  { id: 'basra', name: 'البصرة', enName: 'Basra', slug: 'basra' },
  { id: 'mosul', name: 'الموصل', enName: 'Mosul', slug: 'mosul' },
  { id: 'erbil', name: 'أربيل', enName: 'Erbil', slug: 'erbil' },
  { id: 'sulaymaniyah', name: 'السليمانية', enName: 'Sulaymaniyah', slug: 'sulaymaniyah' },
  { id: 'najaf', name: 'النجف', enName: 'Najaf', slug: 'najaf' },
  { id: 'karbala', name: 'كربلاء', enName: 'Karbala', slug: 'karbala' },
  { id: 'kirkuk', name: 'كركوك', enName: 'Kirkuk', slug: 'kirkuk' },
  { id: 'diyala', name: 'ديالى', enName: 'Diyala', slug: 'diyala' },
  { id: 'anbar', name: 'الأنبار', enName: 'Anbar', slug: 'anbar' },
  { id: 'duhok', name: 'دهوك', enName: 'Duhok', slug: 'duhok' },
  { id: 'babylon', name: 'بابل', enName: 'Babylon', slug: 'babylon' },
  { id: 'wasit', name: 'واسط', enName: 'Wasit', slug: 'wasit' },
  { id: 'saladin', name: 'صلاح الدين', enName: 'Saladin', slug: 'saladin' },
  { id: 'qadisiyyah', name: 'القادسية', enName: 'Al-Qadisiyyah', slug: 'qadisiyyah' },
  { id: 'maysan', name: 'ميسان', enName: 'Maysan', slug: 'maysan' },
  { id: 'dhi-qar', name: 'ذي قار', enName: 'Dhi Qar', slug: 'dhi-qar' },
  { id: 'muthanna', name: 'المثنى', enName: 'Al-Muthanna', slug: 'muthanna' },
];
