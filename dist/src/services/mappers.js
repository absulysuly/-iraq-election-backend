"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCandidateSummary = exports.toSharedArticle = exports.toSharedDebate = exports.toSharedEvent = exports.toSharedPost = exports.toSharedUser = void 0;
const types_1 = require("shared-schema/types");
const normalizeGovernorate = (name) => {
    const match = types_1.GOVERNORATES.find(governorate => governorate.toLowerCase() === name.toLowerCase());
    return (match ?? name);
};
const toSharedUser = (user) => ({
    id: user.id,
    name: user.name,
    avatarUrl: user.avatarUrl,
    role: user.role,
    verified: user.verified,
    party: user.party,
    governorate: normalizeGovernorate(user.governorate.name),
    governorateId: user.governorateId,
    bio: user.bio ?? undefined,
    createdAt: user.createdAt.toISOString(),
    updatedAt: user.updatedAt.toISOString(),
});
exports.toSharedUser = toSharedUser;
const toSharedPost = (post) => ({
    id: post.id,
    author: (0, exports.toSharedUser)(post.author),
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
exports.toSharedPost = toSharedPost;
const toSharedEvent = (event) => ({
    id: event.id,
    title: event.title,
    date: event.date.toISOString(),
    location: event.location,
    organizer: (0, exports.toSharedUser)(event.organizer),
    governorate: normalizeGovernorate(event.governorate.name),
    governorateId: event.governorateId,
    organizerId: event.organizerId,
    createdAt: event.createdAt.toISOString(),
    updatedAt: event.updatedAt.toISOString(),
});
exports.toSharedEvent = toSharedEvent;
const toSharedDebate = (debate) => ({
    id: debate.id,
    title: debate.title,
    topic: debate.topic,
    scheduledTime: debate.scheduledTime.toISOString(),
    isLive: debate.isLive,
    participants: debate.participants.map(participant => (0, exports.toSharedUser)(participant.user)),
    createdAt: debate.createdAt.toISOString(),
    updatedAt: debate.updatedAt.toISOString(),
});
exports.toSharedDebate = toSharedDebate;
const toSharedArticle = (article) => ({
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
exports.toSharedArticle = toSharedArticle;
const toCandidateSummary = (candidate) => ({
    id: Number.parseInt(candidate.id.replace(/[^0-9]/g, ''), 10) || 0,
    name: candidate.user.name,
    party: candidate.party.name,
    imageUrl: candidate.user.avatarUrl,
    verified: candidate.user.verified,
    governorate: normalizeGovernorate(candidate.user.governorate.name),
    platformSummary: candidate.platformSummary ?? undefined,
    votes: candidate.votes ?? undefined,
});
exports.toCandidateSummary = toCandidateSummary;
