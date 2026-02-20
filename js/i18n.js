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
      'nav.about': 'About Us',
      'nav.contact': 'Contact Us',

      // Module names
      'mod.missions-hq': 'Missions HQ',
      'mod.tribes': 'Tribes',
      'mod.market-hut': 'Market Hut',
      'mod.earth-side': "Earth's Side of the Story",
      'mod.games-room': 'Games Room',
      'mod.activity-hut': 'Activity Hut',
      'mod.eco-shops': 'Eco Shops Directory',
      'mod.green-wall': 'The Green Wall',
      'mod.org-scientists': 'Organisations & Scientists',
      'mod.new-cities': 'New Cities & Discovery Phase',
      'mod.patcher-camp': 'Patcher Camp',

      // Overview / Landing
      'hero.tagline': 'Community-Powered Sustainability',
      'hero.subtitle': 'EarthPatchers is a magical camp-style community where kids and adults complete real missions to save the Earth, learn how the world works, and reuse things instead of wasting them.',
      'hero.cta.mvp': 'Explore the MVP Plan',
      'hero.cta.modules': 'Browse Modules',

      'overview.problem.title': 'Why EarthPatchers Exists',
      'overview.problem.text': 'Because the world\'s problems feel enormous, and people freeze. EarthPatchers turns \u201ctoo big\u201d into small brave steps that fit real life, then connects those steps to a local community (starting in Cluj).',
      'overview.problem.solution': 'The missing piece isn\'t more awareness. It\'s a clear, easy path from intention to action, with built-in trust, support, and a community that moves together.',

      'overview.mission.title': 'What Is a Mission to Save the Earth?',
      'overview.mission.text': 'A mission is one practical action that helps nature, your neighborhood, or your community, and that can be finished in real life. Missions are designed to be clear, safe, and doable for different ages and schedules.',
      'overview.mission.examples-intro': 'Examples by mission size and age group:',
      'overview.mission.small.title': 'Small Mission (10 Patch Coins)',
      'overview.mission.small.examples': '<ul><li>Kids: water one local tree or plant and track it for a week.</li><li>Teens: take one no-car day and use bike, bus, or walking.</li><li>Adults: add one item you no longer use to Market Hut (for example a toy, book, or jacket).</li></ul>',
      'overview.mission.medium.title': 'Medium Mission (25 Patch Coins)',
      'overview.mission.medium.examples': '<ul><li>Kids + family: 45-60 minute park or riverbank clean-up.</li><li>Teens: run a one-week save water at home Tribe challenge.</li><li>Adults: host a small repair session for clothes or appliances.</li></ul>',
      'overview.mission.big.title': 'Big Mission (50 Patch Coins)',
      'overview.mission.big.examples': '<ul><li>Kids + school: build and maintain a pollinator corner in the school yard.</li><li>Teens: lead a neighborhood energy-saving mini campaign with measurable results.</li><li>Adults: coordinate a community day with clean-up, repair, and tree-care actions.</li></ul>',

      'overview.diff.title': 'Patch Coins, Badges, Achievements',
      'overview.diff.action.title': 'Patch Coins',
      'overview.diff.action.text': 'Earn and spend. Use them in the Market Hut now, and later to unlock Games.',
      'overview.diff.families.title': 'Badges',
      'overview.diff.families.text': 'Who you are becoming: brave, kind, curious.',
      'overview.diff.practical.title': 'Achievements',
      'overview.diff.practical.text': 'Things you did, like stickers in your book.',
      'overview.diff.local.title': 'Local First, Then Scale',
      'overview.diff.local.text': 'We start with one city (Cluj), build something that truly works, and expand with the community\'s support and trust.',

      'overview.how.title': 'How It Works',
      'overview.how.example-intro': 'A practical example:',
      'overview.how.step1.title': 'You join',
      'overview.how.step1.text': 'A parent in Cluj creates a family account, joins a Tribe, and sets child visibility rules.',
      'overview.how.step2.title': 'Pick missions from Missions HQ',
      'overview.how.step2.text': 'They filter for 60 minutes and choose a medium mission: clean a small park area.',
      'overview.how.step3.title': 'Do missions inside a Tribe',
      'overview.how.step3.text': 'The family completes the clean-up, posts before and after photos in the Tribe, and the Tribe leader validates the mission.',
      'overview.how.step4.title': 'Earn Patch Coins',
      'overview.how.step4.text': 'Because it is a medium mission, they receive 25 Patch Coins.',
      'overview.how.step5.title': 'Explore Earth\u2019s Side of the Story',
      'overview.how.step5.text': 'They continue in Earth\u2019s Side of the Story, complete learning cards and quizzes, and can earn extra Patch Coins from learning too.',
      'overview.how.step6.title': 'Use Patch Coins in Market Hut',
      'overview.how.step6.text': 'They use the Patch Coins earned from missions and learning in Market Hut to choose useful items, like a toy for a child or a jacket for winter, and keep things in reuse.',

      'overview.cluj.title': 'Starting in Cluj',
      'overview.cluj.text': 'EarthPatchers starts in Cluj and grows carefully. New cities open later only when there is enough discovery support (data + partners), so it stays real and trustworthy.',

      'overview.trust.title': 'Safety & Privacy',
      'overview.trust.text': 'Kids use aliases and avatars, and no visible kids\u2019 faces are allowed. Kids\u2019 activity is only visible within their Tribe. Adults choose their own visibility settings.',

      'overview.partners.title': 'Partnerships',
      'overview.partners.text': 'EarthPatchers is designed to work alongside schools and NGOs, not replace them. We\'re building local partnerships and collaboration goals as missions scale.',

      'overview.cta.title': 'Ready to Learn More?',
      'overview.cta.mvp': 'Read the MVP Plan',
      'overview.cta.modules': 'Explore Modules',
      'overview.cta.contact': 'Get in Touch',

      // MVP Page
      'mvp.title': 'MVP \u2014 36-Month Plan',
      'mvp.intro': 'EarthPatchers starts with a focused 36-month MVP that proves the core loop works in real life in Cluj, before expanding. This MVP has four pillars:',

      'mvp.pillar1.title': 'Missions',
      'mvp.pillar1.subtitle': 'Real-world eco actions',
      'mvp.pillar1.text': 'Real-world eco actions that fit busy life: tiny missions (10-20 minutes), weekend missions (1-2 hours), and team missions (families, schools, clubs, Tribes).',
      'mvp.pillar1.why': 'Missions turn saving the Earth from a scary-big idea into small brave steps.',

      'mvp.pillar2.title': 'Youth Community Pilot',
      'mvp.pillar2.subtitle': 'Small, safe, meaningful',
      'mvp.pillar2.text': 'Small, safe, meaningful groups in Cluj with a realistic rhythm (monthly or seasonal challenges), with clear rules, guardian involvement where needed, and reporting plus moderation.',
      'mvp.pillar2.why': 'Young people care deeply about their future. This gives them a safe way to contribute without overwhelm.',

      'mvp.pillar3.title': 'Safe Circular Exchange',
      'mvp.pillar3.subtitle': 'Swap, share, reuse',
      'mvp.pillar3.text': 'A Cluj-first swap and reuse space where trust comes first: clear exchange rules, safe pickup guidance, and moderation for suspicious behaviour.',
      'mvp.pillar3.why': 'Circular habits work when people trust the system.',

      'mvp.pillar4.title': 'Earth\'s Side of the Story',
      'mvp.pillar4.subtitle': 'Learning + action, Cluj-first',
      'mvp.pillar4.text': 'A step-by-step learning-and-action world in Cluj with three doors: My Hazards, Contamination & Recovery Zone, and Learn & Play, all connected to missions.',
      'mvp.pillar4.why': 'This makes learning practical and trustworthy by connecting "why" directly to local action.',

      'mvp.modules.title': 'MVP Modules',
      'mvp.modules.intro': 'These four modules form the MVP and will be built and tested during the 36-month plan:',

      'mvp.timeline.title': '36-Month Timeline',

      'mvp.phase1.label': 'Phase 1',
      'mvp.phase1.months': 'Months 0\u201312',
      'mvp.phase1.title': 'Prove the Core Loop in Cluj',
      'mvp.phase1.item1': 'Launch Missions HQ',
      'mvp.phase1.item2': 'Run first youth pilot Tribes with strong safety rules',
      'mvp.phase1.item3': 'Launch Market Hut exchange pilot with moderation and safe pickup guidance',
      'mvp.phase1.item4': 'Launch the first small version of Earth\u2019s Side of the Story (Cluj-only, simple learning corner plus first map pins)',
      'mvp.phase1.goal': 'Prove people return, participate, and feel safe.',

      'mvp.phase2.label': 'Phase 2',
      'mvp.phase2.months': 'Months 13\u201324',
      'mvp.phase2.title': 'Make It Stronger & Easier to Run',
      'mvp.phase2.item1': 'Improve mission quality and mission packs (seasonal collections)',
      'mvp.phase2.item2': 'Expand youth pilot Tribes if Phase 1 works well',
      'mvp.phase2.item3': 'Improve safe exchange flows (categories, templates, trust signals)',
      'mvp.phase2.item4': 'Grow Earth\u2019s Side of the Story carefully (more topics, better learning paths, still Cluj-first)',
      'mvp.phase2.goal': 'Reduce admin/moderation effort while improving experience and safety.',

      'mvp.phase3.label': 'Phase 3',
      'mvp.phase3.months': 'Months 25\u201336',
      'mvp.phase3.title': 'Make It Stable & Scale-Ready',
      'mvp.phase3.item1': 'Make the 4 MVP modules stable and repeatable',
      'mvp.phase3.item2': 'Ensure safety workflows work at larger scale',
      'mvp.phase3.item3': 'Strengthen learning paths connected to missions and local action',
      'mvp.phase3.goal': 'EarthPatchers becomes repeatable as a model, starting from Cluj.',

      'mvp.globe.title': 'Important Note',
      'mvp.globe.intro': 'Earth\u2019s Side of the Story is built one small chapter at a time:',
      'mvp.globe.phase1': 'Phase 1: small learning corner in Cluj',
      'mvp.globe.phase2': 'Phase 2: richer learning content and clearer paths',
      'mvp.globe.phase3': 'Phase 3: stronger, more complete learning journeys tied to missions',
      'mvp.globe.why': 'We build it step-by-step so it stays reliable and understandable.',

      'mvp.notincluded.title': 'What the MVP Does NOT Include',
      'mvp.notincluded.text': 'EarthPatchers has many future ideas (Activity Hut, Eco Shops Directory, Green Wall, Organisations & Scientists, New Cities & Discovery Phase, Games Room, Patcher Camp). These are Next Steps, so people don\'t confuse the MVP with everything we might build later.',

      'mvp.success.title': 'What Success Looks Like',
      'mvp.success.item1': 'Missions are completed and people return',
      'mvp.success.item2': 'Youth participation is safe, supportive, and meaningful',
      'mvp.success.item3': 'Circular exchange works smoothly with trust and moderation',
      'mvp.success.item4': 'Earth\u2019s Side of the Story helps people understand "why" and "what to do next"',
      'mvp.success.item5': 'Cluj becomes a strong foundation for future expansion',

      // Next Steps
      'nextsteps.title': 'Next Steps',
      'nextsteps.intro': 'Beyond the MVP, EarthPatchers envisions a rich ecosystem of modules. These will be shaped by community voting and feasibility through the Green Wall.',
      'nextsteps.explore': 'Explore',

      // Module pages common
      'module.features': 'Key Features',
      'module.why': 'Why It Matters',
      'module.mvp-badge': 'In MVP',
      'module.future-badge': 'Future Module',
      'module.coming-soon': 'This section is still growing. We\'re developing detailed content here. Check back soon or get in touch to learn more.',
      'module.prev': '\u2190 Previous',
      'module.next': 'Next \u2192',
      'module.next-steps-title': 'Coming Later',


      // Missions HQ
      'missions-hq.title': 'Missions HQ',
      'missions-hq.subtitle': 'Where It All Begins',
      'missions-hq.desc': "<p>Missions HQ is where EarthPatchers begins. It is a library of real-life missions for kids, teens, and adults, designed to make saving the Earth feel doable.</p><p>It supports different lives:</p><ul><li>tiny missions for busy families (10-20 minutes)</li><li>weekend missions for deeper impact (1-2 hours)</li><li>team missions for schools, youth groups, and community teams</li></ul><p>For adults, missions can be matched to skills (repairing, organising, teaching, gardening, design, photography) and time available, which helps volunteering feel efficient and rewarding. For kids, missions feel like adventures.</p><p>This structure also makes projects easier to repeat across communities: once a mission works well, it can be reused by other groups without starting from scratch.</p><p>Rewards stay simple:</p><ul><li>Patch Coins are earned through missions and learning and can be used in the Market Hut (and later Games).</li><li>Badges are about who you are becoming (brave, kind, curious).</li><li>Achievements are things you did, like stickers in your book.</li></ul>",
      'missions-hq.why': 'Missions turn climate anxiety into doable action. They give families and young people a clear starting point: one mission at a time, building real change step by step.',

      // Tribes
      'tribes.title': 'Tribes',
      'tribes.subtitle': 'Your Safe Team Space',
      'tribes.desc': "<p>A Tribe is EarthPatchers' word for a small team (like a club). Tribes can be:</p><ul><li>Kids and teens Tribes (aliases and avatars, no visible kids' faces, kid activity visible only in the Tribe)</li><li>Adults-only Tribes (adults choose their visibility)</li></ul><p>Missions can be shared across Tribes so great missions spread without exposing children's accounts.</p><p>Tribe camp rules keep things kind and clean:</p><ul><li>Be kind</li><li>Keep private details private</li><li>No visible kids' faces</li><li>Do not post littering (and do not encourage it)</li><li>Use a Littering report when something should not be there</li></ul>",
      'tribes.why': 'Sustainability isn’t just about tasks — it’s about belonging. Tribes turn the platform into a community where people support each other, act together, and keep things safe and kind.',
      'tribes.next1': "More Tribe types: schools, neighbourhoods, NGOs, and interest-based Tribes.",
      'tribes.next2': "Better mission sharing through Mission Shelf search and favourites.",
      'tribes.next3': "Optional area-based Tribe challenges (monthly or seasonal, not overwhelming).",
      'tribes.next4': "Cleaner moderation tools and clearer littering reports.",
      'tribes.next5': "Optional adult-only community events and learning circles.",

      // Market Hut
      'market-hut.title': 'Market Hut',
      'market-hut.subtitle': 'Swap, Share, Reuse',
      'market-hut.desc': "<p>The Market Hut is a Cluj Napoca-first safe circular exchange where people reuse items instead of buying new.</p><p>Patch Coins make it work without awkward item-for-item matching: you earn coins by helping, then use coins to choose what you need — for example a toy, a warm jacket, books, or school supplies.</p><p>It can support swaps, donations, and fair value learning through Patch Coins (and later polite bidding if desired).</p><p>Safety guidance is built into the flow. Adults choose their visibility, but children's faces are never allowed.</p>",
      'market-hut.why': 'Circular habits are one of the fastest ways to reduce waste. Patch Coins make reuse simple and fair — no awkward item-for-item matching, just kindness and coins.',
      'market-hut.next1': "Optional polite bidding using Patch Coins for high-demand items (simple and kid-safe).",
      'market-hut.next2': "Borrowing shelves (tools, books, sports gear, kids gear).",
      'market-hut.next3': "Better trust signals (verified users and mission-verified trading privileges).",
      'market-hut.next4': "Safer meetup and pickup guidance with clearer rules.",

      // Earth's Side of the Story
      'earth-side.title': 'Earth\'s Side of the Story',
      'earth-side.subtitle': 'Learning That Starts in Cluj',
      'earth-side.desc': "<p>Earth's Side of the Story is the learning-and-action world that starts in Cluj Napoca and connects learning to missions. It has three doors:</p><ol><li>My Hazards: explains hazards in a friendly way (natural hazards, hazards made worse by pollution or human changes, and hazards caused directly by people). Short learning cards and quizzes earn Patch Coins.</li><li>Contamination and Recovery Zone (Cluj Napoca map): adults (and older teens where appropriate) can add a pin (photo and short note) for littering hot spots, damaged areas, cut trees, and places needing care. Pins can become missions.</li><li>Learn and Play: short learning paths and quizzes that connect back to missions and Patch Coins.</li></ol><p>Later, the map can include verified helper pins:</p><ul><li>Helpers (NGOs, researchers, community groups)</li><li>Missions (ways to help)</li><li>Reports (things needing attention)</li></ul>",
      'earth-side.next1': 'Tribe alerts: new pins can gently alert nearby Tribes so local teams can choose to help.',
      'earth-side.next2': 'New cities/countries open slowly via a Discovery Phase (data + partners + priority missions). If discovery isn\'t supported, the area stays \u201csleeping\u201d until the community helps find data sources or partners.',
      'earth-side.next3': "Community help for discovery (finding data sources and mapping local helpers).",
      'earth-side.next4': "Verified helper pins (NGOs, scientists, community groups) and mission pins.",
      'earth-side.next5': "Better learning paths (age-appropriate, including adult paths).",
      'earth-side.why': 'Understanding “why” is the bridge between action and lasting change. This module makes learning accessible, emotionally safe, and directly connected to real missions.',

      // Games Room
      'games-room.title': 'Games Room',
      'games-room.subtitle': 'Play With a Purpose',
      'games-room.desc': "<p>The Games Room is a later module that gathers trusted nature-learning games in one place.</p><p>Patch Coins unlock games (simple rule: coins open doors).</p><p>Adults can play too and earn Patch Coins.</p>",
      'games-room.next1': 'EarthPatchers-made games, and eventually Patcher Camp.',
      'games-room.why': 'Play is how children learn best. Starting with trusted games means learning happens fast, and Patch Coins keep engagement connected to real effort.',

      // Activity Hut
      'activity-hut.title': 'Activity Hut',
      'activity-hut.subtitle': 'Your Adventure Journal',
      'activity-hut.desc': "<p>The Activity Hut is a personal home base that feels like an adventure journal.</p><p>It shows:</p><ul><li>your adventure trail (missions and milestones)</li><li>Patch Coins now (spendable) and Patch Coins earned (lifetime effort)</li><li>badges and achievements</li><li>role path (like MasterPatcher)</li></ul><p>Adults choose what to share publicly; kids stay within Tribe visibility rules.</p>",
      'activity-hut.next1': 'Safe kid-friendly AI can create a child\'s Hero Story: a bedtime-story retelling of verified adventures, using alias + avatar only.',
      'activity-hut.why': 'Your adventure journal is where effort becomes visible. Badges show who you’re becoming, achievements show what you’ve done, and your Patch Coins total shows your lifetime impact.',

      // Eco Shops Directory
      'eco-shops.title': 'Eco Shops Directory',
      'eco-shops.subtitle': 'Find What’s Truly Sustainable',
      'eco-shops.desc': "<p>Eco Shops is a Cluj Napoca-first guide to sustainable products and local shops, with ratings and comments from validated community members, to keep things honest.</p><p>It also includes an Interest or Wish feature for zero-waste products that are not available locally yet:</p><ul><li>People can click I want this here to show demand without everyone ordering separately.</li><li>If enough people are interested, the community can organise a bulk order to reduce packaging and transport waste.</li><li>Makers and companies can see interest levels so they can plan production better and reduce over-making.</li></ul><p>Quality rules reduce spam and keep trust high:</p><ul><li>You can review or add products after earning enough Patch Coins and completing a verified mission.</li><li>New products are submitted via a simple template (photo, where to buy, materials, why it is better, what to watch out for).</li><li>MasterPatchers verify entries before they go live.</li></ul>",
      'eco-shops.why': 'Finding truly sustainable products is hard. This directory keeps things honest with community reviews, verified missions, and MasterPatcher oversight.',

      // The Green Wall
      'green-wall.title': 'The Green Wall',
      'green-wall.subtitle': 'Where Ideas Grow',
      'green-wall.desc': "<p>The Green Wall is EarthPatchers' idea garden. It helps people post ideas, find similar ones, and team up instead of duplicating work.</p><p>Ideas are sorted by size so the Wall stays easy to use:</p><ul><li>Tiny Sparks (small ideas): quick, doable without a team or funding.</li><li>Build-It Ideas (medium ideas): needs a small team and a simple plan.</li><li>Big Seeds (big ideas): bigger projects, new features, new city plans, usually with funding needs.</li></ul><p>Before posting, the Wall helps avoid duplicates. As you type, it suggests similar ideas already on the Wall so you can join them instead of posting a copy.</p><p>If you still want to post a new one, you write one line about what is different.</p><p>Joining an idea is easy. People can join with:</p><ul><li>skills (design, organising, teaching, coding, fundraising)</li><li>time (small regular help)</li><li>later, optional support</li></ul><p>This turns the Green Wall into a matchmaking space for real-world action, not a messy list.</p>",
      'green-wall.why': 'Good ideas need more than enthusiasm — they need skills, teamwork, and sometimes funding. The Green Wall turns community energy into real projects.',

      // Organisations & Scientists
      'org-scientists.title': 'Organisations & Scientists',
      'org-scientists.subtitle': 'Helper Pins on the Map',
      'org-scientists.desc': "<p>Verified organisations and researchers appear as special Helper pins within the Contamination and Recovery Zone in Earth's Side of the Story.</p><p>Pin types include:</p><ul><li>Helpers (NGOs, researchers, community groups)</li><li>Missions (ways to help)</li><li>Reports (things needing attention)</li></ul><p>This helps people discover real helper teams, understand what they do in clear language, and join missions.</p>",
      'org-scientists.why': 'Seeing who helps — and how to join them — turns a map of problems into a map of hope. Verified helper pins connect community action to real expertise.',

      // New Cities & Discovery Phase
      'new-cities.title': 'New Cities & Discovery Phase',
      'new-cities.subtitle': 'Growing Together, City by City',
      'new-cities.desc': "<p>EarthPatchers expands slowly and honestly. Each new city starts with a Discovery Phase:</p><ul><li>find reliable data sources</li><li>find local helpers and partners</li><li>identify priority missions</li></ul><p>If discovery is not supported yet, the city stays sleeping until the community helps find data sources or partners.</p>",
      'new-cities.why': 'Scaling should be honest and community-driven. No half-built chapters — each city opens properly with real data, real partners, and real priority missions.',

      // Patcher Camp
      'patcher-camp.title': 'Patcher Camp',
      'patcher-camp.subtitle': 'The Big Adventure Game',
      'patcher-camp.desc': "<p>Patcher Camp is a future flagship teamwork game inside Games Room.</p><p>Kids work together through Earth zones using powers that are real knowledge: Earth, Water, Fire, Wind.</p><p>It teaches practical skills, problem-solving, and brave teamwork.</p><p>It comes after the Games Room foundation is working.</p>",
      'patcher-camp.why': 'Games make learning irresistible. Patcher Camp connects play to real-world action, helping young people see their knowledge as superpowers for the planet.',

      // Module short descriptions (for cards)
      'mod.missions-hq.short': 'Real-life missions for kids, teens, and adults. Clear actions, Patch Coins, badges, and achievements.',
      'mod.tribes.short': 'Safe team spaces with camp rules. Kids use aliases; missions can be shared across Tribes.',
      'mod.market-hut.short': 'Cluj-first circular exchange with Patch Coins, reuse, swaps, and safety-by-design.',
      'mod.earth-side.short': 'Learning plus action map starting in Cluj: hazards, local recovery map, and learn-and-play.',
      'mod.games-room.short': 'Trusted nature-learning games unlocked with Patch Coins. Later, EarthPatchers-made games.',
      'mod.activity-hut.short': 'Personal adventure journal with progress trail, badges, achievements, and Patch Coins totals.',
      'mod.eco-shops.short': 'Community guide to sustainable products and shops, with verification and demand signals.',
      'mod.green-wall.short': 'Idea garden where people post, vote, and form practical teams based on skills and effort.',
      'mod.org-scientists.short': 'Verified helper pins that show who is helping, where, and how to join.',
      'mod.new-cities.short': 'City-by-city expansion through Discovery Phases with real data, local partners, and fit missions.',
      'mod.patcher-camp.short': 'Future flagship teamwork game where practical knowledge becomes real-world problem-solving power.',

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
      'nav.about': 'Despre Noi',
      'nav.contact': 'Contact',

      // Module names
      'mod.missions-hq': 'Cartierul Misiunilor',
      'mod.tribes': 'Triburi',
      'mod.market-hut': 'C\u0103su\u021ba de Schimb',
      'mod.earth-side': 'Povestea P\u0103m\u00e2ntului',
      'mod.games-room': 'Camera de Jocuri',
      'mod.activity-hut': 'C\u0103su\u021ba Aventurilor',
      'mod.eco-shops': 'Ghidul Eco',
      'mod.green-wall': 'Zidul Verde',
      'mod.org-scientists': 'Ajut\u0103tori (Organiza\u021bii & Oameni de \u0218tiin\u021b\u0103)',
      'mod.new-cities': 'Ora\u0219e Noi & Faza de Descoperire',
      'mod.patcher-camp': 'Tab\u0103ra Patcher',

      // Overview / Landing
      'hero.tagline': "Sustenabilitate susținută de comunitate",
      'hero.subtitle': "EarthPatchers este o comunitate de tip tabără, cu un strop de magie, unde copii și adulți fac misiuni reale pentru a proteja Pământul, învață cum funcționează lumea și refolosesc lucruri în loc să le irosească.",
      'hero.cta.mvp': "Explorează planul MVP",
      'hero.cta.modules': "Vezi modulele",

      'overview.problem.title': "De ce există EarthPatchers",
      'overview.problem.text': "Pentru că problemele lumii par uriașe, iar oamenii blochează. EarthPatchers transformă „prea mare” în pași mici și curajoși care încap în viața reală, apoi îi conectează la o comunitate locală (începând din Cluj).",
      'overview.problem.solution': "Piesa care lipsește nu este mai multă conștientizare. Este un drum clar și ușor de la intenție la acțiune, cu încredere, sprijin și o comunitate care se mișcă împreună.",

      'overview.mission.title': "Ce este o misiune pentru a salva Pământul?",
      'overview.mission.text': "O misiune este o acțiune practică care ajută natura, cartierul sau comunitatea ta și care poate fi dusă la capăt în viața reală. Misiunile sunt gândite să fie clare, sigure și realizabile pentru vârste și programe diferite.",
      'overview.mission.examples-intro': "Exemple pe mărimi de misiune și grupe de vârstă:",
      'overview.mission.small.title': "Misiune mică (10 Monede Patch)",
      'overview.mission.small.examples': "<ul><li>Copii: udă un copac sau o plantă din apropiere și urmăresc evoluția timp de o săptămână.</li><li>Adolescenți: aleg o zi fără mașină și merg cu bicicleta, autobuzul sau pe jos.</li><li>Adulți: adaugă în Căsuța de Schimb un obiect pe care nu îl mai folosesc (de exemplu o jucărie, o carte sau o geacă).</li></ul>",
      'overview.mission.medium.title': "Misiune medie (25 Monede Patch)",
      'overview.mission.medium.examples': "<ul><li>Copii + familie: curățenie de 45-60 de minute într-un parc sau pe malul unui râu.</li><li>Adolescenți: organizează în Trib o provocare de o săptămână pentru reducerea consumului de apă acasă.</li><li>Adulți: fac o sesiune mică de reparat haine sau aparate.</li></ul>",
      'overview.mission.big.title': "Misiune mare (50 Monede Patch)",
      'overview.mission.big.examples': "<ul><li>Copii + școală: construiesc și întrețin un colț pentru polenizatori în curtea școlii.</li><li>Adolescenți: conduc o mini-campanie de cartier pentru economisirea energiei, cu rezultate măsurabile.</li><li>Adulți: coordonează o zi comunitară cu acțiuni de curățenie, reparații și îngrijirea copacilor.</li></ul>",

      'overview.diff.title': "Monede Patch, insigne, realizări",
      'overview.diff.action.title': "Monede Patch",
      'overview.diff.action.text': "Le câștigi și le folosești. Acum în Căsuța de Schimb, iar mai târziu pentru a debloca jocuri.",
      'overview.diff.families.title': "Insigne",
      'overview.diff.families.text': "Arată cine devii: curajos, bun, curios.",
      'overview.diff.practical.title': "Realizări",
      'overview.diff.practical.text': "Arată ce ai făcut, ca niște stickere în caiet.",
      'overview.diff.local.title': "Local întâi, apoi extindere",
      'overview.diff.local.text': "Începem cu un oraș (Cluj), construim ceva care chiar funcționează, apoi extindem cu sprijinul și încrederea comunității.",

      'overview.how.title': "Cum funcționează",
      'overview.how.example-intro': "Un exemplu practic:",
      'overview.how.step1.title': "Te alături",
      'overview.how.step1.text': "Un părinte din Cluj creează un cont de familie, intră într-un Trib și setează regulile de vizibilitate pentru copil.",
      'overview.how.step2.title': "Alegi misiuni din Cartierul Misiunilor",
      'overview.how.step2.text': "Filtrează la 60 de minute și aleg o misiune medie: curățarea unei zone mici din parc.",
      'overview.how.step3.title': "Faci misiuni într-un Trib",
      'overview.how.step3.text': "Familia finalizează curățenia, postează poze înainte și după în Trib, iar liderul Tribului validează misiunea.",
      'overview.how.step4.title': "Câștigi Monede Patch",
      'overview.how.step4.text': "Fiind o misiune medie, primesc 25 Monede Patch.",
      'overview.how.step5.title': "Explorezi Povestea Pământului",
      'overview.how.step5.text': "Continuă în Povestea Pământului, parcurge aventuri scurte de tip traseu din care înveți lucruri interesante, fiecare cu o mini-provocare la final, iar și din această parte pot câștiga Monede Patch extra.",
      'overview.how.step6.title': "Folosești Monede Patch în Căsuța de Schimb",
      'overview.how.step6.text': "Folosesc Monede Patch câștigate din misiuni și învățare în Căsuța de Schimb ca să ia lucruri utile, de exemplu o jucărie pentru copil sau o geacă pentru iarnă, și să păstreze reutilizarea vie.",

      'overview.cluj.title': "Începem în Cluj",
      'overview.cluj.text': "EarthPatchers pornește din Cluj și crește cu grijă. Orașele noi se deschid mai târziu doar când există suficient suport pentru faza de descoperire (date + parteneri), ca totul să rămână real și de încredere.",

      'overview.trust.title': "Siguranță și confidențialitate",
      'overview.trust.text': "Copiii folosesc aliasuri și avataruri, iar fețele copiilor nu sunt permise vizibil. Activitatea lor este vizibilă doar în Trib. Adulții își aleg propriile setări de vizibilitate.",

      'overview.partners.title': "Parteneriate",
      'overview.partners.text': "EarthPatchers este construit să lucreze alături de școli și ONG-uri, nu să le înlocuiască. Dezvoltăm parteneriate locale și obiective de colaborare pe măsură ce misiunile se extind.",

      'overview.cta.title': "Vrei să afli mai mult?",
      'overview.cta.mvp': "Citește planul MVP",
      'overview.cta.modules': "Explorează modulele",
      'overview.cta.contact': "Ia legătura cu noi",

      // MVP Page
      'mvp.title': "MVP — plan pe 36 de luni",
      'mvp.intro': "EarthPatchers începe cu un MVP concentrat pe 36 de luni, care dovedește că bucla de bază funcționează în viața reală, în Cluj, înainte de extindere. Acest MVP are patru piloni:",

      'mvp.pillar1.title': "Misiuni",
      'mvp.pillar1.subtitle': "Acțiuni eco din viața reală",
      'mvp.pillar1.text': "Acțiuni eco reale care se potrivesc unei vieți ocupate: misiuni mici (10–20 minute), misiuni de weekend (1–2 ore) și misiuni de echipă (familii, școli, cluburi, Triburi).",
      'mvp.pillar1.why': "Misiunile transformă ideea „salvăm Pământul”, care poate părea copleșitoare, în pași mici și curajoși.",

      'mvp.pillar2.title': "Pilot comunitar pentru tineri",
      'mvp.pillar2.subtitle': "Mic, sigur, cu sens",
      'mvp.pillar2.text': "Grupuri mici, sigure și cu sens în Cluj, cu un ritm realist (provocări lunare sau sezoniere), reguli clare, implicarea tutorilor unde e nevoie, plus raportare și moderare.",
      'mvp.pillar2.why': "Tinerilor le pasă profund de viitorul lor. Aici au un mod sigur de a contribui, fără să fie copleșiți.",

      'mvp.pillar3.title': "Schimb circular sigur",
      'mvp.pillar3.subtitle': "Schimb, partajare, reutilizare",
      'mvp.pillar3.text': "Un spațiu de schimb și reutilizare, cu focus pe Cluj, unde încrederea este pe primul loc: reguli clare de schimb, ghid pentru preluare în siguranță și moderare pentru comportamente suspecte.",
      'mvp.pillar3.why': "Obiceiurile circulare funcționează când oamenii au încredere în sistem.",

      'mvp.pillar4.title': "Povestea Pământului",
      'mvp.pillar4.subtitle': "Învățare + acțiune, Cluj întâi",
      'mvp.pillar4.text': "O lume de învățare și acțiune construită pas cu pas în Cluj, cu trei uși: Pericolele Mele, Zona de Contaminare și Refacere, și Învață & Joacă, toate conectate la misiuni.",
      'mvp.pillar4.why': "Face învățarea practică și de încredere, legând direct „de ce” de acțiunea locală.",

      'mvp.modules.title': "Module MVP",
      'mvp.modules.intro': "Aceste patru module formează MVP-ul și vor fi construite și testate în planul de 36 de luni:",

      'mvp.timeline.title': "Cronologie pe 36 de luni",

      'mvp.phase1.label': "Faza 1",
      'mvp.phase1.months': "Lunile 0–12",
      'mvp.phase1.title': "Dovedim bucla de bază în Cluj",
      'mvp.phase1.item1': "Lansăm Cartierul Misiunilor",
      'mvp.phase1.item2': "Rulăm primele Triburi pilot pentru tineri, cu reguli solide de siguranță",
      'mvp.phase1.item3': "Lansăm pilotul de schimb Căsuța de Schimb, cu moderare și ghid clar pentru preluare în siguranță",
      'mvp.phase1.item4': "Lansăm prima versiune mică din Povestea Pământului (doar Cluj, colț simplu de învățare + primele pinuri pe hartă)",
      'mvp.phase1.goal': "Dovedim că oamenii revin, participă și se simt în siguranță.",

      'mvp.phase2.label': "Faza 2",
      'mvp.phase2.months': "Lunile 13–24",
      'mvp.phase2.title': "Facem totul mai solid și mai ușor de rulat",
      'mvp.phase2.item1': "Îmbunătățim calitatea misiunilor și pachetele de misiuni (colecții sezoniere)",
      'mvp.phase2.item2': "Extindem Triburile pilot pentru tineri dacă Faza 1 merge bine",
      'mvp.phase2.item3': "Îmbunătățim fluxurile de schimb sigur (categorii, șabloane, semnale de încredere)",
      'mvp.phase2.item4': "Dezvoltăm cu grijă Povestea Pământului (mai multe teme, trasee de învățare mai bune, în continuare Cluj întâi)",
      'mvp.phase2.goal': "Reducem efortul de administrare și moderare, în timp ce creștem calitatea experienței și nivelul de siguranță.",

      'mvp.phase3.label': "Faza 3",
      'mvp.phase3.months': "Lunile 25–36",
      'mvp.phase3.title': "Facem totul stabil și pregătit pentru extindere",
      'mvp.phase3.item1': "Facem cele 4 module MVP stabile și repetabile",
      'mvp.phase3.item2': "Ne asigurăm că fluxurile de siguranță funcționează și la scară mai mare",
      'mvp.phase3.item3': "Întărim traseele de învățare conectate la misiuni și la acțiunea locală",
      'mvp.phase3.goal': "EarthPatchers devine un model care poate fi replicat, pornind din Cluj.",

      'mvp.globe.title': "Notă importantă",
      'mvp.globe.intro': "Povestea Pământului se construiește pe capitole mici, pas cu pas:",
      'mvp.globe.phase1': "Faza 1: colț mic de învățare în Cluj",
      'mvp.globe.phase2': "Faza 2: conținut de învățare mai bogat și trasee mai clare",
      'mvp.globe.phase3': "Faza 3: parcursuri de învățare mai solide și mai complete, conectate la misiuni",
      'mvp.globe.why': "Construim etapizat, ca să rămână fiabil și ușor de înțeles.",

      'mvp.notincluded.title': "Ce NU include MVP-ul",
      'mvp.notincluded.text': "EarthPatchers are multe idei pentru viitor (Căsuța Aventurilor, Ghidul Eco, Zidul Verde, Ajutători (Organizații & Oameni de Știință), Orașe Noi & Faza de Descoperire, Camera Jocurilor, Tabăra Patcher). Acestea sunt Pași următori, ca oamenii să nu confunde MVP-ul cu tot ce am putea construi mai târziu.",

      'mvp.success.title': "Cum arată succesul",
      'mvp.success.item1': "Misiunile sunt finalizate, iar oamenii revin",
      'mvp.success.item2': "Participarea tinerilor este sigură, susținută și cu sens",
      'mvp.success.item3': "Schimbul circular funcționează fluid, cu încredere și moderare",
      'mvp.success.item4': "Povestea Pământului îi ajută pe oameni să înțeleagă „de ce” și „ce urmează”",
      'mvp.success.item5': "Cluj devine o bază solidă pentru extinderea viitoare",

      // Next Steps
      'nextsteps.title': 'Pa\u0219i Urm\u0103tori',
      'nextsteps.intro': "Dincolo de MVP, EarthPatchers își propune un ecosistem bogat de module. Acestea vor fi modelate prin votul comunității și fezabilitate prin Zidul Verde.",
      'nextsteps.explore': 'Exploreaz\u0103',

      // Module pages common
      'module.features': 'Caracteristici Cheie',
      'module.why': 'De Ce Conteaz\u0103',
      'module.mvp-badge': '\u00cen MVP',
      'module.future-badge': 'Modul Viitor',
      'module.coming-soon': 'Aceast\u0103 sec\u021biune este \u00een cre\u0219tere. Dezvolt\u0103m con\u021binut detaliat aici. Reveni\u021bi cur\u00e2nd sau contacta\u021bi-ne pentru mai multe informa\u021bii.',
      'module.prev': '\u2190 Anterior',
      'module.next': 'Urm\u0103tor \u2192',
      'module.next-steps-title': 'Vine Mai T\u00e2rziu',


      // Missions HQ
      'missions-hq.title': 'Cartierul Misiunilor',
      'missions-hq.subtitle': 'De Unde Începe Totul',
      'missions-hq.desc': "<p>Cartierul Misiunilor este locul unde începe EarthPatchers. Este o bibliotecă de misiuni din viața reală pentru copii, adolescenți și adulți, gândită ca salvarea Pământului să pară ceva realizabil.</p><p>Se potrivește cu stiluri de viață diferite:</p><ul><li>misiuni mici pentru familii ocupate (10-20 minute)</li><li>misiuni de weekend pentru impact mai mare (1-2 ore)</li><li>misiuni de echipă pentru școli, grupuri de tineri și echipe din comunitate</li></ul><p>Pentru adulți, misiunile pot fi potrivite cu abilitățile (reparat, organizat, predat, grădinărit, design, fotografie) și cu timpul disponibil, ceea ce face voluntariatul eficient și satisfăcător. Pentru copii, misiunile se simt ca niște aventuri.</p><p>Structura aceasta face proiectele mai ușor de repetat în comunități diferite: odată ce o misiune funcționează bine, poate fi refolosită de alte grupuri fără să pornească de la zero.</p><p>Recompensele rămân simple:</p><ul><li>Monede Patch se câștigă prin misiuni și învățare și pot fi folosite în Căsuța de Schimb (și mai târziu în Camera de Jocuri).</li><li>Insignele sunt despre cine devii (curajos, bun, curios).</li><li>Realizările sunt lucrurile pe care le-ai făcut, ca niște stickere în caietul tău de aventuri.</li></ul>",
      'missions-hq.why': 'Misiunile transformă anxietatea climatică în acțiune realizabilă. Oferă familiilor și tinerilor un punct de plecare clar: o misiune o dată, construind schimbare reală pas cu pas.',

      // Tribes
      'tribes.title': 'Triburi',
      'tribes.subtitle': 'Echipa Ta Sigură',
      'tribes.desc': "<p>Un Trib este o echipă mică (ca un club de tabără). Triburile pot fi:</p><ul><li>Triburi pentru copii și adolescenți + lideri (aliasuri și avataruri, fără fețe vizibile de copii, activitatea copiilor e vizibilă doar în Trib)</li><li>Triburi doar pentru adulți (adulții își aleg vizibilitatea)</li></ul><p>Misiunile pot fi împărtășite între Triburi, ca misiunile bune să se răspândească fără să expună conturile copiilor.</p><p>Regulile de tabără păstrează lucrurile prietenoase și curate:</p><ul><li>Fii bun</li><li>Păstrează detaliile private, private</li><li>Fără fețe vizibile de copii</li><li>Nu posta lucruri fără legătură cu protejarea Pământului, natura sau probleme legate de acestea (și nu încuraja asta)</li><li>Folosește butonul Raportează Gunoi Neridicat când ceva nu e în regulă</li></ul>",
      'tribes.why': 'Sustenabilitatea nu e doar despre sarcini — e despre apartenență. Triburile transformă platforma într-o comunitate unde oamenii se sprijină reciproc, acționează împreună și păstrează lucrurile sigure și prietenoase.',
      'tribes.next1': "Mai multe tipuri de Triburi: școli, cartiere, ONG-uri și Triburi pe interese.",
      'tribes.next2': "Împărtășire mai bună a misiunilor prin căutare și favorite în Raftul cu Misiuni (Mission Shelf).",
      'tribes.next3': "Provocări opționale pe zone pentru Triburi (lunare sau sezoniere, fără să fie copleșitoare).",
      'tribes.next4': "Unelte mai bune pentru moderare și rapoarte mai clare pentru gunoi neridicat.",
      'tribes.next5': "Evenimente opționale doar pentru adulți și cercuri de învățare.",

      // Market Hut
      'market-hut.title': 'Căsuța de Schimb',
      'market-hut.subtitle': 'Schimbă, Împarte, Reutilizează',
      'market-hut.desc': "<p>Căsuța de Schimb este un schimb circular, la început în Cluj Napoca, unde refolosim lucruri în loc să cumpărăm mereu altele noi.</p><p>Monedele Patch rezolvă problema schimbului perfect: câștigi monede ajutând, apoi le folosești ca să alegi ce ai nevoie — de exemplu o jucărie, o geacă călduroasă, cărți sau rechizite.</p><p>Siguranța este integrată: adulții aleg vizibilitatea, fețele copiilor nu sunt permise.</p>",
      'market-hut.why': 'Obiceiurile circulare sunt una dintre cele mai rapide modalități de a reduce risipa. Monedele Patch fac reutilizarea simplă și corectă — fără schimb complicat, doar bunătate și monede.',
      'market-hut.next1': "Licitație politicoasă opțională cu Monede Patch pentru produse foarte căutate (simplu și sigur pentru copii).",
      'market-hut.next2': "Rafturi de împrumut (unelte, cărți, echipament sport, echipament copii).",
      'market-hut.next3': "Semnale mai bune de încredere (utilizatori verificați și privilegii de schimb după misiuni verificate).",
      'market-hut.next4': "Ghid mai sigur pentru întâlniri și preluare, cu reguli mai clare.",

      // Earth's Side of the Story
      'earth-side.title': 'Povestea Pământului',
      'earth-side.subtitle': 'Învățare care începe în Cluj',
      'earth-side.desc': "<p>Povestea Pământului este lumea de învățare și acțiune care pornește în Cluj Napoca și leagă învățarea de misiuni. Are trei uși:</p><ol><li>Pericolele Mele: explică simplu pericolele naturale, pericolele naturale agravate de poluare sau schimbări făcute de oameni și pericolele cauzate direct de oameni. Aventuri scurte de tip traseu, din care înveți lucruri interesante, fiecare cu o mini-provocare la final, pot da Monede Patch.</li><li>Zona de Mizerie și Reparare (Harta Clujului): adulții (și adolescenții mai mari, unde e potrivit) pot pune un pin cu poză și notiță pentru gunoaie, lucruri stricate și zone care au nevoie de grijă. Pinii pot deveni misiuni.</li><li>Învață și Joacă: învățare scurtă, conectată la misiuni și monede.</li></ol><p>Mai târziu, apar și pini ajutători verificați:</p><ul><li>Ajutori (ONG-uri, cercetători, grupuri)</li><li>Misiuni (moduri de a ajuta)</li><li>Raportări (lucruri care au nevoie de atenție)</li></ul>",
      'earth-side.next1': 'Marcajele noi pot trimite un semn bl\u00e2nd Triburilor din zon\u0103, ca echipele locale s\u0103 poat\u0103 alege s\u0103 ajute.',
      'earth-side.next2': 'Ora\u0219ele noi se deschid doar cu Faza de descoperire (date + parteneri + misiuni importante). Dac\u0103 descoperirea nu e sus\u021binut\u0103, zona r\u0103m\u00e2ne \u201eadormit\u0103\u201d p\u00e2n\u0103 c\u00e2nd comunitatea ajut\u0103 s\u0103 g\u0103seasc\u0103 surse de date sau parteneri.',
      'earth-side.next3': "Ajutorul comunității pentru descoperire (surse de date și cartografiere ajutori locali).",
      'earth-side.next4': "Pini verificați de ajutor (ONG-uri, cercetători, grupuri) și pini de misiuni.",
      'earth-side.next5': "Trasee de învățare mai bune (pe vârste, inclusiv pentru adulți).",
      'earth-side.why': 'Înțelegerea „de ce” este podul între acțiune și schimbare durabilă. Acest modul face învățarea accesibilă, sigură emoțional și conectată direct la misiuni reale.',

      // Games Room
      'games-room.title': 'Camera de Jocuri',
      'games-room.subtitle': 'Joacă-te cu un Scop',
      'games-room.desc': "<p>Camera Jocurilor este un modul de mai târziu care adună la un loc jocuri de încredere, care te învață despre natură fără să pară teme.</p><p>Monedele Patch deschid jocurile (regula simplă: monedele deschid uși).</p><p>Și adulții pot juca și pot câștiga Monede Patch.</p>",
      'games-room.next1': 'Jocuri create de EarthPatchers, \u0219i \u00een cele din urm\u0103 Patcher Camp.',
      'games-room.why': 'Joaca e modul în care copiii învață cel mai bine. Începând cu jocuri de încredere, învățarea vine repede, iar Monedele Patch mențin legătura cu efortul real.',

      // Activity Hut
      'activity-hut.title': 'Căsuța Aventurilor',
      'activity-hut.subtitle': 'Jurnalul Tău de Aventuri',
      'activity-hut.desc': "<p>Căsuța Aventurilor este baza ta personală, ca un jurnal de aventuri.</p><p>Acolo vezi:</p><ul><li>urma aventurii tale (misiuni și momente importante)</li><li>Monede Patch de acum (cheltuibile) și Monede Patch câștigate (tot efortul tău de până acum)</li><li>insigne și realizări</li><li>drumul spre roluri (cum ar fi MasterPatcher)</li></ul><p>Adulții aleg ce vor să fie vizibil public; copiii rămân în regulile de vizibilitate ale Tribului.</p>",
      'activity-hut.next1': 'AI sigur pentru copii care creeaz\u0103 \u201ePovestea Eroului\u201d din aventuri verificate (doar alias + avatar).',
      'activity-hut.why': 'Jurnalul tău de aventuri este locul unde efortul devine vizibil. Insignele arată cine devii, realizările arată ce ai făcut, iar totalul de Monede Patch arată impactul tău pe viață.',

      // Eco Shops Directory
      'eco-shops.title': 'Ghidul Eco',
      'eco-shops.subtitle': 'Găsește Ce E Cu Adevărat Sustenabil',
      'eco-shops.desc': "<p>Ghidul Eco este un ghid care începe în Cluj Napoca cu produse sustenabile și magazine locale, cu ratinguri și comentarii date de membrii validați ai comunității, ca să rămână totul onest.</p><p>Include și o funcție de Interes sau Dorință pentru produse zero deșeuri care încă nu se găsesc local:</p><ul><li>Oamenii pot apăsa Vreau și la noi ca să arate interesul, fără ca fiecare să comande separat.</li><li>Dacă sunt destui interesați, comunitatea poate organiza o comandă la comun, ca să scadă ambalajele și risipa de transport.</li><li>Producătorii și companiile pot vedea nivelul de interes, ca să planifice mai bine și să nu producă în exces.</li></ul><p>Reguli de calitate pentru mai puțin spam și mai multă încredere:</p><ul><li>Poți lăsa recenzie sau adăuga produse după ce ai câștigat destule Monede Patch și ai făcut o misiune verificată.</li><li>Produsele noi se trimit printr-un șablon simplu (poză, de unde îl iei, materiale, de ce e mai bun, la ce să fii atent).</li><li>MasterPatchers verifică intrările înainte să apară public.</li></ul>",
      'eco-shops.why': 'Găsirea produselor cu adevărat sustenabile e dificilă. Acest director păstrează lucrurile cinstite cu recenzii din comunitate, misiuni verificate și verificare MasterPatcher.',

      // The Green Wall
      'green-wall.title': "Zidul Verde",
      'green-wall.subtitle': 'Unde Ideile Cresc',
      'green-wall.desc': "<p>Zidul Verde este grădina de idei EarthPatchers. Aici oamenii pot posta idei, pot găsi idei asemănătoare și se pot alătura uneia deja pornite, ca să nu muncim de două ori la același lucru.</p><p>Ca să rămână ușor de folosit, ideile sunt sortate pe mărimi:</p><ul><li>Semințe Mici (idei mici): rapide, ușor de făcut, fără echipă mare și fără bani.</li><li>Semințe Medii (idei medii): au nevoie de o echipă mică și un plan simplu.</li><li>Semințe Mari (idei mari): proiecte mai mari, funcții noi, planuri de orașe noi, de obicei cu nevoie de date sau fonduri.</li></ul><p>Înainte să postezi, Zidul te ajută să eviți dublurile. Când începi să scrii, îți sugerează idei asemănătoare deja existente, ca să te poți alătura lor în loc să postezi o copie.</p><p>Dacă tot vrei să postezi ideea ta, scrii o singură propoziție despre ce e diferit.</p><p>Alăturarea e ușoară. Oamenii se pot alătura cu:</p><ul><li>competențe (design, organizare, predare, programare, strângere de fonduri)</li><li>timp (ajutor mic, regulat)</li><li>mai târziu, opțional, suport</li></ul><p>Așa Zidul Verde devine un loc de potrivire în echipe pentru acțiuni reale, nu o listă încâlcită.</p>",
      'green-wall.why': "Ideile bune au nevoie de mai mult decât entuziasm - au nevoie de competențe, muncă în echipă și uneori finanțare. Zidul Verde transformă energia comunității în proiecte reale.",

      // Organisations & Scientists
      'org-scientists.title': 'Ajutători (Organizații & Oameni de Știință)',
      'org-scientists.subtitle': 'Ajutori pe hartă',
      'org-scientists.desc': "<p>Organizațiile și cercetătorii verificați apar ca pini speciali de tip Ajutor în Zona de Contaminare și Refacere din Povestea Pământului.</p><p>Tipuri de pini:</p><ul><li>Ajutori (ONG-uri, cercetători, grupuri din comunitate)</li><li>Misiuni (moduri concrete în care poți ajuta)</li><li>Raportări (lucruri care au nevoie de atenție)</li></ul><p>Asta îi ajută pe oameni să descopere echipe reale care ajută, să înțeleagă clar ce fac și să se alăture ușor misiunilor.</p>",
      'org-scientists.why': 'Să vezi cine ajută — și cum te poți alătura — transformă o hartă cu probleme într-o hartă cu speranță. Marcajele verificate conectează acțiunea comunitară la expertiză reală.',

      // New Cities & Discovery Phase
      'new-cities.title': 'Orașe Noi & Faza de Descoperire',
      'new-cities.subtitle': 'Creștem împreună, oraș cu oraș',
      'new-cities.desc': "<p>EarthPatchers se extinde încet și onest. Fiecare oraș nou începe cu o Fază de Descoperire:</p><ul><li>găsim surse de informații de încredere (date)</li><li>găsim ajutori locali și parteneri</li><li>alegem misiunile cele mai importante pentru acel loc</li></ul><p>Dacă faza de descoperire nu e susținută încă, orașul nou rămâne adormit până când comunitatea ajută la găsirea datelor sau a partenerilor.</p>",
      'new-cities.why': 'Scalarea trebuie să fie onestă și condusă de comunitate. Fără capitole pe jumătate — fiecare oraș se deschide cu date reale, parteneri reali și misiuni prioritare.',

      // Patcher Camp
      'patcher-camp.title': 'Tabăra Patcher',
      'patcher-camp.subtitle': 'Marea Aventură',
      'patcher-camp.desc': "<p>Tabăra Patcher este jocul mare de echipă din viitor, în Camera Jocurilor.</p><p>Copiii lucrează împreună prin diferite zone ale Pământului, cu puteri care sunt cunoștințe reale: Pământ, Apă, Foc, Vânt.</p><p>Învață abilități practice, rezolvare de probleme, curaj și lucru în echipă.</p><p>Apare după ce Camera Jocurilor funcționează bine.</p>",
      'patcher-camp.why': 'Jocurile fac învățarea irezistibilă. Tabăra Patcher conectează joaca de acțiunea reală, ajutând tinerii să-și vadă cunoștințele ca superputeri pentru planetă.',

      // Module short descriptions
      'mod.missions-hq.short': 'Misiuni reale pentru copii, adolescenți și adulți. Câștigă Monede Patch, insigne și realizări.',
      'mod.tribes.short': 'Spații sigure de echipă cu reguli de tabără. Copiii folosesc aliasuri; misiunile circulă între Triburi.',
      'mod.market-hut.short': 'Schimb circular local cu Monede Patch. Refolosește în loc să cumperi nou.',
      'mod.earth-side.short': 'Hartă de învățare + acțiune începând din Cluj. Trei uși: riscuri, hartă locală, învață și joacă.',
      'mod.games-room.short': 'Jocuri de încredere despre natură. Monedele Patch deschid uși. Mai târziu: Tabăra Patcher.',
      'mod.activity-hut.short': 'Jurnalul tău personal de aventuri cu insigne, realizări și urmărire Monede Patch.',
      'mod.eco-shops.short': 'Ghid comunitar de produse și magazine sustenabile, verificat de MasterPatchers.',
      'mod.green-wall.short': 'Grădina de idei unde oamenii postează, votează și formează echipe după competențe.',
      'mod.org-scientists.short': 'Marcaje verificate pe hartă cu cine ajută, unde și cum te poți implica.',
      'mod.new-cities.short': 'Expansiune oraș cu oraș prin Faze de descoperire cu date și parteneri reali.',
      'mod.patcher-camp.short': 'Jocul mare de echipă unde cunoștințele devin superputeri.',

      // About Us
      'about.title': 'Despre Noi',
      'about.mission.title': 'Misiunea Noastr\u0103',
      'about.mission.text': 'S\u0103 facem via\u021ba sustenabil\u0103 s\u0103 par\u0103 realizabil\u0103, social\u0103 \u0219i gratificant\u0103, oferind oamenilor ac\u021biuni clare (misiuni), o comunitate sigur\u0103 \u00een care s\u0103 \u00eenve\u021be \u00eempreun\u0103 \u0219i modalit\u0103\u021bi practice de reutilizare.',
      'about.vision.title': 'Viziunea Noastr\u0103',
      'about.vision.text': 'O lume \u00een care a face bine pentru planet\u0103 e la fel de normal ca sp\u0103latul pe din\u021bi: obiceiuri simple, sprijin local \u0219i tineri care cresc cu abilit\u0103\u021bile \u0219i \u00eencrederea de a-\u0219i proteja viitorul.',
      'about.vision.expand': 'Cu timpul, EarthPatchers se poate extinde ora\u0219 cu ora\u0219 \u00eentr-o re\u021bea de comunit\u0103\u021bi care ac\u021bioneaz\u0103 m\u0103surabil local, \u00eenv\u0103\u021b\u00e2nd de ce conteaz\u0103 \u0219i f\u0103c\u00e2nd via\u021ba circular\u0103 accesibil\u0103 tuturor.',
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
        // Use innerHTML for elements marked with data-i18n-html
        if (el.hasAttribute('data-i18n-html')) {
          el.innerHTML = t[key];
        } else {
          el.textContent = t[key];
        }
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
