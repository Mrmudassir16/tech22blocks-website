'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Cpu,
  ExternalLink,
  Globe,
  Lock,
  MessageSquareQuote,
  PhoneIncoming,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import { COMPANY } from '@/data/company';
import { getAssetUrl } from '@/utils/assets';
import { StarWatermark } from '@/components/StarEmblem';
import { StaggeredText } from '@/components/design-system/KineticTypography';
import { SectionTransitionShape } from '@/components/design-system/SectionDecorations';
import FinalCTA from '@/components/FinalCTA';

const VOISAGE_URL = 'https://voisage.in/';

interface CallScenario {
  id: string;
  tabLabel: string;
  callerLabel: string;
  callerLocation: string;
  elapsed: string;
  assistantLine: string;
  callerLine: string;
  intentLabel: string;
  confidence: string;
  isSpam: boolean;
  dispatchNote: string;
}

const CALL_SCENARIOS: CallScenario[] = [
  {
    id: 'client',
    tabLabel: 'Client Inquiry',
    callerLabel: '+91 98490 •••••',
    callerLocation: 'Hyderabad, IN',
    elapsed: '00:24 elapsed',
    assistantLine:
      '"Hello, you have reached the executive line. The team is currently in a scheduled session. May I ask the purpose of your call so I can brief them immediately?"',
    callerLine:
      '"Hi, I am calling from Hyderabad Logistics. We need to confirm the API integration schedule for our automated shipment tracking module."',
    intentLabel: 'Intent: Legitimate Client Inquiry',
    confidence: 'Confidence 98.4%',
    isSpam: false,
    dispatchNote: 'Priority brief sent to WhatsApp & Slack. Eligible for direct live bridge.',
  },
  {
    id: 'logistics',
    tabLabel: 'Field Dispatch',
    callerLabel: '+91 90142 •••••',
    callerLocation: 'Bengaluru, IN',
    elapsed: '00:18 elapsed',
    assistantLine:
      '"Good afternoon! How may I assist you or route your request cleanly to the operations desk?"',
    callerLine:
      '"Vendor delivery team at the West Gate with hardware servers — looking for entry approval for Rack Unit 4."',
    intentLabel: 'Intent: Urgent Operations / Facility',
    confidence: 'Confidence 96.9%',
    isSpam: false,
    dispatchNote: 'Tagged Urgent Operations. Instant alert routed to Admin & Executive desk.',
  },
  {
    id: 'spam',
    tabLabel: 'Spam Blocked',
    callerLabel: '+91 14092 •••••',
    callerLocation: 'Unverified Telemarketer',
    elapsed: '00:11 elapsed',
    assistantLine:
      '"Could you clarify the organization and specific commercial matter you are calling regarding today?"',
    callerLine:
      '"Congratulations! You have been pre-approved for an instant zero-collateral credit line with special promotional rates..."',
    intentLabel: 'Intent: Automated Sales / Spam Filtered',
    confidence: 'Confidence 99.6%',
    isSpam: true,
    dispatchNote: 'Call politely terminated. Zero executive interruption. Logged silently.',
  },
];

interface VoisageCapabilityTab {
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  features: string[];
  code: string;
}

