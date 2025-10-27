import { Debate } from '../types';

export const mockDebates: Debate[] = [
  {
    id: 'deb_001',
    title: 'مناظرة: مستقبل التعليم في العراق',
    description: 'مناظرة بين المرشحين حول سياسات التعليم وتطوير المناهج.',
    topic: 'التعليم والتنمية البشرية',
    date: '2025-11-07T19:00:00Z',
    status: 'scheduled',
    participantIds: ['usr_001', 'usr_002', 'usr_004'],
    governorate: 'Baghdad',
    viewersCount: 0
  },
  {
    id: 'deb_002',
    title: 'حوار: الإصلاح الاقتصادي',
    description: 'حوار مفتوح حول الإصلاحات الاقتصادية المطلوبة والحلول المقترحة.',
    topic: 'الاقتصاد والاستثمار',
    date: '2025-10-26T20:00:00Z',
    status: 'live',
    participantIds: ['usr_001', 'usr_003', 'usr_007'],
    viewersCount: 12450
  },
  {
    id: 'deb_003',
    title: 'مناظرة: إعادة الإعمار',
    description: 'مناظرة حول استراتيجيات إعادة إعمار المناطق المحررة.',
    topic: 'البنية التحتية والإعمار',
    date: '2025-10-20T18:00:00Z',
    status: 'completed',
    participantIds: ['usr_003', 'usr_007'],
    governorate: 'Mosul',
    viewersCount: 8934
  },
  {
    id: 'deb_004',
    title: 'حوار: حقوق المرأة والمشاركة السياسية',
    description: 'نقاش حول تعزيز مشاركة المرأة في الحياة السياسية والعامة.',
    topic: 'حقوق المرأة',
    date: '2025-11-14T17:00:00Z',
    status: 'scheduled',
    participantIds: ['usr_002', 'usr_004', 'usr_008'],
    governorate: 'Najaf',
    viewersCount: 0
  },
  {
    id: 'deb_005',
    title: 'مناظرة: الأمن والاستقرار',
    description: 'مناظرة حول السياسات الأمنية وتحقيق الاستقرار في المناطق الحدودية.',
    topic: 'الأمن الوطني',
    date: '2025-11-20T19:30:00Z',
    status: 'scheduled',
    participantIds: ['usr_003', 'usr_007'],
    governorate: 'Anbar',
    viewersCount: 0
  }
];
