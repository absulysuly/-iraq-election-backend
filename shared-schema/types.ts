// Shared types for the Iraq Election Platform
// This module provides shared type definitions used across the backend

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
  governorate: Governorate;
  bio?: string;
}

export interface Post {
  id: string;
  author: User;
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
  organizer: User;
  governorate: Governorate;
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

export interface DebateParticipant {
  user: User;
}

export interface Debate {
  id: string;
  title: string;
  topic: string;
  scheduledTime: Date;
  isLive: boolean;
  participants: DebateParticipant[];
}

// Governorate constants
export const GOVERNORATES: Record<string, Governorate> = {
  baghdad: {
    id: 'baghdad',
    name: 'بغداد',
    enName: 'Baghdad',
    slug: 'baghdad',
  },
  basra: {
    id: 'basra',
    name: 'البصرة',
    enName: 'Basra',
    slug: 'basra',
  },
  nineveh: {
    id: 'nineveh',
    name: 'نينوى',
    enName: 'Nineveh',
    slug: 'nineveh',
  },
  kirkuk: {
    id: 'kirkuk',
    name: 'كركوك',
    enName: 'Kirkuk',
    slug: 'kirkuk',
  },
  anbar: {
    id: 'anbar',
    name: 'الأنبار',
    enName: 'Anbar',
    slug: 'anbar',
  },
  diyala: {
    id: 'diyala',
    name: 'ديالى',
    enName: 'Diyala',
    slug: 'diyala',
  },
  najaf: {
    id: 'najaf',
    name: 'النجف',
    enName: 'Najaf',
    slug: 'najaf',
  },
  karbala: {
    id: 'karbala',
    name: 'كربلاء',
    enName: 'Karbala',
    slug: 'karbala',
  },
  wasit: {
    id: 'wasit',
    name: 'واسط',
    enName: 'Wasit',
    slug: 'wasit',
  },
  saladin: {
    id: 'saladin',
    name: 'صلاح الدين',
    enName: 'Saladin',
    slug: 'saladin',
  },
  qadisiyyah: {
    id: 'qadisiyyah',
    name: 'القادسية',
    enName: 'Qadisiyyah',
    slug: 'qadisiyyah',
  },
  babil: {
    id: 'babil',
    name: 'بابل',
    enName: 'Babil',
    slug: 'babil',
  },
  dhi_qar: {
    id: 'dhi_qar',
    name: 'ذي قار',
    enName: 'Dhi Qar',
    slug: 'dhi_qar',
  },
  maysan: {
    id: 'maysan',
    name: 'ميسان',
    enName: 'Maysan',
    slug: 'maysan',
  },
  muthanna: {
    id: 'muthanna',
    name: 'المثنى',
    enName: 'Muthanna',
    slug: 'muthanna',
  },
  duhok: {
    id: 'duhok',
    name: 'دهوك',
    enName: 'Duhok',
    slug: 'duhok',
  },
  erbil: {
    id: 'erbil',
    name: 'أربيل',
    enName: 'Erbil',
    slug: 'erbil',
  },
  sulaymaniyah: {
    id: 'sulaymaniyah',
    name: 'السليمانية',
    enName: 'Sulaymaniyah',
    slug: 'sulaymaniyah',
  },
};
