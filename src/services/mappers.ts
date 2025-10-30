import type {
  User as SharedUser,
  UserRole,
  Post as SharedPost,
  Event as SharedEvent,
  Debate as SharedDebate,
  Article as SharedArticle,
  GovernorateId,
} from 'shared-schema/types';
import { GOVERNORATES } from 'shared-schema/types';
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

const normalizeGovernorate = (name: string): GovernorateId => {
  const match = (GOVERNORATES as readonly string[]).find(
    governorate => governorate.toLowerCase() === name.toLowerCase(),
  );
  return (match ?? name) as GovernorateId;
};

export const toSharedUser = (user: User & { governorate: GovernorateModel }): SharedUser => ({
  id: user.id,
  name: user.name,
  avatarUrl: user.avatarUrl,
  role: user.role as UserRole,
  verified: user.verified,
  party: user.party,
  governorate: normalizeGovernorate(user.governorate.name),
  governorateId: user.governorateId,
  bio: user.bio ?? undefined,
  createdAt: user.createdAt.toISOString(),
  updatedAt: user.updatedAt.toISOString(),
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
  governorates: post.governorates.map(normalizeGovernorate),
  createdAt: post.createdAt.toISOString(),
  updatedAt: post.updatedAt.toISOString(),
});

export const toSharedEvent = (
  event: Event & { organizer: User & { governorate: GovernorateModel }; governorate: GovernorateModel }
): SharedEvent => ({
  id: event.id,
  title: event.title,
  date: event.date.toISOString(),
  location: event.location,
  organizer: toSharedUser(event.organizer),
  governorate: normalizeGovernorate(event.governorate.name),
  governorateId: event.governorateId,
  organizerId: event.organizerId,
  createdAt: event.createdAt.toISOString(),
  updatedAt: event.updatedAt.toISOString(),
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
  createdAt: debate.createdAt.toISOString(),
  updatedAt: debate.updatedAt.toISOString(),
});

export const toSharedArticle = (article: Article): SharedArticle => ({
  id: article.id,
  source: article.source,
  timestamp: article.timestamp.toISOString(),
  title: article.title,
  authorName: article.authorName,
  contentSnippet: article.contentSnippet,
  url: article.url,
  governorates: article.governorates.map(normalizeGovernorate),
  createdAt: article.createdAt.toISOString(),
  updatedAt: article.updatedAt.toISOString(),
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
  governorate: normalizeGovernorate(candidate.user.governorate.name),
  platformSummary: candidate.platformSummary ?? undefined,
  votes: candidate.votes ?? undefined,
});
