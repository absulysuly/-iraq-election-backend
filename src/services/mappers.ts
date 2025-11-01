import type { User as SharedUser, UserRole, Post as SharedPost, Event as SharedEvent, Debate as SharedDebate, Article as SharedArticle } from '../types';
import type {
  User,
  Governorate as GovernorateModel,
  Post,
  Event,
  Debate,
  DebateParticipant,
  Article,
  Candidate,
  Party,
} from '@prisma/client';

export const toSharedUser = (user: User & { governorate: GovernorateModel }): SharedUser => ({
  id: user.id,
  name: user.name,
  avatarUrl: user.avatarUrl,
  role: user.role as UserRole,
  verified: user.verified,
  party: user.party,
  governorate: user.governorate.name,
  governorateId: user.governorateId,
  bio: user.bio ?? undefined,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});

export const toSharedPost = (
  post: Post & { author: User & { governorate: GovernorateModel } }
): SharedPost => ({
  id: post.id,
  author: toSharedUser(post.author),
  authorId: post.authorId,
  timestamp: post.timestamp.toISOString(),
  content: post.content,
  mediaUrl: post.mediaUrl ?? undefined,
  likes: post.likes,
  comments: post.comments,
  shares: post.shares,
  isSponsored: post.isSponsored,
  type: post.type,
  governorates: post.governorates,
  createdAt: post.createdAt,
  updatedAt: post.updatedAt,
});

export const toSharedEvent = (
  event: Event & { organizer: User & { governorate: GovernorateModel }; governorate: GovernorateModel }
): SharedEvent => ({
  id: event.id,
  title: event.title,
  date: event.date.toISOString(),
  location: event.location,
  organizer: toSharedUser(event.organizer),
  organizerId: event.organizerId,
  governorate: event.governorate.name,
  governorateId: event.governorateId,
  createdAt: event.createdAt,
  updatedAt: event.updatedAt,
});

export const toSharedDebate = (
  debate: Debate & { participants: (DebateParticipant & { user: User & { governorate: GovernorateModel } })[] }
): SharedDebate => ({
  id: debate.id,
  title: debate.title,
  topic: debate.topic,
  scheduledTime: debate.scheduledTime.toISOString(),
  isLive: debate.isLive,
  participants: debate.participants.map(participant => toSharedUser(participant.user)),
  createdAt: debate.createdAt,
  updatedAt: debate.updatedAt,
});

export const toSharedArticle = (article: Article): SharedArticle => ({
  id: article.id,
  source: article.source,
  timestamp: article.timestamp.toISOString(),
  title: article.title,
  authorName: article.authorName,
  contentSnippet: article.contentSnippet,
  url: article.url,
  governorates: article.governorates,
  createdAt: article.createdAt,
  updatedAt: article.updatedAt,
});

export const toCandidateSummary = (
  candidate: Candidate & {
    user: User & { governorate: GovernorateModel };
    party: Party;
  }
) => ({
  id: Number.parseInt(candidate.id.replace(/[^0-9]/g, ''), 10) || 0,
  name: candidate.user.name,
  party: candidate.party.name,
  imageUrl: candidate.user.avatarUrl,
  verified: candidate.user.verified,
  governorate: candidate.user.governorate.name,
  platformSummary: candidate.platformSummary ?? undefined,
  votes: candidate.votes ?? undefined,
});