const CAPABILITY_TABS: VoisageCapabilityTab[] = [
  {
    title: 'Call Screening',
    badge: 'Sub-600ms Voice',
    subtitle: 'Autonomous Unknown Caller Reception',
    description:
      'Answers unrecognised incoming calls automatically using natural conversational voice cadence, asking objective screening questions without robotic menu trees.',
    features: [
      'Sub-600ms conversational turnaround',
      'Natural prosody & interruption handling',
      'Zero IVR "Press 1" friction',
    ],
    code: `{
  "event": "call.inbound_screened",
  "call_id": "vs_89f21a",
  "turnaround_ms": 512,
  "greeting_mode": "executive_shield",
  "barge_in_enabled": true
}`,
  },
  {
    title: 'Intent Detection',
    badge: '98.4% Precision',
    subtitle: 'Real-Time Lead vs. Spam Classification',
    description:
      'Distinguishes high-value commercial leads, client urgencies, and trusted operational callers from cold pitches, robocalls, and telemarketing noise in seconds.',
    features: [
      'Multi-accent Indian English & regional STT',
      'Confidence-scored intent taxonomy',
      'Silent archival of rejected spam calls',
    ],
    code: `{
  "classification": "CLIENT_PROJECT_INQUIRY",
  "confidence": 0.984,
  "urgency": "HIGH",
  "spam_probability": 0.012,
  "action": "DISPATCH_WHATSAPP_BRIEF"
}`,
  },
  {
    title: 'Live Diarization',
    badge: 'Structured Notes',
    subtitle: 'Full Audio Indexing & Structured Briefs',
    description:
      'Separates assistant prompts from caller speech in real time, producing bullet-point summaries with verified caller name, organization, and callback context.',
    features: [
      'Speaker-separated live transcripts',
      'Actionable executive summary bullets',
      'Encrypted retention with audit logs',
    ],
    code: `{
  "speaker_turns": 4,
  "caller_entity": "Hyderabad Logistics",
  "requested_topic": "Shipment API Rollout",
  "summary": "Confirm Q3 API integration window",
  "audio_encrypted": "AES-256-GCM"
}`,
  },
  {
    title: 'Instant Dispatch',
    badge: 'WhatsApp & API',
    subtitle: 'Multi-Channel Notification & Webhooks',
    description:
      'Delivers rich structured call cards directly to WhatsApp, Slack, or internal CRM webhooks moments after the conversation wraps up — so important leads wait zero minutes.',
    features: [
      'Instant WhatsApp & Slack executive cards',
      'Signed JSON webhooks for CRM sync',
      'One-tap callback or VIP allowlisting',
    ],
    code: `{
  "dispatch_targets": ["whatsapp", "webhook"],
  "delivery_status": "DELIVERED",
  "webhook_signature": "sha256=verified",
  "callback_priority": "IMMEDIATE"
}`,
  },
  {
    title: 'Routing Rules',
    badge: 'VIP Bypass',
    subtitle: 'Custom Schedule & VIP Caller Policies',
    description:
      'Define strict VIP bypass lists for saved partners and family, time-window focus shields during deep sprints, and custom emergency keywords that bridge directly to your phone.',
    features: [
      'Always-ring VIP allowlist bypass',
      'Deep-work & after-hours screening schedules',
      'Emergency keyword live call transfer',
    ],
    code: `{
  "policy": "deep_focus_sprint",
  "vip_bypass_count": 42,
  "emergency_keywords": ["outage", "critical"],
  "forward_on_high_intent": true
}`,
  },
];

function VoiSageCapEmblem({ tabIndex }: { tabIndex: number }) {
  const emblems = [
    // 0: Call Screening (Acoustic Phone Sphere)
    <svg key="vs0" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="22" fill="#E0F2FE" stroke="#0F172A" strokeWidth="2.4" />
      <rect x="24" y="16" width="16" height="32" rx="4" fill="#38BDF8" stroke="#0F172A" strokeWidth="2.2" />
      <path d="M13 28V36M18 24V40M46 24V40M51 28V36" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="42" r="2" fill="#0F172A" />
    </svg>,
    // 1: Intent Detection (Shield + Precision Pulse)
    <svg key="vs1" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
      <path d="M32 10L50 18V32C50 43 42 51 32 54C22 51 14 43 14 32V18L32 10Z" fill="#FEF3C7" stroke="#0F172A" strokeWidth="2.4" strokeLinejoin="round" />
      <circle cx="32" cy="31" r="9" fill="#34D399" stroke="#0F172A" strokeWidth="2.2" />
      <path d="M28 31L31 34L37 28" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // 2: Live Diarization (Waveform Document)
    <svg key="vs2" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
      <rect x="12" y="12" width="40" height="40" rx="8" fill="#EDE9FE" stroke="#0F172A" strokeWidth="2.4" />
      <rect x="18" y="20" width="20" height="8" rx="4" fill="#38BDF8" stroke="#0F172A" strokeWidth="2" />
      <rect x="26" y="34" width="20" height="8" rx="4" fill="#A78BFA" stroke="#0F172A" strokeWidth="2" />
    </svg>,
    // 3: Instant Dispatch (Message & Webhook)
    <svg key="vs3" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
      <path d="M12 18C12 14.6863 14.6863 12 18 12H46C49.3137 12 52 14.6863 52 18V38C52 41.3137 49.3137 44 46 44H26L14 52V44C12.8954 44 12 43.1046 12 42V18Z" fill="#CCFBF1" stroke="#0F172A" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M22 28L28 34L42 22" stroke="#0F172A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // 4: Routing Rules (Switch Nodes)
    <svg key="vs4" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
      <path d="M18 22H46M18 42H46" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" />
      <rect x="12" y="15" width="40" height="14" rx="7" fill="#E0F2FE" stroke="#0F172A" strokeWidth="2.3" />
      <circle cx="42" cy="22" r="5" fill="#34D399" stroke="#0F172A" strokeWidth="2.2" />
      <rect x="12" y="35" width="40" height="14" rx="7" fill="#FEF3C7" stroke="#0F172A" strokeWidth="2.3" />
      <circle cx="22" cy="42" r="5" fill="#38BDF8" stroke="#0F172A" strokeWidth="2.2" />
    </svg>,
  ];
  return emblems[tabIndex % emblems.length];
}

