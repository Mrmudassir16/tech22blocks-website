export interface ServiceItem {
  id: string;
  title: string;
  category: 'Digital Experience' | 'Enterprise Systems' | 'Intelligence & Advisory';
  shortDesc: string;
  fullDesc: string;
  badge?: string;
  deliverables: string[];
  technologies: string[];
  outcome: string;
}

export interface GoalItem {
  number: string;
  title: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
}

export interface NewsItem {
  id: string;
  date: string;
  category: 'Annual Letter' | 'Company Milestone' | 'Product Update' | 'Corporate Announcement';
  title: string;
  summary: string;
  content: string[];
  pdfAvailable?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const COMPANY = {
  name: "Tech22Blocks",
  legalName: "RRK SOFTWARE TECHNOLOGIES PRIVATE LIMITED",
  tagline: "Engineering software that ships. From ambitious ideas to enterprise-scale solutions.",
  yearFounded: 2025,
  email: "shivasai@tech22blocks.in",
  phone: "+91 9392022598",
  phoneDisplay: "+91 93920 22598",
  registeredAddress: "5-11-840, Hanamkonda, Warangal, 506009, Telangana, India",
  portfolioUrl: "https://tech22blocks.in/case-studies/",
  linkedinUrl: "https://www.linkedin.com/company/tech22blocks",
  
  leadership: [
    {
      name: "Shivasai Adepu",
      role: "Director / CEO",
      linkedin: "https://www.linkedin.com/in/shivasai-adepu",
      bio: "Leads engineering architecture, modern product systems, and technology strategy across proprietary R&D and enterprise client solutions."
    },
    {
      name: "Rajkumar Adepu",
      role: "Director / Chairman",
      linkedin: "https://www.linkedin.com",
      bio: "Brings operational wisdom, long-term strategic perspective, and disciplined corporate governance to ensure enduring client relationships and organizational integrity."
    }
  ],

  story: {
    title: "The Tech22Blocks Story",
    subtitle: "Built on a simple conviction: businesses of all stages deserve world-class software engineering.",
    p1: "Tech22Blocks was founded on a simple observation: organizations today face a stark choice between generic off-the-shelf templates, unreliable contractors, and rigid legacy agencies that bill for slide decks rather than working software.",
    p2: "We built Tech22Blocks to be the technology partner we always envisioned: a team that speaks plainly, engineers with precision, and takes end-to-end accountability for shipping production code.",
    p3: "The name? Think of it as the 22 building blocks of great software: clarity, speed, design, logic, testing, communication, scalability, honesty... and the discipline to execute them consistently."
  },

  foundersVision: {
    mainHeading: "Father & Son. One Vision.",
    supportingHeading: "Building Tech22Blocks Together Since 2025",
    narrative: [
      "Tech22Blocks was founded in 2025 by a father and son who shared a simple belief: technology should solve real problems and create meaningful, enduring opportunities.",
      "What started as a shared vision became a company built on trust, persistence, and the courage to engineer software of the highest caliber. While decades of business experience bring strategic perspective and corporate discipline, the next generation brings modern technology architectures, AI capabilities, and the drive to challenge conventional agency models.",
      "Together, they bring two generations of thinking to one mission: building practical technology solutions that help businesses scale, innovate, and prepare for the future.",
      "At Tech22Blocks, this is more than a commercial enterprise. It is a journey built on family values, transparent integrity, and a long-term commitment to our partners."
    ]
  },

  mission: {
    title: "Our Mission",
    subtitle: "Why we show up every day.",
    statement: "To make high-caliber software development and intelligent technology accessible, honest, and impactful.",
    description: "We believe technology should empower ambitious organizations to lead their markets — not just survive. Every web platform, mobile application, AI system, and custom tool we build is designed to deliver a measurable operational and commercial edge. We don't chase project volume; we forge long-term technology partnerships with companies committed to lasting growth."
  },

  goals: [
    {
      number: "01",
      title: "Build for impact, not volume",
      description: "We prioritize deep, dedicated engagements over high-volume turnover. Every client receives direct engineering leadership and custom architecture, never a commoditized template."
    },
    {
      number: "02",
      title: "Pioneer practical AI for business operations",
      description: "The future of enterprise software is intelligent and autonomous. Through internal R&D like VoiSage AI and bespoke client integrations, we make artificial intelligence practically useful today."
    },
    {
      number: "03",
      title: "Be the most trusted technology engineering partner",
      description: "Trust is built release by release. We operate with complete transparency, shared code repositories, realistic milestones, and unwavering engineering honesty."
    },
    {
      number: "04",
      title: "Foster an engineering culture of craft and curiosity",
      description: "Exceptional digital products are built by curious, motivated engineers. We continuously invest in our team, research emerging technologies, and cultivate a culture of craftsmanship."
    }
  ] as GoalItem[],

  // The 6 Official Services (As defined in Tech22Blocks Requirements PDF)
  services: [
    {
      id: "website-development",
      title: "Website Development",
      category: "Digital Experience",
      shortDesc: "High-performance, search-optimized web platforms built with modern component architectures for speed, reliability, and conversions.",
      fullDesc: "We build modern, resilient websites and complex web applications engineered for speed, clean indexing, and seamless customer interactions. Every platform is tailored with modern SSR/SSG architectures, high Core Web Vitals scores, and responsive fidelity across all screen dimensions.",
      deliverables: [
        "Full-Stack Web Applications & Client Portals",
        "Modern Headless CMS & Marketing Platforms",
        "Core Web Vitals & Sub-Second LCP Performance",
        "Enterprise Technical SEO & Schema Markup"
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Edge Functions"],
      outcome: "Delivers sub-second page loads, higher search rankings, and friction-free user journeys."
    },
    {
      id: "mobile-applications",
      title: "Mobile Application (iOS & Android)",
      category: "Digital Experience",
      shortDesc: "Native and cross-platform iOS & Android applications engineered for fluid 60 FPS performance, offline sync, and security.",
      fullDesc: "Transforming mobile interactions with intuitive iOS and Android applications. From native hardware integrations and biometric authentication to offline-first data caching and clean App Store/Play Store publication, we engineer apps that users rely on daily.",
      deliverables: [
        "Cross-Platform Mobile Apps (iOS & Android)",
        "Fluid 60 FPS Native UI Performance",
        "Offline Data Synchronization & Encrypted Storage",
        "Full Lifecycle Store Submission & Maintenance"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      outcome: "Empowers customers and field teams with responsive, always-available mobile interfaces."
    },
    {
      id: "uiux-design",
      title: "UI/UX Design",
      category: "Digital Experience",
      shortDesc: "Purposeful digital interfaces engineered through empathetic user research, interactive wireframing, and design systems.",
      fullDesc: "At Tech22Blocks, design is not cosmetic decoration; it is the fundamental bridge between business logic and human intent. We design clean, purposeful digital workflows, scalable component libraries, and interactive prototypes that minimize cognitive load and maximize product adoption.",
      deliverables: [
        "Comprehensive User Journey Mapping & UX Research",
        "Interactive Clickable Prototypes & Wireframing",
        "Scalable Enterprise Design Systems & Tokens",
        "Usability Heuristic Audits & Conversion Optimization"
      ],
      technologies: ["Figma", "Design Tokens", "Design Systems", "Prototyping", "Design QA"],
      outcome: "Translates complex business workflows into intuitive, beautiful experiences that users love."
    },
    {
      id: "custom-software",
      title: "Custom Software",
      category: "Enterprise Systems",
      shortDesc: "Bespoke core systems, enterprise application architectures, and robust business workflows tailored to your operating model.",
      fullDesc: "Off-the-shelf software inevitably forces organizations to compromise their business logic. We architect bespoke software systems, internal operations portals, high-throughput APIs, and scalable backends crafted specifically around your unique workflow, compliance, and growth objectives.",
      deliverables: [
        "Tailored Enterprise Operations & ERP Platforms",
        "High-Throughput REST & GraphQL API Architectures",
        "Legacy Codebase Modernization & Refactoring",
        "Multi-Tenant Database Design & Optimization"
      ],
      technologies: ["Node.js", "Python", "Go", "PostgreSQL", "Docker", "Microservices"],
      outcome: "Eliminates operational bottlenecks and replaces disconnected spreadsheets with a unified system of record."
    },
    {
      id: "it-consulting",
      title: "IT Consulting & Advisory",
      category: "Intelligence & Advisory",
      shortDesc: "Pragmatic technical advisory helping business leaders make informed architectural, vendor, and scaling decisions.",
      fullDesc: "Direct, jargon-free technology consulting. We evaluate existing codebases, identify scalability bottlenecks, evaluate build vs. buy trade-offs, and construct actionable engineering roadmaps aligned tightly with your commercial milestones.",
      deliverables: [
        "Technology Stack Selection & Architecture Due Diligence",
        "Codebase Quality & Technical Debt Audits",
        "Fractional CTO & Strategic Engineering Leadership",
        "Vendor & SaaS Tooling Evaluation"
      ],
      technologies: ["Architecture Audits", "Due Diligence", "Roadmapping", "Tech Governance"],
      outcome: "Prevents costly re-architecture mistakes and aligns software investments directly with business growth."
    },
    {
      id: "web3",
      title: "Web3.0 (Coming Soon)",
      category: "Enterprise Systems",
      badge: "Coming Soon",
      shortDesc: "Decentralized architecture research, cryptographic verification, and next-generation distributed systems.",
      fullDesc: "We provide pragmatic exploration of distributed ledger technology, cryptographic data integrity, and smart contract integration for businesses seeking decentralized transparency and tamper-evident record keeping.",
      deliverables: [
        "Smart Contract Architecture & Security Review",
        "Decentralized Storage & Cryptographic Verification",
        "Tokenomics & Web3 API Integration",
        "Consensus & Distributed Ledger Feasibility Audits"
      ],
      technologies: ["Solidity", "EVM", "IPFS", "Web3.js", "Zero-Knowledge Proofs"],
      outcome: "Enables tamper-proof verification and transparent decentralized transaction processing."
    }
  ] as ServiceItem[],

  // Proprietary Product: VoiSage AI
  product: {
    name: "VoiSage AI",
    badge: "In-House Proprietary R&D",
    status: "Under Active Development",
    tagline: "Autonomous Voice Intelligence for Unknown Incoming Calls",
    headline: "An intelligent voice assistant that screens unknown callers in real-time.",
    subheadline: "Built by Tech22Blocks to protect executive focus, eliminate spam, and ensure critical business inquiries are never missed.",
    problem: "Executives and founders receive dozens of unknown calls every day. Ignoring them risks losing legitimate client deals, while answering every ring severely fragments focus and derails engineering progress.",
    solution: "VoiSage AI is an intelligent voice assistant that answers unknown incoming calls in real time. It inquires about caller intent with natural conversational responsiveness, verifies caller legitimacy, and instantly dispatches a structured executive brief to your WhatsApp and internal dashboard.",
    capabilities: [
      {
        title: "Autonomous Call Screening",
        description: "Answers unknown numbers instantly with conversational, ultra-low-latency voice intelligence."
      },
      {
        title: "Real-Time Intent Classification",
        description: "Distinguishes spam and automated robocalls from high-priority client and commercial inquiries."
      },
      {
        title: "Live Diarization & Transcription",
        description: "Transcribes caller dialogue in real time and generates concise, actionable executive bullet points."
      },
      {
        title: "Multi-Channel Briefing Dispatch",
        description: "Sends caller identity, intent, and urgent callback flags immediately via WhatsApp and Webhook."
      }
    ],
    features: [
      "Real-time conversational voice processing with sub-600ms response latency",
      "Instant caller verification, intent extraction, and automated spam filtering",
      "Actionable call summary and audio transcription delivered immediately via Webhook / WhatsApp",
      "Custom screening rules tailored to business hours, VIP caller bypass, and team routing"
    ],
    technicalArchitecture: {
      audioStreaming: "WebRTC & SIP trunking with ultra-low latency voice packet streaming",
      speechToText: "High-precision streaming STT with multi-accent Indian English and regional language recognition",
      languageModel: "Fine-tuned conversational LLM tailored for polite, objective, and concise caller inquiry",
      textToSpeech: "Natural neural TTS with human-like prosody, fluid cadence, and interruption handling",
      infrastructure: "Cloud-native microservices with end-to-end encrypted audio and data sovereignty compliance"
    },
    cta: "Interested in early access or enterprise deployment? Contact our team."
  },

  newsAndEvents: [
    {
      id: "annual-letter-fy25",
      date: "October 2026",
      category: "Annual Letter",
      title: "Tech22Blocks Annual Company Letter: Building Practical Software for the Next Decade",
      summary: "A message from Director & CEO Shivasai Adepu and Director & Chairman Rajkumar Adepu on our foundational year, client partnerships, and technological focus.",
      content: [
        "To our partners, clients, and collaborators:",
        "When Tech22Blocks was incorporated under RRK Software Technologies Private Limited, we set out with a clear mandate: build technology that delivers tangible commercial value to organizations without unnecessary agency overhead.",
        "Over the past financial year, our commitment to shipping reliable code, working with transparency, and prioritizing software quality over vanity metrics has allowed us to establish enduring relationships with our clients.",
        "As we look ahead, we continue to expand our engineering capabilities in AI-driven tools, custom enterprise software, and mission-critical digital platforms. We thank everyone who has placed their trust in our family and our team."
      ],
      pdfAvailable: false
    },
    {
      id: "incorporation-milestone",
      date: "January 2025",
      category: "Company Milestone",
      title: "Official Incorporation of RRK Software Technologies Private Limited (Operating as Tech22Blocks)",
      summary: "Formal establishment of corporate operations, governance structure, and registration as an official technology enterprise.",
      content: [
        "RRK Software Technologies Private Limited announces the commencement of official corporate operations under the brand identity Tech22Blocks.",
        "Founded by Shivasai Adepu (Director/CEO) and Rajkumar Adepu (Director/Chairman), the company establishes its headquarters in Warangal/Hanamkonda, Telangana, committed to providing enterprise-grade software development for emerging and established businesses."
      ],
      pdfAvailable: false
    },
    {
      id: "ai-call-assistant-preview",
      date: "August 2026",
      category: "Product Update",
      title: "Tech22Blocks Initiates Development of In-House AI Call Assistant for Unknown Calls",
      summary: "R&D update regarding our proprietary AI voice screener designed to shield business owners from unsolicited interruptions while preserving genuine leads.",
      content: [
        "Tech22Blocks announces active development of its internal product initiative: an AI Call Assistant for unknown numbers.",
        "Designed to filter unsolicited calls and provide real-time transcription and intent detection, the product reflects the company's ethos of building tools for real-world daily operational frustrations."
      ],
      pdfAvailable: false
    },
    {
      id: "dpiit-startup-india-recognition",
      date: "March 2025",
      category: "Corporate Announcement",
      title: "Tech22Blocks Awarded Official Recognition Under DPIIT #StartupIndia & MSME Schemes",
      summary: "Statutory recognition and certification by the Government of India acknowledging our contribution to technology innovation.",
      content: [
        "RRK Software Technologies Private Limited (operating as Tech22Blocks) has been officially certified by the Department for Promotion of Industry and Internal Trade (DPIIT) under the #StartupIndia initiative.",
        "Additionally certified under the Ministry of Micro, Small and Medium Enterprises (MSME), this recognition underscores our commitment to transparent compliance, technological innovation, and sustainable corporate governance."
      ],
      pdfAvailable: false
    }
  ] as NewsItem[],

  blogs: [
    {
      slug: "how-ai-is-reshaping-business-software",
      title: "How AI is Reshaping Business Software: Beyond the Hype",
      category: "Artificial Intelligence",
      readTime: "5 min read",
      summary: "Why the real AI revolution isn't about flashy demos — it's about eliminating operational friction and automating routine business communications.",
      content: [
        "Artificial intelligence in 2026 has transitioned from speculative experimentation into practical operational utility. For forward-thinking businesses, the true competitive advantage does not stem from generic generative chatbots, but from specialized, domain-tailored automation.",
        "At Tech22Blocks, our focus is squarely on deploying AI where human attention is chronically fragmented. Consider inbound telephone communications: executive leadership and sales directors spend substantial working hours screening unsolicited calls, fearing that ignoring an unknown number might forfeit a high-value opportunity.",
        "By engineering voice systems that handle caller intake, classify intent, and synthesize action items from the ground up, employees spend less time on repetitive triaging and more on strategic execution. The key for organizations is to adopt AI that directly eliminates specific operational friction."
      ]
    },
    {
      slug: "building-better-digital-products",
      title: "Building Better Digital Products: Why Simplicity and Speed Always Win",
      category: "Engineering & Design",
      readTime: "4 min read",
      summary: "Exploring the fundamental architectural and design choices that separate durable software products from bloated, abandoned systems.",
      content: [
        "Many software projects fail not because of missing features, but because of premature complexity. When teams attempt to launch with every conceivable feature on day one, release cycles drag on, codebases become brittle, and users are overwhelmed by cluttered interfaces.",
        "Building better digital products begins with extreme clarity of purpose. What is the single core transaction your customer needs to perform? How quickly can they accomplish it without friction or error?",
        "By focusing on disciplined architecture, fast load times, and intuitive typography, technology companies build products that retain users and withstand high operational loads without constant firefighting."
      ]
    },
    {
      slug: "what-businesses-should-consider-before-building-custom-software",
      title: "What Businesses Should Consider Before Building Custom Software",
      category: "Technology Advisory",
      readTime: "6 min read",
      summary: "An essential checklist for executives evaluating whether to buy off-the-shelf SaaS or invest in proprietary custom software solutions.",
      content: [
        "Deciding between commercial SaaS platforms and building custom software is one of the most critical technology decisions a founder or executive will face.",
        "While SaaS provides rapid initial setup, recurring subscription costs escalate quickly as team sizes grow. More importantly, off-the-shelf software forces businesses to adapt their unique operational workflows to someone else's opinionated template.",
        "Custom software becomes the superior investment when your process itself is your competitive differentiator, when data ownership and security are non-negotiable, and when scaling custom automation delivers direct operational savings.",
        "Before writing a line of code, ensure your business requirements are clearly defined, your data schema is documented, and you are partnering with an engineering team that speaks plainly and ships reliably."
      ]
    }
  ] as BlogPost[],

  faqs: [
    {
      question: "What capabilities and services does Tech22Blocks provide?",
      answer: "Tech22Blocks provides 6 core software services: Website Development, Mobile Application (iOS & Android), UI/UX Design, Custom Software, IT Consulting & Advisory, and Web3.0 (Coming Soon). In addition to client solutions, we develop proprietary technology products including our autonomous voice assistant, VoiSage AI."
    },
    {
      question: "Does Tech22Blocks only work with startups?",
      answer: "No. While we have deep roots in helping ambitious startups launch fast with solid engineering, we partner with organizations of all sizes — from early-stage founders to scaling SMBs and established enterprises requiring dedicated custom software engineering and modernization."
    },
    {
      question: "What is VoiSage AI and how does it relate to Tech22Blocks?",
      answer: "VoiSage AI is Tech22Blocks' proprietary in-house AI product — an autonomous voice assistant engineered to screen unknown incoming calls, detect caller intent in real time, and deliver executive summaries directly to your dashboard. Developing our own proprietary products ensures our engineering team tests and masters real-world AI pipelines before deploying them for clients."
    },
    {
      question: "How does Tech22Blocks handle cross-platform mobile development?",
      answer: "We design, build, and deploy high-performance mobile applications for both iOS and Android using modern frameworks (React Native, Flutter) as well as native code where required, handling the complete lifecycle from UI/UX design to App Store and Google Play publication."
    },
    {
      question: "Can Tech22Blocks integrate AI models into existing business systems?",
      answer: "Yes. We specialize in building secure, production-grade AI solutions — including custom RAG systems, workflow automation agents, computer vision pipelines, and intelligent API integrations that connect seamlessly into your existing database and ERP software."
    },
    {
      question: "Where is Tech22Blocks located and what is your legal entity?",
      answer: "Tech22Blocks operates under RRK Software Technologies Private Limited, officially incorporated in 2025 with registered headquarters in Hanamkonda / Warangal, Telangana, India. We are officially recognized by the Government of India under DPIIT #StartupIndia and MSME."
    },
    {
      question: "How do we begin a project engagement with Tech22Blocks?",
      answer: "You can reach out through our Contact page, email us directly at shivasai@tech22blocks.in, or call +91 9392022598. We will schedule an introductory architectural discovery session with our leadership team to analyze your technical requirements, scope, and timeline."
    }
  ] as FAQItem[]
};
