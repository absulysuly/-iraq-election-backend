"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboardStats = exports.getGovernorateData = exports.getGovernorateParticipation = void 0;
const prisma_1 = require("../lib/prisma");
const mockData_1 = require("../mockData");
const getGovernorateParticipation = async () => {
    if (!prisma_1.prisma) {
        return mockData_1.governorateParticipation;
    }
    const participation = await prisma_1.prisma.governorateParticipation.findMany();
    return participation.map(item => ({
        governorateId: item.governorateId,
        governorateName: item.governorateName,
        estimatedTurnout: item.estimatedTurnout,
    }));
};
exports.getGovernorateParticipation = getGovernorateParticipation;
const getGovernorateData = async (slug) => {
    if (!prisma_1.prisma) {
        const key = (0, mockData_1.slugify)(slug ?? '');
        return mockData_1.governorateData.get(key) ?? null;
    }
    const governorate = await prisma_1.prisma.governorate.findUnique({
        where: { slug },
        include: {
            stats: true,
            events: {
                include: {
                    organizer: true,
                },
            },
        },
    });
    if (!governorate) {
        return null;
    }
    const candidates = await prisma_1.prisma.candidate.findMany({
        where: { user: { governorateId: governorate.id } },
        include: {
            user: true,
        },
    });
    const news = await prisma_1.prisma.article.findMany({
        where: { governorates: { has: governorate.name } },
        take: 5,
        orderBy: { timestamp: 'desc' },
    });
    return {
        governorate: governorate.name,
        candidates: candidates.map(({ user, platformSummary, votes, partyId }) => ({
            id: Number.parseInt(user.id.replace(/[^0-9]/g, ''), 10) || 0,
            name: user.name,
            party: partyId,
            imageUrl: user.avatarUrl,
            verified: user.verified,
            governorate: governorate.name,
            platformSummary: platformSummary ?? undefined,
            votes: votes ?? undefined,
        })),
        news: news.map(article => ({
            id: Number.parseInt(article.id.replace(/[^0-9]/g, ''), 10) || 0,
            title: article.title,
            summary: article.contentSnippet,
            date: article.timestamp.toISOString(),
            source: article.source,
        })),
        localStats: {
            registeredVoters: governorate.stats?.registeredVoters ?? 0,
            pollingStations: governorate.stats?.pollingStations ?? 0,
        },
    };
};
exports.getGovernorateData = getGovernorateData;
const getDashboardStats = async () => {
    if (!prisma_1.prisma) {
        return mockData_1.dashboardStats;
    }
    const snapshot = await prisma_1.prisma.dashboardSnapshot.findFirst();
    if (!snapshot) {
        throw new Error('Dashboard snapshot not found');
    }
    const metrics = snapshot.metrics;
    if (typeof metrics !== 'object' || metrics === null) {
        throw new Error('Invalid dashboard metrics payload');
    }
    return metrics;
};
exports.getDashboardStats = getDashboardStats;
