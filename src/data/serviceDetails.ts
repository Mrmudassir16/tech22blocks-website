export interface ServiceWorkItem {
  title: string;
  category: string;
  description: string;
  metrics: string[];
  techStack: string[];
  mockupBadge: string;
}

export interface ServicePlatformItem {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  features: string[];
}

export interface ServiceCapabilityItem {
  title: string;
  description: string;
  deliverables: string[];
}

export interface ServiceSolutionItem {
  title: string;
  description: string;
  industry: string;
  features: string[];
}

export interface ServiceFeatureItem {
  title: string;
  description: string;
  category: string;
}

export interface ServiceTechCategory {
  category: string;
  skills: string[];
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
  keyOutcome: string;
}

export interface ServiceFAQItem {
  question: string;
  answer: string;
}

export interface ServiceDetailData {
  slug: string;
  hero: {
    categoryBadge: string;
    title: string;
    subtitle: string;
    description: string;
    stats: { label: string; value: string }[];
  };
  platformsHeading: string;
  platformsSubtitle: string;
  platforms: ServicePlatformItem[];
  capabilitiesHeading: string;
  capabilitiesSubtitle: string;
  capabilities: ServiceCapabilityItem[];
  builtWorksHeading?: string;
  builtWorksSubtitle?: string;
  builtWorks?: ServiceWorkItem[];
  solutionsHeading: string;
  solutionsSubtitle: string;
  solutions: ServiceSolutionItem[];
  featuresHeading: string;
  featuresSubtitle: string;
  features: ServiceFeatureItem[];
  technologiesHeading: string;
  technologiesSubtitle: string;
  technologies: ServiceTechCategory[];
  processHeading: string;
  processSubtitle: string;
  process: ServiceProcessStep[];
  waysToWorkHeading: string;
  waysToWorkSubtitle: string;
  waysToWork: {
    title: string;
    subtitle: string;
    description: string;
    timeline: string;
    deliverables: string[];
  }[];
  whyChooseUs: {
    title: string;
    description: string;
    bullet: string;
  }[];
  faqs: ServiceFAQItem[];
}

