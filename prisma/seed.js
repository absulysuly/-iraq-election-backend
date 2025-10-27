const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Iraqi Governorates Data
const GOVERNORATES = [
  { id: 'baghdad', name: 'بغداد', enName: 'Baghdad', slug: 'baghdad' },
  { id: 'basra', name: 'البصرة', enName: 'Basra', slug: 'basra' },
  { id: 'mosul', name: 'نينوى', enName: 'Nineveh', slug: 'nineveh' },
  { id: 'erbil', name: 'أربيل', enName: 'Erbil', slug: 'erbil' },
  { id: 'najaf', name: 'النجف', enName: 'Najaf', slug: 'najaf' },
  { id: 'karbala', name: 'كربلاء', enName: 'Karbala', slug: 'karbala' },
  { id: 'anbar', name: 'الأنبار', enName: 'Anbar', slug: 'anbar' },
  { id: 'dhi-qar', name: 'ذي قار', enName: 'Dhi Qar', slug: 'dhi-qar' },
  { id: 'maysan', name: 'ميسان', enName: 'Maysan', slug: 'maysan' },
  { id: 'babylon', name: 'بابل', enName: 'Babylon', slug: 'babylon' },
  { id: 'wasit', name: 'واسط', enName: 'Wasit', slug: 'wasit' },
  { id: 'saladin', name: 'صلاح الدين', enName: 'Saladin', slug: 'saladin' },
  { id: 'diyala', name: 'ديالى', enName: 'Diyala', slug: 'diyala' },
  { id: 'muthanna', name: 'المثنى', enName: 'Muthanna', slug: 'muthanna' },
  { id: 'qadisiyyah', name: 'القادسية', enName: 'Qadisiyyah', slug: 'qadisiyyah' },
  { id: 'kirkuk', name: 'كركوك', enName: 'Kirkuk', slug: 'kirkuk' },
  { id: 'sulaymaniyah', name: 'السليمانية', enName: 'Sulaymaniyah', slug: 'sulaymaniyah' },
  { id: 'dohuk', name: 'دهوك', enName: 'Dohuk', slug: 'dohuk' }
];

// Political Parties
const PARTIES = [
  {
    id: 'party_001',
    name: 'التحالف الديمقراطي',
    logoUrl: 'https://i.pravatar.cc/150?img=1',
    leader: 'أحمد محمود',
    founded: 2005,
    description: 'حزب ديمقراطي تقدمي يركز على التنمية المستدامة والشفافية'
  },
  {
    id: 'party_002',
    name: 'حزب التقدم',
    logoUrl: 'https://i.pravatar.cc/150?img=2',
    leader: 'فاطمة السامرائي',
    founded: 2010,
    description: 'حزب يركز على حقوق المرأة والتعليم والصحة'
  },
  {
    id: 'party_003',
    name: 'الوحدة الوطنية',
    logoUrl: 'https://i.pravatar.cc/150?img=3',
    leader: 'حسن الموصلي',
    founded: 2008,
    description: 'حزب وطني يهدف لإعادة الإعمار والتنمية'
  },
  {
    id: 'party_004',
    name: 'حركة الإصلاح',
    logoUrl: 'https://i.pravatar.cc/150?img=4',
    leader: 'ليلى النجفي',
    founded: 2015,
    description: 'حركة إصلاحية تركز على العدالة الاجتماعية'
  },
  {
    id: 'party_005',
    name: 'التحالف الكردستاني',
    logoUrl: 'https://i.pravatar.cc/150?img=5',
    leader: 'برهم صالح',
    founded: 2003,
    description: 'تحالف سياسي كردي يمثل إقليم كردستان'
  },
  {
    id: 'party_006',
    name: 'التيار الوطني',
    logoUrl: 'https://i.pravatar.cc/150?img=6',
    leader: 'عمار الحكيم',
    founded: 2017,
    description: 'تيار سياسي يركز على المصالحة الوطنية'
  }
];

