import React from 'react';

/**
 * Exact visual icon mappings for every technology label in `serviceDetails.ts`
 * so the Technology Standards section renders crisp colored brand logos identically
 * to the Website Development page.
 */
export const TECH_SKILL_LOGO: Record<string, string> = {
  // UI/UX Design
  'Figma Enterprise': '/images/tech-logos/figma.svg',
  'Figma Tokens & Variables': '/images/tech-logos/tokens.svg',
  'Auto-Layout 5': '/images/tech-logos/autolayout.svg',
  'Component Variants': '/images/tech-logos/components.svg',
  'Figma Smart Animate': '/images/tech-logos/figma.svg',
  ProtoPie: '/images/tech-logos/protopie.svg',
  Principle: '/images/tech-logos/principle.svg',
  'Interactive Component States': '/images/tech-logos/components.svg',
  'Maze User Testing': '/images/tech-logos/maze.svg',
  'Hotjar Heatmaps': '/images/tech-logos/hotjar.svg',
  'Loom Walkthroughs': '/images/tech-logos/loom.svg',
  'Miro Journey Mapping': '/images/tech-logos/miro.svg',
  'Tokens Studio (JSON)': '/images/tech-logos/tokens.svg',
  'Tailwind CSS Configs': '/images/tech-logos/tailwindcss.svg',
  'Storybook Specs': '/images/tech-logos/storybook.svg',
  'Zeplin / Zeroheight': '/images/tech-logos/zeplin.svg',

  // Custom Software
  'Go (Golang)': '/images/tech-logos/go.svg',
  'Node.js / TypeScript': '/images/tech-logos/nodedotjs.svg',
  Python: '/images/tech-logos/python.svg',
  Rust: '/images/tech-logos/rust.svg',
  PostgreSQL: '/images/tech-logos/postgresql.svg',
  Redis: '/images/tech-logos/redis.svg',
  TimescaleDB: '/images/tech-logos/timescale.svg',
  MongoDB: '/images/tech-logos/mongodb.svg',
  'AWS S3': '/images/tech-logos/awss3.svg',
  RabbitMQ: '/images/tech-logos/rabbitmq.svg',
  'Apache Kafka': '/images/tech-logos/apachekafka.svg',
  'BullMQ (Redis)': '/images/tech-logos/bullmq.svg',
  'AWS SQS / SNS': '/images/tech-logos/awssqs.svg',
  'Amazon Web Services (AWS)': '/images/svss/web/tech/cloud-aws.png',
  'Google Cloud Platform (GCP)': '/images/tech-logos/googlecloud.svg',
  Docker: '/images/tech-logos/docker.svg',
  Kubernetes: '/images/tech-logos/kubernetes.svg',
  'HashiCorp Vault': '/images/tech-logos/vault.svg',
  'OAuth 2.0 / OIDC': '/images/tech-logos/oauth.svg',
  'SAML 2.0': '/images/tech-logos/saml.svg',
  'Argon2 / JWT': '/images/tech-logos/jwt.svg',
  Prometheus: '/images/tech-logos/prometheus.svg',
  Grafana: '/images/tech-logos/grafana.svg',
  Datadog: '/images/tech-logos/datadog.svg',
  'Sentry Telemetry': '/images/tech-logos/sentry.svg',

  // IT Consulting
  SonarQube: '/images/tech-logos/sonarqube.svg',
  'ESLint / TypeScript Compiler': '/images/tech-logos/eslint.svg',
  'GolangCI-Lint': '/images/tech-logos/golangcilint.svg',
  CodeQL: '/images/tech-logos/codeql.svg',
  'AWS Cost Explorer': '/images/svss/web/tech/cloud-aws.png',
  'GCP Cloud Billing': '/images/tech-logos/googlecloud.svg',
  Infracost: '/images/tech-logos/infracost.svg',
  'Terraform Cloud': '/images/tech-logos/terraform.svg',
  'Snyk Security': '/images/tech-logos/snyk.svg',
  'OWASP ZAP': '/images/tech-logos/owasp.svg',
  'Trivy Container Scanner': '/images/tech-logos/trivy.svg',
  GitGuardian: '/images/tech-logos/gitguardian.svg',
  'Datadog APM': '/images/tech-logos/datadog.svg',
  'New Relic': '/images/tech-logos/newrelic.svg',
  'Grafana / Prometheus': '/images/tech-logos/grafana.svg',
  'AWS CloudWatch': '/images/svss/web/tech/cloud-aws.png',

  // Web3
  'Solidity (0.8.x+)': '/images/tech-logos/solidity.svg',
  'Yul / Inline Assembly': '/images/tech-logos/ethereum.svg',
  Vyper: '/images/tech-logos/vyper.svg',
  'Foundry (Forge, Cast, Anvil)': '/images/tech-logos/foundry.svg',
  Hardhat: '/images/tech-logos/hardhat.svg',
  'Slither Static Analyzer': '/images/tech-logos/slither.svg',
  'Wagmi / Viem': '/images/tech-logos/wagmi.svg',
  'Ethers.js': '/images/tech-logos/ethereum.svg',
  RainbowKit: '/images/tech-logos/rainbowkit.svg',
  'Next.js 14 App Router': '/images/tech-logos/nextdotjs.svg',
  'The Graph (Subgraphs)': '/images/tech-logos/thegraph.svg',
  'IPFS / Filecoin': '/images/tech-logos/ipfs.svg',
  Arweave: '/images/tech-logos/arweave.svg',
  'Alchemy / Infura RPC': '/images/tech-logos/alchemy.svg',
  'Chainlink Data Feeds': '/images/tech-logos/chainlink.svg',
  'Chainlink VRF': '/images/tech-logos/chainlink.svg',
  'Chainlink Automation': '/images/tech-logos/chainlink.svg',
  'Gelato Network': '/images/tech-logos/gelato.svg',
  'Safe (Gnosis)': '/images/tech-logos/safe.svg',
  'OpenZeppelin Contracts': '/images/tech-logos/openzeppelin.svg',
  'ERC-4337 Bundlers': '/images/tech-logos/erc4337.svg',
  'Ledger / Trezor HSM': '/images/tech-logos/ledger.svg',
};

