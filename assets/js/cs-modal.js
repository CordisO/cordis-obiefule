/* ===== INTERSECTION OBSERVER ===== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); observer.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ===== CASE STUDY DATA ===== */
const caseStudies = {
    blahlo: {
    title: 'Blahlo: Learning Language the Way the Brain Wants To',
    label: '01 — Self-Directed Product & Instructional Design',
    sections: [
      {
        heading: 'The Question That Started It',
        text: `Blahlo was designed as a self-directed project. There was no client, no brief, and no team. The process began with a question I couldn't let go of: why do so many people fail to learn a language despite trying so hard?\n\nTo answer that, I studied how children acquire their first language, how existing language apps structure their lessons, and where the disconnect happens between memorization and understanding. That research led to the Concentric Learning Model, which became the instructional backbone of the entire app.`,
        images: [
          { type: 'single', src: 'assets/images/blahlo-1-first-iteration-screens.png', caption: 'First design iteration: splash screen, welcome with the Blah Family, and the lesson path.' }
        ]
      },
      {
        heading: 'The Concentric Learning Model',
        text: `Most apps teach vocabulary in whatever order fits a topic list — colors, then food, then travel — with no real logic connecting them. The Concentric Learning Model (CLM) instead structures learning the way a child actually expands their understanding of the world: starting at Self, then outward through Home & Family, Community & Transport, and finally Abstract Society.\n\nThe design implementation of this is what I call the Concentric Vertical Tree (CVT) — a learning path that looks familiar on the surface (a vertical node tree, similar to what learners already expect from language apps) but is structured underneath by the concentric rings, not an arbitrary topic list. Levels contain Units (a baseline of 4 per level), and Units contain Lessons (a baseline of 6 per unit).`,
        images: [
          { type: 'single', src: 'assets/images/blahlo-4-concentric-model.png', caption: 'The Concentric Learning Model: Self → Home & Family → Community & Transport → Abstract Society.' },
          { type: 'single', src: 'assets/images/blahlo-5-learning-architecture-doc.png', caption: 'From the internal product documentation — the CLM/CVT learning architecture.' }
        ]
      },
      {
        heading: 'Curriculum Mapping',
        text: `I mapped vocabulary and concepts to the three concentric circles in the order a child would naturally encounter them. For an Indonesian Level 1 — "The Self" — that means phonetics, senses, and direct needs: vowel and consonant precision first, then base numbers and counting, then pronouns and core internal states, then how to express direct needs and negation.\n\nLevel 2, "The Home," moves outward into micro-social structure — possessive syntax and household vocabulary. Nothing is introduced before the learner has the foundation to actually use it.`,
        images: [
          { type: 'single', src: 'assets/images/blahlo-6-curriculum-example-doc.png', caption: 'Curriculum mapping for Indonesian Level 1: The Self.' }
        ]
      },
      {
        heading: 'The Lesson Rhythm',
        text: `Every lesson follows the same four-part rhythm: Context, which sets the scene; Notice, which shows the pattern; Practice, where the learner types, speaks, and builds; and Confirm, which requires them to actually prove understanding.\n\nA few rules sit underneath this rhythm: active production is required throughout — speaking, typing, building, not just tapping a multiple-choice option — and progression is mastery-based, gated by understanding rather than repetition or a "hearts" system. Feedback isn't just right-or-wrong; it carries insight and reinforces the pattern being taught. Review is embedded directly into later lessons rather than appended as separate review sessions.`,
        images: [
          { type: 'single', src: 'assets/images/blahlo-2-lesson-rhythm.png', caption: 'The Blahlo Lesson Rhythm: Context → Notice → Practice → Confirm.' }
        ]
      },
      {
        heading: 'Context Over Memorization',
        text: `The instructional flaw I kept finding in existing apps was decontextualized vocabulary — a word on one side, its translation on the other, repeated until it sticks. That teaches recall, not understanding.\n\nBlahlo instead introduces vocabulary inside a scene: characters using the word the way it's actually spoken, with the meaning legible from context rather than a translation key. The goal is for the learner to focus on meaning, not navigation or rote pattern-matching.`,
        images: [
          { type: 'single', src: 'assets/images/blahlo-3-contextualized-comparison.png', caption: 'Before / after: rote translation pairs vs. vocabulary introduced in context.' }
        ]
      },
      {
        heading: 'The Screens in Practice',
        text: `Each scene was structured to be predictable and emotionally legible, so learners could focus on meaning rather than figuring out navigation. The Blah Family mascot stays present through exercises, and feedback is immediate and color-coded — a clear "Great job!" or "That's right" in green, a gentle correction in red, never a dead end.`,
        images: [
          { type: 'single', src: 'assets/images/blahlo-7-figma-screens-a.png', caption: 'Vowel-sound recognition exercises, built in Figma.' },
          { type: 'single', src: 'assets/images/blahlo-8-figma-screens-b.png', caption: 'Sound-identification quiz cards with immediate, color-coded feedback.' }
        ]
      },
      {
        heading: 'Documentation & What\'s Next',
        text: `I rewrote the full design documentation twice as the framework evolved, refining the instructional logic until it was coherent and scalable. That documentation now covers the learning architecture, scene structure, reward metrics, monetization strategy, and character design for the Blah Family — the foundation for turning this from a design framework into a built product.`
      }
    ],
    tech: ['Instructional Design', 'Figma', 'UX Research', 'Product Strategy']
  },
  ankidroid: {
    title: 'AnkiDroid Mobile App Redesign',
    label: '02 — Learning App UX Redesign',
    sections: [
      {
        heading: 'The Problem: Why I redesigned AnkiDroid',
        text: `I redesigned AnkiDroid because the app felt confusing and difficult to use, especially for new users. When I first used it, I did not understand what the app was for or how to start learning.\n\nThis is especially challenging for users with ADHD or Dyslexia, where too much information and unclear language can make it hard to focus.\n\nWhat I found:\n• The app lacks clear storytelling — users don’t understand how it works at first.\n• Terms like “Deck” are confusing and not beginner-friendly.\n• The interface feels outdated and visually unengaging.\n• Too many options are shown too early, which creates overwhelm.`,
        images: [
          { type: 'single', src: 'assets/images/anki-1.png', caption: 'The original interface feels complex and unclear for first-time users.' }
        ]
      },
      {
        heading: 'The Design: Making learning simple and clear',
        text: `I wanted the app to feel simple, human, and easy to understand from the first screen. Instead of overwhelming users, I focused on guiding them step-by-step.\n\nHow I made it better:\n• Clear Onboarding: I introduced a short onboarding flow that explains how memory works in a simple and relatable way.\n• Better Language: I replaced technical terms like “Deck” with “Study Topic” to make the app easier to understand.\n• Guided First Steps: Instead of showing all features at once, I guided users to create their first flashcard immediately.\n• Clean Layout: I used more spacing and simpler layouts to reduce visual noise and improve focus.`,
        images: [
          { type: 'single', src: 'assets/images/anki-2.png', caption: 'Onboarding screens that explain the app in a simple and engaging way.' }
        ]
      },
      {
        heading: 'Features: Reducing overwhelm and improving focus',
        text: `I focused on features that help users stay focused and understand what to do next. The goal was to remove confusion and make the experience feel calm.\n\nSpecific improvements:\n• Friendly Empty States: Instead of “You have no decks yet,” I used clear guidance like “Create a study topic to start learning.”\n• Step-by-Step Flow: Users are guided from creating a topic → adding a flashcard → studying it.\n• Simplified Actions: I reduced unnecessary options and only showed what the user needs at each step.\n• Accessible Design: I used short sentences, clear hierarchy, and readable layouts to support users with ADHD and Dyslexia.`,
        images: [
          { type: 'single', src: 'assets/images/anki-3.png', caption: 'A simplified home screen with clear next actions.' },
          { type: 'single', src: 'assets/images/anki-4.png', caption: 'Creating a flashcard is simple and focused.' }
        ]
      },
      {
        heading: 'Next Steps: What I learned',
        text: `This project taught me that good design is not about adding more features, but about reducing confusion.\n\nWhat I learned:\n• Simplicity is powerful — removing complexity improves usability.\n• Language matters — small wording changes can make a big difference.\n• First impressions are critical — onboarding shapes the entire experience.\n• Not everything needs to be redesigned — improving key moments is often enough.\n\nMy goal is to continue improving this design by testing it with real users and refining how information is introduced.\n\nThe biggest lesson: design should guide the user naturally without making them think too hard.`
      }
    ],
    tech: ['Figma']
  },
  sportlingo: {
    title: 'Sportlingo Audit: Stripping Away Founder Bias',
    label: '03 — UX Audit & Product Redesign',
    sections: [
      {
        heading: 'The "Founder\'s Trap" (The Challenge)',
        text: `When I first opened Sportlingo, I encountered an app suffering from a severe identity crisis. The founder had a bold vision: to build the "Duolingo for Sports."\n\nIn theory, that sounds exciting. In practice, it resulted in a heavily over-engineered, cluttered interface that confused every user who used it. It was a language-learning game bolted onto a sports education subject. The app was packed with features the founder wanted (AI chatbots, complex team management hubs, a cluttered marketplace selling $500 sponsorships) but lacked the core structure that the user actually needed.\n\nAs a UX strategist and product designer, my first job was not to "make the buttons green." My job was to audit why these features existed in the first place, challenge the founder's assumptions, and ruthlessly cut the clutter to serve the actual user.`
      },
      {
        heading: 'The "Impractical" vs. "Practical" UX',
        text: `To show the founder exactly where the product was failing, I mapped out the gap between the "Founder's Dreams" and the "User's Reality."\n\nThe Impractical UX (What the Founder Built):\n• A registration screen with 6 required fields, including a mysterious "Team Code" with no explanation.\n• A "Marketplace" homepage that displayed paid lesson packs ($19.99) before the user had even learned their first rule.\n• A duplicate Duolingo-style quiz feedback system that answered a sports mechanic with a single, passive sentence.\n• A prominent AI chatbot asking users to "Ask me anything" before they had any context to ask questions.\n\nThe Practical UX (What the User Actually Needs):\n• A welcoming onboarding flow with only 2 essential fields (Email + Password).\n• A homepage built around a progressive "learning node" path, rather than a confusing storefront.\n• A central, visual feedback modal that transformed a simple correct answer into a "micro-learning moment."\n• A simplified bottom navigation that immediately points the user to their lesson, rather than a confusing array of icons.`
      },
      {
        heading: 'Information Architecture: Onboarding',
        text: `Sportlingo had the structural skeleton of an e-commerce marketplace, dressed up to look like an educational app. Users couldn't find where to start, and returning users couldn't find their progress.\n\nBecause I didn't have access to the original business data explaining why certain features were chosen, I had to completely trust the user's perspective. I prioritized the user's primary intent: helping young athletes understand game rules quickly so they feel confident on the field.\n\nI fixed the mascot's name and messaging, fixed button affordance, and repositioned the login path. On sign-up, I rewrote the copy, removed redundant fields, and reduced the wall of work down to just what's needed to get started.`,
        images: [
          { type: 'single', src: 'assets/images/sportlingo-1-onboarding.png', caption: 'Before / after: welcome screen — fixed messaging, button affordance, and login path.' },
          { type: 'single', src: 'assets/images/sportlingo-2-signup.png', caption: 'Before / after: sign-up flow — rewritten copy, redundant fields removed.' }
        ]
      },
      {
        heading: 'Information Architecture: The Learning Path',
        text: `I moved the "Learning Path" to the forefront as the primary homepage, replacing the "Community/Chat" AI distraction with a clear, linear "Start Lesson" button. A sport category switcher lets users move between sports without losing their place, with active, inactive, and premium node states designed so progress is always legible at a glance.`,
        images: [
          { type: 'single', src: 'assets/images/sportlingo-3-homepath.png', caption: 'Before / after: homepage rebuilt around a progressive learning-node path.' },
          { type: 'single', src: 'assets/images/sportlingo-4-sportswitcher.png', caption: 'Before / after: sport category switcher, opened as an in-context modal.' }
        ]
      },
      {
        heading: 'Redesigning Quiz Feedback',
        text: `The original feedback system gave away answers even when modules were too simplistic, offered overly simplistic learning instruction, and provided only a shallow, text-only explanation.\n\nI redesigned the feedback moment into a centralized educational opportunity rather than a tiny pop-up — blurring the background to increase user focus and rebuilding the feedback card so a correct answer becomes a genuine micro-learning moment instead of a dead end.`,
        images: [
          { type: 'single', src: 'assets/images/sportlingo-5-quiz-before.png', caption: 'Before: quiz feedback gives away answers with a shallow, text-only explanation.' },
          { type: 'single', src: 'assets/images/sportlingo-6-quiz-feedback.png', caption: 'After: a blurred, centered feedback card turns the answer into a micro-learning moment.' }
        ]
      },
      {
        heading: 'Monetization Without Friction: The Two-Path Strategy',
        text: `The original app scattered paid content everywhere — users landed on the homepage and immediately saw a $19.99 "Baseball: Bullpen Strategy" card before they even knew if the app was good. It felt like a car salesperson greeting you at the front door.\n\nI restructured the business model into two clear, friction-free paths to purchase:\n\nPath A — The Passive "Browse" Tab: I moved pricing and course discovery to a dedicated "Marketplace" tab in the bottom navigation, completely separate from the learner's main journey, so users aren't distracted by prices while trying to learn.\n\nPath B — The Active "Roadblock": When a user reaches the end of the free modules in a sport, the next node changes to a metallic gold/dark-blue gradient with a padlock icon. A clean, centered modal offers "Unlock All Sports" (subscription) or "Unlock [Sport] Premium" (one-time purchase) — capturing motivation at its peak without breaking the learner's flow.`
      },
      {
        heading: 'Conclusion',
        text: `This project taught me a critical lesson about product development: a product cannot survive on a founder's dream alone. The "Duolingo of Sports" is a catchy pitch, but it is not a product strategy — a successful EdTech product must be grounded in how people actually learn, not in how many features you can cram into an interface.\n\nTo compete with industry giants, you cannot just clone their format; you must understand their psychology. My redesign shifted Sportlingo from an over-engineered, conceptually confused clone into a hyper-focused, high-utility tool for youth sports teams. By stripping away founder bias and centering the user's need to learn quickly and confidently, I turned a confusing app into a practical, inviting classroom.`
      }
    ],
    tech: ['UX Audit', 'Product Strategy', 'Figma', 'Information Architecture']
  },
  chunksky: {
    title: 'Chunksky: An AI Cognitive Assistant',
    label: '04 — Solo Concept & End-to-End Design',
    sections: [
      {
        heading: 'The Core Challenge',
        text: `Neurodivergent individuals (ADHD, Autism, etc.) often suffer from "task paralysis." The brain sees a large task like "Clean the room" and gets overwhelmed by the thousands of micro-decisions required to start.\n\nThe core challenge was designing an interface that not only breaks down the task but also feels emotionally safe enough to lower the user's anxiety levels immediately upon opening the app.`,
        images: [
          { type: 'single', src: 'assets/images/chunksky-1-onboarding.png', caption: 'Splash screen and onboarding — setting a calm, low-stakes tone from the first tap.' }
        ]
      },
      {
        heading: 'EdTech Product Strategy',
        text: `Chunksky addresses a critical gap in the EdTech and Assistive Tech space: Executive Dysfunction. While most productivity apps focus on organization (categorizing tasks, managing calendars), they fail users who experience task paralysis — the inability to start because the planning phase feels overwhelming.\n\nMy strategy was to strip away all "productivity gamification" (streaks, badges, leaderboards) and instead design a low-stakes, calm, shame-free environment. The product doesn't aim to make users "more productive"; it aims to make them feel capable.`
      },
      {
        heading: 'Decision 1: The Input Screen (Voice + Text)',
        text: `I intentionally avoided a blank "Add a task" screen, which causes analysis paralysis. Instead, I provided a large text area with a microphone button, and added "Quick Templates" (like Laundry, Shower) underneath.\n\nThis gives users three ways to start: Type, Speak, or Tap. It removes the friction of having to think about how to input the task — the app then breaks it down into a short, editable list of steps with time estimates.`,
        images: [
          { type: 'single', src: 'assets/images/chunksky-3-input.png', caption: 'Three ways to start: type, speak, or tap a quick template.' },
          { type: 'single', src: 'assets/images/chunksky-4-steps.png', caption: '"Break It Down" turns one overwhelming task into small, timed, editable steps.' }
        ]
      },
      {
        heading: 'Decision 2: The Pacing Selector',
        text: `I know that neurodivergent energy fluctuates daily. Some days you can power through; other days you can barely move. I designed three pacing options: "Slow," "Steady," and "Fast." I paired each with a distinct icon (clover, lightning bolt, fire) to make the choice intuitive.\n\nThis gives the user back the agency to match the app to their current mental state, rather than forcing one fixed pace onto every day.`,
        images: [
          { type: 'single', src: 'assets/images/chunksky-2-setup.png', caption: 'Nickname, pacing selector, and the resulting home screen greeting.' }
        ]
      },
      {
        heading: 'Decision 3 & 4: The Countdown Timer & The "I Need a Break!" Button',
        text: `I deliberately rejected a standard clock or a closing circle because it feels like a ticking time bomb. I designed an open olive-green arc that slowly grows to fill the circle — it visually mimics a path being walked, not a cage closing in. It feels like a guide, not a judge.\n\nThe "I need a break!" button is the most important button in the app. I placed it at the bottom, in a warm terracotta color, separate from the task controls. It acts as an escape hatch. It tells the user: "You are allowed to stop without failing." Designing for failure is just as important as designing for success.`,
        images: [
          { type: 'single', src: 'assets/images/chunksky-5-ready.png', caption: 'A final pace check before starting, then a gentle loading state.' },
          { type: 'single', src: 'assets/images/chunksky-6-timer.png', caption: 'The open arc timer and the "I need a break!" escape hatch, always in view.' }
        ]
      },
      {
        heading: 'Decision 5: The Visual Palette',
        text: `I avoided harsh whites and aggressive primary colors. I chose a warm cream background and a nature-inspired palette of cream, olive, and terracotta. This was a conscious attempt to lower visual stimulation and sensory overload. The colors are designed to feel like a warm hug, not a corporate dashboard.`
      },
      {
        heading: 'Monetization Strategy & Target Impact Metrics',
        text: `Chunksky is designed with an accessible-first mindset. Instead of paywalls, subscriptions, or locked features, monetization is offered via an optional "Donation" setting hidden quietly in the user profile. This ensures financial barriers never prevent a neurodivergent user from accessing the cognitive support they need.\n\nTarget KPIs:\n• Time-to-start: reduce the time from opening the app to beginning the first micro-task to under 30 seconds.\n• Task Initiation Rate: aiming for a 90% success rate in users completing the first micro-step after generating a task.\n• Sensory Load Reduction: 100% of the design's palette and animations tested for low visual stimulation, avoiding harsh contrasts or flashing elements.`
      },
      {
        heading: 'What the User Gains',
        text: `Users gain their executive function back. Chunksky acts as an external brain, handling the heavy cognitive load of "planning." The user no longer has to fight their own brain to start a chore; they simply speak a desire, and the app hands them a tiny, easy next step. The app gives users a sense of agency and accomplishment without overwhelming them.\n\nChunksky is not a productivity app; it is a cognitive accessibility tool. It serves as a proof-of-concept that AI, when designed with empathy, can be used not to replace human effort, but to unblock it. By focusing on emotional safety, low-stimulus design, and zero-friction input, Chunksky proves that the best assistive technology is the kind that helps you help yourself — one tiny chunk at a time.`,
        images: [
          { type: 'single', src: 'assets/images/chunksky-7-complete.png', caption: 'Session complete — progress is celebrated without judging the steps left undone.' }
        ]
      }
    ],
    tech: ['UX Strategy', 'AI Product Design', 'Figma', 'Accessibility']
  },
  decodyssey: {
    title: 'Decodyssey: Critical Thinking as Survival Skill',
    label: '05 — Final Year Project · UX Research & Instructional Design',
    sections: [
      {
        heading: 'The Problem: A Geographic Bias in Critical Thinking',
        text: `Most established critical thinking frameworks — including foundational work like Paul and Elder (2020) and Facione (1990) — were developed by researchers in stable, resourced societies, where the worst outcome of a reasoning failure was usually an intellectual error: a bad grade, a lost debate. In that context, critical thinking could afford to be taught as an abstract exercise: logic puzzles, philosophical arguments, structured debates.\n\nGrowing up in Nigeria, my reality was different. Distinguishing genuine information from manipulation — a suspicious bank alert, a too-good-to-be-true investment, unsolicited medical advice — wasn't an academic skill, it was a daily survival tool. I termed this gap "Privileged Thinking Bias": a mode of reasoning that emerges from contexts stable enough to treat risk as recreational. Where I grew up, risk wasn't a choice.\n\nOne moment stuck with me: I burned my finger on steam, and a neighbor told me to put "sodium chloride" on it. The scientific-sounding term made me pause — sodium chloride is just salt. If I hadn't questioned it, I would have followed advice that didn't actually help. That single moment of confusion became the literal origin of this project.`
      },
      {
        heading: 'The Gap: What Existing Tools Missed',
        text: `I identified three persistent problems: an "Abstract Context Divide," where learners who could spot a fallacy in a textbook failed to recognize the same pattern in a market transaction or a family WhatsApp message; engagement and accessibility barriers, since most critical-thinking apps taught boring, forgettable definitions rather than practical recognition; and an absence of scalable intervention, since one-on-one tutoring works but can't reach population scale.\n\nNo existing mobile app combined scenario-based instruction using authentic, high-stakes contexts, microlearning architecture with progressive difficulty, and interface design prioritizing cognitive clarity over aesthetic minimalism. That was the gap Decodyssey was built to fill.\n\nThe aim: design, develop, and evaluate a microlearning app that teaches critical thinking through real-world, scenario-based practice targeting common logical fallacies in high-stakes Nigerian contexts.`
      },
      {
        heading: 'Instructional Design: The Five-Part Scenario Structure',
        text: `Every scenario in Decodyssey follows the same five-part structure, refined through iterative testing:\n\n• Context — 3-5 sentences placing the user in a recognizable situation from Nigerian daily life (financial, educational, professional, social, or domestic).\n• Trap — the manipulative statement itself, using the jargon, pressure, or urgency tactics people actually encounter.\n• Decision Point — framed as "What do you do?" so the interaction feels like a real decision under pressure, not an abstract puzzle.\n• Choices — three constrained options, keeping cognitive load manageable while preserving engagement.\n• Feedback — an immediate one-word verdict ("Exactly," "Good instinct," "Not quite"), a one-sentence explanation, and a one-sentence transferable lesson.\n\nThis compresses traditional case-study methodology into a 2-3 minute mobile interaction. The Home & Daily Life module was fully built out with 15 scenarios across 5 levels — early levels use obvious manipulation techniques, later levels combine multiple techniques. Level 1, Scenario 1 is "The Burn": the sodium chloride moment that started the whole project.`
      },
      {
        heading: 'Design Decisions',
        text: `Every instructional and interface decision was made against the same test: does this serve survival-relevant reasoning, or does it just look like a learning app?\n\n• Scenario-based content — embeds reasoning in situations people actually recognize, rather than abstract logic.\n• Three choices per scenario — constrains cognitive load while keeping the decision real.\n• Immediate feedback — closes the learning loop in real time instead of delaying it.\n• Progressive unlocking — creates accomplishment markers and paces the learner.\n• Offline functionality — Nigerian connectivity isn't always reliable, so the app had to work without it.\n• Plain, simple language — keeps the content accessible to learners with learning disabilities, not just fluent readers.\n• Minimal gamification — streaks and badges were kept deliberately light so they don't compete with focus on the scenario itself.`
      },
      {
        heading: 'Screen Design',
        text: `The interface was prototyped in Figma before any code was written, to validate navigation flow and interaction patterns first.\n\n• Splash Screen — full-screen white background, bold app name, tagline "Learn to reason. Assess the Logic." Auto-advances to the context picker.\n• Context Picker — six cards, each with an icon, title, description, and arrow, covering domains like Home & Daily Life, School & Education, Work & Productivity, Social Media, Money & Finance, and Health & Body. A purple border marks the active selection.\n• Level Path — a vertical scrolling path of circular nodes, inspired by Duolingo's node path: purple fill for active levels, a checkmark for completed ones, grey with a lock icon for locked ones, with a context switcher at the top.\n• Scenario Interaction — a progress indicator (1/3, 2/3, 3/3), neutrally-framed scenario text, the "What do you do?" prompt, and three full-width choice buttons, with minimized white space to reduce cognitive load.\n• Feedback Screen — color-coded by outcome (green, amber, red), a one-word verdict, a one-sentence explanation, a one-sentence transferable lesson, and a "Continue" button.`,
        images: [
          {
            type: 'grid',
            images: [
              { src: 'assets/images/decodyssey-1-splash.png', caption: 'Splash Screen' },
              { src: 'assets/images/decodyssey-2-context-picker.png', caption: 'Context Picker' },
              { src: 'assets/images/decodyssey-3-level-path.png', caption: 'Level Path' },
              { src: 'assets/images/decodyssey-4-scenario.png', caption: 'Scenario Interaction' },
              { src: 'assets/images/decodyssey-5-feedback.png', caption: 'Feedback Screen' }
            ]
          }
        ]
      },
      {
        heading: 'System Architecture',
        text: `Decodyssey is a client-side-only, offline-first Progressive Web App — a decision driven by four constraints: no server costs or maintenance burden for a self-funded student project, the need to function without reliable internet, reduced complexity for a single-developer build, and alignment with the connectivity realities target users actually face.\n\nThe system runs in three layers: a Presentation Layer handling UI rendering and screen transitions; an Application Logic Layer managing scenario flow, answer validation, streaks, and progressive unlocking; and a Data Layer storing all scenario content as structured JSON, with a Service Worker caching everything after first load so the app works fully offline afterward.`
      },
      {
        heading: 'Testing & What I Learned',
        text: `I ran a small pilot test with 7 participants using pre- and post-test critical thinking assessments. The results also surfaced a real instructional design flaw early — some choice subtext was inadvertently hinting at the correct answer — which I identified and corrected before wider use. Catching it through actual testing, rather than assuming the design was fine, was itself the most useful part of the pilot.\n\nThe core contribution of this project isn't the app's polish — it's the instructional model underneath it: that critical thinking, for a lot of people, isn't an academic skill to be taught in the abstract. It's a survival mechanism that has to be taught the way it's actually used — in context, under pressure, in language people already understand.`
      }
    ],
    tech: ['UX Research', 'Instructional Design', 'Figma', 'HTML', 'CSS', 'JavaScript', 'PWA']
  },
  univerbal: {
    title: 'Univerbal: Redesigning an AI Language App',
    label: '06 — UX Audit & Redesign',
    sections: [
      {
        heading: 'Testing Univerbal',
        text: `Univerbal is an AI-powered language app developed by universities in Switzerland. I tested it with the aim of learning Japanese from scratch — curious whether an app built around AI voice recognition and a chatbot tutor would actually teach me anything.\n\nWhat followed was a 15-minute struggle through an incredibly long onboarding, a confusing dashboard, and an AI that congratulated me for saying the wrong thing. In the end, I hadn't learned a single word.`
      },
      {
        heading: 'Key UX Issues',
        text: `Overwhelming Onboarding: Before I saw a single Japanese character, the app asked me my comfort level, why I wanted to learn Japanese, which two skills to focus on, what the hardest part of learning Japanese was (I'd never tried before), how I wanted to build a study plan, and what my interests were. A beginner doesn't know what they need to focus on — that's why they're a beginner. Asking someone to design their own curriculum before they've seen a single lesson creates anxiety, not excitement.\n\nCluttered Dashboard: After signing up, I landed on a homepage with a "Daily Challenge," a "Daily Mission," a "Let's Learn Unit 1" card, and a 3-toggle bar for Vocabulary/Exercise/Conversation. A beginner shouldn't have to choose where to start — the app should tell them exactly where to click.\n\nThe Feedback Trap: In the conversation exercise, the AI tutor introduced itself and asked if I was a new classmate. I replied with the only Japanese phrase I knew — a random greeting that didn't actually answer the question. The app celebrated anyway: "Great! 🎉" It wasn't checking for semantic relevance, just validating any spoken input.\n\nScript Without Romaji: The app dropped Japanese script straight onto the screen with no romanized spelling to help pronounce it. Asking a complete beginner to memorize abstract symbols before they even know what sound they make gets the learning order backwards — sound and phonetic spelling should come first, native script second.`,
        images: [
          { type: 'single', src: 'assets/images/univerbal-2-onboarding-original.png', caption: 'The original onboarding: five screens of preference-gathering before a single lesson.' }
        ]
      },
      {
        heading: 'The Redesign: Dashboard',
        text: `I removed the Daily Challenge and Daily Mission cards and replaced the 3-toggle bar with a single, prominent next step. The redesigned dashboard presents one clear, linear path: learn the alphabet first (Hiragana), then unlock conversational units — the user never has to guess what to click.`,
        images: [
          { type: 'single', src: 'assets/images/univerbal-1-dashboard-before-after.png', caption: 'Before / after: a cluttered multi-card homepage becomes one clear next action.' }
        ]
      },
      {
        heading: 'The Redesign: Onboarding & First Lesson',
        text: `The onboarding is stripped down to what actually matters: what you want to learn, and your current level. Everything else — interests, study-plan preferences, skill customization — is deferred until after the learner has actually seen a lesson.\n\nThe first lesson is a mini-lesson conversation that introduces the tutor and the app in plain English before any Japanese appears. When Japanese is introduced, the romanized spelling ("Konnichiwa") sits right alongside the script, so the learner can read, say, and recognize the word instead of relying on the audio button alone. The lesson closes with a genuine milestone: "You just said your first word in Japanese."`,
        images: [
          { type: 'single', src: 'assets/images/univerbal-3-redesign-flow-a.png', caption: 'Redesigned onboarding: level selection, then a conversational intro entirely in English.' },
          { type: 'single', src: 'assets/images/univerbal-4-redesign-flow-b.png', caption: 'Japanese is introduced with romaji alongside the script, closing on a real first milestone.' }
        ]
      },
      {
        heading: 'Takeaways',
        text: `Scaffold before you customize — a beginner can't meaningfully choose their focus areas before they've seen what the subject even looks like. Give every screen one clear next action instead of a menu of options. Teach phonetics before native script, not after. And design feedback that checks for real understanding, not just valid input — an AI tutor that celebrates any spoken response teaches the user nothing about whether they were actually right.`
      }
    ],
    tech: ['UX Audit', 'Figma', 'Instructional Design']
  }
};

