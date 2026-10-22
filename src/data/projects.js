export const projectsData = [
  {
    slug: "bazardor",
    title: "BazarDor",
    tagline: "Bangladeshi Daily Market Commodity & Grocery Price Tracking Platform",
    category: "Full-Stack Web Application",
    featured: true,
    image: "/src/assets/Screenshot 2026-10-12 205342.png",
    liveUrl: "https://bazar-dor-website-rho.vercel.app",
    githubUrl: "https://github.com/mukti9537-oss/bazar-dor-website.git",
    hasLiveUrl: true,
    hasGithubUrl: true,
    summary: "A modern web application built to track and display daily market commodity prices across Bangladesh, empowering shoppers with accurate pricing data to navigate changing market dynamics.",
    overview: "BazarDor addresses a tangible daily challenge faced by households and small vendors across Bangladesh: unexpected fluctuations in the prices of kitchen essentials and daily bazaar commodities. By aggregating and presenting organized market rates for staples like rice, lentils, vegetables, oil, and spices, BazarDor helps consumers budget wisely, spot price spikes, and make informed shopping choices.",
    technologies: [
      "React",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Vite",
      "RESTful APIs",
      "Responsive Web Design",
      "Vercel Deployment"
    ],
    keyFeatures: [
      "Real-time daily price displays for staple grocery items and seasonal agricultural produce.",
      "Categorized cataloging (Grains, Vegetables, Spices, Oils, Dairy & Proteins) for rapid navigation.",
      "Live search functionality enabling instant item lookup without page reloading.",
      "Visual price movement indicators highlighting recent price increases, drops, or stable rates.",
      "Mobile-optimized layout designed specifically for on-the-go browsing during local market visits.",
      "Clean currency and unit presentation using Bangladeshi Taka (BDT ৳) and standard metric units (kg, liter, dozen)."
    ],
    challenges: [
      {
        title: "Dynamic Price Presentation & High-Contrast Readability",
        solution: "Market items vary widely in price variance and measurement units. Engineered a modular card architecture with explicit price delta tags and color-coded status badges to ensure quick readability even under bright daylight on mobile screens."
      },
      {
        title: "Fast Loading on Variable Mobile Connections",
        solution: "Kept asset weights minimal by leveraging lightweight SVG icons and responsive Tailwind utility classes, avoiding heavy external graphic libraries for fast loading across cellular networks."
      },
      {
        title: "State Management for Rapid Category Filtering",
        solution: "Implemented efficient client-side state handling to ensure instantaneous zero-lag switching between different market commodity sections."
      }
    ],
    futureImprovements: [
      "Integration of localized crowd-sourced price validation by verified neighborhood shoppers across different divisional districts.",
      "Interactive 30-day and 90-day price trend history charts to visualize inflation trends.",
      "Bilingual toggle supporting full Bengali script (বাংলা) for broader demographic reach.",
      "SMS or web push price drop alerts for user-bookmarked grocery baskets."
    ]
  },
  {
    slug: "fitlog",
    title: "FitLog",
    tagline: "Workout Routine, Set Progression & Personal Record (PR) Tracker",
    category: "Productivity & Health Web App",
    featured: true,
    image: "/src/assets/Screenshot 2026-10-12 210344.png",
    liveUrl: "https://fitness-website-eta-eight.vercel.app/",
    githubUrl: "https://github.com/mukti9537-oss/a6-fitness-website.git",
    hasLiveUrl: true,
    hasGithubUrl: true,
    summary: "A workout logging web application designed for gym-goers to record sets, reps, and training volume while tracking personal records and routine discipline.",
    overview: "FitLog is built for fitness enthusiasts who want a clean, distraction-free digital workout log. It replaces paper journals and bloated generic fitness apps by focusing strictly on what matters: logging weight lifted, tracking rep ranges with RPE (Rate of Perceived Exertion), calculating total session volume, and celebrating new Personal Records (PRs).",
    technologies: [
      "React",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "State Management",
      "Local Storage Persistence",
      "Modular Component Architecture"
    ],
    keyFeatures: [
      "Custom workout split builder (e.g., Push/Pull/Legs, Upper/Lower, Full Body routines).",
      "Rapid set, repetition, and weight recording with one-tap completion markers.",
      "Automatic calculation of total training volume (kg lifted) per workout session.",
      "Dedicated Personal Record (PR) highlight badges for motivational milestone tracking.",
      "Workout streak counter and integrated rest-interval timer between heavy sets.",
      "Persistent workout history stored securely in browser storage for zero session loss."
    ],
    challenges: [
      {
        title: "Ergonomic One-Handed Mobile Data Entry",
        solution: "Users log sets while physically tired between exercises. Designed large tap targets, intuitive step increments, and auto-filling the previous set's weight and reps to minimize keystrokes."
      },
      {
        title: "Nested State Management",
        solution: "Managed complex hierarchical data structures (Day -> Routine -> Exercise -> Multiple Sets) with immutable state updater patterns to guarantee accurate state synchronization."
      },
      {
        title: "Offline Reliability",
        solution: "Leveraged browser local storage synchronization so workout sessions remain fully functional even in basement gyms without cellular reception."
      }
    ],
    futureImprovements: [
      "Cloud account synchronization with MongoDB/Node.js backend for cross-device access.",
      "Interactive visual volume charts tracking strength gains over monthly intervals.",
      "Pre-configured popular training programs (Starting Strength, 5/3/1, PPL splits).",
      "Exportable session logs in CSV and PDF formats for personal coaches."
    ]
  },
  {
    slug: "dev-stack-builder",
    title: "Dev Stack Builder",
    tagline: "Interactive Full-Stack Architecture Generator & Boilerplate Configurator",
    category: "Developer Tooling",
    featured: true,
    image: "/src/assets/Screenshot 2026-10-12 215351.png",
    liveUrl: "https://devstack-webpage.vercel.app/",
    githubUrl: "https://github.com/mukti9537-oss/a05-devstack.git",
    hasLiveUrl: true,
    hasGithubUrl: true,
    summary: "An interactive developer tool enabling engineers to visually assemble modern technology stacks, validate package compatibility, and generate ready-to-run setup commands.",
    overview: "Starting a new web project often involves tedious boilerplate decisions, package compatibility checks, and manual setup scripts. Dev Stack Builder streamlines this initiation process by allowing developers to pick their preferred frontend framework, backend runtime, database, authentication provider, and styling tool, generating tailor-made installation commands and project scaffolding.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "Lucide Icons",
      "Config Generator Engine"
    ],
    keyFeatures: [
      "Visual multi-tier stack selector across Frontend, Backend, Database, Authentication, and UI libraries.",
      "Smart dependency compatibility validation highlighting mutually exclusive or deprecated packages.",
      "Instant terminal command generation (`npx`, `npm install`, shell script scripts).",
      "One-click copy for `.env.example` configurations and starter folder hierarchies.",
      "Interactive architecture summary visualizer showcasing connected stack nodes.",
      "Dark-mode developer-centric UI styled with modern monospace terminal previews."
    ],
    challenges: [
      {
        title: "Complex Dependency Matrix Rules",
        solution: "Created a declarative compatibility mapping matrix that dynamically enables or disables options based on previously chosen frameworks (e.g., matching appropriate Tailwind or CSS plugins to Vite vs. Next.js)."
      },
      {
        title: "Terminal Command Formatting",
        solution: "Constructed string templating helpers that sanitize input flags and format clean, multi-line shell commands ready for direct pasting into bash or PowerShell."
      }
    ],
    futureImprovements: [
      "Direct GitHub repository scaffolding via GitHub REST API and template repositories.",
      "Automated Dockerfile and docker-compose.yml generation for containerized deployments.",
      "Pre-set community stacks (e.g., MERN, PERN, T3-inspired, Minimalist Microservice).",
      "Downloadable starter repository as a zipped bundle."
    ]
  },
  {
    slug: "dev-conference",
    title: "Dev Conference",
    tagline: "Developer Summit Schedule, Speaker Lineup & Registration Platform",
    category: "Event & Conference Platform",
    featured: true,
    image: "/src/assets/Screenshot 2026-10-12 211700.png",
    liveUrl: "https://dev-conference-one.vercel.app/",
    githubUrl: "https://github.com/mukti9537-oss/Programming-hero-Assignment-1.git",
    hasLiveUrl: true,
    hasGithubUrl: true,
    summary: "An event landing and multi-track schedule management web application designed for developer conferences, tech summits, and coding symposiums.",
    overview: "Dev Conference is an event portal engineered to provide attendees with a frictionless digital experience before and during technical conferences. It offers multi-track timetable schedules, speaker biographies, session bookmarks, venue floor details, and a ticket registration simulation.",
    technologies: [
      "React",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "React Router",
      "Dynamic Filtering",
      "Interactive Forms"
    ],
    keyFeatures: [
      "Multi-day and multi-track schedule filtering (Frontend Track, Backend Track, DevOps & Cloud Track).",
      "Detailed speaker profile cards including headshots, bios, talk summaries, and social media handles.",
      "Interactive personal agenda builder allowing attendees to bookmark talks they plan to attend.",
      "Responsive ticket tier selection modal with mock checkout registration flow and validation.",
      "Live event countdown timer and venue access maps.",
      "Accessible schedule table optimized for keyboard navigation and screen readers."
    ],
    challenges: [
      {
        title: "Handling Concurrent Multi-Track Timetables",
        solution: "Organized session data with overlapping time slots into an intuitive tabbed grid layout that clearly differentiates simultaneous talks across different conference halls."
      },
      {
        title: "Accessible Modal Dialogs & Keyboard Navigation",
        solution: "Implemented accessible focus trapping and keyboard shortcuts (Escape key, Tab cycling) for speaker details and registration modals."
      }
    ],
    futureImprovements: [
      "One-click calendar synchronization (.ics, Google Calendar, Outlook) for bookmarked sessions.",
      "Real-time attendee Q&A and session polling module using WebSockets.",
      "Virtual streaming player integration for hybrid conference attendees.",
      "Badging and certificate generator for verified participants."
    ]
  }
];
