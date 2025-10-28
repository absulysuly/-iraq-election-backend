export declare enum UserRole {
    Voter = "Voter",
    Candidate = "Candidate"
}
export declare enum PostType {
    Post = "Post",
    Reel = "Reel"
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
export declare const GOVERNORATES: Governorate[];
