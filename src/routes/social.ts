import { Router, type Request, type Response } from 'express';
import type { Post, Event, Debate, Article, User, GovernorateId } from 'shared-schema/types';
import { users, posts, events, debates, articles } from '../mockData';

const router = Router();

router.get('/users', (req: Request, res: Response) => {
    const { role, governorate } = req.query as { role?: string; governorate?: string };
    let filtered: User[] = users;

    if (role) {
        filtered = filtered.filter(user => user.role === role);
    }
    if (governorate && governorate !== 'All') {
        filtered = filtered.filter(user => user.governorate === governorate);
    }

    res.json(filtered);
});

router.get('/posts', (req: Request, res: Response) => {
    const { type, governorate, authorId } = req.query as { type?: 'Post' | 'Reel'; governorate?: string; authorId?: string };

    let filtered: Post[] = posts;
    if (type) {
        filtered = filtered.filter(post => post.type === type);
    }
    if (governorate && governorate !== 'All') {
        filtered = filtered.filter(post => post.governorates.includes(governorate));
    }
    if (authorId) {
        filtered = filtered.filter(post => post.author?.id === authorId);
    }

    res.json(filtered);
});

router.post('/posts', (req: Request, res: Response) => {
    const { content, authorId, governorate } = req.body as { content?: string; authorId?: string; governorate?: GovernorateId };
    if (!content) {
        return res.status(400).json({ error: 'content is required' });
    }
    if (!authorId) {
        return res.status(400).json({ error: 'authorId is required' });
    }

    const author = users.find(user => user.id === authorId);
    if (!author) {
        return res.status(404).json({ error: 'author not found' });
    }

    const timestamp = new Date().toISOString();
    const newPost: Post = {
        id: `post-${Date.now()}`,
        author,
        authorId: author.id,
        timestamp,
        content,
        likes: 0,
        comments: 0,
        shares: 0,
        isSponsored: false,
        type: 'Post',
        governorates: governorate ? [governorate] : [author.governorate ?? 'Baghdad'],
        createdAt: timestamp,
        updatedAt: timestamp,
    };
    posts.unshift(newPost);
    res.status(201).json(newPost);
});

router.post('/reels', (req: Request, res: Response) => {
    const { caption, authorId, mediaUrl, governorate } = req.body as {
        caption?: string;
        authorId?: string;
        mediaUrl?: string;
        governorate?: GovernorateId;
    };

    if (!caption) {
        return res.status(400).json({ error: 'caption is required' });
    }
    if (!authorId) {
        return res.status(400).json({ error: 'authorId is required' });
    }

    const author = users.find(user => user.id === authorId);
    if (!author) {
        return res.status(404).json({ error: 'author not found' });
    }

    const timestamp = new Date().toISOString();
    const newReel: Post = {
        id: `reel-${Date.now()}`,
        author,
        authorId: author.id,
        timestamp,
        content: caption,
        mediaUrl,
        likes: 0,
        comments: 0,
        shares: 0,
        isSponsored: false,
        type: 'Reel',
        governorates: governorate ? [governorate] : [author.governorate ?? 'Baghdad'],
        createdAt: timestamp,
        updatedAt: timestamp,
    };
    posts.unshift(newReel);
    res.status(201).json(newReel);
});

router.get('/events', (req: Request, res: Response) => {
    const { governorate } = req.query as { governorate?: string };
    let filtered: Event[] = events;
    if (governorate && governorate !== 'All') {
        filtered = filtered.filter(event => event.governorate === governorate);
    }
    res.json(filtered);
});

router.post('/events', (req: Request, res: Response) => {
    const { title, date, location, organizerId, governorate } = req.body as {
        title?: string;
        date?: string;
        location?: string;
        organizerId?: string;
        governorate?: GovernorateId;
    };

    if (!title || !date || !location) {
        return res.status(400).json({ error: 'title, date, and location are required' });
    }

    const organizer = organizerId ? users.find(user => user.id === organizerId) : undefined;
    const fallbackOrganizer = organizer ?? users[0];
    if (organizerId && !organizer) {
        return res.status(404).json({ error: 'organizer not found' });
    }
    if (!fallbackOrganizer) {
        return res.status(400).json({ error: 'No organizers available in mock data' });
    }

    const timestamp = new Date().toISOString();
    const governorateName = governorate ?? fallbackOrganizer.governorate ?? 'Baghdad';
    const newEvent: Event = {
        id: `event-${Date.now()}`,
        title,
        date,
        location,
        organizer: fallbackOrganizer,
        organizerId: fallbackOrganizer.id,
        governorate: governorateName,
        governorateId: governorateName,
        createdAt: timestamp,
        updatedAt: timestamp,
    };
    events.unshift(newEvent);
    res.status(201).json(newEvent);
});

router.get('/debates', (req: Request, res: Response) => {
    const { governorate, participantIds } = req.query as { governorate?: string; participantIds?: string };

    let filtered: Debate[] = debates;
    if (governorate && governorate !== 'All') {
        filtered = filtered.filter(debate => debate.participants?.some(p => p.governorate === governorate));
    }

    if (participantIds) {
        const ids = participantIds.split(',').map(id => id.trim()).filter(Boolean);
        filtered = filtered.filter(debate => debate.participants?.some(p => ids.includes(p.id)));
    }

    res.json(filtered);
});

router.get('/articles', (req: Request, res: Response) => {
    const { governorate } = req.query as { governorate?: string };
    let filtered: Article[] = articles;
    if (governorate && governorate !== 'All') {
        filtered = filtered.filter(article => article.governorates.includes(governorate));
    }
    res.json(filtered);
});

router.post('/follow', (req: Request, res: Response) => {
    const { candidateId } = req.body as { candidateId?: string };
    if (!candidateId) {
        return res.status(400).json({ error: 'candidateId is required' });
    }
    res.json({ success: true, candidateId });
});

router.post('/like', (req: Request, res: Response) => {
    const { postId } = req.body as { postId?: string };
    if (!postId) {
        return res.status(400).json({ error: 'postId is required' });
    }
    res.json({ success: true, postId });
});

export const socialRouter = router;