// Candidate Data (Realistic Iraqi Names and Info)
const CANDIDATES_DATA = [
  // Baghdad Candidates
  {
    name: 'أحمد محمود الجبوري',
    governorateId: 'baghdad',
    partyId: 'party_001',
    bio: 'مرشح عن محافظة بغداد. خبرة 15 سنة في الشأن العام والتنمية الحضرية.',
    platformSummary: 'نسعى لبناء عراق حديث يقوم على العدالة والتنمية المستدامة',
    votes: 15420,
    avatarUrl: 'https://i.pravatar.cc/150?img=12'
  },
  {
    name: 'سارة علي البغدادي',
    governorateId: 'baghdad',
    partyId: 'party_002',
    bio: 'ناشطة في حقوق المرأة والمجتمع المدني. عضو البرلمان السابق.',
    platformSummary: 'تمكين المرأة وتحسين الخدمات الصحية والتعليمية',
    votes: 12350,
    avatarUrl: 'https://i.pravatar.cc/150?img=45'
  },
  {
    name: 'كريم حسن الخزرجي',
    governorateId: 'baghdad',
    partyId: 'party_003',
    bio: 'رجل أعمال ومستثمر. يركز على التنمية الاقتصادية.',
    platformSummary: 'خلق فرص عمل ودعم القطاع الخاص',
    votes: 9870,
    avatarUrl: 'https://i.pravatar.cc/150?img=33'
  },

  // Basra Candidates
  {
    name: 'فاطمة علي السامرائي',
    governorateId: 'basra',
    partyId: 'party_002',
    bio: 'محامية ومدافعة عن حقوق الإنسان. ناشطة في قضايا البيئة.',
    platformSummary: 'التعليم والصحة والحفاظ على البيئة أولويتنا',
    votes: 23150,
    avatarUrl: 'https://i.pravatar.cc/150?img=47'
  },
  {
    name: 'عمر البصري',
    governorateId: 'basra',
    partyId: 'party_001',
    bio: 'مهندس نفط. خبير في قطاع الطاقة والموارد الطبيعية.',
    platformSummary: 'استثمار ثروات البصرة لخدمة المواطنين',
    votes: 18900,
    avatarUrl: 'https://i.pravatar.cc/150?img=51'
  },

  // Mosul (Nineveh) Candidates
  {
    name: 'حسن الموصلي',
    governorateId: 'mosul',
    partyId: 'party_003',
    bio: 'عضو سابق في البرلمان. متخصص في إعادة الإعمار.',
    platformSummary: 'إعادة إعمار نينوى وتطوير البنى التحتية',
    votes: 31200,
    avatarUrl: 'https://i.pravatar.cc/150?img=33'
  },
  {
    name: 'ليلى يونس',
    governorateId: 'mosul',
    partyId: 'party_004',
    bio: 'أكاديمية وباحثة. تركز على التعليم وحقوق الأقليات.',
    platformSummary: 'التعايش السلمي وإعادة بناء المجتمع',
    votes: 15600,
    avatarUrl: 'https://i.pravatar.cc/150?img=38'
  },

  // Erbil Candidates
  {
    name: 'زينب الأربيلي',
    governorateId: 'erbil',
    partyId: 'party_005',
    bio: 'سياسية كردية. ناشطة في حقوق الأقليات والمرأة.',
    platformSummary: 'التعايش السلمي وحقوق الجميع في كردستان',
    votes: 19500,
    avatarUrl: 'https://i.pravatar.cc/150?img=44'
  },
  {
    name: 'بيشوا محمد',
    governorateId: 'erbil',
    partyId: 'party_005',
    bio: 'وزير سابق في حكومة الإقليم. خبير اقتصادي.',
    platformSummary: 'تنمية اقتصاد الإقليم وجذب الاستثمارات',
    votes: 22100,
    avatarUrl: 'https://i.pravatar.cc/150?img=52'
  },

  // Najaf Candidates
  {
    name: 'ليلى كريم النجفي',
    governorateId: 'najaf',
    partyId: 'party_004',
    bio: 'محامية ومدافعة عن حقوق الإنسان.',
    platformSummary: 'العدالة الاجتماعية والإصلاح القانوني',
    votes: 18900,
    avatarUrl: 'https://i.pravatar.cc/150?img=28'
  },
  {
    name: 'عادل الياسري',
    governorateId: 'najaf',
    partyId: 'party_001',
    bio: 'رجل دين وناشط اجتماعي.',
    platformSummary: 'خدمة الزائرين وتطوير المدينة المقدسة',
    votes: 25400,
    avatarUrl: 'https://i.pravatar.cc/150?img=15'
  },

  // Karbala Candidates
  {
    name: 'سارة الكربلائي',
    governorateId: 'karbala',
    partyId: 'party_002',
    bio: 'طبيبة ومديرة مستشفى. تركز على تحسين الصحة العامة.',
    platformSummary: 'تطوير القطاع الصحي وخدمات الزائرين',
    votes: 16700,
    avatarUrl: 'https://i.pravatar.cc/150?img=49'
  },

  // Anbar Candidates
  {
    name: 'كريم العبيدي',
    governorateId: 'anbar',
    partyId: 'party_006',
    bio: 'شيخ عشيرة ورجل أعمال. ملتزم بتنمية الأنبار.',
    platformSummary: 'الاستقرار الأمني والتنمية الاقتصادية',
    votes: 27800,
    avatarUrl: 'https://i.pravatar.cc/150?img=51'
  },

  // Dhi Qar Candidates
  {
    name: 'علي الناصري',
    governorateId: 'dhi-qar',
    partyId: 'party_003',
    bio: 'مهندس زراعي. يركز على تنمية القطاع الزراعي.',
    platformSummary: 'إحياء الزراعة وتوفير المياه النظيفة',
    votes: 14200,
    avatarUrl: 'https://i.pravatar.cc/150?img=35'
  },

  // Maysan Candidates
  {
    name: 'نور العمارة',
    governorateId: 'maysan',
    partyId: 'party_002',
    bio: 'مدرّسة ومديرة مدرسة. ناشطة في التعليم.',
    platformSummary: 'تحسين جودة التعليم في ميسان',
    votes: 11500,
    avatarUrl: 'https://i.pravatar.cc/150?img=42'
  },

  // Kirkuk Candidates
  {
    name: 'جمال الكركوكي',
    governorateId: 'kirkuk',
    partyId: 'party_006',
    bio: 'سياسي محنك. يركز على التعايش بين المكونات.',
    platformSummary: 'كركوك للجميع - تعايش وسلام',
    votes: 19800,
    avatarUrl: 'https://i.pravatar.cc/150?img=56'
  },

  // Sulaymaniyah Candidates
  {
    name: 'آلان السليماني',
    governorateId: 'sulaymaniyah',
    partyId: 'party_005',
    bio: 'صحفي وناشط سياسي. مدافع عن حرية الصحافة.',
    platformSummary: 'الديمقراطية وحرية التعبير',
    votes: 17300,
    avatarUrl: 'https://i.pravatar.cc/150?img=58'
  }
];