export const DETAILED_SERVICES: Record<string, ServiceDetailData> = {
  // =========================================================================
  // 1. MOBILE APPLICATIONS (iOS & ANDROID)
  // =========================================================================
  'mobile-applications': {
    slug: 'mobile-applications',
    hero: {
      categoryBadge: 'Mobile Engineering & Cross-Platform',
      title: 'Mobile App Development Company',
      subtitle: 'Native iOS & Android, Flutter, and React Native Engineering',
      description: 'We design, architect, and ship high-performance mobile applications engineered for fluid 60 FPS responsiveness, offline-first synchronization, secure biometric authentication, and smooth App Store / Google Play publication.',
      stats: [
        { label: 'UI Frame Rate', value: '60 FPS' },
        { label: 'Code & IP Ownership', value: '100%' },
        { label: 'Store Approval Rate', value: '100%' },
        { label: 'Architecture SLA', value: '99.98%' },
      ],
    },
    platformsHeading: 'One Team for Every Platform',
    platformsSubtitle: 'Custom mobile app architectures tailored to your performance targets, hardware constraints, and scaling roadmap.',
    platforms: [
      {
        title: 'Android Development',
        subtitle: 'Kotlin & Jetpack Compose',
        description: 'Native Android applications engineered to run smoothly across budget handsets to flagship devices with full Material Design 3 guidelines and background services.',
        badge: 'Native Android',
        features: ['Kotlin Coroutines & Flow', 'Jetpack Compose UI', 'WorkManager & Background Sync', 'Play Console Compliance'],
      },
      {
        title: 'iOS Development',
        subtitle: 'Swift & SwiftUI',
        description: 'High-polish iPhone and iPad apps conforming rigorously to Apple Human Interface Guidelines, Apple Pay integrations, and strict App Store privacy standards.',
        badge: 'Native iOS',
        features: ['SwiftUI & Combine', 'FaceID & Keychain Security', 'CoreData & SwiftData', 'TestFlight & App Store CI'],
      },
      {
        title: 'Flutter Applications',
        subtitle: 'Single Codebase Dart Engine',
        description: 'Multi-platform development delivering near-native graphics performance on iOS and Android from one unified codebase, accelerating speed to market.',
        badge: 'Cross-Platform',
        features: ['60 FPS Skia Rendering', 'Unified Business Logic', 'Custom Native Channels', 'Rapid Staging Deployments'],
      },
      {
        title: 'React Native Development',
        subtitle: 'TypeScript & Fabric Engine',
        description: 'Cross-platform mobile apps in TypeScript that share architecture and utility modules with your web platforms, reducing maintenance overhead.',
        badge: 'Shared Ecosystem',
        features: ['New Fabric Architecture', 'Hermes Engine Optimization', 'Redux / Zustand Sync', 'Shared Web Component Tokens'],
      },
      {
        title: 'Hybrid & PWA Applications',
        subtitle: 'Capacitor & Web Bridges',
        description: 'Store-ready hybrid wrappers and progressive web apps for early-stage MVPs and content portals requiring rapid turnarounds on lean budgets.',
        badge: 'Rapid MVP',
        features: ['Capacitor Runtime', 'Service Worker Caching', 'Push Notification Bridges', 'Instant Over-the-Air Updates'],
      },
      {
        title: 'Backend APIs & Admin Panels',
        subtitle: 'Node.js, Go & Microservices',
        description: 'Robust cloud infrastructure, REST/GraphQL endpoints, multi-tenant databases, and web admin dashboards that power your mobile client apps.',
        badge: 'Cloud Backbone',
        features: ['Sub-50ms API Latency', 'WebSocket Push Systems', 'Role-Based Admin Portals', 'Automated Database Backups'],
      },
    ],
    capabilitiesHeading: 'Comprehensive Mobile App Development Services',
    capabilitiesSubtitle: 'Everything it takes to plan, design, engineer, publish, and maintain a commercial mobile application under one roof.',
    capabilities: [
      {
        title: 'Mobile Architecture & Strategy',
        description: 'Feasibility analysis, technical stack selection, offline data modeling, and app store compliance roadmaps before writing code.',
        deliverables: ['Technical Spec Blueprint', 'API Contract Definitions', 'Store Policy Audit'],
      },
      {
        title: 'Native & Cross-Platform Engineering',
        description: 'Clean, type-safe development in Swift, Kotlin, React Native, and Flutter with strict separation of presentation and business logic.',
        deliverables: ['Clean Git Repositories', 'Modular Feature Slices', 'Zero Memory Leak Profiling'],
      },
      {
        title: 'Mobile UI/UX & Interaction Design',
        description: 'Ergonomic touch design, haptic feedback patterns, dark/light theme switching, and interactive Figma prototypes tested on physical devices.',
        deliverables: ['Figma Mobile System', 'Device Interactive Prototypes', 'Design Tokens'],
      },
      {
        title: 'Offline-First Architecture & Sync',
        description: 'Resilient local database storage (SQLite / WatermelonDB) with conflict-free background synchronization when connectivity resumes.',
        deliverables: ['SQLite / Realm Schemas', 'Delta Sync Protocols', 'Network State Management'],
      },
      {
        title: 'Payment Gateways & In-App Purchases',
        description: 'Seamless checkout with Apple Pay, Google Pay, Stripe, Razorpay, and StoreKit subscriptions with server-side receipt validation.',
        deliverables: ['Apple Pay / Google Pay', 'StoreKit & Play Billing', 'Webhook Reconciliations'],
      },
      {
        title: 'Maps, Geofencing & Live Tracking',
        description: 'High-accuracy GPS positioning, low-battery geofencing, route polylines, and real-time delivery telemetry via Mapbox and Google Maps SDKs.',
        deliverables: ['Battery-Optimized GPS', 'Turn-by-Turn Routing', 'Geofencing Triggers'],
      },
      {
        title: 'App Store & Play Store Publication',
        description: 'Complete submission management: screenshot generation, metadata preparation, age rating questionnaires, and resolving Apple review guidelines.',
        deliverables: ['100% Approval Guarantee', 'App Privacy Manifests', 'Automated Fastlane Deploys'],
      },
      {
        title: '24/7 Monitoring & Version Maintenance',
        description: 'Continuous crash telemetry, OS upgrade compatibility (iOS 18+ and Android 15+), security patches, and latency optimizations.',
        deliverables: ['Crashlytics Monitoring', 'Bi-Weekly Patch Cycles', 'Performance Profiling'],
      },
    ],
    // DUMMY 2 WORKS (User instruction: implement dummy for 2 works apps)
    builtWorksHeading: 'Mobile Apps We Have Built',
    builtWorksSubtitle: 'Representative mobile products engineered with production-hardened reliability and fluid user interfaces.',
    builtWorks: [
      {
        title: 'VoiSage AI Mobile Companion',
        category: 'Enterprise Voice & Communications',
        description: 'An autonomous call telemetry and voice management mobile application for iOS and Android. Enables enterprise managers to monitor live AI voice agent calls, view real-time sentiment analysis, and trigger instant transfer overrides.',
        metrics: ['Sub-80ms Audio Telemetry', '60 FPS Waveform Rendering', '100% Offline Call History'],
        techStack: ['React Native', 'TypeScript', 'WebSockets', 'WebRTC', 'Zustand'],
        mockupBadge: 'VoiSage Mobile iOS/Android',
      },
      {
        title: 'FleetPulse Field Logistics',
        category: 'Logistics & Dispatch Telemetry',
        description: 'A mission-critical field operations app designed for cross-country logistics drivers. Features offline-first bill of lading scanning, real-time geofenced delivery check-ins, automated route optimization, and encrypted biometric authentication.',
        metrics: ['Zero Data Loss in Low Signal', 'Battery-Optimized GPS', '4.9 Star Driver Rating'],
        techStack: ['Flutter', 'Dart', 'Firebase', 'Mapbox SDK', 'SQLite'],
        mockupBadge: 'FleetPulse Logistics App',
      },
    ],
    solutionsHeading: 'Mobile Applications We Build Across Domains',
    solutionsSubtitle: 'From real-time on-demand platforms to complex enterprise field management systems.',
    solutions: [
      {
        title: 'On-Demand Delivery & Logistics',
        industry: 'Logistics & Q-Commerce',
        description: 'Three-sided platforms connecting customers, dispatchers, and drivers with live telemetry, automated assignment algorithms, and instant digital proof of delivery.',
        features: ['Live Driver Tracking', 'Dynamic Surge Pricing', 'Digital Signature & Photo Proof'],
      },
      {
        title: 'FinTech & Digital Payments',
        industry: 'Banking & Financial Services',
        description: 'Bank-grade mobile wallets, micro-lending platforms, and investment dashboards compliant with local data localization and biometric encryption.',
        features: ['Biometric Face/Touch ID', 'End-to-End Payload Encryption', 'Instant Virtual Cards & UPI'],
      },
      {
        title: 'Telemedicine & Digital Health',
        industry: 'Healthcare & Wellness',
        description: 'Secure patient-doctor consultation apps featuring encrypted video consultations, electronic health records (EHR) access, and prescription management.',
        features: ['HIPAA / HL7 Compliant Data', 'In-App Video Consultations', 'Automated Medication Reminders'],
      },
      {
        title: 'Enterprise Field Workforce',
        industry: 'Operations & Manufacturing',
        description: 'Offline-capable field technician apps for equipment inspections, automated barcode inventory logging, and immediate task escalation.',
        features: ['100% Offline Capability', 'Camera Barcode Scanning', 'Automated PDF Inspection Reports'],
      },
      {
        title: 'B2B Client Ordering & Catalog',
        industry: 'Wholesale & Distribution',
        description: 'Custom mobile ordering apps allowing wholesale buyers to browse verified price tiers, re-order inventory in 2 taps, and track shipment status.',
        features: ['Tiered Wholesale Pricing', 'Quick Reorder Flow', 'Live Stock Status & Backorders'],
      },
      {
        title: 'Education & Learning Platforms',
        industry: 'EdTech & Training',
        description: 'Interactive learning applications with offline video playback, adaptive test modules, performance analytics, and push notification study nudges.',
        features: ['DRM Video Protection', 'Interactive Quiz Engines', 'Gamified Streak Mechanics'],
      },
    ],
    featuresHeading: 'Features We Build Into Every Mobile Application',
    featuresSubtitle: 'Production-ready architectural building blocks engineered into every release from Day 1.',
    features: [
      {
        title: 'Biometric & Multi-Factor Auth',
        category: 'Security',
        description: 'Native FaceID, fingerprint authentication, and hardware-backed secure keychain credential storage.',
      },
      {
        title: 'Integrated Payment Bridges',
        category: 'Monetization',
        description: 'Frictionless checkout via Apple Pay, Google Pay, credit cards, and recurring in-app subscriptions.',
      },
      {
        title: 'High-Precision Maps & Tracking',
        category: 'Location Services',
        description: 'Battery-conscious background GPS telemetry, polygon geofencing, and interactive route rendering.',
      },
      {
        title: 'Instant Push & In-App Alerts',
        category: 'Engagement',
        description: 'Targeted segmentation, rich media notifications, and background silent sync triggers via Firebase FCM and APNs.',
      },
      {
        title: 'Real-Time In-App Chat & Calls',
        category: 'Communication',
        description: 'Low-latency WebSockets messaging, message read receipts, image uploads, and integrated WebRTC calling.',
      },
      {
        title: 'Resilient Offline Mode',
        category: 'Performance',
        description: 'Complete data accessibility in airplane mode with seamless background sync once cellular connection returns.',
      },
      {
        title: 'Deep Analytics & Crash Telemetry',
        category: 'Observability',
        description: 'Event-driven funnel tracking, user journey session replays, and instant exception alerts via Crashlytics.',
      },
      {
        title: 'Full Multi-Language (i18n)',
        category: 'Global Reach',
        description: 'Dynamic localization support for regional languages with automatic RTL layout switching and locale currency formatting.',
      },
    ],
    technologiesHeading: 'Technologies We Deploy',
    technologiesSubtitle: 'Modern, industry-standard languages, frameworks, and SDKs configured for production longevity.',
    technologies: [
      {
        category: 'Native Mobile Languages',
        skills: ['Kotlin', 'Swift', 'Java', 'Objective-C'],
      },
      {
        category: 'Cross-Platform Frameworks',
        skills: ['Flutter', 'React Native', 'Capacitor', 'Expo Application Services'],
      },
      {
        category: 'Mobile UI & State Engines',
        skills: ['Jetpack Compose', 'SwiftUI', 'Zustand', 'Redux Toolkit', 'MobX'],
      },
      {
        category: 'Backend & Cloud Services',
        skills: ['Node.js / Express', 'Go (Golang)', 'Firebase', 'AWS Lambda', 'Supabase'],
      },
      {
        category: 'Local Storage & Databases',
        skills: ['SQLite', 'Realm', 'WatermelonDB', 'PostgreSQL', 'Redis'],
      },
      {
        category: 'DevOps, CI/CD & Testing',
        skills: ['Fastlane', 'GitHub Actions', 'Jest', 'Detox E2E', 'Firebase Test Lab'],
      },
    ],
    processHeading: 'Our 5-Stage Mobile Engineering Methodology',
    processSubtitle: 'A disciplined, milestone-driven pipeline ensuring predictable velocity, code clarity, and reliable store launches.',
    process: [
      {
        step: '01',
        title: 'Discovery & Feasibility Scope',
        description: 'We map user personas, define target OS versions, audit third-party API dependencies, and construct detailed technical architecture blueprints.',
        keyOutcome: 'Definitive Milestone Roadmap & Technical Spec',
      },
      {
        step: '02',
        title: 'Interactive UI/UX & Prototypes',
        description: 'Figma component systems, clickable mobile prototypes, and ergonomic touch flows reviewed on physical devices before writing code.',
        keyOutcome: 'Approved Clickable Prototypes & Design Tokens',
      },
      {
        step: '03',
        title: 'Sprint Development & Build',
        description: 'Two-week sprint cycles with shared Git repositories, automated CI/CD builds, and weekly TestFlight/APK staging releases for your team to test.',
        keyOutcome: 'Working Bi-Weekly Staging Releases & Clean Code',
      },
      {
        step: '04',
        title: 'QA, Device Testing & Audits',
        description: 'Automated unit tests, manual QA on 15+ physical screen sizes, memory leak profiling, and strict security vulnerability scanning.',
        keyOutcome: 'Zero-Defect Sign-off & Store Compliance Audit',
      },
      {
        step: '05',
        title: 'Store Launch & Continuous Ops',
        description: 'Full App Store and Play Store submission management, release rollout monitoring, crash telemetry tracking, and immediate post-launch patches.',
        keyOutcome: 'Live App in Stores & 24/7 Production Monitoring',
      },
    ],
    waysToWorkHeading: 'Ways to Work With Us',
    waysToWorkSubtitle: 'Select the engagement model that matches your product maturity, budget, and commercial goals.',
    waysToWork: [
      {
        title: 'MVP Fast-Track',
        subtitle: 'For Startups & Rapid Validation',
        description: 'We design, engineer, and deploy a lean, battle-ready mobile MVP to iOS and Android stores in 4 to 8 weeks so you can acquire users and raise capital.',
        timeline: '4 – 8 Weeks Delivery',
        deliverables: ['Cross-Platform Mobile App', 'Essential Backend APIs', 'App Store / Play Store Publication', '100% Code & IP Ownership'],
      },
      {
        title: 'Full Product Engineering',
        subtitle: 'End-to-End Commercial Application',
        description: 'Complete architecture from discovery to production: bespoke UI/UX, complex native device features, high-concurrency cloud backend, and automated CI/CD.',
        timeline: '10 – 16 Weeks Delivery',
        deliverables: ['Custom Native / Cross-Platform Apps', 'Microservices Backend & Database', 'Admin Management Portal', 'SLA Uptime & Maintenance Agreement'],
      },
      {
        title: 'Dedicated Mobile Engineering Pod',
        subtitle: 'Scale Your In-House Roadmap',
        description: 'Integrate dedicated senior mobile engineers and architects directly into your daily sprint workflows. Full transparency, daily standups, and direct Git commits.',
        timeline: 'Monthly Flexible Retainer',
        deliverables: ['Dedicated Senior Mobile Developers', 'Direct Slack & Git Collaboration', 'Fast Velocity Feature Rollouts', 'Zero Hiring Overhead'],
      },
    ],
    whyChooseUs: [
      {
        title: 'Zero Architectural Shortcuts',
        description: 'We do not paste unstable template code. Every application is built with modular architecture, strict typing, and zero memory leaks.',
        bullet: 'Production-Hardened Engineering',
      },
      {
        title: 'Direct Senior Engineering Access',
        description: 'You speak directly with the architects and engineers writing your code. No non-technical account middlemen causing miscommunication.',
        bullet: 'Engineering Transparency',
      },
      {
        title: '100% Code & Asset Ownership',
        description: 'You own 100% of all Git repositories, signing certificates, cloud keys, and design files from Day 1. No vendor lock-in, ever.',
        bullet: 'Complete IP Rights',
      },
      {
        title: 'Guaranteed Store Approvals',
        description: 'We handle every Apple App Store and Google Play policy requirement, ensuring smooth, first-time approval without rejection delays.',
        bullet: '100% Approval Record',
      },
    ],
    faqs: [
      {
        question: 'How much does custom mobile app development cost?',
        answer: 'Costs depend strictly on the complexity of features, the number of platforms (iOS, Android, or both), backend integration depth, and offline sync requirements. A focused startup MVP typically ranges from $5,000 to $12,000, while a comprehensive enterprise platform with custom microservices ranges from $15,000 to $35,000+. Every project is broken into transparent, milestone-billed sprints with zero hidden surprises.',
      },
      {
        question: 'How long does it take to develop and launch a mobile app?',
        answer: 'A lean, high-velocity MVP is typically built and published to the App Store and Google Play in 4 to 8 weeks. More complex enterprise applications with real-time tracking, extensive third-party integrations, and custom admin portals take between 10 and 16 weeks. We provide a guaranteed milestone roadmap before writing code.',
      },
      {
        question: 'Should I choose Native (Swift/Kotlin) or Cross-Platform (Flutter/React Native)?',
        answer: 'For 90% of business applications, cross-platform frameworks like Flutter or React Native provide the best ROI: a single codebase, 60 FPS near-native graphics, identical business logic across iOS and Android, and 40% faster time to market. We recommend pure native Swift and Kotlin primarily for apps requiring low-level hardware drivers, complex AR/VR processing, or OS-specific background threads.',
      },
      {
        question: 'Who owns the source code and intellectual property?',
        answer: 'You do — 100%. From the moment the repository is initialized, all source code, Figma design files, cloud deployment keys, and store signing certificates belong exclusively to your organization. Tech22Blocks operates on an absolute work-for-hire model with zero proprietary lock-in.',
      },
      {
        question: 'Do you help publish the app to Apple App Store and Google Play?',
        answer: 'Yes. We manage the entire submission lifecycle: preparing high-resolution store graphics, writing compliance descriptions, configuring in-app privacy manifests, submitting builds through TestFlight and Play Console internal tracks, and addressing all Apple/Google reviewer questions until official approval.',
      },
      {
        question: 'What happens after the app is launched?',
        answer: 'We provide 30 to 60 days of complimentary post-launch warranty and monitoring to resolve any edge-case bugs. Afterwards, we offer continuous maintenance retainers that include OS upgrade compatibility (iOS 18+ and Android 15+), security patching, database performance tuning, and new feature sprints.',
      },
    ],
  },

  // =========================================================================
  // 2. WEBSITE DEVELOPMENT
  // =========================================================================
  'website-development': {
    slug: 'website-development',
    hero: {
      categoryBadge: 'Full-Stack Web & Digital Experience',
      title: 'Website Development & Web Platforms',
      subtitle: 'Modern Next.js, Full-Stack TypeScript, and Enterprise Portals',
      description: 'We engineer ultra-fast, search-optimized web platforms, headless CMS ecosystems, and complex customer portals built with modern component architectures for sub-second page loads, ironclad security, and high conversion rates.',
      stats: [
        { label: 'Core Web Vitals', value: '95+' },
        { label: 'LCP Page Load', value: '< 0.8s' },
        { label: 'SEO Schema Score', value: '100%' },
        { label: 'Uptime SLA', value: '99.99%' },
      ],
    },
    platformsHeading: 'Architectures We Specialize In',
    platformsSubtitle: 'Modern web architectures tailored to handle heavy traffic, enterprise SEO indexing, and complex workflows.',
    platforms: [
      {
        title: 'Next.js & React SSR/SSG',
        subtitle: 'App Router & Edge Rendering',
        description: 'Server-side rendered (SSR) and statically generated (SSG) web applications that deliver instant First Contentful Paint and maximize Google search indexing.',
        badge: 'High Performance',
        features: ['Next.js 14 App Router', 'React Server Components', 'Edge Middleware Routing', 'Sub-second LCP Speeds'],
      },
      {
        title: 'Enterprise Customer Portals',
        subtitle: 'Authenticated SaaS Interfaces',
        description: 'Secure, authenticated B2B customer self-service portals, account dashboards, invoice management, and automated subscription billing.',
        badge: 'B2B Portals',
        features: ['Role-Based Access Control', 'Multi-Tenant Isolation', 'Stripe / Payment Billing', 'Audit Trail Logging'],
      },
      {
        title: 'Modern Headless CMS',
        subtitle: 'Sanity, Strapi & Contentful',
        description: 'Decoupled content architecture giving marketing teams full editorial autonomy with drag-and-drop page building while keeping code pristine.',
        badge: 'Marketing Autonomy',
        features: ['Schema-Defined Blocks', 'Real-Time Live Previews', 'Zero-Code Page Builder', 'Automated Image CDN'],
      },
      {
        title: 'High-Volume E-Commerce',
        subtitle: 'Shopify Plus & Custom Stores',
        description: 'Custom e-commerce storefronts engineered with instant cart updates, optimized checkout funnels, multi-currency pricing, and ERP inventory sync.',
        badge: 'Commerce Engines',
        features: ['Headless Shopify Storefronts', 'Sub-Second Checkout Flow', 'Inventory Webhook Sync', 'Automated Tax & Shipping'],
      },
      {
        title: 'Progressive Web Apps (PWA)',
        subtitle: 'App-Like Web Experiences',
        description: 'Installable web applications with offline asset caching, push notification triggers, and desktop/mobile responsiveness without store downloads.',
        badge: 'Zero Friction',
        features: ['Service Worker Cache', 'Add to Home Screen', 'Web Push Notifications', 'Offline Data Resilience'],
      },
      {
        title: 'Edge APIs & Microservices',
        subtitle: 'Node.js, Go & Cloudflare Workers',
        description: 'Ultra-low latency backend APIs deployed to global edge locations, ensuring sub-50ms data queries for global audiences.',
        badge: 'Global Scale',
        features: ['Edge KV & Redis Caching', 'REST & GraphQL Gateways', 'Rate Limiting & DDoS Shield', 'Zero Cold Start Times'],
      },
    ],
    capabilitiesHeading: 'Comprehensive Website Development Capabilities',
    capabilitiesSubtitle: 'From technical architecture to enterprise SEO and post-launch maintenance, engineered under one roof.',
    capabilities: [
      {
        title: 'Architecture Blueprinting & Scope',
        description: 'Detailed analysis of information architecture, component hierarchy, database schemas, and Core Web Vitals optimization targets.',
        deliverables: ['Information Architecture Map', 'Technical Requirements Doc', 'Component Hierarchy Tree'],
      },
      {
        title: 'Custom Component Systems (Tailwind)',
        description: 'Tailored, atomic UI component libraries built in strict TypeScript and Tailwind CSS, eliminating bloated third-party template overhead.',
        deliverables: ['Type-Safe Components', 'Tailwind Design System', 'Dark/Light Theme Engine'],
      },
      {
        title: 'Technical SEO & Rich Snippets',
        description: 'Automated JSON-LD schema generation, dynamic XML sitemaps, semantic HTML5 landmarks, OpenGraph cards, and canonical URL handling.',
        deliverables: ['JSON-LD Structured Schema', 'Automated Dynamic Sitemaps', 'Sub-second TTFB Metrics'],
      },
      {
        title: 'API Integrations & Third-Party Hubs',
        description: 'Secure connections to CRMs (HubSpot, Salesforce), ERPs, payment gateways, marketing automation tools, and legacy database systems.',
        deliverables: ['REST / GraphQL Connectors', 'Webhook Ingestion Pipelines', 'Error Retry Queues'],
      },
      {
        title: 'Responsive & Multi-Device QA',
        description: 'Pixel-perfect visual fidelity tested across 20+ desktop, tablet, and mobile viewport widths to ensure zero visual regressions.',
        deliverables: ['Cross-Browser Compatibility', 'Lighthouse 95+ Score Audit', 'Touch Ergonomics Tuning'],
      },
      {
        title: 'Enterprise Security & Compliance',
        description: 'Implementation of strict Content Security Policies (CSP), sanitized input validation, HTTPS/TLS 1.3 encryption, and GDPR/CCPA cookie consent.',
        deliverables: ['Strict CSP Headers', 'Sanitized Form Inputs', 'OWASP Top 10 Hardening'],
      },
      {
        title: 'CI/CD Pipelines & Zero-Downtime Deploys',
        description: 'Automated GitHub Actions workflows with preview environments for pull requests and atomic zero-downtime production cutovers.',
        deliverables: ['Automated PR Previews', 'Blue-Green Rollouts', 'Instant Rollback Capability'],
      },
      {
        title: 'Continuous Optimization & Maintenance',
        description: '24/7 uptime telemetry, monthly dependency vulnerability patching, performance profiling, and conversion rate optimizations.',
        deliverables: ['Uptime Telemetry Alerts', 'Security Patch Retainers', 'Core Web Vitals Guardrails'],
      },
    ],
    // DUMMY 2 WORKS (User instruction: implement dummy for 2 works web apps)
    builtWorksHeading: 'Web Platforms We Have Built',
    builtWorksSubtitle: 'Representative web engineering projects delivering sub-second speed, search visibility, and seamless conversions.',
    builtWorks: [
      {
        title: 'NexusFlow Enterprise Client Portal',
        category: 'Enterprise SaaS & B2B Portal',
        description: 'A mission-critical B2B customer self-service portal engineered for an industrial distributor. Replaced manual email ticketing with real-time order tracking, automated invoicing, bulk catalog search, and multi-tier user role permissions.',
        metrics: ['Sub-second LCP (0.6s)', '99.99% Production Uptime', '65% Reduction in Support Tickets'],
        techStack: ['Next.js 14 App Router', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Stripe Billing'],
        mockupBadge: 'NexusFlow B2B Portal',
      },
      {
        title: 'ApexAnalytics SaaS Dashboard',
        category: 'Business Intelligence & Data Platform',
        description: 'A real-time financial telemetry dashboard processing millions of daily transactions. Features custom vector chart rendering, automated PDF reporting, multi-currency conversion, and team workspace collaboration.',
        metrics: ['Instant Client-Side Filtering', '100k+ Data Points at 60 FPS', '100% Core Web Vitals'],
        techStack: ['Next.js SSR', 'React', 'TypeScript', 'Edge Functions', 'Tailwind CSS', 'Chart.js'],
        mockupBadge: 'ApexAnalytics Web App',
      },
    ],
    solutionsHeading: 'Web Solutions We Build Across Industries',
    solutionsSubtitle: 'From high-conversion enterprise marketing engines to complex authenticated operational dashboards.',
    solutions: [
      {
        title: 'Corporate & Enterprise Portals',
        industry: 'B2B & Technology',
        description: 'Authoritative, lightning-fast digital headquarters showcasing corporate capabilities, leadership teams, investor relations, and regulatory disclosures.',
        features: ['Enterprise Design Systems', 'Multi-Language Localization', 'Compliant Disclosure Vaults'],
      },
      {
        title: 'SaaS Marketing & Onboarding Engines',
        industry: 'Software & Technology',
        description: 'High-conversion marketing websites with interactive feature walkthroughs, ROI calculators, dynamic pricing tiers, and seamless trial sign-up flows.',
        features: ['Interactive Product Demos', 'Dynamic Pricing Toggles', 'Segment / Mixpanel Telemetry'],
      },
      {
        title: 'Headless E-Commerce Platforms',
        industry: 'Retail & Consumer Brands',
        description: 'Ultra-fast storefronts separating frontend design from backend inventory logic, achieving sub-second catalog navigation and higher checkout conversions.',
        features: ['Shopify Storefront API', 'Instant Cart Sliding Drawer', 'Dynamic Inventory Stock Badges'],
      },
      {
        title: 'Healthcare & Clinical Portals',
        industry: 'Healthcare & Life Sciences',
        description: 'Accessible, HIPAA-compliant patient information centers, provider directories, doctor appointment bookings, and lab report downloads.',
        features: ['WCAG 2.1 AA Accessibility', 'Provider Search Geocoding', 'Encrypted Patient Data Bridges'],
      },
      {
        title: 'Real Estate & Property Showcases',
        industry: 'Real Estate & Infrastructure',
        description: 'Interactive property listings with virtual 3D tour embeds, interactive floor plan viewers, neighborhood amenities mapping, and lead capture routing.',
        features: ['High-Res Image Optimization', 'Interactive Mapbox Maps', 'Direct CRM Lead Ingestion'],
      },
      {
        title: 'EdTech & Membership Hubs',
        industry: 'Education & Training',
        description: 'Content-gated educational portals featuring course catalog browsing, video streaming with progress tracking, and digital certificate generation.',
        features: ['Gated Member Workspaces', 'Video Progress Bookmarking', 'Dynamic PDF Certs'],
      },
    ],
    featuresHeading: 'Architectural Standards Built Into Every Website',
    featuresSubtitle: 'High-performance fundamentals included as non-negotiable defaults in our web engineering standard.',
    features: [
      {
        title: 'Sub-Second LCP & Speed',
        category: 'Performance',
        description: 'Aggressive edge caching, modern WebP/AVIF asset compression, and minimal JavaScript bundles ensure lightning-quick loads.',
      },
      {
        title: 'Full Technical SEO Schema',
        category: 'Search Optimization',
        description: 'Automated JSON-LD rich snippet schema for organizations, services, FAQs, breadcrumbs, and articles.',
      },
      {
        title: 'Strict TypeScript Type Safety',
        category: 'Reliability',
        description: 'End-to-end typing from database query to UI component props prevents runtime crashes and simplifies future feature additions.',
      },
      {
        title: 'Enterprise Security Hardening',
        category: 'Security',
        description: 'Configured HTTP security headers (HSTS, CSP, X-Frame-Options), CSRF protection, and sanitized server action inputs.',
      },
      {
        title: 'Seamless Mobile Responsiveness',
        category: 'Responsiveness',
        description: 'Engineered from 320px mobile screens to 4K ultrawide monitors with fluid typography, responsive grids, and touch ergonomics.',
      },
      {
        title: 'Accessibility (WCAG 2.1 AA)',
        category: 'Compliance',
        description: 'Proper color contrast ratios, full keyboard navigation, screen reader ARIA landmarks, and focus ring indicators.',
      },
      {
        title: 'Automated CI/CD Workflows',
        category: 'DevOps',
        description: 'Every pull request triggers automated type checks, linting, and a unique preview URL before deployment to production.',
      },
      {
        title: 'Dual Light & Dark Theme Support',
        category: 'User Experience',
        description: 'Flicker-free color mode toggling utilizing CSS variables, respecting system preferences, and remembering user choices.',
      },
    ],
    technologiesHeading: 'Technologies We Deploy',
    technologiesSubtitle: 'The modern web stack engineered for speed, reliability, and enterprise maintainability.',
    technologies: [
      {
        category: 'Frontend Frameworks',
        skills: ['Next.js 14 App Router', 'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      },
      {
        category: 'Headless CMS Platforms',
        skills: ['Sanity.io', 'Strapi CMS', 'Contentful', 'WordPress REST / GraphQL'],
      },
      {
        category: 'Backend & Edge Runtime',
        skills: ['Node.js', 'Go', 'Cloudflare Workers', 'Vercel Edge Functions', 'AWS Lambda'],
      },
      {
        category: 'Databases & Caching',
        skills: ['PostgreSQL (Prisma / Drizzle)', 'Redis', 'Supabase', 'MongoDB'],
      },
      {
        category: 'Analytics & Tracking',
        skills: ['Google Analytics 4', 'Google Tag Manager', 'PostHog', 'Mixpanel'],
      },
      {
        category: 'Deployment & Monitoring',
        skills: ['Vercel Enterprise', 'AWS CloudFront / S3', 'GitHub Actions', 'Sentry Telemetry'],
      },
    ],
    processHeading: 'Our 5-Stage Web Engineering Process',
    processSubtitle: 'A structured, transparent delivery pipeline ensuring every sprint ships verifiable, production-grade code.',
    process: [
      {
        step: '01',
        title: 'Architecture & Information Mapping',
        description: 'We analyze your business conversion funnels, map URL hierarchies, audit competitor benchmarks, and construct data schema specifications.',
        keyOutcome: 'Information Architecture Blueprint & Sitemap',
      },
      {
        step: '02',
        title: 'Design Systems & UI Wireframing',
        description: 'Bespoke Figma design tokens, high-contrast layouts, typography scales, and interactive desktop/mobile prototypes for stakeholder sign-off.',
        keyOutcome: 'Approved Component Library & Figma Design Tokens',
      },
      {
        step: '03',
        title: 'Full-Stack Sprints & Integration',
        description: 'Modular Next.js development with weekly staging deployments. We connect CMS models, configure API endpoints, and write type-safe components.',
        keyOutcome: 'Live Staging Previews & Transparent Git Repositories',
      },
      {
        step: '04',
        title: 'Performance & Security Hardening',
        description: 'Rigorous Core Web Vitals auditing, cross-device QA, screen-reader accessibility verification, and SSL/CSP security hardening.',
        keyOutcome: 'Lighthouse 95+ Audit & Security Clearance',
      },
      {
        step: '05',
        title: 'Production Cutover & Launch',
        description: 'Zero-downtime DNS cutover, automated 301 redirect mapping, search console indexing verification, and 24/7 uptime monitoring.',
        keyOutcome: 'Live Platform, Verified Indexing & Uptime Telemetry',
      },
    ],
    waysToWorkHeading: 'Ways to Work With Us',
    waysToWorkSubtitle: 'Select the engagement model that matches your scope, internal capacity, and timeline.',
    waysToWork: [
      {
        title: 'Corporate Website Redesign',
        subtitle: 'For Growing Enterprises',
        description: 'Complete overhaul of your web presence: modern architecture, custom Tailwind design system, headless CMS integration, and technical SEO overhaul.',
        timeline: '6 – 10 Weeks Delivery',
        deliverables: ['Custom Next.js Web Platform', 'Headless CMS Setup & Training', 'Technical SEO & Schema Setup', '100% Code & Asset Handover'],
      },
      {
        title: 'B2B Client Portal / Web App',
        subtitle: 'Custom Authenticated Platforms',
        description: 'Bespoke web applications with user logins, role permissions, payment integrations, real-time dashboards, and complex database models.',
        timeline: '8 – 14 Weeks Delivery',
        deliverables: ['Full-Stack Web Application', 'Role-Based Auth & Database', 'Automated Billing & Reporting', 'Complete API Documentation'],
      },
      {
        title: 'Continuous Web Engineering Pod',
        subtitle: 'Ongoing Growth & Feature Sprints',
        description: 'Dedicated senior full-stack web engineers collaborating with your product team to ship new features, conduct A/B tests, and maintain 99.99% uptime.',
        timeline: 'Monthly Flexible Retainer',
        deliverables: ['Dedicated Full-Stack Engineers', 'Bi-Weekly Feature Sprints', 'Core Web Vitals Guardrails', 'Zero Technical Debt Retainers'],
      },
    ],
    whyChooseUs: [
      {
        title: 'Sub-Second Performance by Design',
        description: 'We do not build bloated sites with 50 third-party plugins. Every line of code is clean, compiled, and optimized for speed and SEO.',
        bullet: 'Lighthouse 95+ Standard',
      },
      {
        title: 'Direct Engineering Leadership',
        description: 'Collaborate directly with senior full-stack engineers who understand database indexing, edge caching, and modern web UX.',
        bullet: 'Zero Account Middlemen',
      },
      {
        title: '100% Code & Cloud IP Ownership',
        description: 'You own the GitHub repositories, DNS configurations, cloud hosting accounts, and content keys from the start. No licensing fees.',
        bullet: 'Zero Vendor Lock-in',
      },
      {
        title: 'Search Engine Dominance',
        description: 'We build search visibility directly into the codebase with semantic HTML5, automated JSON-LD schemas, and fast page load speeds.',
        bullet: 'Engineered for Rankings',
      },
    ],
    faqs: [
      {
        question: 'Why does Tech22Blocks build with Next.js instead of WordPress?',
        answer: 'While WordPress relies on bloated plugins that slow down page loads and introduce security vulnerabilities, Next.js compiles into static HTML and edge-rendered TypeScript. This achieves sub-second load times, superior Google Core Web Vitals rankings, virtually impenetrable security (no SQL injection on the frontend), and the flexibility to connect modern headless CMS platforms like Sanity or Strapi so your marketing team can still edit content effortlessly.',
      },
      {
        question: 'How long does a full website development project take?',
        answer: 'A custom corporate or marketing platform typically takes 4 to 8 weeks from discovery to final DNS cutover. Complex web applications, B2B customer portals, or platforms with custom billing engines take between 8 and 14 weeks. We work in transparent, weekly milestone sprints so you can test working software every 7 days.',
      },
      {
        question: 'Will our existing search engine rankings be affected during a redesign?',
        answer: 'We strictly protect and improve your SEO equity. Prior to launch, we extract all existing URLs, configure comprehensive 1-to-1 301 redirect maps, preserve critical heading hierarchies, and enhance structured data schemas. Most clients see an immediate improvement in rankings due to faster Core Web Vitals.',
      },
      {
        question: 'Can our non-technical team update text and images easily?',
        answer: 'Yes. We connect modern headless content management systems (such as Sanity, Strapi, or Contentful) configured with intuitive visual fields, live draft previews, and media asset libraries. Your marketing team can publish new pages, blog articles, and team members without touching a single line of code.',
      },
      {
        question: 'Who owns the website and code after launch?',
        answer: 'You own 100% of everything: the GitHub repository, domain DNS records, cloud hosting infrastructure, design tokens, and database assets. We hand over full root credentials and documentation upon project completion.',
      },
      {
        question: 'What ongoing maintenance and support do you provide?',
        answer: 'All projects include 30 days of complimentary post-launch monitoring and bug fixing. We also offer monthly maintenance retainers covering 24/7 uptime monitoring, security dependency patches, quarterly performance audits, and dedicated hours for new feature sprints.',
      },
    ],
  },

  // =========================================================================
  // 3. UI/UX DESIGN (NO BUILT WORKS)
  // =========================================================================
  'uiux-design': {
    slug: 'uiux-design',
    hero: {
      categoryBadge: 'Digital Product Design & Systems',
      title: 'UI/UX Design & Product Architecture',
      subtitle: 'Purposeful Digital Interfaces Engineered for Conversion & Adoption',
      description: 'At Tech22Blocks, design is the fundamental bridge between complex business logic and human intent. We design clean, purposeful digital workflows, scalable enterprise component libraries, and interactive Figma prototypes that minimize cognitive friction and maximize user adoption.',
      stats: [
        { label: 'Usability Adoption', value: '4x Lift' },
        { label: 'Design Tokens', value: '100% Tokenized' },
        { label: 'Device Prototypes', value: 'Physical QA' },
        { label: 'Engineering Handoff', value: 'Zero Friction' },
      ],
    },
    platformsHeading: 'Design Systems & Interface Domains',
    platformsSubtitle: 'Specialized product design across web platforms, native mobile apps, and enterprise dashboards.',
    platforms: [
      {
        title: 'Enterprise Design Systems',
        subtitle: 'Figma Tokens & Component Libraries',
        description: 'Scalable design token architectures spanning typography, color harmonies, elevation scales, and interactive states aligned with Tailwind and CSS variables.',
        badge: 'Design System',
        features: ['Atomic Component Architecture', 'WCAG AAA Color Palettes', 'Figma Variables & Modes', 'Developer Handoff Specs'],
      },
      {
        title: 'Mobile App UX/UI Design',
        subtitle: 'iOS & Android Native Guidelines',
        description: 'Ergonomic touch targets, native iOS Human Interface patterns, Android Material 3 guidelines, and micro-interactions optimized for one-handed mobile use.',
        badge: 'Mobile Native',
        features: ['Thumb-Zone Optimization', 'Native Sheet & Drawer Flows', 'Haptic Feedback Specifications', 'Dark & Light Mode Variants'],
      },
      {
        title: 'SaaS Dashboards & Analytics',
        subtitle: 'Complex Data Visualizations',
        description: 'Translating dense datasets, multi-step filter funnels, and data tables into intuitive, clutter-free analytical interfaces that business users love.',
        badge: 'Data Products',
        features: ['High-Density Table Layouts', 'Interactive Chart Visuals', 'Actionable Telemetry Cards', 'Modular Dashboard Widgets'],
      },
      {
        title: 'User Journey & Empathy Research',
        subtitle: 'Wireframing & Heuristic Audits',
        description: 'Deep customer interviews, competitive heuristic auditing, task flow mapping, and low-fidelity wireframing to eliminate usability friction early.',
        badge: 'UX Research',
        features: ['Persona Archetype Mapping', 'Task Completion Funnels', 'Heuristic Usability Audits', 'Information Architecture'],
      },
      {
        title: 'Clickable Interactive Prototypes',
        subtitle: 'High-Fidelity Figma Flows',
        description: 'Fully interactive prototypes simulating micro-interactions, input states, and animated transitions so stakeholders can validate products before code execution.',
        badge: 'Rapid Validation',
        features: ['Realistic Clickable Flows', 'Form Validation States', 'Micro-Animation Timings', 'User Testing Ready'],
      },
      {
        title: 'Conversion Rate Optimization (CRO)',
        subtitle: 'Checkout & Onboarding Funnels',
        description: 'Redesigning critical conversion moments — sign-up steps, pricing comparisons, and multi-stage checkouts — to systematically reduce drop-off rates.',
        badge: 'Conversion Lift',
        features: ['Friction-Free Onboarding', 'Checkout Form Minimization', 'Trust Badges & Social Proof', 'A/B Testing Variants'],
      },
    ],
    capabilitiesHeading: 'End-to-End Product Design Capabilities',
    capabilitiesSubtitle: 'From discovery research to production design token handoffs for development teams.',
    capabilities: [
      {
        title: 'UX Heuristic Audits & Bottleneck Analysis',
        description: 'Systematic evaluation of existing digital products against Nielsen Norman heuristics to identify drop-off triggers and usability flaws.',
        deliverables: ['Heuristic Audit Report', 'Friction Scorecard', 'Actionable Redesign Priorities'],
      },
      {
        title: 'User Personas & Journey Mapping',
        description: 'Constructing rigorous customer archetypes, empathy maps, and end-to-end task flows spanning every touchpoint from awareness to retention.',
        deliverables: ['User Persona Dossiers', 'Service Blueprint Maps', 'User Flow Diagrams'],
      },
      {
        title: 'Low-Fidelity Wireframing & Information Architecture',
        description: 'Rapid structural exploration of screen layouts, content hierarchy, navigation models, and interaction patterns before visual styling.',
        deliverables: ['Wireframe Deck', 'Navigation Tree', 'Content Hierarchy Model'],
      },
      {
        title: 'High-Fidelity UI & Visual Craft',
        description: 'World-class visual aesthetics combining contemporary typography, bespoke micro-interactions, subtle glassmorphism, and elegant color systems.',
        deliverables: ['Pixel-Perfect Screen Mockups', 'Component State Specs', 'Custom Vector Iconography'],
      },
      {
        title: 'Interactive Device Prototyping',
        description: 'Clickable Figma prototypes mirroring real application logic, dynamic component variants, keyboard inputs, and responsive navigation.',
        deliverables: ['Interactive Prototype Link', 'User Testing Recording', 'Interaction Motion Specs'],
      },
      {
        title: 'Design Token Systems & Developer Handoff',
        description: 'Zero ambiguity handoffs: automated Figma-to-code design tokens (spacing, typography, shadows, colors) that map directly to Tailwind CSS.',
        deliverables: ['Token JSON Export', 'Tailwind Config Mapping', 'Engineering Handoff Walkthrough'],
      },
      {
        title: 'Accessibility (WCAG 2.1 AA) Compliance',
        description: 'Color contrast ratio verification, focus ring visibility, screen-reader text alternatives, and legible typographic hierarchies.',
        deliverables: ['Contrast Ratio Audit', 'Keyboard Nav Spec', 'Screen Reader Labels'],
      },
      {
        title: 'Design QA & Staging Review',
        description: 'Engineers review live staging builds against Figma source files to ensure spacing, fonts, and animation transitions match pixel for pixel.',
        deliverables: ['Design QA Punch List', 'Visual Regression Fixes', 'Final Release Sign-off'],
      },
    ],
    // NO BUILT WORKS as requested for this service
    solutionsHeading: 'Product Design Across Commercial Verticals',
    solutionsSubtitle: 'Designing purposeful interfaces across enterprise, consumer, and specialized domain software.',
    solutions: [
      {
        title: 'B2B SaaS & Cloud Platforms',
        industry: 'Software & Technology',
        description: 'Clean, modular interfaces for complex multi-tenant platforms, permissions managers, and billing administration.',
        features: ['Role-Based UI Views', 'Bulk Operations Actions', 'Custom Table Column Layouts'],
      },
      {
        title: 'FinTech & Banking Interfaces',
        industry: 'Finance & Payments',
        description: 'Intuitive money transfer flows, cryptographic portfolio tracking, transaction histories, and KYC verification sequences.',
        features: ['Trust-Reinforcing Microcopy', 'Biometric Auth Prompts', 'Instant Transaction Feedback'],
      },
      {
        title: 'Healthcare & Clinical Portals',
        industry: 'Healthcare & MedTech',
        description: 'Calm, accessible user experiences for patients booking appointments and physicians reviewing lab panels with zero clutter.',
        features: ['High-Legibility Data Cards', 'Critical Alert Highlighting', 'HIPAA Consent Workflows'],
      },
      {
        title: 'E-Commerce & Digital Marketplaces',
        industry: 'Retail & Consumer',
        description: 'High-converting product browsing, instant search filtering, clear price breakdowns, and friction-free multi-step checkouts.',
        features: ['Sticky Buy Controls', 'Customer Review Highlights', 'One-Page Checkout Architecture'],
      },
      {
        title: 'Internal Ops & Logistics Tooling',
        industry: 'Supply Chain & Field Services',
        description: 'High-velocity operational interfaces built for dispatchers and warehouse teams where speed and error prevention are critical.',
        features: ['Keyboard Shortcut Triggers', 'High-Contrast Status Indicators', 'Rapid Barcode Entry'],
      },
      {
        title: 'Consumer Mobile Applications',
        industry: 'Media & Lifestyle',
        description: 'Delightful, engaging mobile experiences with smooth gesture navigation, personalized feeds, and micro-reward animations.',
        features: ['Gesture-Driven Interaction', 'Dark Mode Default', 'Haptic Touch Response'],
      },
    ],
    featuresHeading: 'Core Design Principles Built Into Every System',
    featuresSubtitle: 'Our foundational design ethos ensuring high adoption, clarity, and development speed.',
    features: [
      {
        title: 'Cognitive Load Reduction',
        category: 'Usability',
        description: 'We ruthlessly eliminate unnecessary form fields, redundant buttons, and visual clutter so users achieve tasks faster.',
      },
      {
        title: 'Atomic Token Scalability',
        category: 'Systems',
        description: 'Components are built hierarchically (atoms, molecules, organisms) so future screens can be assembled in minutes.',
      },
      {
        title: 'Predictable Visual Hierarchy',
        category: 'Typography',
        description: 'Intentional typographic scale and whitespace guide the eye effortlessly toward the primary call to action.',
      },
      {
        title: 'Zero Developer Ambiguity',
        category: 'Engineering Alignment',
        description: 'Every component specifies default, hover, active, disabled, focus, and error states with precise CSS properties.',
      },
      {
        title: 'Empathy-Driven Touch Targets',
        category: 'Ergonomics',
        description: 'Touch targets are minimum 44x44px with generous hit slop to prevent accidental taps on mobile touchscreens.',
      },
      {
        title: 'Accessible Color Harmony',
        category: 'Inclusivity',
        description: 'Information is never conveyed by color alone; icons and labels accompany status colors to support colorblind users.',
      },
      {
        title: 'Flicker-Free Theme Inversion',
        category: 'Theming',
        description: 'Light and dark themes are designed as deliberate semantic pairs, preserving contrast and visual balance in all lighting.',
      },
      {
        title: 'Continuous User Testing',
        category: 'Validation',
        description: 'Prototypes are subjected to task-based testing with real stakeholders before a single line of backend code is committed.',
      },
    ],
    technologiesHeading: 'Design & Prototyping Tooling',
    technologiesSubtitle: 'Industry-standard design environments configured for cross-functional collaboration.',
    technologies: [
      {
        category: 'Design & Systems',
        skills: ['Figma Enterprise', 'Figma Tokens & Variables', 'Auto-Layout 5', 'Component Variants'],
      },
      {
        category: 'Interactive Prototyping',
        skills: ['Figma Smart Animate', 'ProtoPie', 'Principle', 'Interactive Component States'],
      },
      {
        category: 'Research & User Testing',
        skills: ['Maze User Testing', 'Hotjar Heatmaps', 'Loom Walkthroughs', 'Miro Journey Mapping'],
      },
      {
        category: 'Developer Token Handoff',
        skills: ['Tokens Studio (JSON)', 'Tailwind CSS Configs', 'Storybook Specs', 'Zeplin / Zeroheight'],
      },
    ],
    processHeading: 'Our 5-Stage Product Design Process',
    processSubtitle: 'A methodical path from user research to production-ready design system handoff.',
    process: [
      {
        step: '01',
        title: 'Empathy Research & Heuristic Audit',
        description: 'We interview stakeholders, study user pain points, audit existing interfaces, and identify high-friction conversion roadblocks.',
        keyOutcome: 'Usability Audit & Persona Journey Maps',
      },
      {
        step: '02',
        title: 'Information Architecture & Wireframes',
        description: 'Mapping screen hierarchy, content taxonomy, navigation structures, and structural layout wireframes for core workflows.',
        keyOutcome: 'Approved Low-Fidelity Wireframe Deck',
      },
      {
        step: '03',
        title: 'Visual Craft & Design System',
        description: 'Creating bespoke typography scales, color palettes, elevation tokens, and modular atomic component variants in Figma.',
        keyOutcome: 'Comprehensive Figma Design System Library',
      },
      {
        step: '04',
        title: 'Interactive Prototyping & Testing',
        description: 'Building clickable prototypes with micro-animations and testing task completion rates with real users to refine flows.',
        keyOutcome: 'Validated High-Fidelity Prototype',
      },
      {
        step: '05',
        title: 'Token Export & Developer Handoff',
        description: 'Exporting tokenized variables directly into Tailwind CSS configuration files and conducting design QA alongside engineers.',
        keyOutcome: 'Zero-Ambiguity Handoff & Staging Design Sign-off',
      },
    ],
    waysToWorkHeading: 'Ways to Work With Us',
    waysToWorkSubtitle: 'Flexible product design engagements tailored to your stage of product development.',
    waysToWork: [
      {
        title: 'Product Redesign & UX Overhaul',
        subtitle: 'For Existing Web/Mobile Products',
        description: 'Complete heuristic audit, user journey redesign, and modern design system for legacy software suffering from high churn or low adoption.',
        timeline: '4 – 8 Weeks Delivery',
        deliverables: ['Heuristic Audit & Friction Analysis', 'Complete Modern Figma System', 'Interactive Clickable Prototype', 'Developer Handoff Token Package'],
      },
      {
        title: 'Zero-to-One Product Design',
        subtitle: 'For New Ventures & Startup MVPs',
        description: 'Translate an abstract concept or specification document into an investor-ready, pixel-perfect digital product ready for engineering.',
        timeline: '6 – 10 Weeks Delivery',
        deliverables: ['User Flow & Persona Architecture', 'High-Fidelity Component Library', 'Clickable Investor Prototype', 'Comprehensive Engineering Handoff'],
      },
      {
        title: 'Design System Sprint Pod',
        subtitle: 'Unify Fragmented Codebases',
        description: 'We audit and unify fragmented internal software into a single, cohesive enterprise design system with documentation and code tokens.',
        timeline: 'Monthly Flexible Retainer',
        deliverables: ['Standardized Figma Token Library', 'Tailwind / React Component Specs', 'WCAG AAA Accessibility Guidelines', 'Ongoing UI Design Support'],
      },
    ],
    whyChooseUs: [
      {
        title: 'Engineered for Implementation',
        description: 'Our designers write code. We never design impossible components that cause delays or cost blowouts during development.',
        bullet: 'Production-Feasible Design',
      },
      {
        title: 'Obsession with Typography & Whitespace',
        description: 'We believe premium software is defined by meticulous typographic hierarchy, intentional spacing, and harmonious contrast.',
        bullet: 'Swiss Precision Craft',
      },
      {
        title: '100% Figma Source Ownership',
        description: 'You receive full editor access and permanent ownership of all Figma files, component libraries, and vector assets from Day 1.',
        bullet: 'Complete File Ownership',
      },
      {
        title: 'Direct Collaborative Sprints',
        description: 'Work directly with lead product designers in shared Figma workspaces with live commenting and rapid iteration cycles.',
        bullet: 'Real-Time Collaboration',
      },
    ],
    faqs: [
      {
        question: 'What deliverables do we receive at the end of a UI/UX project?',
        answer: 'You receive comprehensive, fully organized Figma master files containing the atomic design system (typography, colors, shadows, tokens), pixel-perfect screen layouts across mobile and desktop, interactive clickable prototypes, and token exports (JSON / Tailwind CSS) formatted for seamless engineering implementation.',
      },
      {
        question: 'Do you conduct real user research and usability testing?',
        answer: 'Yes. Depending on project scope, we conduct user interviews, survey target cohorts, perform competitive heuristic audits, and run remote task-based usability testing using clickable Figma prototypes to validate design decisions with quantitative feedback before development.',
      },
      {
        question: 'How do you ensure the design will be implemented accurately by developers?',
        answer: 'Because our designers understand full-stack code, all layouts are built on real CSS flexbox/grid constraints with tokenized spacing variables. We provide detailed state documentation (hover, focus, disabled, active) and participate in Design QA reviews on live staging environments to verify implementation fidelity.',
      },
      {
        question: 'Can you design within our existing corporate brand guidelines?',
        answer: 'Absolutely. We frequently ingest existing brand assets (logos, primary colors, typography) and translate them into modern, accessible, digital-first UI component systems that respect your brand identity while elevating user experience.',
      },
      {
        question: 'How long does a typical product design project take?',
        answer: 'A focused MVP design typically takes 4 to 6 weeks. A comprehensive enterprise platform redesign with complex dashboards, multi-role workflows, and an end-to-end design system spans 8 to 12 weeks with weekly design reviews.',
      },
      {
        question: 'Do we own all design files and intellectual property?',
        answer: 'Yes, 100%. All Figma workspaces, master components, custom illustrations, and design tokens become the exclusive property of your organization upon milestone completion.',
      },
    ],
  },

  // =========================================================================
  // 4. CUSTOM SOFTWARE DEVELOPMENT (NO BUILT WORKS)
  // =========================================================================
  'custom-software': {
    slug: 'custom-software',
    hero: {
      categoryBadge: 'Enterprise Core Systems & Microservices',
      title: 'Custom Software Development Company',
      subtitle: 'Bespoke Core Business Engines, High-Throughput APIs & Cloud Workflows',
      description: 'Off-the-shelf software forces growing businesses to compromise their business logic. We architect bespoke enterprise core platforms, operations ERPs, high-throughput microservices, and database systems engineered specifically around your operating model.',
      stats: [
        { label: 'System Uptime', value: '99.99%' },
        { label: 'API Latency', value: '< 40ms' },
        { label: 'Scalability Factor', value: '10x Ready' },
        { label: 'IP & Code Rights', value: '100% Client' },
      ],
    },
    platformsHeading: 'Enterprise Architectures We Engineer',
    platformsSubtitle: 'Modern distributed architectures built for high concurrency, fault tolerance, and clear domain separation.',
    platforms: [
      {
        title: 'Microservices & Distributed Systems',
        subtitle: 'Go, Node.js & Docker / K8s',
        description: 'Decoupled services communicating via high-speed gRPC and REST, ensuring isolated scaling and zero single points of failure.',
        badge: 'Distributed Scale',
        features: ['gRPC & REST Gateways', 'Docker Containerization', 'Kubernetes Orchestration', 'Event-Driven Message Queues'],
      },
      {
        title: 'Internal Operations & ERP Platforms',
        subtitle: 'Unified Systems of Record',
        description: 'Replacing disconnected spreadsheets and fragmented SaaS subscriptions with a single, tailored operations platform designed for your team.',
        badge: 'Enterprise ERP',
        features: ['Automated Inventory Tracking', 'Procurement & Vendor Portals', 'Real-Time Financial Ledgers', 'Custom Approval Hierarchies'],
      },
      {
        title: 'High-Throughput API Gateways',
        subtitle: 'REST, GraphQL & WebSockets',
        description: 'Robust API architectures engineered to handle thousands of concurrent requests with rate limiting, JWT authentication, and edge caching.',
        badge: 'API Backbone',
        features: ['OpenAPI / Swagger Specs', 'Redis Response Caching', 'Token-Based Rate Limiting', 'Webhook Distribution Hubs'],
      },
      {
        title: 'Relational & NoSQL Database Design',
        subtitle: 'PostgreSQL, Redis & TimescaleDB',
        description: 'Production-hardened relational schemas, query index optimization, database connection pooling, and multi-region replication.',
        badge: 'Data Infrastructure',
        features: ['Normalized PostgreSQL Schemas', 'Read/Write Connection Pooling', 'Automated Daily Backups', 'Timescale Time-Series Logging'],
      },
      {
        title: 'Legacy Modernization & Migration',
        subtitle: 'Refactoring Without Downtime',
        description: 'Strangler-pattern migration of monolithic legacy codebases to modern TypeScript/Go microservices with zero business disruption.',
        badge: 'Legacy Modernization',
        features: ['Strangler Fig Architecture', 'Zero-Downtime Data Migration', 'Automated Dual-Write Validation', 'De-risked Phased Rollouts'],
      },
      {
        title: 'Automated Business Workflows',
        subtitle: 'Event-Driven Background Jobs',
        description: 'Asynchronous background queues (BullMQ, Celery) that automate repetitive billing cycles, PDF report generation, and third-party syncs.',
        badge: 'Workflow Automation',
        features: ['Distributed Job Queues', 'Automatic Failure Retries', 'Dead-Letter Queue Alerting', 'Scheduled Cron Pipelines'],
      },
    ],
    capabilitiesHeading: 'Comprehensive Custom Software Capabilities',
    capabilitiesSubtitle: 'From database schema planning and API engineering to cloud DevOps and enterprise security compliance.',
    capabilities: [
      {
        title: 'Domain Modeling & Schema Architecture',
        description: 'Entity-relationship modeling, relational integrity constraints, and query access pattern planning to ensure performance under scale.',
        deliverables: ['ERD Schema Diagrams', 'Database Migration Scripts', 'Performance Indexing Strategy'],
      },
      {
        title: 'High-Concurrency Backend Engineering',
        description: 'Clean, modular backend microservices written in Go and TypeScript with strict separation of transport, business logic, and database access.',
        deliverables: ['Clean Git Repositories', 'Unit Test Coverage > 80%', 'Type-Safe Service Contracts'],
      },
      {
        title: 'Multi-Tenant SaaS Architectures',
        description: 'Secure multi-tenant data isolation (row-level security or dedicated schemas), tenant-specific domain routing, and usage metering.',
        deliverables: ['Multi-Tenant Isolation Models', 'Usage Quota Metering', 'Automated Tenant Provisioning'],
      },
      {
        title: 'Third-Party Enterprise Integrations',
        description: 'Bi-directional data sync with ERPs (SAP, NetSuite), CRMs (Salesforce), accounting software (QuickBooks), and proprietary partner APIs.',
        deliverables: ['Robust Integration Connectors', 'Idempotent Webhook Receivers', 'Data Reconciliation Audits'],
      },
      {
        title: 'Role-Based Access Control (RBAC)',
        description: 'Granular permissions matrices, multi-factor authentication (MFA), single sign-on (SAML/Okta), and immutable audit logging.',
        deliverables: ['Granular Permissions Matrix', 'SSO / SAML Integrations', 'Immutable Audit Logs'],
      },
      {
        title: 'Automated CI/CD & Cloud Infrastructure',
        description: 'Infrastructure as Code (Terraform) deploying containerized services across AWS or Google Cloud with auto-scaling triggers.',
        deliverables: ['Terraform Infrastructure Code', 'GitHub Actions Workflows', 'Auto-Scaling Cloud Clusters'],
      },
      {
        title: 'Security Auditing & Penetration Hardening',
        description: 'Vulnerability assessments against OWASP Top 10 vulnerabilities, encrypted secrets management (Vault), and data-at-rest encryption.',
        deliverables: ['Vulnerability Scan Reports', 'Secrets Vault Setup', 'End-to-End Encryption Setup'],
      },
      {
        title: 'Continuous Observability & Monitoring',
        description: 'Comprehensive Prometheus and Grafana telemetry tracking request latency, error rates, CPU/memory saturation, and instant alerts.',
        deliverables: ['Grafana Health Dashboards', 'Structured JSON Logging', 'Automated PagerDuty Alerts'],
      },
    ],
    // NO BUILT WORKS as requested for this service
    solutionsHeading: 'Custom Software We Engineer Across Industries',
    solutionsSubtitle: 'Solving high-stakes operational bottlenecks with reliable, tailored software.',
    solutions: [
      {
        title: 'Supply Chain & Inventory Management',
        industry: 'Manufacturing & Distribution',
        description: 'Real-time multi-warehouse inventory tracking, automated reorder point calculation, supplier purchase orders, and barcode tracking.',
        features: ['Real-Time Stock Depletion', 'Supplier Lead-Time Analytics', 'Automated Purchase Requisitions'],
      },
      {
        title: 'FinTech Lending & Risk Engines',
        industry: 'Financial Services & Banking',
        description: 'Automated loan origination systems with algorithmic credit scoring, document OCR verification, payment schedules, and collections tracking.',
        features: ['Automated Rule-Based Scoring', 'Document OCR Parsing', 'Automated Payment Reconciliation'],
      },
      {
        title: 'Field Services & Dispatch Systems',
        industry: 'Utilities & Construction',
        description: 'Centralized dispatch consoles matching jobs to technicians based on GPS proximity, skill certifications, and inventory availability.',
        features: ['Automated Job Dispatching', 'Mobile Technician Sync', 'Instant Digital Work Orders'],
      },
      {
        title: 'Healthcare Electronic Records & Billing',
        industry: 'Healthcare & Life Sciences',
        description: 'Specialized patient scheduling, clinical charting, diagnostic reporting, and insurance claim adjudication systems.',
        features: ['Encrypted Patient Records', 'Custom Clinical Form Builders', 'Insurance Claim Validation'],
      },
      {
        title: 'Legal & Compliance Automation',
        industry: 'Legal & Corporate Governance',
        description: 'Contract lifecycle management with automated clause libraries, cryptographic e-signatures, audit logs, and regulatory filing schedules.',
        features: ['Clause Version Control', 'Cryptographic Signature Hash', 'Filing Deadline Alerts'],
      },
      {
        title: 'Proprietary B2B Marketplaces',
        industry: 'Commodities & Commerce',
        description: 'Bespoke wholesale trading portals featuring live RFQ (request for quotation) bidding, escrow payment holds, and automated freight quotes.',
        features: ['Real-Time Bidding Engine', 'Escrow Milestone Releases', 'Automated Invoicing'],
      },
    ],
    featuresHeading: 'Architectural Standards in Every Custom Platform',
    featuresSubtitle: 'Non-negotiable engineering principles that make our software durable, scalable, and secure.',
    features: [
      {
        title: 'Zero Vendor Lock-In',
        category: 'Ownership',
        description: 'Built on open-source, industry-standard languages and databases. No proprietary runtimes or third-party license restrictions.',
      },
      {
        title: 'Strict Concurrency & ACID Safety',
        category: 'Integrity',
        description: 'All financial and inventory transactions execute in ACID-compliant database transactions to prevent double-spending and race conditions.',
      },
      {
        title: 'Sub-50ms Response Times',
        category: 'Performance',
        description: 'Optimized relational queries, database indexing, and memory-cached endpoints ensure instant response times under load.',
      },
      {
        title: 'Multi-Region High Availability',
        category: 'Fault Tolerance',
        description: 'Architected with automated failover and geo-redundant database backups to achieve 99.99% uptime SLAs.',
      },
      {
        title: 'Strict Automated Test Suites',
        category: 'Code Quality',
        description: 'Extensive unit, integration, and end-to-end regression test suites ensure safe code releases and rapid iteration.',
      },
      {
        title: 'Comprehensive API Documentation',
        category: 'Developer Experience',
        description: 'Interactive OpenAPI/Swagger documentation generated directly from code types allows seamless partner integrations.',
      },
      {
        title: 'Immutable Event Auditing',
        category: 'Compliance',
        description: 'Every critical system action logs user ID, timestamp, IP address, and payload delta to an append-only audit trail.',
      },
      {
        title: 'Zero-Downtime Database Migrations',
        category: 'Operations',
        description: 'Schema modifications use expand-and-contract deployment patterns so updates occur with zero user interruption.',
      },
    ],
    technologiesHeading: 'Technologies We Deploy',
    technologiesSubtitle: 'Proven, scalable backend languages and cloud architectures built for enterprise reliability.',
    technologies: [
      {
        category: 'Backend Languages',
        skills: ['Go (Golang)', 'Node.js / TypeScript', 'Python', 'Rust'],
      },
      {
        category: 'Databases & Storage',
        skills: ['PostgreSQL', 'Redis', 'TimescaleDB', 'MongoDB', 'AWS S3'],
      },
      {
        category: 'Message Queues & Streaming',
        skills: ['RabbitMQ', 'Apache Kafka', 'BullMQ (Redis)', 'AWS SQS / SNS'],
      },
      {
        category: 'Cloud & Infrastructure',
        skills: ['Amazon Web Services (AWS)', 'Google Cloud Platform (GCP)', 'Docker', 'Kubernetes'],
      },
      {
        category: 'Security & Auth',
        skills: ['HashiCorp Vault', 'OAuth 2.0 / OIDC', 'SAML 2.0', 'Argon2 / JWT'],
      },
      {
        category: 'Observability & Monitoring',
        skills: ['Prometheus', 'Grafana', 'Datadog', 'Sentry Telemetry'],
      },
    ],
    processHeading: 'Our 5-Stage Custom Software Engineering Process',
    processSubtitle: 'A structured, risk-mitigated development lifecycle engineered for absolute delivery predictability.',
    process: [
      {
        step: '01',
        title: 'Business Domain & Architecture Discovery',
        description: 'We map operational workflows, model data relationships, define non-functional requirements (SLA, throughput), and produce the technical blueprint.',
        keyOutcome: 'System Architecture Document & Entity Schemas',
      },
      {
        step: '02',
        title: 'Data Schema & API Contract Design',
        description: 'Defining database migrations, OpenAPI specifications, and security permission matrices before writing business logic.',
        keyOutcome: 'Approved API Contracts & Database Schema Specs',
      },
      {
        step: '03',
        title: 'Sprint Development & Weekly Staging',
        description: 'Two-week agile sprints in shared Git repositories with automated CI/CD builds, delivering testable software every 7 days.',
        keyOutcome: 'Bi-Weekly Staging Releases & Clean Code Reviews',
      },
      {
        step: '04',
        title: 'Load Testing & Security Audits',
        description: 'Simulating high concurrency loads (10,000+ RPS), auditing memory leaks, and executing penetration tests against OWASP standards.',
        keyOutcome: 'Load Benchmark Report & Security Sign-off',
      },
      {
        step: '05',
        title: 'Production Cutover & Observability',
        description: 'Zero-downtime database migration, automated cloud cluster deployment, Grafana dashboard configuration, and 24/7 uptime monitoring.',
        keyOutcome: 'Production Deployment & Live Telemetry',
      },
    ],
    waysToWorkHeading: 'Ways to Work With Us',
    waysToWorkSubtitle: 'Engagement models structured around your engineering maturity, timeline, and internal resources.',
    waysToWork: [
      {
        title: 'Turnkey Product Engineering',
        subtitle: 'End-to-End Bespoke System',
        description: 'Complete architecture from discovery to production: database modeling, backend microservices, admin interface, automated CI/CD, and post-launch SLA.',
        timeline: '12 – 20 Weeks Delivery',
        deliverables: ['Custom Microservices Backend', 'Relational Database Infrastructure', 'Admin Operations Console', '100% Code & Cloud IP Transfer'],
      },
      {
        title: 'Core Engine Modernization',
        subtitle: 'De-risk Legacy Infrastructure',
        description: 'Refactor fragile legacy monoliths into scalable microservices using the strangler pattern with zero database downtime or operational disruption.',
        timeline: '8 – 16 Weeks Delivery',
        deliverables: ['Legacy Architecture Audit', 'Modern Microservices API Layer', 'Zero-Downtime Data Migration', 'Comprehensive Regression Test Suite'],
      },
      {
        title: 'Dedicated Backend Engineering Pod',
        subtitle: 'High-Velocity Sprints',
        description: 'Embed senior backend architects and distributed systems engineers directly into your engineering team to accelerate your product roadmap.',
        timeline: 'Monthly Flexible Retainer',
        deliverables: ['Dedicated Senior Backend Engineers', 'Daily Standups & Git Commits', 'Direct Slack / Jira Integration', 'Zero Long-Term Overhead'],
      },
    ],
    whyChooseUs: [
      {
        title: 'Engineered for 10x Scale',
        description: 'We design database schemas and API boundaries with growth in mind, ensuring your core systems perform effortlessly as transaction volumes multiply.',
        bullet: 'Future-Proof Architecture',
      },
      {
        title: 'Direct Senior Architect Access',
        description: 'You collaborate directly with principal systems architects who write high-concurrency Go and TypeScript. No non-technical account managers.',
        bullet: 'Engineering Transparency',
      },
      {
        title: '100% Code & Database Ownership',
        description: 'You own 100% of all Git repositories, infrastructure scripts, and cloud accounts from Day 1. Zero proprietary runtimes or vendor lock-in.',
        bullet: 'Complete IP Rights',
      },
      {
        title: 'Battle-Tested Security Standards',
        description: 'Built-in OWASP compliance, encrypted secrets management, and automated security scanning ensure enterprise-grade defensibility.',
        bullet: 'Enterprise Defensibility',
      },
    ],
    faqs: [
      {
        question: 'Why choose custom software development over commercial off-the-shelf SaaS?',
        answer: 'Off-the-shelf SaaS forces your business to adapt its unique operational advantages to generic software templates, often requiring expensive monthly user licensing and brittle multi-tool duct taping. Custom software is engineered precisely around your proprietary business workflows, gives you 100% intellectual property ownership, eliminates recurring seat licensing fees, and scales without arbitrary platform limits.',
      },
      {
        question: 'How do you ensure zero downtime when migrating our legacy software?',
        answer: 'We employ the industry-standard "Strangler Fig" pattern. We construct the new microservice architecture alongside your existing legacy database and deploy an intelligent routing layer. Data is dual-written and validated in real time, enabling individual modules to be migrated sequentially without a single second of system downtime or data loss.',
      },
      {
        question: 'What tech stack do you recommend for enterprise custom backends?',
        answer: 'For 95% of high-concurrency enterprise workloads, we recommend Go (Golang) or TypeScript (Node.js) paired with PostgreSQL, Redis for caching, and RabbitMQ or Kafka for event streaming. This stack provides unbeatable execution speed, minimal server resource utilization, universal talent availability, and battle-tested cloud support on AWS and GCP.',
      },
      {
        question: 'Who owns the intellectual property and source code?',
        answer: 'Your company owns 100% of all code, git repositories, database schemas, and cloud deployment keys. Tech22Blocks operates on a pure work-for-hire basis with no recurring royalties, licensing fees, or proprietary software lock-in.',
      },
      {
        question: 'How do you handle software maintenance and system updates?',
        answer: 'Every project includes 30 to 60 days of complimentary warranty and production monitoring. Following launch, we offer dedicated SLA maintenance retainers that cover 24/7 uptime telemetry, database index tuning, dependency security patching, and ongoing feature development.',
      },
      {
        question: 'What is the typical timeline and cost structure for custom software?',
        answer: 'Core operational tools and focused internal platforms typically take 8 to 12 weeks, while large-scale distributed enterprise systems take 14 to 20 weeks. Projects are structured into transparent, bi-weekly milestone sprints with clear deliverables and zero hidden costs.',
      },
    ],
  },

  // =========================================================================
  // 5. IT CONSULTING & ADVISORY (NO BUILT WORKS)
  // =========================================================================
  'it-consulting': {
    slug: 'it-consulting',
    hero: {
      categoryBadge: 'Strategic Technology Advisory & Audits',
      title: 'IT Consulting & Technology Advisory',
      subtitle: 'Pragmatic Engineering Roadmaps, Architecture Audits & Fractional CTO Leadership',
      description: 'Direct, jargon-free technology advisory helping business leaders make informed architectural, vendor, and scaling decisions. We evaluate codebases, identify scalability bottlenecks, eliminate technical debt, and construct actionable engineering roadmaps aligned with commercial milestones.',
      stats: [
        { label: 'Cloud Cost Savings', value: 'Up to 45%' },
        { label: 'Technical Debt', value: 'Zero Ambiguity' },
        { label: 'Roadmap Clarity', value: '100% Milestones' },
        { label: 'Architecture Audits', value: 'Production Tested' },
      ],
    },
    platformsHeading: 'Advisory Domains & Technical Disciplines',
    platformsSubtitle: 'Strategic technical guidance spanning code audits, cloud infrastructure, and fractional engineering leadership.',
    platforms: [
      {
        title: 'Codebase Quality & Technical Debt Audits',
        subtitle: 'Static Analysis & Refactoring Plans',
        description: 'Comprehensive code reviews evaluating maintainability, security vulnerabilities, modularity, test coverage, and hidden technical liabilities.',
        badge: 'Code Due Diligence',
        features: ['Automated Static Analysis', 'Architectural Vulnerability Scans', 'Test Coverage Gap Reports', 'Prioritized Remediation Roadmap'],
      },
      {
        title: 'Cloud Infrastructure & Cost Optimization',
        subtitle: 'AWS, GCP & Azure Efficiency',
        description: 'Auditing cloud spending to eliminate idle compute resources, optimize database instances, implement autoscaling, and slash monthly cloud bills.',
        badge: 'FinOps Optimization',
        features: ['Reserved & Spot Instance Tuning', 'S3 Lifecycle Rule Configuration', 'Database Right-Sizing', 'Average 30–45% Cost Reduction'],
      },
      {
        title: 'Fractional CTO & Strategic Leadership',
        subtitle: 'Executive Engineering Guidance',
        description: 'Experienced technology leadership on a flexible basis to lead engineering sprints, mentor tech leads, interview senior hires, and guide board decisions.',
        badge: 'Fractional Leadership',
        features: ['Boardroom Strategy Decks', 'Technical Hiring Interviews', 'Sprint Velocity Acceleration', 'Vendor Contract Negotiation'],
      },
      {
        title: 'Technology Stack & Vendor Due Diligence',
        subtitle: 'Build vs. Buy Evaluations',
        description: 'Unbiased evaluations of third-party SaaS vendors, proprietary software platforms, and technology stack choices to prevent costly vendor lock-in.',
        badge: 'Vendor Evaluation',
        features: ['Build vs. Buy Scorecards', 'SaaS Contract Reviews', 'Tech Stack Feasibility Reports', 'Migration Cost Projections'],
      },
      {
        title: 'Security, Compliance & DevSecOps',
        subtitle: 'Hardened Production Pipelines',
        description: 'Structuring automated security scanning, secrets management, and regulatory compliance protocols (SOC2, GDPR, HIPAA) for enterprise readiness.',
        badge: 'Security Governance',
        features: ['OWASP Top 10 Readiness', 'Automated Secret Scanning', 'CI/CD Pipeline Security Gate', 'Data Privacy Architecture'],
      },
      {
        title: 'M&A Technical Due Diligence',
        subtitle: 'Investment & Acquisition Audits',
        description: 'Technical audits for investors and acquirers evaluating the true health, scalability, intellectual property ownership, and liabilities of target codebases.',
        badge: 'M&A Audits',
        features: ['IP Provenance & License Scans', 'Scalability Bottleneck Analysis', 'Key-Person Risk Evaluation', 'Comprehensive Due Diligence Dossier'],
      },
    ],
    capabilitiesHeading: 'Comprehensive Technology Advisory Capabilities',
    capabilitiesSubtitle: 'Actionable, data-driven technical evaluations that protect capital and accelerate engineering velocity.',
    capabilities: [
      {
        title: 'Full-Stack Architecture Due Diligence',
        description: 'Evaluating database schemas, API latencies, caching topologies, and cloud topologies to identify single points of failure before scaling.',
        deliverables: ['System Architecture Assessment', 'Bottleneck Identification Map', 'Target Architecture Blueprint'],
      },
      {
        title: 'Cloud Infrastructure FinOps Audit',
        description: 'Granular cost attribution analysis across AWS, GCP, and Azure to eliminate waste and architect sustainable, auto-scaling infrastructure.',
        deliverables: ['Cloud Cost Reduction Plan', 'Instance Right-Sizing Matrix', 'Automated Budget Guardrails'],
      },
      {
        title: 'Security Vulnerability & Penetration Audit',
        description: 'In-depth review of authentication boundaries, token lifetimes, database encryption, and automated CI/CD dependency vulnerability alerts.',
        deliverables: ['Security Penetration Report', 'Risk Severity Scorecard', 'Remediation Action Plan'],
      },
      {
        title: 'Engineering Team Velocity & Agile Tuning',
        description: 'Reviewing Git workflows, PR review times, branching strategies, and CI/CD pipelines to double feature delivery speed.',
        deliverables: ['Git Workflow Guidelines', 'CI/CD Pipeline Optimization', 'Sprint Velocity Benchmarks'],
      },
      {
        title: 'Technical Roadmap & Milestone Planning',
        description: 'Translating commercial business goals into a structured, phase-gated engineering roadmap with verified deliverable gates.',
        deliverables: ['12-Month Technical Roadmap', 'Phase Deliverable Gates', 'Resource Allocation Model'],
      },
      {
        title: 'Vendor Contract & Licensing Due Diligence',
        description: 'Evaluating SaaS agreements and open-source library licenses to eliminate legal risks, copyright infringements, and predatory pricing traps.',
        deliverables: ['Open-Source License Audit', 'Vendor Pricing Benchmarks', 'Contract Renegotiation Guide'],
      },
      {
        title: 'Disaster Recovery & Business Continuity',
        description: 'Designing failover procedures, automated point-in-time database restoration tests, and geo-redundant backup topologies.',
        deliverables: ['Disaster Recovery Runbook', 'RTO & RPO Target SLAs', 'Failover Simulation Report'],
      },
      {
        title: 'Executive Technical Mentorship',
        description: 'Bi-weekly advisory sessions with founders, CEOs, and engineering directors to review architectural trade-offs and tech investments.',
        deliverables: ['Bi-Weekly Advisory Sessions', 'Decision Memos & Architecture RFCs', 'Hiring Candidate Assessments'],
      },
    ],
    // NO BUILT WORKS as requested for this service
    solutionsHeading: 'Advisory Scenarios Where We Deliver Immediate ROI',
    solutionsSubtitle: 'Practical intervention when technology decisions carry high financial and operational consequences.',
    solutions: [
      {
        title: 'Pre-Scale Infrastructure Optimization',
        industry: 'High-Growth Tech Startups',
        description: 'Auditing codebases before major marketing launches to ensure databases, caching layers, and servers do not crash under 10x traffic.',
        features: ['Concurrency Stress Testing', 'Database Indexing Overhaul', 'CDN Caching Configuration'],
      },
      {
        title: 'Cloud Bill Slash & Cost Containment',
        industry: 'Enterprises & Scale-Ups',
        description: 'Identifying runaway AWS/GCP bills and re-architecting data pipelines to permanently lower ongoing cloud operational expenditure.',
        features: ['Idle Compute Termination', 'Storage Tier Reallocation', 'FinOps Governance Policies'],
      },
      {
        title: 'Replacing Low-Quality Outsource Agencies',
        industry: 'Non-Technical Founders & Business Owners',
        description: 'Auditing messy code dumped by previous contractors, recovering git repositories, and establishing a clean engineering baseline.',
        features: ['Code Health Triage', 'IP & Repository Recovery', 'Clean Refactoring Strategy'],
      },
      {
        title: 'Enterprise SOC2 / ISO27001 Prep',
        industry: 'B2B SaaS & Regulated Tech',
        description: 'Hardening security policies, automated CI/CD secrets scanning, and data encryption protocols required to win enterprise contracts.',
        features: ['Security Policy Documentation', 'Access Control Hardening', 'Audit Trail Verification'],
      },
      {
        title: 'M&A Technical Due Diligence for Investors',
        industry: 'Private Equity & VCs',
        description: 'Uncovering hidden technical debt, security liabilities, and software licensing risks in target companies before capital investment.',
        features: ['Codebase Maintainability Audit', 'Key-Person Dependency Check', 'License Liability Scan'],
      },
      {
        title: 'Legacy Modernization Planning',
        industry: 'Traditional Businesses & Operations',
        description: 'Constructing pragmatic, phased transition roadmaps from legacy on-premise servers to scalable modern cloud platforms.',
        features: ['Phased Transition Blueprint', 'Risk Mitigation Framework', 'Total Cost of Ownership Model'],
      },
    ],
    featuresHeading: 'Foundational Principles of Our Consulting Practice',
    featuresSubtitle: 'Our unwavering commitment to engineering honesty, commercial reality, and zero conflicts of interest.',
    features: [
      {
        title: '100% Unbiased & Vendor-Neutral',
        category: 'Integrity',
        description: 'We do not accept commissions or kickbacks from software vendors. Our recommendations serve only your commercial interests.',
      },
      {
        title: 'Zero Jargon, Plain English',
        category: 'Communication',
        description: 'We explain complex technical trade-offs in clear business terms, linking technical decisions directly to revenue and risk.',
      },
      {
        title: 'Actionable Artifacts, Not Slide Decks',
        category: 'Pragmatism',
        description: 'We do not deliver theoretical 100-page presentations. You receive executable code audits, architecture RFCs, and implementation PRs.',
      },
      {
        title: 'Senior Engineering Perspective',
        category: 'Experience',
        description: 'All advisory is delivered by hands-on directors with decades of combined engineering experience building real production systems.',
      },
      {
        title: 'Defensive Financial Stewardship',
        category: 'FinOps',
        description: 'We treat your capital as our own, consistently prioritizing solutions with the highest return on investment and lowest maintenance debt.',
      },
      {
        title: 'Rapid Two-Week Turnaround',
        category: 'Velocity',
        description: 'Comprehensive codebase and infrastructure audits are completed and delivered within 10 to 14 business days.',
      },
      {
        title: 'Strict Non-Disclosure & IP Security',
        category: 'Confidentiality',
        description: 'All source code audits are conducted under strict bilateral non-disclosure agreements with zero code retained on external machines.',
      },
      {
        title: 'Continuous Follow-Through Support',
        category: 'Accountability',
        description: 'We remain available to walk your internal engineers through implementation, verify fixes, and review pull requests.',
      },
    ],
    technologiesHeading: 'Audit & Analysis Tooling',
    technologiesSubtitle: 'Industry-standard static analysis, security scanning, and infrastructure auditing tools.',
    technologies: [
      {
        category: 'Static Analysis & Code Quality',
        skills: ['SonarQube', 'ESLint / TypeScript Compiler', 'GolangCI-Lint', 'CodeQL'],
      },
      {
        category: 'Cloud Infrastructure & FinOps',
        skills: ['AWS Cost Explorer', 'GCP Cloud Billing', 'Infracost', 'Terraform Cloud'],
      },
      {
        category: 'Security & Vulnerability Audits',
        skills: ['Snyk Security', 'OWASP ZAP', 'Trivy Container Scanner', 'GitGuardian'],
      },
      {
        category: 'Observability & APM',
        skills: ['Datadog APM', 'New Relic', 'Grafana / Prometheus', 'AWS CloudWatch'],
      },
    ],
    processHeading: 'Our 4-Stage IT Consulting Process',
    processSubtitle: 'A structured discovery and auditing methodology delivering concrete findings within 14 days.',
    process: [
      {
        step: '01',
        title: 'Discovery & Context Immersion',
        description: 'We meet with executive leaders and engineering leads to understand business objectives, customer complaints, and current pain points.',
        keyOutcome: 'Audit Scope Document & Read-Only Access Setup',
      },
      {
        step: '02',
        title: 'Deep-Dive Code & Infrastructure Audit',
        description: 'Rigorous inspection of git repositories, database queries, cloud architecture, CI/CD pipelines, and cloud monthly invoices.',
        keyOutcome: 'Comprehensive Technical Findings Dossier',
      },
      {
        step: '03',
        title: 'Remediation Roadmap & Financial Model',
        description: 'We formulate prioritized recommendations ranked by business impact vs. implementation effort, with concrete cost projections.',
        keyOutcome: 'Prioritized Action Plan & Cost-Benefit Scorecard',
      },
      {
        step: '04',
        title: 'Executive Debrief & Implementation Guidance',
        description: 'We present findings to executive leadership, answer all technical questions, and guide internal developers through the remediation roadmap.',
        keyOutcome: 'Executive Presentation & Ongoing Mentorship',
      },
    ],
    waysToWorkHeading: 'Ways to Engage Our Advisory Team',
    waysToWorkSubtitle: 'Flexible consulting packages structured for immediate assessments or ongoing guidance.',
    waysToWork: [
      {
        title: 'Comprehensive Code & Cloud Audit',
        subtitle: '2-Week Fixed Scope Sprint',
        description: 'A deep-dive technical audit of your codebase, database schemas, cloud infrastructure, and security posture with an actionable remediation roadmap.',
        timeline: '2 Weeks Fixed Delivery',
        deliverables: ['Code Quality & Architecture Audit', 'Cloud Infrastructure Cost Reduction Plan', 'Security Vulnerability Scorecard', 'Executive Presentation & Roadmap'],
      },
      {
        title: 'Fractional CTO Retainer',
        subtitle: 'Part-Time Technology Leadership',
        description: 'Access seasoned engineering leadership to guide sprint planning, mentor tech leads, interview senior developers, and guide executive decisions.',
        timeline: 'Monthly Flexible Retainer',
        deliverables: ['Weekly Executive Strategy Calls', 'Architecture RFC Reviews', 'Technical Hiring Candidate Interviews', 'Vendor Contract Negotiation'],
      },
      {
        title: 'M&A Due Diligence Audit',
        subtitle: 'For Investors, VCs & Acquirers',
        description: 'Thorough technical investigation of a target acquisition to reveal hidden technical debt, key-person dependencies, scalability limits, and IP risks.',
        timeline: '7 – 10 Business Days',
        deliverables: ['IP & Open-Source License Scan', 'Codebase Maintainability Score', 'Scalability & Security Risk Dossier', 'Confidential Investor Memo'],
      },
    ],
    whyChooseUs: [
      {
        title: 'Practitioners, Not Slide Makers',
        description: 'Our consultants are active software directors who write production code daily. You get battle-tested advice that actually works in production.',
        bullet: 'Practitioner Leadership',
      },
      {
        title: '100% Objective Engineering Honesty',
        description: 'We tell you the truth about your codebase, even when it is uncomfortable, so you can fix liabilities before they damage your business.',
        bullet: 'Unfiltered Technical Truth',
      },
      {
        title: 'Rapid, Measurable Financial ROI',
        description: 'Our cloud cost audits and architecture optimizations frequently save clients more in annual cloud spend than our advisory fee.',
        bullet: 'Quantifiable ROI',
      },
      {
        title: 'Zero Vendor Kickbacks',
        description: 'We never accept referral fees from cloud providers or software vendors. Our loyalty is 100% aligned with your commercial success.',
        bullet: 'Total Independence',
      },
    ],
    faqs: [
      {
        question: 'What is included in a Tech22Blocks Code & Architecture Audit?',
        answer: 'Our comprehensive audit evaluates four key dimensions: 1) Code quality, maintainability, and test coverage; 2) Database performance, relational schemas, and indexing bottlenecks; 3) Cloud infrastructure sizing, security configurations, and FinOps cost waste; 4) Security vulnerabilities and dependency licenses. You receive an executive summary for leadership, an engineering punch-list for developers, and a prioritized remediation roadmap.',
      },
      {
        question: 'How do you access our codebase securely?',
        answer: 'We execute a strict bilateral non-disclosure agreement (NDA) before engagement. You grant our lead architects temporary, read-only access to your Git repositories and cloud consoles. We never download or store your proprietary code on unsecured external servers, and access is immediately revoked upon audit delivery.',
      },
      {
        question: 'How does your Fractional CTO service work?',
        answer: 'Our Fractional CTO service embeds senior technology leadership into your organization on a flexible monthly retainer. We participate in bi-weekly executive strategy meetings, lead sprint architecture planning, conduct technical interviews for senior hires, evaluate software vendor contracts, and ensure your engineering team executes with predictable velocity.',
      },
      {
        question: 'Can you help our existing team implement the audit recommendations?',
        answer: 'Yes. In addition to delivering the audit report, we provide hands-on implementation guidance: conducting workshops with your developers, reviewing critical pull requests, and providing reference architecture implementations to ensure all findings are permanently resolved.',
      },
      {
        question: 'How much can we realistically save on our cloud bills?',
        answer: 'Most organizations that have scaled rapidly accumulate significant cloud waste: unattached EBS volumes, oversized database instances, uncompressed data egress, and unreserved compute capacity. Our FinOps audits typically identify between 25% and 45% in recurring monthly cloud cost reductions with zero impact on performance.',
      },
      {
        question: 'How quickly can an audit be scheduled and completed?',
        answer: 'We can typically kick off an audit within 3 business days of NDA execution. The full audit, security scan, and executive presentation are delivered within 10 to 14 business days.',
      },
    ],
  },

  // =========================================================================
  // 6. WEB3.0 ENGINEERING & MAINTENANCE (NO BUILT WORKS)
  // =========================================================================
  'web3': {
    slug: 'web3',
    hero: {
      categoryBadge: 'Distributed Systems & Cryptography',
      title: 'Web3.0 Engineering & Maintenance',
      subtitle: 'Smart Contract Architecture, Cryptographic Verification & 24/7 Node Ops',
      description: 'Decentralized architecture research, smart contract development, cryptographic verification, and 24/7 uptime infrastructure maintenance. We engineer secure, auditable distributed protocols and bridge Web2 enterprise systems with decentralized networks.',
      stats: [
        { label: 'Smart Contract Audits', value: '100% Tested' },
        { label: 'Reentrancy Safe', value: 'Formally Verified' },
        { label: 'Latency SLA', value: '< 100ms' },
        { label: 'Node Telemetry', value: '24/7 Ops' },
      ],
    },
    platformsHeading: 'Decentralized Disciplines & Network Standards',
    platformsSubtitle: 'Engineering resilient cryptographic protocols, EVM smart contracts, and decentralized data bridges.',
    platforms: [
      {
        title: 'EVM Smart Contract Development',
        subtitle: 'Solidity & Foundry Tooling',
        description: 'Gas-optimized smart contracts conforming strictly to ERC-20, ERC-721, and ERC-1155 standards with comprehensive Foundry fuzz testing suites.',
        badge: 'Smart Contracts',
        features: ['Foundry & Hardhat Test Suites', 'Gas-Optimized Storage Slots', 'Reentrancy Guard Hardening', 'Formal Property Verification'],
      },
      {
        title: 'Cryptographic Authentication & Web3 Wallets',
        subtitle: 'SIWE & Account Abstraction',
        description: 'Implementing Sign-In with Ethereum (EIP-4361), Passkey cryptographic auth, social logins, and ERC-4337 smart contract account abstraction.',
        badge: 'Auth & Wallets',
        features: ['Sign-In with Ethereum (SIWE)', 'ERC-4337 Account Abstraction', 'Zero-Knowledge Proof Logins', 'Custodial & Non-Custodial Bridges'],
      },
      {
        title: 'Web3 RPC Node & Telemetry Operations',
        subtitle: '24/7 Validator & Indexer Maintenance',
        description: 'Continuous monitoring, sub-100ms node latency tuning, automatic failover routing, and automated security patching for blockchain RPC nodes.',
        badge: 'Node Operations',
        features: ['24/7 Node Telemetry Alerts', 'Sub-100ms RPC Response SLAs', 'Automated Health Failover', 'Prometheus & Grafana Monitoring'],
      },
      {
        title: 'Decentralized Storage & IPFS Networks',
        subtitle: 'Arweave, Filecoin & IPFS Caching',
        description: 'Permanent, tamper-proof asset storage architectures ensuring immutable file retrieval, cryptographic CID validation, and edge gateway acceleration.',
        badge: 'Decentralized Storage',
        features: ['Cryptographic CID Verification', 'Arweave Permanent Storage', 'IPFS Cluster Pinning Nodes', 'Global Fast CDN Gateways'],
      },
      {
        title: 'Decentralized Finance (DeFi) Protocols',
        subtitle: 'Automated Market Makers & Escrows',
        description: 'Architecting secure multi-signature treasury escrows, automated staking pools, token vesting schedules, and decentralized settlement vaults.',
        badge: 'DeFi Protocols',
        features: ['Multi-Sig Safe Integration', 'Time-Locked Vesting Contracts', 'Automated Escrow Settlements', 'Chainlink Oracle Feeds'],
      },
      {
        title: 'Web2-to-Web3 Enterprise Gateways',
        subtitle: 'Hybrid Bridges & Indexers',
        description: 'Connecting traditional enterprise SQL databases and ERPs with blockchain event logs via high-throughput The Graph subgraphs and webhook listeners.',
        badge: 'Hybrid Bridges',
        features: ['The Graph Custom Subgraphs', 'Real-Time Event Webhooks', 'SQL Ledger Synchronization', 'Bi-Directional State Reconciliations'],
      },
    ],
    capabilitiesHeading: 'Comprehensive Web3 Engineering Capabilities',
    capabilitiesSubtitle: 'End-to-end decentralized protocol engineering, formal security auditing, and continuous infrastructure maintenance.',
    capabilities: [
      {
        title: 'Smart Contract Architecture & Design',
        description: 'Modeling contract interfaces, tokenomics parameters, state access patterns, and upgradeability patterns (ERC-1967 UUPS proxy).',
        deliverables: ['Contract Architecture Spec', 'Gas Optimization Analysis', 'UUPS Proxy Upgrade Plan'],
      },
      {
        title: 'Foundry & Fuzz Testing Verification',
        description: 'Rigorous property-based fuzz testing and invariant analysis in Foundry to eliminate integer overflows, flash loan vectors, and state exploits.',
        deliverables: ['Foundry Test Suites', 'Fuzz Invariant Reports', '100% Branch Test Coverage'],
      },
      {
        title: 'Smart Contract Security Audits',
        description: 'Manual line-by-line security auditing evaluating reentrancy, front-running, flash loan manipulation, and access control vulnerabilities.',
        deliverables: ['Security Audit Dossier', 'Static Analysis (Slither)', 'Vulnerability Remediation Sign-off'],
      },
      {
        title: 'Frontend dApp Development',
        description: 'Modern, reactive decentralized applications built with Next.js, Wagmi, Viem, and RainbowKit delivering smooth multi-wallet connections.',
        deliverables: ['Next.js / Wagmi Frontend', 'Multi-Wallet Connection Hub', 'Instant Transaction Feedback'],
      },
      {
        title: 'Decentralized Data Indexing & Subgraphs',
        description: 'Custom subgraphs indexed with The Graph protocol to query blockchain events at sub-50ms speeds through standard GraphQL queries.',
        deliverables: ['Custom Subgraph Repository', 'GraphQL Schema Endpoints', 'Automated Event Sync Telemetry'],
      },
      {
        title: 'Oracle Integration & Real-World Feeds',
        description: 'Connecting smart contracts to tamper-proof off-chain market data, currency price pairs, and verifiable randomness via Chainlink VRF.',
        deliverables: ['Chainlink Price Feeds', 'VRF Randomness Contracts', 'Fallback Oracle Protections'],
      },
      {
        title: '24/7 Node Maintenance & Uptime SLA',
        description: 'Dedicated infrastructure operations: automated chain snapshot restores, hardware resource tuning, and 24/7 latency alerting.',
        deliverables: ['Prometheus Node Dashboards', 'Sub-100ms Latency SLA', '24/7 On-Call Telemetry'],
      },
      {
        title: 'Compliance & Cryptographic Key Management',
        description: 'Hardware Security Module (HSM) setups, multi-signature governance (Safe), and cold storage protocols ensuring absolute key security.',
        deliverables: ['Safe Multi-Sig Governance', 'HSM Key Management Runbook', 'Operational Security Checklist'],
      },
    ],
    // NO BUILT WORKS as requested for this service
    solutionsHeading: 'Decentralized Applications We Engineer',
    solutionsSubtitle: 'Practical, production-grade Web3 implementations delivering verifiable security.',
    solutions: [
      {
        title: 'Enterprise Tokenization & RWA Assets',
        industry: 'Real Estate & Private Capital',
        description: 'Tokenizing real-world assets (debt, commodities, private equity) into fractional ERC-3643 compliant security tokens with automated KYC whitelisting.',
        features: ['Permissioned ERC-3643 Tokens', 'Automated KYC Whitelisting', 'Dividend Distribution Smart Contracts'],
      },
      {
        title: 'Cryptographic Supply Chain Provenance',
        industry: 'Luxury Goods & Pharmaceuticals',
        description: 'Immutable, tamper-proof tracking of luxury products and medications from manufacturing facility to consumer verification using cryptographic NFTs.',
        features: ['NFC / QR On-Chain Pairing', 'Tamper-Proof Batch Hashes', 'Instant Consumer Verification'],
      },
      {
        title: 'Multi-Signature Corporate Treasury Vaults',
        industry: 'FinTech & Web3 Organizations',
        description: 'Hardened corporate treasuries requiring M-of-N executive biometric approvals for fund movements, automated payroll streaming, and spending limits.',
        features: ['Safe Multi-Sig Integration', 'Automated Salary Vesting', 'Daily Spending Threshold Limits'],
      },
      {
        title: 'Decentralized Identity & Verifiable Credentials',
        industry: 'Identity & Compliance',
        description: 'Zero-knowledge proof identity verification allowing users to prove age, accreditation, or citizenship without exposing sensitive personal data.',
        features: ['W3C Verifiable Credentials', 'Zero-Knowledge Proof Verifiers', 'Self-Sovereign Identity Wallets'],
      },
      {
        title: 'Automated Escrow & Settlement Systems',
        industry: 'Cross-Border Trade & Real Estate',
        description: 'Conditional escrow contracts that release funds automatically upon cryptographic receipt verification or freight milestone confirmation.',
        features: ['Milestone-Locked Escrow', 'Multi-Party Dispute Arbitration', 'Instant Multi-Currency Payouts'],
      },
      {
        title: 'Transparent Governance & Voting Protocols',
        industry: 'DAOs & Non-Profit Foundations',
        description: 'On-chain and snapshot gasless voting architectures ensuring transparent, unalterable governance decisions and proposal execution.',
        features: ['Snapshot Gasless Voting', 'Time-Locked Execution Queues', 'Quadratic Voting Mechanics'],
      },
    ],
    featuresHeading: 'Security Standards in Every Web3 Release',
    featuresSubtitle: 'Zero-trust security practices engineered into every smart contract and node setup.',
    features: [
      {
        title: 'Formally Verified Logic',
        category: 'Security',
        description: 'Smart contract logic is verified using property-based invariants and mathematical proofs to eliminate hidden exploit vectors.',
      },
      {
        title: 'Sub-100ms RPC Latency',
        category: 'Performance',
        description: 'Geographically distributed RPC node clusters ensure ultra-fast transaction submission and zero timeout drops.',
      },
      {
        title: 'Gas Optimization Audits',
        category: 'Efficiency',
        description: 'Packing storage variables, minimizing SSTORE calls, and using custom assembly (Yul) to slash end-user gas fees by up to 35%.',
      },
      {
        title: 'Reentrancy & Flash-Loan Immunity',
        category: 'Vulnerability Defense',
        description: 'Strict checks-effects-interactions patterns, reentrancy guards, and time-weighted oracles prevent economic exploits.',
      },
      {
        title: 'Multi-Sig Emergency Pausability',
        category: 'Governance',
        description: 'Time-locked emergency pause mechanisms managed exclusively by multi-signature hardware wallets protect client funds.',
      },
      {
        title: 'Real-Time Mempool Telemetry',
        category: 'Monitoring',
        description: 'Continuous monitoring of pending transactions to detect anomalous call volumes, front-running bots, or unauthorized contract interactions.',
      },
      {
        title: 'Seamless Web2 User Onboarding',
        category: 'UX',
        description: 'Account abstraction (ERC-4337) enables gasless transactions (sponsored paymasters) and social logins for non-crypto users.',
      },
      {
        title: 'Immutable Open-Source Verification',
        category: 'Transparency',
        description: 'All contracts are verified and published on Etherscan/Basescan with exact compiler source matching and license attributions.',
      },
    ],
    technologiesHeading: 'Technologies & Frameworks We Deploy',
    technologiesSubtitle: 'The modern, battle-tested Web3 development stack for EVM networks.',
    technologies: [
      {
        category: 'Smart Contract Languages',
        skills: ['Solidity (0.8.x+)', 'Yul / Inline Assembly', 'Vyper'],
      },
      {
        category: 'Development & Testing Frameworks',
        skills: ['Foundry (Forge, Cast, Anvil)', 'Hardhat', 'Slither Static Analyzer'],
      },
      {
        category: 'dApp Frontend & Client SDKs',
        skills: ['Wagmi / Viem', 'Ethers.js', 'RainbowKit', 'Next.js 14 App Router'],
      },
      {
        category: 'Indexing & Decentralized Storage',
        skills: ['The Graph (Subgraphs)', 'IPFS / Filecoin', 'Arweave', 'Alchemy / Infura RPC'],
      },
      {
        category: 'Oracles & Automation',
        skills: ['Chainlink Data Feeds', 'Chainlink VRF', 'Chainlink Automation', 'Gelato Network'],
      },
      {
        category: 'Security & Multi-Sig',
        skills: ['Safe (Gnosis)', 'OpenZeppelin Contracts', 'ERC-4337 Bundlers', 'Ledger / Trezor HSM'],
      },
    ],
    processHeading: 'Our 5-Stage Web3 Engineering Methodology',
    processSubtitle: 'A paranoid, multi-phase engineering protocol ensuring zero vulnerabilities in immutable code.',
    process: [
      {
        step: '01',
        title: 'Protocol Architecture & Tokenomics Scope',
        description: 'Defining contract state variables, access control roles, economic incentives, upgradeability patterns, and attack surface boundaries.',
        keyOutcome: 'Protocol Architecture Whitepaper & Threat Model',
      },
      {
        step: '02',
        title: 'Contract Development & Foundry Fuzzing',
        description: 'Writing gas-optimized Solidity contracts in Foundry with thousands of randomized fuzz test iterations to prove mathematical invariants.',
        keyOutcome: 'Fully Tested Smart Contracts & Fuzz Test Reports',
      },
      {
        step: '03',
        title: 'Security Auditing & Peer Review',
        description: 'Multi-engineer line-by-line security review, static analysis scanning with Slither, and formal remediation of all discovered edge cases.',
        keyOutcome: 'Comprehensive Security Audit & Remediation Sign-off',
      },
      {
        step: '04',
        title: 'Testnet Staging & dApp Integration',
        description: 'Deploying contracts to Sepolia testnet, connecting Wagmi/Viem frontend interfaces, and testing multi-sig transactions with stakeholders.',
        keyOutcome: 'Verified Testnet Deployment & Functional dApp UI',
      },
      {
        step: '05',
        title: 'Mainnet Deployment & 24/7 Ops',
        description: 'Production mainnet contract verification on Etherscan, transferring admin keys to Safe multi-sig, and enabling 24/7 node health telemetry.',
        keyOutcome: 'Live Mainnet Contracts & 24/7 Node Telemetry',
      },
    ],
    waysToWorkHeading: 'Ways to Work With Us',
    waysToWorkSubtitle: 'Engagement models for new decentralized protocol launches or continuous node operations.',
    waysToWork: [
      {
        title: 'Full Protocol & dApp Build',
        subtitle: 'Turnkey Decentralized Application',
        description: 'End-to-end architecture: custom smart contracts, formal fuzz testing, frontend dApp interface, multi-sig treasury setup, and mainnet verification.',
        timeline: '8 – 14 Weeks Delivery',
        deliverables: ['Audited Solidity Smart Contracts', 'Full-Stack Next.js / Wagmi dApp', 'Foundry Invariant Test Suites', 'Etherscan Code Verification'],
      },
      {
        title: 'Smart Contract Security Audit',
        subtitle: 'Independent Third-Party Verification',
        description: 'Rigorous security evaluation of your existing smart contracts prior to mainnet launch to detect reentrancy, access flaws, and gas waste.',
        timeline: '2 – 3 Weeks Fixed Delivery',
        deliverables: ['Vulnerability Severity Matrix', 'Gas Optimization Recommendations', 'Remediation Verification Sign-off', 'Executive Summary Report'],
      },
      {
        title: '24/7 Node Telemetry & Maintenance',
        subtitle: 'Continuous Enterprise Infrastructure',
        description: 'Dedicated infrastructure operations: sub-100ms RPC node health monitoring, automated snapshot restorations, and emergency response SLAs.',
        timeline: 'Monthly Dedicated Retainer',
        deliverables: ['24/7 Prometheus Node Telemetry', 'Sub-100ms Latency Guarantee', 'Automated Security Patching', 'Dedicated Incident Escalation'],
      },
    ],
    whyChooseUs: [
      {
        title: 'Paranoid Security Culture',
        description: 'In Web3, code is law and mistakes are irreversible. We approach every line of smart contract code with rigorous formal verification and zero trust.',
        bullet: 'Zero-Exploit Record',
      },
      {
        title: 'Gas Optimization Specialists',
        description: 'We pack storage slots and optimize EVM opcodes to ensure your users pay the lowest possible gas fees for every interaction.',
        bullet: 'Up to 35% Gas Savings',
      },
      {
        title: '100% Code & Key Ownership',
        description: 'All contracts, deployment scripts, and cryptographic keys belong exclusively to your multi-sig treasury. We never retain backdoors or admin keys.',
        bullet: 'Complete Decentralization',
      },
      {
        title: 'Direct Senior Web3 Engineers',
        description: 'You work directly with engineers who have built and audited smart contracts and managed production validator nodes.',
        bullet: 'Practitioner Expertise',
      },
    ],
    faqs: [
      {
        question: 'What blockchain networks do you support for smart contract development?',
        answer: 'We specialize in all Ethereum Virtual Machine (EVM) compatible networks: Ethereum Mainnet, Arbitrum, Optimism, Base, Polygon, and Avalanche. We also build decentralized indexing and storage pipelines on IPFS, Arweave, and Filecoin.',
      },
      {
        question: 'How do you test smart contracts to ensure they cannot be hacked?',
        answer: 'We use the industry-gold-standard Foundry framework to execute property-based invariant testing and fuzz testing — throwing millions of pseudo-random inputs at the contracts to expose mathematical edge cases. We also run automated static analyzers (Slither) and conduct independent line-by-line peer reviews of all access controls, state mutations, and external calls before any mainnet deployment.',
      },
      {
        question: 'Can you integrate Web3 capabilities into our existing Web2 application?',
        answer: 'Yes. We regularly build hybrid architectures where traditional Next.js/React web platforms and mobile apps connect seamlessly to Web3 wallets (MetaMask, Coinbase Wallet, WalletConnect) and read/write data to smart contracts without disrupting your existing SQL database or user authentication.',
      },
      {
        question: 'What is Account Abstraction (ERC-4337) and how does it help non-crypto users?',
        answer: 'ERC-4337 turns user wallets into programmable smart contracts. This allows your app to offer Web2-style conveniences: sponsoring gas fees so users transact for free, enabling social login (Google/Apple) without seed phrases, setting daily transaction limits, and recovering accounts through trusted friends.',
      },
      {
        question: 'Who controls the smart contract admin keys and treasury funds?',
        answer: 'You do — 100%. Upon mainnet deployment, all contract ownership and administrative rights are transferred directly to your team’s multi-signature wallet (such as Safe). Tech22Blocks retains zero keys, backdoors, or administrative privileges.',
      },
      {
        question: 'What ongoing maintenance and monitoring do you provide after launch?',
        answer: 'We offer continuous node telemetry retainers that monitor RPC node latency, track pending mempool activity, alert on unusual transaction spikes, and maintain subgraphs on The Graph to ensure your decentralized frontend operates with 99.98% uptime.',
      },
    ],
  },
};
