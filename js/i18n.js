/* ============================================
   EarthPatchers — Internationalization (EN/RO)
   ============================================ */

const I18n = {
  currentLang: 'ro',
  mergedTranslationsCache: {},
  translationSections: {},
  audienceOverrides: {
    en: {
      public: {
        'hero.tagline': '<span class="hero__tagline-line hero__tagline-line--desktop">Patching the Earth (and your wallet),</span><span class="hero__tagline-line hero__tagline-line--mobile">Patching the Earth</span><span class="hero__tagline-line hero__tagline-line--mobile">(and your wallet),</span><span class="hero__tagline-line hero__tagline-line--mobile">One Stitch at a Time</span><span class="hero__tagline-line hero__tagline-line--desktop">One Stitch at a Time</span>',
        'hero.subtitle': 'Small, clear missions you can do without an internet scavenger hunt.<br>We repair the planet too, but we start with what matters most to you: time, budget, and daily chaos.<br><br>No superheroes. No drama. Just small steps, done together.',
        'overview.problem.title': 'The Problem We Solve',
        'overview.problem.text': 'We are not short on information.<br>We are short on time, clarity, and simple ways to act.<br><br>The ideas that help you save money, waste less, or do something useful are scattered everywhere — across websites, reports, and social media — like socks after laundry day: everywhere, when all you want is to have them neatly in a drawer, where they belong.<br><br>EarthPatchers gathers them in one place.<br>Not something to research.<br>Something to do.',
        'overview.problem.solution': '',
        'overview.mission.title': 'Mission Examples',
        'overview.mission.text': 'A mission is a practical action you can complete in real life that helps your neighborhood, your community, and the natural world.',
        'overview.mission.paths': '<span class="overview-problem-lead">Then you choose how:</span><ul><li><strong>At home:</strong> small, quick missions for busy days.</li><li><strong>In a Tribe:</strong> join a team or build your own.</li><li><strong>With NGOs:</strong> join a trusted NGO’s Tribe and help with their missions.</li></ul><p></p>',
        'overview.mission.paths-solution': '<span class="overview-problem-signoff">No stress. No pressure.</span><br>Just practical action, shared effort, and a reminder that big things rarely get fixed alone.',
        'overview.mission.small.examples': '<ul><li>Time: about 1-20 minutes, either once or repeated over a few days until the habit sticks.</li><li>Kids: water one local tree or plant and track it for a week.</li><li>Teens: run a one-week save water at home Tribe challenge.</li><li>Adults: check the fridge, find 2 things that need to be eaten today or tomorrow, and move them to the front.</li></ul>',
        'overview.tribe.leaders': '',
        'overview.trust.missions': '<p>Some features are still being built.</p><p>For now:</p><ul><li>Missions are validated by leaders (MasterPatchers) or by sending proof by email</li><li>Patch Coins are tracked as a visible thank-you for real effort.</li></ul><p>As the platform grows, validation and rewards will become fully integrated.</p>',
        'overview.trust.how': '<p>Some features are still being built.</p><p>For now:</p><ul><li>Missions are validated by leaders (MasterPatchers) or by sending proof by email</li><li>Patch Coins are tracked as a visible thank-you for real effort</li></ul><p>As the platform grows, validation and rewards will become fully integrated.</p>',
        'patch-counter.info': 'Patch Coin functionality is not implemented yet.',
        'patch-counter.link': 'More about Patch Coins',
        'patch-coins.desc': '<p><span class=\"patch-coins-desc__primary\">Patch Coins are EarthPatchers thank-you points for effort, care, and learning.</span> <span class=\"patch-coins-desc__secondary\">They are earned when missions are completed and validated.</span></p><ul><li>They recognise real effort and useful habits.</li><li>Later, they can be used in modules like Market Hut and Games Room.</li></ul>',
        'missions-hq.rewards.coins': 'Patch Coins: you earn them through missions and learning, and they later have practical use in modules like Market Hut and Games Room.',
        'missions-hq.desc': "<p>Missions HQ is where EarthPatchers begins. It is a library of real-life missions for kids, teens, and adults — organised by time, type, and group.</p><p>You can take part in different ways:</p><ul><li>quick missions (10–20 minutes)</li><li>longer missions (1–2 hours)</li><li>group missions (families, schools, teams)</li></ul><p>For adults, missions are matched to skills (repairing, organising, teaching, gardening, design, photography) and time available, so volunteering fits your time and what you’re good at. For kids, missions are designed to feel engaging and hands-on.</p><p>For now, missions can be validated by leaders (MasterPatchers) or by sending the requested proof to us by email until website mission validation is ready.</p><p>This structure also makes projects easier to repeat across communities: once a mission works well, it can be reused by other groups without starting from scratch.</p>",
        'missions-hq.rewards.badges': 'Badges: they reflect the kind of person you are becoming (brave, kind, curious).',
        'missions-hq.rewards.achievements': 'Achievements: they capture what you did along the way, like stickers in your adventure notebook.',
        'missions-hq.why': 'Missions turn caring for the planet into an adventure. They give people a clear starting point: one mission at a time, building real change step by step.',
        'about.mission.text': 'When something feels useful and worth your time in real life, it’s easier to give it a try. That’s why we offer a platform with clear missions you can actually follow in real life, a safe community, and simple reuse solutions.<br><br>And along the way, we repair the planet too — one mission at a time.<br>With superheroes, but without all the drama. Just small steps, done together.',
        'about.vision.text': 'A world where reusing and repairing are as routine as brushing your teeth.',
        'about.vision.expand': 'Local communities doing small but clever things, saving money on bills and shopping, and raising resourceful children who know how to repair, choose better, and not panic over a stubborn zipper.',
        'about.why.text': '<p>Because you don’t have time to figure everything out.</p><p>Because small things pile up — things to fix, reuse, or stop wasting.</p><p>Because life is already full, and “I’ll deal with it later” quietly becomes “not today again.”</p><p>EarthPatchers turns those moments into clear, doable steps.</p><p>No searching. No overwhelm. Just a place to start.</p><p>So we focus on one simple question: not “How do you do everything?” but “Where do you start?”</p>',
        'mvp.intro': 'EarthPatchers will begin through focused pilots with interested schools, leaders, and early partners, and will start with two core pillars:',
        'mvp.more.title': 'Curious what’s coming next?',
        'mvp.more.text': 'Switch to Partner View to explore the full Base Camp plan and Next Steps in our Adventure.',
        'mvp.more.cta': 'Explore Partner View'
      },
      partners: {
        'hero.tagline': '<span class="hero__tagline-line hero__tagline-line--desktop">Patching the Earth (and your wallet),</span><span class="hero__tagline-line hero__tagline-line--mobile">Patching the Earth</span><span class="hero__tagline-line hero__tagline-line--mobile">(and your wallet),</span><span class="hero__tagline-line hero__tagline-line--mobile">One Stitch at a Time</span><span class="hero__tagline-line hero__tagline-line--desktop">One Stitch at a Time</span>',
        'overview.problem.title': 'The Problem We Solve',
        'overview.problem.text': 'We are not short on information.<br>We are short on time, clarity, and simple ways to act.<br><br>The ideas that help you save money, waste less, or do something useful are scattered everywhere — across websites, reports, and social media — like socks after laundry day: everywhere, when all you want is to have them neatly in a drawer, where they belong.<br><br>EarthPatchers gathers them in one place.<br>Not something to research.<br>Something to do.',
        'overview.problem.solution': '',
        'patch-coins.desc': '<p><span class=\"patch-coins-desc__primary\">Patch Coins are EarthPatchers thank-you points for effort, care, and learning.</span> <span class=\"patch-coins-desc__secondary\">They are earned when missions are completed and validated</span></p><ul><li>They recognise real effort and useful habits.</li><li>Later, they can be used in modules like Market Hut and Games Room.</li></ul>',
        'mvp.pillar3.text': 'A place to swap and reuse, with clear rules and safe, trusted exchanges',
        'mvp.pillar4.text': 'A world where learning turns into action, connected to real missions and local impact.',
        'overview.mission.paths': '<span class="overview-problem-lead">Then you choose how:</span><ul><li><strong>At home:</strong> small, quick missions for busy days.</li><li><strong>In a Tribe:</strong> join a team or build your own.</li><li><strong>With NGOs:</strong> join a trusted NGO’s Tribe and help with their missions.</li></ul><p></p>',
        'overview.mission.paths-solution': '<span class="overview-problem-signoff">No stress. No pressure.</span><br>Just practical action, shared effort, and a reminder that big things rarely get fixed alone.',
        'overview.mission.small.examples': '<ul><li>Time: about 1-20 minutes, either once or repeated over a few days until the habit sticks.</li><li>Kids: water one local tree or plant and track it for a week.</li><li>Teens: run a one-week save water at home Tribe challenge.</li><li>Adults: check the fridge, find 2 things that need to be eaten today or tomorrow, and move them to the front.</li></ul>'
      }
    },
    ro: {
      public: {
        'hero.tagline': '<span class="hero__tagline-line hero__tagline-line--desktop">Reparăm Pământul (și buzunarele),</span><span class="hero__tagline-line hero__tagline-line--mobile">Reparăm Pământul</span><span class="hero__tagline-line hero__tagline-line--mobile">(și buzunarele),</span><span class="hero__tagline-line hero__tagline-line--mobile">Petec cu Petec</span><span class="hero__tagline-line hero__tagline-line--desktop">Petec cu Petec</span>',
        'hero.subtitle': 'Misiuni mici și clare, fără să te pierzi în căutări pe internet.<br>Reparăm și planeta, dar începem cu ce contează cel mai mult pentru tine: timp, buget și haosul de zi cu zi.<br><br>Fără supereroi. Fără dramă. Doar pași mici, făcuți împreună.',
        'overview.problem.title': 'Problema pe care o rezolvăm',
        'overview.problem.text': 'Nu ducem lipsă de informații.<br>Ducem lipsă de timp, claritate și moduri simple de a acționa.<br><br>Ideile care te ajută să economisești bani, să risipești mai puțin sau să faci ceva util sunt împrăștiate peste tot — pe site-uri, în rapoarte și prin social media — ca șosetele după spălat: peste tot, când tot ce vrei este să le ai frumos în sertar, la locul lor.<br><br>EarthPatchers le adună într-un singur loc.<br>Nu ceva de căutat.<br>Ceva de făcut.',
        'overview.problem.solution': '',
        'overview.mission.title': 'Exemple de Misiuni',
        'overview.mission.text': 'O misiune este o acțiune practică pe care o poți face în viața reală și care ajută cartierul tău, comunitatea și mediul înconjurător.',
        'overview.mission.paths': '<span class="overview-problem-lead">Apoi alegi cum:</span><ul><li><strong>Acasă:</strong> misiuni mici și rapide, pentru zilele aglomerate.</li><li><strong>Într-un Trib:</strong> alătură-te unei echipe sau creează-ți propriul Trib.</li><li><strong>Cu ONG-uri:</strong> alătură-te unui ONG de încredere și implică-te în misiunile sale, prin Tribul lor.</li></ul><p></p>',
        'overview.mission.paths-solution': '<span class="overview-problem-signoff">Fără stres. Fără presiune.</span><br>Doar acțiuni practice, efort comun și o reamintire că lucrurile mari rareori se repară de unul singur.',
        'overview.mission.small.examples': '<ul><li>Durată: aproximativ 1–20 de minute, o singură dată sau repetată pe parcursul câtorva zile, până devine un obicei.</li><li>Copii: udă un copac sau o plantă din apropiere și urmărește-o timp de o săptămână.</li><li>Adolescenți: organizează, timp de o săptămână, o provocare în familie pentru a economisi apă acasă.</li><li>Adulți: verifică frigiderul, găsește 2 lucruri care trebuie consumate azi sau mâine și mută-le în față.</li></ul>',
        'overview.tribe.leaders': '',
        'overview.trust.missions': '<p>Unele funcționalități sunt încă în curs de dezvoltare.</p><p>Pentru moment:</p><ul><li>Misiunile sunt validate de lideri (MasterPatchers) sau prin trimiterea dovezilor pe email</li><li>Monedele Patch sunt urmărite ca o formă vizibilă de apreciere pentru efortul depus</li></ul><p>Pe măsură ce platforma crește, validarea și recompensele vor fi integrate complet.</p>',
        'overview.trust.how': '<p>Unele funcționalități sunt încă în curs de dezvoltare.</p><p>Pentru moment:</p><ul><li>Misiunile sunt validate de lideri (MasterPatchers) sau prin trimiterea dovezilor pe email</li><li>Monedele Patch sunt urmărite ca o formă vizibilă de apreciere pentru efortul depus</li></ul><p>Pe măsură ce platforma crește, validarea și recompensele vor fi integrate complet.</p>',
        'patch-counter.info': 'Functionalitatea pentru Monede Patch nu este implementata încă.',
        'patch-counter.link': 'Mai multe despre Monede Patch',
        'patch-coins.desc': '<p><span class=\"patch-coins-desc__primary\">Monedele Patch sunt modul nostru de a spune „mulțumesc” pentru efort, grijă și învățare.</span> <span class=\"patch-coins-desc__secondary\">Se câștigă atunci când misiunile sunt finalizate și validate.</span></p><ul><li>Recunosc efortul real și obiceiurile utile.</li><li>Mai târziu, pot fi folosite în module precum Căsuța de Schimb și Camera de Jocuri.</li></ul>',
        'missions-hq.rewards.coins': 'Monede Patch: le câștigi prin misiuni și învățare, iar mai târziu le poți folosi în module precum Căsuța de Schimb și Camera Jocurilor.',
        'missions-hq.desc': "<p>Cartierul Misiunilor este locul unde începe EarthPatchers. Este o bibliotecă de misiuni din viața reală pentru copii, adolescenți și adulți — organizată după timp, tip și grup.</p><p>Poți participa în moduri diferite:</p><ul><li>misiuni rapide (10–20 minute)</li><li>misiuni mai lungi (1–2 ore)</li><li>misiuni de grup (familii, școli, echipe)</li></ul><p>Pentru adulți, misiunile sunt potrivite în funcție de abilități (reparații, organizare, predare, grădinărit, design, fotografie) și de timpul disponibil, astfel încât implicarea să se potrivească cu ceea ce știi să faci și cu programul tău. Pentru copii, misiunile sunt gândite să fie captivante și practice.</p><p>Deocamdată, misiunile pot fi validate de lideri (MasterPatchers) sau prin trimiterea dovezilor cerute pe email, până când validarea direct în platformă va fi disponibilă.</p><p>Structura aceasta face proiectele mai ușor de repetat în comunități diferite: odată ce o misiune funcționează bine, poate fi refolosită de alte grupuri fără să pornească de la zero.</p>",
        'missions-hq.rewards.badges': 'Insignele: reflectă felul de persoană care devii (curajos, bun, curios).',
        'missions-hq.rewards.achievements': 'Realizări: surprind ceea ce ai făcut pe parcurs, ca niște stickere în jurnalul tău de aventură.',
        'missions-hq.why': 'Misiunile transformă grija pentru planetă într-o aventură. Oferă un punct clar de pornire: cu fiecare misiune, construind schimbări reale, pas cu pas.',
        'about.mission.text': 'Când dai peste ceva care chiar îți este de folos în viața de zi cu zi, parcă îți vine mai ușor să-l încerci. De aceea oferim o platformă cu misiuni clare pe care chiar le poți urma în viața reală, o comunitate sigură și soluții simple de refolosire.<br><br>Și, pe parcurs, reparam și planeta — cu fiecare misiune.<br>Cu supereroi, dar fără toată drama. Doar pași mici, făcuți împreună.',
        'about.vision.text': 'O lume în care refolosirea și repararea sunt un obicei, ca spălatul pe dinți.',
        'about.vision.expand': 'Comunități locale care fac lucruri mici, dar istețe, economisesc la facturi și cumpărături și cresc copii descurcăreți: știu să repare, să aleagă mai bine și să nu se sperie de un fermoar încăpățânat.',
        'about.why.text': '<p>Pentru că nu ai timp să le descoperi pe toate singur.</p><p>Pentru că lucrurile mici se adună — de reparat, de refolosit sau de evitat să le mai irosești.</p><p>Pentru că viața este deja plină, iar „mă ocup mai târziu” devine, treptat, „nu azi”.</p><p>EarthPatchers transformă aceste momente în pași clari și ușor de urmat.</p><p>Fără căutări. Fără complicații. Doar un loc de unde să începi.</p><p>Ne concentrăm pe o întrebare simplă: nu „Cum faci totul?”, ci „De unde începi?”</p>',
        'mvp.intro': 'EarthPatchers va începe prin programe pilot, alături de școli interesate, lideri și primii parteneri, și va porni cu doi piloni de bază:',
        'mvp.more.title': 'Curios ce urmează?',
        'mvp.more.text': 'Vezi varianta pentru parteneri pentru a explora planul complet din Tabăra de Bază și Pașii Următori din aventura noastră.',
        'mvp.more.cta': 'Explorează Varianta Parteneri'
      },
      partners: {
      'overview.problem.title': 'Problema pe care o rezolvăm',
        'overview.problem.text': 'Nu ducem lipsă de informații.<br>Ducem lipsă de timp, claritate și moduri simple de a acționa.<br><br>Ideile care te ajută să economisești bani, să risipești mai puțin sau să faci ceva util sunt împrăștiate peste tot — pe site-uri, în rapoarte și prin social media — ca șosetele după spălat: peste tot, când tot ce vrei este să le ai frumos în sertar, la locul lor.<br><br>EarthPatchers le adună într-un singur loc.<br>Nu ceva de căutat.<br>Ceva de făcut.',
        'overview.problem.solution': '',
        'patch-coins.desc': '<p><span class=\"patch-coins-desc__primary\">Monedele Patch sunt modul nostru de a spune „mulțumesc” pentru efort, grijă și învățare.</span> <span class=\"patch-coins-desc__secondary\">Se câștigă când misiunile sunt finalizate și validate, dar și prin parcursuri de învățare cu mici provocări.</span></p><ul><li>Recunosc efortul real și obiceiurile utile.</li><li>Mai târziu, pot fi folosite în module precum Căsuța de Schimb și Camera de Jocuri.</li></ul>',
        'overview.mission.paths': '<span class="overview-problem-lead">Apoi alegi cum:</span><ul><li><strong>Acasă:</strong> misiuni mici și rapide, pentru zilele aglomerate.</li><li><strong>Într-un Trib:</strong> alătură-te unei echipe sau creează-ți propriul Trib.</li><li><strong>Cu ONG-uri:</strong> alătură-te unui ONG de încredere și implică-te în misiunile sale, prin Tribul lor.</li></ul><p></p>',
        'overview.mission.paths-solution': '<span class="overview-problem-signoff">Fără stres. Fără presiune.</span><br>Doar acțiuni practice, efort comun și o reamintire că lucrurile mari rareori se repară de unul singur.',
        'overview.mission.small.examples': '<ul><li>Durată: aproximativ 1–20 de minute, o singură dată sau repetată pe parcursul câtorva zile, până devine un obicei.</li><li>Copii: udă un copac sau o plantă din apropiere și urmărește-o timp de o săptămână.</li><li>Adolescenți: organizează, timp de o săptămână, o provocare în familie pentru a economisi apă acasă.</li><li>Adulți: verifică frigiderul, găsește 2 lucruri care trebuie consumate azi sau mâine și mută-le în față.</li></ul>'
      },
      partners: {
        'hero.tagline': '<span class="hero__tagline-line hero__tagline-line--desktop">Reparăm Pământul (și buzunarele),</span><span class="hero__tagline-line hero__tagline-line--mobile">Reparăm Pământul</span><span class="hero__tagline-line hero__tagline-line--mobile">(și buzunarele),</span><span class="hero__tagline-line hero__tagline-line--mobile">Petec cu Petec</span><span class="hero__tagline-line hero__tagline-line--desktop">Petec cu Petec</span>',
        'patch-coins.desc': '<p><span class=\"patch-coins-desc__primary\">Monedele Patch sunt modul nostru de a spune „mulțumesc” pentru efort, grijă și învățare.</span> <span class=\"patch-coins-desc__secondary\">Se câștigă când misiunile sunt finalizate și validate, dar și prin parcursuri de învățare cu mici provocări.</span></p><ul><li>Recunosc efortul real și obiceiurile utile.</li><li>Mai târziu, pot fi folosite în module precum Căsuța de Schimb și Camera de Jocuri.</li></ul>',
        'mvp.pillar3.text': 'Un loc pentru schimb și refolosire, cu reguli clare și schimburi sigure, bazate pe încredere.',
        'mvp.pillar4.text': 'O lume în care învățarea se transformă în acțiune, conectată la misiuni reale și impact local.'
      }
    }
  },
  baseSectionPrefixes: [
    'nav.',
    'audience.',
    'theme.',
    'hero.',
    'overview.',
    'mvp.',
    'nextsteps.',
    'module.',
    'mod.',
    'about.',
    'contact.',
    'donate.',
    'footer.'
  ],
  moduleSectionPrefixes: [
    'missions-hq.',
    'patch-coins.',
    'small-missions.',
    'medium-missions.',
    'recycling-images.',
    'large-missions.',
    'tribes.',
    'market-hut.',
    'earth-side.',
    'games-room.',
    'activity-hut.',
    'eco-shops.',
    'green-wall.',
    'org-scientists.',
    'new-cities.',
    'patcher-camp.'
  ],

  get sectionPrefixes() {
    return [...this.baseSectionPrefixes, ...this.moduleSectionPrefixes];
  },

  translations: {
    en: {
      // Navigation
      'nav.overview': 'What We Do',
      'nav.mvp': 'Base Camp',
      'nav.next-steps': 'Next Steps',
      'nav.about': 'Who We Are',
      'nav.donate': 'Donate',
      'nav.contact': 'Ways to Get Involved',
      'audience.switch.partners': 'Partners View',
      'audience.switch.public': 'Public View',
      'audience.switch.partners-mobile': 'Partners',
      'audience.switch.public-mobile': 'Public',
      'theme.light': 'Light',
      'theme.dark': 'Dark',
      'theme.auto.note': "Dark mode was auto-enabled to save energy. Friendly reminder: turn off lights you don't need.",
      'theme.manual.daytime-note': 'You kept dark mode on. If you prefer, you can switch to light mode for daytime at any time.',
      'patch-counter.info': 'Patch Coin functionality is not implemented yet.',
      'patch-counter.link': 'More about Patch Coins',

      // Module names
      'mod.missions-hq': 'Missions HQ',
      'mod.patch-coins': 'Patch Coins',
      'mod.small-missions': 'Small Missions',
      'mod.medium-missions': 'Medium Missions',
      'mod.recycling-images': 'Recycling through Images',
      'mod.large-missions': 'Large Missions',
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

      // Mission size pages
      'patch-coins.title': 'Patch Coins',
      'patch-coins.desc': '<p><span class=\"patch-coins-desc__primary\">Patch Coins are EarthPatchers thank-you points for effort, care, and learning.</span> <span class=\"patch-coins-desc__secondary\">They are earned when missions are completed and validated, and from learning journeys with quizzes.</span></p><ul><li>They recognise real effort and useful habits.</li><li>Later, they can be used in modules like Market Hut and Games Room.</li></ul>',
      'patch-coins.why': 'Patch Coins make progress visible, fair, and motivating. They turn small, consistent actions into something you can see and build on.',
      'small-missions.title': 'Small Missions',
      'small-missions.desc': '<p>Small Missions are the quickest way to get started. They fit into ordinary days and don’t require a big block of time.</p><ul><li>Short actions you can complete in one go</li><li>Simple habits repeated over a few days</li><li>Easy to start, even if you’ve never done anything like this before</li></ul>',
      'small-missions.why': 'Small Missions make action feel possible. They are how busy days still turn into useful steps.',
      'medium-missions.title': 'Medium Missions',
      'medium-missions.desc': '<p>Medium Missions take a bit more time, usually one focused session in a week. They are a natural next step once smaller actions start to feel easy.</p><ul><li>Often done in 45-60 minutes.</li><li>Good for family sessions, Tribes, or one clear adult task.</li><li>Good when you want to build on what you’ve already started.</li></ul>',
      'medium-missions.why': 'Medium Missions turn good intentions into visible progress. They give Tribes and families something concrete to do together.',
      'recycling-images.title': 'Recycling through Images',
      'recycling-images.desc': '<p>Recycling through Images turns written recycling guidance into simple visual instructions people can understand at a glance. It is designed for posters, labels, and bin-side communication where text alone is often ignored.</p><ul><li>Useful for companies, schools, apartment blocks, and public spaces.</li><li>Can translate local recycling rules into image-led guidance.</li><li>Can carry EarthPatchers branding and a website link for wider discovery.</li></ul>',
      'recycling-images.why': 'People sort better when guidance is visual, local, and easy to notice. This module can turn long documentation into practical image-based prompts that work in real places.',
      'large-missions.title': 'Large Missions',
      'large-missions.desc': '<p>Large Missions are more complex EarthPatchers challenges that require more time available. They usually take a weekend or more and involve doing something together with your Tribe or community.</p><ul><li>Often half a day or a full day</li><li>Well suited to schools, neighborhoods, or community teams</li><li>Best when a group wants to plan something together and see it through</li></ul>',
      'large-missions.why': 'Large Missions show what a community can do when people work together. They turn shared effort into visible local change.',

      // Overview / Landing
      'hero.tagline': 'Patching the Earth Together,\nOne Stitch at a Time',
      'hero.subtitle': 'Small, clear missions you can do without an internet scavenger hunt.<br>We repair the planet too, but we start with what matters most to you: time, budget, and daily chaos.<br><br>No superheroes. No drama. Just small steps, done together.',
      'hero.cta.mvp': 'See Base Camp',
      'hero.cta.donate': 'Donate Interest',
      'hero.cta.modules': 'Browse Modules',

      'overview.problem.title': 'The Problem We Solve',
      'overview.problem.text': 'We are not short on information.<br>We are short on time, clarity, and simple ways to act.<br><br>The ideas that help you save money, waste less, or do something useful are scattered everywhere — across websites, reports, and social media — like socks after laundry day: everywhere, when all you want is to have them neatly in a drawer, where they belong.<br><br>EarthPatchers gathers them in one place.<br>Not something to research.<br>Something to do.',
      'overview.problem.solution': '',

      'overview.mission.title': 'Mission Examples',
      'overview.mission.text': 'A mission is a practical action you can complete in real life that helps your neighborhood, your community, and the natural world.',
      'overview.mission.examples-intro': 'Missions come in different sizes, for different ages, depending on your time and energy:',
      'overview.mission.paths': '<span class="overview-problem-lead">Then you choose how:</span><ul><li><strong>At home:</strong> small, quick missions for busy days.</li><li><strong>In a Tribe:</strong> join a team or build your own.</li><li><strong>With NGOs:</strong> join a trusted NGO’s Tribe and help with their missions.</li></ul><p></p>',
      'overview.mission.paths-solution': '<span class="overview-problem-signoff">No stress. No pressure.</span><br>Just practical action, shared effort, and a reminder that big things rarely get fixed alone.',
      'overview.mission.small.title': 'Small Mission (5-15 Patch Coins)',
      'overview.mission.small.examples': '<ul><li>Time: about 1-20 minutes, either once or repeated over a few days until the habit sticks.</li><li>Kids: water one local tree or plant and track it for a week.</li><li>Teens: run a one-week save water at home Tribe challenge.</li><li>Adults: check the fridge, find 2 things that need to be eaten today or tomorrow, and move them to the front.</li></ul>',
      'overview.mission.small.cta': 'See Small Missions',
      'overview.mission.medium.title': 'Medium Mission (15-25 Patch Coins)',
      'overview.mission.medium.examples': '<ul><li>Time: about 45–60 minutes, usually completed in one session over the course of a week.</li><li>Kids + family: park or riverbank clean-up.</li><li>Teens: take one no-car day and use bike, bus, or walking.</li><li>Adults: donate one item you no longer use (for example a pair of sunglasses, a book, or a jacket).</li></ul>',
      'overview.mission.medium.cta': 'See Medium Missions',
      'overview.mission.big.title': 'Big Mission (25-50 Patch Coins)',
      'overview.mission.big.examples': '<ul><li>Time: about half a day to a full day, usually during the weekend.</li><li>Kids + school: build and maintain a pollinator corner in the school yard.</li><li>Teens: lead a neighborhood energy-saving mini campaign with measurable results.</li><li>Adults: coordinate a community day with clean-up, repair, and tree-care actions.</li></ul>',
      'overview.mission.big.cta': 'See Large Missions',

      'overview.tribe.title': 'What Is a Tribe',
      'overview.tribe.text': 'A Tribe is a small team, led by a Leader (MasterPatcher).<br>Not a crowd. Not a stadium. A handful of people saying, “Let’s do this together.”<br>The kind of team where you know who brings snacks and who always forgets socks.<br>Like a camp club, but for real life.',
      'overview.tribe.types-intro': 'Tribes can be:',
      'overview.tribe.types': '<ul><li>for kids and teens + leaders</li><li>adults-only</li></ul>',
      'overview.tribe.cta': 'Explore Tribes',

      'overview.how.title': 'How It Works',
      'overview.how.public': '<ol><li>Choose a mission that fits your time and routine</li><li>Complete it in real life</li><li>(Optional) Do it with others in a Tribe</li><li>Get it validated</li><li>Earn Patch Coins as a visible thank-you for your effort</li></ol>',
      'overview.how.scroll.left': 'Scroll table left',
      'overview.how.scroll.right': 'Scroll table right',
      'overview.how.example-intro': 'Planned journeys for adults, parents, and children:',
      'overview.how.table.col.step': 'Step',
      'overview.how.table.col.adult': 'Adult Journey',
      'overview.how.table.col.parent': 'Parent Journey',
      'overview.how.table.col.child': 'Child Journey',
      'overview.how.table.step1.label': 'Create Account',
      'overview.how.table.step1.adult': 'Adult will create an account and set visibility permissions.',
      'overview.how.table.step1.parent': 'Parent will create a family account + linked child account(s), and set child safety permissions.',
      'overview.how.table.step1.child': 'Child account(s) will be linked to parent account. Parent permissions will define what child or children can see and do.',
      'overview.how.table.step2.label': 'How to Join a Tribe',
      'overview.how.table.step2.adult': 'Adult will select missions based on size and skills, and can belong to one or more Tribes.',
      'overview.how.table.step2.parent': 'Parent will choose trusted Tribe leaders (teacher, scout leader, or parent leader). The leader will send a safe invite to connect child account(s).',
      'overview.how.table.step2.child': 'Child or children will join only after parent approval through the safe invite, can belong to one or more Tribes, and will see only Tribe-shared content.',
      'overview.how.table.step3.label': 'Join and Complete a Mission',
      'overview.how.table.step3.adult': 'Adult will join the Tribe that created the chosen mission and complete it.',
      'overview.how.table.step3.parent': 'Parent will support child or children participation where needed. In-person missions may require a minimum number of parents, based on age and mission type.',
      'overview.how.table.step3.child': 'Child or children will join and complete a mission with the Tribe.',
      'overview.how.table.step4.label': 'Validation + Coins',
      'overview.how.table.step4.adult': 'Patch Coins will be earned after validation by the Tribe leader.',
      'overview.how.table.step4.parent': 'Leader will validate. Child or children will earn 10 Patch Coins.',
      'overview.how.table.step4.parent.extra': 'If parent also participates and is validated: parent will earn 10 Patch Coins.',
      'overview.how.table.step4.child': 'Leader will validate. Child or children will earn 10 Patch Coins.',
      'overview.how.table.step5.label': 'Explore + Quiz',
      'overview.how.table.step5.adult': 'Adult will explore Earth’s Side of the Story and can earn extra Patch Coins from the quiz.',
      'overview.how.table.step5.parent': 'Parent can also explore Earth’s Side of the Story to understand local needs. Content will be age-tailored. Quiz can add extra Patch Coins.',
      'overview.how.table.step5.child': 'Child or children will explore age-tailored Earth’s Side of the Story and can earn extra Patch Coins from the quiz.',
      'overview.how.table.step6.label': 'Use Coins',
      'overview.how.table.step6.adult': 'Adult will use Patch Coins in Market Hut for practical reusable items (jackets, books, tools, board games, household items).',
      'overview.how.table.step6.parent': 'Parent will help child or children use Patch Coins in Market Hut safely (toys, jackets, books, school supplies, board games, reusable household items).',
      'overview.how.table.step6.child': 'Child or children will be able to use earned Patch Coins in Market Hut with parent permissions and guidance.',
      'overview.how.table.step6.games-room': 'In partners view: Patch Coins can also unlock games in the Games Room.',
      'overview.how.example-a.title': 'Example A — Parent + Child in a trusted Tribe',
      'overview.how.a.step1.title': 'Join as a parent',
      'overview.how.a.step1.text': 'Parent creates a family account and creates the child account linked to theirs. Adults set children’s permissions for safety purposes.',
      'overview.how.a.step2.title': 'Receive a safe join link',
      'overview.how.a.step2.text': 'A Tribe leader can be someone you trust, for example a teacher, a scout leader, or another parent who became a leader. They share the safe link with you to connect the child account.',
      'overview.how.a.step3.title': 'Join a small mission',
      'overview.how.a.step3.text': 'The child joins a small mission inside the Tribe, for example Learn how to sew a button. For in-person missions, depending on mission type and children’s ages, a minimum number of parents should be present to help.',
      'overview.how.a.step4.title': 'Leader validates and Patch Coins are earned',
      'overview.how.a.step4.text': 'After completion, the mission can be validated by the leader or, until website mission validation is ready, through the requested proof sent by email. Then the child earns 10 Patch Coins. If the parent also participates and is validated, the parent also earns 10 Patch Coins for time and effort.',
      'overview.how.a.step5.title': 'Explore and play the quiz',
      'overview.how.a.step5.text': 'The child explores Earth’s Side of the Story. It is useful for adults too, to understand the city and what it needs. Content is tailored by age, and extra Patch Coins can be earned by completing the quiz at the end.',
      'overview.how.a.step6.title': 'Use Patch Coins in Market Hut',
      'overview.how.a.step6.text': 'Patch Coins can be used in Market Hut to choose useful items shared by the community, for example toys, jackets, books, school supplies, and other reusable household things, and later in Games too.',
      'overview.how.example-b.title': 'Example B — Adult mission flow',
      'overview.how.b.step1.title': 'Join as an adult',
      'overview.how.b.step1.text': 'An adult creates an account.',
      'overview.how.b.step2.title': 'Filter missions in Missions HQ',
      'overview.how.b.step2.text': 'They filter Missions HQ for a medium mission based on available time and required skills.',
      'overview.how.b.step3.title': 'Join the mission Tribe',
      'overview.how.b.step3.text': 'They join the Tribe that created that mission and complete it together.',
      'overview.how.b.step4.title': 'Leader validates and Patch Coins are earned',
      'overview.how.b.step4.text': 'At the end, the mission can be validated by the Tribe leader or, until website mission validation is ready, through the requested proof sent by email. Then they earn Patch Coins.',
      'overview.how.b.step5.title': 'Explore and play the quiz',
      'overview.how.b.step5.text': 'They also explore Earth’s Side of the Story. It is useful for adults too, to understand the city and what it needs. Content is tailored by age, and extra Patch Coins can be earned from the quiz.',
      'overview.how.b.step6.title': 'Use Patch Coins in Market Hut',
      'overview.how.b.step6.text': 'They use earned Patch Coins in Market Hut to choose useful community-shared items, like clothes, books, tools, toys, and other practical reusable things, and later in Games too.',
      'overview.cluj.title': 'Pilot and Partnerships',
      'overview.cluj.text': 'EarthPatchers is designed to work alongside schools and NGOs, not replace them.<br><br>We begin with real communities (schools, families, and early partners) and grow based on real feedback.<br><br>We build local partnerships and shared goals as missions grow.<br><br>If you want to get involved as a teacher, parent, scout leader, NGO, or partner, see Ways to Get Involved.',

      'overview.trust.title': 'Important!',
      'overview.tribe.leaders': '',
      'overview.trust.missions': '<p>Some features are still being built.</p><p>For now:</p><ul><li>Missions are validated by leaders (MasterPatchers) or by sending proof by email</li><li>Patch Coins are tracked as a visible thank-you for real effort.</li></ul><p>As the platform grows, validation and rewards will become fully integrated.</p>',
      'overview.trust.how': '<p>Some features are still being built.</p><p>For now:</p><ul><li>Missions are validated by leaders (MasterPatchers) or by sending proof by email</li><li>Patch Coins are tracked as a visible thank-you for real effort</li></ul><p>As the platform grows, validation and rewards will become fully integrated.</p>',

      'overview.cta.title': 'Ready to Learn More?',
      'overview.cta.mvp': 'Read Base Camp',
      'overview.cta.about': 'See Who We Are',
      'overview.cta.modules': 'Explore Modules',
      'overview.cta.contact': 'Ways to Get Involved',
      'about.cta.overview': 'Read Base Camp',

      // MVP Page
      'mvp.title': 'Base Camp',
      'mvp.title.plan': '36-Month Plan',
      'mvp.intro': 'EarthPatchers will start with a focused 36-month plan that proves the core loop works in real life through pilots with interested schools, leaders, and early partners before expanding. This starting plan will have four pillars:',

      'mvp.pillar1.title': 'Missions HQ',
      'mvp.pillar1.subtitle': 'Real actions for the planet',
      'mvp.pillar1.text': 'Short, structured missions you can actually complete — from 10-minute actions to group challenges.',
      'mvp.pillar1.why': 'Missions will turn saving the Earth from a scary-big idea into small brave steps.',

      'mvp.pillar2.title': 'Tribes',
      'mvp.pillar2.subtitle': 'Small, safe, meaningful',
      'mvp.pillar2.text': 'Small pilot groups with a clear rhythm (monthly or seasonal), simple rules, and shared progress.',
      'mvp.pillar2.why': 'Young people care deeply about their future. This will give them a safe way to contribute without being overwhelmed.',

      'mvp.pillar3.title': 'Market Hut',
      'mvp.pillar3.subtitle': 'Swap, share, reuse',
      'mvp.pillar3.text': 'A swap and reuse space where trust will come first: clear exchange rules, safe pickup guidance, and moderation for suspicious behaviour. Patch Coins will have practical use here in future modules like Market Hut and Games Room.',
      'mvp.pillar3.why': 'Circular habits will work when people trust the system.',

      'mvp.pillar4.title': 'Earth\'s Side of the Story',
      'mvp.pillar4.subtitle': 'Learning + action, tailored locally',
      'mvp.pillar4.text': 'A step-by-step learning-and-action world with three doors: My Hazards, Contamination & Recovery Zone, and Learn & Play, all connected to missions. Over time, missions can be tailored by location through collaboration with trusted local NGOs and partners.',
      'mvp.pillar4.why': 'This will make learning practical and trustworthy by connecting it directly to local actions.',

      'mvp.modules.title': 'Core Start Modules',
      'mvp.modules.intro': 'These modules form where we start and will be built and tested during the 36-month plan:',

      'mvp.timeline.title': '36-Month Timeline',

      'mvp.phase1.label': 'Phase 1',
      'mvp.phase1.months': 'Months 0\u201312',
      'mvp.phase1.title': 'Prove the Core Loop in Early Pilots',
      'mvp.phase1.item1': 'Launch Missions HQ',
      'mvp.phase1.item2': 'Run first youth pilot Tribes with strong safety rules',
      'mvp.phase1.item3': 'Launch the Market Hut pilot, with moderation and clear guidance for safe pickup',
      'mvp.phase1.item4': 'Launch the first small version of Earth\u2019s Side of the Story (simple learning corner plus first local map pins where relevant)',
      'mvp.phase1.goal': 'Prove people return, participate, and feel safe.',

      'mvp.phase2.label': 'Phase 2',
      'mvp.phase2.months': 'Months 13\u201324',
      'mvp.phase2.title': 'Make It Stronger & Easier to Run',
      'mvp.phase2.item1': 'Improve mission quality and mission packs (seasonal collections)',
      'mvp.phase2.item2': 'Expand youth pilot Tribes if Phase 1 works well',
      'mvp.phase2.item3': 'Improve safe exchange flows (categories, templates, trust signals)',
      'mvp.phase2.item4': 'Grow Earth\u2019s Side of the Story carefully (more topics, better learning paths, and local tailoring where useful)',
      'mvp.phase2.goal': 'Reduce admin/moderation effort while improving experience and safety.',

      'mvp.phase3.label': 'Phase 3',
      'mvp.phase3.months': 'Months 25\u201336',
      'mvp.phase3.title': 'Make It Stable & Scale-Ready',
      'mvp.phase3.item1': 'Make the 4 core start modules stable and repeatable',
      'mvp.phase3.item2': 'Ensure safety workflows work at larger scale',
      'mvp.phase3.item3': 'Strengthen learning paths connected to missions and local action',
      'mvp.phase3.goal': 'EarthPatchers becomes repeatable as a model that can adapt to different locations.',

      'mvp.globe.title': 'Important Note',
      'mvp.globe.intro': 'Earth\u2019s Side of the Story is built one small chapter at a time:',
      'mvp.globe.phase1': 'Phase 1: small learning corner in pilot locations',
      'mvp.globe.phase2': 'Phase 2: richer learning content and clearer paths',
      'mvp.globe.phase3': 'Phase 3: stronger, more complete learning journeys tied to missions',
      'mvp.globe.why': 'We build it step-by-step so it stays reliable and understandable.',

      'mvp.notincluded.title': 'What This Starting Plan Does NOT Include',
      'mvp.notincluded.text': 'EarthPatchers has many future ideas (Activity Hut, Eco Shops Directory, Green Wall, Organisations & Scientists, New Cities & Discovery Phase, Games Room, Patcher Camp). These are for later, so people don\'t confuse where we start with everything we might build later.',

      'mvp.success.title': 'What Success Looks Like',
      'mvp.success.item1': 'Missions will be completed and people come back because missions feel doable and worth it.',
      'mvp.success.item2': 'Parents feel comfortable letting kids participate — and kids actually enjoy coming back.',
      'mvp.success.item3': 'Circular exchange will work smoothly with trust and moderation',
      'mvp.success.item4': 'Earth\u2019s Side of the Story will help people understand "why" and "what to do next"',
      'mvp.success.item5': 'Pilots shape how we grow, based on what works and what doesn’t, not assumptions.',
      'mvp.more.title': 'Curious what’s coming next?',
      'mvp.more.text': 'Switch to Partner View to explore the full Base Camp plan and Next Steps in our Adventure.',
      'mvp.more.cta': 'Explore Partner View',

      // Next Steps
      'nextsteps.title': 'Next Steps',
      'nextsteps.intro': 'Beyond Base Camp, EarthPatchers envisions a rich ecosystem of modules. These will be shaped by community voting and implemented based on possibilities, through the Green Wall module.',
      'nextsteps.explore': 'Explore',

      // Module pages common
      'module.features': 'Key Features',
      'module.why': 'Why It Matters',
      'module.mvp-badge': 'Base Camp',
      'module.future-badge': 'Future Module',
      'module.coming-soon': 'This section is still growing. We\'re developing detailed content here. Check back soon or get in touch to learn more.',
      'module.prev': '\u2190 Previous',
      'module.next': 'Next \u2192',
      'module.next-steps-title': 'Coming Later',


      // Missions HQ
      'missions-hq.title': 'Missions HQ',
      'missions-hq.subtitle': 'Where It All Begins',
      'missions-hq.desc': "<p>Missions HQ is where EarthPatchers begins. It is a library of real-life missions for kids, teens, and adults — organised by time, type, and group.</p><p>You can take part in different ways:</p><ul><li>quick missions (10–20 minutes)</li><li>longer missions (1–2 hours)</li><li>group missions (families, schools, teams)</li></ul><p>For adults, missions are matched to skills (repairing, organising, teaching, gardening, design, photography) and time available, so volunteering fits your time and what you’re good at. For kids, missions are designed to feel engaging and hands-on.</p><p>For now, missions can be validated by leaders (MasterPatchers) or by sending the requested proof to us by email until website mission validation is ready.</p><p>This structure also makes projects easier to repeat across communities: once a mission works well, it can be reused by other groups without starting from scratch.</p>",
      'missions-hq.rewards.title': 'Rewards stay simple:',
      'missions-hq.rewards.coins': 'Patch Coins: you earn them through missions and learning, and they later have practical use in modules like Market Hut and Games Room.',
      'missions-hq.rewards.badges': 'Badges: they reflect the kind of person you are becoming (brave, kind, curious).',
      'missions-hq.rewards.achievements': 'Achievements: they capture what you did along the way, like stickers in your adventure notebook.',
      'missions-hq.why': 'Missions turn caring for the planet into an adventure. They give people a clear starting point: one mission at a time, building real change step by step.',

      // Tribes
      'tribes.title': 'Tribes',
      'tribes.subtitle': 'Your Safe Team Space',
      'tribes.desc': "<p>Tribes are small groups where people take action together.</p><ul><li>For kids and teens, with adult leaders<ul><li>Kids use aliases and avatars, with no visible faces</li><li>Activity stays within the Tribe</li></ul></li><li>Adults-only<ul><li>They decide how visible public their involvement is</li></ul></li></ul><p>Tribe leaders have verified accounts. They help with moderation, keep things safe and respectful, and support the group.</p>",
      'tribes.why': 'Tribes aren’t just about tasks — they’re about belonging. They help turn the platform into a community where people support each other, act together, and keep things safe and kind.',
      'tribes.next1': "More Tribe types: schools, neighbourhoods, NGOs, and interest-based Tribes.",
      'tribes.next2': "Better mission sharing through Mission Shelf search and favourites.",
      'tribes.next3': "Optional area-based Tribe challenges (monthly or seasonal, not overwhelming).",
      'tribes.next4': "A button to \"Report Uncollected Litter\" when something is not right.",
      'tribes.next5': "Optional adult-only community events and learning circles.",
      'tribes.next6': '<span>Roles:</span><ol><li>MasterPatchers (Mentors, Campaigners)</li><li>NewsPatcher (Reporters)</li><li>AppPatchers (Developers, QAs)</li><li>CraftPatchers (Craft makers - Market Hut)</li></ol>',

      // Market Hut
      'market-hut.title': 'Market Hut',
      'market-hut.subtitle': 'Swap, Share, Reuse',
      'market-hut.desc': "<p>The Market Hut will be a circular exchange where people reuse items instead of buying new:</p><ul><li>Patch Coins will solve the awkward item-for-item matching problem: you earn coins by helping, then use them to choose what you need — for example a toy, a warm jacket, books, or school supplies.</li><li>Safety will be built in: adults choose their visibility, and children's faces are not allowed.</li><li>As EarthPatchers grows, the exchange can be tailored to different locations through collaboration with trusted local NGOs, schools, and partners.</li></ul>",
      'market-hut.why': 'Circular habits are one of the fastest ways to reduce waste. Patch Coins will make reuse simple and fair — no awkward item-for-item matching, just kindness and coins.',
      'market-hut.next1': "Optional polite bidding using Patch Coins for high-demand items (simple and kid-safe).",
      'market-hut.next2': "Borrowing shelves (tools, books, sports gear, kids gear).",
      'market-hut.next3': "Better trust signals (verified users and mission-verified trading privileges).",
      'market-hut.next4': "Safer meetup and pickup guidance with clearer rules.",

      // Earth's Side of the Story
      'earth-side.title': 'Earth\'s Side of the Story',
      'earth-side.subtitle': 'Learning That Connects to Place',
      'earth-side.desc': "<p>Earth's Side of the Story will be the learning-and-action world that connects learning to missions. It will have three doors:</p><ol><li>My Hazards: will explain hazards in a friendly way (natural hazards, hazards made worse by pollution or human changes, and hazards caused directly by people). Short learning cards and quizzes will earn Patch Coins.</li><li>Contamination and Recovery Zone (local map where relevant): adults (and older teens where appropriate) will be able to add a pin (photo and short note) for littering hot spots, damaged areas, cut trees, and places needing care. Pins will become missions.</li><li>Learn and Play: short learning paths and quizzes that will connect back to missions and Patch Coins.</li></ol><p>Over time, missions and local learning layers can be tailored by location through collaboration with trusted local NGOs and partners.</p>",
      'earth-side.next1': 'Tribe alerts: new pins can gently alert nearby Tribes so local teams can choose to help.',
      'earth-side.next2': 'New cities/countries open slowly via a Discovery Phase (data + partners + priority missions). If discovery isn\'t supported, the area stays \u201csleeping\u201d until the community helps find data sources or partners.',
      'earth-side.next3': "Community help for discovery (finding data sources and mapping local helpers).",
      'earth-side.next4': "Verified helper pins (NGOs, scientists, community groups) and mission pins.",
      'earth-side.next5': "Better learning paths (age-appropriate, including adult paths).",
      'earth-side.why': 'Understanding “why” is the bridge between action and lasting change. This module will make learning accessible, emotionally safe, and directly connected to real missions.',

      // Games Room
      'games-room.title': 'Games Room',
      'games-room.subtitle': 'Play With a Purpose',
      'games-room.desc': "<p>The Games Room will be a later module that brings trusted nature-learning games into one place:</p><ul><li>Patch Coins will unlock games (simple rule: coins open doors).</li><li>Adults will be able to play too and earn Patch Coins.</li></ul>",
      'games-room.next1': 'EarthPatchers-made games, and eventually Patcher Camp.',
      'games-room.why': 'Play is how children learn best. Starting with trusted games will help learning happen faster, and Patch Coins will keep engagement connected to real effort.',

      // Activity Hut
      'activity-hut.title': 'Activity Hut',
      'activity-hut.subtitle': 'Your Adventure Journal',
      'activity-hut.desc': "<p>The Activity Hut will be your personal home base, like an adventure journal.</p><p>It will show:</p><ul><li>your adventure trail (missions and milestones)</li><li>Patch Coins now (spendable) and Patch Coins earned (lifetime effort)</li><li>badges and achievements</li><li>role path (like Leader, or MasterPatcher as we call it)</li></ul><p>Adults will choose what to share publicly, and kids will stay within Tribe visibility rules.</p>",
      'activity-hut.next1': 'Safe kid-friendly AI can create a child\'s Hero Story: a bedtime-story retelling of verified adventures, using alias + avatar only.',
      'activity-hut.why': 'Your adventure journal will make effort visible. Badges will show who you are becoming, achievements will show what you have done, and your Patch Coins total will show your lifetime impact.',

      // Eco Shops Directory
      'eco-shops.title': 'Eco Shops Directory',
      'eco-shops.subtitle': 'Find What’s Truly Sustainable',
      'eco-shops.desc': "<p>Eco Shops will be a guide to sustainable products and local shops, with ratings and comments from validated community members.</p><p>It will also include an Interest or Wish feature for zero-waste products that are not available locally yet:</p><ul><li>People will be able to click \"I want this here\" to show demand without everyone ordering separately.</li><li>If enough people are interested, the community will be able to organise a bulk order to reduce packaging and transport waste.</li><li>Makers and companies will be able to see interest levels and plan production better.</li></ul><p>Quality rules will keep things honest and reduce spam:</p><ul><li>You will be able to review or add products after earning enough Patch Coins and completing a verified mission.</li><li>New products will be submitted via a simple template (photo, where to buy, materials, why it is better, what to watch out for).</li><li>Leaders, also called MasterPatchers, will verify entries before they go live.</li></ul><p>Over time, local recommendations can be shaped with trusted local NGOs and partners so the guidance stays grounded in each place.</p>",
      'eco-shops.why': 'Finding truly sustainable products is hard. This directory will keep things honest with community reviews, verified missions, and Leader oversight (MasterPatcher role).',

      // The Green Wall
      'green-wall.title': 'The Green Wall',
      'green-wall.subtitle': 'Where Ideas Grow',
      'green-wall.desc': "<p>The Green Wall will be EarthPatchers' idea garden. It will help people post ideas, find similar ones, and team up instead of duplicating work.</p><p>Ideas will be sorted by size so it stays easy to use:</p><ul><li>Tiny Sparks (small ideas): quick, doable without a team or funding.</li><li>Build-It Ideas (medium ideas): needs a small team and a simple plan.</li><li>Big Seeds (big ideas): bigger projects, new features, new city plans, usually with funding needs.</li></ul><p>Before posting, the Wall will suggest similar ideas so people can join what already exists instead of posting duplicates.</p><p>If someone still wants to post a new one, they will write one line about what is different.</p><p>People will be able to join with:</p><ul><li>skills (design, organising, teaching, coding, fundraising)</li><li>time (small regular help)</li><li>later, optional support</li></ul><p>The goal is simple: turn community energy into real, coordinated action.</p>",
      'green-wall.why': 'Good ideas need more than enthusiasm — they need skills, teamwork, and sometimes funding. The Green Wall will turn community energy into real projects.',

      // Organisations & Scientists
      'org-scientists.title': 'Organisations & Scientists',
      'org-scientists.subtitle': 'Helper Pins on the Map',
      'org-scientists.desc': "<p>Verified organisations and researchers will appear as special Helper pins on the map, inside the Contamination and Recovery Zone from Earth's Side of the Story.</p><p>Pin types will include:</p><ul><li>LittlePatchers (NGOs)</li><li>WisePatchers (Scientists)</li><li>BrightPatchers (Startups - projects or products)</li><li>HoneyPatchers (Angel Investors, Venture Capitalists - they will be able to stay hidden from the map if they choose to)</li><li>SysPatchers (Government, Ministries)</li><li>Missions (concrete ways you can help)</li><li>Reports (things that need attention)</li></ul><p>This will help people quickly find trusted teams, understand what they do, and join missions.</p>",
      'org-scientists.why': 'Seeing who helps — and how to join — will turn a map of problems into a map of hope. Verified pins will connect community action to real expertise.',

      // New Cities & Discovery Phase
      'new-cities.title': 'New Cities & Discovery Phase',
      'new-cities.subtitle': 'Growing Together, City by City',
      'new-cities.desc': "<p>EarthPatchers will expand slowly and honestly. Each new city will start with a Discovery Phase:</p><ul><li>find reliable data sources</li><li>find local helpers and partners</li><li>identify priority missions</li></ul><p>If discovery is not supported yet, the city will stay sleeping until the community helps unlock it with data sources or partners.</p>",
      'new-cities.why': 'Scaling should be honest and community-driven. No half-built chapters — each city will open properly with real data, real partners, and real priority missions.',

      // Patcher Camp
      'patcher-camp.title': 'Patcher Camp',
      'patcher-camp.subtitle': 'The Big Adventure Game',
      'patcher-camp.desc': "<p>Patcher Camp will be a future flagship teamwork game inside Games Room:</p><ul><li>Kids will work together through Earth zones using powers based on real knowledge: Earth, Water, Fire, Wind.</li><li>It will teach practical skills, problem-solving, and brave teamwork.</li><li>It will come after the Games Room foundation is in place.</li></ul>",
      'patcher-camp.why': 'Games make learning irresistible. Patcher Camp will connect play to real-world action, helping young people see their knowledge as superpowers for the planet.',

      // Module short descriptions (for cards)
      'mod.missions-hq.short': 'Real-life missions for kids, teens, and adults. Clear actions, Patch Coins, badges, and achievements.',
      'mod.patch-coins.short': 'How Patch Coins are earned, tracked, and later used across EarthPatchers modules.',
      'mod.small-missions.short': 'The quickest missions in the EarthPatchers flow: short actions and habits that fit busy weekdays.',
      'mod.medium-missions.short': 'Missions that need one focused weekly session and make progress easier to notice.',
      'mod.recycling-images.short': 'Visual recycling guidance that can turn written documentation into simple image-based prompts for bins and public spaces.',
      'mod.large-missions.short': 'Bigger community missions for weekends, teams, and measurable local impact.',
      'mod.tribes.short': 'Safe team spaces with camp rules. Kids use aliases; missions can be shared across Tribes.',
      'mod.market-hut.short': 'Circular exchange with Patch Coins, reuse, swaps, and safety-by-design, ready to adapt locally over time.',
      'mod.earth-side.short': 'Learning plus action with hazards, local recovery maps where relevant, and learn-and-play.',
      'mod.games-room.short': 'Hub for trusted nature-learning games unlocked with Patch Coins.',
      'mod.activity-hut.short': 'Personal adventure journal with progress trail, badges, achievements, and Patch Coins totals.',
      'mod.eco-shops.short': 'Community guide to sustainable products and shops, with verification and demand signals.',
      'mod.green-wall.short': 'Idea garden where people can post, vote, and form practical teams based on skills and effort.',
      'mod.org-scientists.short': 'Verified helper pins showing who is helping, where, and how to join.',
      'mod.new-cities.short': 'City-by-city expansion through Discovery Phases with real data and local partners.',
      'mod.patcher-camp.short': 'Flagship teamwork game where practical knowledge becomes problem-solving power.',

      // About Us
      'about.title': 'Who We Are',
      'about.mission.title': 'Our Mission',
      'about.mission.text': 'When something feels useful and worth your time in real life, it’s easier to give it a try. That’s why we offer a platform with clear missions you can actually follow in real life, a safe community, and simple reuse solutions.<br><br>And along the way, we repair the planet too — one mission at a time.<br>With superheroes, but without all the drama. Just small steps, done together.',
      'about.vision.title': 'Our Vision',
      'about.vision.text': 'A world where reusing and repairing are as routine as brushing your teeth.',
      'about.vision.expand': 'Over time, EarthPatchers can expand city-by-city into a network of communities that take measurable local action, learn why it matters in an age-appropriate way, and make it easier for everyone to reuse, repair, and waste less.',
      'about.why.title': 'Why EarthPatchers',
      'about.why.text': '<p>Because you don’t have time to figure everything out.</p><p>Because small things pile up — things to fix, reuse, or stop wasting.</p><p>Because life is already full, and “I’ll deal with it later” quietly becomes “not today again.”</p><p>EarthPatchers turns those moments into clear, doable steps.</p><p>No searching. No overwhelm. Just a place to start.</p><p>So we focus on one simple question: not “How do you do everything?” but “Where do you start?”</p>',
      'about.values.title': 'Our Values',
      'about.value1.title': 'Sustainability',
      'about.value1.text': 'Real action over awareness campaigns. Small steps that add up to lasting change.',
      'about.value2.title': 'Community',
      'about.value2.text': 'Local support, shared missions, and the power of acting together.',
      'about.value3.title': 'Transparency',
      'about.value3.text': 'Clear budgets. Public plans. Donations explained.<br>You know what you support. You know where it goes.',
      'about.value4.title': 'Child Safety',
      'about.value4.text': 'Privacy-by-design, age-appropriate content, and guardian involvement at every step.',
      'about.how.title': 'Where We Start',
      'about.how.text': 'We will work through partnerships with schools, NGOs, local leaders, and early pilot partners, plus community voting to decide what happens next. Everything will start small, be tested, and grow based on real feedback. Over time, missions can be tailored by location through collaboration with trusted local NGOs and partners.',

      // Contact Us
      'contact.title': 'Ways to Get Involved',
      'contact.intro': 'Want to bring EarthPatchers to your school, community, or organization?<br><br>Give us a sign. We promise not to send a 48-page PDF.<br><br>We’ll sit down (virtually or in person) and get things moving.<br><br>No long process. Just a quick conversation to see what fits.',
      'contact.copy-email': 'Copy address',
      'contact.copy-success': 'Email copied. You can now paste it into your email app.',
      'contact.copy-failed': 'Copy failed. Please copy manually: contact@earthpatchers.org',
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

      // Donate
      'donate.title': 'Donate',
      'donate.intro': 'If you feel like adding your own stitch to this bigger patch, leave us your details and tell us you are interested in supporting EarthPatchers. For now, this is just an interest form. We will contact you directly, calmly, so we can see together how to help good grow.',
      'donate.coming-soon.title': 'Coming soon:',
      'donate.coming-soon.text': 'Direct account transfer options and the 3.5% tax redirection option will come once incorporation setup is complete.',
      'donate.name': 'Full Name',
      'donate.email': 'Email Address',
      'donate.phone': 'Phone Number (optional)',
      'donate.location': 'City / Country',
      'donate.interest': 'I want to support as',
      'donate.interest.select': '-- Select --',
      'donate.interest.individual': 'Individual donor',
      'donate.interest.parent': 'Parent / Family',
      'donate.interest.organization': 'Organization / Company',
      'donate.interest.partner': 'Potential partner',
      'donate.interest.other': 'Other',
      'donate.message': 'Notes (optional)',
      'donate.message.placeholder': 'Anything you\'d like us to know about your donation interest.',
      'donate.submit': 'Send Donate Interest',
      'donate.back': 'Back',
      'donate.status.opening': 'Your email app is opening with your donation details prefilled.',
      'donate.status.sent': 'Thanks. Your donate interest was sent successfully.',
      'donate.status.error': 'Could not send right now. Please use the "Copy Email" button above.',

      // Footer
      'footer.text': 'EarthPatchers \u2014 Community-powered sustainability, built through pilots and local collaboration.',
    },

    ro: {
      // Navigation
      'nav.overview': 'Ce Facem',
      'nav.mvp': 'Tabăra de Bază',
      'nav.next-steps': 'Pa\u0219i Urm\u0103tori',
      'nav.about': 'Cine Suntem',
      'nav.donate': 'Donează',
      'nav.contact': 'Modalități de Implicare',
      'audience.switch.partners': 'Varianta Parteneri',
      'audience.switch.public': 'Varianta Publică',
      'audience.switch.partners-mobile': 'Parteneri',
      'audience.switch.public-mobile': 'Public',
      'theme.light': 'Light',
      'theme.dark': 'Dark',
      'theme.auto.note': 'Modul dark a fost activat automat pentru a consuma mai puțină energie. Mic reminder: stinge luminile de care nu ai nevoie.',
      'theme.manual.daytime-note': 'Ai păstrat dark mode. Dacă vrei, poți trece oricând la varianta light pentru timpul zilei.',
      'patch-counter.info': 'Functionalitatea pentru Monede Patch nu este implementata încă.',
      'patch-counter.link': 'Mai multe despre Monede Patch',

      // Module names
      'mod.missions-hq': 'Cartierul Misiunilor',
      'mod.patch-coins': 'Monede Patch',
      'mod.small-missions': 'Misiuni Mici',
      'mod.medium-missions': 'Misiuni Medii',
      'mod.recycling-images': 'Reciclare in imagini',
      'mod.large-missions': 'Misiuni Mari',
      'mod.tribes': 'Triburi',
      'mod.market-hut': 'C\u0103su\u021ba de Schimb',
      'mod.earth-side': 'Povestea P\u0103m\u00e2ntului',
      'mod.games-room': 'Camera de Jocuri',
      'mod.activity-hut': 'C\u0103su\u021ba Aventurilor',
      'mod.eco-shops': 'Ghidul Eco',
      'mod.green-wall': 'Zidul Verde',
      'mod.org-scientists': 'Organiza\u021bii & Oameni de \u0218tiin\u021b\u0103',
      'mod.new-cities': 'Ora\u0219e\u00a0Noi\u00a0& Faza\u00a0de\u00a0Descoperire',
      'mod.patcher-camp': 'Tab\u0103ra Patcher',

      // Mission size pages
      'patch-coins.title': 'Monede Patch',
      'patch-coins.desc': '<p><span class=\"patch-coins-desc__primary\">Monedele Patch sunt punctele de mulțumire EarthPatchers pentru efort, grijă și învățare.</span> <span class=\"patch-coins-desc__secondary\">Se câștigă când misiunile sunt finalizate și validate, dar și din trasee de învățare cu quiz.</span></p><ul><li>Recunosc efortul real și obiceiurile utile.</li><li>Mai târziu, pot fi folosite în module precum Căsuța de Schimb și Camera de Jocuri.</li></ul>',
      'patch-coins.why': 'Monedele Patch fac progresul vizibil, corect și motivant. Transformă acțiunile mici și constante în ceva vizibil, pe care poți construi mai departe.',
      'small-missions.title': 'Misiuni Mici',
      'small-missions.desc': '<p>Misiunile mici sunt cea mai rapidă cale de a începe. Se integrează ușor în viața de zi cu zi și nu cer mult timp deodată.</p><ul><li>Acțiuni scurte pe care le poți face cap-coadă într-o zi</li><li>Obiceiuri simple repetate pe parcursul câtorva zile</li><li>Ușor de început, chiar dacă nu ai mai făcut niciodată ceva de genul acesta</li></ul>',
      'small-missions.why': 'Misiunile mici fac acțiunea posibilă. Sunt modul prin care chiar și zilele aglomerate se transformă în pași utili.',
      'medium-missions.title': 'Misiuni Medii',
      'medium-missions.desc': '<p>Misiunile medii cer puțin mai mult timp, de obicei o activitate într-o săptămână. Sunt pasul firesc după ce misiunile mici încep să devină ușoare.</p><ul><li>De obicei durează între 45 și 60 de minute.</li><li>Potrivite pentru activități în familie, Triburi sau o activitate, pentru un adult.</li><li>Bune când vrei să continui ce ai început.</li></ul>',
      'medium-missions.why': 'Misiunile medii transformă intențiile bune în progres vizibil. Oferă Triburilor și familiilor ceva concret de făcut împreună.',
      'recycling-images.title': 'Reciclare in imagini',
      'recycling-images.desc': '<p>Reciclare in imagini transformă ghidurile scrise de reciclare în instrucțiuni vizuale simple, ușor de înțeles dintr-o privire. Este gândit pentru postere, etichete și mesaje lângă pubele, acolo unde textul singur este deseori ignorat.</p><ul><li>Util pentru companii, școli, blocuri și spații publice.</li><li>Poate traduce reguli locale de reciclare în ghidaj bazat pe imagini.</li><li>Poate purta branding EarthPatchers și un link spre site pentru vizibilitate mai mare.</li></ul>',
      'recycling-images.why': 'Oamenii sortează mai bine când ghidajul este vizual, local și ușor de observat. Acest modul poate transforma documentația lungă în semnale practice bazate pe imagini, utile în locuri reale.',
      'large-missions.title': 'Misiuni Mari',
      'large-missions.desc': '<p>Misiunile Mari sunt provocări EarthPatchers mai complexe care cer mai mult timp. De obicei durează un weekend sau mai mult și implică să faceți ceva împreună cu Tribul sau comunitatea.</p><ul><li>Adesea durează o jumătate de zi sau o zi întreagă</li><li>Se potrivesc bine pentru școli, cartiere sau echipe comunitare</li><li>Funcționează cel mai bine când un grup vrea să planifice ceva împreună și să ducă lucrurile până la capăt</li></ul>',
      'large-missions.why': 'Misiunile Mari arată ce poate face o comunitate când oamenii lucrează împreună. Transformă efortul comun în schimbare locală vizibilă.',

      // Overview / Landing
      'hero.tagline': "Reparăm Pământul împreună,\nPetec cu Petec.",
      'hero.subtitle': "Misiuni mici și clare, fără să te pierzi în căutări pe internet.<br>Reparăm și planeta, dar începem cu ce contează cel mai mult pentru tine: timp, buget și haosul de zi cu zi.<br><br>Fără supereroi. Fără dramă. Doar pași mici, făcuți împreună.",
      'hero.cta.mvp': "Vezi Tabăra de Bază",
      'hero.cta.donate': "Interes pentru donație",
      'hero.cta.modules': "Vezi modulele",

      'overview.problem.title': "Ce problemă rezolvă EarthPatchers",
      'overview.problem.text': "Nu ducem lipsă de informații.<br>Ducem lipsă de timp, claritate și moduri simple de a acționa.<br><br>Ideile care te ajută să economisești bani, să risipești mai puțin sau să faci ceva util sunt împrăștiate peste tot — pe site-uri, în rapoarte și prin social media — ca șosetele după spălat: peste tot, când tot ce vrei este să le ai frumos în sertar, la locul lor.<br><br>EarthPatchers le adună într-un singur loc.<br>Nu ceva de căutat.<br>Ceva de făcut.",
      'overview.problem.solution': "",

      'overview.mission.title': "Exemple de Misiuni",
      'overview.mission.text': "O misiune este o acțiune practică pe care o poți face în viața reală și care ajută cartierul tău, comunitatea și mediul înconjurător.",
      'overview.mission.examples-intro': "Misiunile sunt de mai multe tipuri, pentru vârste diferite și în funcție de timpul și energia ta:",
      'overview.mission.paths': '<span class="overview-problem-lead">Apoi alegi cum:</span><ul><li><strong>Acasă:</strong> misiuni mici și rapide, pentru zilele aglomerate.</li><li><strong>Într-un Trib:</strong> alătură-te unei echipe sau creează-ți propriul Trib.</li><li><strong>Cu ONG-uri:</strong> alătură-te unui ONG de încredere și implică-te în misiunile sale, prin Tribul lor.</li></ul><p></p>',
      'overview.mission.paths-solution': '<span class="overview-problem-signoff">Fără stres. Fără presiune.</span><br>Doar acțiuni practice, efort comun și o reamintire că lucrurile mari rareori se repară de unul singur.',
      'overview.mission.small.title': "Misiune mică (5–15 Monede Patch)",
      'overview.mission.small.examples': "<ul><li>Durată: aproximativ 1–20 de minute, o singură dată sau repetată pe parcursul câtorva zile, până devine un obicei.</li><li>Copii: udă un copac sau o plantă din apropiere și urmărește-o timp de o săptămână.</li><li>Adolescenți: organizează, timp de o săptămână, o provocare în familie pentru a economisi apă acasă.</li><li>Adulți: verifică frigiderul, găsește 2 lucruri care trebuie consumate azi sau mâine și mută-le în față.</li></ul>",
      'overview.mission.small.cta': "Vezi Misiunile Mici",
      'overview.mission.medium.title': "Misiune medie (15–25 Monede Patch)",
      'overview.mission.medium.examples': "<ul><li>Durată: aproximativ 45–60 de minute, de obicei realizată într-o singură sesiune, pe parcursul unei săptămâni.</li><li>Copii + familie: participă la o acțiune de curățenie într-un parc sau pe malul unui râu.</li><li>Adolescenți: alege o zi fără mașină și folosește bicicleta, autobuzul sau mersul pe jos.</li><li>Adulți: donează un obiect pe care nu îl mai folosești (de exemplu, o pereche de ochelari de soare, o carte sau o geacă).</li></ul>",
      'overview.mission.medium.cta': "Vezi Misiunile Medii",
      'overview.mission.big.title': "Misiune mare (25–50 Monede Patch)",
      'overview.mission.big.examples': "<ul><li>Durată: aproximativ o jumătate de zi până la o zi întreagă, de obicei în weekend.</li><li>Copii + școală: construiește și îngrijește un colț pentru polenizatori în curtea școlii.</li><li>Adolescenți: organizează o mini-campanie de economisire a energiei în cartier, cu rezultate măsurabile.</li><li>Adulți: coordonează o zi comunitară, cu activități de curățenie, reparații și îngrijire a copacilor.</li></ul>",
      'overview.mission.big.cta': "Vezi Misiunile Mari",

      'overview.tribe.title': "Ce reprezintă un Trib",
      'overview.tribe.text': "Un Trib este o echipă mică, condusă de un Leader (MasterPatcher).<br>Nu o mulțime. Nu un stadion. O mână de oameni care spun: „Hai să facem asta împreună.”<br>Genul de echipă în care știi cine aduce gustările și cine uită mereu șosetele.<br>Ca un club de tabără, dar pentru viața reală.",
      'overview.tribe.types-intro': "Triburile pot fi:",
      'overview.tribe.types': "<ul><li>pentru copii și adolescenți + lideri</li><li>doar pentru adulți</li></ul>",
      'overview.tribe.cta': "Explorează Triburile",

      'overview.how.title': "Cum funcționează",
      'overview.how.public': '<ol><li>Alege o misiune care se potrivește cu timpul și rutina ta</li><li>Du-o la capăt în viața reală</li><li>(Opțional) Fă-o alături de alții, într-un Trib</li><li>Validează misiunea</li><li>Câștigă Monede Patch ca o formă vizibilă de apreciere pentru efortul tău</li></ol>',
      'overview.how.scroll.left': 'Derulează tabelul la stânga',
      'overview.how.scroll.right': 'Derulează tabelul la dreapta',
      'overview.how.example-intro': "Parcursuri planificate pentru adulți, părinți și copii:",
      'overview.how.table.col.step': 'Pas',
      'overview.how.table.col.adult': 'Parcurs Adult',
      'overview.how.table.col.parent': 'Parcurs Părinte',
      'overview.how.table.col.child': 'Parcurs Copil',
      'overview.how.table.step1.label': 'Creezi cont',
      'overview.how.table.step1.adult': 'Adultul va crea cont și își va seta propriile permisiuni de vizibilitate.',
      'overview.how.table.step1.parent': 'Părintele va crea cont de familie + contul sau conturile copiilor legate și va seta permisiunile de siguranță.',
      'overview.how.table.step1.child': 'Contul sau conturile copiilor vor fi legate de contul părintelui. Permisiunile părintelui vor stabili ce poate vedea și face copilul sau copiii.',
      'overview.how.table.step2.label': 'Cum intri în Trib',
      'overview.how.table.step2.adult': 'Adultul va selecta misiuni în funcție de mărime și abilități și poate aparține unuia sau mai multor Triburi.',
      'overview.how.table.step2.parent': 'Părintele va alege lideri de Trib de încredere (profesor, lider de cercetași sau părinte lider). Liderul va trimite o invitație sigură pentru conectarea contului sau conturilor copiilor.',
      'overview.how.table.step2.child': 'Copilul sau copiii vor intra doar după aprobarea părintelui, prin invitația sigură, pot aparține unuia sau mai multor Triburi și vor vedea doar conținutul împărtășit în Trib.',
      'overview.how.table.step3.label': 'Te alături și finalizezi o misiune',
      'overview.how.table.step3.adult': 'Adultul se va alătura Tribului care a creat misiunea aleasă și o va finaliza.',
      'overview.how.table.step3.parent': 'Părintele va susține participarea copilului sau copiilor când e nevoie. La misiuni în persoană poate fi necesar un număr minim de părinți, în funcție de vârstă și tipul misiunii.',
      'overview.how.table.step3.child': 'Copilul sau copiii vor intra și vor finaliza o misiune cu Tribul.',
      'overview.how.table.step4.label': 'Validare + Monede',
      'overview.how.table.step4.adult': 'Monedele Patch se vor câștiga după validarea făcută de liderul Tribului.',
      'overview.how.table.step4.parent': 'Liderul va valida. Copilul sau copiii vor primi 10 Monede Patch.',
      'overview.how.table.step4.parent.extra': 'Dacă și părintele participă și este validat: va primi 10 Monede Patch.',
      'overview.how.table.step4.child': 'Liderul va valida. Copilul sau copiii vor primi 10 Monede Patch.',
      'overview.how.table.step5.label': 'Explorezi + Quiz',
      'overview.how.table.step5.adult': 'Adultul va explora Povestea Pământului și poate câștiga Monede Patch extra din quiz.',
      'overview.how.table.step5.parent': 'Părintele poate explora și Povestea Pământului ca să înțeleagă nevoile locale. Conținutul va fi adaptat pe vârste. Quiz-ul poate aduce Monede Patch extra.',
      'overview.how.table.step5.child': 'Copilul sau copiii vor explora Povestea Pământului, adaptată pe vârste, și pot câștiga Monede Patch extra din quiz.',
      'overview.how.table.step6.label': 'Folosești monedele',
      'overview.how.table.step6.adult': 'Adultul va folosi Monedele Patch în Căsuța de Schimb pentru obiecte practice refolosibile (geci, cărți, unelte, board games, obiecte de casă).',
      'overview.how.table.step6.parent': 'Părintele va ajuta copilul sau copiii să folosească în siguranță Monedele Patch în Căsuța de Schimb (jucării, geci, cărți, rechizite, board games, obiecte refolosibile).',
      'overview.how.table.step6.child': 'Copilul sau copiii vor putea folosi Monedele Patch câștigate în Căsuța de Schimb, cu permisiunile și ghidarea părintelui.',
      'overview.how.table.step6.games-room': 'În Varianta Parteneri: Monedele Patch pot debloca și jocuri în Camera de Jocuri.',
      'overview.how.example-a.title': "Exemplul A — Părinte + copil într-un Trib de încredere",
      'overview.how.a.step1.title': "Te alături ca părinte",
      'overview.how.a.step1.text': "Părintele creează un cont de familie și creează și contul copilului, legat de al său. Adulții setează permisiunile copilului pentru siguranță.",
      'overview.how.a.step2.title': "Primești un link sigur de intrare",
      'overview.how.a.step2.text': "Un lider de Trib poate fi cineva în care ai încredere, de exemplu un profesor, un lider de cercetași sau un alt părinte care a devenit lider. El îți trimite linkul sigur ca să conectezi contul copilului.",
      'overview.how.a.step3.title': "Intrați într-o misiune mică",
      'overview.how.a.step3.text': "Copilul intră într-o misiune mică din Trib, de exemplu Învață cum să coși un nasture. Pentru misiunile în persoană, în funcție de tipul misiunii și de vârsta copiilor, trebuie să fie prezenți un număr minim de părinți care să ajute.",
      'overview.how.a.step4.title': "Liderul validează și se câștigă Monede Patch",
      'overview.how.a.step4.text': "După finalizare, misiunea poate fi validată de lider sau, până când validarea misiunilor va fi gata pe site, prin dovada cerută trimisă pe email. Apoi copilul primește 10 Monede Patch. Dacă și părintele participă și este validat, și părintele primește 10 Monede Patch pentru timp și efort.",
      'overview.how.a.step5.title': "Explorezi și faci quiz-ul",
      'overview.how.a.step5.text': "Copilul explorează Povestea Pământului. Este utilă și pentru adulți, ca să înțeleagă orașul și ce nevoi are. Conținutul este adaptat pe vârste, iar copilul poate câștiga Monede Patch extra dacă face quiz-ul de la final.",
      'overview.how.a.step6.title': "Folosești Monede Patch în Căsuța de Schimb",
      'overview.how.a.step6.text': "Monedele Patch pot fi folosite în Căsuța de Schimb pentru a alege lucruri utile din comunitate, de exemplu jucării, geci, cărți, rechizite și alte obiecte de casă care pot fi refolosite, iar mai târziu și în Jocuri.",
      'overview.how.example-b.title': "Exemplul B — Flux pentru un adult",
      'overview.how.b.step1.title': "Te alături ca adult",
      'overview.how.b.step1.text': "Un adult își creează cont.",
      'overview.how.b.step2.title': "Filtrezi misiuni în Cartierul Misiunilor",
      'overview.how.b.step2.text': "Filtrează în Cartierul Misiunilor o misiune medie în funcție de timpul disponibil și de abilitățile cerute de misiune.",
      'overview.how.b.step3.title': "Te alături Tribului care a creat misiunea",
      'overview.how.b.step3.text': "Se alătură Tribului care a creat misiunea și o finalizează împreună cu echipa.",
      'overview.how.b.step4.title': "Liderul validează și se câștigă Monede Patch",
      'overview.how.b.step4.text': "La final, misiunea poate fi validată de liderul Tribului sau, până când validarea misiunilor va fi gata pe site, prin dovada cerută trimisă pe email. Apoi adultul primește Monede Patch.",
      'overview.how.b.step5.title': "Explorezi și faci quiz-ul",
      'overview.how.b.step5.text': "Adultul explorează și Povestea Pământului. Este utilă și pentru adulți, ca să înțeleagă orașul și ce nevoi are. Conținutul este adaptat pe vârste, iar adultul poate câștiga Monede Patch extra din quiz.",
      'overview.how.b.step6.title': "Folosești Monede Patch în Căsuța de Schimb",
      'overview.how.b.step6.text': "Monedele Patch câștigate sunt folosite în Căsuța de Schimb pentru a alege obiecte utile din comunitate, ca haine, cărți, unelte, jucării și alte lucruri practice care pot fi refolosite, iar mai târziu și în Jocuri.",
      'overview.cluj.title': "Pilot și Parteneriate",
      'overview.cluj.text': "EarthPatchers este gândit să lucreze alături de școli și ONG-uri, nu să le înlocuiască.<br><br>Începem cu comunități reale (școli, familii și primii parteneri) și creștem pe baza feedbackului real.<br><br>Construim parteneriate locale și obiective comune pe măsură ce misiunile cresc.<br><br>Dacă vrei să te implici ca profesor, părinte, lider de cercetași, ONG sau partener, vezi Modalități de Implicare.",

      'overview.trust.title': "Important!",
      'overview.tribe.leaders': "",
      'overview.trust.missions': "<p>Unele funcționalități sunt încă în curs de dezvoltare.</p><p>Pentru moment:</p><ul><li>Misiunile sunt validate de lideri (MasterPatchers) sau prin trimiterea dovezilor pe email</li><li>Monedele Patch sunt urmărite ca o formă vizibilă de apreciere pentru efortul depus</li></ul><p>Pe măsură ce platforma crește, validarea și recompensele vor fi integrate complet.</p>",
      'overview.trust.how': "<p>Unele funcționalități sunt încă în curs de dezvoltare.</p><p>Pentru moment:</p><ul><li>Misiunile sunt validate de lideri (MasterPatchers) sau prin trimiterea dovezilor pe email</li><li>Monedele Patch sunt urmărite ca o formă vizibilă de apreciere pentru efortul depus</li></ul><p>Pe măsură ce platforma crește, validarea și recompensele vor fi integrate complet.</p>",

      'overview.cta.title': "Vrei să afli mai mult?",
      'overview.cta.mvp': "Citește Tabăra de Bază",
      'overview.cta.about': "Vezi Cine Suntem",
      'overview.cta.modules': "Explorează modulele",
      'overview.cta.contact': "Modalități de Implicare",
      'about.cta.overview': 'Citește Tabăra de Bază',

      // MVP Page
      'mvp.title': "Tabăra de Bază",
      'mvp.title.plan': "Plan pe 36 de luni",
      'mvp.intro': "EarthPatchers va începe prin programe pilot, alături de școli interesate, lideri și primii parteneri, și va porni cu doi piloni de bază:",

      'mvp.pillar1.title': "Cartierul Misiunilor",
      'mvp.pillar1.subtitle': "Acțiuni reale pentru planetă",
      'mvp.pillar1.text': "Misiuni scurte și structurate pe care chiar le poți duce la capăt — de la acțiuni de 10 minute la provocări de grup.",
      'mvp.pillar1.why': "Misiunile vor transforma ideea „salvăm Pământul”, care poate părea copleșitoare, în pași mici și curajoși.",

      'mvp.pillar2.title': "Triburi",
      'mvp.pillar2.subtitle': "Mici, sigure, cu sens",
      'mvp.pillar2.text': "Pilot cu grupuri mici, cu un ritm clar (lunar sau sezonier), reguli simple și progres împărtășit.",
      'mvp.pillar2.why': "Tinerilor le pasă profund de viitorul lor. Aici vor avea un mod sigur de a contribui, fără să fie copleșiți.",

      'mvp.pillar3.title': "Căsuța de Schimb",
      'mvp.pillar3.subtitle': "Schimb, partajare, reutilizare",
      'mvp.pillar3.text': "Un spațiu de schimb și reutilizare unde încrederea va fi pe primul loc: reguli clare de schimb, ghid pentru preluare în siguranță și moderare pentru comportamente suspecte. Monedele Patch vor avea utilitate practică aici, în module viitoare precum Căsuța de Schimb și Camera de Jocuri.",
      'mvp.pillar3.why': "Obiceiurile circulare vor funcționa când oamenii au încredere în sistem.",

      'mvp.pillar4.title': "Povestea Pământului",
      'mvp.pillar4.subtitle': "Învățare + acțiune, adaptate local",
      'mvp.pillar4.text': "O lume de învățare și acțiune construită pas cu pas, cu trei uși: Pericolele Mele, Zona de Contaminare și Refacere, și Învață & Joacă, toate conectate la misiuni. În timp, misiunile pot fi adaptate în funcție de loc prin colaborare cu ONG-uri locale și parteneri de încredere.",
      'mvp.pillar4.why': "Va face învățarea practică și de încredere, legând-o direct de acțiunile locale.",

      'mvp.modules.title': "Modulele de pornire",
      'mvp.modules.intro': "Aceste module arată de unde începem și vor fi construite și testate în planul de 36 de luni:",

      'mvp.timeline.title': "Plan pe 36 de luni",

      'mvp.phase1.label': "Faza 1",
      'mvp.phase1.months': "Lunile 0–12",
      'mvp.phase1.title': "Dovedim bucla de bază în programe pilot",
      'mvp.phase1.item1': "Lansăm Cartierul Misiunilor",
      'mvp.phase1.item2': "Rulăm primele Triburi pilot pentru tineri, cu reguli solide de siguranță",
      'mvp.phase1.item3': "Lansăm pilotul Căsuța de Schimb, cu moderare și ghid clar pentru preluare în siguranță",
      'mvp.phase1.item4': "Lansăm prima versiune mică din Povestea Pământului (colț simplu de învățare + primele pinuri locale pe hartă, acolo unde este relevant)",
      'mvp.phase1.goal': "Dovedim că oamenii revin, participă și se simt în siguranță.",

      'mvp.phase2.label': "Faza 2",
      'mvp.phase2.months': "Lunile 13–24",
      'mvp.phase2.title': "Facem totul mai solid și mai ușor de rulat",
      'mvp.phase2.item1': "Îmbunătățim calitatea misiunilor și pachetele de misiuni (colecții sezoniere)",
      'mvp.phase2.item2': "Extindem Triburile pilot pentru tineri dacă Faza 1 merge bine",
      'mvp.phase2.item3': "Îmbunătățim fluxurile de schimb sigur (categorii, șabloane, semnale de încredere)",
      'mvp.phase2.item4': "Dezvoltăm cu grijă Povestea Pământului (mai multe teme, trasee de învățare mai bune și adaptare locală acolo unde este util)",
      'mvp.phase2.goal': "Reducem efortul de administrare și moderare, în timp ce creștem calitatea experienței și nivelul de siguranță.",

      'mvp.phase3.label': "Faza 3",
      'mvp.phase3.months': "Lunile 25–36",
      'mvp.phase3.title': "Facem totul stabil și pregătit pentru extindere",
      'mvp.phase3.item1': "Facem cele 4 module de pornire stabile și repetabile",
      'mvp.phase3.item2': "Ne asigurăm că fluxurile de siguranță funcționează și la scară mai mare",
      'mvp.phase3.item3': "Întărim traseele de învățare conectate la misiuni și la acțiunea locală",
      'mvp.phase3.goal': "EarthPatchers devine un model care poate fi replicat și adaptat în locații diferite.",

      'mvp.globe.title': "Notă importantă",
      'mvp.globe.intro': "Povestea Pământului se construiește pe capitole mici, pas cu pas:",
      'mvp.globe.phase1': "Faza 1: colț mic de învățare în locații pilot",
      'mvp.globe.phase2': "Faza 2: conținut de învățare mai bogat și trasee mai clare",
      'mvp.globe.phase3': "Faza 3: parcursuri de învățare mai solide și mai complete, conectate la misiuni",
      'mvp.globe.why': "Construim etapizat, ca să rămână fiabil și ușor de înțeles.",

      'mvp.notincluded.title': "Ce NU include planul de pornire",
      'mvp.notincluded.text': "EarthPatchers are multe idei pentru viitor (Căsuța Aventurilor, Ghidul Eco, Zidul Verde, Ajutători (Organizații & Oameni de Știință), Orașe Noi & Faza de Descoperire, Camera Jocurilor, Tabăra Patcher). Acestea vin mai târziu, ca oamenii să nu confunde etapa de început cu tot ce am putea construi în viitor.",

      'mvp.success.title': "Cum arată succesul",
      'mvp.success.item1': "Misiunile sunt duse la capăt, iar oamenii revin pentru că sunt ușor de făcut și merită.",
      'mvp.success.item2': "Părinții se simt în siguranță să lase copiii să participe — iar copiii chiar se bucură să revină.",
      'mvp.success.item3': "Schimbul circular va funcționa fluid, cu încredere și moderare",
      'mvp.success.item4': "Povestea Pământului îi va ajuta pe oameni să înțeleagă „de ce” și „ce urmează”",
      'mvp.success.item5': "Programele pilot ne arată cum să creștem, pe baza a ceea ce funcționează și a ceea ce nu, fără presupuneri.",
      'mvp.more.title': "Curios ce urmează?",
      'mvp.more.text': "Vezi varianta pentru parteneri pentru a explora planul complet din Tabăra de Bază și Pașii Următori din aventura noastră.",
      'mvp.more.cta': "Explorează Varianta Parteneri",

      // Next Steps
      'nextsteps.title': 'Pa\u0219i Urm\u0103tori',
      'nextsteps.intro': "Dincolo de Tabăra de Bază, EarthPatchers își propune un ecosistem bogat de module. Acestea vor fi alese prin votul comunității și vor fi realizate în funcție de posibilități, prin modulul Zidul Verde.",
      'nextsteps.explore': 'Exploreaz\u0103',

      // Module pages common
      'module.features': 'Caracteristici Cheie',
      'module.why': 'De Ce Conteaz\u0103',
      'module.mvp-badge': 'Tabăra de Bază',
      'module.future-badge': 'Modul Viitor',
      'module.coming-soon': 'Aceast\u0103 sec\u021biune este \u00een cre\u0219tere. Dezvolt\u0103m con\u021binut detaliat aici. Reveni\u021bi cur\u00e2nd sau contacta\u021bi-ne pentru mai multe informa\u021bii.',
      'module.prev': '\u2190 Anterior',
      'module.next': 'Urm\u0103tor \u2192',
      'module.next-steps-title': 'Pentru mai încolo',


      // Missions HQ
      'missions-hq.title': 'Cartierul Misiunilor',
      'missions-hq.subtitle': 'De Unde Începe Totul',
      'missions-hq.desc': "<p>Cartierul Misiunilor este locul unde începe EarthPatchers. Este o bibliotecă de misiuni din viața reală pentru copii, adolescenți și adulți — organizată după timp, tip și grup.</p><p>Poți participa în moduri diferite:</p><ul><li>misiuni rapide (10–20 minute)</li><li>misiuni mai lungi (1–2 ore)</li><li>misiuni de grup (familii, școli, echipe)</li></ul><p>Pentru adulți, misiunile sunt potrivite în funcție de abilități (reparații, organizare, predare, grădinărit, design, fotografie) și de timpul disponibil, astfel încât implicarea să se potrivească cu ceea ce știi să faci și cu programul tău. Pentru copii, misiunile sunt gândite să fie captivante și practice.</p><p>Deocamdată, misiunile pot fi validate de lideri (MasterPatchers) sau prin trimiterea dovezilor cerute pe email, până când validarea direct în platformă va fi disponibilă.</p><p>Structura aceasta face proiectele mai ușor de repetat în comunități diferite: odată ce o misiune funcționează bine, poate fi refolosită de alte grupuri fără să pornească de la zero.</p>",
      'missions-hq.rewards.title': 'Recompensele rămân simple:',
      'missions-hq.rewards.coins': 'Monede Patch: le câștigi prin misiuni și învățare, iar mai târziu le poți folosi în module precum Căsuța de Schimb și Camera Jocurilor.',
      'missions-hq.rewards.badges': 'Insignele: reflectă felul de persoană care devii (curajos, bun, curios).',
      'missions-hq.rewards.achievements': 'Realizări: surprind ceea ce ai făcut pe parcurs, ca niște stickere în jurnalul tău de aventură.',
      'missions-hq.why': 'Misiunile transformă grija pentru planetă într-o aventură. Oferă un punct clar de pornire: cu fiecare misiune, construind schimbări reale, pas cu pas.',

      // Tribes
      'tribes.title': 'Triburi',
      'tribes.subtitle': 'Echipa Ta Sigură',
      'tribes.desc': "<p>Triburile sunt grupuri mici în care oamenii fac lucruri împreună.</p><ul><li>Pentru copii și adolescenți, cu ghidaj din partea liderilor adulți<ul><li>Copiii folosesc aliasuri și avatare, fără fețe vizibile</li><li>Activitatea rămâne în interiorul Tribului</li></ul></li><li>Pentru adulți<ul><li>Fiecare decide cât de vizibilă este implicarea lui</li></ul></li></ul><p>Liderii de Trib au nevoie de conturi verificate. Ei ajută la moderare, mențin un spațiu sigur și respectuos și susțin grupul.</p>",
      'tribes.why': 'Triburile nu sunt doar despre lucruri de făcut — sunt despre a simți că aparții. Ele transformă platforma într-o comunitate unde oamenii se sprijină, acționează împreună și păstrează un spațiu sigur și prietenos.',
      'tribes.next1': "Mai multe tipuri de Triburi: școli, cartiere, ONG-uri și Triburi pe interese.",
      'tribes.next2': "Împărtășire mai bună a misiunilor prin căutare și favorite în Raftul cu Misiuni (Mission Shelf).",
      'tribes.next3': "Provocări opționale pe zone pentru Triburi (lunare sau sezoniere, fără să fie copleșitoare).",
      'tribes.next4': "Un buton pentru a \"Raporta Gunoi Neridicat\" când ceva nu e în regulă.",
      'tribes.next5': "Evenimente opționale doar pentru adulți și cercuri de învățare.",
      'tribes.next6': '<span>Roluri:</span><ol><li>MasterPatchers (Mentori, organizatori de campanii)</li><li>NewsPatcher (Reporteri)</li><li>AppPatchers (Dezvoltatori, QA)</li><li>CraftPatchers (Artizani - Căsuța de Schimb)</li></ol>',

      // Market Hut
      'market-hut.title': 'Căsuța de Schimb',
      'market-hut.subtitle': 'Schimbă, Împarte, Reutilizează',
      'market-hut.desc': "<p>Căsuța de Schimb va fi un spațiu de schimb circular, unde vom refolosi lucruri în loc să cumpărăm mereu altele noi:</p><ul><li>Monedele Patch vor rezolva problema schimbului perfect: vei câștiga monede ajutând, apoi le vei folosi ca să alegi ce ai nevoie — de exemplu o jucărie, o geacă călduroasă, cărți sau rechizite.</li><li>Siguranța va fi integrată: adulții își vor alege vizibilitatea, iar fețele copiilor nu vor fi permise.</li><li>Pe măsură ce EarthPatchers crește, schimbul va putea fi adaptat la locuri diferite prin colaborare cu ONG-uri locale, școli și parteneri de încredere.</li></ul>",
      'market-hut.why': 'Obiceiurile circulare sunt una dintre cele mai rapide modalități de a reduce risipa. Monedele Patch vor face reutilizarea simplă și corectă — fără schimb complicat, doar bunătate și monede.',
      'market-hut.next1': "Licitație politicoasă opțională cu Monede Patch pentru produse foarte căutate (simplu și sigur pentru copii).",
      'market-hut.next2': "Rafturi de împrumut (unelte, cărți, echipament sport, echipament copii).",
      'market-hut.next3': "Semnale mai bune de încredere (utilizatori verificați și privilegii de schimb după misiuni verificate).",
      'market-hut.next4': "Ghid mai sigur pentru întâlniri și preluare, cu reguli mai clare.",

      // Earth's Side of the Story
      'earth-side.title': 'Povestea Pământului',
      'earth-side.subtitle': 'Învățare conectată la loc',
      'earth-side.desc': "<p>Povestea Pământului va fi lumea de învățare și acțiune care leagă învățarea de misiuni. Va avea trei uși:</p><ol><li>Pericolele Mele: va explica simplu pericolele naturale, pericolele naturale agravate de poluare sau schimbări făcute de oameni și pericolele cauzate direct de oameni. Aventuri scurte de tip traseu, din care vei învăța lucruri interesante, fiecare cu o mini-provocare la final, vor putea oferi Monede Patch.</li><li>Zona de Mizerie și Reparare (hartă locală, unde este relevant): adulții (și adolescenții mai mari, unde e potrivit) vor putea pune un pin cu poză și notiță pentru gunoaie, lucruri stricate și zone care au nevoie de grijă. Pinurile vor putea deveni misiuni.</li><li>Învață și Joacă: învățare scurtă, conectată la misiuni și monede.</li></ol><p>În timp, misiunile și straturile locale de învățare pot fi adaptate în funcție de loc prin colaborare cu ONG-uri locale și parteneri de încredere.</p>",
      'earth-side.next1': 'Alertele noi pot trimite un semn bl\u00e2nd Triburilor din zon\u0103, ca echipele locale s\u0103 poat\u0103 alege s\u0103 ajute.',
      'earth-side.next2': 'Ora\u0219ele noi se deschid doar cu Faza de descoperire (date + parteneri + misiuni importante). Dac\u0103 descoperirea nu e sus\u021binut\u0103, zona r\u0103m\u00e2ne \u201eadormit\u0103\u201d p\u00e2n\u0103 c\u00e2nd comunitatea ajut\u0103 s\u0103 g\u0103seasc\u0103 surse de date sau parteneri.',
      'earth-side.next3': "Ajutorul comunității pentru descoperire (surse de date și cartografiere ajutori locali).",
      'earth-side.next4': "Pinurile validate de ajutoare (ONG-uri, cercetători, grupuri) și pinurile de misiuni.",
      'earth-side.next5': "Trasee de învățare mai bune (pe vârste, inclusiv pentru adulți).",
      'earth-side.why': 'Înțelegerea „de ce”-ului este puntea între acțiune și schimbare durabilă. Acest modul va face învățarea accesibilă, sigură emoțional și conectată direct la misiuni reale.',

      // Games Room
      'games-room.title': 'Camera de Jocuri',
      'games-room.subtitle': 'Joacă-te cu un Scop',
      'games-room.desc': "<p>Camera Jocurilor va fi un modul de mai târziu care va aduna într-un singur loc jocuri de încredere despre natură:</p><ul><li>Monedele Patch vor deschide jocurile (regula simplă: monedele deschid uși).</li><li>Și adulții vor putea juca și câștiga Monede Patch.</li></ul>",
      'games-room.next1': 'Jocuri create de EarthPatchers, \u0219i \u00een cele din urm\u0103 Patcher Camp.',
      'games-room.why': 'Joaca e modul în care copiii învață cel mai bine. Pornind cu jocuri de încredere, învățarea va veni mai repede, iar Monedele Patch vor menține legătura cu efortul real.',

      // Activity Hut
      'activity-hut.title': 'Căsuța Aventurilor',
      'activity-hut.subtitle': 'Jurnalul Tău de Aventuri',
      'activity-hut.desc': "<p>Căsuța Aventurilor va fi baza ta personală, ca un jurnal de aventuri.</p><p>Acolo vei vedea:</p><ul><li>urma aventurii tale (misiuni și momente importante)</li><li>Monede Patch de acum (cheltuibile) și Monede Patch câștigate (tot efortul tău de până acum)</li><li>Insigne și Realizări</li><li>drumul spre roluri (cum ar fi Leader, sau MasterPatcher, cum îi mai zicem noi)</li></ul><p>Adulții vor decide ce rămâne public, iar copiii vor rămâne în regulile de vizibilitate ale Tribului.</p>",
      'activity-hut.next1': 'AI sigur pentru copii care creeaz\u0103 \u201ePovestea Eroului\u201d din aventuri verificate (doar alias + avatar).',
      'activity-hut.why': 'Jurnalul tău de aventuri va fi locul unde efortul devine vizibil. Insignele vor arăta cine devii, Realizările vor arăta ce ai făcut, iar totalul de Monede Patch va arăta impactul tău pe viață.',

      // Eco Shops Directory
      'eco-shops.title': 'Ghidul Eco',
      'eco-shops.subtitle': 'Găsește Ce E Cu Adevărat Sustenabil',
      'eco-shops.desc': "<p>Ghidul Eco va fi un ghid cu produse sustenabile și magazine locale, plus ratinguri și comentarii de la membri validați.</p><p>Va include și o funcție de Interes sau Dorință pentru produse zero deșeuri care încă nu se găsesc local:</p><ul><li>Oamenii vor putea apăsa \"Vreau și la noi\" ca să arate interesul, fără ca fiecare să comande separat.</li><li>Dacă sunt destui interesați, comunitatea va putea organiza o comandă la comun, ca să scadă ambalajele și risipa de transport.</li><li>Producătorii și companiile vor putea vedea nivelul de interes și planifica mai bine.</li></ul><p>Regulile de calitate vor păstra încrederea și vor reduce spamul:</p><ul><li>Vei putea lăsa recenzie sau adăuga produse după ce câștigi destule Monede Patch și faci o misiune verificată.</li><li>Produsele noi vor fi trimise printr-un șablon simplu (poză, de unde îl iei, materiale, de ce e mai bun, la ce să fii atent).</li><li>Liderii, numiți și MasterPatchers, vor verifica intrările înainte să apară public.</li></ul><p>În timp, recomandările locale pot fi modelate împreună cu ONG-uri locale și parteneri de încredere, ca ghidul să rămână bine ancorat în fiecare loc.</p>",
      'eco-shops.why': 'Găsirea produselor cu adevărat sustenabile e dificilă. Acest director va păstra lucrurile cinstite cu recenzii din comunitate, misiuni verificate și verificare din partea Leader-ilor (rolul MasterPatcher).',

      // The Green Wall
      'green-wall.title': "Zidul Verde",
      'green-wall.subtitle': 'Unde Ideile Cresc',
      'green-wall.desc': "<p>Zidul Verde va fi grădina de idei EarthPatchers. Aici oamenii vor putea posta idei, găsi idei asemănătoare și intra în echipe, ca să nu muncim de două ori la același lucru.</p><p>Ideile vor fi sortate pe mărimi, ca totul să rămână ușor de folosit:</p><ul><li>Semințe Mici (idei mici): rapide, ușor de făcut, fără echipă mare și fără bani.</li><li>Semințe Medii (idei medii): au nevoie de o echipă mică și un plan simplu.</li><li>Semințe Mari (idei mari): proiecte mai mari, funcții noi, planuri de orașe noi, de obicei cu nevoie de date sau fonduri.</li></ul><p>Înainte de postare, Zidul va sugera idei similare deja existente, ca oamenii să se poată alătura lor în loc să posteze copii.</p><p>Dacă totuși apare o idee nouă, va fi nevoie doar de o propoziție despre ce e diferit.</p><p>Oamenii se vor putea alătura cu:</p><ul><li>competențe (design, organizare, predare, programare, strângere de fonduri)</li><li>timp (ajutor mic, regulat)</li><li>mai târziu, opțional, suport</li></ul><p>Scopul: energie din comunitate, transformată în acțiune reală.</p>",
      'green-wall.why': "Ideile bune au nevoie de mai mult decât entuziasm - au nevoie de competențe, muncă în echipă și uneori finanțare. Zidul Verde va transforma energia comunității în proiecte reale.",

      // Organisations & Scientists
      'org-scientists.title': 'Organizații & Oameni de Știință',
      'org-scientists.subtitle': 'Ajutori pe hartă',
      'org-scientists.desc': "<p>Organizațiile și cercetătorii verificați vor apărea ca pinuri speciale de tip Ajutor pe hartă, în Zona de Contaminare și Refacere din Povestea Pământului.</p><p>Tipurile de pinuri vor include:</p><ul><li>LittlePatchers (ONG-uri)</li><li>WisePatchers (Oameni de știință)</li><li>BrightPatchers (Startup-uri - proiecte sau produse)</li><li>HoneyPatchers (Investitori angel, fonduri de venture capital - vor putea să nu fie vizibili pe hartă dacă nu vor dori)</li><li>SysPatchers (Guvern, ministere)</li><li>Misiuni (moduri concrete în care poți ajuta)</li><li>Raportări (lucruri care au nevoie de atenție)</li></ul><p>Asta îi va ajuta pe oameni să găsească rapid echipe de încredere, să înțeleagă ce fac și să se alăture misiunilor.</p>",
      'org-scientists.why': 'Să vezi cine ajută — și cum te poți alătura — va transforma o hartă cu probleme într-o hartă cu speranță. Pinurile validate vor conecta acțiunea comunitară la expertiză reală.',

      // New Cities & Discovery Phase
      'new-cities.title': 'Orașe Noi & Faza de Descoperire',
      'new-cities.subtitle': 'Creștem împreună, oraș cu oraș',
      'new-cities.desc': "<p>EarthPatchers se va extinde încet și onest. Fiecare oraș nou va începe cu o Fază de Descoperire:</p><ul><li>găsim surse de informații de încredere (date)</li><li>găsim ajutori locali și parteneri</li><li>alegem misiunile cele mai importante pentru acel loc</li></ul><p>Dacă faza de descoperire nu este susținută încă, orașul va rămâne adormit până când comunitatea va ajuta cu date sau parteneri.</p>",
      'new-cities.why': 'Scalarea trebuie să fie onestă și condusă de comunitate. Fără capitole pe jumătate — fiecare oraș se va deschide cu date reale, parteneri reali și misiuni prioritare.',

      // Patcher Camp
      'patcher-camp.title': 'Tabăra Patcher',
      'patcher-camp.subtitle': 'Marea Aventură',
      'patcher-camp.desc': "<p>Tabăra Patcher va fi jocul mare de echipă din viitor, în Camera Jocurilor:</p><ul><li>Copiii vor lucra împreună prin diferite zone ale Pământului, cu puteri bazate pe cunoștințe reale: Pământ, Apă, Foc, Vânt.</li><li>Va dezvolta abilități practice, rezolvare de probleme, curaj și lucru în echipă.</li><li>Va apărea după ce fundația Camerei Jocurilor va fi bine pusă la punct.</li></ul>",
      'patcher-camp.why': 'Jocurile fac învățarea irezistibilă. Tabăra Patcher va conecta joaca de acțiunea reală, ajutând tinerii să-și vadă cunoștințele ca superputeri pentru planetă.',

      // Module short descriptions
      'mod.missions-hq.short': 'Misiuni reale pentru copii, adolescenți și adulți. Câștigă Monede Patch, Insigne și Realizări.',
      'mod.patch-coins.short': 'Cum se câștigă, se contorizează și se vor folosi Monedele Patch în modulele EarthPatchers.',
      'mod.small-missions.short': 'Cele mai rapide misiuni din fluxul EarthPatchers: acțiuni și obiceiuri scurte pentru zile ocupate.',
      'mod.medium-missions.short': 'Misiuni care cer o sesiune clară săptămânală și fac progresul mai ușor de observat.',
      'mod.recycling-images.short': 'Ghidaj vizual pentru reciclare care poate transforma documentația scrisă în mesaje simple pe imagini pentru pubele și spații publice.',
      'mod.large-missions.short': 'Misiuni mai mari pentru weekenduri, echipe și impact local măsurabil.',
      'mod.tribes.short': 'Spații sigure de echipă cu reguli de tabără. Copiii folosesc aliasuri; misiunile circulă între Triburi.',
      'mod.market-hut.short': 'Schimb circular local cu Monede Patch. Refolosește în loc să cumperi nou.',
      'mod.earth-side.short': 'Hartă de învățare + acțiune, cu riscuri, hartă locală unde este relevant și învață și joacă.',
      'mod.games-room.short': 'Hub cu jocuri de încredere despre natură, deblocate cu Monede Patch.',
      'mod.activity-hut.short': 'Jurnal personal de aventuri, cu Insigne, Realizări și urmărire Monede Patch.',
      'mod.eco-shops.short': 'Ghid comunitar cu produse și magazine sustenabile, verificat de Lideri (MasterPatchers).',
      'mod.green-wall.short': 'Grădină de idei unde oamenii postează, votează și formează echipe după competențe.',
      'mod.org-scientists.short': 'Pinuri validate pe hartă, cu cine ajută, unde și cum te poți implica.',
      'mod.new-cities.short': 'Extindere oraș cu oraș, prin Faze de Descoperire cu date și parteneri locali.',
      'mod.patcher-camp.short': 'Joc mare de echipă unde cunoștințele devin superputeri.',

      // About Us
      'about.title': 'Cine Suntem',
      'about.mission.title': 'Misiunea Noastr\u0103',
      'about.mission.text': 'Când dai peste ceva care chiar îți este de folos în viața de zi cu zi, parcă îți vine mai ușor să-l încerci. De aceea oferim o platformă cu misiuni clare pe care chiar le poți urma în viața reală, o comunitate sigură și soluții simple de refolosire.<br><br>Și, pe parcurs, reparam și planeta — cu fiecare misiune.<br>Cu supereroi, dar fără toată drama. Doar pași mici, făcuți împreună.',
      'about.vision.title': 'Viziunea Noastr\u0103',
      'about.vision.text': 'O lume \u00een care refolosirea \u0219i repararea sunt la fel de obi\u0219nuite ca sp\u0103latul pe din\u021bi.',
      'about.vision.expand': 'În timp, EarthPatchers poate crește oraș cu oraș într-o rețea de comunități care acționează local, învață de ce contează (pe înțelesul fiecărei vârste) și face mai ușor pentru toți să refolosim, să reparăm și să risipim mai puțin.',
      'about.why.title': 'De Ce EarthPatchers',
      'about.why.text': '<p>Pentru că nu ai timp să le descoperi pe toate singur.</p><p>Pentru că lucrurile mici se adună — de reparat, de refolosit sau de evitat să le mai irosești.</p><p>Pentru că viața este deja plină, iar „mă ocup mai târziu” devine, treptat, „nu azi”.</p><p>EarthPatchers transformă aceste momente în pași clari și ușor de urmat.</p><p>Fără căutări. Fără complicații. Doar un loc de unde să începi.</p><p>Ne concentrăm pe o întrebare simplă: nu „Cum faci totul?”, ci „De unde începi?”</p>',
      'about.values.title': 'Valorile Noastre',
      'about.value1.title': 'Sustenabilitate',
      'about.value1.text': 'Acțiuni reale, nu doar campanii de conștientizare. Pași mici care, împreună, duc la schimbări de durată.',
      'about.value2.title': 'Comunitate',
      'about.value2.text': 'Sprijin local, misiuni făcute împreună și puterea de a acționa ca o echipă.',
      'about.value3.title': 'Transparen\u021b\u0103',
      'about.value3.text': 'Bugete clare. Planuri publice. Donații explicate.<br>Știi ce susții. Știi unde ajunge.',
      'about.value4.title': 'Siguran\u021ba Copiilor',
      'about.value4.text': 'Protecția datelor gândită de la început, conținut potrivit vârstei și implicarea părinților la fiecare pas.',
      'about.how.title': 'De unde începem',
      'about.how.text': 'Vom lucra prin parteneriate cu școli, ONG-uri, lideri locali și parteneri timpurii, plus vot comunitar pentru a decide ce facem mai departe. Totul va începe mic, va fi testat și va crește pe baza feedback-ului real. În timp, misiunile pot fi adaptate în funcție de loc prin colaborare cu ONG-uri locale și parteneri de încredere.',

      // Contact Us
      'contact.title': 'Modalități de Implicare',
      'contact.intro': 'Vrei să aduci EarthPatchers în școala, comunitatea sau organizația ta?<br><br>Dă-ne un semn. Promitem că nu venim cu un PDF de 48 de pagini 😄<br><br>Stăm de vorbă (online sau față în față) și vedem cum pornim lucrurile.<br><br>Fără procese complicate. Doar o discuție scurtă ca să vedem ce ti se potrivește.',
      'contact.copy-email': 'Copiază emailul',
      'contact.copy-success': 'Email copiat. Îl poți lipi acum în aplicația ta de email.',
      'contact.copy-failed': 'Copierea a eșuat. Copiază manual: contact@earthpatchers.org',
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

      // Donate
      'donate.title': 'Donează',
      'donate.intro': 'Dacă simți că vrei să pui și tu un fir în cusătura asta mare, lasă-ne datele tale și spune-ne că te interesează să susții EarthPatchers. Momentan e doar un formular de interes. Te contactăm noi, liniștit, ca să vedem împreună cum putem face binele să crească.',
      'donate.coming-soon.title': 'În curând:',
      'donate.coming-soon.text': 'Opțiuni de donație directă în cont și opțiunea de redirecționare a 3.5% din impozit vor apărea după finalizarea încorporării.',
      'donate.name': 'Nume complet',
      'donate.email': 'Adresa de email',
      'donate.phone': 'Număr de telefon (opțional)',
      'donate.location': 'Oraș / Țară',
      'donate.interest': 'Vreau să susțin ca',
      'donate.interest.select': '-- Selectează --',
      'donate.interest.individual': 'Donator individual',
      'donate.interest.parent': 'Părinte / Familie',
      'donate.interest.organization': 'Organizație / Companie',
      'donate.interest.partner': 'Potențial partener',
      'donate.interest.other': 'Altceva',
      'donate.message': 'Detalii (opțional)',
      'donate.message.placeholder': 'Orice vrei să știm despre interesul tău pentru donație.',
      'donate.submit': 'Trimite interesul pentru donație',
      'donate.back': 'Înapoi',
      'donate.status.opening': 'Se deschide aplicația ta de email cu detaliile donației precompletate.',
      'donate.status.sent': 'Mulțumim. Interesul tău pentru donație a fost trimis cu succes.',
      'donate.status.error': 'Nu s-a putut trimite acum. Te rog folosește butonul „Copiază emailul” de mai sus.',

      // Footer
      'footer.text': 'EarthPatchers \u2014 Sustenabilitate ghidată de comunitate, construită prin programe pilot și colaborare locală.',
    }
  },

  init() {
    this.buildSectionIndex();
    this.validateLanguageParity();
    this.validateAudienceOverrideParity();

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
    this.clearMergedTranslationsCache();
    localStorage.setItem('ep-lang', lang);
    this.apply();
  },

  clearMergedTranslationsCache() {
    this.mergedTranslationsCache = {};
  },

  getSectionNameForKey(key) {
    const prefix = this.sectionPrefixes.find(p => key.startsWith(p));
    if (!prefix) return 'misc';
    return prefix.slice(0, -1);
  },

  buildSectionIndex() {
    this.translationSections = Object.keys(this.translations).reduce((acc, lang) => {
      const bySection = {};
      Object.entries(this.translations[lang]).forEach(([key, value]) => {
        const section = this.getSectionNameForKey(key);
        if (!bySection[section]) bySection[section] = {};
        bySection[section][key] = value;
      });
      acc[lang] = bySection;
      return acc;
    }, {});
  },

  validateLanguageParity() {
    const langs = Object.keys(this.translations);
    if (langs.length < 2) return;

    const baselineLang = langs[0];
    const baselineKeys = new Set(Object.keys(this.translations[baselineLang]));

    langs.slice(1).forEach(lang => {
      const langKeys = new Set(Object.keys(this.translations[lang]));
      const missingInLang = [...baselineKeys].filter(k => !langKeys.has(k));
      const extraInLang = [...langKeys].filter(k => !baselineKeys.has(k));

      if (missingInLang.length || extraInLang.length) {
        console.warn(
          `[I18n] Key parity warning vs ${baselineLang} -> ${lang}`,
          {
            missing: missingInLang,
            extra: extraInLang
          }
        );
      }
    });
  },

  validateAudienceOverrideParity() {
    Object.entries(this.audienceOverrides).forEach(([lang, byAudience]) => {
      const base = this.translations[lang] || {};

      Object.entries(byAudience).forEach(([audience, overrides]) => {
        const missingBaseKeys = Object.keys(overrides).filter(key => base[key] === undefined);
        if (missingBaseKeys.length) {
          console.warn(
            `[I18n] Audience override keys missing from base translations for ${lang}/${audience}`,
            missingBaseKeys
          );
        }
      });
    });
  },

  getActiveAudience() {
    if (typeof Audience !== 'undefined' && Audience && Audience.mode) {
      return Audience.mode;
    }
    return 'public';
  },

  getCurrentLanguageTranslations() {
    return this.translations[this.currentLang] || {};
  },

  getCurrentAudienceOverrides() {
    return this.audienceOverrides[this.currentLang]?.[this.getActiveAudience()] || {};
  },

  getMergedTranslations() {
    const audience = this.getActiveAudience();
    const cacheKey = `${this.currentLang}:${audience}`;
    if (this.mergedTranslationsCache[cacheKey]) {
      return this.mergedTranslationsCache[cacheKey];
    }

    const base = this.getCurrentLanguageTranslations();
    const overrides = this.getCurrentAudienceOverrides();
    const merged = { ...base, ...overrides };
    this.mergedTranslationsCache[cacheKey] = merged;
    return merged;
  },

  getAudienceSectionOverrides(sectionName) {
    const overrides = this.getCurrentAudienceOverrides();
    return Object.entries(overrides).reduce((acc, [key, value]) => {
      if (this.getSectionNameForKey(key) === sectionName) {
        acc[key] = value;
      }
      return acc;
    }, {});
  },

  getResolvedValue(translationsMap, key) {
    if (translationsMap[key] !== undefined) return translationsMap[key];
    const audienceKey = `${key}.${this.getActiveAudience()}`;
    if (translationsMap[audienceKey] !== undefined) return translationsMap[audienceKey];
    return undefined;
  },

  applyTextTranslations(translationsMap) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = this.getResolvedValue(translationsMap, key);
      if (value === undefined) return;

      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });
  },

  applyPlaceholderTranslations(translationsMap) {
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const value = this.getResolvedValue(translationsMap, key);
      if (value !== undefined) el.placeholder = value;
    });
  },

  applyLanguageButtonState() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
    });
  },

  runPostApplyHooks() {
    // Re-apply audience visibility after i18n HTML injection.
    if (typeof Audience !== 'undefined' && Audience && typeof Audience.applyVisibility === 'function') {
      Audience.applyVisibility();
    }

    this.applyModuleListLeadStyles();
  },

  apply() {
    const translationsMap = this.getMergedTranslations();
    this.applyTextTranslations(translationsMap);
    this.applyPlaceholderTranslations(translationsMap);
    this.applyLanguageButtonState();

    // Update HTML lang attribute
    document.documentElement.lang = this.currentLang;
    document.documentElement.setAttribute('data-lang', this.currentLang);
    this.runPostApplyHooks();
    document.dispatchEvent(new CustomEvent('i18n:applied'));
  },

  applyModuleListLeadStyles() {
    document.querySelectorAll('.module-body p.module-list-lead').forEach(p => {
      p.classList.remove('module-list-lead');
    });

    document.querySelectorAll('.module-body p').forEach(p => {
      const next = p.nextElementSibling;
      if (!next) return;
      if (next.tagName === 'UL' || next.tagName === 'OL') {
        p.classList.add('module-list-lead');
      }
    });
  },

  t(key) {
    const translationsMap = this.getMergedTranslations();
    return this.getResolvedValue(translationsMap, key) || key;
  },

  tSection(sectionName) {
    const baseSection = this.translationSections[this.currentLang]?.[sectionName] || {};
    return {
      ...baseSection,
      ...this.getAudienceSectionOverrides(sectionName)
    };
  }
};