// Sample Posts
const POSTS_DATA = [
  {
    content: 'نحن ملتزمون بخدمة شعب العراق وبناء مستقبل أفضل لأطفالنا. الشفافية والمساءلة هي أساس عملنا. معاً نبني عراقاً قوياً 🇮🇶',
    type: 'Post',
    likes: 1423,
    comments: 187,
    shares: 94,
    governorates: ['Baghdad', 'Basra'],
    timestamp: new Date('2025-10-26T14:30:00Z')
  },
  {
    content: 'التعليم هو حجر الأساس لأي مجتمع متقدم. سنعمل على تحسين جودة التعليم وتوفير فرص متساوية لجميع الطلاب.',
    type: 'Post',
    likes: 2156,
    comments: 298,
    shares: 156,
    governorates: ['Basra'],
    mediaUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600',
    timestamp: new Date('2025-10-26T10:15:00Z')
  }
];

// Sample Events
const EVENTS_DATA = [
  {
    title: 'لقاء مفتوح مع الناخبين',
    date: new Date('2025-11-05T17:00:00Z'),
    location: 'قاعة بغداد الكبرى',
    governorateId: 'baghdad'
  },
  {
    title: 'مؤتمر التعليم والتنمية',
    date: new Date('2025-11-08T14:00:00Z'),
    location: 'جامعة البصرة',
    governorateId: 'basra'
  }
];

