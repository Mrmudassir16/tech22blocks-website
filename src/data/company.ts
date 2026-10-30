export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge?: string;
  deliverables: string[];
  technologies: string[];
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
  tagline: "Technology + Trust + Practical Solutions + Long-Term Partnership",
  yearFounded: 2025,
  email: "shivasai@tech22blocks.in",
  phone: "+91 9392022598",
  phoneDisplay: "+91 93920 22598",
  registeredAddress: "5-11-840, Hanamkonda, Warangal, 506009",
  portfolioUrl: "https://tech22blocks.in/case-studies/",
  linkedinUrl: "https://www.linkedin.com/company/tech22blocks",
  
  leadership: [
    {
      name: "Shivasai Adepu",
      role: "Director / CEO",
      linkedin: "https://www.linkedin.com/in/shivasai-adepu",
      bio: "Focuses on engineering excellence, modern product architecture, and executing technical solutions that give startups and small businesses a decisive competitive edge."
    },
    {
      name: "Rajkumar Adepu",
      role: "Director / Chairman",
      linkedin: "https://www.linkedin.com",
      bio: "Brings operational wisdom, long-term strategic perspective, and disciplined governance to ensure enduring value, integrity, and client trust."
    }
  ],

  story: {
    title: "The Tech22blocks story",
    subtitle: "Built on a simple observation: startups and small businesses deserve great technology.",
    p1: "Tech22blocks was born out of a simple observation: startups and small businesses deserve great technology — not watered-down versions of what enterprises get, not freelancers who vanish after the first payment, and not agencies that charge for slide decks instead of shipping code.",
    p2: "We built Tech22blocks to be the tech partner we wish we'd had when we were starting out — a team that speaks plainly, builds fast, and actually shows up.",
    p3: "The name? Think of it as the 22 building blocks of great software: clarity, speed, design, logic, testing, communication, honesty… and a few more we made up along the way.",
  },

  foundersVision: {
    mainHeading: "Father & Son. One Vision.",
    supportingHeading: "Building Tech22Blocks Together Since 2025",
    narrative: [
      "Tech22Blocks was founded in 2025 by a father and son who shared a simple belief: technology should solve real problems and create meaningful opportunities.",
      "What started as a shared vision became a company built on trust, persistence, and the courage to build something of their own. While experience brings perspective, the next generation brings fresh ideas, technology, and a willingness to challenge the way things have always been done.",
      "Together, they bring two generations of thinking to one mission: building practical technology solutions that help businesses grow and prepare for the future.",
      "At Tech22Blocks, this is more than a business partnership. It is a journey built on family, trust, and a shared vision for what technology can become."
    ]
  },

  mission: {
    title: "Our Mission",
    subtitle: "Why we show up every day.",
    statement: "To make high-quality software development accessible, honest, and human.",
    description: "We believe technology should empower startups to compete — not just survive. Every website, app, and tool we create is designed to give your business a real edge. Not a cosmetic one. We're not chasing projects; we're building relationships with companies that want to grow, and we're committed to growing with them."
  },

  goals: [
    {
      number: "01",
      title: "Build for impact, not volume",
      description: "We'd rather do 10 projects exceptionally well than 100 adequately. Every client gets our full attention, not a template."
    },
    {
      number: "02",
      title: "Lead in AI-driven software for SMBs",
      description: "The future of business software is smart and personalized. We're building AI tools that bring that future to every business size."
    },
    {
      number: "03",
      title: "Become the most trusted startup tech partner",
      description: "Trust is built project by project. We're in this for the long game — fairly, consistently, with integrity."
    },
    {
      number: "04",
      title: "Grow a team that loves what it builds",
      description: "Great products come from happy, curious people. We invest in our team because they're the reason everything works."
    }
  ] as GoalItem[],

  services: [
    {
      id: "website-development",
      title: "Website Development",
      shortDesc: "High-performance, search-optimized web platforms built with modern architectures for speed and conversions.",
      fullDesc: "We build modern, resilient websites and web applications engineered for speed, clean indexing, and seamless customer interactions. Every platform is tailored to your business model with scalable component architectures.",
      deliverables: ["Custom Full-Stack Web Applications", "Responsive Corporate Platforms", "Performance & Core Web Vitals Optimization", "Search Engine Optimization & Structured Data"],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"]
    },
    {
      id: "mobile-applications",
      title: "Mobile Application — iOS & Android",
      shortDesc: "Native and cross-platform mobile apps engineered for responsive performance, reliability, and smooth user flows.",
      fullDesc: "Transforming mobile workflows with intuitive iOS and Android applications. From device integration to offline synchronization and clean app-store compliance, we build apps users rely on every day.",
      deliverables: ["Cross-Platform Mobile Apps (iOS & Android)", "High-Fidelity Native Performance", "Secure API & Payment Integrations", "Offline-First Data Synchronization"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
    },
    {
      id: "uiux-design",
      title: "UI/UX Design",
      shortDesc: "Intuitive digital interfaces engineered through empathetic user research, structured wireframing, and design systems.",
      fullDesc: "Design isn't just decoration at Tech22Blocks; it is the fundamental bridge between business logic and user intent. We design clean, purposeful digital workflows that minimize cognitive load and maximize retention.",
      deliverables: ["Comprehensive UX Research & User Journeys", "Interactive Prototypes & Wireframing", "Enterprise Design Systems & Component Libraries", "Usability Audits & Conversion Optimization"],
      technologies: ["Figma", "Design Systems", "Prototyping", "Design Tokens"]
    },
    {
      id: "custom-software",
      title: "Custom Software",
      shortDesc: "Tailored software systems built to solve specific operational bottlenecks and scale seamlessly with business growth.",
      fullDesc: "Off-the-shelf software often forces you to compromise your processes. We architect bespoke software systems, internal tooling, and automated workflows crafted specifically around your unique operating model.",
      deliverables: ["Tailored ERP & Internal Operations Portals", "Scalable REST & GraphQL APIs", "Legacy System Migration & Modernization", "Database Architecture & Optimization"],
      technologies: ["PostgreSQL", "Next.js", "Docker", "Node.js / Python", "Cloud Infrastructure"]
    },
    {
      id: "it-consulting",
      title: "IT Consulting & Advisory",
      shortDesc: "Pragmatic technical advisory helping startup founders and executives make informed architectural decisions.",
      fullDesc: "Direct, jargon-free technical advisory. We evaluate your current stack, identify architectural vulnerabilities, guide vendor selection, and construct actionable technology roadmaps aligned with business objectives.",
      deliverables: ["Technology Stack Selection & Due Diligence", "Codebase & Security Architecture Audits", "Scalability & Cloud Cost Optimization", "CTO Advisory for High-Growth Startups"],
      technologies: ["System Architecture", "Cloud Audits", "DevOps & CI/CD", "Security Standards"]
    },
    {
      id: "web3",
      title: "Web3.0",
      badge: "Coming Soon",
      shortDesc: "Decentralized architecture research and smart contract integrations currently under focused development.",
      fullDesc: "We are carefully developing capabilities in decentralized infrastructure, blockchain integration, and cryptographic protocols to help businesses explore Web3 utility with security and pragmatism.",
      deliverables: ["Smart Contract Architecture & Testing", "Decentralized Identity Frameworks", "Asset Tokenization Advisory", "Web3 API Integration"],
      technologies: ["Solidity", "EVM", "IPFS", "Zero-Knowledge Concepts"]
    }
  ] as ServiceItem[],

  product: {
    headline: "We don't just build for clients. We build for ourselves too.",
    subheadline: "Every great product starts with a frustration. Ours started with a phone call — or more accurately, a call we really didn't want to answer.",
    name: "AI Call Assistant for Unknown Calls",
    status: "Under Active Development",
    problem: "Spam calls, unsolicited sales pitches, and unknown callers disrupt daily business focus and executive productivity. Yet ignoring every unknown number risks missing important customer calls, delivery coordinators, or genuine partners.",
    solution: "We are building an intelligent AI Call Assistant that answers unknown incoming calls in real-time, inquires about the caller's intent with natural conversational responsiveness, verifies caller legitimacy, and delivers an instant transcription and contextual summary directly to your dashboard.",
    features: [
      "Real-time conversational voice processing with low latency",
      "Instant caller verification and purpose classification",
      "Actionable call summary and audio transcription delivered immediately",
      "Custom screening rules tailored to business hours and priority contacts"
    ],
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
        "When Tech22Blocks was incorporated under RRK Software Technologies Private Limited, we set out with a clear mandate: build technology that delivers tangible commercial value to startups and growing businesses without unnecessary corporate bloat.",
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
        "Founded by Shivasai Adepu (Director/CEO) and Rajkumar Adepu (Director/Chairman), the company establishes its headquarters in Warangal/Hanamkonda, Telangana, committed to providing enterprise-grade software development for emerging businesses."
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
        "Designed to filter unsolicited calls and provide real-time transcription and intent detection, the product reflects the company's ethos of building tools for real-world daily frustrations."
      ],
      pdfAvailable: false
    },
    {
      id: "startup-india-msme-registration",
      date: "March 2025",
      category: "Corporate Announcement",
      title: "Tech22Blocks Secures Official Recognition under Startup India & MSME Schemes",
      summary: "Attainment of formal DPIIT recognition and Ministry of Micro, Small and Medium Enterprises certification.",
      content: [
        "Tech22Blocks (RRK Software Technologies Private Limited) has formally received official recognition under the Startup India initiative by the Department for Promotion of Industry and Internal Trade (DPIIT), alongside certification from the Ministry of MSME, Government of India.",
        "These certifications reaffirm our legal compliance and dedication to driving indigenous technology innovation."
      ],
      pdfAvailable: false
    }
  ] as NewsItem[],

  blogs: [
    {
      slug: "ai-and-the-future-of-business-software",
      title: "AI and the Future of Business Software: Moving Beyond Gimmicks to Practical Utility",
      category: "Artificial Intelligence",
      readTime: "5 min read",
      summary: "Why the real breakthrough of AI for growing businesses isn't chatbots, but deep workflow automation and pragmatic intelligence embedded directly into daily operations.",
      content: [
        "Artificial intelligence has reached a critical inflection point for small and mid-sized enterprises. For the past two years, the technology sector was flooded with conversational wrappers and generic AI demonstrations that offered little enduring business value.",
        "At Tech22Blocks, we believe the next wave of business software is pragmatic. It is about automating high-friction manual bottlenecks — screening unknown callers, reconciling invoices, auto-generating compliance reports, and personalizing user touchpoints without requiring complex prompt engineering.",
        "When business software is built with intelligence from the ground up, employees spend less time on repetitive data entry and more time on core strategic growth. The key for startups is to adopt AI that solves a specific operational pain point, not AI for its own sake."
      ]
    },
    {
      slug: "building-better-digital-products",
      title: "Building Better Digital Products: Why Simplicity and Speed Always Win",
      category: "Engineering & Design",
      readTime: "4 min read",
      summary: "Exploring the fundamental architectural and design choices that separate durable software products from bloated, abandoned systems.",
      content: [
        "Many software projects fail not because of missing features, but because of excessive complexity. When startups attempt to launch with every conceivable feature on day one, release cycles drag on, codebases become brittle, and users are overwhelmed by cluttered user interfaces.",
        "Building better digital products begins with extreme clarity of purpose. What is the single core transaction your customer needs to perform? How quickly can they accomplish it without error?",
        "By focusing on disciplined architecture, fast load times, and intuitive typography, software companies build products that retain users and withstand high operational loads without constant firefighting."
      ]
    },
    {
      slug: "what-businesses-should-consider-before-building-custom-software",
      title: "What Businesses Should Consider Before Building Custom Software",
      category: "Technology Advisory",
      readTime: "6 min read",
      summary: "An essential checklist for executives evaluating whether to buy off-the-shelf SaaS or invest in proprietary custom software solutions.",
      content: [
        "Deciding between commercial SaaS platforms and building custom software is one of the most critical technology decisions a founder or business leader will face.",
        "While SaaS provides rapid initial setup, recurring subscription costs escalate quickly as team sizes grow. More importantly, off-the-shelf software forces businesses to adapt their unique operational workflows to someone else's opinionated template.",
        "Custom software becomes the superior investment when your process itself is your competitive differentiator, when data ownership and security are non-negotiable, and when scaling custom automation delivers direct operational savings.",
        "Before writing a line of code, ensure your business requirements are clearly defined, your data schema is documented, and you are partnering with an engineering team that speaks plainly and ships reliably."
      ]
    }
  ] as BlogPost[],

  faqs: [
    {
      question: "What services does Tech22Blocks provide?",
      answer: "Tech22Blocks provides end-to-end technology solutions including Website Development, Mobile Application Development for iOS & Android, UI/UX Design, Custom Software Engineering, and IT Consulting & Advisory, with Web3.0 capabilities currently in development."
    },
    {
      question: "Does Tech22Blocks work with startups?",
      answer: "Yes. Tech22Blocks was founded specifically to make high-quality engineering and design accessible to startups and growing small businesses, providing the technical leadership of an in-house partner without enterprise bloat."
    },
    {
      question: "Do you develop Android and iOS applications?",
      answer: "Yes, we design, build, and deploy high-performance mobile applications for both iOS and Android using modern cross-platform frameworks and native architectures, handling the entire lifecycle from UI design to app store publication."
    },
    {
      question: "Can Tech22Blocks build custom software for internal operations?",
      answer: "Absolutely. We build bespoke software systems, internal management portals, workflow automation tools, and scalable APIs tailored precisely to your company's operational needs and database requirements."
    },
    {
      question: "Do you provide UI/UX design services?",
      answer: "Yes. Our design approach emphasizes clear user journeys, clean typography, interactive wireframes, and scalable design systems that make digital products intuitive and visually compelling."
    },
    {
      question: "Does Tech22Blocks build AI solutions?",
      answer: "Yes. In addition to client AI integrations, we are actively developing our own proprietary AI Call Assistant for unknown calls, giving us hands-on production expertise in voice automation and machine intelligence."
    },
    {
      question: "How can I start a project with Tech22Blocks?",
      answer: "You can reach out through our Contact page, email us directly at shivasai@tech22blocks.in, or call +91 9392022598. We will schedule a direct consultation to discuss your project scope, technical requirements, and timeline."
    }
  ] as FAQItem[]
};

