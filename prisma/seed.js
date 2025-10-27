const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create Governorates
  console.log('📍 Creating governorates...');
  const governorates = [
    { id: 'baghdad', name: 'بغداد', enName: 'Baghdad', slug: 'baghdad' },
    { id: 'basra', name: 'البصرة', enName: 'Basra', slug: 'basra' },
    { id: 'nineveh', name: 'نينوى', enName: 'Nineveh', slug: 'nineveh' },
    { id: 'erbil', name: 'أربيل', enName: 'Erbil', slug: 'erbil' },
    { id: 'najaf', name: 'النجف', enName: 'Najaf', slug: 'najaf' },
    { id: 'karbala', name: 'كربلاء', enName: 'Karbala', slug: 'karbala' },
    { id: 'sulaymaniyah', name: 'السليمانية', enName: 'Sulaymaniyah', slug: 'sulaymaniyah' },
    { id: 'dhi-qar', name: 'ذي قار', enName: 'Dhi Qar', slug: 'dhi-qar' },
    { id: 'anbar', name: 'الأنبار', enName: 'Anbar', slug: 'anbar' },
    { id: 'diyala', name: 'ديالى', enName: 'Diyala', slug: 'diyala' },
  ];

  for (const gov of governorates) {
    await prisma.governorate.upsert({
      where: { id: gov.id },
      update: {},
      create: gov,
    });
  }

  // Create Parties
  console.log('🏛️ Creating political parties...');
  const parties = [
    {
      id: 'party-1',
      name: 'تحالف النصر',
      logoUrl: 'https://picsum.photos/200/200?random=party1',
      leader: 'حيدر العبادي',
      founded: 2017,
      description: 'تحالف سياسي عراقي تأسس عام 2017',
    },
    {
      id: 'party-2',
      name: 'دولة القانون',
      logoUrl: 'https://picsum.photos/200/200?random=party2',
      leader: 'نوري المالكي',
      founded: 2005,
      description: 'ائتلاف سياسي عراقي شيعي',
    },
    {
      id: 'party-3',
      name: 'التيار الصدري',
      logoUrl: 'https://picsum.photos/200/200?random=party3',
      leader: 'مقتدى الصدر',
      founded: 2003,
      description: 'حركة سياسية دينية عراقية',
    },
    {
      id: 'party-4',
      name: 'الحزب الديمقراطي الكردستاني',
      logoUrl: 'https://picsum.photos/200/200?random=party4',
      leader: 'مسعود بارزاني',
      founded: 1946,
      description: 'حزب سياسي كردي عراقي',
    },
  ];

  for (const party of parties) {
    await prisma.party.upsert({
      where: { id: party.id },
      update: {},
      create: party,
    });
  }

  // Create Users
  console.log('👥 Creating users...');
  const users = [
    {
      id: 'user-1',
      name: 'أحمد علي الحسيني',
      avatarUrl: 'https://i.pravatar.cc/150?img=1',
      role: 'Candidate',
      verified: true,
      party: 'تحالف النصر',
      governorateId: 'baghdad',
      bio: 'مرشح للبرلمان العراقي من بغداد',
    },
    {
      id: 'user-2',
      name: 'فاطمة حسن العلي',
      avatarUrl: 'https://i.pravatar.cc/150?img=5',
      role: 'Candidate',
      verified: true,
      party: 'دولة القانون',
      governorateId: 'basra',
      bio: 'ناشطة سياسية ومرشحة من البصرة',
    },
    {
      id: 'user-3',
      name: 'علي كريم الساعدي',
      avatarUrl: 'https://i.pravatar.cc/150?img=12',
      role: 'Candidate',
      verified: true,
      party: 'التيار الصدري',
      governorateId: 'najaf',
      bio: 'مرشح مستقل من النجف',
    },
    {
      id: 'user-4',
      name: 'زينب محمد',
      avatarUrl: 'https://i.pravatar.cc/150?img=9',
      role: 'Voter',
      verified: false,
      party: 'مستقلة',
      governorateId: 'baghdad',
      bio: 'ناخبة من بغداد',
    },
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { id: user.id },
      update: {},
      create: user,
    });
  }

  // Create Candidates
  console.log('🗳️ Creating candidates...');
  const candidates = [
    {
      id: 'candidate-1',
      userId: 'user-1',
      partyId: 'party-1',
      platformSummary: 'التركيز على مكافحة الفساد وتحسين الخدمات',
      votes: 1542,
    },
    {
      id: 'candidate-2',
      userId: 'user-2',
      partyId: 'party-2',
      platformSummary: 'تعزيز حقوق المرأة والتنمية الاقتصادية',
      votes: 1287,
    },
    {
      id: 'candidate-3',
      userId: 'user-3',
      partyId: 'party-3',
      platformSummary: 'الإصلاح السياسي والعدالة الاجتماعية',
      votes: 934,
    },
  ];

  for (const candidate of candidates) {
    await prisma.candidate.upsert({
      where: { id: candidate.id },
      update: {},
      create: candidate,
    });
  }

  // Create Posts
  console.log('📝 Creating posts...');
  const posts = [
    {
      id: 'post-1',
      authorId: 'user-1',
      content: 'نعمل من أجل عراق أفضل. دعمكم يعني الكثير! 🇮🇶',
      likes: 245,
      comments: 34,
      shares: 12,
      type: 'Post',
      governorates: ['baghdad'],
    },
    {
      id: 'post-2',
      authorId: 'user-2',
      content: 'حقوق المرأة هي حقوق الإنسان. معاً نبني المستقبل 💪',
      likes: 189,
      comments: 28,
      shares: 8,
      type: 'Post',
      governorates: ['basra'],
    },
  ];

  for (const post of posts) {
    await prisma.post.upsert({
      where: { id: post.id },
      update: {},
      create: post,
    });
  }

  // Create Events
  console.log('📅 Creating events...');
  const events = [
    {
      id: 'event-1',
      title: 'مؤتمر الحملة الانتخابية',
      date: new Date('2025-11-15T18:00:00Z'),
      location: 'قاعة الشعب - بغداد',
      organizerId: 'user-1',
      governorateId: 'baghdad',
    },
    {
      id: 'event-2',
      title: 'لقاء مع الناخبين',
      date: new Date('2025-11-20T16:00:00Z'),
      location: 'مركز الشباب - البصرة',
      organizerId: 'user-2',
      governorateId: 'basra',
    },
  ];

  for (const event of events) {
    await prisma.event.upsert({
      where: { id: event.id },
      update: {},
      create: event,
    });
  }

  // Create Governorate Statistics
  console.log('📊 Creating statistics...');
  const stats = [
    { governorateId: 'baghdad', registeredVoters: 5234567, pollingStations: 1250 },
    { governorateId: 'basra', registeredVoters: 2345678, pollingStations: 680 },
    { governorateId: 'nineveh', registeredVoters: 3123456, pollingStations: 890 },
    { governorateId: 'erbil', registeredVoters: 1456789, pollingStations: 420 },
  ];

  for (const stat of stats) {
    await prisma.governorateStatistic.upsert({
      where: { governorateId: stat.governorateId },
      update: {},
      create: stat,
    });
  }

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