/**
 * Unique multi-color 64x64 emblem for EACH tab inside the Architectural Breadth
 * section (6 tabs × 4 services = 24 unique colored symbols).
 */
export function DisciplineCoinEmblem({
  slug,
  tabIndex,
}: {
  slug: 'uiux-design' | 'custom-software' | 'it-consulting' | 'web3';
  tabIndex: number;
}) {
  if (slug === 'uiux-design') {
    const emblems = [
      // 0: Enterprise Design Systems (Token Squares)
      <svg key="u0" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <rect x="10" y="10" width="20" height="20" rx="6" fill="#38BDF8" stroke="#0F172A" strokeWidth="2.5" />
        <rect x="34" y="10" width="20" height="20" rx="10" fill="#FDE68A" stroke="#0F172A" strokeWidth="2.5" />
        <rect x="10" y="34" width="20" height="20" rx="10" fill="#34D399" stroke="#0F172A" strokeWidth="2.5" />
        <rect x="34" y="34" width="20" height="20" rx="6" fill="#A78BFA" stroke="#0F172A" strokeWidth="2.5" />
      </svg>,
      // 1: Mobile App UX/UI (Touch Smartphone)
      <svg key="u1" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <rect x="18" y="8" width="28" height="48" rx="6" fill="#E0F2FE" stroke="#0F172A" strokeWidth="2.5" />
        <rect x="23" y="16" width="18" height="14" rx="3" fill="#38BDF8" stroke="#0F172A" strokeWidth="2" />
        <circle cx="32" cy="41" r="6" fill="#FDE68A" stroke="#0F172A" strokeWidth="2" />
      </svg>,
      // 2: SaaS Dashboards (Chart & Cards)
      <svg key="u2" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <rect x="10" y="12" width="44" height="40" rx="6" fill="#EEF2FF" stroke="#0F172A" strokeWidth="2.5" />
        <rect x="16" y="34" width="8" height="12" rx="2" fill="#38BDF8" stroke="#0F172A" strokeWidth="2" />
        <rect x="28" y="26" width="8" height="20" rx="2" fill="#818CF8" stroke="#0F172A" strokeWidth="2" />
        <rect x="40" y="20" width="8" height="26" rx="2" fill="#34D399" stroke="#0F172A" strokeWidth="2" />
      </svg>,
      // 3: User Journey & Empathy (Search Lens + Route)
      <svg key="u3" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <circle cx="28" cy="28" r="15" fill="#FEF3C7" stroke="#0F172A" strokeWidth="2.5" />
        <path d="M39 39l13 13" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
        <circle cx="28" cy="25" r="4" fill="#38BDF8" stroke="#0F172A" strokeWidth="2" />
        <path d="M21 35c2-3 12-3 14 0" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
      </svg>,
      // 4: Clickable Interactive Prototypes (Bezier + Cursor)
      <svg key="u4" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <path d="M12 44C12 22 52 22 52 44" stroke="#0A85B1" strokeWidth="3.5" strokeLinecap="round" />
        <rect x="8" y="40" width="8" height="8" rx="2" fill="#38BDF8" stroke="#0F172A" strokeWidth="2" />
        <rect x="48" y="40" width="8" height="8" rx="2" fill="#38BDF8" stroke="#0F172A" strokeWidth="2" />
        <circle cx="32" cy="22" r="6" fill="#FDE68A" stroke="#0F172A" strokeWidth="2.2" />
      </svg>,
      // 5: Conversion Rate Optimization (Funnel + Check)
      <svg key="u5" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <path d="M12 16h40l-14 18v16l-12-6V34L12 16z" fill="#34D399" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="48" cy="48" r="8" fill="#FDE68A" stroke="#0F172A" strokeWidth="2.2" />
      </svg>,
    ];
    return emblems[tabIndex % emblems.length];
  }

  if (slug === 'custom-software') {
    const emblems = [
      // 0: Microservices (Cubic Mesh)
      <svg key="c0" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <rect x="10" y="10" width="18" height="18" rx="4" fill="#38BDF8" stroke="#0F172A" strokeWidth="2.4" />
        <rect x="36" y="10" width="18" height="18" rx="4" fill="#A78BFA" stroke="#0F172A" strokeWidth="2.4" />
        <rect x="23" y="36" width="18" height="18" rx="4" fill="#34D399" stroke="#0F172A" strokeWidth="2.4" />
        <path d="M28 19h8M19 28l8 8M45 28l-8 8" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" />
      </svg>,
      // 1: Enterprise ERP (Layers Stack)
      <svg key="c1" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <path d="M32 10L54 20L32 30L10 20L32 10Z" fill="#38BDF8" stroke="#0F172A" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M10 32L32 42L54 32" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 44L32 54L54 44" stroke="#34D399" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>,
      // 2: High-Throughput API Gateways (Lightning Router)
      <svg key="c2" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="21" fill="#E0F2FE" stroke="#0F172A" strokeWidth="2.5" />
        <path d="M35 16L22 34h10l-3 14 13-18H32l3-14z" fill="#FDE68A" stroke="#0F172A" strokeWidth="2.3" strokeLinejoin="round" />
      </svg>,
      // 3: Database Design (Database Cylinder)
      <svg key="c3" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="18" rx="18" ry="7" fill="#38BDF8" stroke="#0F172A" strokeWidth="2.4" />
        <path d="M14 18v28c0 3.9 8.1 7 18 7s18-3.1 18-7V18" fill="#BAE6FD" stroke="#0F172A" strokeWidth="2.4" />
        <path d="M14 32c0 3.9 8.1 7 18 7s18-3.1 18-7" stroke="#0F172A" strokeWidth="2.2" />
      </svg>,
      // 4: Legacy Modernization (Switch & Sync)
      <svg key="c4" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <rect x="10" y="14" width="20" height="36" rx="4" fill="#FDE68A" stroke="#0F172A" strokeWidth="2.4" />
        <rect x="34" y="14" width="20" height="36" rx="4" fill="#34D399" stroke="#0F172A" strokeWidth="2.4" />
        <path d="M24 32h16m-5-5l5 5-5 5" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>,
      // 5: Workflow Automation (Gear & Flow)
      <svg key="c5" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="18" fill="#A78BFA" stroke="#0F172A" strokeWidth="2.5" />
        <circle cx="32" cy="32" r="8" fill="#FDE68A" stroke="#0F172A" strokeWidth="2.3" />
      </svg>,
    ];
    return emblems[tabIndex % emblems.length];
  }

  if (slug === 'it-consulting') {
    const emblems = [
      // 0: Codebase Quality & Debt Audits
      <svg key="i0" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <rect x="10" y="12" width="34" height="40" rx="5" fill="#E0F2FE" stroke="#0F172A" strokeWidth="2.5" />
        <path d="M18 24h16M18 32h10" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="44" cy="40" r="11" fill="#FDE68A" stroke="#0F172A" strokeWidth="2.4" />
        <path d="M39 40l3.5 3.5L49 37" stroke="#059669" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>,
      // 1: Cloud FinOps (Cloud + Down Cost Trend)
      <svg key="i1" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <path d="M20 42h26a9 9 0 0 0 1-17.9A13 13 0 0 0 22 20a10 10 0 0 0-2 22z" fill="#38BDF8" stroke="#0F172A" strokeWidth="2.5" />
        <circle cx="33" cy="33" r="7" fill="#34D399" stroke="#0F172A" strokeWidth="2" />
      </svg>,
      // 2: Fractional CTO (Compass / Leadership Star)
      <svg key="i2" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="21" fill="#FEF3C7" stroke="#0F172A" strokeWidth="2.5" />
        <path d="M39 25l-4 11-11 4 4-11 11-4z" fill="#0A85B1" stroke="#0F172A" strokeWidth="2.2" strokeLinejoin="round" />
      </svg>,
      // 3: Vendor Due Diligence (Balance Scale / Scorecard)
      <svg key="i3" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <rect x="12" y="14" width="40" height="36" rx="6" fill="#EDE9FE" stroke="#0F172A" strokeWidth="2.5" />
        <path d="M21 26l4 4 8-8M21 39h22" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>,
      // 4: Security Governance (Shield Lock)
      <svg key="i4" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <path d="M32 10l18 7v14c0 11-8 19-18 23-10-4-18-12-18-23V17l18-7z" fill="#34D399" stroke="#0F172A" strokeWidth="2.5" />
        <circle cx="32" cy="31" r="6" fill="#FDE68A" stroke="#0F172A" strokeWidth="2.2" />
      </svg>,
      // 5: M&A Technical DD (Document Magnifier)
      <svg key="i5" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <rect x="14" y="10" width="28" height="38" rx="4" fill="#FDE68A" stroke="#0F172A" strokeWidth="2.5" />
        <circle cx="43" cy="43" r="10" fill="#38BDF8" stroke="#0F172A" strokeWidth="2.4" />
        <path d="M50 50l6 6" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" />
      </svg>,
    ];
    return emblems[tabIndex % emblems.length];
  }

  // Web3 (slug === 'web3')
  const emblems = [
    // 0: EVM Smart Contracts (Hex Document)
    <svg key="w0" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
      <path d="M32 10l18 10v24L32 54 14 44V20L32 10z" fill="#38BDF8" stroke="#0F172A" strokeWidth="2.5" />
      <path d="M25 27l-5 5 5 5M39 27l5 5-5 5M34 25l-4 14" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // 1: Web3 Wallets & ERC-4337 (Key + Card)
    <svg key="w1" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
      <rect x="10" y="18" width="44" height="28" rx="6" fill="#A78BFA" stroke="#0F172A" strokeWidth="2.5" />
      <circle cx="42" cy="32" r="5" fill="#FDE68A" stroke="#0F172A" strokeWidth="2.2" />
      <path d="M18 28h12" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" />
    </svg>,
    // 2: RPC Node Telemetry (Signal Globe)
    <svg key="w2" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="19" fill="#34D399" stroke="#0F172A" strokeWidth="2.5" />
      <path d="M14 32h36M32 13c5 6 5 32 0 38M32 13c-5 6-5 32 0 38" stroke="#0F172A" strokeWidth="2.2" />
    </svg>,
    // 3: Decentralized Storage / IPFS (Cube Vault)
    <svg key="w3" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
      <path d="M32 12L50 22v20L32 52 14 42V22l18-10z" fill="#FDE68A" stroke="#0F172A" strokeWidth="2.5" />
      <path d="M14 22l18 10 18-10M32 32v20" stroke="#0F172A" strokeWidth="2.3" />
    </svg>,
    // 4: DeFi Protocols (Safe Liquidity Ring)
    <svg key="w4" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
      <circle cx="25" cy="32" r="13" fill="#38BDF8" stroke="#0F172A" strokeWidth="2.5" />
      <circle cx="39" cy="32" r="13" fill="#F59E0B" fillOpacity="0.85" stroke="#0F172A" strokeWidth="2.5" />
    </svg>,
    // 5: Web2-to-Web3 Hybrid Bridges (Dual Node Arch)
    <svg key="w5" className="w-16 h-16" viewBox="0 0 64 64" fill="none">
      <circle cx="16" cy="40" r="8" fill="#38BDF8" stroke="#0F172A" strokeWidth="2.4" />
      <circle cx="48" cy="40" r="8" fill="#34D399" stroke="#0F172A" strokeWidth="2.4" />
      <path d="M16 32c0-12 32-12 32 0" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
    </svg>,
  ];
  return emblems[tabIndex % emblems.length];
}
