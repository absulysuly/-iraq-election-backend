"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likePost = exports.followCandidate = exports.getArticles = exports.getDebates = exports.createEvent = exports.getEvents = exports.createPost = exports.getPosts = exports.getUsers = void 0;
const types_1 = require("shared-schema/types");
const prisma_1 = require("../lib/prisma");
const mockData_1 = require("../mockData");
const mappers_1 = require("./mappers");
const getUsers = async (role, governorate) => {
    const client = prisma_1.prisma;
    const roleFilter = role && Object.values(types_1.UserRole).includes(role) ? role : undefined;
    if (!client) {
        return mockData_1.users
            .filter(user => (roleFilter ? user.role === roleFilter : true))
            .filter(user => governorate && governorate !== 'All' ? user.governorate === governorate : true);
    }
    const users = await client.user.findMany({
        where: {
            ...(roleFilter ? { role: roleFilter } : {}),
            ...(governorate && governorate !== 'All'
                ? { governorate: { name: governorate } }
                : {}),
        },
        include: {
            governorate: true,
        },
    });
    return users.map(mappers_1.toSharedUser);
};
exports.getUsers = getUsers;
const getPosts = async (filters) => {
    const client = prisma_1.prisma;
    if (!client) {
        return mockData_1.posts
            .filter(post => (filters.type ? post.type === filters.type : true))
            .filter(post => filters.authorId ? post.author?.id === filters.authorId : true)
            .filter(post => filters.governorate && filters.governorate !== 'All'
            ? post.governorates.includes(filters.governorate)
            : true);
    }
    const posts = await client.post.findMany({
        where: {
            ...(filters.type ? { type: filters.type } : {}),
            ...(filters.authorId ? { authorId: filters.authorId } : {}),
            ...(filters.governorate && filters.governorate !== 'All'
                ? { governorates: { has: filters.governorate } }
                : {}),
        },
        orderBy: { timestamp: 'desc' },
        include: {
            author: {
                include: {
                    governorate: true,
                },
            },
        },
    });
    return posts.map(mappers_1.toSharedPost);
};
exports.getPosts = getPosts;
const createPost = async (params) => {
    const { content, authorId, governorate, type, mediaUrl } = params;
    const client = prisma_1.prisma;
    if (!client) {
        const author = mockData_1.users.find(user => user.id === authorId);
        if (!author) {
            throw new Error('Author not found');
        }
        const now = new Date().toISOString();
        const newPost = {
            id: `post-${Date.now()}`,
            author,
            authorId: author.id,
            timestamp: now,
            content,
            mediaUrl,
            likes: 0,
            comments: 0,
            shares: 0,
            isSponsored: false,
            type,
            governorates: governorate ? [governorate] : [author.governorate ?? 'Baghdad'],
            createdAt: now,
            updatedAt: now,
        };
        mockData_1.posts.unshift(newPost);
        return newPost;
    }
    const author = await client.user.findUnique({
        where: { id: authorId },
        include: { governorate: true },
    });
    if (!author) {
        throw new Error('Author not found');
    }
    const post = await client.post.create({
        data: {
            id: `post-${Date.now()}`,
            authorId,
            content,
            mediaUrl,
            type,
            governorates: governorate ? [governorate] : [author.governorate.name],
        },
        include: {
            author: {
                include: {
                    governorate: true,
                },
            },
        },
    });
    return (0, mappers_1.toSharedPost)(post);
};
exports.createPost = createPost;
const getEvents = async (governorate) => {
    const client = prisma_1.prisma;
    if (!client) {
        return mockData_1.events.filter(event => governorate && governorate !== 'All' ? event.governorate === governorate : true);
    }
    const events = await client.event.findMany({
        where: governorate && governorate !== 'All' ? { governorate: { name: governorate } } : {},
        orderBy: { date: 'asc' },
        include: {
            organizer: {
                include: { governorate: true },
            },
            governorate: true,
        },
    });
    return events.map(event => (0, mappers_1.toSharedEvent)(event));
};
exports.getEvents = getEvents;
const createEvent = async (params) => {
    const { title, date, location, organizerId, governorate } = params;
    const client = prisma_1.prisma;
    if (!client) {
        const organizer = mockData_1.users.find(user => user.id === organizerId);
        if (!organizer) {
            throw new Error('Organizer not found');
        }
        const event = {
            id: `event-${Date.now()}`,
            title,
            date,
            location,
            organizer,
            organizerId,
            governorate: governorate ?? organizer.governorate ?? 'Baghdad',
            governorateId: governorate ?? organizer.governorate ?? 'Baghdad',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        mockData_1.events.unshift(event);
        return event;
    }
    const organizer = await client.user.findUnique({
        where: { id: organizerId },
        include: { governorate: true },
    });
    if (!organizer) {
        throw new Error('Organizer not found');
    }
    const targetGovernorate = governorate ?? organizer.governorate.name;
    const governorateRecord = await client.governorate.findFirst({ where: { name: targetGovernorate } });
    if (!governorateRecord) {
        throw new Error('Governorate not found');
    }
    const event = await client.event.create({
        data: {
            id: `event-${Date.now()}`,
            title,
            date: new Date(date),
            location,
            organizerId,
            governorateId: governorateRecord.id,
        },
        include: {
            organizer: { include: { governorate: true } },
            governorate: true,
        },
    });
    return (0, mappers_1.toSharedEvent)(event);
};
exports.createEvent = createEvent;
const getDebates = async (filters) => {
    const client = prisma_1.prisma;
    if (!client) {
        return mockData_1.debates
            .filter(debate => filters.participantIds && filters.participantIds.length > 0
            ? debate.participants?.some(p => filters.participantIds?.includes(p.id))
            : true)
            .filter(debate => filters.governorate && filters.governorate !== 'All'
            ? debate.participants?.some(p => p.governorate === filters.governorate)
            : true);
    }
    const debates = await client.debate.findMany({
        where: {
            ...(filters.participantIds && filters.participantIds.length > 0
                ? {
                    participants: {
                        some: {
                            userId: { in: filters.participantIds },
                        },
                    },
                }
                : {}),
        },
        include: {
            participants: {
                include: {
                    user: {
                        include: { governorate: true },
                    },
                },
            },
        },
    });
    const mapped = debates.map(mappers_1.toSharedDebate);
    if (filters.governorate && filters.governorate !== 'All') {
        return mapped.filter(debate => debate.participants?.some(p => p.governorate === filters.governorate) ?? false);
    }
    return mapped;
};
exports.getDebates = getDebates;
const getArticles = async (governorate) => {
    const client = prisma_1.prisma;
    if (!client) {
        return mockData_1.articles.filter(article => governorate && governorate !== 'All' ? article.governorates.includes(governorate) : true);
    }
    const articles = await client.article.findMany({
        where: governorate && governorate !== 'All' ? { governorates: { has: governorate } } : {},
        orderBy: { timestamp: 'desc' },
    });
    return articles.map(mappers_1.toSharedArticle);
};
exports.getArticles = getArticles;
const followCandidate = async (candidateId) => {
    // TODO: implement persistence (e.g., followers table). For now, acknowledge request.
    return { success: true, candidateId };
};
exports.followCandidate = followCandidate;
const likePost = async (postId) => {
    const client = prisma_1.prisma;
    if (!client) {
        const post = mockData_1.posts.find(item => item.id === postId);
        if (post) {
            post.likes += 1;
        }
        return { success: true, postId };
    }
    await client.post
        .update({
        where: { id: postId },
        data: { likes: { increment: 1 } },
    })
        .catch(() => undefined);
    return { success: true, postId };
};
exports.likePost = likePost;
