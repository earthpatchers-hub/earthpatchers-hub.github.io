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
      'overview.how.step1.title': 'You join',
      'overview.how.step1.text': 'Adults set the important settings for kids',
      'overview.how.step2.title': 'Pick missions from Missions HQ',
      'overview.how.step2.text': 'Choose missions that fit your time and skills',
      'overview.how.step3.title': 'Do missions inside a Tribe',
      'overview.how.step3.text': 'Safe team space where you act together',
      'overview.how.step4.title': 'Earn Patch Coins',
      'overview.how.step4.text': 'Coins you can use in Market Hut and later Games',
      'overview.how.step5.title': 'Explore Earth\u2019s Side of the Story',
      'overview.how.step5.text': 'Learn hazards, spot local issues, and meet helper teams',

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

      'mvp.modules.title': 'MVP Modules',
      'mvp.modules.intro': 'These five modules form the core of the MVP and will be built and tested during the 36-month plan:',

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

      // Module pages common
      'module.features': 'Key Features',
      'module.why': 'Why It Matters',
      'module.mvp-badge': 'In MVP',
      'module.future-badge': 'Future Module',
      'module.coming-soon': 'This section is still growing. We\'re developing detailed content here. Check back soon or get in touch to learn more.',
      'module.prev': '\u2190 Previous',
      'module.next': 'Next \u2192',
      'module.loopy-toggle': 'Read Loopy\'s Story',


      // Missions HQ
      'missions-hq.title': 'Missions HQ',
      'missions-hq.subtitle': 'Where It All Begins',
      'missions-hq.desc': 'Missions HQ is where EarthPatchers begins. It’s a library of real-life missions for kids, teens, and adults, designed to make “saving the Earth” feel doable.\n\nMissions come in sizes that fit busy life: • Tiny missions (10–20 minutes) • Weekend missions (1–2 hours) • Team missions (families, schools, clubs, Tribes)\n\nAdults can filter missions by time, topic, and skills (repairing, organising, teaching, gardening, design, photography), so helping can match what people are actually good at.\n\nRewards stay simple: • Patch Coins are earned through missions and learning and can be used in the Market Hut (and later Games). • Badges are about who you are becoming (brave, kind, curious). • Achievements are things you did, like stickers in your book.',
      'missions-hq.why': 'Missions turn climate anxiety into doable action. They give families and young people a clear starting point: one mission at a time, building real change step by step.',
      'missions-hq.loopy': 'Once upon a time there was a bear named Loopy.<br>We shall call him Loopy the Bear, because well… he insisted.</p><p>Loopy wore a hat with a leaf on it. It was far too fancy for a bear.<br>But Loopy was a fancy bear, and that was that.</p><p>One morning, Loopy wandered into a clearing and found a wooden sign:</p><p>MISSIONS HQ</p><p>“Hm,” Loopy whispered, “Headquarters. That sounds like a place where serious things happen… like secret plans… and maybe biscuits.”</p><p>Around a warm story-fire sat little people and big people. They held mission cards like treasure maps.</p><p>“…to save the Earth,” someone said.</p><p>Loopy froze mid-tiptoe. “Save the Earth? That is a very big sentence.”</p><p>A child lifted a card: “Mission: Lights Ninja!”<br>The dad smiled. “If you catch the lights leaving rooms empty, you win.”<br>The child clicked off a switch and returned like a tiny hero.</p><p>The dad tried not to look too excited. “The bill might be smaller this month.”<br>Loopy thought, Humans pretend not to enjoy saving money… but their eyebrows tell the truth.</p><p>Another card appeared: “Mission: Fix One Thing.”<br>Loopy gasped (he always did). “Fixing things is like telling the planet: ‘You don’t have to make a new one. We can be clever.’”</p><p>When the mission ended, a badge floated down like a friendly firefly: Kind. Brave. Curious.<br>Then a banner popped up: Achievement Unlocked: First Mission Completed.</p><p>Loopy found a sign that explained it simply:<br>Badges are about who you are becoming.<br>Achievements are about things you did, like stickers in your book.</p><p>Then Patch Coins twinkled in like pocket stars.</p><p>“This is not just a plan,” Loopy said softly.<br>“This is a loop.”',

      // Tribes
      'tribes.title': 'Tribes',
      'tribes.subtitle': 'Your Safe Team Space',
      'tribes.desc': 'A Tribe is EarthPatchers’ word for a small team (like a club). Tribes can be: • Kids/Teens Tribes (aliases + avatars, no visible kids’ faces, kid activity visible only in the Tribe) • Adults-only Tribes (adults choose their visibility)\n\nMissions can be shared across Tribes so great missions spread without exposing children’s accounts.\n\nTribe “camp rules” keep things kind and clean: • Be kind • Keep private details private • No visible kids’ faces • Don’t post littering (and don’t encourage it) • Use a Littering report when something shouldn’t be there',
      'tribes.why': 'Sustainability isn’t just about tasks — it’s about belonging. Tribes turn the platform into a community where people support each other, act together, and keep things safe and kind.',
      'tribes.loopy': 'The next day Loopy returned and found another sign, slightly crooked, as if a squirrel had installed it while running:</p><p>TRIBES</p><p>Loopy squinted. “Tribes… that sounds like a place where teams keep important secrets… and maybe snacks.”<br>(He hoped for snacks. Loopy always hoped for snacks.)</p><p>Inside, lanterns hung like little moons. It felt like a clubhouse built out of kindness.<br>A leader held a wooden board covered in stickers. Loopy approved immediately. Stickers meant someone cared.</p><p>Two painted doors appeared:<br>Kids & Teens Tribe<br>Adults Tribe</p><p>Behind the kids’ door were superhero names and avatars. No face photos. A safe storybook world.<br>Behind the adults’ door, grown-ups chose their own style: some real names, some aliases, some photos, some none.</p><p>A “Mission Shelf” stood in the middle. Missions could be placed there so other Tribes could borrow them like recipes.</p><p>Loopy nodded. “If one team makes an amazing mission, other teams can do it too.”</p><p>Then Loopy saw the rules lantern:<br>Be kind.<br>Keep private details private.<br>No visible kids’ faces.<br>Don’t post littering.<br>If something yucky appears, use the Littering button.</p><p>“These rules don’t steal the magic,” Loopy whispered.<br>“They guard it.”',

      // Market Hut
      'market-hut.title': 'Market Hut',
      'market-hut.subtitle': 'Swap, Share, Reuse',
      'market-hut.desc': 'The Market Hut is a Cluj-first circular exchange where people reuse items instead of buying new. Patch Coins make it work without awkward item-for-item matching: you earn coins by helping, then use coins to choose items.\n\nSafety guidance is built into the flow. Adults choose their visibility, but children’s faces are never allowed.',
      'market-hut.why': 'Circular habits are one of the fastest ways to reduce waste. Patch Coins make reuse simple and fair — no awkward item-for-item matching, just kindness and coins.',
      'market-hut.loopy': 'Loopy followed a scent trail that smelled like “still useful.”<br>He found a little hut full of treasures: jackets, books, toys, puzzles with proud eyes.</p><p>A tag said: 120 Patch Coins.</p><p>Patch Coins are thank-you coins, the sign explained.<br>You earn them by saving the Earth in small ways.<br>You use them to choose treasures other people don’t need anymore.</p><p>Loopy finally understood the secret:<br>Swapping item-for-item is tricky.<br>But coins make it fair and simple.<br>You don’t match jacket-to-puzzle perfectly.<br>You match kindness… and the coins do the rest.</p><p>Loopy left the hut smiling, because the Market Hut wasn’t about stuff.<br>It was about second chances.',

      // Earth's Side of the Story
      'earth-side.title': 'Earth\'s Side of the Story',
      'earth-side.subtitle': 'Learning That Starts in Cluj',
      'earth-side.desc': 'Earth’s Side of the Story is the learning-and-action world that starts in Cluj and connects learning to missions. It has three doors:\n\n1) My Hazards • Explains hazards in a friendly way: - natural hazards - natural hazards made worse by pollution/changes people cause - hazards caused directly by people • Short learning cards and quizzes earn Patch Coins.\n\n2) Contamination & Recovery Zone (Cluj map) Adults (and older teens where appropriate) can add a pin (photo + short note) for: • littering hot spots • damaged areas / broken things • trees cut where they shouldn’t be • places needing care\n\nPins can become missions (or requests for missions). Later, this map can include verified helper pins: • Helpers (NGOs, researchers, community groups) • Missions (ways to help) • Reports (things needing attention)\n\n3) Learn & Play Short learning paths and quizzes that connect back to missions and Patch Coins.\n\nNext steps (later): • Tribe alerts: new pins can gently alert nearby Tribes so local teams can choose to help. • New cities/countries open slowly via a Discovery Phase (data + partners + priority missions). If discovery isn’t supported, the area stays “sleeping” until the community helps find data sources or partners.',
      'earth-side.why': 'Understanding “why” is the bridge between action and lasting change. This module makes learning accessible, emotionally safe, and directly connected to real missions.',
      'earth-side.loopy': 'Loopy returned to the biggest storybook he had ever seen:</p><p>THE EARTH’S SIDE OF THE STORY</p><p>“Earth,” Loopy whispered, “please explain yourself in a way a bear can understand.”</p><p>The book opened with a soft whoosh. Inside were three adventure doors.</p><p>Door One: My Hazards<br>A shelf held three jars:<br>Nature.<br>Nature, made worse.<br>People-made.</p><p>A kind sentence appeared:<br>Sometimes nature is wild.<br>Sometimes it gets worse when people change the air, the water, or the land.<br>Sometimes people accidentally build problems… then learn how to build better.</p><p>Loopy nodded. “Clear. Like bedtime.”</p><p>He tried a quiz. Patch Coins twinkled into his pocket like pocket stars.<br>“Learning that gives you coins,” Loopy said. “Finally.”</p><p>Door Two: Contamination & Recovery Zone<br>A map opened, glowing with one warm place:</p><p>Cluj.</p><p>Adults placed pins with photos and tiny notes:<br>“This spot has littering.”<br>“This bench is broken.”<br>“This tree was cut and it doesn’t look right.”</p><p>Loopy whispered, “That’s very useful pointing.”</p><p>Some pins could become missions.<br>“So learning doesn’t float away,” Loopy smiled. “It turns into action.”</p><p>Later, the map could show helper pins too: teams who clean rivers, study air, restore forests.<br>“A map that shows helpers,” Loopy whispered, “is a map with hope.”</p><p>And later still, new pins could give nearby Tribes a gentle lantern-nudge:<br>Something here needs care.<br>Not loud. Just an invitation to be brave and helpful.</p><p>Door Three: Learn & Play<br>The last room felt like puzzles, not homework. Loopy nearly answered like a bear (more berries).<br>The book offered another card, kindly.</p><p>At the edge of the page, other cities were faint outlines, sleeping chapters.<br>Before they open, the book said, we do a Discovery Phase: data, partners, priority missions.<br>Loopy smiled. “Good. No half-built chapters.”',

      // Games Room
      'games-room.title': 'Games Room',
      'games-room.subtitle': 'Play With a Purpose',
      'games-room.desc': 'The Games Room starts by embedding trusted nature-learning games so EarthPatchers can offer play-based learning quickly. Patch Coins unlock games (simple rule: coins open doors). Adults can play too and earn Patch Coins. Later: EarthPatchers-made games, and eventually Patcher Camp.',
      'games-room.why': 'Play is how children learn best. Starting with trusted games means learning happens fast, and Patch Coins keep engagement connected to real effort.',
      'games-room.loopy': 'Loopy found a door that hummed with quiet giggles:</p><p>GAMES ROOM</p><p>Inside wasn’t just one game. It was a room where many games could visit.<br>Some games were trusted guests that taught nature without feeling like homework.</p><p>Loopy nodded. “We invite good games to the party first… and later we bake our own cake.”</p><p>A small chest had a lock labeled Patch Coins.<br>Loopy grinned. “Coins open doors. Simple.”',

      // Activity Hut
      'activity-hut.title': 'Activity Hut',
      'activity-hut.subtitle': 'Your Adventure Journal',
      'activity-hut.desc': 'The Activity Hut is a personal home base that feels like an adventure journal. It shows: • your adventure trail (missions and milestones) • Patch Coins now (spendable) and Patch Coins earned (lifetime effort) • badges and achievements • role path (like MasterPatcher) Adults choose what to share publicly; kids stay within Tribe visibility rules.\n\nNext steps (later): • Safe kid-friendly AI can create a child’s Hero Story: a bedtime-story retelling of verified adventures, using alias + avatar only.',
      'activity-hut.why': 'Your adventure journal is where effort becomes visible. Badges show who you’re becoming, achievements show what you’ve done, and your Patch Coins total shows your lifetime impact.',
      'activity-hut.loopy': 'Loopy found a door shaped like a tree trunk:</p><p>ACTIVITY HUT</p><p>Inside, glowing footprints wandered across the wall.<br>“This is your adventure trail,” Loopy whispered. “Not to race. Just to remember you walked forward.”</p><p>He found badges that shimmered gently: Kind. Brave. Curious.<br>“These are who you are becoming,” Loopy said.</p><p>A banner appeared: Achievement Unlocked: First Mission Completed.<br>“And achievements,” Loopy added, “are things you did… like stickers in your book. Remember?”</p><p>Two jars sat on a shelf:<br>Patch Coins now.<br>Patch Coins earned.</p><p>Loopy pointed at the second jar and grinned.<br>“Even if you spend coins on a jacket, you don’t spend your effort. Your effort stays.”</p><p>In the corner, a ribbon-tied notebook waited with a label:<br>Hero Story (later)</p><p>Loopy smiled. “A storybook that writes your adventures back to you… that is the kind of magic that makes kids glow.”',

      // Eco Shops Directory
      'eco-shops.title': 'Eco Shops Directory',
      'eco-shops.subtitle': 'Find What’s Truly Sustainable',
      'eco-shops.desc': 'Eco Shops is a Cluj-first guide to sustainable products and local shops with ratings and comments to keep things honest. Quality rules reduce spam: • You can review or add products after earning enough Patch Coins and completing a verified mission. • New products are submitted via a template (photo, where to buy, materials, why it’s better, what to watch out for). • MasterPatchers verify entries before they go live.',
      'eco-shops.why': 'Finding truly sustainable products is hard. This directory keeps things honest with community reviews, verified missions, and MasterPatcher oversight.',
      'eco-shops.loopy': 'Loopy opened a guidebook full of notes and tiny opinions:<br>“This used to be refill.”<br>“This packaging changed.”<br>“This one is genuinely compostable.”</p><p>Loopy nodded. “Honesty is brave.”</p><p>A friendly rule glowed:<br>“You can only review orate or add products after you’ve earned Patch Coins and completed a verified mission.”</p><p>Loopy smiled. “So you don’t just wander in and shout opinions. You become a helper first.”',

      // The Green Wall
      'green-wall.title': 'The Green Wall',
      'green-wall.subtitle': 'Where Ideas Grow',
      'green-wall.desc': 'The Green Wall is an idea garden where people post ideas, vote, and form teams based on skills. Ideas can be: • local community projects (repair clubs, refill stations) • next steps for EarthPatchers itself (new features, new modules, expansion ideas)\n\nHelper Page explanation: The Helper Page is found inside the Activity Hut. It’s the part of your profile that can show what you learned and how you helped (optional sharing, adult-controlled).',
      'green-wall.why': 'Good ideas need more than enthusiasm — they need skills, teamwork, and sometimes funding. The Green Wall turns community energy into real projects.',
      'green-wall.loopy': 'Loopy found a wall covered in idea-leaves.<br>Some ideas were for the outside world. Some were for EarthPatchers itself.</p><p>People joined ideas like puzzle pieces:<br>“I can design.”<br>“I can organise.”<br>“I can code.”<br>“I can teach.”</p><p>Loopy grinned and announced:<br>“This wall doesn’t keep you out.<br>It grows branches over your head like a big tree crown… so even your ideas can sit in the shade and think.”',

      // Organisations & Scientists
      'org-scientists.title': 'Organisations & Scientists',
      'org-scientists.subtitle': 'Helper Pins on the Map',
      'org-scientists.desc': 'Verified organisations and researchers appear as special Helper pins within the Contamination & Recovery Zone in Earth’s Side of the Story. Pin types can include: • Helpers (NGOs, researchers, community groups) • Missions (ways to help) • Reports (things needing attention)\n\nThis helps people discover real helper teams, learn what they do in clear language, and join missions.',
      'org-scientists.why': 'Seeing who helps — and how to join them — turns a map of problems into a map of hope. Verified helper pins connect community action to real expertise.',
      'org-scientists.loopy': 'Loopy opened the map again and saw helper pins.<br>“This isn’t just ‘what’s wrong’,” he whispered.<br>“It’s also ‘who’s helping’ and ‘how to join.’”</p><p>Loopy nodded. “A map that shows helpers is a map with hope.”',

      // New Cities & Discovery Phase
      'new-cities.title': 'New Cities & Discovery Phase',
      'new-cities.subtitle': 'Growing Together, City by City',
      'new-cities.desc': 'EarthPatchers expands slowly and honestly. Each new city starts with a Discovery Phase: • find reliable data sources • find local helpers and partners • identify priority missions\n\nIf discovery isn’t supported yet, the new city stays “sleeping” until the community helps find data sources or partners.',
      'new-cities.why': 'Scaling should be honest and community-driven. No half-built chapters — each city opens properly with real data, real partners, and real priority missions.',
      'new-cities.loopy': 'Loopy traced faint outlines of sleeping cities.<br>“Not yet,” he whispered. “First we learn.”</p><p>A sign said: Discovery Phase.<br>Before a new city opens, EarthPatchers finds the data, the helpers, and the missions that matter most.</p><p>Loopy smiled. “No half-built chapters. We open them properly.”',

      // Patcher Camp
      'patcher-camp.title': 'Patcher Camp',
      'patcher-camp.subtitle': 'The Big Adventure Game',
      'patcher-camp.desc': 'Patcher Camp is a future flagship teamwork game. Kids work together through Earth zones using “powers” that are real knowledge: Earth, Water, Fire, Wind. It teaches practical skills, problem-solving, and brave teamwork. It comes after the Games Room foundation is working.',
      'patcher-camp.why': 'Games make learning irresistible. Patcher Camp connects play to real-world action, helping young people see their knowledge as superpowers for the planet.',
      'patcher-camp.loopy': 'Loopy found a rolled-up poster labeled PATCHER CAMP.<br>It showed kids facing a map of Earth zones, not to compete, but to help together.</p><p>Loopy whispered, “Their superpower is learning.”</p><p>He tied the poster closed gently.<br>“Not yet,” he smiled. “First we open the Games Room properly. Then we build our big adventure.”</p><p>"',

      // Module short descriptions (for cards)
      'mod.missions-hq.short': 'Real-life missions for kids, teens, and adults. Earn Patch Coins, badges, and achievements.',
      'mod.tribes.short': 'Safe team spaces with camp-style rules. Kids use aliases; missions can be shared across Tribes.',
      'mod.market-hut.short': 'Local circular exchange using Patch Coins. Reuse items instead of buying new.',
      'mod.earth-side.short': 'Learning + action map starting in Cluj. Three doors: hazards, local map, learn & play.',
      'mod.games-room.short': 'Trusted nature-learning games. Patch Coins unlock doors. Later: Patcher Camp.',
      'mod.activity-hut.short': 'Your personal adventure journal with badges, achievements, and Patch Coins tracking.',
      'mod.eco-shops.short': 'Community-driven guide to sustainable products and shops, verified by MasterPatchers.',
      'mod.green-wall.short': 'Idea garden where people post, vote, and form teams based on skills.',
      'mod.org-scientists.short': 'Verified helper pins on the map showing who helps, where, and how to join.',
      'mod.new-cities.short': 'City-by-city expansion through Discovery Phases with real data and partners.',
      'mod.patcher-camp.short': 'Future flagship teamwork game where knowledge becomes superpowers.',

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
      'mod.missions-hq': 'Centrul de Misiuni',
      'mod.tribes': 'Triburi',
      'mod.market-hut': 'Pia\u021ba Verde',
      'mod.earth-side': 'Povestea P\u0103m\u00e2ntului',
      'mod.games-room': 'Camera de Jocuri',
      'mod.activity-hut': 'Atelierul de Activit\u0103\u021bi',
      'mod.eco-shops': 'Director Magazine Eco',
      'mod.green-wall': 'Peretele Verde',
      'mod.org-scientists': 'Organiza\u021bii & Oameni de \u0218tiin\u021b\u0103',
      'mod.new-cities': 'Ora\u0219e Noi & Faza de Descoperire',
      'mod.patcher-camp': 'Tab\u0103ra Patcher',

      // Overview / Landing
      'hero.tagline': 'Sustenabilitate Ghidat\u0103 de Comunitate',
      'hero.subtitle': 'EarthPatchers este o comunitate magic\u0103 \u00een stil de tab\u0103r\u0103 unde copiii \u0219i adul\u021bii completeaz\u0103 misiuni reale pentru a salva P\u0103m\u00e2ntul, \u00eenva\u021b\u0103 cum func\u021bioneaz\u0103 lumea \u0219i reutilizeaz\u0103 lucruri \u00een loc s\u0103 le risipeasc\u0103.',
      'hero.cta.mvp': 'Exploreaz\u0103 Planul MVP',
      'hero.cta.modules': 'Descoper\u0103 Modulele',

      'overview.problem.title': 'De Ce Exist\u0103 EarthPatchers',
      'overview.problem.text': 'Pentru c\u0103 problemele lumii par enorme, iar oamenii \u00eenghe\u021b\u0103. EarthPatchers transform\u0103 \u201eprea mare\u201d \u00een pa\u0219i mici curajo\u0219i care \u00eencap \u00een via\u021ba real\u0103, apoi conecteaz\u0103 acei pa\u0219i la o comunitate local\u0103 (\u00eencep\u00e2nd din Cluj).',
      'overview.problem.solution': 'Piesa lips\u0103 nu e mai mult\u0103 con\u0219tientizare. E un drum clar \u0219i u\u0219or de la inten\u021bie la ac\u021biune, cu \u00eencredere, sprijin \u0219i o comunitate care se mi\u0219c\u0103 \u00eempreun\u0103.',

      'overview.diff.title': 'Patch Coins, Insigne, Realiz\u0103ri',
      'overview.diff.action.title': 'Patch Coins',
      'overview.diff.action.text': 'C\u00e2\u0219tig\u0103 \u0219i cheltuie. Folose\u0219te-le \u00een Market Hut acum, \u0219i mai t\u00e2rziu pentru a debloca Jocuri.',
      'overview.diff.families.title': 'Insigne',
      'overview.diff.families.text': 'Cine devii: curajos, bun, curios.',
      'overview.diff.practical.title': 'Realiz\u0103ri',
      'overview.diff.practical.text': 'Lucruri pe care le-ai f\u0103cut, ca stickerele din caietul t\u0103u.',
      'overview.diff.local.title': 'Local \u00cent\u00e2i, Apoi Scal\u0103m',
      'overview.diff.local.text': '\u00cencepem cu un ora\u0219 (Cluj), construim ceva care chiar func\u021bioneaz\u0103, \u0219i ne extindem cu sprijinul \u0219i \u00eencrederea comunit\u0103\u021bii.',

      'overview.how.title': 'Cum Func\u021bioneaz\u0103',
      'overview.how.step1.title': 'Te al\u0103turi',
      'overview.how.step1.text': 'Adul\u021bii seteaz\u0103 set\u0103rile importante pentru copii',
      'overview.how.step2.title': 'Alegi misiuni din Centrul de Misiuni',
      'overview.how.step2.text': 'Alege misiuni care se potrivesc timpului \u0219i abilit\u0103\u021bilor tale',
      'overview.how.step3.title': 'Faci misiuni \u00eentr-un Trib',
      'overview.how.step3.text': 'Spa\u021biu sigur de echip\u0103 unde ac\u021biona\u021bi \u00eempreun\u0103',
      'overview.how.step4.title': 'C\u00e2\u0219tigi Patch Coins',
      'overview.how.step4.text': 'Monede pe care le po\u021bi folosi \u00een Market Hut \u0219i mai t\u00e2rziu la Jocuri',
      'overview.how.step5.title': 'Explorezi Povestea P\u0103m\u00e2ntului',
      'overview.how.step5.text': '\u00cenve\u021bi despre pericole, observi probleme locale \u0219i \u00eent\u00e2lne\u0219ti echipe de ajutor',

      'overview.cluj.title': '\u00cencepe \u00een Cluj',
      'overview.cluj.text': 'EarthPatchers \u00eencepe \u00een Cluj \u0219i cre\u0219te cu grij\u0103. Ora\u0219ele noi se deschid mai t\u00e2rziu doar c\u00e2nd exist\u0103 suficient suport de descoperire (date + parteneri), ca s\u0103 r\u0103m\u00e2n\u0103 real \u0219i de \u00eencredere.',

      'overview.trust.title': 'Siguran\u021b\u0103 & Confiden\u021bialitate',
      'overview.trust.text': 'Copiii folosesc aliasuri \u0219i avataruri, iar fe\u021bele vizibile ale copiilor nu sunt permise. Activitatea copiilor este vizibil\u0103 doar \u00een Tribul lor. Adul\u021bii \u00ee\u0219i aleg propriile set\u0103ri de vizibilitate.',

      'overview.partners.title': 'Parteneriate',
      'overview.partners.text': 'EarthPatchers este conceput s\u0103 lucreze al\u0103turi de \u0219coli \u0219i ONG-uri, nu s\u0103 le \u00eenlocuiasc\u0103. Construim parteneriate locale \u0219i obiective de colaborare pe m\u0103sur\u0103 ce misiunile se extind.',

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

      'mvp.modules.title': 'Modulele MVP',
      'mvp.modules.intro': 'Aceste cinci module formeaz\u0103 nucleul MVP-ului \u0219i vor fi construite \u0219i testate \u00een planul de 36 de luni:',

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

      'mvp.globe.title': '\u201eGlobul\u201d Este Etapizat',
      'mvp.globe.intro': 'Experien\u021ba noastr\u0103 viitoare de \u00eenv\u0103\u021bare (un glob/hart\u0103 interactiv\u0103 \u201etip Encarta\u201d) este ad\u0103ugat\u0103 pas cu pas ca strat de \u00eenv\u0103\u021bare care sus\u021bine Misiunile:',
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
      'mvp.success.item4': 'Stratul de \u00eenv\u0103\u021bare etapizat ajut\u0103 oamenii s\u0103 \u00een\u021beleag\u0103 \u201ede ce\u201d \u0219i \u201ece urmeaz\u0103\u201d',
      'mvp.success.item5': 'Clujul devine o funda\u021bie solid\u0103 pentru expansiunea viitoare',

      // Next Steps
      'nextsteps.title': 'Pa\u0219i Urm\u0103tori',
      'nextsteps.intro': 'Dincolo de MVP, EarthPatchers \u00ee\u0219i propune un ecosistem bogat de module. Acestea vor fi modelate prin votul comunit\u0103\u021bii \u0219i fezabilitate prin Peretele Verde.',
      'nextsteps.explore': 'Exploreaz\u0103',

      // Module pages common
      'module.features': 'Caracteristici Cheie',
      'module.why': 'De Ce Conteaz\u0103',
      'module.mvp-badge': '\u00cen MVP',
      'module.future-badge': 'Modul Viitor',
      'module.coming-soon': 'Aceast\u0103 sec\u021biune este \u00een cre\u0219tere. Dezvolt\u0103m con\u021binut detaliat aici. Reveni\u021bi cur\u00e2nd sau contacta\u021bi-ne pentru mai multe informa\u021bii.',
      'module.prev': '\u2190 Anterior',
      'module.next': 'Urm\u0103tor \u2192',
      'module.loopy-toggle': 'Cite\u0219te Povestea lui Loopy',


      // Missions HQ
      'missions-hq.title': 'Centrul de Misiuni',
      'missions-hq.subtitle': 'De Unde Începe Totul',
      'missions-hq.desc': 'Missions HQ este locul de pornire: o bibliotecă de misiuni reale pentru copii, adolescenți și adulți, gândite ca „salvarea Pământului” să fie posibilă și într-o viață ocupată.\n\nMisiunile vin pe mărimi care încap în program: • Misiuni mici (10–20 minute) • Misiuni de weekend (1–2 ore) • Misiuni de echipă (familie, școală, club, Triburi)\n\nAdulții pot filtra misiuni după timp, temă și ce li se potrivește (reparații, organizare, predare, grădinărit, design, fotografie), ca ajutorul să fie personal.\n\nRecompense simple: • Patch Coins se câștigă prin misiuni și învățare și se folosesc în Market Hut (și mai târziu la Jocuri). • Insignele arată cine devii (curajos, bun, curios). • Realizările sunt ce ai făcut, ca niște stickere în caietul tău.',
      'missions-hq.why': 'Misiunile transformă anxietatea climatică în acțiune realizabilă. Oferă familiilor și tinerilor un punct de plecare clar: o misiune o dată, construind schimbare reală pas cu pas.',
      'missions-hq.loopy': 'A fost odată un urs pe nume Loopy.  <br>Îi zicem Loopy Ursul, fiindcă… așa a insistat el.</p><p>Loopy purta o pălărie cu o frunză. Mult prea elegantă pentru un urs.  <br>Dar Loopy era un urs elegant, și asta era tot.</p><p>Într-o dimineață, Loopy a pornit la plimbarea lui de rutină. Îi plăceau diminețile, pentru că pădurea părea proaspăt spălată, ca o pătură întinsă la soare. Pe drum a trecut pe lângă un pârâu, a salutat două ciocănitori (care nu l-au salutat înapoi, fiindcă ciocănitorile sunt mereu ocupate), și a ajuns într-o poieniță pe care nu o mai văzuse.</p><p>În mijlocul ei era un indicator din lemn:</p><p><em>MISSIONS HQ</em></p><p>Loopy a clipit de două ori.  <br>„Hm,” a șoptit el, „Sediu. Acolo sigur se păstrează planuri secrete… și, cu puțin noroc, biscuiți.”</p><p>A încercat să pășească încet, dar un urs care pășește încet arată ca o pernă uriașă care încearcă să nu scârțâie. Totuși, nimeni nu s-a speriat. Dimpotrivă: în jurul unui foc de poveste stăteau oameni mici și oameni mari, cu ochi luminoși, ca atunci când urmează o surpriză bună.</p><p>Pe o masă erau așezate cartonașe ca niște hărți de comori.</p><p>„…mâine salvăm Pământul,” a spus cineva.</p><p>Loopy a încremenit cu un lăbuț ridicat.  <br>„Să salvăm Pământul?” a șoptit el. „Asta e o propoziție uriașă. Are nevoie de o căruță.”</p><p>Apoi a văzut ce făceau, de fapt.</p><p>Un copil a ridicat un cartonaș și a citit cu voce serioasă, de parcă era un cavaler:<br>„<em>Misiunea: Ninja Luminilor!</em>”</p><p>Tata a zâmbit: „Ninja, dacă prinzi lumina lăsată aprinsă în camere goale… câștigi!”  <br>Copilul a fugit, a stins un întrerupător și s-a întors cu o față de „am salvat lumea”.</p><p>Tata a încercat să pară calm: „Poate luna asta vine factura mai mică.”  <br>Loopy a gândit: Oamenii mari se prefac că nu se bucură… dar sprâncenele lor spun adevărul.</p><p>Alt cartonaș: „<em>Misiunea: Repară un lucru.</em>”  <br>Loopy a făcut un „HOP!” dramatic (așa făcea el mereu).  <br>„Să repari,” a șoptit el, „înseamnă să-i spui planetei: «Nu trebuie să facem altul nou. Putem fi isteți.»”</p><p>Alt cartonaș: „<em>Misiunea: Fă o curățenie mică, dar deșteaptă.</em>”  <br>Un adult a zis: „Azi punem lucrurile la loc și folosim mai puține pungi.”  <br>Loopy a dat din cap foarte grav, ca un profesor de pădure: „Așa. Mici pași. Pași care încap în picioare.”</p><p>Când o misiune se termina, se întâmpla ceva blând.  <br>Nu exploda nimic. Nu urla nimeni.  <br>Doar… apărea un licurici de hârtie, o insignă mică, cu un cuvânt.</p><p><em>Bun. Curajos. Curios.</em></p><p>Apoi a apărut un mesaj, ca o ștampilă într-un carnet:<br><em>Realizare deblocată: Prima misiune terminată!</em></p><p>Loopy a găsit un semn care explica simplu, de parcă îi vorbea unui prieten:<br><em>Insignele</em> arată cine devii.  <br><em>Realizările</em> arată ce ai făcut, ca stickere în caietul tău.</p><p>Apoi Patch Coins au sclipit ca niște steluțe de buzunar.</p><p>Loopy a privit oamenii, cartonașele, focul și licuricii-însigne și a zis încet:<br>„Asta nu e doar un plan. Asta e un cerc. Un loop.”',

      // Tribes
      'tribes.title': 'Triburi',
      'tribes.subtitle': 'Echipa Ta Sigură',
      'tribes.desc': 'Un Trib este o echipă mică (ca un club). Există: • Triburi pentru copii/adolescenți (alias + avatar, fără fețe de copii, activitatea copiilor se vede doar în Trib) • Triburi doar pentru adulți (adulții își aleg vizibilitatea)\n\nMisiunile pot fi preluate între Triburi, ca ideile bune să circule fără să expunem conturile copiilor.\n\nReguli simple, „de tabără”: • Fii bun • Nu da detalii private • Fețele copiilor nu apar niciodată • Nu posta gunoi aruncat / mizerie (și nu încuraja) • Folosește „Raportează mizeria” când apare ceva nepotrivit',
      'tribes.why': 'Sustenabilitatea nu e doar despre sarcini — e despre apartenență. Triburile transformă platforma într-o comunitate unde oamenii se sprijină reciproc, acționează împreună și păstrează lucrurile sigure și prietenoase.',
      'tribes.loopy': 'A doua zi, Loopy s-a întors în poieniță.  <br>Și-a aranjat pălăria cu frunza (pentru că pălăria se aranjează, nu se poartă, după părerea lui Loopy).</p><p>Pe un copac era un semn puțin strâmb, de parcă un veverițoi l-ar fi montat din fugă:</p><p><em>TRIBURI</em></p><p>Loopy a mormăit:<br>„Triburi… sună ca un loc unde echipele țin secrete importante… și, poate, gustări.”  <br>(Loopy spera la gustări. Loopy spera mereu la gustări.)</p><p>Înăuntru, felinare atârnau ca niște lunii mici. Se simțea ca într-un club de tabără: cald, prietenos, cu un pic de „hai să facem ceva bun”.</p><p>În mijloc, un lider ținea o scândurică plină de stickere.  <br>Loopy a aprobat imediat. Stickerele înseamnă că cineva chiar îi pasă.</p><p>Acolo erau două uși pictate:</p><p><em>Trib Copii & Adolescenți</em>  <br><em>Trib Adulți</em></p><p>Loopy s-a uitat întâi la ușa copiilor. Înăuntru erau avatare: un arici cu o eșarfă, o vulpe cu o lanternă, un dragon mic care părea că are voie să fie dragon doar în zilele de marți. Nimeni nu avea poze cu fața. Toți aveau nume de aventură: „Curajosul Pin”, „Iepurașul Sprinten”, „Detectivul Ploaie”.</p><p>„Aha,” a șoptit Loopy. „Aici e lumea de poveste. Sigură.”</p><p>Apoi s-a uitat la ușa adulților. Înăuntru, fiecare își alegea stilul: unii cu nume reale, unii cu nume de aventură. Unii cu poze, unii fără.  <br>„Grown-up style,” a gândit Loopy, apoi s-a corectat repede: „Stil de om mare.”</p><p>În mijloc era un „Raft de Misiuni”. Misiunile bune puteau fi puse acolo, ca alte Triburi să le ia.  <br>„Ca rețetele,” a zis Loopy. „Când găsești o supă bună, o împarți.”</p><p>Apoi a văzut „Regulile de Tabără”. Nu erau multe și nici sperietoare. Erau din acelea care păzesc joaca, nu o strică:</p><p>• Fii bun.  <br>• Nu spune lucruri private.  <br>• Fețele copiilor nu apar niciodată.  <br>• Nu posta gunoi aruncat. (Dacă vezi mizerie afară, o cureți într-o misiune, nu o faci vedetă pe internet.)  <br>• Dacă apare ceva nepotrivit, apasă: <em>„Raportează mizeria”</em>.</p><p>Loopy a dat din cap serios:<br>„Regulile astea nu fură magia,” a șoptit el.  <br>„O păzesc. Ca un paznic prietenos… cu o lanternă și, sper eu, gustări.”',

      // Market Hut
      'market-hut.title': 'Piața Verde',
      'market-hut.subtitle': 'Schimbă, Împarte, Reutilizează',
      'market-hut.desc': 'Market Hut este schimbul circular local (Cluj întâi): refolosim lucruri în loc să cumpărăm mereu noi. Patch Coins rezolvă problema „schimbului perfect”: nu trebuie să găsești pe cineva care vrea exact ce ai tu, exact când vrei tu altceva.',
      'market-hut.why': 'Obiceiurile circulare sunt una dintre cele mai rapide modalități de a reduce risipa. Patch Coins fac reutilizarea simplă și corectă — fără schimb complicat, doar bunătate și monede.',
      'market-hut.loopy': 'Într-o zi, Loopy a simțit un miros de „încă bun”.  <br>Nu miros de supă. Miros de lucruri care au încă povești în ele.</p><p>A urmat mirosul și a ajuns la o căsuță cu o firmă de lemn:</p><p><em>MARKET HUT</em></p><p>Înăuntru era o comoară liniștită: o geacă de iarnă care părea pregătită pentru încă trei ninsori, o cutie cu creioane care încă voiau să deseneze, o carte care șoptea „mai citește-mă o dată”.</p><p>Loopy a găsit un bilețel: <em>120 Patch Coins</em>.</p><p>„Monede?” a șoptit el. „Pentru comori?”</p><p>Un semn, foarte politicos, i-a explicat:<br>Patch Coins sunt monede de mulțumire.  <br>Le câștigi când ajuți Pământul.  <br>Le folosești ca să alegi lucruri pe care alții nu le mai folosesc.</p><p>Loopy a înțeles ceva deștept:  <br>Schimbul „lucru pe lucru” e greu. Poate tu vrei o geacă, dar omul cu geaca vrea o bicicletă, iar tu ai… un puzzle cu pinguini. Pinguinii sunt foarte simpatici, dar nu țin loc de bicicletă.</p><p>„Aha!” a zis Loopy. „Monedele fac schimbul simplu și drept.”  <br>Nu trebuie să potrivești geacă cu puzzle perfect.  <br>Potrivești bunătate… și monedele fac restul.</p><p>În colț era un panou cu „Cum schimbăm frumos”.  <br>Loopy a citit și a dat din cap: „Bun. O căsuță cu reguli prietenoase. Așa se ține tabăra curată.”</p><p>Apoi a plecat zâmbind, cu pălăria lui elegantă și cu o idee mare în cap:<br>„Nu aruncăm povești. Le dăm mai departe.”',

      // Earth's Side of the Story
      'earth-side.title': 'Povestea Pământului',
      'earth-side.subtitle': 'Învațare Care Începe în Cluj',
      'earth-side.desc': 'Este lumea de învățare + harta de acțiune care începe în Cluj. Are trei „uși”: 1) My Hazards (riscuri explicate simplu + quiz-uri) 2) Zona de poluare și refacere (harta Cluj cu marcaje: poză + notă; marcajele pot deveni misiuni; mai târziu apar „ajutători” verificați) 3) Learn & Play (învățare scurtă, ca joc)\n\nMai târziu: • marcajele noi pot trimite un semn blând Triburilor din zonă • orașe noi se deschid doar cu Faza de descoperire (date + parteneri + misiuni importante)',
      'earth-side.why': 'Înțelegerea „de ce” este podul între acțiune și schimbare durabilă. Acest modul face învățarea accesibilă, sigură emoțional și conectată direct la misiuni reale.',
      'earth-side.loopy': 'Loopy a găsit o carte uriașă, atât de mare încât părea o ușă de castel. Pe copertă scria:</p><p><em>THE EARTH’S SIDE OF THE STORY</em></p><p>Loopy a pus o lăbuță pe copertă și a șoptit:<br>„Pământule, te rog… explică-te pe înțeles de urs.”</p><p>Cartea s-a deschis cu un fâșâit moale, ca atunci când întorci multe pagini deodată. Înăuntru erau trei uși. Uși de aventură, nu uși de frică.</p><p><strong>Ușa 1: My Hazards</strong><br>Prima cameră mirosea a vânt și a nori. Pe un raft erau trei borcane.</p><p>Primul borcan: <em>Natură</em>  <br>Al doilea: <em>Natură, dar mai rău</em>  <br>Al treilea: <em>Făcut de oameni</em></p><p>Pe perete a apărut un text blând:<br>„Uneori natura e sălbatică. Uneori devine mai greu când oamenii schimbă aerul, apa sau pământul. Și uneori oamenii fac probleme fără să vrea, apoi învață să facă mai bine.”</p><p>Loopy a dat din cap.  <br>„Bun. Asta se poate povesti.”</p><p>Apoi a găsit un card de quiz.  <br>A răspuns cu foarte multă concentrare.  <br>Patch Coins au sclipit în buzunar ca niște steluțe.</p><p>„Învățare cu scântei,” a zis Loopy fericit.</p><p><strong>Ușa 2: Zona de poluare și refacere</strong><br>A doua ușă s-a deschis spre o hartă. Nu era toată lumea. Încă nu.</p><p>Era un loc cald care lumina:</p><p><em>Cluj</em></p><p>Loopy s-a apropiat și a șoptit:<br>„Începem aici, pentru că eroii încep de unde le sunt lăbuțele.”</p><p>Adulții puneau marcaje pe hartă cu o poză și o notă scurtă:<br>„Aici se aruncă des gunoi.”  <br>„Aici e ceva stricat.”  <br>„Aici e un loc care are nevoie de grijă.”</p><p>Loopy s-a uitat și a zis:<br>„Asta e arătare utilă.”</p><p>Apoi a văzut ceva grozav:  <br>unele marcaje puteau deveni misiuni.</p><p>„Aha!” a zâmbit Loopy.  <br>„Învățarea nu se evaporă. Se face faptă.”</p><p>Cartea mai spunea că, mai târziu, harta poate arăta și „ajutători” verificați: echipe, ONG-uri, cercetători, grupuri care știu să repare lucruri cu cap.  <br>„O hartă cu ajutători,” a șoptit Loopy, „e o hartă cu speranță.”</p><p>Și, într-o zi, când apare un marcaj nou, Triburile din apropiere pot primi un semn mic, ca o pâlpâire de felinar:<br>„E ceva aici care are nevoie de grijă.”<br>Nu zgomotos. Nu stresant. Doar o invitație curajoasă.</p><p><strong>Ușa 3: Learn & Play</strong><br>A treia cameră arăta ca un joc care se preface că e lecție, dar de fapt e joc.  <br>Loopy a încercat un puzzle și aproape a răspuns „mai multe fructe de pădure”, dar cartea a fost drăguță și i-a mai dat un card.</p><p>La marginea paginii erau alte orașe desenate foarte fin, ca niște capitole adormite.  <br>„Se deschid când suntem gata,” a citit Loopy. „Întâi facem Faza de descoperire: găsim date bune, ajutători și misiuni importante.”</p><p>Loopy a zâmbit și și-a aranjat pălăria:<br>„Capitolele se deschid frumos. Nu pe jumătate.”',

      // Games Room
      'games-room.title': 'Camera de Jocuri',
      'games-room.subtitle': 'Joacă-te cu un Scop',
      'games-room.desc': 'Începe cu jocuri integrate (jocuri bune despre natură), ca să avem joacă + învățare repede. Patch Coins deblochează jocuri. Mai târziu vine Patcher Camp.',
      'games-room.why': 'Joaca e modul în care copiii învață cel mai bine. Începând cu jocuri de încredere, învățarea vine repede, iar Patch Coins mențin legătura cu efortul real.',
      'games-room.loopy': 'Loopy a găsit o ușă care… părea că chicotește. Nu tare. Doar cât să-ți dea curaj să intri.</p><p>Pe ușă scria:</p><p><em>GAMES ROOM</em></p><p>Înăuntru nu era un singur joc. Era o cameră în care pot veni mai multe jocuri, ca într-o poiană de tabără unde se schimbă activitățile: ba o vânătoare de comori, ba un puzzle, ba un joc despre păsări care te face să zici „vai, ce istețe sunt!”</p><p>„Aha,” a zis Loopy. „Întâi invităm jocuri bune care deja există. Le aducem aici, ca oaspeți de încredere.”  <br>Apoi s-a uitat la un panou cu o regulă simplă:<br><em>Patch Coins deschid jocuri.</em></p><p>Loopy a zâmbit.<br>„Monedele deschid uși,” a zis el. „E o regulă care încape și în mintea mea de urs.”</p><p>Și, fiind Loopy, a adăugat:<br>„Dacă o ușă nu se deschide… probabil ai nevoie de încă o misiune. Sau de o gustare. Uneori ambele.”',

      // Activity Hut
      'activity-hut.title': 'Atelierul de Activități',
      'activity-hut.subtitle': 'Jurnalul Tău de Aventuri',
      'activity-hut.desc': 'Jurnalul personal: urma aventurii, Patch Coins acum vs câștigate, insigne, realizări, roluri, setări de vizibilitate. Mai târziu: AI sigur pentru copii care creează „Povestea Eroului” din aventuri verificate (doar alias + avatar).',
      'activity-hut.why': 'Jurnalul tău de aventuri este locul unde efortul devine vizibil. Insignele arată cine devii, realizările arată ce ai făcut, iar totalul de Patch Coins arată impactul tău pe viață.',
      'activity-hut.loopy': 'Loopy a găsit o ușă ca un trunchi de copac, cu o steluță și o lăbuță sculptate.</p><p><em>ACTIVITY HUT</em></p><p>Înăuntru era cald ca într-un cuib. Pe perete erau urme luminoase, ca o potecă de licurici.</p><p>„Asta e urma aventurii tale,” a șoptit Loopy.  <br>„Nu ca să te grăbești. Ca să-ți amintești că ai mers.”</p><p>Pe un raft erau insigne care străluceau blând: Bun. Curajos. Curios.  <br>„Insignele arată cine devii,” a zis Loopy.</p><p>Apoi a apărut o ștampilă de poveste:<br><em>Realizare deblocată: Prima misiune terminată</em></p><p>Loopy a zâmbit:<br>„Iar realizările sunt ce ai făcut… ca stickerele în caietul tău. Ții minte?”</p><p>În colț erau două borcane:<br><em>Patch Coins acum</em> și <em>Patch Coins câștigate</em>.</p><p>Loopy a arătat spre al doilea:<br>„Chiar dacă dai monede pe o geacă, efortul tău rămâne aici. Efortul nu se cheltuie.”</p><p>Apoi a văzut un carnet legat cu panglică:<br><em>Povestea Eroului (mai târziu)</em></p><p>Loopy a pus o lăbuță pe el și a șoptit:<br>„Într-o zi, când magia e sigură pentru copii, carnetul ăsta îți va scrie aventura înapoi.  <br>O poveste de seară din faptele tale bune… fără nume reale, fără poze cu fețe. Doar tu, avatarul tău și curajul tău.”',

      // Eco Shops Directory
      'eco-shops.title': 'Director Magazine Eco',
      'eco-shops.subtitle': 'Găsește Ce E Cu Adevărat Sustenabil',
      'eco-shops.desc': 'Ghid Cluj-întâi cu produse și magazine eco, cu rating + comentarii ca să rămână totul cinstit. Poți adăuga/evalua doar după ce ai Patch Coins suficiente și o misiune verificată. Produsele se trimit pe un șablon și sunt verificate de MasterPatchers.',
      'eco-shops.why': 'Găsirea produselor cu adevărat sustenabile e dificilă. Acest director păstrează lucrurile cinstite cu recenzii din comunitate, misiuni verificate și verificare MasterPatcher.',
      'eco-shops.loopy': 'Loopy a găsit o carte ca un catalog de comori, dar cu note scrise de oameni adevărați.</p><p>„Săpunul ăsta e refill și miroase a lămâie.”  <br>„Ambalajul s-a schimbat, acum nu mai e la fel de bun.”  <br>„Asta chiar se poate composta.”</p><p>Loopy a dat din cap serios:<br>„Să spui adevărul despre un lucru… e un fel de curaj mic.”</p><p>Apoi a văzut o regulă:<br>„Doar cei care au făcut o misiune verificată și au Patch Coins pot să dea note și să adauge produse.”</p><p>„Perfect,” a zis Loopy.  <br>„Întâi ajuți. Apoi vorbești. Așa rămâne ghidul curat și de încredere.”</p><p>Și mai era un șablon de adăugare:<br>poză, unde se găsește, din ce e făcut, de ce e mai bun, la ce să fii atent.</p><p>„Foarte bine,” a zis Loopy. „Când pui ordine în informație, informația nu mai fuge.”',

      // The Green Wall
      'green-wall.title': 'Peretele Verde',
      'green-wall.subtitle': 'Unde Ideile Cresc',
      'green-wall.desc': 'Grădina de idei: idei pentru comunitate și idei pentru următorii pași ai EarthPatchers. Oamenii se adună după ce știu să facă (skill). Helper Page este în Activity Hut și e opțional.',
      'green-wall.why': 'Ideile bune au nevoie de mai mult decât entuziasm — au nevoie de competențe, muncă în echipă și uneori finanțare. Peretele Verde transformă energia comunității în proiecte reale.',
      'green-wall.loopy': 'Loopy a găsit un perete care nu era perete. Era o pădure de idei.</p><p>Pe el erau frunze-notițe:<br>„Club de reparații.”  <br>„Grădină la școală.”  <br>„O funcție nouă în EarthPatchers.”  <br>„Un oraș nou, când va fi timpul.”</p><p>Oamenii nu doar lipeau idei. Se lipeau și ei de idei:<br>„Eu desenez.”  <br>„Eu organizez.”  <br>„Eu repar.”  <br>„Eu predau.”</p><p>Loopy a zâmbit:<br>„O idee e o sămânță. O echipă e ploaia.”</p><p>Apoi a spus, foarte mândru de el:<br>„Peretele ăsta nu te ține afară.  <br>Îți crește o coroană de copac deasupra capului…  <br>ca ideile tale să stea la umbră, să se răcorească… și să se gândească cum să devină adevărate.”</p><p>Și, fiind Loopy, a adăugat încet:<br>„Dacă ideile ar fi supă, peretele ăsta ar fi o oală mare. Și eu… aș cere o lingură.”',

      // Organisations & Scientists
      'org-scientists.title': 'Organizații & Oameni de Știință',
      'org-scientists.subtitle': 'Ajutori pe Hartă',
      'org-scientists.desc': 'Organizațiile și cercetătorii verificați apar ca „ajutători” pe harta din Zona de poluare și refacere (Earth’s Side of the Story), împreună cu misiuni asociate. Scopul este să vezi clar cine ajută, unde și cum te poți implica.',
      'org-scientists.why': 'Să vezi cine ajută — și cum te poți alătura — transformă o hartă cu probleme într-o hartă cu speranță. Marcajele verificate conectează acțiunea comunitară la expertiză reală.',
      'org-scientists.loopy': 'Loopy s-a întors la hartă și a văzut marcaje care nu spuneau doar „aici e o problemă”.</p><p>Unele spuneau:<br>„Aici e o echipă care curăță râul.”  <br>„Aici sunt oameni care studiază aerul.”  <br>„Aici e un grup care plantează copaci și îi îngrijește.”</p><p>Loopy a șoptit:<br>„Asta îmi place. Nu e doar o hartă cu griji. E și o hartă cu ajutor.”</p><p>A apăsat pe un marcaj și a apărut o explicație scurtă, pe înțeles:<br>ce fac, de ce contează, cum poți ajuta.</p><p>Loopy a zâmbit:<br>„Când vezi ajutători, îți vine și ție să ajuți.”',

      // New Cities & Discovery Phase
      'new-cities.title': 'Orașe Noi & Faza de Descoperire',
      'new-cities.subtitle': 'Creștem Împreună, Oraș cu Oraș',
      'new-cities.desc': 'EarthPatchers se extinde lent și onest. Un oraș nou se deschide doar după Faza de descoperire: găsim date bune, parteneri locali și misiunile care contează. Dacă nu există sprijin suficient, orașul rămâne „adormit” până când comunitatea ajută cu surse de date sau conexiuni.',
      'new-cities.why': 'Scalarea trebuie să fie onestă și condusă de comunitate. Fără capitole pe jumătate — fiecare oraș se deschide cu date reale, parteneri reali și misiuni prioritare.',
      'new-cities.loopy': 'Loopy a văzut la marginea hărții contururi de orașe, desenate fin, ca în creion.</p><p>„Sunt adormite,” a zis el. „Nu uitate. Doar… încă nu e timpul.”</p><p>Pe o etichetă scria:<br><em>Faza de descoperire</em></p><p>Loopy a citit:<br>„Înainte să deschidem un oraș nou, găsim paginile lipsă: date bune, ajutători locali, misiuni importante.”</p><p>Loopy a dat din cap:<br>„Dacă deschizi un capitol fără pagini, te tot uiți și zici ‘hă?’”</p><p>Apoi a zâmbit și a spus ca un urs care a învățat ceva important:<br>„Capitolele se deschid frumos. Nu pe jumătate.”',

      // Patcher Camp
      'patcher-camp.title': 'Tabăra Patcher',
      'patcher-camp.subtitle': 'Marea Aventură',
      'patcher-camp.desc': 'Patcher Camp este jocul mare de echipă, construit mai târziu, în Games Room. Copiii au „puteri” care sunt cunoștințe reale (Pământ/Apă/Foc/Vânt) și rezolvă împreună probleme din diferite zone ale lumii. Vine după ce Games Room funcționează bine.',
      'patcher-camp.why': 'Jocurile fac învățarea irezistibilă. Tabăra Patcher conectează joaca de acțiunea reală, ajutând tinerii să-și vadă cunoștințele ca superputeri pentru planetă.',
      'patcher-camp.loopy': 'Loopy a găsit un poster rulat, legat cu sfoară:<br><em>PATCHER CAMP</em></p><p>L-a desfăcut cu grijă. Pe poster erau copii în fața unei hărți uriașe, pe zone: deșert, pădure, munte, coastă.</p><p>Fiecare copil avea o „putere” scrisă simplu:<br>Pământ. Apă. Foc. Vânt.</p><p>Loopy a ridicat o sprânceană:<br>„Nu sunt puteri de ‘abracadabra’,” a șoptit el.  <br>„Sunt puteri de ‘știu ce fac’.”</p><p>Pe poster scria că trebuie să lucreze împreună:<br>unul știe despre apă, altul despre cum se construiește adăpost, altul despre energie, altul despre vânt și aer.</p><p>Loopy a zâmbit:<br>„Superputerea lor e că învață și apoi fac.”</p><p>A rulat posterul la loc și a legat sfoara:<br>„Nu încă,” a spus el blând.  <br>„Întâi pregătim camera de jocuri. Apoi facem aventura noastră mare.”</p><p>Și, fiind Loopy, a adăugat:<br>„Și sper… că în tabără există și gustări.”"',

      // Module short descriptions
      'mod.missions-hq.short': 'Misiuni reale pentru copii, adolescenți și adulți. Câștigă Patch Coins, insigne și realizări.',
      'mod.tribes.short': 'Spații sigure de echipă cu reguli de tabără. Copiii folosesc aliasuri; misiunile circulă între Triburi.',
      'mod.market-hut.short': 'Schimb circular local cu Patch Coins. Refolosește în loc să cumperi nou.',
      'mod.earth-side.short': 'Hartă de învățare + acțiune începând din Cluj. Trei uși: riscuri, hartă locală, învață și joacă.',
      'mod.games-room.short': 'Jocuri de încredere despre natură. Patch Coins deschid uși. Mai târziu: Tabăra Patcher.',
      'mod.activity-hut.short': 'Jurnalul tău personal de aventuri cu insigne, realizări și urmărire Patch Coins.',
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