/* ===== TYPEWRITER ===== */
function typewrite(el, text, speed = 18) {
  return new Promise(resolve => {
    let i = 0;
    el.classList.add('typing');
    el.textContent = '';
    function tick() {
      if (i < text.length) {
        el.textContent += text[i++];
        setTimeout(tick, speed * (0.7 + Math.random() * 0.6));
      } else {
        el.classList.remove('typing');
        resolve();
      }
    }
    tick();
  });
}

/* ===== BUILD IMAGE BLOCK ===== */
function buildImageBlock(imgData) {
  const wrap = document.createElement('div');
  wrap.className = 'cs-img-block';

  if (imgData.type === 'single') {
    wrap.classList.add('cs-img-single');
    wrap.innerHTML = `
      <img src="${imgData.src}" alt="${imgData.caption || ''}" title="Click to enlarge" style="cursor:zoom-in">
      ${imgData.caption ? `<p class="cs-img-caption">${imgData.caption}</p>` : ''}
    `;
  } else if (imgData.type === 'before-after') {
    wrap.classList.add('cs-img-before-after');
    wrap.innerHTML = `
      <div class="cs-ba-panel">
        <span class="cs-ba-label before">Before</span>
        <img src="${imgData.before}" alt="Before" title="Click to enlarge" style="cursor:zoom-in">
        ${imgData.beforeCaption ? `<p class="cs-img-caption">${imgData.beforeCaption}</p>` : ''}
      </div>
      <div class="cs-ba-panel">
        <span class="cs-ba-label after">After</span>
        <img src="${imgData.after}" alt="After" title="Click to enlarge" style="cursor:zoom-in">
        ${imgData.afterCaption ? `<p class="cs-img-caption">${imgData.afterCaption}</p>` : ''}
      </div>
    `;
    if (imgData.caption) {
      const cap = document.createElement('p');
      cap.className = 'cs-img-caption';
      cap.style.marginTop = '0.5rem';
      cap.textContent = imgData.caption;
      wrap.appendChild(cap);
    }
  } else if (imgData.type === 'grid') {
    const grid = document.createElement('div');
    grid.className = 'cs-img-grid';
    imgData.images.forEach(img => {
      grid.innerHTML += `
        <div class="cs-img-grid-item">
          <img src="${img.src}" alt="${img.caption || ''}" title="Click to enlarge" style="cursor:zoom-in">
          ${img.caption ? `<p class="cs-img-caption">${img.caption}</p>` : ''}
        </div>
      `;
    });
    wrap.appendChild(grid);
    if (imgData.caption) {
      const cap = document.createElement('p');
      cap.className = 'cs-img-caption';
      cap.style.marginTop = '0.5rem';
      cap.textContent = imgData.caption;
      wrap.appendChild(cap);
    }
  }

  // Lightbox on click
  wrap.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
  });

  return wrap;
}