const PIPELINE_NODES = [
  {
    id: '01',
    title: 'Telephony Ingress (SIP / WebRTC)',
    summary: 'Unrecognised calls bridge cleanly into an encrypted low-latency edge audio channel.',
    detail: 'Supports dual-channel audio capture, VAD (Voice Activity Detection), and graceful barge-in handling.',
  },
  {
    id: '02',
    title: 'Streaming Speech-to-Text',
    summary: 'Real-time partial transcripts decoded across Indian English and regional accents.',
    detail: 'Token-level interim hypothesis streaming removes awkward silence before response planning begins.',
  },
  {
    id: '03',
    title: 'Conversational LLM Screening Policy',
    summary: 'Polite, objective goal-oriented dialogue that validates caller purpose within 2–3 turns.',
    detail: 'Extracts organization name, call intent, urgency tier, and callback constraints automatically.',
  },
  {
    id: '04',
    title: 'Neural TTS & Multi-Channel Dispatch',
    summary: 'Human-cadence speech synthesis paired with instant WhatsApp and CRM JSON briefings.',
    detail: 'Delivers actionable executive cards seconds after hang-up so legitimate deals never stall.',
  },
];

const WORKFLOW_USE_CASES = [
  {
    title: 'Founders & Executives',
    color: '#0A85B1',
    description:
      'Protect multi-hour engineering sprints and board meetings from unscheduled interruptions while ensuring high-value partnerships and investor inquiries receive immediate courtesy.',
    features: [
      'Zero interruption during deep focus blocks',
      'Instant WhatsApp brief with caller intent',
      'VIP contact bypass for immediate family & partners',
    ],
  },
  {
    title: 'Sales & Client Intake',
    color: '#0D9488',
    description:
      'Ensure no inbound prospect reaches a dead voicemail box during busy hours. VoiSage captures project intent and dispatches structured lead metadata directly to your pipeline.',
    features: [
      '24/7 polite human-cadence prospect reception',
      'Automatic spam vs. buyer qualification',
      'Signed webhook sync into internal CRMs',
    ],
  },
  {
    title: 'Operations & Logistics',
    color: '#2563EB',
    description:
      'Triage time-sensitive vendor, fleet, and site delivery calls cleanly without pulling senior managers away from critical floor coordination.',
    features: [
      'High-urgency keyword alerting & routing',
      'Multi-accent recognition across regions',
      'Auditable timestamped dispatch logs',
    ],
  },
  {
    title: 'Consultants & Advisory Clinics',
    color: '#7C3AED',
    description:
      'Eliminate missed consultation requests while in back-to-back client reviews. Every unknown number gets courteous reception and a clean callback summary.',
    features: [
      'Custom after-hours greeting policies',
      'Encrypted transcript & summary archiving',
      'Clear urgency prioritization for callbacks',
    ],
  },
];

