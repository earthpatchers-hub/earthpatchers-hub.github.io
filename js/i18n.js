/* ============================================
   EarthPatchers — Internationalization (EN/RO)
   ============================================ */

const I18n = {
  currentLang: 'en',

  translations: {
    en: {
      // Navigation
      'nav.overview': 'Overview',
      'nav.mvp': 'MVP (36 months)',
      'nav.next-steps': 'Next Steps',
      'nav.modules': 'Modules',
      'nav.about': 'About Us',
      'nav.contact': 'Contact Us',

      // Module names
      'mod.missions-hq': 'Missions HQ',
      'mod.market-hut': 'Market Hut',
      'mod.eco-shops': 'Eco Shops Directory',
      'mod.green-wall': 'The Green Wall',
      'mod.tribes': 'Tribes',
      'mod.safety-desk': 'Safety Desk',
      'mod.patcher-camp': 'Patcher Camp',
      'mod.earth-side': "Earth's Side of the Story",
      'mod.city-map': 'City Map + City Funds',

      // Overview / Landing
      'hero.tagline': 'Community-Powered Sustainability',
      'hero.subtitle': 'A platform that helps families and young people turn sustainability into real-life action through missions, safe local collaboration, and circular habits \u2014 starting in Cluj.',
      'hero.cta.mvp': 'Explore the MVP Plan',
      'hero.cta.modules': 'Browse Modules',

      'overview.problem.title': 'Why EarthPatchers Exists',
      'overview.problem.text': 'Most people want to help, but real life is busy. Sustainability often feels like too much research, too many choices, too much guilt, and not enough clarity on what actually matters. Young people feel climate anxiety, adults feel time pressure, and communities often lack a simple way to act together.',
      'overview.problem.solution': 'EarthPatchers exists because the missing piece isn\'t "more awareness." It\'s an easy path from intention to action, with support and trust built in.',

      'overview.diff.title': 'What Makes EarthPatchers Different',
      'overview.diff.action.title': 'Action-First',
      'overview.diff.action.text': 'Instead of overwhelming people with information, we start with small, realistic actions that fit into everyday life.',
      'overview.diff.families.title': 'Designed for Families & Youth',
      'overview.diff.families.text': 'Young people care deeply about the future, but they need safe spaces, clear boundaries, and meaningful progress.',
      'overview.diff.practical.title': 'Everyday Practicality',
      'overview.diff.practical.text': 'Circular habits (swap, reuse, repair) are powerful, but only work when they\'re easy and safe to do locally.',
      'overview.diff.local.title': 'Local First, Then Scale',
      'overview.diff.local.text': 'We start with one city (Cluj), build a repeatable model, then expand with community support and partnerships.',

      'overview.how.title': 'How It Works',
      'overview.how.step1.title': 'Pick a mission',
      'overview.how.step1.text': 'Choose one that fits your time and age group',
      'overview.how.step2.title': 'Do the mission',
      'overview.how.step2.text': 'Alone, with friends, or as a group',
      'overview.how.step3.title': 'Track progress',
      'overview.how.step3.text': 'Earn points, badges, and build your personal timeline',
      'overview.how.step4.title': 'Join the community',
      'overview.how.step4.text': 'Participate in challenges and mutual support (optional)',
      'overview.how.step5.title': 'Use circular exchange',
      'overview.how.step5.text': 'Swap, give away, or reuse instead of buying new (optional)',

      'overview.cluj.title': 'Starting in Cluj',
      'overview.cluj.text': 'EarthPatchers starts in Cluj to keep it real, measurable, and community-led. Once it works well locally, it becomes a model that can be repeated elsewhere.',

      'overview.trust.title': 'Trust & Safety',
      'overview.trust.text': 'Youth permissions, moderation, and safe exchange principles are built into every module from day one. Kids can learn and earn while sensitive interactions are handled through adult accounts.',

      'overview.partners.title': 'Partnerships',
      'overview.partners.text': 'EarthPatchers is designed to work alongside schools and NGOs, not replace them. We\'re exploring local partnerships (e.g., Creion\u0103m Viitorul) and future collaboration goals (e.g., T\u0103\u0219uleasa Social) as missions scale.',

      'overview.cta.title': 'Ready to Learn More?',
      'overview.cta.mvp': 'Read the MVP Plan',
      'overview.cta.modules': 'Explore Modules',
      'overview.cta.contact': 'Get in Touch',

      // MVP Page
      'mvp.title': 'MVP \u2014 36-Month Plan',
      'mvp.intro': 'EarthPatchers is starting with a focused MVP that proves the platform works in real life, in Cluj, before we expand. This MVP has three pillars:',

      'mvp.pillar1.title': 'Missions',
      'mvp.pillar1.subtitle': 'Real-world eco actions',
      'mvp.pillar1.text': 'Quick missions (10\u201320 min) and weekend missions (1\u20132 hours), filtered by age, interest, and time. Progress tracked with badges, points, and a personal timeline.',
      'mvp.pillar1.why': 'Missions turn climate anxiety into doable action and give families and youth a clear starting point.',

      'mvp.pillar2.title': 'Youth Community Pilot',
      'mvp.pillar2.subtitle': 'Small, safe, meaningful',
      'mvp.pillar2.text': 'Small pilot groups in Cluj with a realistic rhythm: monthly or seasonal challenges. Clear rules, reporting, and adult/guardian involvement where needed.',
      'mvp.pillar2.why': 'Young people care deeply about their future. This gives them a safe way to contribute without overwhelm.',

      'mvp.pillar3.title': 'Safe Circular Exchange',
      'mvp.pillar3.subtitle': 'Swap, give away, reuse',
      'mvp.pillar3.text': 'Local swap and give-away listings for Cluj. Safety-by-design: clear exchange rules, safe pickup practices, and moderation for suspicious behavior.',
      'mvp.pillar3.why': 'Circular habits are one of the fastest ways to reduce waste, but only work if people trust the system.',

      'mvp.timeline.title': '36-Month Timeline',

      'mvp.phase1.label': 'Phase 1',
      'mvp.phase1.months': 'Months 0\u201312',
      'mvp.phase1.title': 'Prove the Core Loop in Cluj',
      'mvp.phase1.item1': 'Launch the missions library and start tracking progress',
      'mvp.phase1.item2': 'Run the first youth community pilot groups with strong safety rules',
      'mvp.phase1.item3': 'Launch the circular exchange pilot with moderation and safe pickup guidance',
      'mvp.phase1.item4': 'Add the first "learning corner" (small, curated, age-aware)',
      'mvp.phase1.goal': 'Prove people return, participate, and feel safe.',

      'mvp.phase2.label': 'Phase 2',
      'mvp.phase2.months': 'Months 13\u201324',
      'mvp.phase2.title': 'Make It Stronger & Easier to Run',
      'mvp.phase2.item1': 'Improve mission quality and "mission packs" (seasonal collections)',
      'mvp.phase2.item2': 'Expand youth pilot groups if Phase 1 works well',
      'mvp.phase2.item3': 'Improve safe exchange flows (categories, templates, trust signals)',
      'mvp.phase2.item4': 'Grow the learning layer carefully (still staged)',
      'mvp.phase2.goal': 'Reduce admin/moderation effort while improving experience and safety.',

      'mvp.phase3.label': 'Phase 3',
      'mvp.phase3.months': 'Months 25\u201336',
      'mvp.phase3.title': 'Make It Stable & Scale-Ready',
      'mvp.phase3.item1': 'Make the three pillars robust enough for growth',
      'mvp.phase3.item2': 'Ensure safety workflows work at larger scale',
      'mvp.phase3.item3': 'Strengthen the learning layer into clear learning paths connected to missions',
      'mvp.phase3.goal': 'EarthPatchers becomes repeatable as a model, starting from Cluj.',

      'mvp.globe.title': 'The "Globe" Is Staged',
      'mvp.globe.intro': 'Our future learning experience (an "Encarta-like" Earth globe/map) is added step-by-step as a learning layer that supports Missions:',
      'mvp.globe.phase1': 'Phase 1: A small learning corner (simple, clear, age-aware)',
      'mvp.globe.phase2': 'Phase 2: A richer learning map with carefully chosen topics',
      'mvp.globe.phase3': 'Phase 3: More complete learning paths (still focused on clarity and reliability)',
      'mvp.globe.why': 'We want learning to be trustworthy and understandable, not flashy and confusing.',

      'mvp.notincluded.title': 'What the MVP Does NOT Include',
      'mvp.notincluded.text': 'EarthPatchers has many future ideas (eco shops directory, idea backlog, games, city expansion tools). These are not part of the MVP and will be developed as Next Steps, so people don\'t confuse the MVP with everything we might build.',

      'mvp.success.title': 'What Success Looks Like',
      'mvp.success.item1': 'Missions are completed and people return for more',
      'mvp.success.item2': 'Youth participation is safe, supportive, and meaningful',
      'mvp.success.item3': 'Circular exchange works smoothly with trust and moderation',
      'mvp.success.item4': 'The staged learning layer helps people understand "why" and "what to do next"',
      'mvp.success.item5': 'Cluj becomes a strong foundation for future expansion',

      // Next Steps
      'nextsteps.title': 'Next Steps',
      'nextsteps.intro': 'Beyond the MVP, EarthPatchers envisions a rich ecosystem of modules. These will be shaped by community voting and feasibility through the Green Wall.',
      'nextsteps.explore': 'Explore',

      // Module pages
      'module.features': 'Key Features',
      'module.why': 'Why It Matters',
      'module.mvp-badge': 'In MVP',
      'module.future-badge': 'Future Module',
      'module.coming-soon': 'This section is still growing. We\'re developing detailed content here. Check back soon or get in touch to learn more.',
      'module.prev': '\u2190 Previous',
      'module.next': 'Next \u2192',

      // Missions HQ
      'missions-hq.title': 'Missions HQ',
      'missions-hq.subtitle': 'Missions to Save the Earth',
      'missions-hq.desc': 'The central hub for eco missions \u2014 micro, mini, and weekend challenges filtered by area, age, and interests. Short missions designed for families and schools, with badges, points, and visible progress.',
      'missions-hq.why': 'Missions turn climate anxiety into doable action. They give families and youth a clear starting point with a habit-first approach: 1\u20133 missions per month is a realistic, sustainable target.',
      'missions-hq.f1': 'Quick missions (10\u201320 min) and weekend missions (1\u20132 hours)',
      'missions-hq.f2': 'Filtered by age group, interest, and time available',
      'missions-hq.f3': 'Progress tracked with badges, points, and a personal timeline',
      'missions-hq.f4': 'Seasonal mission packs and partner mission imports (NGOs, schools)',
      'missions-hq.f5': 'Habit-first approach: built to launch in small steps, then connect into one journey',

      // Market Hut
      'market-hut.title': 'Market Hut',
      'market-hut.subtitle': 'Swap & Reuse',
      'market-hut.desc': 'Swaps, giveaways, and reuse, plus a future-friendly "borrow library" (tools, books, kids gear). A practical community hook that keeps people coming back.',
      'market-hut.why': 'Circular habits are one of the fastest ways to reduce waste. Market Hut makes it safe, easy, and social \u2014 connecting directly to missions so reuse becomes a habit, not a one-time act.',
      'market-hut.f1': 'Swap and give-away listings focused locally',
      'market-hut.f2': 'Safe-by-design: adult-managed exchanges, clear rules, safe pickup points',
      'market-hut.f3': 'Missions connect directly to circular habits: donate, repair, reuse',
      'market-hut.f4': 'Future: "borrow library" for tools, books, and kids gear',

      // Eco Shops
      'eco-shops.title': 'Eco Shops Directory',
      'eco-shops.subtitle': 'Green Shops',
      'eco-shops.desc': 'A curated local directory of sustainable shops and products, starting in Cluj. Clear criteria, community contributions, and city-by-city expansion.',
      'eco-shops.why': 'Finding truly sustainable shops is hard. This directory makes it simple with clear criteria and community-driven reviews, helping people make better purchasing choices.',
      'eco-shops.f1': 'Curated local directory of sustainable shops and products',
      'eco-shops.f2': 'Clear criteria: refill, compostable, recycled/reclaimed, repairable',
      'eco-shops.f3': 'Community contributions via template: photos, location, pros/cons',
      'eco-shops.f4': 'City-by-city expansion driven by voting and local support',

      // Green Wall
      'green-wall.title': 'The Green Wall',
      'green-wall.subtitle': 'Community Ideas & Skills',
      'green-wall.desc': 'A public startup-style idea backlog where the community votes on Impact + Feasibility. People join ideas with their skills, and ideas rise as teams form and funding appears.',
      'green-wall.why': 'Good ideas need more than enthusiasm \u2014 they need skills, teamwork, and sometimes funding. The Green Wall turns community energy into real projects.',
      'green-wall.f1': 'Public idea backlog with community voting (Impact + Feasibility)',
      'green-wall.f2': 'Join ideas with your skills: design, education, dev, legal, ops',
      'green-wall.f3': 'Ideas rise when teams form and funding/mentors appear',
      'green-wall.f4': 'Optional angel/sponsor pathway for ideas that need funding',

      // Tribes
      'tribes.title': 'Tribes',
      'tribes.subtitle': 'Local Communities',
      'tribes.desc': 'Local groups (neighbourhood/city) for challenges, meetups, and mutual support. A realistic rhythm: monthly or seasonal, not weekly obligations.',
      'tribes.why': 'Sustainability is more than tasks \u2014 it\'s about belonging. Tribes turn the platform into a community where people support each other and act together.',
      'tribes.f1': 'Local groups for challenges, meetups, and mutual support',
      'tribes.f2': 'Realistic rhythm: monthly or seasonal, not weekly pressure',
      'tribes.f3': 'Integrates with schools, afterschool programs, and local NGOs',
      'tribes.f4': 'Turns the platform into belonging, not just an app',

      // Safety Desk
      'safety-desk.title': 'Safety Desk',
      'safety-desk.subtitle': 'Moderation & Trust',
      'safety-desk.desc': 'Safety, moderation, reporting, permissions, and clear community rules \u2014 especially for kids. Plain-language policies that everyone can understand.',
      'safety-desk.why': 'For a platform involving youth, safety isn\'t an add-on \u2014 it\'s the foundation. The Safety Desk ensures every interaction is protected, transparent, and age-appropriate.',
      'safety-desk.f1': 'Kids can learn and earn; sensitive interactions via adult accounts',
      'safety-desk.f2': 'Anti-spam/anti-scam basics, dispute flow, simple audit trail',
      'safety-desk.f3': 'Plain-language policies: what\'s allowed, what isn\'t, how we respond',
      'safety-desk.f4': 'Clear reporting and moderation workflows',

      // Patcher Camp
      'patcher-camp.title': 'Patcher Camp',
      'patcher-camp.subtitle': 'The Game',
      'patcher-camp.desc': 'A cooperative game across climate zones where youth solve real problems using skills-as-superpowers. Elements: Earth, Water, Fire, Wind.',
      'patcher-camp.why': 'Games make learning irresistible. Patcher Camp connects play to real-world action, helping young people see their skills as superpowers for the planet.',
      'patcher-camp.f1': 'Cooperative gameplay across climate zones',
      'patcher-camp.f2': 'Four elements: Earth (materials), Water (resources), Fire (energy), Wind (mobility)',
      'patcher-camp.f3': 'Wizard Tent: zero-waste recipes + calm debrief space (ages 14\u201318)',
      'patcher-camp.f4': 'Tiny real-life tasks (cleaning, repair, cooking, upcycling) linked to missions',

      // Earth's Side of the Story
      'earth-side.title': "Earth's Side of the Story",
      'earth-side.subtitle': 'Interactive Learning Globe',
      'earth-side.desc': 'An "Encarta-like" globe/map learning experience: pollutants, climate hazards, and plain-language stats. Learning paths with quizzes and games that unlock regions, badges, and new skills.',
      'earth-side.why': 'Understanding "why" is the bridge between action and lasting change. This module makes climate science accessible, age-appropriate, and emotionally safe.',
      'earth-side.f1': 'Globe/map learning experience with pollutants, climate hazards, plain-language stats',
      'earth-side.f2': 'Learning paths + quizzes/games that unlock regions, badges, skills',
      'earth-side.f3': 'Age-aware content: 5\u20137, 8\u201311, 12\u201314, 14\u201318',
      'earth-side.f4': 'Emotional safety in mind; trusted data layers added over time',

      // City Map + City Funds
      'city-map.title': 'City Map + City Funds',
      'city-map.subtitle': 'City Expansion',
      'city-map.desc': 'Start with Cluj on the map, then let the community vote on the next cities. Transparent "City Funds" show what gets delivered at 30%, 60%, and 100%.',
      'city-map.why': 'Scaling should be transparent and community-driven. City Funds let everyone see where resources go, and voting ensures expansion reflects real demand.',
      'city-map.f1': 'Start with Cluj, community votes the next cities/areas',
      'city-map.f2': 'Transparent City Funds per city: deliverables at 30/60/100%',
      'city-map.f3': 'Expansion via sponsorship/donations or local volunteering',
      'city-map.f4': 'Easy replication with quality guardrails: templates, mentors, moderation',

      // Module short descriptions (for Next Steps cards)
      'mod.missions-hq.short': 'The central hub for eco missions \u2014 micro, mini, and weekend challenges for families and youth.',
      'mod.market-hut.short': 'Swaps, giveaways, and reuse. A safe, community-driven circular exchange.',
      'mod.eco-shops.short': 'A curated local directory of sustainable shops and products.',
      'mod.green-wall.short': 'Community idea backlog with voting, skill-matching, and team formation.',
      'mod.tribes.short': 'Local groups for challenges, meetups, and mutual support.',
      'mod.safety-desk.short': 'Safety, moderation, and clear community rules for everyone.',
      'mod.patcher-camp.short': 'A cooperative game where youth solve real problems as superpowers.',
      'mod.earth-side.short': 'An interactive globe for learning about climate, pollution, and solutions.',
      'mod.city-map.short': 'City-by-city expansion with transparent funding and community voting.',

      // About Us
      'about.title': 'About Us',
      'about.mission.title': 'Our Mission',
      'about.mission.text': 'To make sustainable living feel doable, social, and rewarding by giving people clear actions (missions), a safe community to learn together, and practical ways to reuse instead of waste.',
      'about.vision.title': 'Our Vision',
      'about.vision.text': 'A world where doing good for the planet is as normal as brushing your teeth: simple habits, local support, and young people growing up with the skills and confidence to protect their future.',
      'about.vision.expand': 'Over time, EarthPatchers can expand city-by-city into a network of communities that take measurable local action, learn why it matters in an age-appropriate way, and make circular living accessible to everyone.',
      'about.why.title': 'Why EarthPatchers',
      'about.why.text': 'The missing piece isn\'t more awareness. It\'s an easy path from intention to action, with support and trust built in. EarthPatchers bridges the gap between wanting to help and knowing how.',
      'about.values.title': 'Our Values',
      'about.value1.title': 'Sustainability',
      'about.value1.text': 'Real action over awareness campaigns. Small steps that add up to lasting change.',
      'about.value2.title': 'Community',
      'about.value2.text': 'Local support, shared missions, and the power of acting together.',
      'about.value3.title': 'Transparency',
      'about.value3.text': 'Open plans, community voting, and clear funding accountability.',
      'about.value4.title': 'Child Safety',
      'about.value4.text': 'Privacy-by-design, age-appropriate content, and guardian involvement at every step.',
      'about.how.title': 'How We Work',
      'about.how.text': 'We work through partnerships with schools and NGOs, pilot programs in Cluj, and community voting to decide what gets built next. Everything starts small, gets tested, and grows based on real feedback.',

      // Contact Us
      'contact.title': 'Contact Us',
      'contact.intro': 'Whether you\'re a parent, teacher, NGO, potential partner, or just curious \u2014 we\'d love to hear from you.',
      'contact.name': 'Your Name',
      'contact.email': 'Email Address',
      'contact.role': 'I am a...',
      'contact.role.select': '-- Select --',
      'contact.role.parent': 'Parent / Family',
      'contact.role.teacher': 'Teacher / Educator',
      'contact.role.youth': 'Young Person',
      'contact.role.ngo': 'NGO / Organization',
      'contact.role.partner': 'Potential Partner',
      'contact.role.funder': 'Funder / Sponsor',
      'contact.role.other': 'Other',
      'contact.message': 'Message',
      'contact.gdpr': 'I agree that my data will be stored to process my inquiry.',
      'contact.privacy': 'Privacy Policy',
      'contact.submit': 'Send Message',
      'contact.thanks': 'Thank you! Your message has been sent. We\'ll be in touch soon.',

      // Footer
      'footer.text': 'EarthPatchers \u2014 Community-powered sustainability, starting in Cluj.',
    },

    ro: {
      // Navigation
      'nav.overview': 'Prezentare',
      'nav.mvp': 'MVP (36 luni)',
      'nav.next-steps': 'Pa\u0219i Urm\u0103tori',
      'nav.modules': 'Module',
      'nav.about': 'Despre Noi',
      'nav.contact': 'Contact',

      // Module names
      'mod.missions-hq': 'Centrul de Misiuni',
      'mod.market-hut': 'Pia\u021ba Verde',
      'mod.eco-shops': 'Director Magazine Eco',
      'mod.green-wall': 'Peretele Verde',
      'mod.tribes': 'Triburi',
      'mod.safety-desk': 'Biroul de Siguran\u021b\u0103',
      'mod.patcher-camp': 'Tab\u0103ra Patcher',
      'mod.earth-side': 'Povestea P\u0103m\u00e2ntului',
      'mod.city-map': 'Harta Ora\u0219elor + Fonduri',

      // Overview / Landing
      'hero.tagline': 'Sustenabilitate Ghidat\u0103 de Comunitate',
      'hero.subtitle': 'O platform\u0103 care ajut\u0103 familiile \u0219i tinerii s\u0103 transforme sustenabilitatea \u00een ac\u021biune real\u0103 prin misiuni, colaborare local\u0103 sigur\u0103 \u0219i obiceiuri circulare \u2014 \u00eencep\u00e2nd din Cluj.',
      'hero.cta.mvp': 'Exploreaz\u0103 Planul MVP',
      'hero.cta.modules': 'Descoper\u0103 Modulele',

      'overview.problem.title': 'De Ce Exist\u0103 EarthPatchers',
      'overview.problem.text': 'Majoritatea oamenilor vor s\u0103 ajute, dar via\u021ba real\u0103 e agitat\u0103. Sustenabilitatea pare adesea prea mult\u0103 cercetare, prea multe op\u021biuni, prea mult\u0103 vin\u0103 \u0219i prea pu\u021bin\u0103 claritate despre ce conteaz\u0103 cu adev\u0103rat. Tinerii simt anxietate climatic\u0103, adul\u021bii simt presiunea timpului, iar comunit\u0103\u021bile nu au o modalitate simpl\u0103 de a ac\u021biona \u00eempreun\u0103.',
      'overview.problem.solution': 'EarthPatchers exist\u0103 pentru c\u0103 piesa lips\u0103 nu e "mai mult\u0103 con\u0219tientizare." E un drum u\u0219or de la inten\u021bie la ac\u021biune, cu sprijin \u0219i \u00eencredere integrate.',

      'overview.diff.title': 'Ce Face EarthPatchers Diferit',
      'overview.diff.action.title': 'Ac\u021biune \u00een Primul R\u00e2nd',
      'overview.diff.action.text': '\u00cen loc s\u0103 coplesi\u021bi oamenii cu informa\u021bii, \u00eencepem cu ac\u021biuni mici, realiste, care se potrivesc \u00een via\u021ba de zi cu zi.',
      'overview.diff.families.title': 'Creat pentru Familii & Tineri',
      'overview.diff.families.text': 'Tinerii le pas\u0103 profund de viitor, dar au nevoie de spa\u021bii sigure, limite clare \u0219i progres semnificativ.',
      'overview.diff.practical.title': 'Practic \u00een Fiecare Zi',
      'overview.diff.practical.text': 'Obiceiurile circulare (schimb, reutilizare, repara\u021bie) sunt puternice, dar func\u021bioneaz\u0103 doar c\u00e2nd sunt u\u0219oare \u0219i sigure local.',
      'overview.diff.local.title': 'Local \u00cent\u00e2i, Apoi Scal\u0103m',
      'overview.diff.local.text': '\u00cencepem cu un ora\u0219 (Cluj), construim un model repetabil, apoi expand\u0103m cu sprijinul comunit\u0103\u021bii \u0219i parteneriate.',

      'overview.how.title': 'Cum Func\u021bioneaz\u0103',
      'overview.how.step1.title': 'Alege o misiune',
      'overview.how.step1.text': 'Alege una care se potrive\u0219te timpului \u0219i grupei tale de v\u00e2rst\u0103',
      'overview.how.step2.title': '\u00cendepline\u0219te misiunea',
      'overview.how.step2.text': 'Singur, cu prietenii, sau \u00een grup',
      'overview.how.step3.title': 'Urm\u0103re\u0219te progresul',
      'overview.how.step3.text': 'C\u00e2\u0219tig\u0103 puncte, insigne \u0219i construie\u0219te-\u021bi cronologia personal\u0103',
      'overview.how.step4.title': 'Al\u0103tur\u0103-te comunit\u0103\u021bii',
      'overview.how.step4.text': 'Particip\u0103 la provoc\u0103ri \u0219i sprijin reciproc (op\u021bional)',
      'overview.how.step5.title': 'Folose\u0219te schimbul circular',
      'overview.how.step5.text': 'Schimb\u0103, d\u0103ruie\u0219te sau reutilizeaz\u0103 \u00een loc s\u0103 cumperi nou (op\u021bional)',

      'overview.cluj.title': '\u00cencepe \u00een Cluj',
      'overview.cluj.text': 'EarthPatchers \u00eencepe \u00een Cluj pentru a fi real, m\u0103surabil \u0219i condus de comunitate. Odat\u0103 ce func\u021bioneaz\u0103 bine local, devine un model ce poate fi replicat \u00een alte ora\u0219e.',

      'overview.trust.title': '\u00cencredere & Siguran\u021b\u0103',
      'overview.trust.text': 'Permisiunile pentru tineri, moderarea \u0219i principiile de schimb sigur sunt integrate \u00een fiecare modul din prima zi. Copiii pot \u00eenv\u0103\u021ba \u0219i c\u00e2\u0219tiga, \u00een timp ce interac\u021biunile sensibile sunt gestionate prin conturile adul\u021bilor.',

      'overview.partners.title': 'Parteneriate',
      'overview.partners.text': 'EarthPatchers este conceput s\u0103 lucreze al\u0103turi de \u0219coli \u0219i ONG-uri, nu s\u0103 le \u00eenlocuiasc\u0103. Explor\u0103m parteneriate locale (ex: Creion\u0103m Viitorul) \u0219i obiective de colaborare viitoare (ex: T\u0103\u0219uleasa Social) pe m\u0103sur\u0103 ce misiunile se extind.',

      'overview.cta.title': 'Vrei S\u0103 Afli Mai Multe?',
      'overview.cta.mvp': 'Cite\u0219te Planul MVP',
      'overview.cta.modules': 'Exploreaz\u0103 Modulele',
      'overview.cta.contact': 'Contacteaz\u0103-ne',

      // MVP Page
      'mvp.title': 'MVP \u2014 Plan pe 36 de Luni',
      'mvp.intro': 'EarthPatchers \u00eencepe cu un MVP concentrat care dovede\u0219te c\u0103 platforma func\u021bioneaz\u0103 \u00een via\u021ba real\u0103, \u00een Cluj, \u00eenainte de a ne extinde. Acest MVP are trei piloni:',

      'mvp.pillar1.title': 'Misiuni',
      'mvp.pillar1.subtitle': 'Ac\u021biuni eco reale',
      'mvp.pillar1.text': 'Misiuni rapide (10\u201320 min) \u0219i misiuni de weekend (1\u20132 ore), filtrate dup\u0103 v\u00e2rst\u0103, interes \u0219i timp. Progresul urm\u0103rit cu insigne, puncte \u0219i o cronologie personal\u0103.',
      'mvp.pillar1.why': 'Misiunile transform\u0103 anxietatea climatic\u0103 \u00een ac\u021biune realizabil\u0103 \u0219i ofer\u0103 familiilor \u0219i tinerilor un punct de plecare clar.',

      'mvp.pillar2.title': 'Pilot Comunitar pentru Tineri',
      'mvp.pillar2.subtitle': 'Mic, sigur, semnificativ',
      'mvp.pillar2.text': 'Grupuri pilot mici \u00een Cluj cu un ritm realist: provoc\u0103ri lunare sau sezoniere. Reguli clare, raportare \u0219i implicarea adul\u021bilor/tutorilor unde e necesar.',
      'mvp.pillar2.why': 'Tinerilor le pas\u0103 profund de viitorul lor. Aceasta le ofer\u0103 o modalitate sigur\u0103 de a contribui f\u0103r\u0103 a fi coplesi\u021bi.',

      'mvp.pillar3.title': 'Schimb Circular Sigur',
      'mvp.pillar3.subtitle': 'Schimb\u0103, d\u0103ruie\u0219te, reutilizeaz\u0103',
      'mvp.pillar3.text': 'Anun\u021buri locale de schimb \u0219i d\u0103ruire pentru Cluj. Siguran\u021b\u0103 prin design: reguli clare de schimb, practici sigure de ridicare \u0219i moderare.',
      'mvp.pillar3.why': 'Obiceiurile circulare sunt una dintre cele mai rapide modalit\u0103\u021bi de a reduce risipa, dar func\u021bioneaz\u0103 doar dac\u0103 oamenii au \u00eencredere \u00een sistem.',

      'mvp.timeline.title': 'Cronologie pe 36 de Luni',

      'mvp.phase1.label': 'Faza 1',
      'mvp.phase1.months': 'Lunile 0\u201312',
      'mvp.phase1.title': 'Dovedim Bucla Principal\u0103 \u00een Cluj',
      'mvp.phase1.item1': 'Lans\u0103m biblioteca de misiuni \u0219i \u00eencepem s\u0103 urm\u0103rim progresul',
      'mvp.phase1.item2': 'Rul\u0103m primele grupuri pilot pentru tineri cu reguli stricte de siguran\u021b\u0103',
      'mvp.phase1.item3': 'Lans\u0103m pilotul de schimb circular cu moderare \u0219i ghidare pentru ridicare sigur\u0103',
      'mvp.phase1.item4': 'Ad\u0103ug\u0103m primul "col\u021b de \u00eenv\u0103\u021bare" (simplu, curat, adaptat v\u00e2rstei)',
      'mvp.phase1.goal': 'Dovedim c\u0103 oamenii revin, particip\u0103 \u0219i se simt \u00een siguran\u021b\u0103.',

      'mvp.phase2.label': 'Faza 2',
      'mvp.phase2.months': 'Lunile 13\u201324',
      'mvp.phase2.title': 'Facem Totul Mai Puternic & Mai U\u0219or de Gestionat',
      'mvp.phase2.item1': '\u00cembun\u0103t\u0103\u021bim calitatea misiunilor \u0219i "pachetele de misiuni" (colec\u021bii sezoniere)',
      'mvp.phase2.item2': 'Extindem grupurile pilot dac\u0103 Faza 1 func\u021bioneaz\u0103 bine',
      'mvp.phase2.item3': '\u00cembun\u0103t\u0103\u021bim fluxurile de schimb sigur (categorii, \u0219abloane, semnale de \u00eencredere)',
      'mvp.phase2.item4': 'Dezvolt\u0103m stratul de \u00eenv\u0103\u021bare cu grij\u0103 (tot etapizat)',
      'mvp.phase2.goal': 'Reducem efortul de administrare/moderare \u00eembun\u0103t\u0103\u021bind experien\u021ba \u0219i siguran\u021ba.',

      'mvp.phase3.label': 'Faza 3',
      'mvp.phase3.months': 'Lunile 25\u201336',
      'mvp.phase3.title': 'Facem Totul Stabil & Preg\u0103tit pentru Scalare',
      'mvp.phase3.item1': 'Facem cei trei piloni suficient de robu\u0219ti pentru cre\u0219tere',
      'mvp.phase3.item2': 'Ne asigur\u0103m c\u0103 fluxurile de siguran\u021b\u0103 func\u021bioneaz\u0103 la scar\u0103 mai mare',
      'mvp.phase3.item3': '\u00cent\u0103rim stratul de \u00eenv\u0103\u021bare \u00een c\u0103i clare de \u00eenv\u0103\u021bare conectate la misiuni',
      'mvp.phase3.goal': 'EarthPatchers devine un model repetabil, pornind din Cluj.',

      'mvp.globe.title': '"Globul" Este Etapizat',
      'mvp.globe.intro': 'Experien\u021ba noastr\u0103 viitoare de \u00eenv\u0103\u021bare (un glob/hart\u0103 interactiv\u0103 "tip Encarta") este ad\u0103ugat\u0103 pas cu pas ca strat de \u00eenv\u0103\u021bare care sus\u021bine Misiunile:',
      'mvp.globe.phase1': 'Faza 1: Un col\u021b mic de \u00eenv\u0103\u021bare (simplu, clar, adaptat v\u00e2rstei)',
      'mvp.globe.phase2': 'Faza 2: O hart\u0103 de \u00eenv\u0103\u021bare mai bogat\u0103 cu teme alese cu grij\u0103',
      'mvp.globe.phase3': 'Faza 3: C\u0103i de \u00eenv\u0103\u021bare mai complete (focusate pe claritate \u0219i fiabilitate)',
      'mvp.globe.why': 'Vrem ca \u00eenv\u0103\u021barea s\u0103 fie demn\u0103 de \u00eencredere \u0219i u\u0219or de \u00een\u021beles, nu str\u0103lucitoare \u0219i confuz\u0103.',

      'mvp.notincluded.title': 'Ce NU Include MVP-ul',
      'mvp.notincluded.text': 'EarthPatchers are multe idei viitoare (director de magazine eco, backlog de idei, jocuri, instrumente de expansiune). Acestea nu fac parte din MVP \u0219i vor fi dezvoltate ca Pa\u0219i Urm\u0103tori.',

      'mvp.success.title': 'Cum Arat\u0103 Succesul',
      'mvp.success.item1': 'Misiunile sunt completate \u0219i oamenii revin pentru mai multe',
      'mvp.success.item2': 'Participarea tinerilor este sigur\u0103, suportiv\u0103 \u0219i semnificativ\u0103',
      'mvp.success.item3': 'Schimbul circular func\u021bioneaz\u0103 lin cu \u00eencredere \u0219i moderare',
      'mvp.success.item4': 'Stratul de \u00eenv\u0103\u021bare etapizat ajut\u0103 oamenii s\u0103 \u00een\u021beleag\u0103 "de ce" \u0219i "ce urmeaz\u0103"',
      'mvp.success.item5': 'Clujul devine o funda\u021bie solid\u0103 pentru expansiunea viitoare',

      // Next Steps
      'nextsteps.title': 'Pa\u0219i Urm\u0103tori',
      'nextsteps.intro': 'Dincolo de MVP, EarthPatchers \u00ee\u0219i propune un ecosistem bogat de module. Acestea vor fi modelate prin votul comunit\u0103\u021bii \u0219i fezabilitate prin Peretele Verde.',
      'nextsteps.explore': 'Exploreaz\u0103',

      // Module pages
      'module.features': 'Caracteristici Cheie',
      'module.why': 'De Ce Conteaz\u0103',
      'module.mvp-badge': '\u00cen MVP',
      'module.future-badge': 'Modul Viitor',
      'module.coming-soon': 'Aceast\u0103 sec\u021biune este \u00een cre\u0219tere. Dezvolt\u0103m con\u021binut detaliat aici. Reveni\u021bi cur\u00e2nd sau contacta\u021bi-ne pentru mai multe informa\u021bii.',
      'module.prev': '\u2190 Anterior',
      'module.next': 'Urm\u0103tor \u2192',

      // Missions HQ
      'missions-hq.title': 'Centrul de Misiuni',
      'missions-hq.subtitle': 'Misiuni pentru a Salva P\u0103m\u00e2ntul',
      'missions-hq.desc': 'Hub-ul central pentru misiuni eco \u2014 micro, mini \u0219i provoc\u0103ri de weekend, filtrate dup\u0103 zon\u0103, v\u00e2rst\u0103 \u0219i interese. Misiuni scurte concepute pentru familii \u0219i \u0219coli, cu insigne, puncte \u0219i progres vizibil.',
      'missions-hq.why': 'Misiunile transform\u0103 anxietatea climatic\u0103 \u00een ac\u021biune realizabil\u0103. Ofer\u0103 familiilor \u0219i tinerilor un punct de plecare clar, cu o abordare bazat\u0103 pe obiceiuri: 1\u20133 misiuni pe lun\u0103 este o \u021bint\u0103 realist\u0103 \u0219i sustenabil\u0103.',
      'missions-hq.f1': 'Misiuni rapide (10\u201320 min) \u0219i misiuni de weekend (1\u20132 ore)',
      'missions-hq.f2': 'Filtrate dup\u0103 grup\u0103 de v\u00e2rst\u0103, interes \u0219i timp disponibil',
      'missions-hq.f3': 'Progres urm\u0103rit cu insigne, puncte \u0219i o cronologie personal\u0103',
      'missions-hq.f4': 'Pachete de misiuni sezoniere \u0219i import de misiuni de la parteneri (ONG-uri, \u0219coli)',
      'missions-hq.f5': 'Abordare bazat\u0103 pe obiceiuri: construit pas cu pas, apoi conectat \u00eentr-o c\u0103l\u0103torie',

      // Market Hut
      'market-hut.title': 'Pia\u021ba Verde',
      'market-hut.subtitle': 'Schimb & Reutilizare',
      'market-hut.desc': 'Schimburi, d\u0103ruiri \u0219i reutilizare, plus o viitoare "bibliotec\u0103 de \u00eemprumut" (unelte, c\u0103r\u021bi, articole pentru copii). Un punct de atrac\u021bie comunitar practic.',
      'market-hut.why': 'Obiceiurile circulare sunt una dintre cele mai rapide modalit\u0103\u021bi de a reduce risipa. Pia\u021ba Verde le face sigure, u\u0219oare \u0219i sociale \u2014 conect\u00e2ndu-se direct la misiuni.',
      'market-hut.f1': 'Anun\u021buri de schimb \u0219i d\u0103ruire focusate local',
      'market-hut.f2': 'Siguran\u021b\u0103 prin design: schimburi gestionate de adul\u021bi, reguli clare, puncte sigure',
      'market-hut.f3': 'Misiunile se conecteaz\u0103 direct la obiceiuri circulare: doneaz\u0103, repar\u0103, reutilizeaz\u0103',
      'market-hut.f4': 'Viitor: "bibliotec\u0103 de \u00eemprumut" pentru unelte, c\u0103r\u021bi \u0219i articole pentru copii',

      // Eco Shops
      'eco-shops.title': 'Director Magazine Eco',
      'eco-shops.subtitle': 'Magazine Verzi',
      'eco-shops.desc': 'Un director local curat de magazine \u0219i produse sustenabile, \u00eencep\u00e2nd din Cluj. Criterii clare, contribu\u021bii ale comunit\u0103\u021bii \u0219i expansiune ora\u0219 cu ora\u0219.',
      'eco-shops.why': 'G\u0103sirea magazinelor cu adev\u0103rat sustenabile e dificil\u0103. Acest director simplific\u0103 lucrurile cu criterii clare \u0219i recenzii din comunitate.',
      'eco-shops.f1': 'Director local curat de magazine \u0219i produse sustenabile',
      'eco-shops.f2': 'Criterii clare: reumplere, compostabil, reciclat/recuperat, reparabil',
      'eco-shops.f3': 'Contribu\u021bii ale comunit\u0103\u021bii prin \u0219ablon: poze, loca\u021bie, avantaje/dezavantaje',
      'eco-shops.f4': 'Expansiune ora\u0219 cu ora\u0219 prin vot \u0219i sprijin local',

      // Green Wall
      'green-wall.title': 'Peretele Verde',
      'green-wall.subtitle': 'Idei & Competen\u021be Comunitare',
      'green-wall.desc': 'Un backlog public de idei \u00een stil startup unde comunitatea voteaz\u0103 pe Impact + Fezabilitate. Oamenii se al\u0103tur\u0103 ideilor cu competen\u021bele lor.',
      'green-wall.why': 'Ideile bune au nevoie de mai mult dec\u00e2t entuziasm \u2014 au nevoie de competen\u021be, munc\u0103 \u00een echip\u0103 \u0219i uneori finan\u021bare. Peretele Verde transform\u0103 energia comunit\u0103\u021bii \u00een proiecte reale.',
      'green-wall.f1': 'Backlog public de idei cu vot comunitar (Impact + Fezabilitate)',
      'green-wall.f2': 'Al\u0103tur\u0103-te ideilor cu competen\u021bele tale: design, educa\u021bie, dev, juridic, opera\u021biuni',
      'green-wall.f3': 'Ideile cresc c\u00e2nd echipele se formeaz\u0103 \u0219i apar finan\u021barea/mentorii',
      'green-wall.f4': 'Cale op\u021bional\u0103 pentru investitori/sponsori pentru ideile care au nevoie de finan\u021bare',

      // Tribes
      'tribes.title': 'Triburi',
      'tribes.subtitle': 'Comunit\u0103\u021bi Locale',
      'tribes.desc': 'Grupuri locale (cartier/ora\u0219) pentru provoc\u0103ri, \u00eent\u00e2lniri \u0219i sprijin reciproc. Un ritm realist: lunar sau sezonier, nu obliga\u021bii s\u0103pt\u0103m\u00e2nale.',
      'tribes.why': 'Sustenabilitatea e mai mult dec\u00e2t sarcini \u2014 e despre a apar\u021bine. Triburile transform\u0103 platforma \u00eentr-o comunitate unde oamenii se sus\u021bin reciproc.',
      'tribes.f1': 'Grupuri locale pentru provoc\u0103ri, \u00eent\u00e2lniri \u0219i sprijin reciproc',
      'tribes.f2': 'Ritm realist: lunar sau sezonier, f\u0103r\u0103 presiune s\u0103pt\u0103m\u00e2nal\u0103',
      'tribes.f3': 'Se integreaz\u0103 cu \u0219colile, programele after-school \u0219i ONG-urile locale',
      'tribes.f4': 'Transform\u0103 platforma \u00een apartenen\u021b\u0103, nu doar o aplica\u021bie',

      // Safety Desk
      'safety-desk.title': 'Biroul de Siguran\u021b\u0103',
      'safety-desk.subtitle': 'Moderare & \u00cencredere',
      'safety-desk.desc': 'Siguran\u021b\u0103, moderare, raportare, permisiuni \u0219i reguli clare ale comunit\u0103\u021bii \u2014 mai ales pentru copii. Politici \u00een limbaj simplu pe care oricine le poate \u00een\u021belege.',
      'safety-desk.why': 'Pentru o platform\u0103 care implic\u0103 tineri, siguran\u021ba nu e un adaos \u2014 e funda\u021bia. Biroul de Siguran\u021b\u0103 asigur\u0103 c\u0103 fiecare interac\u021biune este protejat\u0103 \u0219i adecvat\u0103 v\u00e2rstei.',
      'safety-desk.f1': 'Copiii pot \u00eenv\u0103\u021ba \u0219i c\u00e2\u0219tiga; interac\u021biunile sensibile prin conturile adul\u021bilor',
      'safety-desk.f2': 'Baze anti-spam/anti-\u00een\u0219el\u0103torie, flux de dispute, audit simplu',
      'safety-desk.f3': 'Politici \u00een limbaj simplu: ce e permis, ce nu, cum r\u0103spundem',
      'safety-desk.f4': 'Fluxuri clare de raportare \u0219i moderare',

      // Patcher Camp
      'patcher-camp.title': 'Tab\u0103ra Patcher',
      'patcher-camp.subtitle': 'Jocul',
      'patcher-camp.desc': 'Un joc cooperativ prin zone climatice unde tinerii rezolv\u0103 probleme reale folosind competen\u021be-superputeri. Elemente: P\u0103m\u00e2nt, Ap\u0103, Foc, V\u00e2nt.',
      'patcher-camp.why': 'Jocurile fac \u00eenv\u0103\u021barea irezistibil\u0103. Tab\u0103ra Patcher conecteaz\u0103 joaca de ac\u021biunea real\u0103, ajut\u00e2nd tinerii s\u0103-\u0219i vad\u0103 competen\u021bele ca superputeri.',
      'patcher-camp.f1': 'Gameplay cooperativ prin zone climatice',
      'patcher-camp.f2': 'Patru elemente: P\u0103m\u00e2nt (materiale), Ap\u0103 (resurse), Foc (energie), V\u00e2nt (mobilitate)',
      'patcher-camp.f3': 'Cortul Vr\u0103jitorului: re\u021bete zero-waste + spa\u021biu de reflec\u021bie (14\u201318 ani)',
      'patcher-camp.f4': 'Sarcini mici din via\u021ba real\u0103 (cur\u0103\u021benie, repara\u021bie, g\u0103tit, upcycling) legate de misiuni',

      // Earth's Side of the Story
      'earth-side.title': 'Povestea P\u0103m\u00e2ntului',
      'earth-side.subtitle': 'Glob Interactiv de \u00cenv\u0103\u021bare',
      'earth-side.desc': 'O experien\u021b\u0103 de \u00eenv\u0103\u021bare "tip Encarta" cu glob/hart\u0103: poluan\u021bi, hazarde climatice \u0219i statistici \u00een limbaj simplu. C\u0103i de \u00eenv\u0103\u021bare cu chestionare \u0219i jocuri.',
      'earth-side.why': '\u00cen\u021belegerea "de ce" este podul \u00eentre ac\u021biune \u0219i schimbare durabil\u0103. Acest modul face \u0219tiin\u021ba climatic\u0103 accesibil\u0103 \u0219i sigur\u0103 emo\u021bional.',
      'earth-side.f1': 'Experien\u021b\u0103 de \u00eenv\u0103\u021bare cu glob/hart\u0103: poluan\u021bi, hazarde, statistici',
      'earth-side.f2': 'C\u0103i de \u00eenv\u0103\u021bare + chestionare/jocuri care deblocheaz\u0103 regiuni, insigne, competen\u021be',
      'earth-side.f3': 'Con\u021binut adaptat v\u00e2rstei: 5\u20137, 8\u201311, 12\u201314, 14\u201318 ani',
      'earth-side.f4': 'Siguran\u021b\u0103 emo\u021bional\u0103; straturi de date de \u00eencredere ad\u0103ugate \u00een timp',

      // City Map + City Funds
      'city-map.title': 'Harta Ora\u0219elor + Fonduri',
      'city-map.subtitle': 'Expansiune Urban\u0103',
      'city-map.desc': '\u00cencepe cu Clujul pe hart\u0103, apoi las\u0103 comunitatea s\u0103 voteze urm\u0103toarele ora\u0219e. "Fonduri de Ora\u0219" transparente arat\u0103 ce se livreaz\u0103 la 30%, 60% \u0219i 100%.',
      'city-map.why': 'Scalarea trebuie s\u0103 fie transparent\u0103 \u0219i condus\u0103 de comunitate. Fondurile de Ora\u0219 arat\u0103 unde merg resursele, iar votul asigur\u0103 c\u0103 expansiunea reflect\u0103 cererea real\u0103.',
      'city-map.f1': '\u00cencepe cu Cluj, comunitatea voteaz\u0103 urm\u0103toarele ora\u0219e/zone',
      'city-map.f2': 'Fonduri de Ora\u0219 transparente: livrabile la 30/60/100%',
      'city-map.f3': 'Expansiune prin sponsorizare/dona\u021bii sau voluntariat local',
      'city-map.f4': 'Replicare u\u0219oar\u0103 cu garan\u021bii de calitate: \u0219abloane, mentori, moderare',

      // Module short descriptions
      'mod.missions-hq.short': 'Hub-ul central pentru misiuni eco \u2014 micro, mini \u0219i provoc\u0103ri de weekend pentru familii \u0219i tineri.',
      'mod.market-hut.short': 'Schimburi, d\u0103ruiri \u0219i reutilizare. Un schimb circular sigur, condus de comunitate.',
      'mod.eco-shops.short': 'Un director local curat de magazine \u0219i produse sustenabile.',
      'mod.green-wall.short': 'Backlog de idei comunitare cu vot, potrivire de competen\u021be \u0219i formare de echipe.',
      'mod.tribes.short': 'Grupuri locale pentru provoc\u0103ri, \u00eent\u00e2lniri \u0219i sprijin reciproc.',
      'mod.safety-desk.short': 'Siguran\u021b\u0103, moderare \u0219i reguli clare ale comunit\u0103\u021bii pentru to\u021bi.',
      'mod.patcher-camp.short': 'Un joc cooperativ unde tinerii rezolv\u0103 probleme reale ca superputeri.',
      'mod.earth-side.short': 'Un glob interactiv pentru \u00eenv\u0103\u021bare despre clim\u0103, poluare \u0219i solu\u021bii.',
      'mod.city-map.short': 'Expansiune ora\u0219 cu ora\u0219 cu finan\u021bare transparent\u0103 \u0219i vot comunitar.',

      // About Us
      'about.title': 'Despre Noi',
      'about.mission.title': 'Misiunea Noastr\u0103',
      'about.mission.text': 'S\u0103 facem via\u021ba sustenabil\u0103 s\u0103 par\u0103 realizabil\u0103, social\u0103 \u0219i gratificant\u0103, oferind oamenilor ac\u021biuni clare (misiuni), o comunitate sigur\u0103 \u00een care s\u0103 \u00eenve\u021be \u00eempreun\u0103 \u0219i modalit\u0103\u021bi practice de reutilizare.',
      'about.vision.title': 'Viziunea Noastr\u0103',
      'about.vision.text': 'O lume \u00een care a face bine pentru planet\u0103 e la fel de normal ca sp\u0103latul pe din\u021bi: obiceiuri simple, sprijin local \u0219i tineri care cresc cu abilit\u0103\u021bile \u0219i \u00eencrederea de a-\u0219i proteja viitorul.',
      'about.vision.expand': 'Cu timpul, EarthPatchers se poate extinde ora\u0219 cu ora\u0219 \u00eentr-o re\u021bea de comunit\u0103\u021bi care ac\u021bioneaz\u0103 m\u0103surabil local, \u00eenv\u0103\u021b\u0103nd de ce conteaz\u0103 \u0219i f\u0103c\u00e2nd via\u021ba circular\u0103 accesibil\u0103 tuturor.',
      'about.why.title': 'De Ce EarthPatchers',
      'about.why.text': 'Piesa lips\u0103 nu e mai mult\u0103 con\u0219tientizare. E un drum u\u0219or de la inten\u021bie la ac\u021biune, cu sprijin \u0219i \u00eencredere integrate. EarthPatchers face leg\u0103tura \u00eentre dorin\u021ba de a ajuta \u0219i \u0219tiin\u021ba cum.',
      'about.values.title': 'Valorile Noastre',
      'about.value1.title': 'Sustenabilitate',
      'about.value1.text': 'Ac\u021biune real\u0103, nu campanii de con\u0219tientizare. Pa\u0219i mici care se adun\u0103 \u00een schimbare durabil\u0103.',
      'about.value2.title': 'Comunitate',
      'about.value2.text': 'Sprijin local, misiuni comune \u0219i puterea de a ac\u021biona \u00eempreun\u0103.',
      'about.value3.title': 'Transparen\u021b\u0103',
      'about.value3.text': 'Planuri deschise, vot comunitar \u0219i responsabilitate clar\u0103 a fondurilor.',
      'about.value4.title': 'Siguran\u021ba Copiilor',
      'about.value4.text': 'Confiden\u021bialitate prin design, con\u021binut adecvat v\u00e2rstei \u0219i implicarea tutorilor la fiecare pas.',
      'about.how.title': 'Cum Lucr\u0103m',
      'about.how.text': 'Lucr\u0103m prin parteneriate cu \u0219coli \u0219i ONG-uri, programe pilot \u00een Cluj \u0219i vot comunitar pentru a decide ce se construie\u0219te. Totul \u00eencepe mic, este testat \u0219i cre\u0219te pe baza feedback-ului real.',

      // Contact Us
      'contact.title': 'Contact',
      'contact.intro': 'Fie c\u0103 e\u0219ti p\u0103rinte, profesor, ONG, poten\u021bial partener sau pur \u0219i simplu curios \u2014 ne-ar pl\u0103cea s\u0103 auzim de la tine.',
      'contact.name': 'Numele T\u0103u',
      'contact.email': 'Adresa de Email',
      'contact.role': 'Eu sunt...',
      'contact.role.select': '-- Selecteaz\u0103 --',
      'contact.role.parent': 'P\u0103rinte / Familie',
      'contact.role.teacher': 'Profesor / Educator',
      'contact.role.youth': 'T\u00e2n\u0103r',
      'contact.role.ngo': 'ONG / Organiza\u021bie',
      'contact.role.partner': 'Poten\u021bial Partener',
      'contact.role.funder': 'Finan\u021bator / Sponsor',
      'contact.role.other': 'Altceva',
      'contact.message': 'Mesaj',
      'contact.gdpr': 'Sunt de acord ca datele mele s\u0103 fie stocate pentru procesarea cererii mele.',
      'contact.privacy': 'Politica de Confiden\u021bialitate',
      'contact.submit': 'Trimite Mesajul',
      'contact.thanks': 'Mul\u021bumim! Mesajul t\u0103u a fost trimis. Te vom contacta \u00een cur\u00e2nd.',

      // Footer
      'footer.text': 'EarthPatchers \u2014 Sustenabilitate ghidat\u0103 de comunitate, \u00eencep\u00e2nd din Cluj.',
    }
  },

  init() {
    // Load saved language preference
    const saved = localStorage.getItem('ep-lang');
    if (saved && this.translations[saved]) {
      this.currentLang = saved;
    }

    // Set up language toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.setLang(btn.dataset.lang);
      });
    });

    // Apply current language
    this.apply();
  },

  setLang(lang) {
    if (!this.translations[lang]) return;
    this.currentLang = lang;
    localStorage.setItem('ep-lang', lang);
    this.apply();
  },

  apply() {
    const t = this.translations[this.currentLang];

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    // Update all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) {
        el.placeholder = t[key];
      }
    });

    // Update language toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
    });

    // Update HTML lang attribute
    document.documentElement.lang = this.currentLang;
  },

  t(key) {
    return this.translations[this.currentLang]?.[key] || key;
  }
};