// Seed Function
async function main() {
  console.log('🌱 Starting database seed...\n');

  // Clear existing data
  console.log('🗑️  Clearing existing data...');
  await prisma.debateParticipant.deleteMany();
  await prisma.candidate.deleteMany();
  await prisma.post.deleteMany();
  await prisma.event.deleteMany();
  await prisma.debate.deleteMany();
  await prisma.user.deleteMany();
  await prisma.party.deleteMany();
  await prisma.governorateStatistic.deleteMany();
  await prisma.governorate.deleteMany();
  console.log('✅ Existing data cleared\n');

  // 1. Create Governorates
  console.log('📍 Creating governorates...');
  for (const gov of GOVERNORATES) {
    await prisma.governorate.create({ data: gov });
  }
  console.log(`✅ Created ${GOVERNORATES.length} governorates\n`);

  // 2. Create Parties
  console.log('🏛️  Creating political parties...');
  for (const party of PARTIES) {
    await prisma.party.create({ data: party });
  }
  console.log(`✅ Created ${PARTIES.length} parties\n`);

  // 3. Create Users and Candidates
  console.log('👥 Creating users and candidates...');
  let candidateCount = 0;
  for (const candidate of CANDIDATES_DATA) {
    const userId = `user_${candidateCount + 1}`;
    const candidateId = `candidate_${candidateCount + 1}`;

    // Create User
    const user = await prisma.user.create({
      data: {
        id: userId,
        name: candidate.name,
        avatarUrl: candidate.avatarUrl,
        role: 'Candidate',
        verified: true,
        party: candidate.partyId,
        governorateId: candidate.governorateId,
        bio: candidate.bio
      }
    });

    // Create Candidate profile
    await prisma.candidate.create({
      data: {
        id: candidateId,
        userId: user.id,
        partyId: candidate.partyId,
        platformSummary: candidate.platformSummary,
        votes: candidate.votes
      }
    });

    candidateCount++;
  }
  console.log(`✅ Created ${candidateCount} candidates\n`);

  // 4. Create some voters
  console.log('🗳️  Creating sample voters...');
  for (let i = 0; i < 5; i++) {
    await prisma.user.create({
      data: {
        id: `voter_${i + 1}`,
        name: `ناخب ${i + 1}`,
        avatarUrl: `https://i.pravatar.cc/150?img=${60 + i}`,
        role: 'Voter',
        verified: false,
        party: 'مستقل',
        governorateId: GOVERNORATES[i % GOVERNORATES.length].id,
        bio: 'مواطن عراقي مهتم بمستقبل البلد'
      }
    });
  }
  console.log('✅ Created 5 voters\n');

  // 5. Create Posts
  console.log('📝 Creating posts...');
  const users = await prisma.user.findMany({ where: { role: 'Candidate' }, take: 2 });
  for (let i = 0; i < POSTS_DATA.length && i < users.length; i++) {
    await prisma.post.create({
      data: {
        id: `post_${i + 1}`,
        authorId: users[i].id,
        ...POSTS_DATA[i]
      }
    });
  }
  console.log(`✅ Created ${POSTS_DATA.length} posts\n`);

  // 6. Create Events
  console.log('📅 Creating events...');
  const organizers = await prisma.user.findMany({ where: { role: 'Candidate' }, take: 2 });
  for (let i = 0; i < EVENTS_DATA.length && i < organizers.length; i++) {
    await prisma.event.create({
      data: {
        id: `event_${i + 1}`,
        organizerId: organizers[i].id,
        ...EVENTS_DATA[i]
      }
    });
  }
  console.log(`✅ Created ${EVENTS_DATA.length} events\n`);

  // 7. Create Governorate Statistics
  console.log('📊 Creating governorate statistics...');
  for (const gov of GOVERNORATES) {
    await prisma.governorateStatistic.create({
      data: {
        governorateId: gov.id,
        registeredVoters: Math.floor(Math.random() * 2000000) + 500000,
        pollingStations: Math.floor(Math.random() * 500) + 100
      }
    });
  }
  console.log(`✅ Created statistics for ${GOVERNORATES.length} governorates\n`);

  // 8. Create Dashboard Snapshot
  console.log('📈 Creating dashboard snapshot...');
  await prisma.dashboardSnapshot.create({
    data: {
      id: 1,
      metrics: {
        totalRegisteredVoters: 21500000,
        expectedTurnoutPercentage: 67.5,
        turnoutChangeLastWeek: 2.3,
        approvedCandidatesCount: candidateCount,
        verifiedViolationsCount: 12,
        newViolationsChangeLastWeek: -3
      }
    }
  });
  console.log('✅ Created dashboard snapshot\n');

  console.log('🎉 Database seeding completed successfully!');
  console.log(`\n📊 Summary:`);
  console.log(`   - ${GOVERNORATES.length} Governorates`);
  console.log(`   - ${PARTIES.length} Political Parties`);
  console.log(`   - ${candidateCount} Candidates`);
  console.log(`   - 5 Voters`);
  console.log(`   - ${POSTS_DATA.length} Posts`);
  console.log(`   - ${EVENTS_DATA.length} Events`);
  console.log(`   - Dashboard statistics initialized`);
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
