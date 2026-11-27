export interface HotspotNode {
  id: number;
  title: string;
  desc: string;
  left: string;
  top: string;
}

export interface ServiceInteractiveMeta {
  slug: 'uiux-design' | 'custom-software' | 'it-consulting' | 'web3';
  heroKickerTag: string;
  heroTitlePrimary: string;
  heroTitleAccent: string;
  spotlightImage: string;
  whyChooseImage: string;
  platformCodes: string[];
  capabilityImages: string[];
  solutionImages: string[];
  solutionColors: string[];
  hotspotHeadingPrimary: string;
  hotspotHeadingAccent: string;
  hotspotSubtitle: string;
  hotspots: HotspotNode[];
  processImages: string[];
  whyChoosePrimary: string;
  whyChooseAccent: string;
}

export const SERVICE_INTERACTIVE_META: Record<
  'uiux-design' | 'custom-software' | 'it-consulting' | 'web3',
  ServiceInteractiveMeta
> = {
  'uiux-design': {
    slug: 'uiux-design',
    heroKickerTag: 'Figma Systems · Design Tokens · Prototypes · WCAG AA · CRO',
    heroTitlePrimary: 'UI/UX Design &',
    heroTitleAccent: 'Product Architecture',
    spotlightImage: '/images/service_image_1.webp',
    whyChooseImage: '/images/services/uiux-3d-visual.jpg',
    platformCodes: [
      `// Design System Semantic Tokens (tokens.json)
export const surfaceTokens = {
  canvas: "var(--canvas)",
  accent: "#0A85B1",
  radiusCard: "16px",
  elevationFocus: "0 20px 44px -18px rgba(10,133,177,0.35)"
};`,
      `// Mobile Touch Target & Thumb-Zone Grid
export const TouchSpec = {
  minHitArea: "44px × 44px",
  primaryActionZone: "bottom-32%",
  hapticFeedback: "impactMedium",
  adaptiveTheme: ["light", "dark"]
};`,
      `// High-Density SaaS Telemetry Hierarchy
interface TableSchema<T> {
  density: "compact" | "comfortable";
  stickyHeader: true;
  inlineSparkline: (row: T) => number[];
  zeroLayoutShift: true;
}`,
      `// User Empathy & Heuristic Audit Gate
const auditCheck = {
  nielsenSeverity: "0 — Zero Blocker",
  taskCompletionRate: "98.4%",
  timeToFirstAction: "< 1.4s",
  cognitiveLoadIndex: "Low"
};`,
      `// Clickable Interactive Figma Spec
const prototypeFlow = {
  smartAnimateSpring: { stiffness: 320, damping: 28 },
  statesMapped: ["default", "hover", "focus", "error"],
  breakpoints: ["375px", "768px", "1440px"]
};`,
      `// Conversion Rate Funnel Optimization
export const checkoutCRO = {
  stepsReduced: "5 steps → 2 streamlined views",
  dropOffReduction: "-41% checkout abandonment",
  accessibilityTarget: "WCAG 2.1 AA"
};`,
    ],
    capabilityImages: [
      '/images/service_image_1.webp',
      '/images/about_image_6.webp',
      '/images/enterprise-platform-mockup.jpg',
      '/images/service_image_3.webp',
      '/images/mobile-apps-showcase.jpg',
      '/images/about_image_5.webp',
      '/images/hero-corporate-engineering.jpg',
      '/images/svss/proc-testing.webp',
    ],
    solutionImages: [
      '/images/enterprise-platform-mockup.jpg',
      '/images/svss/app-finance.webp',
      '/images/industries/health.jpg',
      '/images/industries/ecommerce.jpg',
      '/images/industries/logistics.jpg',
      '/images/mobile-apps-showcase.jpg',
    ],
    solutionColors: ['#0284c7', '#0a85b1', '#0d9488', '#7c3aed', '#2563eb', '#d97706'],
    hotspotHeadingPrimary: 'Anatomy of a',
    hotspotHeadingAccent: 'Design System We Craft',
    hotspotSubtitle:
      'Inspect every architectural layer of our product interfaces — from tokenized typography to thumb-zone ergonomics.',
    hotspots: [
      {
        id: 0,
        title: 'Atomic Typography & Hierarchy',
        desc: 'Deliberate type scale, crisp line-height ratios, and balanced visual weight guide attention in under 3 seconds.',
        left: '16%',
        top: '25%',
      },
      {
        id: 1,
        title: 'Reusable Component Variants',
        desc: 'Buttons, inputs, modals, and cards define default, hover, focus, loading, and error states with zero ambiguity.',
        left: '18%',
        top: '52%',
      },
      {
        id: 2,
        title: 'Mobile-First Touch Ergonomics',
        desc: 'Minimum 44×44px interactive tap targets and thumb-friendly drawer placement ensure smooth one-handed navigation.',
        left: '74%',
        top: '41%',
      },
      {
        id: 3,
        title: 'WCAG AA Contrast & Tokens',
        desc: 'Semantic CSS variables swap cleanly between light and dark modes while preserving strict contrast ratios.',
        left: '8%',
        top: '72%',
      },
      {
        id: 4,
        title: 'JSON-to-Tailwind Handoff',
        desc: 'Design tokens export directly to code configs so engineering ships every spacing rule pixel-for-pixel.',
        left: '79%',
        top: '15%',
      },
    ],
    processImages: [
      '/images/svss/proc-planning.webp',
      '/images/svss/proc-design.webp',
      '/images/service_image_1.webp',
      '/images/svss/proc-testing.webp',
      '/images/svss/proc-launch.webp',
    ],
    whyChoosePrimary: 'Why Our Product Design',
    whyChooseAccent: 'Drives Adoption',
  },

  'custom-software': {
    slug: 'custom-software',
    heroKickerTag: 'Go · TypeScript · Microservices · PostgreSQL · Kubernetes',
    heroTitlePrimary: 'Custom Software',
    heroTitleAccent: 'Development Company',
    spotlightImage: '/images/service_image_4.webp',
    whyChooseImage: '/images/services/custom-software-3d-visual.jpg',
    platformCodes: [
      `// High-Concurrency Go gRPC Microservice
func (s *OrderServer) Dispatch(ctx context.Context, req *pb.OrderReq) (*pb.Ack, error) {
    tx, _ := s.db.BeginTx(ctx, &sql.TxOptions{Isolation: sql.LevelSerializable})
    defer tx.Rollback()
    return &pb.Ack{Status: "COMMITTED", LatencyMs: 14}, tx.Commit()
}`,
      `-- ACID Multi-Warehouse Ledger Schema
CREATE TABLE inventory_movements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sku_id UUID NOT NULL REFERENCES skus(id),
  delta INTEGER NOT NULL CHECK (delta <> 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);`,
      `// Edge Rate-Limited API Gateway
export async function handleGateway(req: Request, env: Env) {
  const { success } = await env.LIMITER.limit({ key: req.headers.get("x-tenant-id") });
  if (!success) return new Response("Rate Limited", { status: 429 });
  return proxyToCluster(req);
}`,
      `// Zero-Downtime Connection Pooling
export const pgPool = new Pool({
  max: 40,
  idleTimeoutMillis: 15000,
  connectionTimeoutMillis: 1200,
  ssl: { rejectUnauthorized: true }
});`,
      `// Strangler Fig Legacy Migration Router
if (featureFlags.isEnabled("v2-billing-service", tenantId)) {
  return await routeToMicroservice(payload);
}
await dualWriteVerify(legacyClient, modernClient, payload);`,
      `// Resilient Background Worker Queue
billingQueue.process("generate-invoice", 8, async (job) => {
  await retryWithBackoff(() => syncERPAndEmailPDF(job.data), 3);
  return { reconciled: true };
});`,
    ],
    capabilityImages: [
      '/images/service_image_4.webp',
      '/images/ai-cloud-automation.jpg',
      '/images/enterprise-platform-mockup.jpg',
      '/images/hero-corporate-engineering.jpg',
      '/images/service_image_3.webp',
      '/images/svss/proc-dev.webp',
      '/images/svss/proc-testing.webp',
      '/images/about_image_5.webp',
    ],
    solutionImages: [
      '/images/industries/logistics.jpg',
      '/images/svss/app-finance.webp',
      '/images/industries/ondemand.jpg',
      '/images/industries/health.jpg',
      '/images/hero-corporate-engineering.jpg',
      '/images/industries/ecommerce.jpg',
    ],
    solutionColors: ['#2563eb', '#0a85b1', '#0d9488', '#0284c7', '#7c3aed', '#d97706'],
    hotspotHeadingPrimary: 'Inside Our',
    hotspotHeadingAccent: 'Enterprise Systems Blueprint',
    hotspotSubtitle:
      'Tap any architectural checkpoint to inspect how our distributed services eliminate bottlenecks at scale.',
    hotspots: [
      {
        id: 0,
        title: 'API Gateway & Zero-Trust Auth',
        desc: 'Sub-20ms gateway validates JWT/SAML tokens, enforces tenant isolation, and throttles bursts before hitting compute.',
        left: '14%',
        top: '27%',
      },
      {
        id: 1,
        title: 'Decoupled Microservices Pods',
        desc: 'Independent Go and TypeScript containers scale horizontally on demand with strict domain boundaries.',
        left: '15%',
        top: '52%',
      },
      {
        id: 2,
        title: 'ACID Relational Storage & Redis',
        desc: 'Indexed PostgreSQL primaries with read replicas and Redis write-through cache sustain sub-40ms p95 queries.',
        left: '73%',
        top: '40%',
      },
      {
        id: 3,
        title: '99.99% Health & Prometheus SLA',
        desc: 'Continuous telemetry alerts on p99 latency spikes, queue lag, or memory pressure with auto-failover.',
        left: '7%',
        top: '71%',
      },
      {
        id: 4,
        title: 'Immutable Audit & Event Streams',
        desc: 'Kafka/BullMQ asynchronous queues persist every state mutation with cryptographic timestamps.',
        left: '79%',
        top: '14%',
      },
    ],
    processImages: [
      '/images/svss/proc-planning.webp',
      '/images/svss/proc-design.webp',
      '/images/svss/proc-dev.webp',
      '/images/svss/proc-testing.webp',
      '/images/svss/proc-launch.webp',
    ],
    whyChoosePrimary: 'Why Enterprises Trust',
    whyChooseAccent: 'Our Custom Systems',
  },

  'it-consulting': {
    slug: 'it-consulting',
    heroKickerTag: 'Architecture Audits · Cloud FinOps · DevSecOps · Fractional CTO · M&A DD',
    heroTitlePrimary: 'Audit & IT',
    heroTitleAccent: 'Consulting Services',
    spotlightImage: '/images/about_image_5.webp',
    whyChooseImage: '/images/about_image_5.webp',
    platformCodes: [
      `# Automated Static Quality & Tech-Debt Scan
$ tech22-audit scan ./repo --strict
✓ Cyclic dependencies: 0 detected
✓ Unindexed SQL joins: 3 flagged -> patched
✓ Critical CVEs: 0 remaining
✓ Bundle bloat reduction: -54%`,
      `# AWS / GCP Cloud FinOps Right-Sizing
resource "aws_rds_cluster" "core" {
  instance_class        = "db.r6g.large" # Down from 4xlarge (-41% spend)
  allocated_storage_iops = "gp3-auto"
  idle_nat_gateways     = 0
}`,
      `// Fractional CTO Sprint Velocity RFC
export const Q1EngineeringCharter = {
  prTurnaroundTarget: "< 4 hours",
  automatedTestGate: "85% branch coverage",
  deploymentFrequency: "Daily trunk-based CD",
  roadmapHorizon: "12-Month Milestone Gates"
};`,
      `# Build vs. Buy Evaluation Matrix
Scorecard = {
  "Total Cost (3-Yr TCO)": "Custom wins by 38%",
  "Vendor Lock-In Risk":   "Zero (Open-Source Stack)",
  "IP Valuation Boost":    "+100% Ownable Assets"
}`,
      `# CI/CD DevSecOps Hardening Pipeline
- uses: aquasecurity/trivy-action@v1
  with: { severity: "CRITICAL,HIGH", exit-code: "1" }
- uses: gitleaks/gitleaks-action@v2
- run: npm run audit:owasp-headers`,
      `# M&A Technical Due Diligence Summary
{
  ipClearance: "Clean — 0 GPL/copyleft conflicts",
  busFactor:   "Low — full RFCs & Terraform IaC",
  scaleHeadroom: "Ready to 10x current DAU"
}`,
    ],
    capabilityImages: [
      '/images/ai-cloud-automation.jpg',
      '/images/hero-corporate-engineering.jpg',
      '/images/about_image_5.webp',
      '/images/enterprise-platform-mockup.jpg',
      '/images/about_image_6.webp',
      '/images/svss/proc-testing.webp',
      '/images/service_image_4.webp',
      '/images/svss/proc-launch.webp',
    ],
    solutionImages: [
      '/images/ai-cloud-automation.jpg',
      '/images/svss/app-finance.webp',
      '/images/about_image_6.webp',
      '/images/hero-corporate-engineering.jpg',
      '/images/enterprise-platform-mockup.jpg',
      '/images/about_image_5.webp',
    ],
    solutionColors: ['#0284c7', '#059669', '#d97706', '#0a85b1', '#7c3aed', '#2563eb'],
    hotspotHeadingPrimary: 'What Our 14-Day',
    hotspotHeadingAccent: 'Audit Uncovers',
    hotspotSubtitle:
      'Tap any diagnostic point to inspect how we eliminate wasted cloud spend, hidden debt, and security gaps.',
    hotspots: [
      {
        id: 0,
        title: 'Executive Roadmap & Clarity',
        desc: 'Plain-English engineering RFCs translating technical bottlenecks directly into revenue impact and timelines.',
        left: '15%',
        top: '27%',
      },
      {
        id: 1,
        title: 'Codebase & Query Profiling',
        desc: 'Pinpointing N+1 SQL bottlenecks, tight coupling, and untyped fragile modules slowing down your sprints.',
        left: '16%',
        top: '51%',
      },
      {
        id: 2,
        title: 'Cloud FinOps Spend Audit',
        desc: 'Identifying orphaned snapshots, oversized RDS nodes, and unreserved compute to cut monthly cloud bills up to 45%.',
        left: '73%',
        top: '40%',
      },
      {
        id: 3,
        title: '98/100 Security & Compliance',
        desc: 'Auditing secrets exposure, OWASP headers, SOC2 readiness, and third-party dependency CVEs.',
        left: '7%',
        top: '72%',
      },
      {
        id: 4,
        title: 'IP & Open-Source License Scan',
        desc: 'Verifying clean provenance and zero copyleft license liabilities for boardroom peace of mind and M&A.',
        left: '79%',
        top: '15%',
      },
    ],
    processImages: [
      '/images/svss/proc-planning.webp',
      '/images/service_image_2.webp',
      '/images/hero-corporate-engineering.jpg',
      '/images/svss/proc-launch.webp',
    ],
    whyChoosePrimary: 'Why Founders & Boards',
    whyChooseAccent: 'Rely on Our Advisory',
  },

  web3: {
    slug: 'web3',
    heroKickerTag: 'Solidity · Foundry Fuzzing · ERC-4337 · Subgraphs · 24/7 RPC Ops',
    heroTitlePrimary: 'Web3.0 Engineering',
    heroTitleAccent: '& Maintenance',
    spotlightImage: '/images/case_image_4.webp',
    whyChooseImage: '/images/services/web3-3d-visual.jpg',
    platformCodes: [
      `// SPDX-License-Identifier: MIT
contract SettlementVault is ReentrancyGuard, AccessControl {
    using SafeERC20 for IERC20;
    function releaseEscrow(bytes32 dealId) external nonReentrant onlyRole(ARBITER) {
        emit EscrowSettled(dealId, block.timestamp);
    }
}`,
      `// ERC-4337 Gasless UserOp Paymaster
const userOp = await smartAccount.buildUserOp({
  target: vaultAddress,
  data: encodeFunctionData({ abi, functionName: "claimYield" }),
  paymasterAndData: tech22Paymaster.sponsorGas()
});`,
      `# Prometheus Web3 RPC Failover Check
- job_name: evm_rpc_nodes
  metrics_path: /metrics
  alert_threshold_p99_ms: 85
  auto_failover: ["arbitrum-primary", "base-backup"]`,
      `// Verifiable IPFS + Arweave Content Pinning
const pinResult = await ipfsCluster.add(encryptedManifest, {
  pinOn: ["eu-west", "ap-south"],
  sha256Verify: true,
  arweaveBackup: true
});`,
      `// Time-Locked Safe Multi-Sig Governance
const proposal = await safeSdk.createTransaction({
  safeTransactionData: [{ to: treasury, value: "0", data: calldata }],
  options: { requiredConfirmations: 3, timelockHours: 48 }
});`,
      `# The Graph Subgraph Event Indexing
type Settlement @entity(immutable: true) {
  id: Bytes!
  txHash: Bytes!
  amountWei: BigInt!
  blockTimestamp: BigInt!
}`,
    ],
    capabilityImages: [
      '/images/case_image_4.webp',
      '/images/svss/proc-testing.webp',
      '/images/ai-cloud-automation.jpg',
      '/images/enterprise-platform-mockup.jpg',
      '/images/hero-corporate-engineering.jpg',
      '/images/svss/proc-dev.webp',
      '/images/about_image_5.webp',
      '/images/svss/proc-launch.webp',
    ],
    solutionImages: [
      '/images/svss/app-finance.webp',
      '/images/industries/logistics.jpg',
      '/images/hero-corporate-engineering.jpg',
      '/images/enterprise-platform-mockup.jpg',
      '/images/industries/ecommerce.jpg',
      '/images/industries/social-network.jpg',
    ],
    solutionColors: ['#0a85b1', '#7c3aed', '#0d9488', '#2563eb', '#d97706', '#059669'],
    hotspotHeadingPrimary: 'Inside a',
    hotspotHeadingAccent: 'Hardened Web3 Protocol',
    hotspotSubtitle:
      'Tap each security layer to see how we eliminate reentrancy vectors, optimize gas, and sustain 99.98% RPC uptime.',
    hotspots: [
      {
        id: 0,
        title: 'Account Abstraction (ERC-4337)',
        desc: 'Onboarding non-crypto users via social logins, biometric passkeys, and sponsored gasless transactions.',
        left: '15%',
        top: '27%',
      },
      {
        id: 1,
        title: 'Foundry Fuzz-Verified Contracts',
        desc: '100k+ invariant property runs mathematically prove safety against flash-loan and overflow attacks.',
        left: '15%',
        top: '51%',
      },
      {
        id: 2,
        title: 'Multi-Chain RPC Mesh & Subgraphs',
        desc: 'Geo-distributed RPC routing and The Graph indexers deliver sub-100ms dApp query speeds.',
        left: '73%',
        top: '40%',
      },
      {
        id: 3,
        title: 'Zero-Exploit Security Score',
        desc: 'Reentrancy guards, checks-effects-interactions, and Slither CI gates verified before mainnet push.',
        left: '7%',
        top: '71%',
      },
      {
        id: 4,
        title: 'Safe Multi-Sig Treasury Control',
        desc: '100% decentralized admin ownership transferred directly to your hardware-backed multi-sig treasury.',
        left: '79%',
        top: '14%',
      },
    ],
    processImages: [
      '/images/svss/proc-planning.webp',
      '/images/svss/proc-dev.webp',
      '/images/case_image_4.webp',
      '/images/svss/proc-testing.webp',
      '/images/svss/proc-launch.webp',
    ],
    whyChoosePrimary: 'Why Protocols Choose',
    whyChooseAccent: 'Tech22Blocks Web3',
  },
};