const VOISAGE_TECH_TABS = [
  {
    label: 'Voice & Real-Time Layer',
    items: [
      { name: 'Node.js / WebRTC', icon: '/images/tech-logos/nodedotjs.svg' },
      { name: 'TypeScript', icon: '/images/tech-logos/typescript.svg' },
      { name: 'Go (Telemetry)', icon: '/images/tech-logos/go.svg' },
      { name: 'Apache Kafka', icon: '/images/tech-logos/apachekafka.svg' },
    ],
  },
  {
    label: 'AI, STT & Memory',
    items: [
      { name: 'Python AI Core', icon: '/images/tech-logos/python.svg' },
      { name: 'Redis Low-Latency', icon: '/images/tech-logos/redis.svg' },
      { name: 'PostgreSQL', icon: '/images/tech-logos/postgresql.svg' },
      { name: 'TimescaleDB', icon: '/images/tech-logos/timescale.svg' },
    ],
  },
  {
    label: 'Cloud & Data Security',
    items: [
      { name: 'Google Cloud', icon: '/images/tech-logos/googlecloud.svg' },
      { name: 'Docker', icon: '/images/tech-logos/docker.svg' },
      { name: 'Kubernetes', icon: '/images/tech-logos/kubernetes.svg' },
      { name: 'HashiCorp Vault', icon: '/images/tech-logos/vault.svg' },
      { name: 'Prometheus', icon: '/images/tech-logos/prometheus.svg' },
      { name: 'Grafana', icon: '/images/tech-logos/grafana.svg' },
    ],
  },
];

const VOISAGE_FAQS = [
  {
    question: 'Where can I access VoiSage AI and learn more about active deployments?',
    answer:
      'VoiSage AI has its own dedicated official platform at https://voisage.in/. You can visit voisage.in directly to explore product walkthroughs, screening modes, and onboarding options, or contact our Tech22Blocks team for custom enterprise integrations.',
  },
  {
    question: 'Does VoiSage AI screen calls from contacts I already trust?',
    answer:
      'No. You maintain complete control over VIP and saved-contact allowlists. Calls from trusted partners, colleagues, and family bypass screening and ring your phone normally.',
  },
  {
    question: 'How fast do I know if an unknown caller was an important client lead?',
    answer:
      'Within seconds of the call concluding, VoiSage AI sends a structured executive brief via WhatsApp, Slack, or CRM webhook containing the caller’s identity, intent classification, confidence score, and key bullet points.',
  },
  {
    question: 'How does VoiSage AI handle different Indian English and regional accents?',
    answer:
      'Our streaming speech-to-text pipeline is specifically tuned for diverse Indian English and regional acoustic patterns, avoiding the dropped phrases common in generic consumer voice bots.',
  },
  {
    question: 'Are caller audio streams and transcripts stored securely?',
    answer:
      'Yes. Audio buffers and structured transcripts are encrypted in transit and at rest with strict data sovereignty controls engineered by Tech22Blocks.',
  },
];

