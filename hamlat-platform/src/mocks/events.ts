import { Event } from '../types';

export const mockEvents: Event[] = [
  {
    id: 'evt_001',
    title: 'لقاء مفتوح مع الناخبين',
    description: 'لقاء تفاعلي مع المواطنين للاستماع إلى مطالبهم ومناقشة برنامجنا الانتخابي.',
    date: '2025-11-05T17:00:00Z',
    location: 'قاعة بغداد الكبرى',
    governorate: 'Baghdad',
    organizerId: 'usr_001',
    attendeesCount: 2340,
    isAttending: false,
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800'
  },
  {
    id: 'evt_002',
    title: 'مؤتمر التعليم والتنمية',
    description: 'مؤتمر يناقش استراتيجيات تطوير التعليم في البصرة مع خبراء تربويين.',
    date: '2025-11-08T14:00:00Z',
    location: 'جامعة البصرة',
    governorate: 'Basra',
    organizerId: 'usr_002',
    attendeesCount: 1560,
    isAttending: true,
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800'
  },
  {
    id: 'evt_003',
    title: 'ورشة عمل: إعادة الإعمار',
    description: 'ورشة عمل تشاركية حول خطط إعادة إعمار المناطق المتضررة في نينوى.',
    date: '2025-11-10T10:00:00Z',
    location: 'مركز الموصل الثقافي',
    governorate: 'Mosul',
    organizerId: 'usr_003',
    attendeesCount: 890,
    isAttending: false,
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'
  },
  {
    id: 'evt_004',
    title: 'ندوة حقوق المرأة',
    description: 'ندوة تناقش تعزيز دور المرأة في المشاركة السياسية والاقتصادية.',
    date: '2025-11-12T16:00:00Z',
    location: 'صالة النجف الثقافية',
    governorate: 'Najaf',
    organizerId: 'usr_004',
    attendeesCount: 1234,
    isAttending: true,
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800'
  },
  {
    id: 'evt_005',
    title: 'مهرجان الشباب العراقي',
    description: 'احتفالية تجمع الشباب من مختلف المحافظات لمناقشة دورهم في بناء المستقبل.',
    date: '2025-11-15T12:00:00Z',
    location: 'منتزه الزوراء',
    governorate: 'Baghdad',
    organizerId: 'usr_001',
    attendeesCount: 5670,
    isAttending: false,
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800'
  },
  {
    id: 'evt_006',
    title: 'لقاء رجال الأعمال',
    description: 'لقاء مع رجال الأعمال لمناقشة فرص الاستثمار ودعم القطاع الخاص.',
    date: '2025-11-18T15:00:00Z',
    location: 'فندق الرشيد',
    governorate: 'Baghdad',
    organizerId: 'usr_001',
    attendeesCount: 450,
    isAttending: false
  }
];
