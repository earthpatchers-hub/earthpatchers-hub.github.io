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
      'mvp.notincluded.text': 'EarthPatchers has many future ideas (Games Room, Activity Hut, Eco Shops Directory, Green Wall, Organisations & Scientists, New Cities tooling, Patcher Camp). These are Next Steps, so people don\'t confuse the MVP with everything we might build later. Specifically: Games Room is Next Steps, not MVP.',

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
      'module.loopy-toggle': 'Read Loopy\'s Story',
      'module.next-steps-title': 'Coming Later',


      // Missions HQ
      'missions-hq.title': 'Missions HQ',
      'missions-hq.subtitle': 'Where It All Begins',
      'missions-hq.desc': '<p>Missions HQ is where EarthPatchers begins. It is a library of real-life missions for kids, teens, and adults, designed to make saving the Earth feel doable.</p><p>Missions are designed for different routines:</p><ul><li>Tiny missions for busy families (10-20 minutes)</li><li>Weekend missions for deeper impact (1-2 hours)</li><li>Team missions for schools, youth groups, and community teams</li></ul><p>Adults can match missions to their time and skills, while kids experience missions as practical adventures. Rewards stay simple:</p><ul><li>Patch Coins are earned through missions and learning and can be used in the Market Hut (and later Games)</li><li>Badges are about who you are becoming (brave, kind, curious)</li><li>Achievements are things you did, like stickers in your book</li></ul>',
      'missions-hq.why': 'Missions turn climate anxiety into doable action. They give families and young people a clear starting point: one mission at a time, building real change step by step.',
      'missions-hq.loopy': '<p>Once upon a time there was a bear named Loopy. We shall call him Loopy the Bear, because well… he insisted. Not “a bear.” Not “that bear over there.” Not even “Mr. Bear,” which was offered politely by a squirrel and rejected immediately. “Loopy the Bear,” he said, tapping his chest with one paw like a very important person signing an autograph. Loopy wore a hat with a leaf on it. It was far too fancy for a bear. But Loopy was a fancy bear, and that was that. The leaf was pinned at just the right angle, as if it had spent years training for this moment. Sometimes, when Loopy felt dramatic, he tilted the hat and whispered, “I am not just a bear. I am… a fancy bear, professionally.”</p><p>The forest tolerated this. One morning, Loopy went for his daily walk. He walked slowly, because fast walking is how you trip, and tripping is how you lose dignity. As he wandered, he hummed a tune only bears know, and he stopped to greet a mushroom. “Good morning,” Loopy said. The mushroom did not answer. Loopy nodded. “Shy. I respect that.” He followed a path where the air felt busy, as if invisible bees were carrying secrets from one leaf to another. The sunlight was doing that glittery thing it does when it wants attention, and Loopy was just about to compliment it when he stepped into a small clearing and found a wooden sign: MISSIONS HQ Loopy squinted at the letters. “Hm,” he whispered, “Headquarters. That sounds like a place where serious things happen… like secret plans… and maybe biscuits.” He lowered his voice even more, because Loopy was convinced that important places can hear you. “If there are biscuits,” he added softly, “I will behave.” He padded forward, careful not to crunch any twigs too loudly. Inside the clearing, around a warm story-fire, sat little people and big people. They weren’t arguing. They weren’t rushing. They looked… focused. Like a team of tiny wizards, except with snack crumbs. They held mission cards like treasure maps. The cards glowed just a little, as if they’d been dipped in moonlight and dried on a windowsill. A grown-up said, “Okay… tomorrow we do it.” “…to save the Earth,” someone else said. Loopy froze mid-tiptoe. One paw lifted. One eyebrow lifted too, even though bears aren’t technically supposed to do eyebrows like that. “Save the Earth?” Loopy whispered. “That is a very big sentence.” He glanced at the fire. The fire crackled politely, as if to say, Yes. It is big. But keep listening.</p><p>A child held up a card and read aloud: “Mission: Lights Ninja!” Loopy leaned in. “Ninja?” he whispered. “A tiptoe mission. I approve.” The dad smiled. “If you catch the lights leaving rooms empty, you win.” The child stood up, serious as a royal guard, tiptoed away, and returned a moment later with the calm confidence of someone who had just saved a whole kingdom. “I turned off two lights,” the child announced. Loopy gasped (he always did). “Two lights? That’s basically… a heroic double.” The dad tried not to look too excited. “The bill might be smaller this month.” Loopy watched the dad’s face carefully. Humans pretend not to enjoy saving money… but their eyebrows tell the truth. The dad’s eyebrows were doing a tiny happy dance. Loopy nodded solemnly. “Very brave,” he said, as if speaking of a campfire secret. Another card slid across the group like it had its own little legs. “Mission: Fix One Thing.” Loopy gasped again. “Fixing things,” he declared, make a new one. We can be clever.’” “is like telling the planet: ‘You don’t have to The grown-ups murmured in agreement. One person held up a sock with a hole. Another held up a toy with a loose wheel. Someone else held up a zipper and looked at it with the suspicious face people use when a zipper has betrayed them in the past. Loopy leaned toward the zipper and whispered, “I am watching you.” The zipper behaved. Then a teen raised a card that said: “Mission: Snack Detective.” Loopy’s ears perked up instantly. “Finally,” he whispered. “A mission that speaks my language.” The teen read it out: “Check the snacks. Choose the one with less packaging. If you can, pick something local.”</p><p>Loopy stared at the card, impressed and slightly hungry. “So,” Loopy said, “even snacks can be brave.” The fire crackled again, approving. As the missions were chosen, something magical happened. Not huge magic like fireworks. Small magic. The kind that sneaks into your day and makes it better without making a fuss. A badge floated down like a friendly firefly and hovered above the child’s head. Kind. Brave. Curious. The child blinked. “Is that… for me?” Loopy nodded, solemn as a judge. “Yes. The badge has spoken.” Then a banner popped up in the air, like the forest itself had a little announcement board: Achievement Unlocked: First Mission Completed Loopy clapped once, because clapping twice would have been showing off. He spotted a sign nailed to a post beside the fire, written in friendly letters: Badges are about who you are becoming. Achievements are about things you did, like stickers in your book. Loopy read it slowly, because this was important bear literature. He turned to the group. “So badges are like… your inside glow,” he said thoughtfully. achievements are like… proof you did the thing.” “And The child nodded. “Like stickers!” Loopy nodded back. “Exactly. Stickers with purpose.” Then another kind of magic drifted into the clearing, twinkling softly. It looked like tiny stars that had forgotten the sky and decided to visit people instead. They landed in pockets. They landed in jars. One landed on Loopy’s hat and rolled off dramatically. The sign beside the fire shimmered and added: Patch Coins</p><p>Loopy’s eyes widened. He held one up. It wasn’t shiny like gold. It was warm, like it remembered your effort. If you listened closely, you could almost hear it whispering, thank you. “Patch Coins,” Loopy murmured. “Pocket stars.” A grown-up said, Hut.” “You earn them when you do missions. You can use them later in the Market Loopy’s brain made a delighted little loop. “So if you help the Earth,” he said, “the Earth helps you… find useful treasures?” The fire crackled like a laugh. Loopy looked around the circle at the big people and the little people, all holding cards and making plans like a team that actually believed small actions mattered. He realized something. This was a collection of tiny brave steps that fit real life: turning off a light, fixing a zipper, choosing a better snack, sharing a mission with your tribe. Loopy’s chest felt warm, like he had swallowed a cozy lantern. He cleared his throat, very gently, because it felt like a moment that deserved a sentence. “This is not just a plan,” Loopy said softly. Everyone looked at him. Even the mushrooms, probably. (The mushrooms were always listening. They just didn’t like admitting it.) “This is a loop.” And as he said it, the Patch Coins twinkled a little brighter, the badges hovered like friendly fireflies, and the mission cards fluttered in the warm air like they were excited to be chosen. Loopy adjusted his fancy leaf hat, trying to look calm and wise, which is difficult when you are a bear who enjoys biscuits and dramatic revelations. Then he whispered, mostly to himself: “And if there are biscuits later…I will behave, mostly.. Or simply stare politely until one appears.”</p>',

      // Tribes
      'tribes.title': 'Tribes',
      'tribes.subtitle': 'Your Safe Team Space',
      'tribes.desc': '<p>A Tribe is EarthPatchers\' word for a small team (like a club).</p><p>Tribes can be:</p><ul><li>Kids and teens Tribes (aliases and avatars, no visible kids\' faces, kid activity visible only inside the Tribe)</li><li>Adults-only Tribes (adults choose their visibility)</li></ul><p>Missions can be shared across Tribes so great missions spread without exposing children\'s accounts.</p><p>Camp rules keep the space kind and clean:</p><ul><li>Be kind</li><li>Keep private details private</li><li>No visible kids\' faces</li><li>Do not post littering (and do not encourage it)</li><li>Use a Littering report when something should not be there</li></ul>',
      'tribes.why': 'Sustainability isn’t just about tasks — it’s about belonging. Tribes turn the platform into a community where people support each other, act together, and keep things safe and kind.',
      'tribes.loopy': '<p>The next day Loopy returned and found another sign, slightly crooked, as if a squirrel had installed it while running: TRIBES Loopy squinted at the word. “Tribes…” he whispered. maybe snacks.” “That sounds like a place where teams keep important secrets… and (He hoped for snacks. Loopy always hoped for snacks. Hoping was one of his strongest skills.) He tiptoed in, because if a sign says TRIBES, you must enter like you are about to discover something mysterious… or at least a bit exciting. Inside, lanterns hung like little moons. Not the bright, bossy kind of light. The cozy kind, like the hut was saying, Welcome. Please don’t shout. The magic is resting.</p><p>The air smelled like warm wood and friendly plans. And somewhere in the corner, something smelled faintly like crackers. Loopy’s ears perked up. “Aha,” he whispered. “The snack smell.. yummm.” A leader stood near the entrance holding a wooden board covered in stickers. Loopy approved immediately. Stickers meant someone cared. Stickers meant someone had spent time choosing the right sticker, which is a serious life decision. Loopy leaned in to inspect. There were stars. Leaves. Little smiling suns. A very dramatic frog. One sticker that said BRAVE in glitter letters, even though the whole hut was trying to be calm. Loopy nodded solemnly. important competition. “Excellent sticker choices,” he said, as if he were judging a very The leader smiled and pointed ahead. Two painted doors stood side by side, like they’d grown out of the floorboards overnight: Kids & Teens Tribe Adults Tribe Loopy tilted his fancy leaf hat. “Two doors,” he murmured. “This is officially a serious place.” He padded closer. The doors were friendly, not scary. They didn’t creak in a spooky way. They creaked in an old-house way, like they were saying, Hello, I am a door. I do door things. Loopy peeked behind the first door. Behind the Kids & Teens Tribe door, it looked like a storybook had thrown a tiny party. Names floated above little avatars: Captain Leafstorm Comet Rabbit Sir Sparklepuddle The Recycling Wizard (Loopy respected this one)</p><p>There were no real face photos. No “here’s my whole private life” energy. Just fun nicknames and brave little characters. Loopy exhaled in relief. “Good,” he whispered. eyebrows to the entire world.” “A place where kids can be heroes without having to show their He wandered to the second door. Behind the Adults Tribe door, grown-ups had chosen their own style. Some used their real names. Some used nicknames. Some had photos. Some didn’t. It was like a menu of choices, except without the only vegetables you don’t like. Loopy nodded approvingly. “Adults like options,” he murmured. secretly wanting options.” “They also like saying they don’t need options… while In the middle of the room stood something wonderful: A Mission Shelf. It was a real shelf, made of wood that looked like it had lived a long life as something else first. It had little labels and tiny hooks, and it smelled like “organized in a kind way,” which is the best kind of organized. A sign above it said: Create a mission. Borrow a mission. Return with a story. Loopy’s heart did a small happy bounce. Missions could be placed there so other Tribes could borrow them like recipes. Loopy imagined it instantly: One Tribe invents a brilliant “Fix One Thing” mission. Another Tribe tries it. Then adds a twist: “Fix One Thing… and teach someone else how.” Loopy nodded. too.” “If one team makes an amazing mission,” he said softly, “other teams can do it</p><p>Then Loopy noticed something glowing gently on the wall. A lantern. Not hanging from the ceiling. Not sitting on a table. This lantern floated. It was the kind of lantern that didn’t just shine light. It shone guidance. Loopy approached it carefully, as if it might be ticklish. The lantern had words written on it in warm, simple letters. Loopy reads each line slowly, the way you read something important, like a map or the instructions on a very mysterious shampoo bottle. Be kind. Keep private details private. No visible kids’ faces. Don’t post litter. If something yucky appears, use the Littering button. He nodded. “Mm,” he said. “Kindness. Privacy. No kid faces. No litter. Button for yucky.” Then he paused and looked around the hut again. The lantern-moons. The superhero names. The mission shelf. The sticker board with the dramatic frog. And Loopy understood. “These rules don’t steal the magic,” he whispered. He leaned in as if the lantern was a friend and added: “They guard it.” At that exact moment, the lantern flickered once, like it was winking. Loopy took that as an official agreement. He adjusted his leaf hat. He took one final sniff of the room. The snack smell was still there. Loopy smiled.</p><p>“A place that guards magic,” he said, “and possibly crackers.” And he walked deeper into the Tribe hut, ready for secrets, stories, and good teamwork.</p>',

      // Market Hut
      'market-hut.title': 'Market Hut',
      'market-hut.subtitle': 'Swap, Share, Reuse',
      'market-hut.desc': '<p>The Market Hut is a Cluj-first safe circular exchange where people reuse items instead of buying new.</p><p>Patch Coins make exchange practical without awkward item-for-item matching: you earn coins by helping, then use coins to choose items. It can support swaps, donations, and fair value learning through Patch Coins (and later, polite bidding if needed).</p><p>Safety guidance is built into the flow. Adults choose their visibility, and children\'s faces are never allowed.</p>',
      'market-hut.why': 'Circular habits are one of the fastest ways to reduce waste. Patch Coins make reuse simple and fair — no awkward item-for-item matching, just kindness and coins.',
      'market-hut.loopy': '<p>Loopy followed a scent trail that smelled like “still useful.” It wasn’t the usual forest smell of berries, moss, or damp leaves. This smell had a tiny sparkle in it, like when you open a drawer and find a sticker you forgot you owned. It smelled like… a good idea that somebody didn’t throw away. Loopy’s nose wiggled once. Then twice. “Ah,” he whispered politely, because Loopy was the kind of bear who greeted even mushrooms, “I have found the scent of… Second Chances.”</p><p>The trail led him past the campfire, down a path stitched with little lanterns. They blinked slowly, like they were sleepy and happy about it. When Loopy tiptoed past, one lantern winked at him. Loopy winked back, because manners. At the end of the path sat a hut. Not a normal hut. This hut had a roof made from mismatched wooden shingles, each one a different color, like the hut had borrowed pieces from other houses and promised to return them later. Wind chimes hung from the doorway: spoons, buttons, keys that no longer opened anything, and one extremely proud fork that seemed to be guarding the entrance with its whole… fork-ness. Above the door was a sign carved into a smooth plank: MARKET HUT Loopy squinted at the letters. Then he nodded, impressed. “This hut,” he said, “has handwriting.” He stepped inside. And immediately he gasped. (Loopy always did. Some bears roar. Loopy gasped.) The Market Hut was full of treasures. Not shiny-new treasures that say, I’m expensive and I know it. These were the better kind. The kind that say, I’ve had adventures. I’m still ready for more. There were jackets with brave little elbow patches. Books with spines that looked like they’d been hugged a lot. Toys with tiny scuff marks that whispered, I have been loved. Puzzles stacked like sleepy pancakes, each box looking at Loopy with proud eyes, as if to say, I’m still missing no pieces, thank you very much. A stuffed dragon sat on a pillow, wearing a scarf that was far too fancy for a dragon. Loopy leaned closer. “Hello,” he said, because he had manners. The dragon did not answer. Loopy nodded anyway. “A quiet one. Very wise.” Then Loopy noticed tags. Not price tags like in grown-up shops. These were paper leaves tied with string.</p><p>One tag on a jacket said: 120 Patch Coins Loopy tilted his head. Coins? In a hut? That smelled like… fairness. He looked around for a sign, because signs were Loopy’s favorite kind of clue. And there it was, nailed to a wooden board in friendly letters: Patch Coins are thank-you coins. You earn them by saving the Earth in small ways. You use them to choose treasures other people don’t need anymore. Loopy read it twice, just to let the magic settle in his fur. “So…” he whispered, “you don’t just grab. You earn the choosing.” A tiny bell rang somewhere as if the hut liked that sentence. Nearby, a child held up a pair of boots. missions.” “These are my rainy-day boots! I wore them on The boots looked proud. Extremely proud. A grown-up smiled. will.” “If you don’t need them anymore, you can put them here. Someone else Loopy’s heart did a small happy bounce. Then he spotted a corner labeled: SWAP CORNER A sign said: If you want to swap item-for-item, you can try. But it’s tricky. Don’t worry if it takes time. Loopy frowned thoughtfully. He imagined two people swapping. Person A had a jacket. Person B had… a puzzle. Person A wanted a book. Person B wanted… a cooking pot.</p><p>“Yes,” Loopy admitted, “this is like trying to trade one berry for exactly the right cloud.” Still, Loopy suddenly felt very confident about swapping. He reached into his pocket and pulled out… a pinecone. Not a regular pinecone. A very respectable pinecone. Smooth. Shiny. Full of pinecone dignity. Loopy held it up like a royal jewel. “I would like,” he announced quietly, “to trade this excellent pinecone for that jacket.” He pointed at the jacket with the brave elbow patches. The jacket stared back with the calm expression of something that had survived winter and teenagers. A child blinked. The grown-up blinked too. Then the child said gently, “That jacket is… a lot of jacket.” Loopy nodded. “Yes. It is a jacketful jacket.” The adult smiled. things.” “Your pinecone is lovely, but swapping is tricky because people need different Loopy looked at his pinecone, mildly offended on its behalf for half a second, then immediately became reasonable again. “Ah,” he said, tucking it away. “So the pinecone is not currency.” “It can be a hat!” the child giggled. Loopy considered this seriously. “I will not make it a hat,” he decided. “It has other dreams.” Just then, Loopy saw another sign under the coin jar: Patch Coins help when swaps don’t match perfectly. And suddenly the secret clicked into place like the last puzzle piece. Swapping item-for-item is tricky. But coins make it fair and simple. You don’t match jacket-to-puzzle perfectly. You match kindness… and the coins do the rest. Loopy stood very still, because he was having a Big Bear Thought. “So the coins,” he murmured, “are not really about the things.”</p><p>He looked around again: the jacket, the books, the puzzles, the dragon with the scandalously fashionable scarf. “No,” Loopy said softly. “The coins are about… the loop.” A wind chime clinked, like it approved. Loopy wandered to a shelf labeled Almost Perfect. There sat a mug with a tiny chip on its rim, like it had bumped a rock and learned humility. A tag said: 10 Patch Coins Loopy picked it up gently. It felt warm in his paws, even though it hadn’t had tea in it for ages. “I like you,” Loopy told the mug. “You look like you’ve listened to many stories.” Then he heard a tiny sigh. A teddy bear nearby sat missing one button eye. The thread poked out like a brave little flag. A sign beside it read: Still lovable. Still useful. Still welcome. A child whispered, “Why is he here?” The grown-up answered softly, “Because someone thought he wasn’t perfect anymore.” Loopy’s ears drooped for a moment, then popped back up like determined leaves. He leaned close and said, gently but firmly, “Not perfect does not mean not worthy.” The child blinked, then smiled. “Maybe someone can sew a new button.” Loopy nodded. “Yes. A small fix. Small fixes are how we save the Earth.” At the checkout box, Loopy dropped ten Patch Coins in. Plunk. Plunk. Plunk. It felt good to pay with thank-yous. It felt good to know the mug didn’t get thrown away just because it wasn’t perfect.</p><p>As Loopy left, he noticed a shelf labeled Second Chances: a scarf that was slightly too short but extremely cheerful, a book with a happy-worm doodle inside, and the teddy bear, looking a little less lonely already. Outside, the lanterns blinked at him like they were smiling. Loopy hugged the chipped mug to his chest and whispered, “The Market Hut is where things go when you don’t want them to disappear.” Then he added, because he was Loopy and Loopy always had a final thought: “And also… that dragon’s scarf is still too fancy.” Loopy left the hut smiling, because the Market Hut wasn’t about stuff. It was about second chances.</p>',

      // Earth's Side of the Story
      'earth-side.title': 'Earth\'s Side of the Story',
      'earth-side.subtitle': 'Learning That Starts in Cluj',
      'earth-side.desc': '<p>Earth\'s Side of the Story is a learning-and-action world that starts in Cluj and connects learning to missions.</p><p>It has three doors:</p><ol><li>My Hazards: friendly hazard learning (natural hazards, natural hazards worsened by human impact, and hazards caused directly by people), plus short quizzes that earn Patch Coins.</li><li>Contamination and Recovery Zone (Cluj map): adults, and older teens where appropriate, can add pins (photo and short note) for littering hot spots, damaged areas, trees cut where they should not be, and places needing care.</li><li>Learn and Play: short learning paths and quizzes connected back to missions and Patch Coins.</li></ol><p>Pins can become missions (or requests for missions). Later, the map can include verified helper pins for Helpers, Missions, and Reports.</p>',
      'earth-side.next1': 'Tribe alerts: new pins can gently alert nearby Tribes so local teams can choose to help.',
      'earth-side.next2': 'New cities/countries open slowly via a Discovery Phase (data + partners + priority missions). If discovery isn\'t supported, the area stays \u201csleeping\u201d until the community helps find data sources or partners.',
      'earth-side.why': 'Understanding “why” is the bridge between action and lasting change. This module makes learning accessible, emotionally safe, and directly connected to real missions.',
      'earth-side.loopy': '<p>Loopy was doing his morning walk, the one where he pretended he was just “a normal bear” and not a bear with a leaf hat and strong opinions about biscuits. He padded along the path, greeting the forest like it was his neighborhood. “Morning, moss.” “Morning, dramatic tree.” “Morning, suspicious-looking pebble.” The pebble did not answer. Loopy decided that was even more suspicious. Then he saw something hiding in the grass. Not hiding very well, to be honest. It was the kind of hiding where you can still see the whole thing, but it feels sneaky, so you politely pretend you didn’t notice right away. Loopy leaned in. What he had stumbled upon was the biggest storybook he had ever seen.</p><p>It wasn’t just big. It was Bear-Sized Big. The cover was thick and warm-looking, like it had been made from old camp blankets and fairy magic. Tiny golden letters shimmered on the front, and when Loopy blinked, the letters shimmered back, like the book had blinked too. Across the cover, in bold friendly words, it said: THE EARTH’S SIDE OF THE STORY Loopy swallowed. “Earth,” he whispered, because you must always speak nicely to important things, explain yourself in a way a bear can understand.” “please The book made a soft sound: whooosh. Not a scary whoosh. A cozy whoosh. The sort of whoosh that says, Come in. Take your shoes off. Try not to spill anything on the pages. The cover opened by itself. Inside were three adventure doors, drawn right on the page, each one glowing slightly like it had its own tiny lantern. Loopy’s eyes widened. “Doors in a book,” he murmured. homework.” “That’s either brilliant… or I’m about to get assigned The first door had a little sign above it: Door One: My Hazards When Loopy knocked on this page door, a small shelf popped up as if the book had been saving it for this exact moment. On the shelf were three jars. Each jar had a label written in small letters that did not shout at you. Nature. Nature, made worse. People-made. Loopy picked up the first jar and gave it a shake. Inside, a tiny thundercloud bounced like a grumpy marshmallow.</p><p>“Ah,” Loopy said. “Nature is sometimes dramatic.” He tapped the second jar. Inside, the same little thundercloud wore a tiny scarf of smoky air, and looked… annoyed about it. Loopy frowned. or the land.” “Nature… made worse,” he read. “Because people changed the air, the water, He tapped the third jar. Inside was a little factory-shaped shadow wearing a sad face sticker. It wasn’t trying to be mean. It looked like it had made a mistake and didn’t know what to do next. A kind sentence appeared on the page, letter by letter, like the book was speaking gently: Sometimes nature is wild. Sometimes it gets worse when people change the air, the water, or the land. Sometimes people accidentally build problems… then learn how to build better. Loopy nodded slowly. “Clear,” he said. “Like bedtime.” The page flipped itself and presented a tiny quiz, the kind that looked more like a riddle than a test. Loopy leaned close and whispered, berries.” “Please don’t ask me what a ‘carbon’ is. I am a bear. I know The quiz did not ask him about carbon. Instead it asked things like: ● “If a river is dirty, what helps it feel better?” ● “If a storm gets stronger because the air is changing, what can humans do to help?” Loopy answered the way a bear would: with common sense and strong feelings about fairness. When he finished, something magical happened. A few Patch Coins twinkled into his pocket like pocket stars. Loopy stared at his pocket, then stared at the book, then stared at his pocket again.</p><p>“Learning that gives you coins,” Loopy said, amazed. “Finally.” He patted the book politely. “Good plan.” The second door shimmered. Door Two: Contamination & Recovery Zone Loopy knocked on the second door and the page unfolded into a glowing map. It didn’t show the whole world yet. Just one warm place, like the book was saying, Let’s start where you can actually help. The map glowed softly around one city: Cluj. Loopy squinted. “Oooh,” he whispered. “A real place. This book means business.” Little pins appeared on the map, like tiny fireflies landing to point things out. Adults were placing them with photos and short notes, like leaving breadcrumbs for kindness. “This spot has littering.” “This bench is broken.” “This tree was cut and it doesn’t look right.” Loopy leaned closer, nose almost touching the page. “That,” he whispered, “is very useful pointing.” One pin shimmered, and a little note appeared next to it: This could become a mission. Loopy smiled. “So learning doesn’t float away,” he said. “It turns into action.” He imagined it: a Tribe sees the pin, chooses the mission, goes out together like a small team of brave helpers, and the map slowly looks healthier. Less sad. More cared for. The book flipped to another page and showed faint outlines of future pins, not active yet, like ideas waiting for their turn. Later, the map could show helper pins too: teams who clean rivers, study air, restore forests.</p><p>Loopy’s chest warmed. “A map that shows helpers,” Loopy whispered, “is a map with hope.” Then the book showed another gentle idea. A lantern icon appeared, very small and very polite. Lantern-nudge: Something nearby needs care. Not an alarm. Not a siren. Just a quiet glow that says, If you want to be brave today, here’s a place that could use you. Loopy nodded. “Good,” he said. “No yelling. Just inviting.” He turned the page and the third door glimmered at him. Door Three: Learn & Play This room felt different right away. It wasn’t school. It wasn’t homework. It was more like puzzles and treasure hunts and “find the hidden right thing” games. Loopy relaxed immediately. He sat down on the page. (Which was rude, technically, but the book didn’t seem to mind.) A little game card popped up: Find the best choice for the Earth. Loopy nearly answered like a bear. “More berries,” he said confidently. The book offered him another card, kindly. Loopy sighed.” you can. “Fine. Less packaging. Refill when possible. Fix before replace. Choose local if The book sparkled like it was clapping without making noise. And then, at the edge of the page, Loopy noticed something else. Other cities.</p><p>Not open yet. Just faint shapes, like sleeping chapters in a story that wasn’t ready to be read. Loopy traced one gently with his claw. “Hello,” he whispered to the sleepy cities. “You’re not awake yet.” A sentence appeared near the border, calm and sensible: Before a new city opens, we do a Discovery Mission to see if we have what we need. Loopy tilted his head. “A Discovery Mission?” The book showed him what it meant, without using big grown-up words: ● Do we have good information? ● Do we have local helpers? ● Do we know what needs fixing most? Loopy smiled. “Good,” he said. “No half-built chapters.” He closed the book carefully. The cover shut with a soft thump that felt like a friendly promise. As Loopy stood up, the grass around the book sparkled for half a second, like it was pleased he’d found it. Loopy adjusted his leaf hat and whispered, as if the book could hear him even when it was closed: “Earth,” he said, “thank you for explaining yourself like I\'m a little person.” Then he added, because he was Loopy and Loopy always had a final thought: “And thank you for the coins. I will spend them wisely.” He paused. “…Probably.”</p><p>## Next Steps Modules (post-MVP)</p>',

      // Games Room
      'games-room.title': 'Games Room',
      'games-room.subtitle': 'Play With a Purpose',
      'games-room.desc': '<p>The Games Room is a later module that gathers trusted nature-learning games in one place.</p><p>Patch Coins unlock games (simple rule: coins open doors). Adults can play too and earn Patch Coins.</p><p>Later: EarthPatchers-made games and the Patcher Camp game.</p>',
      'games-room.next1': 'EarthPatchers-made games, and eventually Patcher Camp.',
      'games-room.why': 'Play is how children learn best. Starting with trusted games means learning happens fast, and Patch Coins keep engagement connected to real effort.',
      'games-room.loopy': '<p>Loopy found a door that hummed with quiet giggles: GAMES ROOM Loopy followed a path where the trees made a gentle tunnel overhead, like the forest was trying to build a hallway just for him. At the end of the tunnel, he found a door that hummed. Not a loud hum. A cozy hum. Like a secret song you can almost hear if you stand still and tilt your head the right way. A wooden sign hung above the door, painted with swirls and tiny stars that weren’t too sparkly, just enough to feel special: GAMES ROOM Loopy adjusted his leaf hat. “A games room,” he whispered. “That sounds like giggles live here.” He pushed the door open. And wow. Inside wasn’t just one game. It was a room where many games could visit, like guests arriving at a camp party with backpacks full of fun. Some games bounced in on tiptoe. Some slid in like playful shadows. One game tried to enter backwards for style, bumped into the doorframe, and pretended it meant to do that.</p><p>Loopy nodded politely. “Very artistic.” The room itself felt magical, but not messy magical. More like… carefully chosen magical. Like someone had said: Let’s make learning feel like play, not like a lecture with broccoli. On one side, there was a game where you helped a forest grow back after a storm by choosing the right trees. The trees on the screen waved at Loopy like they recognized him. Loopy waved back. Cause… manners. On another side, there was a game where you sorted things into “reuse”, “repair”, and “recycle” … and the game made a little cheer! sound every time you picked the clever choice. Loopy’s ears perked up. “A cheering game,” he said softly. “Finally. A game that understands encouragement.” A little sign in the room explained, in friendly letters: These are trusted guest games. They teach nature without feeling like homework. Loopy exhaled in relief. “Good,” he whispered. “Because if a game feels like homework, my brain tries to nap.” He walked a little farther and saw a big, cozy notice board with drawings pinned to it: ● “Ocean Rescue Puzzle” ● “Build a Tiny Garden” ● “The Mystery of the Missing Bees” ● “The Great Reuse Challenge” Loopy blinked. “So the Games Room is a party,” he murmured, “and the games are guests.” Then he noticed a smaller corner of the room, glowing softly like it was waiting its turn. A little oven icon was drawn on the wall, and under it, a note: EarthPatchers games (later)</p><p>Loopy’s eyes widened. “Oh,” he whispered. “A future baking corner.” He nodded very seriously, like a bear who understands long-term plans and also cake. “We invite good games to the party first,” Loopy said, “and later we bake our own cake.” At that exact moment, the oven icon made a tiny ding! sound, like it approved of being included. Then Loopy saw something else. A small chest. Not a pirate chest. Not a scary chest. A friendly chest, like it held socks or secrets or both. It had a lock on it, and the lock had a neat label: Patch Coins Loopy grinned. He leaned in close as if he was talking to the chest in confidence. “Coins open doors,” he whispered. “Simple.” He jingled one Patch Coin in his pocket, and the chest lock gave a tiny happy click, like it recognized the sound. Loopy nodded. “Good,” he said. “Even the lock is polite.” He took one step back and looked around the room again: the visiting games, the friendly cheers, the future baking corner, the little chest waiting for coins. Loopy’s hat leaf bobbed as he smiled. “This,” he whispered, “is where learning puts on a costume and calls itself fun.” Then he added, because he was Loopy and Loopy can’t resist one last thought: “And if there’s a game about biscuits… I will test it for quality.”</p>',

      // Activity Hut
      'activity-hut.title': 'Activity Hut',
      'activity-hut.subtitle': 'Your Adventure Journal',
      'activity-hut.desc': '<p>The Activity Hut is a personal home base that feels like an adventure journal.</p><p>It shows:</p><ul><li>Your adventure trail (missions and milestones)</li><li>Patch Coins now (spendable) and Patch Coins earned (lifetime effort)</li><li>Badges and achievements</li><li>Role path (like MasterPatcher)</li></ul><p>Adults choose what to share publicly, while kids stay within Tribe visibility rules.</p><p>Later, a safe kid-friendly AI can create a child\'s Hero Story from verified adventures, using alias and avatar only.</p>',
      'activity-hut.next1': 'Safe kid-friendly AI can create a child\'s Hero Story: a bedtime-story retelling of verified adventures, using alias + avatar only.',
      'activity-hut.why': 'Your adventure journal is where effort becomes visible. Badges show who you’re becoming, achievements show what you’ve done, and your Patch Coins total shows your lifetime impact.',
      'activity-hut.loopy': '<p>Loopy was still thinking about the giant storybook when he noticed something else on the path, half-hidden behind a curtain of ivy. At first, he thought it was just a tree. Then the “tree” blinked. Loopy stopped walking immediately. That is a very sensible thing to do when trees blink. The bark rippled like warm chocolate (Loopy had never seen chocolate on a tree, but his imagination was very confident), and a door appeared right in the trunk, perfectly carved, perfectly cozy, like it had been waiting for him all along. A little wooden sign hung from a twig, swinging gently: ACTIVITY HUT Loopy leaned in close and whispered, “Hello.” The door handle was a knot in the wood shaped like a tiny smiling face. It smiled at Loopy. Loopy smiled back. Manners right? He pushed the door open.</p><p>Inside… everything felt like you’ve been there before. Not in a spooky way. In a warm way. Like the hut had made a little home for your adventures. The first thing Loopy saw was a wall of glowing footprints. They weren’t messy footprints. They were soft, glowing ones, like someone had walked through a puddle of starlight and then politely wiped their paws. The footprints wandered across the wall in a gentle path: a few steps here, a little curve there, and then a pause where a tiny lantern icon glowed, as if to say, You did something brave here. Loopy’s voice went quiet in that special way you speak when you’re inside something important. “This is your adventure trail,” Loopy whispered. forward.” “Not to race. Just to remember you walked He followed the glowing steps with his eyes and spotted little symbols along the trail: a light switch, a repaired button, a water drop, a leaf. Loopy nodded. “Ah. The trail remembers the helpful bits.” On a shelf nearby, something shimmered gently. Badges. They glowed like friendly fireflies who had decided to become stickers. Each one had a simple word and a warm feeling: Kind. Brave. Curious. Loopy picked one up very carefully, like it might crumble. “These,” Loopy said softly, “are who you are becoming.” Then, with a pop! like a bubble of happy air, a banner appeared above his head and sparkly paper confetti were falling from above, like it was your birthday: Achievement Unlocked: First Mission Completed Loopy stared up at it, impressed.</p><p>“Ah,” he said. “The hut is celebrating you.” He turned to the invisible hut-air and added politely, “Thank you.” Then he pointed at the banner and explained, like he was teaching a baby squirrel (and baby squirrels need simple explanations because they are very busy being baby squirrels): “Achievements are things you did,” Loopy said. “Like stickers in your book. Remember?” Somewhere, a tiny chime rang as if the hut agreed. Loopy wandered deeper inside and found two jars on a little table. One jar was labeled: Patch Coins now The other jar was labeled: Patch Coins earned Loopy leaned close. In the first jar, the coins twinkled like pocket stars, ready to be used. In the second jar, the coins glowed softer, like they weren’t waiting to be spent. They were waiting to be remembered. Loopy pointed at the second jar and grinned. “Even if you spend coins on a jacket,” he said, He tapped the jar gently. “And that,” he added, fair” “you don’t spend your effort. Your effort stays.” “is very fair. The kind of fair I like. Not like no more sweets past bed time In the corner, Loopy noticed a small notebook tied with a ribbon. The ribbon looked like it had been tied by someone who really cared… or by a squirrel who was doing its best. A label on the notebook read: Hero Story (later) Loopy’s eyes softened.</p><p>He imagined it: a storybook that remembers your missions, your brave moments, your kind choices, and turns them into a tale you can reread when you forget how brave you’ve been. Loopy smiled. “A storybook that writes your adventures back to you,” he whispered, that makes kids glow.” “that is the kind of magic He took one last look around the hut: the footprints, the badges, the jars, the ribbon-tied notebook. Then he nodded firmly, as if making a serious bear decision. “This hut,” Loopy declared, “is like a pocket for your memories.” He paused. “…A very organized pocket.” And because Loopy could never leave a place without one extra thought, he added: “And if the hut ever offers snacks, I will be brave about that too.”</p>',

      // Eco Shops Directory
      'eco-shops.title': 'Eco Shops Directory',
      'eco-shops.subtitle': 'Find What’s Truly Sustainable',
      'eco-shops.desc': '<p>Eco Shops is a Cluj-first guide to sustainable products and local shops, with ratings and comments to keep things honest.</p><p>It also includes an Interest or Wish feature for zero-waste products that are not available locally yet:</p><ul><li>People can click I want this here to show demand</li><li>If enough people are interested, the community can organize a bulk order to reduce packaging and transport waste</li><li>Makers can see interest levels and plan production better, reducing over-production</li></ul><p>Quality rules keep trust high:</p><ul><li>You can review or add products after earning enough Patch Coins and completing a verified mission</li><li>New products are submitted through a simple template (photo, where to buy, materials, why it is better, what to watch out for)</li><li>MasterPatchers verify entries before they go live</li></ul>',
      'eco-shops.why': 'Finding truly sustainable products is hard. This directory keeps things honest with community reviews, verified missions, and MasterPatcher oversight.',
      'eco-shops.loopy': '<p>Loopy walked a little farther and found a tiny wooden stand between two trees. It looked like a little shop and a little library had a baby. A sign swung gently and sparkled as it moved: ECO SHOP BOOK Loopy tilted his fancy leaf hat. “Ooo,” he whispered. “A book that knows where the good things are.” He opened it. And wow. Inside were drawings, little notes, and lots of tiny opinions, like the book had been listening to people whisper for a long time. One page said: “This used to be refill.” (Loopy frowned.) “Why did it stop? Rude.” Another page said: “This wrapper changed.” (Loopy squinted.) “Hmm… suspicious wrapper.” Another page had a big happy leaf stamp: “This one is really compostable!” Loopy nodded. “Good. The Earth can eat it later.” Then the book made a tiny ding! sound and a warm light appeared on the page, like a firefly had become a sentence: Friendly rule: You can only add a new product after you do a real mission first. Loopy smiled. “So you don’t just run in and yell, “You help first. Then you talk.” ‘I know everything!’ like a goose,” he said.</p><p>(Loopy had met geese. They were very loud.) Loopy flipped the page again and found something even more magical. A tiny button shaped like a leaf popped up. It glowed. It wiggled. It looked like it wanted to giggle. It said: “I want this here!” Loopy’s eyes went wide. “A wish leaf!” he whispered. “I love wish leaves.” The book explained it in very easy words: Sometimes you find a really good, Earth-friendly thing… but it is far away, in another country. If you order it alone, it comes in too many boxes. Loopy nodded. “Boxes,” he said sadly. “So many boxes.” So the book said: Press the wish leaf instead. When you press it, your wish joins other wishes. Loopy pressed it gently. Boop. A little jar appeared on the page, and tiny glowing dots floated into it like baby stars. The book said: People who also want it: 12 Loopy blinked. toothbrush.” “Twelve people want the same thing? That is a lot of people wanting the same More dots floated in.</p><p>People who also want it: 25 Loopy gasped (he always did). “Now we are a toothbrush team!” Then the book showed the secret magic: If lots of people want the same thing, they can order it together. One big order. Not many little orders. That means: ● fewer boxes ● less trash ● happier Earth Loopy clapped once, very politely. “Smart magic,” he said. “The best kind.” Then the book showed another little window, like a tiny picture frame: The makers can see the number too. Loopy tilted his head. “The makers?” The book explained: The people who make the product can see how many people want it. So they can make the right amount. Not too many. Not too few. Less waste. Loopy smiled. “So the makers don’t have to guess,” he said. “They can listen.” Right then, the book sparkled and a tiny leaf sticker appeared on Loopy’s hat. It said: GOOD HELPER</p><p>Loopy looked up, pleased. “I will wear this,” he announced. “Forever.” He closed the Eco Shop Book carefully. “This book,” Loopy said, “is like a treasure map… but for kind choices.” Then he added, because he was Loopy: “And if the wish leaf ever becomes a real leaf… I might try to eat it by accident.” He stared at the page. “…So please label it.”</p>',

      // The Green Wall
      'green-wall.title': 'The Green Wall',
      'green-wall.subtitle': 'Where Ideas Grow',
      'green-wall.desc': '<p>The Green Wall is EarthPatchers\' idea garden. It helps people post ideas, find similar ideas, and team up instead of duplicating work.</p><p>Ideas are organized by size:</p><ul><li>Tiny Sparks: quick ideas that can be done without funding</li><li>Build-It Ideas: medium ideas that need a small team and simple plan</li><li>Big Seeds: larger projects, product features, or expansion ideas that need more coordination</li></ul><p>Before posting, the Wall suggests similar ideas so people can join existing work instead of creating duplicates. People can join ideas with skills, time, and optional support, which turns the Wall into a practical matchmaking space for real action.</p>',
      'green-wall.why': 'Good ideas need more than enthusiasm — they need skills, teamwork, and sometimes funding. The Green Wall turns community energy into real projects.',
      'green-wall.loopy': '<p>Loopy wandered on, still humming his “I am a helpful bear” tune, when the wind did something odd. It didn’t just blow. It whispered. Not spooky whispers. More like a secret being shared by a leaf who couldn’t wait any longer. Loopy followed the whisper through a narrow path where the trees leaned in close, as if they were also curious. A squirrel zipped past him with a twig in its mouth and looked extremely busy, which usually meant something important was nearby. And then Loopy saw it. A wall. But not a brick wall, and not a “keep out” wall. This wall was made of living vines and smooth wood, and it shimmered the tiniest bit, like it had been sprinkled with morning dew and good ideas. A sign dangled from the top, swinging gently: THE GREEN WALL Loopy stepped closer and gasped (as he always did). The wall was covered in idea-leaves. Hundreds of them. Some were tiny leaves, like little sparks that could fit in your pocket. Some were medium leaves, like “let’s do this together” leaves.</p><p>And some were big, wide leaves that looked like they needed a whole team… and maybe snacks. Loopy tilted his leaf hat. “Ah,” he whispered. “The wall is organised.” A small wooden sign on the side explained it in simple words: Tiny Sparks Small ideas you can do quickly. Build-It Ideas Ideas that need a small team and a plan. Big Seeds Big ideas that need time, help, and sometimes money. Loopy nodded. “Good,” he said. confused… and bears are excellent pilers.” “Because if everything is in one pile, even a bear gets He wandered along the wall, reading. One Tiny Spark leaf said: “Make a simple recycling sign for our building.” Another Tiny one leaf said: “Teach kids how to fix a button without crying.” (Loopy respected the honesty.) This Tiny Leaf caught his attention (his eyes turned the size of onions): “Let Loopy have a snack button.” (Loopy pretended he didn’t see it. Oh but.. he saw it.) A Build-It leaf said: “Start a monthly repair club so broken things get second chances.” A Big Seed leaf said: “Open a new city chapter after we find local data and partners.” Loopy’s eyes sparkled. “These are brave thoughts,” he whispered. Then he noticed something magical. When someone walked up to add a new leaf, the wall didn’t just accept it right away. The wall listened.</p><p>A child’s grown-up (because grown-ups do the posting bits) began writing: “An eco workshop in schools…” And suddenly the vines glowed. A gentle little window popped up, like the wall was being helpful instead of bossy: The Wall’s Memory says: “I’ve seen cousin-ideas like this already… want to join one that’s already growing?” Three leaves floated forward politely, each one already full of helpful notes and joined-by names. Loopy gasped. “The wall has a memory!” The grown-up smiled. “Oh! Yes, this one is similar. Let’s join it.” They tapped Join, and a soft thread of light connected them to the idea-leaf, like the wall had tied a ribbon that said: Now you’re on the same team. Loopy watched another person insist, “No no, mine is different!” The wall didn’t argue. It simply asked in a warm voice: “Okay. Tell me in one sentence what’s different.” The person wrote: “This one includes cooking + recycling together.” The wall shimmered like it approved. “Ah,” Loopy whispered. “A polite gatekeeper.” Nearby, people were joining ideas like puzzle pieces: “I can design.” “I can organise.” “I can code.” “I can teach.” “I can help with funding later.” “I can help one hour a week.” Each time someone joined, a tiny bell went ding! like the wall was quietly celebrating without waking the squirrels.</p><p>Ding. Ding. Ding. Loopy tried to join too. He cleared his throat politely. “I can… encourage.” The wall paused, thinking very hard. Then a small leaf sticker floated down onto his hat: MORALE BEAR Loopy blinked. Then he nodded like this was an official job title. “Fair,” he said. Loopy stepped back and looked at the whole wall: the tiny sparks, the build-it leaves, the big seeds, the threads of light connecting people into teams. He grinned and announced, in his best “important bear” voice: “This wall doesn’t keep you out.” He pointed up at the vines curling outward like branches reaching for the sky. “It grows branches over your head like a big tree crown,” he said, “so even your ideas can sit in the shade and think.” The wall shimmered, pleased. Loopy adjusted his leaf hat and whispered, satisfied: “And because the wall remembers… we don’t plant the same seed twice.” Then he sniffed the air, because he had responsibilities as Morale Bear. And he said, very calmly: “And now… I will look for the idea-leaf that said ‘snacks.’”</p>',

      // Organisations & Scientists
      'org-scientists.title': 'Organisations & Scientists',
      'org-scientists.subtitle': 'Helper Pins on the Map',
      'org-scientists.desc': '<p>Verified organizations and researchers appear as special Helper pins inside the Contamination and Recovery Zone in Earth\'s Side of the Story.</p><p>Pin types can include:</p><ul><li>Helpers (NGOs, researchers, community groups)</li><li>Missions (ways to help)</li><li>Reports (things needing attention)</li></ul><p>This helps people discover real helper teams, understand what they do in clear language, and join missions.</p>',
      'org-scientists.why': 'Seeing who helps — and how to join them — turns a map of problems into a map of hope. Verified helper pins connect community action to real expertise.',
      'org-scientists.loopy': '<p>Loopy was still thinking about the big storybook when he felt a tiny tug in his pocket. Not a scary tug. More like the kind of tug you get when a sock is trying to leave your laundry basket. He reached in and pulled out something that definitely had not been there before. A small paper compass. It wasn’t pointing north. It was pointing to help. The compass was also wearing a very tiny hat. (Loopy stared at it for a full three seconds.) Loopy blinked. “Well,” he said, “that is a very unusual compass. But I respect your confidence.” The compass needle wiggled like a puppy tail (but quieter, because this is a polite forest), the tiny hat bobbed, and then it pointed straight back toward the big storybook, as if saying, Go on. Open it. Go on. Open it again. There’s more. Loopy hurried back (which for Loopy was still a dignified walk with excellent posture) and opened The Earth’s Side of the Story to the map page. The map unfolded with its warm glow. Cluj shimmered in the middle like a cozy campfire dot.</p><p>But something was different now. New pins had appeared. These pins had tiny symbols on them: A little handprint. A leaf badge. A drop of water. A tiny shovel. A microscope. A little heart. And one pin that looked suspiciously like a teacup. Loopy stared at the teacup pin for a long moment. “I don’t know what you are,” he whispered to it, “but I already like your attitude.” The pins did a very small sparkle. Not a “fireworks” sparkle. A “hello, we are friendly and organised” sparkle. One of them even wobbled politely, like it was waving with its whole pin-body. A soft label floated above the map like a friendly cloud: Helpers nearby Loopy whispered, “Ohhh.” He tapped a handprint pin. A little card popped up like a tiny scroll and unrolled itself with a flourish, as if it had practiced in the mirror: River Helpers “We clean the river on Saturdays. Bring gloves. Bring kindness. Bring snacks if you want.” Loopy nodded slowly, taking this very seriously. “Saturday,” he repeated. “Gloves. Kindness. Snacks.” Then he added, quietly, “This is basically a recipe.” He tapped another pin.</p><p>This card popped up with a tiny puff of glitter so small it felt like the map was sneezing politely. Air Watchers “We measure the air and explain it in simple words. No scary words. Just real ones.” Loopy’s ears perked up. “No scary words,” he murmured. “Excellent. My favorite kind of words.” He tapped another pin. The card sprang up like a happy frog in a hurry. Forest Friends “We plant trees and protect the old ones. We teach kids how to spot a happy tree.” Loopy gasped (he always did). “Happy trees exist!” As if to prove it, a tiny tree icon on the map did a little wiggle, like it was dancing in place. Loopy nodded solemnly. “Confirmed by dancing tree.” Now Loopy turned back to the teacup pin. He tapped it carefully, like it might spill. The teacup pin made a tiny clink sound, like a spoon tapping porcelain, and a card popped up with a warm glow, like a blanket turned into words: Warm Tea Team “We welcome new helpers. We explain what to do. We make it not awkward.” Loopy blinked. “Not awkward?” he repeated. “That is… a rare service.” The card continued, because the teacup pin was clearly proud of its job: What we do (in simple words): If you’re new, we show you where to start We answer questions like “What do I bring?” and “Where do I stand?” We pair you with someone friendly so you’re not alone We help you join a mission without feeling like a confused potato</p><p>Loopy’s eyes softened. “A team,” he whispered, magical.” Then the card added one more line: “that helps people not feel like confused potatoes… is extremely We also bring warm tea (or cocoa) for volunteers. “Because bravery is easier when your hands are warm.” Loopy placed one paw on his chest. “Finally,” he said, humans 37% nicer.” “a pin that understands the most important truth of all: warm drinks make He leaned back and looked at the map again. The littering pins were still there. The broken bench pins. The “this needs care” pins. But now, right beside them, were the helpers. And just to be extra whimsical, a few pins had tiny glowing strings between them, like the map was quietly whispering, These people work together. The strings looked like spiderwebs made of moonlight. One string even twanged gently, like a harp, and Loopy jumped a little. “It’s fine,” he told the map quickly. “I meant to do that.” Loopy’s voice went quiet, the way it does when you realise something important. “This isn’t just ‘what’s wrong’,” he whispered. He pointed one paw at the problem pins. “That’s the ‘oh no’ side.” Then he pointed at the helper pins. “But this,” he said, “is the ‘oh yes’ side.” He smiled. “It’s also ‘who’s helping’ … and ‘how to join.’” A tiny button appeared under one of the helper cards:</p><p>Join this mission The button blinked at Loopy like a tiny eye. Loopy blinked back, because… fairness. “A join button,” he said softly. “So you don’t have to guess what to do.” He pressed it with one claw. The map made a gentle ding, like the Green Wall, but quieter, as if it didn’t want to wake anyone who was napping. Then a little lantern icon appeared near Cluj and floated up, bobbing like a firefly with a job. Your Tribe can see this mission (if adults allow it). Loopy nodded. “Good,” he murmured. “Grown-ups do the grown-up thing quietly.” The lantern winked once, like it approved. Or like it had dust in its eye. Either way, it was cute. Loopy traced the map with his paw and imagined it: A kid finishes a mission at home. A parent opens the map. They see a helper pin. They join a mission. They go together, like a small brave team. And the world feels… less huge. Less frozen. More like something you can actually hold in your hands. Loopy sat back on his heels, leaf hat slightly tilted, and he said the sentence that felt like the truth: “A map that shows helpers,” he whispered, “is a map with hope.” Then he squinted at the teacup pin again. “And also,” he added, “possibly biscuits.”</p><p>The compass in his pocket gave a tiny happy wiggle, like it agreed. Loopy closed the book gently. He felt lighter. Because now the map didn’t only say: “Here is what needs fixing.” It also said: “Here are the people fixing it. Come join them.” And to Loopy, that was the best kind of magic. The kind where nobody has to be a superhero alone. (Except Loopy. Loopy was obviously a superhero. He had a leaf hat.)</p>',

      // New Cities & Discovery Phase
      'new-cities.title': 'New Cities & Discovery Phase',
      'new-cities.subtitle': 'Growing Together, City by City',
      'new-cities.desc': '<p>EarthPatchers expands slowly and honestly. Each new city starts with a Discovery Phase:</p><ul><li>Find reliable data sources</li><li>Find local helpers and partners</li><li>Identify priority missions</li></ul><p>If discovery is not supported yet, the city stays sleeping until the community helps find data sources or partners.</p>',
      'new-cities.why': 'Scaling should be honest and community-driven. No half-built chapters — each city opens properly with real data, real partners, and real priority missions.',
      'new-cities.loopy': '<p>Loopy opened the big storybook again and flipped to the very edge of the map, where the pages got quieter and the ink looked a little sleepy. At first, he thought the page was unfinished. But then he noticed something. Faint outlines.</p><p>Like soft pencil drawings that hadn’t been coloured in yet. Cities. Lots of them. Some looked like little clusters of rooftops. Some had tiny rivers curling past them. Some had mountains nearby, drawn like big bumpy pillows. They were there… but not fully awake. Loopy traced one outline with one careful claw. It gave a tiny yawn. (Loopy was not sure if maps could yawn, but it definitely felt like a yawn.) “Oh,” Loopy whispered. “Sleeping cities.” He leaned in close and spoke in his best “friendly bear” voice, the one he used for shy rabbits and slightly nervous mushrooms. “Not yet,” he whispered. “First we learn.” A small sign popped up on the page, written in gentle letters, like it didn’t want to startle the sleeping ink: DISCOVERY PHASE Loopy tilted his head. “Discovery Phase,” he repeated. “That sounds like… a treasure hunt, but for grown-ups.” The book agreed by drawing a tiny magnifying glass that wore a bowtie. (Loopy stared at it for a second. “A fancy magnifying glass,” he said. “We have a theme.”) Under the sign, the page explained things in calm, simple sentences: Before a new city opens, EarthPatchers needs three important things: 1) Good information (data) So we know what’s really happening there, not just guesses. 2) Helper teams (helpers) So we’re not alone, and we can work with people who already care. 3) The right missions (missions that matter most) So the missions fit that place, not a random plan. Loopy nodded slowly, like a bear judge at a very serious leaf-hat contest.</p><p>“Yes,” he said. “No guessing. No pretending. Real help.” He pointed at the sleeping city outline and whispered, right snacks.” “We do not wake you up until we have the The city did not answer. Loopy nodded. “Still sleeping. Good self-control.” The book drew a tiny checklist, like a friendly squirrel had made it with neat handwriting: ● Do we know what the biggest problems are? ● Do we know who is already helping? ● Do we have missions that make sense for this place? Loopy smiled and tapped the page. “This,” he announced, “is how you stop big dreams from turning into big confusion.” He leaned back and looked at the sleeping cities again. They weren’t ignored. They weren’t forgotten. They were simply waiting, like story chapters resting until the author is ready to write them properly. Loopy’s voice went soft, the way it does when you mean something. “No half-built chapters,” he said. Then he added, because he was Loopy and Loopy always had a finishing line ready: “We open them properly.” The page shimmered once, like it agreed. And somewhere far off, one of the sleeping city outlines did the tiniest wiggle, like it was excited… …but still staying tucked in.</p>',

      // Patcher Camp
      'patcher-camp.title': 'Patcher Camp',
      'patcher-camp.subtitle': 'The Big Adventure Game',
      'patcher-camp.desc': '<p>Patcher Camp is a future flagship teamwork game.</p><p>Kids work together through Earth zones using powers that are real knowledge: Earth, Water, Fire, Wind.</p><p>It teaches practical skills, problem-solving, and brave teamwork, and it comes after the Games Room foundation is working.</p>',
      'patcher-camp.why': 'Games make learning irresistible. Patcher Camp connects play to real-world action, helping young people see their knowledge as superpowers for the planet.',
      'patcher-camp.loopy': '<p>Loopy was just about to leave the Games Room when he noticed the little oven icon on the wall again. It sat there quietly, glowing like it knew something. Under it, the note still said: EarthPatchers games (later) Loopy nodded at it, very respectfully, the way you nod at an oven that might one day bake you something important. “Good,” he whispered. batter before it’s ready.” “We are being patient. We are being wise. We are not licking the cake The oven icon went ding! like it was accepting an award for “Best Secret Keeper in the Games Room.” Loopy took one careful step toward the exit. That’s when the room did something. Not a loud something. A Games Room something. A gentle breeze slipped through as if the door had sighed. And from under the oven corner, something went… swoooosh. A rolled-up poster slid across the floor like it had been waiting for its dramatic entrance all week. It didn’t crash into anything. It didn’t tumble messily. It arrived perfectly at Loopy’s paws and stopped with a polite little tap, like:</p><p>Excuse me. I am important. Loopy stared down at it. Then he stared up at the oven icon. Then back at the poster. “You,” Loopy whispered to the oven, “have been hiding things.” The oven icon blinked. (Or maybe it was just glowing. But it felt like a blink.) Loopy bent down and read the label on the poster, written in big friendly letters: PATCHER CAMP Loopy’s ears perked up so fast his hat leaf wobbled. “Camp?” he whispered. “I am extremely familiar with camp.” He looked down at himself, his belly in particular.. “I’ve been visiting them… and their delicious picnic baskets, mmmm.” He lifted the poster gently. It was heavier than it looked, like it was full of ideas and possibly snacks in the future. It was tied with a piece of green ribbon that looked like it had been borrowed from a very fancy present. The ribbon shimmered just a little, like it was excited about the future. Loopy untied it carefully. The poster unfurled with a soft fwoomp and a sprinkle of dust that wasn’t dust. It was sparkle-dust, the kind that smells like pine trees and brave choices and maybe a tiny hint of cocoa. On the poster was a big map, drawn like a storybook world. Not just one place. Many places. Earth zones. A sandy place with a sun drawn like a cheerful button. A snowy place with little diamond-sparkles on the ice.</p><p>A rainforest place so green it looked like it could whisper secrets. A windy cliff place with swirly lines dancing across it. And standing at the edge of the map were kids. Not standing like “I will win and you will lose.” Standing like “Okay. Let’s do this together.” Each kid had a symbol above them: A rock for Earth. A wave for Water. A flame for Fire. A swirl for Wind. Loopy’s eyes widened. “Superpowers,” he whispered. Then he leaned in and read the tiny writing at the bottom of the poster. And he smiled. Because the poster made it clear: These weren’t magic-superpowers like shooting lightning from your elbows. These were knowledge superpowers. Earth meant knowing how to build and grow things. Water meant knowing how to find, save, and clean water. Fire meant knowing energy, warmth, cooking, and safety. Wind meant knowing air, weather, and smart ways to use moving power. Loopy’s chest warmed like a lantern. “Their superpower,” he whispered, “is learning.” The poster showed little “team moments” too. The kids didn’t solve everything alone. They shared skills, asked questions, tried again, and helped each other level up. There was even a tiny drawing of a wizard tent in one corner, because of course there was. It had a moon on it and a lantern and a kettle.</p><p>Loopy tapped that part. “A tent with a kettle,” he said. “That is my kind of wizard.” The wizard on the poster was teaching kids how to make “helpful potions,” but not pretend ones. Real ones. Cleaners you can make at home. Ways to fix things instead of throwing them away. Little recipes for taking care of your stuff, your space, and your world. Loopy looked closer and noticed something that made him grin. One of the kids on the poster was holding a sock with a hole. And the other kids were cheering. Loopy nodded. “Sock repair deserves applause.” Then he saw a list of tiny daily tasks drawn like mini quests: ● tidy your camp space ● wash your clothes (or help) ● cook something simple and healthy ● make a natural cleaner ● fix one small thing Loopy blinked. “This game,” he whispered, “is secretly teaching life skills.” He glanced up at the oven icon again. “So THAT’S what we’re baking later,” he said, pointing one claw dramatically. “A giant adventure cake.” The oven icon made a proud little ding! as if to say, Yes. And it will be deliciously fun. Loopy stood there for a moment, leaf hat tilted, heart full of future-adventure feelings. Then he did something very gentle. He rolled the poster back up.</p><p>Not because he didn’t like it. Because he liked it enough to wait. He tied the ribbon again, carefully, like you tie a promise. “Not yet,” he smiled. The ribbon twinkled once, and the room filled with the softest sound of far-away laughter, like future campers were already practicing their giggles in secret, and for a moment the air smelled like pine trees and future plans. Loopy stepped to the doorway and nodded to the whole room, like it was an old friend. “Earth,” he whispered, “we’ll be brave in small ways… until the big ways don’t feel so big.” He paused, then added softly, like he was telling the Games Room a secret: “And that’s what we’re doing here… we’re patching the Earth, one little bit at a time… until the whole world feels a little more stitched back together.” Then he added, because he was Loopy: “And if anyone forgets the snacks, I will send a message to the people in charge. Kindly. But firmly.”</p>',

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
      'mvp.intro': 'EarthPatchers \u00eencepe cu un MVP concentrat care dovede\u0219te c\u0103 platforma func\u021bioneaz\u0103 \u00een via\u021ba real\u0103, \u00een Cluj, \u00eenainte de a ne extinde. Acest MVP are patru piloni:',

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

      'mvp.pillar4.title': 'Povestea P\u0103m\u00e2ntului',
      'mvp.pillar4.subtitle': '\u00cenv\u0103\u021bare + ac\u021biune, Cluj-\u00eent\u00e2i',
      'mvp.pillar4.text': 'O lume de \u00eenv\u0103\u021bare \u0219i ac\u021biune construit\u0103 etapizat \u00een Cluj, cu trei u\u0219i: My Hazards, Zona de Poluare \u0219i Refacere, \u0219i Learn & Play, toate conectate la misiuni.',
      'mvp.pillar4.why': 'Leag\u0103 \u00eenv\u0103\u021barea de ac\u021biune local\u0103, ca oamenii s\u0103 \u00een\u021beleag\u0103 clar \u201ede ce\u201d \u0219i \u201ece fac mai departe\u201d.',

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
      'module.next-steps-title': 'Vine Mai T\u00e2rziu',


      // Missions HQ
      'missions-hq.title': 'Centrul de Misiuni',
      'missions-hq.subtitle': 'De Unde Începe Totul',
      'missions-hq.desc': '<p>Missions HQ este locul de pornire: o bibliotecă de misiuni reale pentru copii, adolescenți și adulți, gândite ca „salvarea Pământului” să fie posibilă și într-o viață ocupată.</p><p>Misiunile vin pe mărimi care încap în program:</p><ul><li>Misiuni mici (10–20 minute)</li><li>Misiuni de weekend (1–2 ore)</li><li>Misiuni de echipă (familie, școală, club, Triburi)</li></ul><p>Adulții pot filtra misiuni după timp, temă și ce li se potrivește (reparații, organizare, predare, grădinărit, design, fotografie), ca ajutorul să fie personal.</p><p>Recompense simple:</p><ul><li>Patch Coins se câștigă prin misiuni și învățare și se folosesc în Market Hut (și mai târziu la Jocuri).</li><li>Insignele arată cine devii (curajos, bun, curios).</li><li>Realizările sunt ce ai făcut, ca niște stickere în caietul tău.</li></ul>',
      'missions-hq.why': 'Misiunile transformă anxietatea climatică în acțiune realizabilă. Oferă familiilor și tinerilor un punct de plecare clar: o misiune o dată, construind schimbare reală pas cu pas.',
      'missions-hq.loopy': 'A fost odată un urs pe nume Loopy.  <br>Îi zicem Loopy Ursul, fiindcă… așa a insistat el.</p><p>Loopy purta o pălărie cu o frunză. Mult prea elegantă pentru un urs.  <br>Dar Loopy era un urs elegant, și asta era tot.</p><p>Într-o dimineață, Loopy a pornit la plimbarea lui de rutină. Îi plăceau diminețile, pentru că pădurea părea proaspăt spălată, ca o pătură întinsă la soare. Pe drum a trecut pe lângă un pârâu, a salutat două ciocănitori (care nu l-au salutat înapoi, fiindcă ciocănitorile sunt mereu ocupate), și a ajuns într-o poieniță pe care nu o mai văzuse.</p><p>În mijlocul ei era un indicator din lemn:</p><p><em>MISSIONS HQ</em></p><p>Loopy a clipit de două ori.  <br>„Hm,” a șoptit el, „Sediu. Acolo sigur se păstrează planuri secrete… și, cu puțin noroc, biscuiți.”</p><p>A încercat să pășească încet, dar un urs care pășește încet arată ca o pernă uriașă care încearcă să nu scârțâie. Totuși, nimeni nu s-a speriat. Dimpotrivă: în jurul unui foc de poveste stăteau oameni mici și oameni mari, cu ochi luminoși, ca atunci când urmează o surpriză bună.</p><p>Pe o masă erau așezate cartonașe ca niște hărți de comori.</p><p>„…mâine salvăm Pământul,” a spus cineva.</p><p>Loopy a încremenit cu un lăbuț ridicat.  <br>„Să salvăm Pământul?” a șoptit el. „Asta e o propoziție uriașă. Are nevoie de o căruță.”</p><p>Apoi a văzut ce făceau, de fapt.</p><p>Un copil a ridicat un cartonaș și a citit cu voce serioasă, de parcă era un cavaler:<br>„<em>Misiunea: Ninja Luminilor!</em>”</p><p>Tata a zâmbit: „Ninja, dacă prinzi lumina lăsată aprinsă în camere goale… câștigi!”  <br>Copilul a fugit, a stins un întrerupător și s-a întors cu o față de „am salvat lumea”.</p><p>Tata a încercat să pară calm: „Poate luna asta vine factura mai mică.”  <br>Loopy a gândit: Oamenii mari se prefac că nu se bucură… dar sprâncenele lor spun adevărul.</p><p>Alt cartonaș: „<em>Misiunea: Repară un lucru.</em>”  <br>Loopy a făcut un „HOP!” dramatic (așa făcea el mereu).  <br>„Să repari,” a șoptit el, „înseamnă să-i spui planetei: «Nu trebuie să facem altul nou. Putem fi isteți.»”</p><p>Alt cartonaș: „<em>Misiunea: Fă o curățenie mică, dar deșteaptă.</em>”  <br>Un adult a zis: „Azi punem lucrurile la loc și folosim mai puține pungi.”  <br>Loopy a dat din cap foarte grav, ca un profesor de pădure: „Așa. Mici pași. Pași care încap în picioare.”</p><p>Când o misiune se termina, se întâmpla ceva blând.  <br>Nu exploda nimic. Nu urla nimeni.  <br>Doar… apărea un licurici de hârtie, o insignă mică, cu un cuvânt.</p><p><em>Bun. Curajos. Curios.</em></p><p>Apoi a apărut un mesaj, ca o ștampilă într-un carnet:<br><em>Realizare deblocată: Prima misiune terminată!</em></p><p>Loopy a găsit un semn care explica simplu, de parcă îi vorbea unui prieten:<br><em>Insignele</em> arată cine devii.  <br><em>Realizările</em> arată ce ai făcut, ca stickere în caietul tău.</p><p>Apoi Patch Coins au sclipit ca niște steluțe de buzunar.</p><p>Loopy a privit oamenii, cartonașele, focul și licuricii-însigne și a zis încet:<br>„Asta nu e doar un plan. Asta e un cerc. Un loop.”',

      // Tribes
      'tribes.title': 'Triburi',
      'tribes.subtitle': 'Echipa Ta Sigură',
      'tribes.desc': '<p>Un Trib este o echipă mică (ca un club). Există:</p><ul><li>Triburi pentru copii/adolescenți (alias + avatar, fără fețe de copii, activitatea copiilor se vede doar în Trib)</li><li>Triburi doar pentru adulți (adulții își aleg vizibilitatea)</li></ul><p>Misiunile pot fi preluate între Triburi, ca ideile bune să circule fără să expunem conturile copiilor.</p><p>Reguli simple, „de tabără”:</p><ul><li>Fii bun</li><li>Nu da detalii private</li><li>Fețele copiilor nu apar niciodată</li><li>Nu posta gunoi aruncat / mizerie (și nu încuraja)</li><li>Folosește „Raportează mizeria” când apare ceva nepotrivit</li></ul>',
      'tribes.why': 'Sustenabilitatea nu e doar despre sarcini — e despre apartenență. Triburile transformă platforma într-o comunitate unde oamenii se sprijină reciproc, acționează împreună și păstrează lucrurile sigure și prietenoase.',
      'tribes.loopy': 'A doua zi, Loopy s-a întors în poieniță.  <br>Și-a aranjat pălăria cu frunza (pentru că pălăria se aranjează, nu se poartă, după părerea lui Loopy).</p><p>Pe un copac era un semn puțin strâmb, de parcă un veverițoi l-ar fi montat din fugă:</p><p><em>TRIBURI</em></p><p>Loopy a mormăit:<br>„Triburi… sună ca un loc unde echipele țin secrete importante… și, poate, gustări.”  <br>(Loopy spera la gustări. Loopy spera mereu la gustări.)</p><p>Înăuntru, felinare atârnau ca niște lunii mici. Se simțea ca într-un club de tabără: cald, prietenos, cu un pic de „hai să facem ceva bun”.</p><p>În mijloc, un lider ținea o scândurică plină de stickere.  <br>Loopy a aprobat imediat. Stickerele înseamnă că cineva chiar îi pasă.</p><p>Acolo erau două uși pictate:</p><p><em>Trib Copii & Adolescenți</em>  <br><em>Trib Adulți</em></p><p>Loopy s-a uitat întâi la ușa copiilor. Înăuntru erau avatare: un arici cu o eșarfă, o vulpe cu o lanternă, un dragon mic care părea că are voie să fie dragon doar în zilele de marți. Nimeni nu avea poze cu fața. Toți aveau nume de aventură: „Curajosul Pin”, „Iepurașul Sprinten”, „Detectivul Ploaie”.</p><p>„Aha,” a șoptit Loopy. „Aici e lumea de poveste. Sigură.”</p><p>Apoi s-a uitat la ușa adulților. Înăuntru, fiecare își alegea stilul: unii cu nume reale, unii cu nume de aventură. Unii cu poze, unii fără.  <br>„Grown-up style,” a gândit Loopy, apoi s-a corectat repede: „Stil de om mare.”</p><p>În mijloc era un „Raft de Misiuni”. Misiunile bune puteau fi puse acolo, ca alte Triburi să le ia.  <br>„Ca rețetele,” a zis Loopy. „Când găsești o supă bună, o împarți.”</p><p>Apoi a văzut „Regulile de Tabără”. Nu erau multe și nici sperietoare. Erau din acelea care păzesc joaca, nu o strică:</p><p>• Fii bun.  <br>• Nu spune lucruri private.  <br>• Fețele copiilor nu apar niciodată.  <br>• Nu posta gunoi aruncat. (Dacă vezi mizerie afară, o cureți într-o misiune, nu o faci vedetă pe internet.)  <br>• Dacă apare ceva nepotrivit, apasă: <em>„Raportează mizeria”</em>.</p><p>Loopy a dat din cap serios:<br>„Regulile astea nu fură magia,” a șoptit el.  <br>„O păzesc. Ca un paznic prietenos… cu o lanternă și, sper eu, gustări.”',

      // Market Hut
      'market-hut.title': 'Piața Verde',
      'market-hut.subtitle': 'Schimbă, Împarte, Reutilizează',
      'market-hut.desc': '<p>Market Hut este schimbul circular local (Cluj întâi): refolosim lucruri în loc să cumpărăm mereu noi. Patch Coins rezolvă problema „schimbului perfect”: nu trebuie să găsești pe cineva care vrea exact ce ai tu, exact când vrei tu altceva.</p>',
      'market-hut.why': 'Obiceiurile circulare sunt una dintre cele mai rapide modalități de a reduce risipa. Patch Coins fac reutilizarea simplă și corectă — fără schimb complicat, doar bunătate și monede.',
      'market-hut.loopy': 'Într-o zi, Loopy a simțit un miros de „încă bun”.  <br>Nu miros de supă. Miros de lucruri care au încă povești în ele.</p><p>A urmat mirosul și a ajuns la o căsuță cu o firmă de lemn:</p><p><em>MARKET HUT</em></p><p>Înăuntru era o comoară liniștită: o geacă de iarnă care părea pregătită pentru încă trei ninsori, o cutie cu creioane care încă voiau să deseneze, o carte care șoptea „mai citește-mă o dată”.</p><p>Loopy a găsit un bilețel: <em>120 Patch Coins</em>.</p><p>„Monede?” a șoptit el. „Pentru comori?”</p><p>Un semn, foarte politicos, i-a explicat:<br>Patch Coins sunt monede de mulțumire.  <br>Le câștigi când ajuți Pământul.  <br>Le folosești ca să alegi lucruri pe care alții nu le mai folosesc.</p><p>Loopy a înțeles ceva deștept:  <br>Schimbul „lucru pe lucru” e greu. Poate tu vrei o geacă, dar omul cu geaca vrea o bicicletă, iar tu ai… un puzzle cu pinguini. Pinguinii sunt foarte simpatici, dar nu țin loc de bicicletă.</p><p>„Aha!” a zis Loopy. „Monedele fac schimbul simplu și drept.”  <br>Nu trebuie să potrivești geacă cu puzzle perfect.  <br>Potrivești bunătate… și monedele fac restul.</p><p>În colț era un panou cu „Cum schimbăm frumos”.  <br>Loopy a citit și a dat din cap: „Bun. O căsuță cu reguli prietenoase. Așa se ține tabăra curată.”</p><p>Apoi a plecat zâmbind, cu pălăria lui elegantă și cu o idee mare în cap:<br>„Nu aruncăm povești. Le dăm mai departe.”',

      // Earth's Side of the Story
      'earth-side.title': 'Povestea Pământului',
      'earth-side.subtitle': 'Învațare Care Începe în Cluj',
      'earth-side.desc': '<p>Este lumea de învățare + harta de acțiune care începe în Cluj. Are trei „uși”:</p><ol><li><strong>My Hazards</strong> (riscuri explicate simplu + quiz-uri)</li><li><strong>Zona de poluare și refacere</strong> (harta Cluj cu marcaje: poză + notă; marcajele pot deveni misiuni; mai târziu apar „ajutori” verificați)</li><li><strong>Learn &amp; Play</strong> (învățare scurtă, ca joc)</li></ol>',
      'earth-side.next1': 'Marcajele noi pot trimite un semn bl\u00e2nd Triburilor din zon\u0103, ca echipele locale s\u0103 poat\u0103 alege s\u0103 ajute.',
      'earth-side.next2': 'Ora\u0219ele noi se deschid doar cu Faza de descoperire (date + parteneri + misiuni importante). Dac\u0103 descoperirea nu e sus\u021binut\u0103, zona r\u0103m\u00e2ne \u201eadormit\u0103\u201d p\u00e2n\u0103 c\u00e2nd comunitatea ajut\u0103 s\u0103 g\u0103seasc\u0103 surse de date sau parteneri.',
      'earth-side.why': 'Înțelegerea „de ce” este podul între acțiune și schimbare durabilă. Acest modul face învățarea accesibilă, sigură emoțional și conectată direct la misiuni reale.',
      'earth-side.loopy': 'Loopy a găsit o carte uriașă, atât de mare încât părea o ușă de castel. Pe copertă scria:</p><p><em>THE EARTH’S SIDE OF THE STORY</em></p><p>Loopy a pus o lăbuță pe copertă și a șoptit:<br>„Pământule, te rog… explică-te pe înțeles de urs.”</p><p>Cartea s-a deschis cu un fâșâit moale, ca atunci când întorci multe pagini deodată. Înăuntru erau trei uși. Uși de aventură, nu uși de frică.</p><p><strong>Ușa 1: My Hazards</strong><br>Prima cameră mirosea a vânt și a nori. Pe un raft erau trei borcane.</p><p>Primul borcan: <em>Natură</em>  <br>Al doilea: <em>Natură, dar mai rău</em>  <br>Al treilea: <em>Făcut de oameni</em></p><p>Pe perete a apărut un text blând:<br>„Uneori natura e sălbatică. Uneori devine mai greu când oamenii schimbă aerul, apa sau pământul. Și uneori oamenii fac probleme fără să vrea, apoi învață să facă mai bine.”</p><p>Loopy a dat din cap.  <br>„Bun. Asta se poate povesti.”</p><p>Apoi a găsit un card de quiz.  <br>A răspuns cu foarte multă concentrare.  <br>Patch Coins au sclipit în buzunar ca niște steluțe.</p><p>„Învățare cu scântei,” a zis Loopy fericit.</p><p><strong>Ușa 2: Zona de poluare și refacere</strong><br>A doua ușă s-a deschis spre o hartă. Nu era toată lumea. Încă nu.</p><p>Era un loc cald care lumina:</p><p><em>Cluj</em></p><p>Loopy s-a apropiat și a șoptit:<br>„Începem aici, pentru că eroii încep de unde le sunt lăbuțele.”</p><p>Adulții puneau marcaje pe hartă cu o poză și o notă scurtă:<br>„Aici se aruncă des gunoi.”  <br>„Aici e ceva stricat.”  <br>„Aici e un loc care are nevoie de grijă.”</p><p>Loopy s-a uitat și a zis:<br>„Asta e arătare utilă.”</p><p>Apoi a văzut ceva grozav:  <br>unele marcaje puteau deveni misiuni.</p><p>„Aha!” a zâmbit Loopy.  <br>„Învățarea nu se evaporă. Se face faptă.”</p><p>Cartea mai spunea că, mai târziu, harta poate arăta și „ajutători” verificați: echipe, ONG-uri, cercetători, grupuri care știu să repare lucruri cu cap.  <br>„O hartă cu ajutători,” a șoptit Loopy, „e o hartă cu speranță.”</p><p>Și, într-o zi, când apare un marcaj nou, Triburile din apropiere pot primi un semn mic, ca o pâlpâire de felinar:<br>„E ceva aici care are nevoie de grijă.”<br>Nu zgomotos. Nu stresant. Doar o invitație curajoasă.</p><p><strong>Ușa 3: Learn & Play</strong><br>A treia cameră arăta ca un joc care se preface că e lecție, dar de fapt e joc.  <br>Loopy a încercat un puzzle și aproape a răspuns „mai multe fructe de pădure”, dar cartea a fost drăguță și i-a mai dat un card.</p><p>La marginea paginii erau alte orașe desenate foarte fin, ca niște capitole adormite.  <br>„Se deschid când suntem gata,” a citit Loopy. „Întâi facem Faza de descoperire: găsim date bune, ajutători și misiuni importante.”</p><p>Loopy a zâmbit și și-a aranjat pălăria:<br>„Capitolele se deschid frumos. Nu pe jumătate.”',

      // Games Room
      'games-room.title': 'Camera de Jocuri',
      'games-room.subtitle': 'Joacă-te cu un Scop',
      'games-room.desc': '<p>Începe cu jocuri integrate (jocuri bune despre natură), ca să avem joacă + învățare repede. Patch Coins deblochează jocuri.</p>',
      'games-room.next1': 'Jocuri create de EarthPatchers, \u0219i \u00een cele din urm\u0103 Patcher Camp.',
      'games-room.why': 'Joaca e modul în care copiii învață cel mai bine. Începând cu jocuri de încredere, învățarea vine repede, iar Patch Coins mențin legătura cu efortul real.',
      'games-room.loopy': 'Loopy a găsit o ușă care… părea că chicotește. Nu tare. Doar cât să-ți dea curaj să intri.</p><p>Pe ușă scria:</p><p><em>GAMES ROOM</em></p><p>Înăuntru nu era un singur joc. Era o cameră în care pot veni mai multe jocuri, ca într-o poiană de tabără unde se schimbă activitățile: ba o vânătoare de comori, ba un puzzle, ba un joc despre păsări care te face să zici „vai, ce istețe sunt!”</p><p>„Aha,” a zis Loopy. „Întâi invităm jocuri bune care deja există. Le aducem aici, ca oaspeți de încredere.”  <br>Apoi s-a uitat la un panou cu o regulă simplă:<br><em>Patch Coins deschid jocuri.</em></p><p>Loopy a zâmbit.<br>„Monedele deschid uși,” a zis el. „E o regulă care încape și în mintea mea de urs.”</p><p>Și, fiind Loopy, a adăugat:<br>„Dacă o ușă nu se deschide… probabil ai nevoie de încă o misiune. Sau de o gustare. Uneori ambele.”',

      // Activity Hut
      'activity-hut.title': 'Atelierul de Activități',
      'activity-hut.subtitle': 'Jurnalul Tău de Aventuri',
      'activity-hut.desc': '<p>Jurnalul personal: urma aventurii, Patch Coins acum vs câștigate, insigne, realizări, roluri, setări de vizibilitate.</p>',
      'activity-hut.next1': 'AI sigur pentru copii care creeaz\u0103 \u201ePovestea Eroului\u201d din aventuri verificate (doar alias + avatar).',
      'activity-hut.why': 'Jurnalul tău de aventuri este locul unde efortul devine vizibil. Insignele arată cine devii, realizările arată ce ai făcut, iar totalul de Patch Coins arată impactul tău pe viață.',
      'activity-hut.loopy': 'Loopy a găsit o ușă ca un trunchi de copac, cu o steluță și o lăbuță sculptate.</p><p><em>ACTIVITY HUT</em></p><p>Înăuntru era cald ca într-un cuib. Pe perete erau urme luminoase, ca o potecă de licurici.</p><p>„Asta e urma aventurii tale,” a șoptit Loopy.  <br>„Nu ca să te grăbești. Ca să-ți amintești că ai mers.”</p><p>Pe un raft erau insigne care străluceau blând: Bun. Curajos. Curios.  <br>„Insignele arată cine devii,” a zis Loopy.</p><p>Apoi a apărut o ștampilă de poveste:<br><em>Realizare deblocată: Prima misiune terminată</em></p><p>Loopy a zâmbit:<br>„Iar realizările sunt ce ai făcut… ca stickerele în caietul tău. Ții minte?”</p><p>În colț erau două borcane:<br><em>Patch Coins acum</em> și <em>Patch Coins câștigate</em>.</p><p>Loopy a arătat spre al doilea:<br>„Chiar dacă dai monede pe o geacă, efortul tău rămâne aici. Efortul nu se cheltuie.”</p><p>Apoi a văzut un carnet legat cu panglică:<br><em>Povestea Eroului (mai târziu)</em></p><p>Loopy a pus o lăbuță pe el și a șoptit:<br>„Într-o zi, când magia e sigură pentru copii, carnetul ăsta îți va scrie aventura înapoi.  <br>O poveste de seară din faptele tale bune… fără nume reale, fără poze cu fețe. Doar tu, avatarul tău și curajul tău.”',

      // Eco Shops Directory
      'eco-shops.title': 'Director Magazine Eco',
      'eco-shops.subtitle': 'Găsește Ce E Cu Adevărat Sustenabil',
      'eco-shops.desc': '<p>Ghid Cluj-întâi cu produse și magazine eco, cu rating + comentarii ca să rămână totul cinstit. Poți adăuga/evalua doar după ce ai Patch Coins suficiente și o misiune verificată. Produsele se trimit pe un șablon și sunt verificate de MasterPatchers.</p>',
      'eco-shops.why': 'Găsirea produselor cu adevărat sustenabile e dificilă. Acest director păstrează lucrurile cinstite cu recenzii din comunitate, misiuni verificate și verificare MasterPatcher.',
      'eco-shops.loopy': 'Loopy a găsit o carte ca un catalog de comori, dar cu note scrise de oameni adevărați.</p><p>„Săpunul ăsta e refill și miroase a lămâie.”  <br>„Ambalajul s-a schimbat, acum nu mai e la fel de bun.”  <br>„Asta chiar se poate composta.”</p><p>Loopy a dat din cap serios:<br>„Să spui adevărul despre un lucru… e un fel de curaj mic.”</p><p>Apoi a văzut o regulă:<br>„Doar cei care au făcut o misiune verificată și au Patch Coins pot să dea note și să adauge produse.”</p><p>„Perfect,” a zis Loopy.  <br>„Întâi ajuți. Apoi vorbești. Așa rămâne ghidul curat și de încredere.”</p><p>Și mai era un șablon de adăugare:<br>poză, unde se găsește, din ce e făcut, de ce e mai bun, la ce să fii atent.</p><p>„Foarte bine,” a zis Loopy. „Când pui ordine în informație, informația nu mai fuge.”',

      // The Green Wall
      'green-wall.title': 'Peretele Verde',
      'green-wall.subtitle': 'Unde Ideile Cresc',
      'green-wall.desc': '<p>Grădina de idei: idei pentru comunitate și idei pentru următorii pași ai EarthPatchers. Oamenii se adună după ce știu să facă (skill). Helper Page este în Activity Hut și e opțional.</p>',
      'green-wall.why': 'Ideile bune au nevoie de mai mult decât entuziasm — au nevoie de competențe, muncă în echipă și uneori finanțare. Peretele Verde transformă energia comunității în proiecte reale.',
      'green-wall.loopy': 'Loopy a găsit un perete care nu era perete. Era o pădure de idei.</p><p>Pe el erau frunze-notițe:<br>„Club de reparații.”  <br>„Grădină la școală.”  <br>„O funcție nouă în EarthPatchers.”  <br>„Un oraș nou, când va fi timpul.”</p><p>Oamenii nu doar lipeau idei. Se lipeau și ei de idei:<br>„Eu desenez.”  <br>„Eu organizez.”  <br>„Eu repar.”  <br>„Eu predau.”</p><p>Loopy a zâmbit:<br>„O idee e o sămânță. O echipă e ploaia.”</p><p>Apoi a spus, foarte mândru de el:<br>„Peretele ăsta nu te ține afară.  <br>Îți crește o coroană de copac deasupra capului…  <br>ca ideile tale să stea la umbră, să se răcorească… și să se gândească cum să devină adevărate.”</p><p>Și, fiind Loopy, a adăugat încet:<br>„Dacă ideile ar fi supă, peretele ăsta ar fi o oală mare. Și eu… aș cere o lingură.”',

      // Organisations & Scientists
      'org-scientists.title': 'Organizații & Oameni de Știință',
      'org-scientists.subtitle': 'Ajutori pe Hartă',
      'org-scientists.desc': '<p>Organizațiile și cercetătorii verificați apar ca „ajutori” pe harta din Zona de poluare și refacere (Earth’s Side of the Story), împreună cu misiuni asociate. Scopul este să vezi clar cine ajută, unde și cum te poți implica.</p>',
      'org-scientists.why': 'Să vezi cine ajută — și cum te poți alătura — transformă o hartă cu probleme într-o hartă cu speranță. Marcajele verificate conectează acțiunea comunitară la expertiză reală.',
      'org-scientists.loopy': 'Loopy s-a întors la hartă și a văzut marcaje care nu spuneau doar „aici e o problemă”.</p><p>Unele spuneau:<br>„Aici e o echipă care curăță râul.”  <br>„Aici sunt oameni care studiază aerul.”  <br>„Aici e un grup care plantează copaci și îi îngrijește.”</p><p>Loopy a șoptit:<br>„Asta îmi place. Nu e doar o hartă cu griji. E și o hartă cu ajutor.”</p><p>A apăsat pe un marcaj și a apărut o explicație scurtă, pe înțeles:<br>ce fac, de ce contează, cum poți ajuta.</p><p>Loopy a zâmbit:<br>„Când vezi ajutători, îți vine și ție să ajuți.”',

      // New Cities & Discovery Phase
      'new-cities.title': 'Orașe Noi & Faza de Descoperire',
      'new-cities.subtitle': 'Creștem Împreună, Oraș cu Oraș',
      'new-cities.desc': '<p>EarthPatchers se extinde lent și onest. Un oraș nou se deschide doar după Faza de descoperire: găsim date bune, parteneri locali și misiunile care contează. Dacă nu există sprijin suficient, orașul rămâne „adormit” până când comunitatea ajută cu surse de date sau conexiuni.</p>',
      'new-cities.why': 'Scalarea trebuie să fie onestă și condusă de comunitate. Fără capitole pe jumătate — fiecare oraș se deschide cu date reale, parteneri reali și misiuni prioritare.',
      'new-cities.loopy': 'Loopy a văzut la marginea hărții contururi de orașe, desenate fin, ca în creion.</p><p>„Sunt adormite,” a zis el. „Nu uitate. Doar… încă nu e timpul.”</p><p>Pe o etichetă scria:<br><em>Faza de descoperire</em></p><p>Loopy a citit:<br>„Înainte să deschidem un oraș nou, găsim paginile lipsă: date bune, ajutători locali, misiuni importante.”</p><p>Loopy a dat din cap:<br>„Dacă deschizi un capitol fără pagini, te tot uiți și zici ‘hă?’”</p><p>Apoi a zâmbit și a spus ca un urs care a învățat ceva important:<br>„Capitolele se deschid frumos. Nu pe jumătate.”',

      // Patcher Camp
      'patcher-camp.title': 'Tabăra Patcher',
      'patcher-camp.subtitle': 'Marea Aventură',
      'patcher-camp.desc': '<p>Patcher Camp este jocul mare de echipă, construit mai târziu, în Games Room. Copiii au „puteri” care sunt cunoștințe reale (Pământ/Apă/Foc/Vânt) și rezolvă împreună probleme din diferite zone ale lumii. Vine după ce Games Room funcționează bine.</p>',
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

  formatLoopyStory(html) {
    const wrap = document.createElement('div');
    wrap.innerHTML = html;

    wrap.querySelectorAll('p').forEach((p) => {
      const text = p.textContent.replace(/\s+/g, ' ').trim();
      if (!text) {
        p.remove();
        return;
      }

      // Convert bullet marker blocks to proper lists where possible.
      if (text.includes('●')) {
        const parts = text.split('●').map((x) => x.trim()).filter(Boolean);
        if (parts.length >= 2) {
          const frag = document.createDocumentFragment();
          const lead = text.split('●')[0].trim();

          if (lead) {
            this.chunkParagraphs(lead).forEach((chunk) => {
              const np = document.createElement('p');
              np.innerHTML = this.italicizeSpeech(chunk);
              frag.appendChild(np);
            });
          }

          const ul = document.createElement('ul');
          parts.slice(lead ? 1 : 0).forEach((item) => {
            const li = document.createElement('li');
            li.innerHTML = this.italicizeSpeech(item);
            ul.appendChild(li);
          });
          frag.appendChild(ul);
          p.replaceWith(frag);
          return;
        }
      }

      // Convert dash marker blocks to proper lists where possible.
      const dashMatches = text.match(/(?:^|\s)-\s+[^-]+/g);
      if (dashMatches && dashMatches.length >= 2) {
        const items = dashMatches.map((m) => m.replace(/^\s*-\s+/, '').trim());
        const lead = text.split(/\s-\s+/)[0].trim();
        const frag = document.createDocumentFragment();

        if (lead && lead !== text) {
          this.chunkParagraphs(lead).forEach((chunk) => {
            const np = document.createElement('p');
            np.innerHTML = this.italicizeSpeech(chunk);
            frag.appendChild(np);
          });
        }

        const ul = document.createElement('ul');
        items.forEach((item) => {
          const li = document.createElement('li');
          li.innerHTML = this.italicizeSpeech(item);
          ul.appendChild(li);
        });
        frag.appendChild(ul);
        p.replaceWith(frag);
        return;
      }

      const chunks = this.chunkParagraphs(text);
      if (chunks.length <= 1) {
        p.innerHTML = this.italicizeSpeech(chunks[0] || text);
        return;
      }

      const frag = document.createDocumentFragment();
      chunks.forEach((chunk) => {
        const np = document.createElement('p');
        np.innerHTML = this.italicizeSpeech(chunk);
        frag.appendChild(np);
      });
      p.replaceWith(frag);
    });

    return wrap.innerHTML;
  },

  chunkParagraphs(text) {
    const clean = text.replace(/\s+/g, ' ').trim();
    if (!clean) return [];
    if (clean.length < 320) return [clean];

    // Avoid lookbehind regex for broad browser compatibility.
    const sentenceMatches = clean.match(/[^.!?]+[.!?]+(?:\s+|$)|[^.!?]+$/g);
    const sentences = sentenceMatches ? sentenceMatches.map(s => s.trim()).filter(Boolean) : [clean];
    const chunks = [];
    let current = '';

    sentences.forEach((s) => {
      const next = current ? `${current} ${s}` : s;
      if (next.length > 260 && current) {
        chunks.push(current.trim());
        current = s;
      } else {
        current = next;
      }
    });

    if (current.trim()) chunks.push(current.trim());
    return chunks;
  },

  escapeHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  },

  italicizeSpeech(text) {
    const escaped = this.escapeHtml(text);
    return escaped
      .replace(/“([^”]+)”/g, '<em>“$1”</em>')
      .replace(/"([^"]+)"/g, '<em>"$1"</em>');
  },

  t(key) {
    return this.translations[this.currentLang]?.[key] || key;
  }
};