export default function VoiSageProductPage() {
  const { product } = COMPANY;
  const [activeScenarioIdx, setActiveScenarioIdx] = useState<number>(0);
  const [activeCapTab, setActiveCapTab] = useState<number>(0);
  const [activePipelineIdx, setActivePipelineIdx] = useState<number>(0);
  const [activeStackCard, setActiveStackCard] = useState<number>(0);
  const [activeTechTab, setActiveTechTab] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const stackCardRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-voisage-stack'));
            if (!isNaN(idx)) setActiveStackCard(idx);
          }
        });
      },
      { root: null, rootMargin: '-40% 0px -45% 0px' }
    );
    stackCardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (idx: number) => {
    setActiveStackCard(idx);
    stackCardRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const scenario = CALL_SCENARIOS[activeScenarioIdx] || CALL_SCENARIOS[0];
  const activeCap = CAPABILITY_TABS[activeCapTab] || CAPABILITY_TABS[0];

  const archCards = [
    {
      icon: Zap,
      badge: 'Streaming Audio',
      title: 'Audio Streaming Pipeline',
      description: product.technicalArchitecture.audioStreaming,
    },
    {
      icon: Cpu,
      badge: 'Multi-Accent STT',
      title: 'Streaming Speech-to-Text',
      description: product.technicalArchitecture.speechToText,
    },
    {
      icon: Server,
      badge: 'Dialogue Policy',
      title: 'Conversational LLM Logic',
      description: product.technicalArchitecture.languageModel,
    },
    {
      icon: Activity,
      badge: 'Human Prosody',
      title: 'Neural Text-to-Speech',
      description: product.technicalArchitecture.textToSpeech,
    },
    {
      icon: Lock,
      badge: 'Encrypted Vault',
      title: 'Data Sovereignty & Security',
      description: product.technicalArchitecture.infrastructure,
    },
    {
      icon: CheckCircle2,
      badge: '< 600ms SLA',
      title: 'Low-Latency Turnaround Engine',
      description:
        'End-to-end voice turnaround engineered for near-instant responsiveness, delivering natural human-like conversation flow.',
    },
  ];

  return (
    <div className="bg-[var(--canvas)] text-[var(--text-primary)] transition-colors duration-200">
      {/* ========================================================================= */}
      {/* 1. SPLIT HERO + INTERACTIVE LIVE VOICE CALL SCREENING SIMULATOR           */}
      {/* ========================================================================= */}
      <section className="relative bg-[var(--surface)] text-[var(--text-primary)] pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-20 border-b border-[var(--border)] overflow-hidden transition-colors duration-200">
        <StarWatermark size={650} position="top-right" variant="blue" opacity={0.03} rotate={15} />
        <div className="absolute top-1/4 left-1/4 w-[520px] h-[420px] bg-[var(--accent)]/[0.06] rounded-full blur-[140px] pointer-events-none transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Copy & Official Platform CTAs */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="ms-lh-kicker">
                  <i aria-hidden="true" />
                  {product.badge} • {product.status}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)] font-display">
                <StaggeredText text="VoiSage AI" />{' '}
                <StaggeredText text="Voice Intelligence." isShimmer />
              </h1>

              <p className="text-lg sm:text-xl font-bold text-[var(--text-primary)] font-display">
                {product.headline}
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-[var(--text-muted)] font-normal leading-relaxed max-w-2xl">
                {product.subheadline}
              </p>

              {/* Official Website & Early Access Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={VOISAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-offset px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] shadow-lg shadow-[var(--accent)]/20 transition-all inline-flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  <span>Visit voisage.in</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  href="/contact/"
                  className="px-5 py-3.5 rounded-xl text-sm font-semibold text-[var(--text-primary)] bg-[var(--surface-elevated)] hover:bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all inline-flex items-center gap-2"
                >
                  <span>Request Enterprise Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Breadcrumb */}
              <div className="pt-1 flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                <Link href="/" className="hover:text-[var(--accent)] transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3 h-3 text-[var(--border)]" />
                <Link href="/products/" className="hover:text-[var(--accent)] transition-colors">
                  Products
                </Link>
                <ChevronRight className="w-3 h-3 text-[var(--border)]" />
                <span className="text-[var(--text-primary)] font-bold">VoiSage AI</span>
              </div>

              {/* 4-Metric Aligned Trust Strip */}
              <div className="pt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 items-stretch border-t border-[var(--border)]">
                {[
                  { value: '< 600ms', label: 'Voice Turnaround' },
                  { value: '98.4%', label: 'Intent Accuracy' },
                  { value: '24/7', label: 'Screening Shield' },
                  { value: '100%', label: 'Encrypted Audio' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col justify-between p-3 sm:p-3.5 rounded-xl bg-[var(--surface-elevated)]/70 border border-[var(--border)]"
                  >
                    <div className="text-sm sm:text-base xl:text-lg font-extrabold font-mono text-[var(--text-primary)] leading-snug">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-[var(--text-muted)] font-medium leading-snug mt-1.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Voice Command Console */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-slate-700/80 bg-slate-950 shadow-2xl p-4 sm:p-6 space-y-4 text-white">
                {/* Console Header + Scenario Switcher */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3.5">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-400 ml-1">VoiSage Engine</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-[11px] font-medium text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/60">
                    <Activity className="w-3 h-3 animate-pulse" />
                    <span>Live Screening Simulator</span>
                  </div>
                </div>

                {/* Scenario Selector Pills */}
                <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Call Scenario Simulator">
                  {CALL_SCENARIOS.map((sc, sIdx) => {
                    const active = activeScenarioIdx === sIdx;
                    return (
                      <button
                        key={sc.id}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => setActiveScenarioIdx(sIdx)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                          active
                            ? 'bg-sky-500 text-slate-950 shadow-sm'
                            : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                        }`}
                      >
                        {sc.tabLabel}
                      </button>
                    );
                  })}
                </div>

                {/* Incoming Call Metadata */}
                <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-950/80 border border-sky-800/80 flex items-center justify-center text-sky-400 flex-shrink-0">
                      <PhoneIncoming className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                        Incoming Unknown Caller
                      </p>
                      <p className="text-xs sm:text-sm font-mono text-slate-100">
                        {scenario.callerLabel}{' '}
                        <span className="text-slate-400 text-xs">[{scenario.callerLocation}]</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 flex-shrink-0">
                    {scenario.elapsed}
                  </span>
                </div>

                {/* Transcript Bubbles */}
                <div className="space-y-2.5 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800/90 space-y-1">
                    <div className="flex items-center justify-between text-sky-400 text-[11px] font-mono">
                      <span className="font-semibold flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        VoiSage Voice Assistant
                      </span>
                      <span className="text-slate-500 text-[10px]">Neural TTS</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{scenario.assistantLine}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-slate-400 text-[11px] font-mono">
                      <span className="font-semibold flex items-center gap-1.5">
                        <MessageSquareQuote className="w-3.5 h-3.5" />
                        Caller Audio Stream
                      </span>
                      <span className="text-slate-500 text-[10px]">Streaming STT</span>
                    </div>
                    <p className="text-slate-200 leading-relaxed">{scenario.callerLine}</p>
                  </div>

                  {/* Intent Evaluation Bar */}
                  <div
                    className={`p-3.5 rounded-xl border space-y-1 ${
                      scenario.isSpam
                        ? 'bg-rose-950/30 border-rose-900/60'
                        : 'bg-emerald-950/30 border-emerald-900/60'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span
                        className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                          scenario.isSpam ? 'text-rose-400' : 'text-emerald-400'
                        }`}
                      >
                        {scenario.intentLabel}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          scenario.isSpam
                            ? 'text-rose-200 bg-rose-900/50'
                            : 'text-emerald-200 bg-emerald-900/50'
                        }`}
                      >
                        {scenario.confidence}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">{scenario.dispatchNote}</p>
                  </div>
                </div>

                {/* Official URL Footer inside Console */}
                <div className="pt-2 border-t border-slate-900 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                  <span className="text-slate-400 font-mono">Engineered by Tech22Blocks Labs</span>
                  <a
                    href={VOISAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 font-mono font-semibold"
                  >
                    <span>voisage.in</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE CAPABILITIES (.ms-coin-box + .ms-term-box)                 */}
      {/* ========================================================================= */}
      <section className="relative py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--canvas)] overflow-hidden">
        <SectionTransitionShape position="top" variant="stepped-left" fillColor="var(--surface)" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="mb-2.5">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                Product Capabilities
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              <StaggeredText text="Protecting Executive Focus" />{' '}
              <StaggeredText text="In Real Time" isShimmer />
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              {product.problem} {product.solution}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Pill Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] mb-8">
              {CAPABILITY_TABS.map((tab, idx) => {
                const isActive = activeCapTab === idx;
                return (
                  <button
                    key={tab.title}
                    type="button"
                    onClick={() => setActiveCapTab(idx)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[var(--accent)] text-white shadow-md'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)]'
                    }`}
                  >
                    {tab.title}
                  </button>
                );
              })}
            </div>

            {/* Active Medallion + Terminal Showcase */}
            <div className="p-6 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center transition-all duration-300">
              <div className="md:col-span-4 flex flex-col items-center gap-3.5">
                <div className="ms-coin-box">
                  <VoiSageCapEmblem tabIndex={activeCapTab} />
                </div>
                <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 border border-[var(--accent)]/25 text-center leading-snug max-w-[200px]">
                  {activeCap.badge}
                </span>
              </div>

              <div className="md:col-span-8 space-y-4">
                <div>
                  <span className="text-xs font-mono text-[var(--accent)] font-semibold block mb-1">
                    {activeCap.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] font-display">
                    {activeCap.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {activeCap.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {activeCap.features.map((feat, fIdx) => (
                    <span
                      key={fIdx}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--surface-elevated)] text-[var(--text-primary)] border border-[var(--border)]"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <div className="ms-term-box">
                    <pre className="text-xs leading-relaxed overflow-x-auto">
                      <code>{activeCap.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE VOICE PIPELINE + PRODUCT VISUAL (MOBILE SHOWCASE STYLE)    */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--surface)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="mb-2.5">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                Interactive Call Lifecycle
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              <StaggeredText text="How VoiSage Screens" />{' '}
              <StaggeredText text="Every Call" isShimmer />
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              Click any stage in the real-time voice loop to inspect what happens from incoming ring to executive brief delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Interactive Image Artwork */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-[var(--border)] shadow-2xl bg-slate-950">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={getAssetUrl('/images/products/voisage-ai-card.jpg')}
                    alt="VoiSage AI Acoustic Voice Sphere & Screening System"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                </div>

                {/* Live Active Pipeline Node Overlay */}
                <div className="p-5 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-bold">
                      Stage {PIPELINE_NODES[activePipelineIdx]?.id} Active
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white font-display mt-0.5">
                      {PIPELINE_NODES[activePipelineIdx]?.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {PIPELINE_NODES[activePipelineIdx]?.detail}
                    </p>
                  </div>
                  <a
                    href={VOISAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-xs font-bold inline-flex items-center gap-1.5 flex-shrink-0 transition-all shadow-md"
                  >
                    <span>Open voisage.in</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Clickable Pipeline Steps */}
            <div className="lg:col-span-6 space-y-3.5">
              {PIPELINE_NODES.map((node, idx) => {
                const isActive = activePipelineIdx === idx;
                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setActivePipelineIdx(idx)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                      isActive
                        ? 'bg-[var(--canvas)] border-[var(--accent)] shadow-lg -translate-y-0.5'
                        : 'bg-[var(--surface-elevated)] border-[var(--border)] hover:border-[var(--accent)]/50'
                    }`}
                  >
                    <span
                      className={`w-10 h-10 rounded-xl font-mono font-extrabold text-sm flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[var(--accent)] text-white'
                          : 'bg-[var(--surface)] border border-[var(--border)] text-[var(--accent)]'
                      }`}
                    >
                      {node.id}
                    </span>
                    <div>
                      <h4
                        className={`text-sm sm:text-base font-bold font-display ${
                          isActive ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'
                        }`}
                      >
                        {node.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1 leading-relaxed">
                        {node.summary}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. REAL-WORLD USE CASES (STICKY STACKING CARDS - NO overflow-hidden!)     */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="mb-2.5">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                Operational Impact
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              <StaggeredText text="Built For High-Focus" />{' '}
              <StaggeredText text="Decision Makers" isShimmer />
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              From executive founders to high-velocity sales and operations teams, VoiSage turns unknown caller interruptions into calm, qualified workflows.
            </p>
          </div>

          <div className="hp-scwrap">
            <nav className="hp-sc-nav" aria-label="VoiSage Use Case Navigation">
              <ol>
                {WORKFLOW_USE_CASES.map((uc, idx) => {
                  const isCurrent = activeStackCard === idx;
                  return (
                    <li key={uc.title}>
                      <button
                        type="button"
                        onClick={() => handleNavClick(idx)}
                        aria-current={isCurrent ? 'true' : undefined}
                        style={{ '--ac': uc.color } as React.CSSProperties}
                      >
                        <i aria-hidden="true" />
                        <span>{uc.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </nav>

            <ol className="hp-stack-cards">
              {WORKFLOW_USE_CASES.map((uc, idx) => (
                <li
                  key={uc.title}
                  ref={(el) => {
                    stackCardRefs.current[idx] = el;
                  }}
                  data-voisage-stack={idx}
                  className="hp-sc"
                  style={{ '--k': idx, '--ac': uc.color } as React.CSSProperties}
                >
                  <article className="hp-sc-card">
                    <div className="hp-sc-copy">
                      <div className="flex items-center gap-2">
                        <span className="hp-sc-num">
                          {String(idx + 1).padStart(2, '0')} <i>/ 0{WORKFLOW_USE_CASES.length}</i>
                        </span>
                      </div>
                      <h3>{uc.title}</h3>
                      <p className="hp-sc-desc">{uc.description}</p>
                    </div>

                    <div className="hp-sc-vis">
                      <div className="hp-sc-panel">
                        <div className="hp-sc-vis-head">
                          <div className="hp-sc-thumb relative overflow-hidden">
                            <Image
                              src={getAssetUrl('/images/products/voisage-ai-card.jpg')}
                              alt={uc.title}
                              fill
                              sizes="64px"
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <b>{uc.title}</b>
                            <span className="text-[11px] text-white/80 block">
                              VoiSage AI Workflow
                            </span>
                          </div>
                        </div>

                        <ul className="hp-sc-tiles">
                          {uc.features.map((feat, fIdx) => (
                            <li key={fIdx}>
                              <span className="hp-sc-ic">
                                <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
                              </span>
                              <span>{feat}</span>
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
      {/* 5. DEEP TECHNICAL ARCHITECTURE (6 CORNER-GLOW CARDS)                      */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--surface)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="mb-2.5">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                Deep Technical Architecture
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              <StaggeredText text="Under the Hood of" />{' '}
              <StaggeredText text="VoiSage AI" isShimmer />
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              Engineered with low-latency streaming telephony, multi-accent acoustic models, and end-to-end encrypted infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {archCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={card.title}
                  className="group relative p-6 rounded-2xl bg-[var(--canvas)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -top-8 -right-8 w-28 h-28 rounded-bl-full bg-gradient-to-bl from-[var(--accent)]/20 via-sky-500/10 to-transparent transition-transform duration-500 group-hover:scale-125 pointer-events-none"
                  />

                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/25 flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                      0{idx + 1} • {card.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-display tracking-tight mb-2 relative z-10 group-hover:text-[var(--accent)] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed relative z-10">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CORE TECHNOLOGY STACK (COLORED LOGOS MATCHING WEB & SERVICE STANDARDS) */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 border-b border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="mb-2.5">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                Technology Foundation
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              <StaggeredText text="Powering" />{' '}
              <StaggeredText text="VoiSage Stack" isShimmer />
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              Battle-tested real-time voice streaming, observability, and zero-trust security components.
            </p>
          </div>

          <div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10"
            role="tablist"
            aria-label="VoiSage Stack Categories"
          >
            {VOISAGE_TECH_TABS.map((tab, tIdx) => {
              const isSelected = activeTechTab === tIdx;
              return (
                <button
                  key={tab.label}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTechTab(tIdx)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--text-primary)] text-[var(--canvas)] shadow-md'
                      : 'bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border)] hover:text-[var(--text-primary)] hover:border-[var(--accent)]/50'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
            {VOISAGE_TECH_TABS[activeTechTab]?.items.map((tech) => (
              <li
                key={tech.name}
                className="flex flex-col items-center gap-2 group"
                title={tech.name}
              >
                <span className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border border-[var(--border)] shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-200 flex items-center justify-center p-3">
                  <Image
                    src={getAssetUrl(tech.icon)}
                    alt={tech.name}
                    width={56}
                    height={56}
                    className="object-contain w-12 h-12 sm:w-14 sm:h-14"
                  />
                </span>
                <small className="text-xs font-mono text-[var(--text-muted)] font-medium text-center max-w-[120px] leading-snug">
                  {tech.name}
                </small>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. OFFICIAL PLATFORM SPOTLIGHT BANNER (https://voisage.in/)               */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-sky-950 border border-slate-800 text-white shadow-2xl overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2.5 max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-sky-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Official Product Website</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display">
                Explore VoiSage AI Live at{' '}
                <span className="text-sky-400">voisage.in</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Visit the dedicated VoiSage AI website to learn more about onboarding, live screening workflows, and pricing updates, or connect with our Tech22Blocks engineers for custom SIP/CRM enterprise deployments.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 relative z-10 flex-shrink-0">
              <a
                href={VOISAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs sm:text-sm font-extrabold transition-all shadow-lg inline-flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                <span>Visit https://voisage.in/</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="/contact/"
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-bold transition-all inline-flex items-center gap-2"
              >
                <span>Talk to Engineering</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. PRODUCT FAQ ACCORDION                                                  */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[var(--surface-elevated)] border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="mb-2.5">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                Product Clarity
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display">
              <StaggeredText text="VoiSage AI" />{' '}
              <StaggeredText text="Questions" isShimmer />
            </h2>
          </div>

          <div className="space-y-3.5">
            {VOISAGE_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.question}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? 'bg-[var(--surface)] border-[var(--accent)] shadow-md'
                      : 'bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]/40'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left px-5 sm:px-7 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-sm sm:text-base font-bold tracking-tight transition-colors font-display ${
                        isOpen ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                        isOpen
                          ? 'bg-[var(--accent)]/15 text-[var(--accent)] rotate-180'
                          : 'bg-[var(--surface-elevated)] text-[var(--text-muted)]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-7 pb-5 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal border-t border-[var(--border)] pt-3.5">
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
      {/* 9. FINAL CTA                                                              */}
      {/* ========================================================================= */}
      <FinalCTA />
    </div>
  );
}
