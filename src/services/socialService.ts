import {
  UserRole,
  type PostType,
  type GovernorateId,
  type User as SharedUser,
  type Post as SharedPost,
  type Event as SharedEvent,
  type Debate as SharedDebate,
  type Article as SharedArticle,
} from 'shared-schema/types';
import { prisma } from '../lib/prisma';
import { users as mockUsers, posts as mockPosts, events as mockEvents, debates as mockDebates, articles as mockArticles } from '../mockData';
import {
  toSharedUser,
  toSharedPost,
  toSharedEvent,
  toSharedDebate,
  toSharedArticle,
} from './mappers';

export const getUsers = async (role?: string, governorate?: string): Promise<SharedUser[]> => {
  const client = prisma;
  const roleFilter = role && Object.values(UserRole).includes(role as UserRole) ? (role as UserRole) : undefined;

  if (!client) {
    return mockUsers
      .filter(user => (roleFilter ? user.role === roleFilter : true))
      .filter(user =>
        governorate && governorate !== 'All' ? user.governorate === governorate : true,
      );
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

  return users.map(toSharedUser);
};

export const getPosts = async (
  filters: { type?: PostType; governorate?: string; authorId?: string }
): Promise<SharedPost[]> => {
  const client = prisma;

  if (!client) {
    return mockPosts
      .filter(post => (filters.type ? post.type === filters.type : true))
      .filter(post =>
        filters.authorId ? post.author?.id === filters.authorId : true,
      )
      .filter(post =>
        filters.governorate && filters.governorate !== 'All'
          ? post.governorates.includes(filters.governorate)
          : true,
      );
  }

  const posts = await client.post.findMany({
    where: {
      ...(filters.type ? { type: filters.type } : {}),
      ...(filters.authorId ? { authorId: filters.authorId } : {}),
      ...(filters.governorate && filters.governorate !== 'All'
        ? { governorates: { has: filters.governorate as GovernorateId } }
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

  return posts.map(toSharedPost);
};

export const createPost = async (params: {
  content: string;
  authorId: string;
  governorate?: GovernorateId;
  type: PostType;
  mediaUrl?: string;
}): Promise<SharedPost> => {
  const { content, authorId, governorate, type, mediaUrl } = params;
  const client = prisma;
  if (!client) {
    const author = mockUsers.find(user => user.id === authorId);
    if (!author) {
      throw new Error('Author not found');
    }

    const now = new Date().toISOString();
    const newPost: SharedPost = {
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
    mockPosts.unshift(newPost);
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
      governorates: governorate ? [governorate] : [author.governorate.name as GovernorateId],
    },
    include: {
      author: {
        include: {
          governorate: true,
        },
      },
    },
  });

  return toSharedPost(post);
};

export const getEvents = async (governorate?: string): Promise<SharedEvent[]> => {
  const client = prisma;
  if (!client) {
    return mockEvents.filter(event =>
      governorate && governorate !== 'All' ? event.governorate === governorate : true,
    );
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

  return events.map(event => toSharedEvent(event));
};

export const createEvent = async (params: {
  title: string;
  date: string;
  location: string;
  organizerId: string;
  governorate?: GovernorateId;
}): Promise<SharedEvent> => {
  const { title, date, location, organizerId, governorate } = params;
  const client = prisma;

  if (!client) {
    const organizer = mockUsers.find(user => user.id === organizerId);
    if (!organizer) {
      throw new Error('Organizer not found');
    }

    const event: SharedEvent = {
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
    mockEvents.unshift(event);
    return event;
  }

  const organizer = await client.user.findUnique({
    where: { id: organizerId },
    include: { governorate: true },
  });
  if (!organizer) {
    throw new Error('Organizer not found');
  }

  const targetGovernorate = governorate ?? (organizer.governorate.name as GovernorateId);
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

  return toSharedEvent(event);
};

export const getDebates = async (filters: { governorate?: string; participantIds?: string[] }): Promise<SharedDebate[]> => {
  const client = prisma;
  if (!client) {
    return mockDebates
      .filter(debate =>
        filters.participantIds && filters.participantIds.length > 0
          ? debate.participants?.some(p => filters.participantIds?.includes(p.id))
          : true,
      )
      .filter(debate =>
        filters.governorate && filters.governorate !== 'All'
          ? debate.participants?.some(p => p.governorate === filters.governorate)
          : true,
      ) as SharedDebate[];
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

  const mapped = debates.map(toSharedDebate);

  if (filters.governorate && filters.governorate !== 'All') {
    return mapped.filter(
      debate => debate.participants?.some(p => p.governorate === filters.governorate) ?? false,
    );
  }

  return mapped;
};

export const getArticles = async (governorate?: string): Promise<SharedArticle[]> => {
  const client = prisma;
  if (!client) {
    return mockArticles.filter(article =>
      governorate && governorate !== 'All' ? article.governorates.includes(governorate) : true,
    );
  }

  const articles = await client.article.findMany({
    where: governorate && governorate !== 'All' ? { governorates: { has: governorate } } : {},
    orderBy: { timestamp: 'desc' },
  });

  return articles.map(toSharedArticle);
};

export const followCandidate = async (candidateId: string) => {
  // TODO: implement persistence (e.g., followers table). For now, acknowledge request.
  return { success: true, candidateId } as const;
};

export const likePost = async (postId: string) => {
  const client = prisma;
  if (!client) {
    const post = mockPosts.find(item => item.id === postId);
    if (post) {
      post.likes += 1;
    }
    return { success: true, postId } as const;
  }

  await client.post
    .update({
      where: { id: postId },
      data: { likes: { increment: 1 } },
    })
    .catch(() => undefined);
  return { success: true, postId } as const;
};