/* ===== LIGHTBOX ===== */
const lightbox = document.createElement('div');
lightbox.className = 'cs-lightbox';
lightbox.innerHTML = `<button class="cs-lightbox-close">✕</button><img src="" alt="enlarged view">`;
document.body.appendChild(lightbox);
const lbImg = lightbox.querySelector('img');
const lbClose = lightbox.querySelector('.cs-lightbox-close');

function openLightbox(src) {
  lbImg.src = src;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('open');
  // don't restore overflow here — modal might still be open
}
lbClose.addEventListener('click', (e) => { e.stopPropagation(); closeLightbox(); });
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

/* ===== MODAL ===== */
const overlay = document.getElementById('csOverlay');
const backdrop = document.getElementById('csBackdrop');
const closeBtn = document.getElementById('csClose');
const csBody = document.getElementById('csBody');

function openModal(projectKey) {
  const data = caseStudies[projectKey];
  if (!data) return;

  document.getElementById('csLabel').textContent = data.label;
  document.getElementById('csTitle').textContent = data.title;

  // Build sections — text targets + image placeholders
  csBody.innerHTML = '';
  data.sections.forEach((s, idx) => {
    const sec = document.createElement('div');
    sec.className = 'cs-section';
    sec.innerHTML = `
      <div class="cs-section-heading">${s.heading}</div>
      <div class="cs-type-target" id="csType${idx}"></div>
    `;
    // Attach image placeholder divs (hidden until text finishes)
    if (s.images && s.images.length) {
      s.images.forEach((imgData, iIdx) => {
        const block = buildImageBlock(imgData);
        block.id = `csImg${idx}_${iIdx}`;
        sec.appendChild(block);
      });
    }
    csBody.appendChild(sec);
  });

  // Tech pills
  const pillDiv = document.createElement('div');
  pillDiv.innerHTML = `<div class="cs-section-heading">Stack</div><div class="cs-tech-pills">${data.tech.map(t => `<span class="cs-pill">${t}</span>`).join('')}</div>`;
  csBody.appendChild(pillDiv);

  // Show overlay
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Typewrite sequentially, then reveal images
  (async () => {
    for (let i = 0; i < data.sections.length; i++) {
      const el = document.getElementById(`csType${i}`);
      await typewrite(el, data.sections[i].text, i === 0 ? 14 : 10);
      // Reveal any images for this section
      const sec = data.sections[i];
      if (sec.images && sec.images.length) {
        await new Promise(r => setTimeout(r, 150));
        sec.images.forEach((_, iIdx) => {
          const block = document.getElementById(`csImg${i}_${iIdx}`);
          if (block) {
            setTimeout(() => block.classList.add('revealed'), iIdx * 120);
          }
        });
        await new Promise(r => setTimeout(r, sec.images.length * 120 + 300));
      } else {
        await new Promise(r => setTimeout(r, 200));
      }
    }
  })();
}

function closeModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(() => { csBody.innerHTML = ''; }, 350);
}

closeBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !lightbox.classList.contains('open')) closeModal(); });

document.querySelectorAll('.btn-case-study').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.dataset.project));
});
