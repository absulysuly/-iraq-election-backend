import { Post } from '../types';

export const mockPosts: Post[] = [
  {
    id: 'post_001',
    authorId: 'usr_001',
    content: 'نحن ملتزمون بخدمة شعب العراق وبناء مستقبل أفضل لأطفالنا. الشفافية والمساءلة هي أساس عملنا. معاً نبني عراقاً قوياً 🇮🇶',
    type: 'Post',
    likes: 1423,
    comments: 187,
    shares: 94,
    isLiked: false,
    createdAt: '2025-10-26T14:30:00Z',
    governorate: 'Baghdad'
  },
  {
    id: 'post_002',
    authorId: 'usr_002',
    content: 'التعليم هو حجر الأساس لأي مجتمع متقدم. سنعمل على تحسين جودة التعليم وتوفير فرص متساوية لجميع الطلاب في البصرة. #التعليم_أولاً',
    type: 'Post',
    likes: 2156,
    comments: 298,
    shares: 156,
    isLiked: true,
    createdAt: '2025-10-26T10:15:00Z',
    governorate: 'Basra'
  },
  {
    id: 'post_003',
    authorId: 'usr_003',
    content: 'زيارة ميدانية اليوم لمشروع إعادة إعمار الموصل القديمة. التقدم ملحوظ والعمل مستمر. شكراً لكل من ساهم في هذا المشروع الوطني.',
    type: 'Post',
    mediaUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800',
    likes: 3421,
    comments: 421,
    shares: 289,
    isLiked: false,
    createdAt: '2025-10-25T16:45:00Z',
    governorate: 'Mosul'
  },
  {
    id: 'post_004',
    authorId: 'usr_004',
    content: 'العدالة الاجتماعية ليست شعاراً، بل واقعاً نسعى لتحقيقه. اليوم اجتمعنا مع ممثلي المجتمع المدني لمناقشة قانون الضمان الاجتماعي الجديد.',
    type: 'Post',
    likes: 1876,
    comments: 234,
    shares: 123,
    isLiked: true,
    createdAt: '2025-10-25T12:20:00Z',
    governorate: 'Najaf'
  },
  {
    id: 'reel_001',
    authorId: 'usr_002',
    content: 'جولة في أحد المدارس التي تم تطويرها مؤخراً في البصرة. انظروا الفرق! 📚',
    type: 'Reel',
    mediaUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600',
    likes: 5634,
    comments: 687,
    shares: 421,
    isLiked: true,
    createdAt: '2025-10-24T18:30:00Z',
    governorate: 'Basra'
  },
  {
    id: 'post_005',
    authorId: 'usr_005',
    content: 'كمواطن بصري، أشكر جهود المرشحين الذين يعملون على تحسين البنية التحتية. نحتاج المزيد من مثل هذه المشاريع.',
    type: 'Post',
    likes: 234,
    comments: 45,
    shares: 12,
    isLiked: false,
    createdAt: '2025-10-24T09:10:00Z',
    governorate: 'Basra'
  },
  {
    id: 'post_006',
    authorId: 'usr_006',
    content: 'كطالبة جامعية، أقدر اهتمام المرشحين بقطاع التعليم. لكن نريد رؤية خطط عملية وليس مجرد وعود! 💪',
    type: 'Post',
    likes: 567,
    comments: 89,
    shares: 34,
    isLiked: false,
    createdAt: '2025-10-23T15:45:00Z',
    governorate: 'Karbala'
  },
  {
    id: 'post_007',
    authorId: 'usr_007',
    content: 'الأمن والاستقرار هما الأساس لأي تنمية. نعمل بجد لضمان سلامة مواطني الأنبار وتوفير فرص عمل للشباب.',
    type: 'Post',
    mediaUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800',
    likes: 1923,
    comments: 267,
    shares: 145,
    isLiked: false,
    createdAt: '2025-10-23T11:30:00Z',
    governorate: 'Anbar'
  },
  {
    id: 'reel_002',
    authorId: 'usr_008',
    content: 'مهرجان التعايش السلمي في أربيل - احتفال بالتنوع العراقي 🎉',
    type: 'Reel',
    mediaUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600',
    likes: 4521,
    comments: 523,
    shares: 312,
    isLiked: true,
    createdAt: '2025-10-22T17:00:00Z',
    governorate: 'Erbil'
  },
  {
    id: 'post_008',
    authorId: 'usr_001',
    content: 'اجتماع مثمر اليوم مع رجال الأعمال البغداديين. ناقشنا فرص الاستثمار وخلق فرص العمل للشباب. العراق بحاجة لاقتصاد قوي.',
    type: 'Post',
    likes: 1765,
    comments: 198,
    shares: 87,
    isLiked: false,
    createdAt: '2025-10-22T13:20:00Z',
    governorate: 'Baghdad'
  }
];
