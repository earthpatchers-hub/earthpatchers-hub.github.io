const MissionUI = (() => {
  const copy = {
    labels: {
      en: {
        quickMission: "Quick Mission",
        mediumMission: "Medium Mission",
        habitMission: "Habit Mission",
        communityMission: "Community Mission",
        habitChallengeOneDay: "Habit Challenge (1 day)",
        communityInvestigationMission: "Community Investigation Mission",
        learningMission: "Learning Mission",
        buildMission: "Build Mission",
        natureMission: "Nature Mission",
        initiativeMission: "Initiative Mission",
        explorationMission: "Exploration Mission",
        researchMission: "Research Mission",
        learning: "Learning",
        home: "Home",
        outside: "Outside",
        giving: "Giving",
        nature: "Nature",
        homeSkills: "Home Skills",
        community: "Community",
        questBoard: "Mission Board",
        smallMissionsHeading: "Small Missions",
        mediumMissionsHeading: "Medium Missions",
        largeMissionsHeading: "Large Missions",
        smallIntro: "Small, clear missions you can do without an internet scavenger hunt. You save money, learn something useful, and yes - the planet gets a patch too.",
        mediumIntro: "Medium missions need a little more time, but they still stay practical, playful, and realistic for family life.",
        largeIntro: "Large missions are bigger adventures for shared effort, stronger planning, and visible local impact.",
        filtersHeading: "Filter Missions",
        sessionLengthFilter: "Session Length",
        recurrenceFilter: "Recurrence",
        typeFilter: "Type",
        difficultyFilter: "Difficulty",
        allSessionLengths: "Any session length",
        allRecurrences: "Any recurrence",
        allTypes: "Any type",
        allDifficulties: "Any difficulty",
        oneOff: "One-off",
        repeatedDays: "Repeated days",
        noResults: "No missions match these filters yet.",
        achievement: "Achievement",
        ageLabel: "Age",
        ageNote: "* Solo ages depend on parent or guardian agreement.",
        viewMore: "View More",
        back: "Back to Card",
        purpose: "Purpose",
        validation: "Validation",
        prep: "Prep",
        steps: "Steps",
        noPrep: "No special prep.",
        categoryHelp: {
          Learning: "Learning missions build useful habits and practical eco knowledge.",
          Home: "Home missions focus on simple actions you can do around the house.",
          Outside: "Outside missions bring the quest into parks, streets, and shared spaces.",
          Giving: "Giving missions help other people while extending the life of useful items.",
          Nature: "Nature missions build care, observation, and practical connection with living things.",
          "Home Skills": "Home Skills missions build practical confidence with everyday household tasks.",
          Community: "Community missions invite people to improve a shared place or solve something together."
        },
        typeHelp: {
          "Quick Mission": "Quick Missions are one-off quests you can finish in a short session.",
          "Medium Mission": "Medium Missions need a fuller session and usually lead to more visible progress.",
          "Habit Mission": "Habit Missions repeat over several days to build a lasting routine.",
          "Community Mission": "Community Missions are built for shared action, coordination, and visible local impact.",
          "Habit Challenge (1 day)": "A one-day challenge that changes how you move, choose, or act for a full day.",
          "Community Investigation Mission": "These missions combine action with observation so you can understand a local problem better.",
          "Learning Mission": "Learning Missions teach a practical skill through guided real-world action.",
          "Build Mission": "Build Missions create something useful for nature, animals, or shared spaces.",
          "Nature Mission": "Nature Missions focus on care, restoration, and hands-on support for living systems.",
          "Initiative Mission": "Initiative Missions help you start a change with other people or institutions.",
          "Exploration Mission": "Exploration Missions help you discover, join, and learn from real environmental activity.",
          "Research Mission": "Research Missions investigate systems, choices, or providers so action can be smarter later."
        },
        difficultyHelp: {
          1: "Difficulty 1: very accessible, beginner-friendly, and easy to start.",
          2: "Difficulty 2: still approachable, but needs more time, planning, or support.",
          3: "Difficulty 3: more demanding and best for confident mission explorers."
        }
      },
      ro: {
        quickMission: "Misiune Rapidă",
        mediumMission: "Misiune Medie",
        habitMission: "Misiune de Obicei",
        communityMission: "Misiune de Comunitate",
        habitChallengeOneDay: "Provocare de Obicei (1 zi)",
        communityInvestigationMission: "Misiune de Investigație Comunitară",
        learningMission: "Misiune de Învățare",
        buildMission: "Misiune de Construcție",
        natureMission: "Misiune de Natură",
        initiativeMission: "Misiune de Inițiativă",
        explorationMission: "Misiune de Explorare",
        researchMission: "Misiune de Cercetare",
        learning: "Învățare",
        home: "Acasă",
        outside: "Afară",
        giving: "Dăruire",
        nature: "Natură",
        homeSkills: "Abilități de Acasă",
        community: "Comunitate",
        questBoard: "Tabla de Misiuni",
        smallMissionsHeading: "Misiuni Mici",
        mediumMissionsHeading: "Misiuni Medii",
        largeMissionsHeading: "Misiuni Mari",
        smallIntro: "Misiuni mici și clare, pe care le poți face fără un scavenger hunt pe internet. Economisești bani, înveți ceva util și da - și planeta primește un patch.",
        mediumIntro: "Misiunile medii cer puțin mai mult timp, dar rămân practice, jucăușe și realiste pentru viața de familie.",
        largeIntro: "Misiunile mari sunt aventuri mai ample, pentru efort împărțit, planificare mai serioasă și impact local vizibil.",
        filtersHeading: "Filtrează Misiunile",
        sessionLengthFilter: "Durata Sesiunii",
        recurrenceFilter: "Recurență",
        typeFilter: "Tip",
        difficultyFilter: "Dificultate",
        allSessionLengths: "Orice durată",
        allRecurrences: "Orice recurență",
        allTypes: "Orice tip",
        allDifficulties: "Orice dificultate",
        oneOff: "O singură dată",
        repeatedDays: "Pe mai multe zile",
        noResults: "Nicio misiune nu se potrivește cu filtrele alese.",
        achievement: "Realizare",
        ageLabel: "Vârstă",
        ageNote: "* Vârstele pentru varianta singur depind de acordul părinților sau tutorilor.",
        viewMore: "Vezi mai mult",
        back: "Înapoi la card",
        purpose: "Scop",
        validation: "Validare",
        prep: "Pregătire",
        steps: "Pași",
        noPrep: "Nu ai nevoie de pregătire specială.",
        categoryHelp: {
          Learning: "Misiunile de Învățare formează obiceiuri utile și cunoștințe eco practice.",
          Home: "Misiunile de Acasă sunt acțiuni simple pe care le poți face în jurul casei.",
          Outside: "Misiunile de Afară duc aventura în parcuri, pe străzi și în spații comune.",
          Giving: "Misiunile de Dăruire îi ajută pe alții și prelungesc viața obiectelor utile.",
          Nature: "Misiunile de Natură dezvoltă grijă, observație și conexiune practică cu lucrurile vii.",
          "Home Skills": "Misiunile de Abilități de Acasă construiesc încredere practică în sarcinile de zi cu zi.",
          Community: "Misiunile de Comunitate invită oamenii să îmbunătățească un loc comun sau să rezolve ceva împreună."
        },
        typeHelp: {
          "Quick Mission": "Misiunile Rapide sunt questuri punctuale pe care le poți termina într-o sesiune scurtă.",
          "Medium Mission": "Misiunile Medii cer o sesiune mai serioasă și duc de obicei la un progres mai vizibil.",
          "Habit Mission": "Misiunile de Obicei se repetă mai multe zile ca să construiască o rutină bună.",
          "Community Mission": "Misiunile de Comunitate sunt gândite pentru acțiune împreună, coordonare și impact local vizibil.",
          "Habit Challenge (1 day)": "O provocare de o zi întreagă care schimbă felul în care te deplasezi, alegi sau acționezi.",
          "Community Investigation Mission": "Aceste misiuni combină acțiunea cu observația, ca să înțelegi mai bine o problemă locală.",
          "Learning Mission": "Misiunile de Învățare te învață o abilitate practică prin acțiune reală ghidată.",
          "Build Mission": "Misiunile de Construcție creează ceva util pentru natură, animale sau spații comune.",
          "Nature Mission": "Misiunile de Natură se concentrează pe grijă, refacere și sprijin direct pentru sisteme vii.",
          "Initiative Mission": "Misiunile de Inițiativă te ajută să pornești o schimbare alături de alți oameni sau instituții.",
          "Exploration Mission": "Misiunile de Explorare te ajută să descoperi, să te alături și să înveți din activități reale de mediu.",
          "Research Mission": "Misiunile de Cercetare investighează sisteme, alegeri sau furnizori, ca acțiunea de mai târziu să fie mai bine informată."
        },
        difficultyHelp: {
          1: "Dificultate 1: foarte accesibilă, potrivită pentru început și ușor de pornit.",
          2: "Dificultate 2: tot accesibilă, dar cere mai mult timp, planificare sau ajutor.",
          3: "Dificultate 3: mai solicitantă și mai potrivită pentru exploratori de misiuni cu experiență."
        }
      }
    },
    roSmall: {
      "button-wizard": { title: "Vrăjitorul Nasturilor", achievement: "Ucenicul Aței", summary: "Coase la loc un nasture lipsă sau slăbit pe o haină.", purpose: "Repari hainele în loc să le înlocuiești.", validation: "Încarcă o poză înainte și după.", age: "4+ cu ajutor / 7+ singur", prep: ["ac", "ață", "nasture"], steps: ["Găsește un nasture lipsă sau slăbit", "Coase nasturele bine", "Verifică dacă rezistă"] },
      "lights-ninja": { title: "Ninja Luminilor", achievement: "Ninja al Luminii", summary: "Stinge luminile când ieși din camere.", purpose: "Economisești electricitate și îți formezi atenția la energie.", validation: "Auto-verificare timp de 7 zile.", steps: ["Stinge lumina când ieși dintr-o cameră", "Fă o verificare rapidă seara", "Repetă timp de 7 zile"] },
      "toy-hospital": { title: "Spitalul Jucăriilor", achievement: "Doctor de Jucării", summary: "Repară o jucărie stricată în loc să o arunci.", purpose: "Învățăm reparația în locul înlocuirii.", validation: "Încarcă poză înainte și după.", age: "3+ cu părinte", prep: ["bandă adezivă sau lipici"], steps: ["Găsește o jucărie stricată", "Reparați-o împreună", "Verificați dacă merge din nou"] },
      "sock-detective": { title: "Detectivul Șosetelor", achievement: "Detectiv de Rufe", summary: "Găsește și potrivește șosetele rămase singure după spălat.", purpose: "Eviți să cumperi șosete noi fără rost.", validation: "Poză cu perechile găsite.", prep: ["coș de rufe"], steps: ["Adună șosetele fără pereche", "Potrivește perechile", "Pune-le înapoi în sertar"] },
      "fridge-detective": { title: "Detectivul Frigiderului", achievement: "Exploratorul Frigiderului", summary: "Găsește alimente care ar trebui mâncate curând.", purpose: "Reduci risipa alimentară.", validation: "Poză cu alimentele alese.", prep: ["deschide frigiderul"], steps: ["Verifică frigiderul", "Alege 3 alimente de mâncat curând", "Planifică să le folosești primele"] },
      "speedy-shower": { title: "Dușul Rapid", achievement: "Sprinterul Apei", summary: "Fă dușuri de sub cinci minute.", purpose: "Economisești apă și energia pentru încălzire.", validation: "Poză cu timerul sau auto-verificare.", prep: ["timer"], steps: ["Pornește timerul", "Terminǎ dușul în sub 5 minute", "Repetă timp de 5 zile"] },
      "mini-cleanup": { title: "Mini Curățenie în Parc", achievement: "Ajutor de Cartier", summary: "Strânge cel puțin 10 bucăți de gunoi.", purpose: "Spații comune mai curate.", validation: "Poză cu gunoiul strâns.", age: "4+ cu adult", prep: ["mănuși", "sac de gunoi"], steps: ["Alege o zonă mică afară", "Strânge 10 bucăți de gunoi", "Aruncă-le corect"] },
      "plant-guardian": { title: "Micul Gardian al Plantelor", achievement: "Starter de Semințe", summary: "Plantează semințe sau o plantă mică.", purpose: "Încurajezi spațiile verzi și grija pentru lucrurile vii.", validation: "Poză cu ghiveciul plantat.", prep: ["ghiveci", "pământ", "semințe"], steps: ["Pregătește pământul", "Plantează semințele", "Udă planta"] },
      "donation-adventure": { title: "Aventura Donației", achievement: "Inimă Generoasă", summary: "Donează cinci obiecte încă bune de folosit.", purpose: "Îi ajuți pe alții și prelungești viața obiectelor.", validation: "Poză la locul de donație.", age: "3+ cu părinții", prep: ["sac pentru donații"], steps: ["Alege cinci obiecte utile", "Pune-le în bagaj", "Du-le la centrul de donații"] },
      "book-traveler": { title: "Cartea Călătoare", achievement: "Dăruitor de Povești", summary: "Dă mai departe o carte citită.", purpose: "Încurajezi lectura și împărțirea lucrurilor bune.", validation: "Poză cu schimbul de carte.", prep: ["carte"], steps: ["Alege o carte terminată", "Dă-o mai departe cuiva"] },
      "leftover-champion": { title: "Campionul Resturilor Bune", achievement: "Salvator de Mâncare", summary: "Mănâncă resturile înainte să gătești altceva.", purpose: "Reduci risipa de mâncare.", validation: "Poză cu masa din resturi.", prep: ["resturi de mâncare"], steps: ["Verifică frigiderul", "Mănâncă întâi resturile", "Repetă timp de 3 zile"] },
      "standby-scout": { title: "Scout-ul Standby", achievement: "Scout de Energie", summary: "Găsește aparatele pe standby și oprește-le.", purpose: "Reduci risipa de electricitate.", validation: "Poză cu aparatul oprit.", prep: ["plimbare prin casă"], steps: ["Găsește aparate cu lumini de standby", "Întreabă un părinte dacă este sigur să le oprești", "Oprește aparatele aprobate"] }
    },
    roMedium: {
      "lunchbox-architect": { title: "Arhitectul Pachețelului", achievement: "Inginer de Gustări", summary: "Planifică și pregătește un pachețel de casă folosind ingrediente deja existente.", purpose: "Reduci ambalajele și înveți abilități de bază pentru pregătirea hranei.", validation: "Încarcă o poză cu pachețelul final.", age: "5+ cu ajutor / 8+ singur", prep: ["cutie reutilizabilă pentru pachet", "ingrediente din casă", "tocător", "cuțit (cu ajutor)"], steps: ["Uită-te în frigider și cămară", "Planifică un prânz simplu cu ingredientele disponibile", "Pregătește mâncarea", "Pune-o în recipiente reutilizabile"] },
      "plant-care-apprentice": { title: "Ucenicul Îngrijirii Plantelor", achievement: "Șoptitorul Plantelor", summary: "Învață de ce are nevoie o plantă și îngrijește-o corect timp de o săptămână.", purpose: "Înțelegi că plante diferite au nevoie de îngrijire diferită.", validation: "Încarcă o poză a plantei în ziua 1 și în ziua 7.", age: "4+ cu ajutor / 7+ singur", prep: ["plantă", "apă", "caiet sau telefon pentru a căuta informații despre plantă"], steps: ["Identifică specia plantei", "Caută ce nevoi de îngrijire are", "Ud-o sau îngrijește-o după aceste nevoi", "Observă cum se schimbă planta"] },
      "laundry-weather-wizard": { title: "Vrăjitorul Rufelor la Aer", achievement: "Powered by Wind", summary: "Usucă hainele la aer în loc să folosești uscătorul, ori de câte ori se poate.", purpose: "Economisești electricitate și prelungești viața hainelor.", validation: "Încarcă o poză cu hainele puse la uscat pe suport sau pe sfoară.", age: "6+ cu ajutor / 9+ singur", prep: ["uscător de rufe sau sfoară", "haine spălate"], steps: ["Spală hainele normal", "Pune-le la uscat", "Observă dacă se usucă mai repede la soare sau la umbră"] },
      "fridge-organizer": { title: "Organizatorul Frigiderului", achievement: "Rezolvatorul Cazurilor Reci", summary: "Organizează un raft din frigider ca mâncarea să nu fie uitată.", purpose: "Reduci risipa alimentară și găsești mai ușor mâncarea.", validation: "Încarcă o poză înainte și după a raftului din frigider.", age: "6+ cu ajutor / 9+ singur", prep: ["lavetă pentru curățat", "cutie sau tavă"], steps: ["Scoate lucrurile de pe un raft", "Grupează alimentele similare", "Pune mâncarea mai veche în față", "Curăță raftul"] },
      "bike-explorer": { title: "Exploratorul pe Bicicletă", achievement: "Călător pe Picioarele Lui", summary: "Înlocuiește o deplasare scurtă cu mașina prin mers pe jos sau cu bicicleta.", purpose: "Reduci emisiile și îți formezi obiceiuri sănătoase.", validation: "Încarcă o poză cu destinația ta.", age: "6+ cu ajutor / 12-16 singur, în funcție de părinți", prep: ["bicicletă sau pantofi de mers", "cască (dacă mergi cu bicicleta)"], steps: ["Alege o destinație apropiată", "Mergi acolo pe bicicletă sau pe jos", "Observă ce vezi în jurul tău"] },
      "recycling-sort-master": { title: "Maestrul Sortării pentru Reciclare", achievement: "Specialist în Sortare", summary: "Sortează corect un sac întreg de reciclare din casă.", purpose: "Înveți reciclarea corectă și eviți contaminarea.", validation: "Încarcă o poză cu reciclarea sortată.", age: "6+ cu ajutor / 9+ singur", prep: ["sac cu reciclare", "containere de reciclare"], steps: ["Golește sacul de reciclare", "Separă hârtia", "Separă plasticul", "Separă metalul", "Separă sticla", "Pune-le în containerele corecte"] },
      "backpack-detective": { title: "Detectivul Ghiozdanului", achievement: "Exploratorul Genții", summary: "Verifică-ți ghiozdanul zilnic ca să nu uiți mâncare sau dezordine în el.", purpose: "Reduci risipa de mâncare și îți formezi obiceiuri de organizare.", validation: "Încarcă o poză cu ghiozdanul curățat.", age: "5+ cu ajutor / 8+ singur", prep: ["ghiozdan"], steps: ["Golește geanta zilnic", "Scoate ambalajele și mâncarea rămasă", "Pune la loc lucrurile utile"] },
      "packaging-detective": { title: "Detectivul Ambalajelor", achievement: "Investigatorul Deșeurilor", summary: "Analizează ambalajele unor produse din casă și caută alternative mai bune.", purpose: "Îți ajuți familia să observe ambalajele inutile.", validation: "Încarcă poze cu trei produse ambalate pe care le-ai analizat.", age: "6+ cu ajutor / 9+ singur", prep: ["produse ambalate din casă"], steps: ["Alege trei produse ambalate", "Examinează ambalajul", "Discută cum ar putea fi cumpărate cu mai puțin ambalaj"] },
      "repair-apprentice": { title: "Ucenicul Reparațiilor", achievement: "Fix-It Apprentice", summary: "Învață cum să repari un obiect de zi cu zi.", purpose: "Încurajezi reparația în locul înlocuirii.", validation: "Încarcă poze înainte și după.", age: "7+ cu ajutor / 10+ singur", prep: ["obiect de reparat", "unelte simple"], steps: ["Identifică problema", "Învață cum poate fi reparată", "Încearcă reparația"] },
      "garden-helper": { title: "Ajutorul din Grădină", achievement: "Gardianul Grădinii", summary: "Ajută la îngrijirea unei grădini sau a plantelor de afară.", purpose: "Te conectezi cu natura și înțelegi îngrijirea plantelor.", validation: "Încarcă o poză cu munca făcută în grădină.", age: "5+ cu ajutor / 8+ singur", prep: ["stropitoare", "mănuși", "unelte mici"], steps: ["Udă plantele", "Scoate buruienile", "Curăță zona"] },
      "neighborhood-pathfinder": { title: "Căutătorul Drumurilor din Cartier", achievement: "Explorator Local", summary: "Explorează cartierul și identifică locuri utile din comunitate.", purpose: "Îi ajută pe copii să învețe despre comunitatea lor locală.", validation: "Încarcă o poză cu unul dintre locurile descoperite.", age: "6+ cu ajutor / 9+ singur", prep: ["pantofi de mers"], steps: ["Plimbă-te prin zonă", "Găsește locuri utile (parc, bibliotecă, magazin)"] },
      "family-energy-audit": { title: "Auditul de Energie al Familiei", achievement: "Investigatorul Energiei", summary: "Inspectează casa și identifică risipa de energie.", purpose: "Îți ajuți familia să observe cum este folosită energia acasă.", validation: "Încarcă poze cu trei îmbunătățiri făcute.", age: "7+ cu ajutor / 10+ singur", prep: ["caiet", "acces la aparatele din casă"], steps: ["Mergi prin casă", "Identifică folosirea inutilă a energiei", "Propune îmbunătățiri"] }
    },
    roLarge: {
      "tree-planting-explorer": { title: "Exploratorul Plantării de Copaci", achievement: "Pornitor de Rădăcini", summary: "Plantează copaci pentru a îmbunătăți biodiversitatea și spațiile verzi.", purpose: "Plantează copaci pentru a îmbunătăți biodiversitatea și spațiile verzi.", validation: "Încarcă o poză cu copacul plantat și cu activitatea de plantare.", age: "6+ cu ajutor / 10+ singur", prep: ["lopată", "mănuși", "apă", "copac tânăr sau puiet"], steps: ["Găsește un eveniment de plantare sau un loc potrivit pentru plantare.", "Sapă groapa pentru plantare.", "Plantează copacul corect.", "Udă copacul după plantare."] },
      "car-free-explorer-day": { title: "Ziua Exploratorului Fără Mașină", achievement: "Înlocuitor de Drumuri", summary: "Petrece o zi înlocuind drumurile cu mașina prin mers pe jos, bicicletă sau transport public.", purpose: "Redu emisiile înlocuind drumurile cu mașina prin mers pe jos, bicicletă sau transport public.", validation: "Încarcă poze care arată trei drumuri făcute fără mașină.", age: "8+ cu ajutor / 14-18 singur, în funcție de părinți", prep: ["bicicletă, pantofi de mers sau transport public"], steps: ["Planifică o zi fără să folosești mașina.", "Fă cel puțin trei drumuri fără mașină."] },
      "neighbourhood-cleanup-investigators": { title: "Investigatorii Curățeniei din Cartier", achievement: "Vânător de Indicii despre Gunoi", summary: "Curăță o zonă publică și investighează de ce apare gunoiul acolo.", purpose: "Curăță o zonă publică și investighează de ce apare gunoiul acolo.", validation: "Încarcă o poză cu zona curățată și o scurtă explicație despre cauza apariției gunoiului.", age: "8+ cu ajutor / 12+ singur", prep: ["mănuși", "saci de gunoi", "telefon sau caiet"], steps: ["Curăță o zonă cu gunoi sau parcul tău local preferat.", "Observă unde apare gunoiul cel mai des.", "Identifică cauza probabilă a apariției gunoiului.", "Fă o îmbunătățire care să reducă problema."] },
      "repair-cafe-apprentice": { title: "Ucenicul Cafenelei de Reparații", achievement: "Învățăcel de Atelier", summary: "Învață abilități de reparat și prelungește viața obiectelor.", purpose: "Învață abilități de reparat și prelungește viața obiectelor.", validation: "Încarcă o poză cu obiectul înainte și după reparație.", age: "10+ cu ajutor / 14+ singur", prep: ["obiect stricat", "unelte de reparat sau acces la un atelier de reparații"], steps: ["Vizitează un repair cafe sau un atelier de reparații.", "Lucrează cu cineva experimentat pentru a repara obiectul.", "Finalizează reparația."] },
      "little-animal-architect": { title: "Micul Arhitect al Animalelor", achievement: "Constructor de Habitat", summary: "Construiește un adăpost sau un suport de hrănire pentru animale mici.", purpose: "Construiește un adăpost sau un suport de hrănire pentru animale mici.", validation: "Încarcă o poză cu structura finalizată, instalată afară.", age: "8+ cu ajutor / 12+ singur", prep: ["căsuță de păsări, hrănitoare pentru veverițe sau hotel pentru insecte", "lemn sau materiale reciclate", "șuruburi sau lipici", "unelte de bază"], steps: ["Construiește adăpostul sau hrănitoarea.", "Instalează-l în siguranță afară."] },
      "wild-meadow-starter": { title: "Pornitorul Pajiștii Sălbatice", achievement: "Ghid pentru Polenizatori", summary: "Creează o pajiște temporară cu flori sălbatice pentru polenizatori.", purpose: "Creează o pajiște temporară cu flori sălbatice pentru polenizatori.", validation: "Încarcă o poză cu terenul înainte de plantare și cu zona plantată.", age: "6+ cu ajutor / 10+ singur", prep: ["semințe de flori sălbatice", "greblă sau lopată", "apă"], steps: ["Găsește un teren nefolosit, potrivit pentru plantare.", "Obține permisiune dacă este nevoie.", "Pregătește solul.", "Împrăștie semințele de flori sălbatice.", "Udă zona."] },
      "community-swap-day-organizer": { title: "Organizatorul Zilei de Schimb din Comunitate", achievement: "Gazdă a Refolosirii", summary: "Încurajează refolosirea organizând un eveniment de schimb.", purpose: "Încurajează refolosirea organizând un eveniment de schimb.", validation: "Încarcă o poză de la evenimentul de schimb.", age: "12+ cu ajutor / 16+ singur", prep: ["masă sau spațiu comun", "obiecte pentru schimb", "participanți"], steps: ["Alege o locație.", "Invită participanții să aducă obiecte.", "Organizează obiectele pe categorii.", "Desfășoară evenimentul de schimb."] },
      "river-or-beach-guardian": { title: "Gardianul Râului sau al Plajei", achievement: "Salvator de Maluri", summary: "Îndepărtează deșeurile din râuri, lacuri sau de pe plaje.", purpose: "Îndepărtează deșeurile din râuri, lacuri sau de pe plaje.", validation: "Încarcă o poză cu deșeurile colectate.", age: "8+ cu ajutor / 12+ singur", prep: ["mănuși", "saci de gunoi", "protecție solară"], steps: ["Alege o zonă de râu, lac sau plajă.", "Colectează gunoiul în siguranță.", "Aruncă deșeurile colectate în mod corect."] },
      "food-rescue-helper": { title: "Ajutorul Salvării de Mâncare", achievement: "Ajutor în Fluxul Hranei", summary: "Redu risipa alimentară ajutând la redistribuirea alimentelor.", purpose: "Redu risipa alimentară ajutând la redistribuirea alimentelor.", validation: "Încarcă o poză cu participarea la salvarea sau distribuirea alimentelor.", age: "10+ cu ajutor / 14+ singur", prep: ["sacoșe sau recipiente reutilizabile"], steps: ["Alătură-te unui grup de salvare a alimentelor sau unei activități de tip food bank.", "Ajută la sortarea sau distribuirea alimentelor."] },
      "school-sustainability-starter": { title: "Pornitorul Sustenabilității la Școală", achievement: "Scânteie de Schimbare", summary: "Pornește o îmbunătățire de sustenabilitate în școală.", purpose: "Pornește o îmbunătățire de sustenabilitate în școală.", validation: "Încarcă o poză sau o descriere a inițiativei.", age: "12+", prep: ["idee de îmbunătățire", "discuție cu un profesor sau membru al personalului"], steps: ["Identifică o îmbunătățire de sustenabilitate pentru școală.", "Discut-o cu un profesor sau cu un membru al personalului.", "Fă o îmbunătățire concretă."] },
      "planet-mission-scout": { title: "Cercetașul Misiunilor pentru Planetă", achievement: "Căutător de Trasee ONG", summary: "Participă la o activitate de mediu organizată de un ONG.", purpose: "Participă la o activitate de mediu organizată de un ONG.", validation: "Încarcă o poză de la activitate.", age: "10+ cu ajutor / 14+ singur", prep: ["găsește un eveniment local de mediu"], steps: ["Găsește o activitate de mediu organizată de un ONG.", "Participă la activitate."] },
      "energy-provider-investigator": { title: "Investigatorul Furnizorului de Energie", achievement: "Întrebătorul de Energie", summary: "Cercetează furnizorul de electricitate al casei și explorează opțiuni regenerabile.", purpose: "Cercetează furnizorul de electricitate al casei și explorează opțiuni regenerabile.", validation: "Încarcă o captură cu furnizorul actual și o captură cu opțiunile regenerabile sau cu mesajul trimis furnizorului.", age: "12+ cu ajutor / 15+ singur", prep: ["factură de electricitate", "acces la internet"], steps: ["Identifică furnizorul tău de electricitate.", "Cercetează opțiunile de energie regenerabilă.", "Dacă există, explorează schimbarea furnizorului.", "Dacă nu există, contactează furnizorul și cere opțiuni regenerabile."] }
    }
  };

  const state = {
    small: { sessionLength: "all", recurrence: "all", type: "all", difficulty: "all" },
    medium: { sessionLength: "all", recurrence: "all", type: "all", difficulty: "all" },
    large: { sessionLength: "all", recurrence: "all", type: "all", difficulty: "all" }
  };

  const collections = {
    small: {
      dataKey: "SmallMissions",
      sectionId: "small-missions",
      filterId: "mission-filters",
      gridId: "mission-grid",
      titleKey: "smallMissionsHeading",
      introKey: "smallIntro",
      roDataKey: "roSmall"
    },
    medium: {
      dataKey: "MediumMissions",
      sectionId: "medium-missions-board",
      filterId: "medium-mission-filters",
      gridId: "medium-mission-grid",
      titleKey: "mediumMissionsHeading",
      introKey: "mediumIntro",
      roDataKey: "roMedium"
    },
    large: {
      dataKey: "LargeMissions",
      sectionId: "large-missions-board",
      filterId: "large-mission-filters",
      gridId: "large-mission-grid",
      titleKey: "largeMissionsHeading",
      introKey: "largeIntro",
      roDataKey: "roLarge"
    }
  };

  function renderCollection(name) {
    const config = collections[name];
    const missions = window[config.dataKey];
    const container = document.getElementById(config.gridId);
    if (!missions || !container) return;

    const lang = getCurrentLang();
    const labels = copy.labels[lang];
    const filters = state[name];
    const section = document.getElementById(config.sectionId);

    if (section) {
      const heading = section.querySelector("h2");
      const intro = section.querySelector(".mission-intro");
      if (heading) heading.textContent = labels.questBoard;
      if (intro) intro.textContent = labels[config.introKey];
    }

    renderFilters(name, missions, labels, config.filterId);

    container.innerHTML = "";
    const filtered = getFilteredMissions(missions, filters);
    if (!filtered.length) {
      container.innerHTML = `<p class="missions-empty">${labels.noResults}</p>`;
      return;
    }

    filtered.forEach((mission) => {
      const content = getMissionContent(mission, lang, config.roDataKey, labels);
      const card = document.createElement("article");
      card.className = "mission-card";
      card.dataset.missionId = `${name}-${mission.id}`;
      const imageSrc = mission.image || (mission.badge ? `assets/badges/${mission.badge}.svg` : "");
      const imageClass = mission.image
        ? ` mission-image--cover${mission.imageFit === "contain" ? " mission-image--contain" : ""}`
        : mission.badge
          ? ""
          : " mission-image--empty";
      const imageMarkup = imageSrc ? `<img src="${imageSrc}" alt="${content.title}">` : "";
      const imageStyle = mission.image
        ? ` style="--mission-cover-scale:${mission.imageScale || 1.09};--mission-cover-position:${mission.imagePosition || "center center"};"`
        : "";

      card.innerHTML = `
        <div class="mission-card__inner">
          <div class="mission-card__face mission-card__face--front">
            <div class="mission-image${imageClass}"${imageStyle}>
              ${imageMarkup}
            </div>
            <div class="mission-content">
              <h3>${content.title}</h3>
              <div class="mission-meta">
                <span class="chip chip--category" title="${getCategoryHelp(mission.category, labels)}">${content.category}</span>
                <span class="chip chip--type" title="${getTypeHelp(mission.type, labels)}">${content.type}</span>
                <span class="chip chip--difficulty" title="${getDifficultyHelp(mission.difficulty, labels)}"><img src="assets/mission-difficulty-star.svg" alt="${labels.difficultyFilter}" class="mission-chip__icon"> ${mission.difficulty}</span>
              </div>
              <div class="mission-stats">
                <span><img src="assets/mission-time-clock.svg" alt="${labels.sessionLengthFilter}" class="mission-stats__icon"> ${content.duration}</span>
                <span class="mission-stats__coins"><img src="assets/10_PC.png" alt="Patch Coins" class="mission-stats__coin"> ${mission.coins} PC</span>
                <span class="mission-stats__age"><img src="assets/mission-age-baby.svg" alt="${labels.ageLabel}" class="mission-stats__icon"> ${content.age}</span>
              </div>
              <p class="mission-summary">${content.summary}</p>
              <div class="mission-actions">
                <button class="mission-btn" type="button" data-mission-toggle="open">${labels.viewMore}</button>
              </div>
            </div>
          </div>
          <div class="mission-card__face mission-card__face--back">
            <div class="mission-backbar">
              <button class="mission-btn mission-btn--back mission-btn--backtop" type="button" data-mission-toggle="close">${labels.back}</button>
            </div>
            <div class="mission-content mission-content--back">
              <p class="mission-achievement"><span class="mission-achievement__label">${labels.achievement}:</span> ${content.achievement}</p>
              <div class="mission-details__block">
                <h4>${labels.purpose}</h4>
                <p>${content.purpose}</p>
              </div>
              <div class="mission-details__block">
                <h4>${labels.validation}</h4>
                <p>${content.validation}</p>
              </div>
              ${content.ageNote ? `
              <div class="mission-details__block">
                <h4>${labels.ageLabel}</h4>
                <p>${content.ageNote}</p>
              </div>` : ""}
              <div class="mission-details__block">
                <h4>${labels.prep}</h4>
                ${renderList(content.prep, labels.noPrep)}
              </div>
              <div class="mission-details__block mission-details__block--steps">
                <h4>${labels.steps}</h4>
                ${renderList(content.steps)}
              </div>
            </div>
          </div>
        </div>
      `;

      card.addEventListener("click", (event) => {
        if (event.target.closest("button")) return;
        flipMission(card, !card.classList.contains("mission-card--flipped"));
      });

      card.querySelectorAll("[data-mission-toggle]").forEach((button) => {
        button.addEventListener("click", (event) => {
          event.stopPropagation();
          flipMission(card, button.dataset.missionToggle === "open");
        });
      });

      container.appendChild(card);
    });
  }

  function renderFilters(name, missions, labels, rootId) {
    const root = document.getElementById(rootId);
    if (!root) return;

    syncFilters(name, missions);
    const filters = state[name];
    const lang = getCurrentLang();

    const sessionLengthOptions = getAvailableFilterValues(missions, filters, "sessionLength")
      .map((value) => `<option value="${value}" ${filters.sessionLength === value ? "selected" : ""}>${getDurationLabel(value, lang)}</option>`)
      .join("");
    const recurrenceOptions = getAvailableFilterValues(missions, filters, "recurrence")
      .map((value) => `<option value="${value}" ${filters.recurrence === value ? "selected" : ""}>${getRecurrenceLabel(value, labels)}</option>`)
      .join("");
    const typeOptions = getAvailableFilterValues(missions, filters, "type")
      .map((value) => `<option value="${value}" ${filters.type === value ? "selected" : ""}>${getTypeLabel(value, labels)}</option>`)
      .join("");
    const difficultyOptions = getAvailableFilterValues(missions, filters, "difficulty")
      .map((value) => `<option value="${value}" ${filters.difficulty === value ? "selected" : ""}>${value}</option>`)
      .join("");

    root.innerHTML = `
      <div class="missions-filters">
        <p class="missions-filters__title">${labels.filtersHeading}</p>
        <div class="missions-filters__controls">
          <label class="missions-filter">
            <span class="missions-filter__label">${labels.sessionLengthFilter}</span>
            <select class="missions-filter__select" data-collection="${name}" data-mission-filter="sessionLength">
              <option value="all">${labels.allSessionLengths}</option>
              ${sessionLengthOptions}
            </select>
          </label>
          <label class="missions-filter">
            <span class="missions-filter__label">${labels.recurrenceFilter}</span>
            <select class="missions-filter__select" data-collection="${name}" data-mission-filter="recurrence">
              <option value="all">${labels.allRecurrences}</option>
              ${recurrenceOptions}
            </select>
          </label>
          <label class="missions-filter">
            <span class="missions-filter__label">${labels.typeFilter}</span>
            <select class="missions-filter__select" data-collection="${name}" data-mission-filter="type">
              <option value="all">${labels.allTypes}</option>
              ${typeOptions}
            </select>
          </label>
          <label class="missions-filter">
            <span class="missions-filter__label">${labels.difficultyFilter}</span>
            <select class="missions-filter__select" data-collection="${name}" data-mission-filter="difficulty">
              <option value="all">${labels.allDifficulties}</option>
              ${difficultyOptions}
            </select>
          </label>
        </div>
      </div>
    `;

    root.querySelectorAll("[data-mission-filter]").forEach((select) => {
      select.addEventListener("change", (event) => {
        state[name][event.target.dataset.missionFilter] = event.target.value;
        renderCollection(name);
      });
    });
  }

  function getMissionContent(mission, lang, roDataKey, labels) {
    const roMission = copy[roDataKey]?.[mission.id] || {};
    return {
      title: lang === "ro" ? roMission.title || mission.title : mission.title,
      achievement: lang === "ro" ? roMission.achievement || mission.achievement : mission.achievement,
      summary: lang === "ro" ? roMission.summary || mission.summary : mission.summary,
      purpose: lang === "ro" ? roMission.purpose || mission.purpose : mission.purpose,
      validation: lang === "ro" ? roMission.validation || mission.validation : mission.validation,
      duration: getDurationLabel(mission.duration, lang),
      age: getCompactAgeLabel(lang === "ro" ? roMission.age || mission.age : mission.age, lang),
      ageNote: getAgeNote(lang === "ro" ? roMission.age || mission.age : mission.age, labels),
      category: getCategoryLabel(mission.category, labels),
      type: getTypeLabel(mission.type, labels),
      prep: lang === "ro" ? roMission.prep || mission.prep : mission.prep,
      steps: lang === "ro" ? roMission.steps || mission.steps : mission.steps
    };
  }

  function getCategoryLabel(category, labels) {
    return ({
      Learning: labels.learning,
      Home: labels.home,
      Outside: labels.outside,
      Giving: labels.giving,
      Nature: labels.nature,
      "Home Skills": labels.homeSkills,
      Community: labels.community
    })[category] || category;
  }

  function getTypeLabel(type, labels) {
    return ({
      "Quick Mission": labels.quickMission,
      "Medium Mission": labels.mediumMission,
      "Habit Mission": labels.habitMission,
      "Community Mission": labels.communityMission,
      "Habit Challenge (1 day)": labels.habitChallengeOneDay,
      "Community Investigation Mission": labels.communityInvestigationMission,
      "Learning Mission": labels.learningMission,
      "Build Mission": labels.buildMission,
      "Nature Mission": labels.natureMission,
      "Initiative Mission": labels.initiativeMission,
      "Exploration Mission": labels.explorationMission,
      "Research Mission": labels.researchMission
    })[type] || type;
  }

  function getCategoryHelp(category, labels) {
    return labels.categoryHelp?.[category] || category;
  }

  function getTypeHelp(type, labels) {
    return labels.typeHelp?.[type] || type;
  }

  function getDifficultyHelp(level, labels) {
    return labels.difficultyHelp?.[level] || String(level);
  }

  function renderList(items, emptyText = "") {
    if (!items || !items.length) return emptyText ? `<p>${emptyText}</p>` : "";
    return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  }

  function flipMission(card, shouldOpen) {
    card.classList.toggle("mission-card--flipped", shouldOpen);
  }

  function getFilteredMissions(missions, filters) {
    return missions.filter((mission) => {
      const sessionLengthMatches = filters.sessionLength === "all" || getMissionSessionLength(mission) === filters.sessionLength;
      const recurrenceMatches = filters.recurrence === "all" || getMissionRecurrence(mission) === filters.recurrence;
      const typeMatches = filters.type === "all" || mission.type === filters.type;
      const difficultyMatches = filters.difficulty === "all" || String(mission.difficulty) === filters.difficulty;
      return sessionLengthMatches && recurrenceMatches && typeMatches && difficultyMatches;
    });
  }

  function getAvailableFilterValues(missions, filters, filterKey) {
    const values = [...new Set(missions
      .filter((mission) => {
        if (filterKey !== "sessionLength" && filters.sessionLength !== "all" && getMissionSessionLength(mission) !== filters.sessionLength) return false;
        if (filterKey !== "recurrence" && filters.recurrence !== "all" && getMissionRecurrence(mission) !== filters.recurrence) return false;
        if (filterKey !== "type" && filters.type !== "all" && mission.type !== filters.type) return false;
        if (filterKey !== "difficulty" && filters.difficulty !== "all" && String(mission.difficulty) !== filters.difficulty) return false;
        return true;
      })
      .map((mission) => getMissionFilterValue(mission, filterKey))
      .filter(Boolean))];

    if (filterKey === "difficulty") return values.sort((a, b) => Number(a) - Number(b));
    const orderMap = {
      sessionLength: ["10 min", "10-15 min", "15 min", "15-20 min", "30-45 min", "45 min", "45-60 min", "60 min", "60-90 min", "1-2 hours", "2-3 hours", "2-4 hours", "3-4 hours", "2-3 hours planning", "full day"],
      recurrence: ["one-off", "repeated-days"],
      type: ["Quick Mission", "Medium Mission", "Habit Mission", "Community Mission", "Habit Challenge (1 day)", "Community Investigation Mission", "Learning Mission", "Build Mission", "Nature Mission", "Initiative Mission", "Exploration Mission", "Research Mission"]
    };
    return orderMap[filterKey] ? orderMap[filterKey].filter((value) => values.includes(value)) : values;
  }

  function syncFilters(name, missions) {
    ["sessionLength", "recurrence", "type", "difficulty"].forEach((filterKey) => {
      const current = state[name][filterKey];
      if (current === "all") return;
      if (!getAvailableFilterValues(missions, state[name], filterKey).includes(current)) {
        state[name][filterKey] = "all";
      }
    });
  }

  function getMissionFilterValue(mission, key) {
    if (key === "sessionLength") return getMissionSessionLength(mission);
    if (key === "recurrence") return getMissionRecurrence(mission);
    if (key === "type") return mission.type;
    if (key === "difficulty") return String(mission.difficulty);
    return "";
  }

  function getMissionSessionLength(mission) {
    return /days?$/i.test(mission.duration) ? "" : mission.duration;
  }

  function getMissionRecurrence(mission) {
    return /days?$/i.test(mission.duration) || mission.type === "Habit Mission" ? "repeated-days" : "one-off";
  }

  function getRecurrenceLabel(value, labels) {
    return value === "repeated-days" ? labels.repeatedDays : labels.oneOff;
  }

  function getDurationLabel(duration, lang) {
    const roMap = {
      "10 min": "10 min",
      "10-15 min": "10-15 min",
      "15 min": "15 min",
      "15-20 min": "15-20 min",
      "30-45 min": "30-45 min",
      "45 min": "45 min",
      "45-60 min": "45-60 min",
      "60 min": "60 min",
      "60-90 min": "60-90 min",
      "1-2 hours": "1-2 ore",
      "2-3 hours": "2-3 ore",
      "2-4 hours": "2-4 ore",
      "3-4 hours": "3-4 ore",
      "2-3 hours planning": "2-3 ore de planificare",
      "full day": "toată ziua",
      "3 days": "3 zile",
      "5 days": "5 zile",
      "7 days": "7 zile"
    };
    return lang === "ro" ? roMap[duration] || duration : duration;
  }

  function getCompactAgeLabel(age, lang) {
    if (!age) return age;

    if (lang === "ro") {
      return age
        .replace(/\s*cu ajutor\s*/g, " cu aj. ")
        .replace(/\s*singur,\s*în funcție de părinți/gi, " singur*")
        .replace(/\s*\/\s*/g, " / ")
        .replace(/\s{2,}/g, " ")
        .trim();
    }

    return age
      .replace(/\s*with help\s*/gi, " w/help ")
      .replace(/\s*solo depending on parents/gi, " solo*")
      .replace(/\s*\/\s*/g, " / ")
      .replace(/\s{2,}/g, " ")
      .trim();
  }

  function getAgeNote(age, labels) {
    return age && (/depending on parents|în funcție de părinți/i.test(age) || age.includes("*"))
      ? labels.ageNote
      : "";
  }

  function getCurrentLang() {
    return document.documentElement.getAttribute("data-lang") === "ro" ? "ro" : "en";
  }

  return {
    renderSmallMissions() { renderCollection("small"); },
    renderMediumMissions() { renderCollection("medium"); },
    renderLargeMissions() { renderCollection("large"); }
  };
})();

function renderSmallMissions() {
  MissionUI.renderSmallMissions();
}

function renderMediumMissions() {
  MissionUI.renderMediumMissions();
}

function renderLargeMissions() {
  MissionUI.renderLargeMissions();
}

function resetFlippedMissionCards() {
  document.querySelectorAll(".mission-card--flipped").forEach((card) => {
    card.classList.remove("mission-card--flipped");
  });
}

if (!window.__missionsI18nBound) {
  document.addEventListener("i18n:applied", () => {
    renderSmallMissions();
    renderMediumMissions();
    renderLargeMissions();
  });
  window.__missionsI18nBound = true;
}

if (!window.__missionsFlipResetBound) {
  window.addEventListener("hashchange", resetFlippedMissionCards);
  window.addEventListener("earthpatchers:routechange", resetFlippedMissionCards);
  window.__missionsFlipResetBound = true;
}
