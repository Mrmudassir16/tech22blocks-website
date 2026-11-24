'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight, 
  ChevronDown, 
  Smartphone, 
  Globe, 
  Layers, 
  Lock, 
  Bell, 
  WifiOff, 
  Sparkles, 
  Activity, 
  BarChart3, 
  ExternalLink,
  ChevronLeft
} from 'lucide-react';
import { getAssetUrl } from '@/utils/assets';
import { DETAILED_SERVICES } from '@/data/serviceDetails';
import { StarWatermark } from '@/components/StarEmblem';

export default function MobileAppServicePage() {
  const data = DETAILED_SERVICES['mobile-applications'];
  
  // Interactive state hooks
  const [activePlatformTab, setActivePlatformTab] = useState<number>(0);
  const [activeStackCard, setActiveStackCard] = useState<number>(0);
  const [activeFlowIndex, setActiveFlowIndex] = useState<number>(2); // Center on Logistics
  const [activeProcessStep, setActiveProcessStep] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Refs for scroll observers
  const stackCardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const processStepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const flowContainerRef = useRef<HTMLDivElement | null>(null);

  // Drag interaction state for coverflow
  const dragStartX = useRef<number | null>(null);
  const dragMoved = useRef<boolean>(false);

  // ---------------------------------------------------------------------------
  // 1. One Team For Every Platform Data
  // ---------------------------------------------------------------------------
  const platformTabs = [
    {
      name: 'iOS Development',
      logo: 'images/svss/ios-icon.png',
      desc: 'High-performance native iOS applications engineered with Swift and SwiftUI, delivering fluid 60/120 FPS animations, Apple Silicon hardware acceleration, and full ecosystem integration with Apple Watch and iPad.',
      chips: ['SwiftUI', 'UIKit', 'Combine', 'CoreData', 'Metal', 'ARKit'],
      code: `// Swift Native Performance Engine
struct TelemetryCard: View {
    @StateObject var engine = CoreTelemetry.live()
    var body: some View {
        MetricVisualizer(fps: 120, latency: engine.ms)
            .shadow(color: .accentColor, radius: 8)
    }
}`
    },
    {
      name: 'Android Development',
      logo: 'images/svss/android-icon.png',
      desc: 'Modern, resilient Android applications built with Kotlin and Jetpack Compose. Designed for massive scalability across diverse hardware specifications and Android OS distributions.',
      chips: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'Room DB', 'CameraX', 'Hilt'],
      code: `// Kotlin Multi-Threaded State Channel
@Composable
fun MetricStream(vm: TelemetryViewModel = hiltViewModel()) {
    val state by vm.flow.collectAsStateWithLifecycle()
    Canvas(modifier = Modifier.fillMaxSize()) {
        drawTelemetryWaveform(state.packets, 60.fps)
    }
}`
    },
    {
      name: 'Flutter Cross-Platform',
      logo: 'images/svss/flutter-logo.png',
      desc: 'Single-codebase cross-platform applications rendered directly by Flutter’s Impeller engine. Offers identical, native-grade UI performance across iOS and Android with rapid release cadences.',
      chips: ['Dart 3', 'Impeller Engine', 'BLoC Pattern', 'Dio', 'Hive DB', 'FastBridge'],
      code: `// Flutter High-Performance Canvas
class NativeSyncPipeline extends StatelessWidget {
  Widget build(BuildContext context) {
    return BlocBuilder<TelemetryBloc, State>(
      builder: (ctx, state) => RenderSyncBridge(state.frame),
    );
  }
}`
    },
    {
      name: 'React Native',
      logo: 'images/svss/react-native.png',
      desc: 'Enterprise applications with React Native and TypeScript, powered by the New Architecture (Fabric renderer & TurboModules) for near-instant execution and smooth JS-to-C++ bridging.',
      chips: ['React 18', 'TypeScript', 'Fabric Engine', 'TurboModules', 'Redux Toolkit', 'Reanimated 3'],
      code: `// React Native Fabric JSI Bridge
export function AudioPulse(): JSX.Element {
  const pulse = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(pulse.value) }]
  }));
  return <Animated.View style={animatedStyle} />;
}`
    },
    {
      name: 'Kotlin Multiplatform',
      logo: 'images/svss/android-icon.png',
      desc: 'Share 100% of your business logic, data models, network pipelines, and database caching across iOS and Android while retaining 100% native declarative UI on both ends.',
      chips: ['KMP Shared Core', 'Ktor Client', 'SQLDelight', 'Kotlinx.Serialization', 'Shared State'],
      code: `// Shared KMP Business Core
class SharedRepository(private val client: HttpClient) {
    suspend fun streamTelemetry(): Flow<LivePacket> = flow {
        client.webSocketSession("wss://api.tech22.in/telemetry")
    }
}`
    },
    {
      name: 'Progressive Web Apps',
      logo: 'images/svss/flutter-logo.png',
      desc: 'High-speed browser-delivered mobile experiences with offline caching, home screen installability, and push notification sync, ideal for lightweight enterprise workflows.',
      chips: ['Service Workers', 'Web App Manifest', 'IndexedDB', 'Web Push API', 'Cache Storage'],
      code: `// Service Worker Offline Sync
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});`
    }
  ];

  // ---------------------------------------------------------------------------
  // 2. Solutions: Full-Spectrum Stacking Cards (Left Vertical Scroll Nav)
  // ---------------------------------------------------------------------------
  const solutionsStackCards = [
    {
      id: 'sol-0',
      num: '01',
      ac: '#1268a8',
      kicker: 'Native Mobile Engineering',
      title: 'iOS & Android Native Applications',
      desc: 'We architect native Swift/SwiftUI for iOS and Kotlin/Jetpack Compose for Android that leverage full hardware acceleration, low-level sensors, and fluid 60/120 FPS render pipelines.',
      points: [
        'Direct metal & hardware API integration without runtime wrappers',
        'Strict 60/120 FPS frame rate guarantees on all flagship devices',
        'Bespoke gesture navigation, dynamic island & haptic feedback'
      ],
      btnText: 'Explore Native Apps',
      deviceTitle: 'Native Performance Hub',
      tiles: [
        { name: 'SwiftUI & UIKit', icon: 'images/svss/ios-icon.png' },
        { name: 'Kotlin Compose', icon: 'images/svss/android-icon.png' },
        { name: 'CoreGraphics & Metal', icon: 'images/svss/swift-logo.png' },
        { name: 'CameraX & ARKit', icon: 'images/svss/ios-icon.png' }
      ]
    },
    {
      id: 'sol-1',
      num: '02',
      ac: '#0284c7',
      kicker: 'Cross-Platform Velocity',
      title: 'Flutter & React Native Cross-Platform',
      desc: 'Launch simultaneously on both Apple App Store and Google Play from a single consolidated codebase. Cut engineering costs and time-to-market by 50% without compromising on native tactile responsiveness.',
      points: [
        '95%+ shared cross-platform codebase across iOS & Android',
        'Direct AOT/JIT compilation through Flutter Impeller & RN Fabric',
        'Uniform design tokens and consistent multi-platform testing'
      ],
      btnText: 'Explore Cross-Platform',
      deviceTitle: 'Cross-Platform Engine',
      tiles: [
        { name: 'Flutter Impeller', icon: 'images/svss/flutter-logo.png' },
        { name: 'React Native Fabric', icon: 'images/svss/react-native.png' },
        { name: 'FastBridge JSI', icon: 'images/svss/flutter-logo.png' },
        { name: 'Automated CI/CD', icon: 'images/svss/google.webp' }
      ]
    },
    {
      id: 'sol-2',
      num: '03',
      ac: '#0f8a5f',
      kicker: 'Resilient Mobile Infrastructure',
      title: 'Enterprise Architecture & Offline Sync',
      desc: 'Local-first architecture designed for business continuity. Technicians, field workers, and sales agents can perform uninterrupted workflows in remote zero-network zones with automatic conflict resolution.',
      points: [
        'Embedded SQLite, Realm and Room local encrypted databases',
        'Deterministic two-way delta sync with automatic conflict arbitration',
        'Strict Clean Architecture separation with auditable state machines'
      ],
      btnText: 'Explore Architecture',
      deviceTitle: 'Offline Telemetry Sync',
      tiles: [
        { name: 'SQLite / Room Store', icon: 'images/svss/android-icon.png' },
        { name: 'Delta Synchronization', icon: 'images/svss/flutter-logo.png' },
        { name: 'Clean Architecture', icon: 'images/svss/swift-logo.png' },
        { name: 'Zero Data Loss Protocol', icon: 'images/svss/play-store.webp' }
      ]
    },
    {
      id: 'sol-3',
      num: '04',
      ac: '#d97706',
      kicker: 'Real-Time Communications',
      title: 'Sub-100ms Audio, Push & Live Telemetry',
      desc: 'Low-latency bidirectional audio streaming, instant push notification delivery, and persistent WebSocket event sockets engineered for live dispatch, AI companion audio, and real-time alerts.',
      points: [
        'WebRTC sub-100ms ultra-low latency voice/audio pipelines',
        'Targeted APNs and Firebase Cloud Messaging (FCM) orchestration',
        'Resilient background service workers and battery-optimized heartbeats'
      ],
      btnText: 'Explore Real-Time Mobile',
      deviceTitle: 'Real-Time Edge Stream',
      tiles: [
        { name: 'WebRTC Audio Stream', icon: 'images/svss/ios-icon.png' },
        { name: 'APNs & FCM Push', icon: 'images/svss/play-store.webp' },
        { name: 'WebSockets Engine', icon: 'images/svss/android-icon.png' },
        { name: 'Background Workers', icon: 'images/svss/google.webp' }
      ]
    },
    {
      id: 'sol-4',
      num: '05',
      ac: '#db2777',
      kicker: 'Enterprise Grade Hardening',
      title: 'Biometric Security & Hardware Keychain',
      desc: 'Bank-grade client-side protection implementing biometric FaceID/TouchID authentication, hardware-backed Keychain/Keystore cryptography, SSL pinning, and OWASP mobile standards.',
      points: [
        'Hardware-level Secure Enclave Keychain and KeyStore integration',
        'Strict SSL Certificate Pinning and dynamic tamper detection',
        'Aligned with ISO/IEC 27001:2022 security governance protocols'
      ],
      btnText: 'Explore Security',
      deviceTitle: 'Biometric Secure Vault',
      tiles: [
        { name: 'Biometric FaceID', icon: 'images/svss/ios-icon.png' },
        { name: 'Hardware KeyStore', icon: 'images/svss/android-icon.png' },
        { name: 'SSL Certificate Pin', icon: 'images/svss/swift-logo.png' },
        { name: 'OWASP MASVS Audit', icon: 'images/svss/play-store.webp' }
      ]
    },
    {
      id: 'sol-5',
      num: '06',
      ac: '#0e7c86',
      kicker: 'End-to-End Ownership',
      title: 'Store Publishing & Post-Launch Support',
      desc: 'We manage the entire submission lifecycle on the Apple App Store and Google Play Console, managing guidelines compliance, privacy manifest declarations, and continuous updates.',
      points: [
        '100% store approval success under your own corporate accounts',
        'Automated CI/CD pipelines with Fastlane and automated release notes',
        'Includes 3 months of complimentary warranty support post-deployment'
      ],
      btnText: 'Explore Store Ops',
      deviceTitle: 'Store Release Console',
      tiles: [
        { name: 'Apple App Store', icon: 'images/svss/ios-icon.png' },
        { name: 'Google Play Store', icon: 'images/svss/play-store.webp' },
        { name: 'Fastlane Release CI', icon: 'images/svss/google.webp' },
        { name: '3-Month Free Warranty', icon: 'images/svss/flutter-logo.png' }
      ]
    }
  ];

  // ---------------------------------------------------------------------------
  // 3. Apps We Build: Authentic SVSS 3D Cover Flow Data
  // ---------------------------------------------------------------------------
  const appsWeBuildIndustries = [
    {
      title: 'Education & EdTech',
      image: 'images/svss/app-education.webp',
      desc: 'Interactive virtual classrooms, video course streaming, gamified progress milestones, real-time quizzes, and secure student-teacher portals.',
      cta: 'Build an EdTech App'
    },
    {
      title: 'Health & Fitness',
      image: 'images/svss/app-fitness.webp',
      desc: 'Workout tracking, biometric telemetry sync, Bluetooth wearable connectivity, meal plans, and real-time heart rate monitoring dashboards.',
      cta: 'Build a Fitness App'
    },
    {
      title: 'Logistics & Supply Chain',
      image: 'images/svss/app-logistics.webp',
      desc: 'Fleet telemetry, live GPS vehicle tracking, route optimization, digital barcode dispatching, and offline signature capture.',
      cta: 'Build a Logistics App'
    },
    {
      title: 'Social & Communities',
      image: 'images/svss/app-social.webp',
      desc: 'High-throughput feeds, instant push messaging, live audio broadcast rooms, community moderation, and creator monetization.',
      cta: 'Build a Social App'
    },
    {
      title: 'Finance & Banking',
      image: 'images/svss/app-finance.webp',
      desc: 'Biometric mobile banking, UPI payment gateways, real-time ledger accounting, expense categorization, and multi-currency wallets.',
      cta: 'Build a Fintech App'
    },
    {
      title: 'Gaming & Interactive',
      image: 'images/svss/app-gaming.webp',
      desc: 'Real-time multiplayer leaderboards, reward inventory contracts, lightweight 2D/3D physics engines, and low-latency matchmaking.',
      cta: 'Build a Gaming App'
    },
    {
      title: 'Dating & Matchmaking',
      image: 'images/svss/app-dating.webp',
      desc: 'Geo-proximity matching algorithms, verified KYC profile safeguards, audio-video calls, and end-to-end encrypted direct messaging.',
      cta: 'Build a Dating App'
    }
  ];

  // ---------------------------------------------------------------------------
  // 4. Custom Mobile App Development Process (5 Interactive Stages)
  // ---------------------------------------------------------------------------
  const processSteps = [
    {
      num: '01',
      pct: 20,
      title: 'Planning Stage',
      image: 'images/svss/proc-planning.webp',
      desc: 'During this stage, we work together to gain insights into your business objectives, identify your target audience, and define the requirements for your app. Through market research and feasibility studies, we establish a solid groundwork for your custom mobile app development initiative.'
    },
    {
      num: '02',
      pct: 40,
      title: 'Design Stage',
      image: 'images/svss/proc-design.webp',
      desc: 'Our skilled designers prioritize the development of user-friendly and aesthetically pleasing interfaces. By utilizing wireframes and prototypes, we guarantee that the app design is consistent with your brand identity and provides a smooth user experience on all devices.'
    },
    {
      num: '03',
      pct: 60,
      title: 'Development Stage',
      image: 'images/svss/proc-dev.webp',
      desc: 'Our expert developers leverage cutting-edge technologies such as AI, IoT, and high-performance native engines to create high-performance mobile applications. Whether you need Android app development or cross-platform solutions, we prioritize functionality, speed, and security in every project.'
    },
    {
      num: '04',
      pct: 80,
      title: 'Testing & Quality Assurance Stage',
      image: 'images/svss/proc-testing.webp',
      desc: 'We conduct thorough testing to detect and resolve bugs, enhance performance, and guarantee that your app adheres to the highest quality benchmarks. Our agile approach to mobile application development ensures that your app is ready for users and free of errors.'
    },
    {
      num: '05',
      pct: 100,
      title: 'Launching Stage',
      image: 'images/svss/proc-launch.webp',
      desc: 'We manage all aspects of the submission process for both the Apple App Store and Google Play Store, as well as providing support after launch. Our mobile app development firm guarantees a seamless deployment experience, ensuring that your app effectively reaches its target audience and achieves desired outcomes.'
    }
  ];

  // ---------------------------------------------------------------------------
  // Observers for Scroll Tracking
  // ---------------------------------------------------------------------------
  // 1. Process Section Scroll Observer (Updates sticky stage image & progress)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-process-idx'));
            if (!isNaN(idx)) {
              setActiveProcessStep(idx);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-45% 0px -45% 0px'
      }
    );

    processStepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // 2. Solutions Stacking Cards Left Nav Scroll Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-stack-idx'));
            if (!isNaN(idx)) {
              setActiveStackCard(idx);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1
      }
    );

    stackCardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll to stack card when left nav item is clicked
  const handleNavClick = (idx: number) => {
    setActiveStackCard(idx);
    const target = stackCardRefs.current[idx];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll to process step when clicked
  const handleProcessStepClick = (idx: number) => {
    setActiveProcessStep(idx);
    const target = processStepRefs.current[idx];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // ---------------------------------------------------------------------------
  // Cover Flow Navigation & Drag Handlers
  // ---------------------------------------------------------------------------
  const goFlow = useCallback((idx: number) => {
    setActiveFlowIndex(Math.max(0, Math.min(appsWeBuildIndustries.length - 1, idx)));
  }, [appsWeBuildIndustries.length]);

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    dragMoved.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const dx = e.clientX - dragStartX.current;
    if (Math.abs(dx) > 55) {
      dragMoved.current = true;
      goFlow(activeFlowIndex + (dx < 0 ? 1 : -1));
      dragStartX.current = e.clientX;
    }
  };

  const handlePointerUp = () => {
    dragStartX.current = null;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goFlow(activeFlowIndex - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goFlow(activeFlowIndex + 1);
    }
  };

  // ---------------------------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[var(--canvas)] text-[var(--text-primary)]">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH AUTHENTIC SVSS ms-lh-kicker & COMPACT PHONE          */}
      {/* ========================================================================= */}
      <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 border-b border-[var(--border)] overflow-hidden">
        
        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[var(--accent)]/15 via-sky-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Copy Column */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* AUTHENTIC SVSS HERO KICKER WITH PULSING GREEN INDICATOR */}
              <div>
                <span className="ms-lh-kicker">
                  <i aria-hidden="true" />
                  Android · iOS · Flutter · React Native · Web APIs
                </span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)] font-display">
                Mobile App Development{' '}
                <span className="bg-gradient-to-r from-[var(--accent)] via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  Company in India
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-[var(--text-muted)] max-w-2xl leading-relaxed">
                We engineer scalable, high-speed mobile applications with fluid 60 FPS interfaces. From native Swift &amp; Kotlin to cross-platform Flutter and enterprise architectures, we bring your product from discovery to the app stores.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/"
                  className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] shadow-lg shadow-[var(--accent)]/20 transition-all flex items-center gap-2"
                >
                  <span>Get a Free Project Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#our-apps"
                  className="text-xs sm:text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5 px-3 py-2"
                >
                  <span>See apps we built</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>

              {/* Hero Stats Grid */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[var(--border)]">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[var(--text-primary)]">
                    60 FPS
                  </div>
                  <div className="text-xs text-[var(--text-muted)] font-medium">
                    Fluid UI Frame Rate
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[var(--text-primary)]">
                    100%
                  </div>
                  <div className="text-xs text-[var(--text-muted)] font-medium">
                    Code &amp; IP Ownership
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[var(--text-primary)]">
                    100%
                  </div>
                  <div className="text-xs text-[var(--text-muted)] font-medium">
                    Store Approval Rate
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[var(--text-primary)]">
                    99.98%
                  </div>
                  <div className="text-xs text-[var(--text-muted)] font-medium">
                    Architecture SLA
                  </div>
                </div>
              </div>

            </div>

            {/* Right Mockup: Well-Proportioned Compact Phone Frame */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[240px]">
                
                {/* Glowing Aura Ring */}
                <div className="ms-work-ring" />

                {/* Compact iPhone Frame (.ms-dev) */}
                <div className="ms-dev">
                  <div className="ms-dev-btn" />
                  
                  {/* Screen Content */}
                  <div className="ms-dev-screen">
                    <div className="ms-dev-island" />
                    
                    {/* Compact Native App UI */}
                    <div className="pt-6 pb-2 px-2 text-white flex flex-col justify-between h-full font-sans select-none text-[11px]">
                      
                      {/* App Header */}
                      <div className="space-y-0.5">
                        <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono">
                          <span>Tech22 Core</span>
                          <span>9:41 AM</span>
                        </div>
                        <div className="flex items-center justify-between pt-0.5">
                          <div>
                            <div className="text-[10px] text-slate-400">Mobile Telemetry</div>
                            <div className="text-xs font-extrabold text-white">VoiSage Live</div>
                          </div>
                          <span className="px-1.5 py-0.2 rounded-full text-[8px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            LIVE
                          </span>
                        </div>
                      </div>

                      {/* Interactive Telemetry Card */}
                      <div className="space-y-1.5 my-auto">
                        <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="text-slate-300 font-semibold">Latency</span>
                            <span className="text-emerald-400 font-mono font-bold">58ms</span>
                          </div>
                          <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                            <div className="bg-emerald-400 h-full w-[85%]" />
                          </div>
                        </div>

                        {/* Waveform Visualization Mockup */}
                        <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                          <div className="text-[9px] text-slate-400 font-mono flex items-center justify-between">
                            <span>Audio Stream</span>
                            <span className="text-sky-400">60 FPS</span>
                          </div>
                          <div className="flex items-end justify-between h-6 gap-0.5 pt-0.5">
                            {[40, 65, 30, 85, 95, 55, 75, 45, 90, 60].map((h, i) => (
                              <div 
                                key={i} 
                                style={{ height: `${h}%` }}
                                className="w-full bg-[var(--accent)] rounded-full opacity-80" 
                              />
                            ))}
                          </div>
                        </div>

                        {/* Status Check Metric */}
                        <div className="p-2 rounded-xl bg-gradient-to-r from-sky-950/60 to-slate-900/90 border border-sky-800/40 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent)]" />
                            <span className="text-[10px] font-bold text-white">Biometric Vault</span>
                          </div>
                          <span className="text-[9px] font-mono text-emerald-400 font-bold">OK</span>
                        </div>
                      </div>

                      {/* Bottom Navigation Dock */}
                      <div className="pt-1 border-t border-slate-800/80 flex items-center justify-around text-[9px] text-slate-400">
                        <span className="text-[var(--accent)] font-bold">Home</span>
                        <span>Stream</span>
                        <span>Sync</span>
                        <span>Profile</span>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ONE TEAM FOR EVERY PLATFORM (SVSS COIN & TERMINAL BOX)                 */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--canvas)]" id="platforms">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              One Team for Every Platform
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              We provide custom mobile app development services and IT solutions designed for the future. Pick a platform to see what we build with it.
            </p>
          </div>

          {/* Interactive SVSS Platform Tabs Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] mb-8">
              {platformTabs.map((plat, idx) => {
                const isActive = activePlatformTab === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActivePlatformTab(idx)}
                    className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[var(--accent)] text-white shadow-md'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)]'
                    }`}
                  >
                    {plat.name}
                  </button>
                );
              })}
            </div>

            {/* Active Platform Pane with SVSS ms-coin and ms-term */}
            {platformTabs[activePlatformTab] && (
              <div className="p-6 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center transition-all duration-300">
                
                {/* Left Coin Box (ms-coin) */}
                <div className="md:col-span-4 flex justify-center">
                  <div className="ms-coin-box">
                    <Image
                      src={getAssetUrl(platformTabs[activePlatformTab].logo)}
                      alt={platformTabs[activePlatformTab].name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Right Content */}
                <div className="md:col-span-8 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] font-display">
                    {platformTabs[activePlatformTab].name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {platformTabs[activePlatformTab].desc}
                  </p>

                  {/* Capability Chips */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {platformTabs[activePlatformTab].chips.map((chip, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--surface-elevated)] text-[var(--text-primary)] border border-[var(--border)]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  {/* Code Terminal Box (.ms-term-box) */}
                  <div className="pt-2">
                    <div className="ms-term-box">
                      <pre className="text-xs leading-relaxed overflow-x-auto">
                        <code>{platformTabs[activePlatformTab].code}</code>
                      </pre>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SOLUTIONS: FULL-SPECTRUM STACKING CARDS (LEFT VERTICAL SCROLLING NAV)  */}
      {/* (Replaces repetitive Services and Features sections with 1 Unified Section) */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--surface)]" id="solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] mb-2 block">
              Solutions
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              Full-Spectrum Digital Solutions, Under One Roof
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              Pick a service line to see what we build and how we engineer enterprise mobile resilience.
            </p>
          </div>

          {/* Stacking Cards Container with Sticky Left Navigation */}
          <div className="hp-scwrap">
            
            {/* Sticky Left Navigation (.hp-sc-nav) */}
            <nav className="hp-sc-nav" aria-label="Solutions Navigation">
              <ol>
                {solutionsStackCards.map((sc, idx) => {
                  const isCurrent = activeStackCard === idx;
                  return (
                    <li key={sc.id}>
                      <button
                        type="button"
                        onClick={() => handleNavClick(idx)}
                        aria-current={isCurrent ? 'true' : undefined}
                        style={{ '--ac': sc.ac } as React.CSSProperties}
                      >
                        <i aria-hidden="true" />
                        <span>{sc.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </nav>

            {/* Right Stacking Cards List (.hp-stack-cards) */}
            <ol className="hp-stack-cards">
              {solutionsStackCards.map((sc, idx) => (
                <li
                  key={sc.id}
                  id={sc.id}
                  ref={(el) => { stackCardRefs.current[idx] = el; }}
                  data-stack-idx={idx}
                  className="hp-sc"
                  style={{ '--k': idx, '--ac': sc.ac } as React.CSSProperties}
                >
                  <article className="hp-sc-card">
                    
                    {/* Left Card Copy */}
                    <div className="hp-sc-copy">
                      <div className="flex items-center gap-2">
                        <span className="hp-sc-num">
                          {sc.num} <i>/ 06</i>
                        </span>
                        <span className="hp-sc-name">
                          · {sc.kicker}
                        </span>
                      </div>

                      <h3>{sc.title}</h3>
                      <p>{sc.desc}</p>

                      {/* Key Value Points */}
                      <ul className="hp-sol-points">
                        {sc.points.map((pt, pIdx) => (
                          <li key={pIdx}>{pt}</li>
                        ))}
                      </ul>

                      {/* Card Action Button */}
                      <Link href="/contact/" className="hp-sc-btn">
                        <span>{sc.btnText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Right Card Device Mockup Frame (.hp-sc-device) */}
                    <div className="hp-sc-device" aria-hidden="false">
                      
                      {/* Browser / App Bar */}
                      <div className="hp-sc-bar">
                        <i />
                        <i />
                        <i />
                        <span>{sc.deviceTitle}</span>
                      </div>

                      {/* Screen Content */}
                      <div className="hp-sc-screen">
                        <div className="hp-sc-hello">
                          <b>{sc.title}</b>
                          <div className="h-1.5 w-3/4 rounded-full bg-white/40" />
                          <div className="h-1.5 w-1/2 rounded-full bg-white/30" />
                        </div>

                        {/* Tech Tiles List (.hp-sc-tiles) */}
                        <ul className="hp-sc-tiles">
                          {sc.tiles.map((tile, tIdx) => (
                            <li key={tIdx}>
                              <span className="hp-sc-ic">
                                <Image
                                  src={getAssetUrl(tile.icon)}
                                  alt={tile.name}
                                  width={20}
                                  height={20}
                                  className="object-contain"
                                />
                              </span>
                              <span>{tile.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                  </article>
                </li>
              ))}
            </ol>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. APPS WE'VE BUILT (PORTFOLIO DUMMY APPS - ONLY 2 AS DIRECTED)           */}
      {/* ========================================================================= */}
      <section id="our-apps" className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] mb-2 block">
              Proven Delivery
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              Apps We’ve Built
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              Explore 2 benchmark applications engineered by our team, delivering high-speed native UX, offline resiliency, and store-approved excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* App 1: VoiSage AI Companion */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all shadow-md group">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-sky-500 border border-sky-500/20">
                  SwiftUI · Audio Streaming
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">iOS App</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-2">
                VoiSage AI Mobile Companion
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                Native iOS voice interface featuring 60ms streaming speech synthesis, biometric authentication, and offline audio caching for continuous executive productivity.
              </p>
              
              <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] mb-6 text-center">
                <div>
                  <div className="text-sm sm:text-base font-extrabold font-mono text-[var(--text-primary)]">60ms</div>
                  <div className="text-[10px] text-[var(--text-muted)]">Voice Latency</div>
                </div>
                <div>
                  <div className="text-sm sm:text-base font-extrabold font-mono text-[var(--text-primary)]">120 FPS</div>
                  <div className="text-[10px] text-[var(--text-muted)]">Waveform UI</div>
                </div>
                <div>
                  <div className="text-sm sm:text-base font-extrabold font-mono text-emerald-500">4.9 ★</div>
                  <div className="text-[10px] text-[var(--text-muted)]">App Store</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-bold text-[var(--accent)]">
                <span>View Architecture Spec</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* App 2: FleetPulse Field Logistics */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all shadow-md group">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  Kotlin Compose · Offline DB
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">Android App</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-2">
                FleetPulse Field Logistics
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                Offline-first Android application designed for remote drivers with geofenced delivery check-ins, local barcode scanning, and SQLite delta sync back to cloud ERP.
              </p>

              <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] mb-6 text-center">
                <div>
                  <div className="text-sm sm:text-base font-extrabold font-mono text-[var(--text-primary)]">100%</div>
                  <div className="text-[10px] text-[var(--text-muted)]">Offline Operation</div>
                </div>
                <div>
                  <div className="text-sm sm:text-base font-extrabold font-mono text-[var(--text-primary)]">0.2s</div>
                  <div className="text-[10px] text-[var(--text-muted)]">Barcode Scan</div>
                </div>
                <div>
                  <div className="text-sm sm:text-base font-extrabold font-mono text-emerald-500">99.99%</div>
                  <div className="text-[10px] text-[var(--text-muted)]">Sync Reliability</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-bold text-[var(--accent)]">
                <span>View Logistics Case Study</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. APPS WE BUILD: AUTHENTIC 3D COVER FLOW SIDEWAYS SCROLLING (420x300)    */}
      {/* (Technique from SVSS Transforming 20+ Industries With Innovation)         */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--surface)] overflow-hidden" id="apps-we-build">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] mb-2 block">
              Industry Domains
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              Apps We Build
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              Drag, swipe, or click through our industry solutions. We craft custom mobile architectures tailored to domain-specific workflows.
            </p>
          </div>

          {/* Authentic SVSS 3D Cover Flow (.ms-flow) */}
          <div
            ref={flowContainerRef}
            className="ms-flow focus:outline-none"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            <ul className="ms-flow-track">
              {appsWeBuildIndustries.map((ind, j) => {
                const off = j - activeFlowIndex;
                const abs = Math.abs(off);
                const isFar = abs > 3;

                return (
                  <li
                    key={j}
                    onClick={() => {
                      if (!dragMoved.current && j !== activeFlowIndex) {
                        goFlow(j);
                      }
                    }}
                    className={`ms-flow-card ${isFar ? 'far' : ''}`}
                    aria-hidden={off !== 0}
                    style={{
                      '--off': off,
                      '--abs': abs,
                      transform: `translateX(calc(${off} * 58%)) translateZ(calc(${abs} * -170px)) rotateY(calc(${off} * -38deg))`,
                      opacity: isFar ? 0 : Math.max(0, 1 - abs * 0.22),
                      zIndex: Math.max(1, 20 - abs),
                      filter: `brightness(${Math.max(0.45, 1 - abs * 0.14)})`
                    } as React.CSSProperties}
                  >
                    <Image
                      src={getAssetUrl(ind.image)}
                      alt={ind.title}
                      fill
                      sizes="(max-width: 640px) 250px, 420px"
                      className="object-cover"
                      priority={j === 2}
                    />
                    <b>{ind.title}</b>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Synchronized Footer with Prev/Next Controls & Dynamic App Metadata */}
          <div className="max-w-2xl mx-auto mt-8 flex flex-col items-center">
            
            {/* Navigation Buttons and Current Text */}
            <div className="flex items-center justify-between w-full gap-4">
              <button
                type="button"
                onClick={() => goFlow(activeFlowIndex - 1)}
                disabled={activeFlowIndex === 0}
                className="w-12 h-12 rounded-full border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-elevated)] flex items-center justify-center text-[var(--text-primary)] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
                aria-label="Previous industry app"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dynamic Center Details */}
              <div className="text-center px-4 flex-1">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] font-display">
                  {appsWeBuildIndustries[activeFlowIndex]?.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2 leading-relaxed line-clamp-2">
                  {appsWeBuildIndustries[activeFlowIndex]?.desc}
                </p>
                <Link
                  href="/contact/"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--accent)] hover:underline"
                >
                  <span>{appsWeBuildIndustries[activeFlowIndex]?.cta}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <button
                type="button"
                onClick={() => goFlow(activeFlowIndex + 1)}
                disabled={activeFlowIndex === appsWeBuildIndustries.length - 1}
                className="w-12 h-12 rounded-full border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-elevated)] flex items-center justify-center text-[var(--text-primary)] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
                aria-label="Next industry app"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {appsWeBuildIndustries.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => goFlow(dotIdx)}
                  className={`h-2 rounded-full transition-all ${
                    dotIdx === activeFlowIndex
                      ? 'w-6 bg-[var(--accent)]'
                      : 'w-2 bg-[var(--border)] hover:bg-[var(--text-muted)]'
                  }`}
                  aria-label={`Jump to industry ${dotIdx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR CUSTOM MOBILE APP DEVELOPMENT PROCESS (SCROLL STORY BEHAVIOUR)     */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 ms-jr-sec text-white border-b border-slate-800 relative" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-3">
              Our Custom Mobile App Development Process to Boost Your Business
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed bg-white/5 border border-white/10 rounded-2xl p-4">
              We offer comprehensive custom mobile app development services aimed at empowering businesses to succeed in the digital age. Our approach focuses on developing innovative, user-centered applications specifically designed to meet your requirements.
            </p>
          </div>

          {/* Authentic SVSS ms-jr Grid with Sticky Screen on Left and Steps on Right */}
          <div className="ms-jr">
            
            {/* Left Sticky Stage (.ms-jr-stage) */}
            <div className="ms-jr-stage" aria-hidden="true">
              
              {/* Screen Container with Multi-Layered Images */}
              <div className="ms-jr-screen">
                {processSteps.map((step, sIdx) => {
                  const isOn = activeProcessStep === sIdx;
                  return (
                    <Image
                      key={sIdx}
                      src={getAssetUrl(step.image)}
                      alt={step.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 550px"
                      priority={sIdx === 0}
                      data-active={isOn ? 'true' : 'false'}
                      className={`object-cover transition-all duration-700 ${
                        isOn ? 'on opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                      }`}
                    />
                  );
                })}

                {/* Live Badge that lights up at 100% Launch Stage */}
                <span className={`ms-jr-live ${activeProcessStep === 4 ? 'on' : ''}`}>
                  Live on Play Store &amp; App Store
                </span>
              </div>

              {/* Progress Meter with Stage Name and Percentage */}
              <div className="ms-jr-meter">
                <span className="ms-jr-stagename">
                  {processSteps[activeProcessStep]?.title}
                </span>
                <span className="ms-jr-pct">
                  <b>{processSteps[activeProcessStep]?.pct}</b>%
                </span>
                <span className="ms-jr-bar">
                  <i style={{ width: `${processSteps[activeProcessStep]?.pct}%` }} />
                </span>
              </div>

            </div>

            {/* Right Steps Column with Authentic Scroll Heights (.ms-jr-steps) */}
            <ol className="ms-jr-steps">
              {processSteps.map((step, idx) => {
                const isOn = activeProcessStep === idx;
                return (
                  <li
                    key={idx}
                    ref={(el) => { processStepRefs.current[idx] = el; }}
                    data-process-idx={idx}
                    onClick={() => handleProcessStepClick(idx)}
                    className={`${isOn ? 'on' : ''}`}
                  >
                    <span className="ms-jr-num">{step.num}</span>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </li>
                );
              })}
            </ol>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. WHY CHOOSE US (SVSS 2-COLUMN WITH sv-teche.png & 4 CARDS)               */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--canvas)]" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Authentic SVSS Illustration */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[380px] aspect-square">
                <Image
                  src={getAssetUrl('images/svss/sv-teche.png')}
                  alt="Why Choose Us for Mobile App Development"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center mt-4">
                <span className="text-xs font-mono font-bold text-[var(--accent)] tracking-wider uppercase">
                  DPIIT Recognised · ISO Standards
                </span>
                <p className="text-xs text-[var(--text-muted)] mt-1">
                  100% Intellectual Property ownership delivered on milestone completion.
                </p>
              </div>
            </div>

            {/* Right Column: 4 Cards with Colored Top Border */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] mb-2 block">
                  Engineering Standards
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-4">
                  Why Choose Us
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  Tech22Blocks builds software with enterprise discipline and generational rigor. Here is why global enterprises and fast-growing founders trust our mobile engineering team.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* Card 1: Quality */}
                <div className="sv-why-card-item p-6 bg-[var(--surface)] border border-[var(--border)] space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center font-bold font-mono text-sm">
                    01
                  </div>
                  <h3 className="text-lg font-extrabold text-[var(--text-primary)] font-display">
                    Quality
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    Zero tech-debt architecture with strict type safety, modular component hierarchies, and automated UI test coverage across iOS and Android.
                  </p>
                </div>

                {/* Card 2: Reliability */}
                <div className="sv-why-card-item p-6 bg-[var(--surface)] border border-[var(--border)] space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold font-mono text-sm">
                    02
                  </div>
                  <h3 className="text-lg font-extrabold text-[var(--text-primary)] font-display">
                    Reliability
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    Battle-tested cloud and socket connectivity with 99.98% architecture SLA, automated disaster failover, and offline data persistence.
                  </p>
                </div>

                {/* Card 3: Flexibility */}
                <div className="sv-why-card-item p-6 bg-[var(--surface)] border border-[var(--border)] space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold font-mono text-sm">
                    03
                  </div>
                  <h3 className="text-lg font-extrabold text-[var(--text-primary)] font-display">
                    Flexibility
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    Adaptable collaboration models ranging from dedicated sprint squads to fixed-scope milestone deliverables with full weekly visibility.
                  </p>
                </div>

                {/* Card 4: Competence */}
                <div className="sv-why-card-item p-6 bg-[var(--surface)] border border-[var(--border)] space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold font-mono text-sm">
                    04
                  </div>
                  <h3 className="text-lg font-extrabold text-[var(--text-primary)] font-display">
                    Competence
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    Senior engineers who have built mission-critical applications across fintech, logistics, edtech, and AI audio streaming.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FREQUENTLY ASKED QUESTIONS (ACCORDION FAQ)                             */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] mb-2 block">
              Clear Answers
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              Mobile App Development FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Everything you need to know about timelines, code ownership, and store approvals.
            </p>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--canvas)] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-[var(--text-primary)] flex items-center justify-between gap-4 cursor-pointer hover:bg-[var(--surface-elevated)] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-[var(--text-muted)] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed border-t border-[var(--border)]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. CONVERSION CTA SECTION                                                 */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-sky-950 via-slate-900 to-sky-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-white/10 text-sky-400 border border-white/10 inline-block">
            Start Your Mobile Project
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            Let’s Turn Your Vision into Reality!
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Need a high-performance native iOS or Android app, or an accelerated cross-platform launch? Schedule a technical discovery call with our engineering leads today.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/"
              className="px-8 py-4 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-xl flex items-center gap-2"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
