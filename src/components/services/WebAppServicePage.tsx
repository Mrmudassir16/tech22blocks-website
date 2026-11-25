'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  CheckCircle2,
  Monitor,
  Tablet,
  Smartphone,
  Globe,
} from 'lucide-react';
import { DETAILED_SERVICES } from '@/data/serviceDetails';
import { getAssetUrl } from '@/utils/assets';
import { StarWatermark } from '@/components/StarEmblem';
import { StaggeredText } from '@/components/design-system/KineticTypography';
import FinalCTA from '@/components/FinalCTA';

interface StackIndustryItem {
  id: string;
  num: string;
  ac: string;
  title: string;
  image: string;
  desc: string;
  points: string[];
  deviceTitle: string;
  tiles: string[];
}

export default function WebAppServicePage() {
  const data = DETAILED_SERVICES['website-development'];

  // 1. Hero Interactive Browser State (Desktop/Tablet/Phone + Wireframe Wipe)
  const [browserSize, setBrowserSize] = useState<'desktop' | 'tablet' | 'phone'>('desktop');
  const [wipeCut, setWipeCut] = useState<number>(50);
  const wipeTouchedRef = useRef<boolean>(false);
  const heroFrameRef = useRef<HTMLDivElement>(null);

  // 2. Web Application Development Services 3D Cover Flow State
  const [activeServiceFlow, setActiveServiceFlow] = useState<number>(2);
  const serviceFlowRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const dragMoved = useRef<boolean>(false);

  // 3. Explore a Website We Design (Hotspots + Tilt)
  const [activeHotspot, setActiveHotspot] = useState<number>(0);
  const hotspotSvgRef = useRef<SVGSVGElement>(null);
  const hotspotStageRef = useRef<HTMLDivElement>(null);

  // 4. Web Apps Built for Your Industry (Sticky Left Nav + Stacking Cards)
  const [activeIndustryCard, setActiveIndustryCard] = useState<number>(0);
  const industryCardRefs = useRef<(HTMLLIElement | null)[]>([]);

  // 5. Technology Stack Tabs
  const [activeTechTab, setActiveTechTab] = useState<number>(0);

  // 6. Our Web App Development Process (Scroll-driven Line Progress)
  const processContainerRef = useRef<HTMLDivElement>(null);
  const processLineRef = useRef<HTMLSpanElement>(null);
  const processStepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [processFillPct, setProcessFillPct] = useState<number>(0);
  const [activeProcessSteps, setActiveProcessSteps] = useState<boolean[]>(
    () => new Array(7).fill(false)
  );

  // 7. FAQs
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // ---------------------------------------------------------------------------
  // Hero Auto-Sweep Demo for Wireframe <-> Live Site Wipe
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const el = heroFrameRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId = 0;
    let timeoutId = 0;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.disconnect();
          let t0: number | null = null;
          const step = (t: number) => {
            if (wipeTouchedRef.current) return;
            t0 = t0 ?? t;
            const p = Math.min(1, (t - t0) / 2200);
            setWipeCut(Math.round(50 + Math.sin(p * Math.PI * 2) * 30));
            if (p < 1) {
              rafId = requestAnimationFrame(step);
            }
          };
          timeoutId = window.setTimeout(() => {
            rafId = requestAnimationFrame(step);
          }, 500);
        });
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // ---------------------------------------------------------------------------
  // Data: Web Application Development Services We Offer (8 Reference Services)
  // ---------------------------------------------------------------------------
  const webServices = [
    {
      title: 'Custom Web Development',
      image: '/images/svss/web/svc-custom-web.webp',
      desc: 'Our custom web application development services utilize agile methodology to transform concepts into fully tailored web solutions that boost user engagement.',
      cta: 'Build a Custom Web App',
    },
    {
      title: 'E-Commerce Development',
      image: '/images/svss/web/svc-ecommerce.webp',
      desc: 'Enhance your online business with our expertise in e-commerce web application development. We create robust sales platforms and optimize user experiences to drive your revenue growth.',
      cta: 'Launch an E-Commerce Store',
    },
    {
      title: 'SaaS Web App Development',
      image: '/images/svss/web/svc-saas.webp',
      desc: 'Unlock the benefits of Software as a Service (SaaS) with our expert web app development company, providing long-term scalability and accessibility.',
      cta: 'Architect Your SaaS Platform',
    },
    {
      title: 'Web Portal Development',
      image: '/images/svss/web/svc-portal.webp',
      desc: 'Elevate your business with our feature-packed web portals, expertly crafted by our web application developers to ensure smooth interactions and enhance engagement with your target audience.',
      cta: 'Build an Enterprise Portal',
    },
    {
      title: 'Progressive Web App Development',
      image: '/images/svss/web/svc-pwa.webp',
      desc: 'Stay ahead of the curve by teaming up with our cutting-edge web app development company. We deliver web apps that offer outstanding user experiences and seamless cross-platform compatibility.',
      cta: 'Ship a Fast PWA',
    },
    {
      title: 'Custom CMS Development',
      image: '/images/svss/web/svc-cms.webp',
      desc: 'Gain complete control over your content with our custom CMS development services. We provide flexibility and user-friendly solutions tailored to meet your specific needs.',
      cta: 'Explore Headless CMS',
    },
    {
      title: 'Enterprise Web Development',
      image: '/images/svss/web/svc-enterprise.webp',
      desc: 'Enhance your business with cutting-edge web app solutions from our enterprise engineering team, designed to help your organization excel in the digital era.',
      cta: 'Scale Enterprise Web',
    },
    {
      title: 'Web App Support and Maintenance',
      image: '/images/svss/web/svc-maintenance.webp',
      desc: 'Ensure your web applications run smoothly with our dedicated support and maintenance services. We provide proactive monitoring and regular updates to keep everything at peak performance, giving you peace of mind.',
      cta: 'Secure Ongoing Support',
    },
  ];

  // Cover Flow Navigation Handlers
  const goServiceFlow = useCallback(
    (idx: number) => {
      setActiveServiceFlow(Math.max(0, Math.min(webServices.length - 1, idx)));
    },
    [webServices.length]
  );

  const handleFlowPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    dragMoved.current = false;
  };

  const handleFlowPointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const dx = e.clientX - dragStartX.current;
    if (Math.abs(dx) > 55) {
      dragMoved.current = true;
      goServiceFlow(activeServiceFlow + (dx < 0 ? 1 : -1));
      dragStartX.current = e.clientX;
    }
  };

  const handleFlowPointerUp = () => {
    dragStartX.current = null;
  };

  const handleFlowKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goServiceFlow(activeServiceFlow + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goServiceFlow(activeServiceFlow - 1);
    }
  };

  // ---------------------------------------------------------------------------
  // Data: Explore a Website We Design (5 Hotspots)
  // ---------------------------------------------------------------------------
  const hotspots = [
    {
      id: 0,
      title: 'Hero that converts',
      desc: 'A headline, offer and button that explain what you do in five seconds and lead visitors to act.',
      left: '14%',
      top: '27%',
    },
    {
      id: 1,
      title: 'Service sections',
      desc: 'Clear cards for each product or service, written and laid out for both visitors and Google.',
      left: '14%',
      top: '50%',
    },
    {
      id: 2,
      title: 'Mobile-first layout',
      desc: 'Every page adapts to phones, where most of your visitors arrive.',
      left: '73%',
      top: '40%',
    },
    {
      id: 3,
      title: 'Speed score 90+',
      desc: 'Optimised images, caching and clean code for Core Web Vitals and better rankings.',
      left: '6%',
      top: '71%',
    },
    {
      id: 4,
      title: 'Your brand colours',
      desc: 'Typography and colours follow your brand, managed from an easy CMS.',
      left: '79%',
      top: '14%',
    },
  ];

  const handleHotspotMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!hotspotStageRef.current || !hotspotSvgRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = hotspotStageRef.current.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width - 0.5;
    const dy = (e.clientY - r.top) / r.height - 0.5;
    hotspotSvgRef.current.style.transform = `rotateY(${dx * 10}deg) rotateX(${-dy * 10}deg)`;
    hotspotSvgRef.current.querySelectorAll<SVGGElement>('.art-layer').forEach((layer) => {
      const depth = Number(layer.dataset.depth) || 0;
      layer.style.transform = `translate(${dx * depth * 520}px, ${dy * depth * 520}px)`;
    });
  };

  const handleHotspotLeave = () => {
    if (!hotspotSvgRef.current) return;
    hotspotSvgRef.current.style.transform = '';
    hotspotSvgRef.current.querySelectorAll<SVGGElement>('.art-layer').forEach((layer) => {
      layer.style.transform = '';
    });
  };

  // ---------------------------------------------------------------------------
  // Data: Web Apps Built for Your Industry (9 Reference Industries -> Stacking)
  // ---------------------------------------------------------------------------
  const industryStackCards: StackIndustryItem[] = [
    {
      id: 'ind-0',
      num: '01',
      ac: '#0284c7',
      title: 'Health Care',
      image: '/images/svss/web/ind-healthcare.webp',
      desc: 'As a technology partner specializing in healthcare app development, we use our expertise to create solutions that simplify administrative tasks and enhance healthcare management systems.',
      points: [
        'Patient portals & teleconsultation workflows',
        'Electronic record access & lab report delivery',
        'HIPAA-aligned role permissions & audit logs',
      ],
      deviceTitle: 'HealthCare Portal UI',
      tiles: ['Patient Intake Hub', 'Doctor Scheduling', 'Lab Report Vault', 'Billing & Claims'],
    },
    {
      id: 'ind-1',
      num: '02',
      ac: '#0d9488',
      title: 'Retail',
      image: '/images/svss/web/ind-retail.webp',
      desc: 'We offer web app development services designed to enhance online shopping experiences, ensure secure payment processing, and manage inventory efficiently, all aimed at increasing sales.',
      points: [
        'Unified multi-store catalog & live stock sync',
        'High-conversion checkout & coupon engines',
        'Customer loyalty accounts & order history',
      ],
      deviceTitle: 'Retail Commerce Engine',
      tiles: ['Omnichannel Catalog', 'POS Inventory Sync', 'PCI-Ready Checkout', 'Loyalty Analytics'],
    },
    {
      id: 'ind-2',
      num: '03',
      ac: '#7c3aed',
      title: 'e-Commerce',
      image: '/images/svss/web/ind-ecommerce.webp',
      desc: 'As a web application development company, we specialize in customizing online store solutions to meet your unique needs, enhancing revenue through secure and efficient platforms.',
      points: [
        'Sub-second SSR storefronts & instant filtering',
        'Automated GST invoicing & shipping webhooks',
        'Multi-currency carts & abandoned cart recovery',
      ],
      deviceTitle: 'e-Commerce Storefront',
      tiles: ['SSR Product Grid', 'Razorpay & Stripe', 'Shipment Webhooks', 'Admin Merchandising'],
    },
    {
      id: 'ind-3',
      num: '04',
      ac: '#d97706',
      title: 'Real Estate',
      image: '/images/svss/web/ind-realestate.webp',
      desc: 'We provide tools for listing properties, conducting virtual tours, and streamlining communication, making the buying and selling process easier for both agents and clients.',
      points: [
        'Interactive property search & availability filters',
        'Site-visit booking funnels & CRM lead routing',
        'High-resolution project galleries & floor plans',
      ],
      deviceTitle: 'Property Platform Hub',
      tiles: ['Verified Listings', 'Virtual Property Tours', 'Site Visit Scheduler', 'Agent CRM Pipeline'],
    },
    {
      id: 'ind-4',
      num: '05',
      ac: '#2563eb',
      title: 'Logistics',
      image: '/images/svss/web/ind-logistics.png',
      desc: 'We develop web applications for the logistics industry that enhance supply chain management, streamline order tracking, and optimize inventory control, ensuring smooth operations and on-time deliveries.',
      points: [
        'Live fleet dispatch & checkpoint visibility',
        'Warehouse inward/outward barcode ledgers',
        'Automated digital manifests & SLA alerts',
      ],
      deviceTitle: 'Supply Chain Console',
      tiles: ['Fleet Telemetry', 'Shipment Tracking', 'Warehouse Stock', 'Digital e-Way Bills'],
    },
    {
      id: 'ind-5',
      num: '06',
      ac: '#059669',
      title: 'Education',
      image: '/images/svss/web/ind-education.png',
      desc: 'Our web app developers create interactive e-learning platforms, administrative tools, and communication systems tailored for educational institutions.',
      points: [
        'Role-based LMS portals for students & faculty',
        'Adaptive course modules, quizzes & progress tracking',
        'Automated PDF transcripts, fees & certificates',
      ],
      deviceTitle: 'LMS Academic Hub',
      tiles: ['Interactive Courses', 'Assessment Engine', 'Student Dashboards', 'Certificate Issuer'],
    },
    {
      id: 'ind-6',
      num: '07',
      ac: '#0a85b1',
      title: 'Fintech',
      image: '/images/svss/web/ind-fintech.webp',
      desc: 'Tech22Blocks specializes in secure and efficient financial platforms, delivering online banking, payment processing, and investment solutions that adhere to industry standards.',
      points: [
        'Append-only ledger accounting & reconciliation',
        'Multi-factor authentication & strict RBAC',
        'Real-time payment webhook orchestration',
      ],
      deviceTitle: 'Fintech Core Ledger',
      tiles: ['Payment Orchestration', 'KYC & Onboarding', 'Immutable Audit Log', 'Portfolio Telemetry'],
    },
    {
      id: 'ind-7',
      num: '08',
      ac: '#e11d48',
      title: 'Manufacturing',
      image: '/images/svss/web/ind-manufacturing.webp',
      desc: 'We create web app solutions designed to enhance production processes, streamline inventory control, and improve supply chain management, thereby boosting operational efficiency.',
      points: [
        'Bill-of-Materials & shop-floor production tracking',
        'Vendor procurement & purchase order approvals',
        'Scheduled preventive maintenance logs',
      ],
      deviceTitle: 'Plant Operations ERP',
      tiles: ['Production Queue', 'Vendor Portals', 'Inventory Thresholds', 'Quality Assurance'],
    },
    {
      id: 'ind-8',
      num: '09',
      ac: '#0ea5e9',
      title: 'On-Demand',
      image: '/images/svss/web/ind-ondemand.png',
      desc: 'We provide tailored web application development, delivering user-friendly features that simplify booking, payment, and communication for both clients and service providers.',
      points: [
        'Live booking dispatch & provider assignment',
        'Automated SMS/WhatsApp & push notifications',
        'Dynamic slot scheduling & settlement payouts',
      ],
      deviceTitle: 'On-Demand Marketplace',
      tiles: ['Instant Slot Booking', 'Provider Matching', 'Escrow Settlement', 'Live Order Status'],
    },
  ];

  // Scroll Observer for Stacking Industry Cards Left Navigation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-ind-idx'));
            if (!isNaN(idx)) {
              setActiveIndustryCard(idx);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1,
      }
    );

    industryCardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleIndustryNavClick = (idx: number) => {
    setActiveIndustryCard(idx);
    const target = industryCardRefs.current[idx];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // ---------------------------------------------------------------------------
  // Data: Reasons to Invest in Web Application Development (6 Cards)
  // ---------------------------------------------------------------------------
  const reasonsToInvest = [
    'Streamline the Business Process',
    'Gain Competitive Edge',
    'Enhanced Efficiency',
    'Customizable and Scalable',
    'Continuous Business Operation',
    'Automates Repetitive Tasks',
  ];

  // ---------------------------------------------------------------------------
  // Data: Tech22Blocks is Your Ultimate Destination (6 Icon Cards)
  // ---------------------------------------------------------------------------
  const destinationBenefits = [
    {
      title: 'Cost-Effective Process',
      icon: '/images/svss/web/dest-cost.png',
      desc: 'At Tech22Blocks, we deliver web app development services that balance cost-effectiveness with high quality, ensuring your project is completed efficiently and to the highest standards.',
    },
    {
      title: 'All Under One Roof',
      icon: '/images/svss/web/dest-roof.png',
      desc: 'Design, development, hosting, SEO and support from one team, so you always have a single point of contact.',
    },
    {
      title: 'Creative Team',
      icon: '/images/svss/web/dest-team.png',
      desc: 'At Tech22Blocks, our creative web app developers are dedicated to transforming your vision into innovative web solutions, bringing creativity to every element of your project.',
    },
    {
      title: '24/7 Help Desk',
      icon: '/images/svss/web/dest-helpdesk.png',
      desc: 'At Tech22Blocks, we are committed to providing support whenever you need it, ensuring a seamless development experience from start to finish.',
    },
    {
      title: 'New Technology Integration',
      icon: '/images/svss/web/dest-tech.png',
      desc: 'As a forward-thinking web application development company, Tech22Blocks remains at the forefront of technology by integrating the latest advancements into your web apps, ensuring you stay ahead of the curve.',
    },
    {
      title: 'Post-Deployment Services',
      icon: '/images/svss/web/dest-support.png',
      desc: 'Our web development services extend beyond the initial launch, focusing on the continued success of your web application through regular updates, maintenance, and ongoing support.',
    },
  ];

  // ---------------------------------------------------------------------------
  // Data: Technology Stack (6 Reference Tabs & 40 Icons)
  // ---------------------------------------------------------------------------
  const techStackTabs = [
    {
      label: 'Programming Languages',
      items: [
        { name: 'C', icon: '/images/svss/web/tech/lang-c.png' },
        { name: 'C++', icon: '/images/svss/web/tech/lang-cpp.png' },
        { name: 'HTML5', icon: '/images/svss/web/tech/lang-html.png' },
        { name: 'JavaScript', icon: '/images/svss/web/tech/lang-js.png' },
        { name: 'Java', icon: '/images/svss/web/tech/lang-java.png' },
        { name: 'Kotlin', icon: '/images/svss/web/tech/lang-kotlin.webp' },
        { name: 'Swift', icon: '/images/svss/web/tech/lang-swift.png' },
        { name: 'Python', icon: '/images/svss/web/tech/lang-python.webp' },
        { name: 'Objective-C', icon: '/images/svss/web/tech/lang-objc.png' },
      ],
    },
    {
      label: 'Frameworks',
      items: [
        { name: 'Ionic', icon: '/images/svss/web/tech/fw-ionic.png' },
        { name: 'Node.js', icon: '/images/svss/web/tech/fw-nodejs.png' },
        { name: 'PhoneGap', icon: '/images/svss/web/tech/fw-phonegap.png' },
        { name: 'Xamarin', icon: '/images/svss/web/tech/fw-xamarin.png' },
        { name: 'Appcelerator', icon: '/images/svss/web/tech/fw-appcelerator.png' },
        { name: 'Flutter', icon: '/images/svss/web/tech/fw-flutter.png' },
      ],
    },
    {
      label: 'Databases',
      items: [
        { name: 'PostgreSQL', icon: '/images/svss/web/tech/db-postgres.webp' },
        { name: 'SQL Server', icon: '/images/svss/web/tech/db-sqlserver.png' },
        { name: 'Apache HBase', icon: '/images/svss/web/tech/db-hbase.webp' },
        { name: 'Apache NiFi', icon: '/images/svss/web/tech/db-nifi.png' },
        { name: 'Cassandra', icon: '/images/svss/web/tech/db-cassandra.webp' },
        { name: 'Apache Hive', icon: '/images/svss/web/tech/db-hive.png' },
        { name: 'MongoDB', icon: '/images/svss/web/tech/db-mongodb.png' },
        { name: 'MySQL', icon: '/images/svss/web/tech/db-mysql.png' },
        { name: 'Oracle DB', icon: '/images/svss/web/tech/db-oracle.png' },
      ],
    },
    {
      label: 'DevOps',
      items: [
        { name: 'Kubernetes', icon: '/images/svss/web/tech/devops-k8s.png' },
        { name: 'OpenShift', icon: '/images/svss/web/tech/devops-openshift.png' },
        { name: 'Puppet', icon: '/images/svss/web/tech/devops-puppet.png' },
        { name: 'SaltStack', icon: '/images/svss/web/tech/devops-saltstack.png' },
        { name: 'Terraform', icon: '/images/svss/web/tech/devops-terraform.png' },
        { name: 'Ansible', icon: '/images/svss/web/tech/devops-ansible.webp' },
        { name: 'Chef', icon: '/images/svss/web/tech/devops-chef.png' },
        { name: 'Docker', icon: '/images/svss/web/tech/devops-docker.png' },
      ],
    },
    {
      label: 'Payment Gateways',
      items: [
        { name: 'Alipay', icon: '/images/svss/web/tech/pay-alipay.png' },
        { name: 'PayPal', icon: '/images/svss/web/tech/pay-paypal.webp' },
        { name: 'Square', icon: '/images/svss/web/tech/pay-square.png' },
        { name: 'Stripe', icon: '/images/svss/web/tech/pay-stripe.png' },
      ],
    },
    {
      label: 'Clouds',
      items: [
        { name: 'Microsoft Azure', icon: '/images/svss/web/tech/cloud-azure.png' },
        { name: 'DigitalOcean', icon: '/images/svss/web/tech/cloud-do.png' },
        { name: 'Google Cloud', icon: '/images/svss/web/tech/cloud-gcp.png' },
        { name: 'AWS', icon: '/images/svss/web/tech/cloud-aws.png' },
      ],
    },
  ];

  // ---------------------------------------------------------------------------
  // Data: Our Web App Development Process (7 Reference Stages)
  // ---------------------------------------------------------------------------
  const webProcessStages = [
    {
      num: '1',
      title: 'Ideation',
      desc: 'At Tech22Blocks, our web application development process begins with generating creative ideas, engaging in brainstorming sessions, and thoroughly validating concepts to ensure their viability.',
    },
    {
      num: '2',
      title: 'Competitive Analysis',
      desc: 'In the next phase, our web development team crafts a detailed strategy by gathering pertinent information and market insights through an extensive competitive analysis.',
    },
    {
      num: '3',
      title: 'Intuitive UI/UX Design',
      desc: "We then concentrate on designing a visually striking, user-friendly interface with seamless navigation, making sure it communicates your brand's message in the most engaging way possible.",
    },
    {
      num: '4',
      title: 'Development Phase',
      desc: 'As a trusted web app development company, we are committed to creating responsive, custom web applications tailored to meet the exact needs of our clients.',
    },
    {
      num: '5',
      title: 'Robust Testing',
      desc: 'Our expert team of testers performs thorough evaluations at multiple stages to ensure the final web application is free from errors and glitches, providing a smooth and seamless user experience.',
    },
    {
      num: '6',
      title: 'Deployment',
      desc: 'After thorough testing through multiple stages, our developers successfully launch the web app, guaranteeing a smooth and efficient deployment process.',
    },
    {
      num: '7',
      title: 'Support and Maintenance',
      desc: 'Finally, Tech22Blocks offers continuous support and maintenance to keep your web application optimized, secure, and current, ensuring a smooth user experience over time.',
    },
  ];

  // Scroll Listener for Process Timeline Progress Bar & Active Step Highlighting
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setProcessFillPct(100);
      setActiveProcessSteps(new Array(7).fill(true));
      return;
    }

    let ticking = false;
    const update = () => {
      ticking = false;
      const lineEl = processLineRef.current;
      if (!lineEl) return;
      const mid = window.innerHeight * 0.55;
      const rect = lineEl.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (mid - rect.top) / rect.height));
      setProcessFillPct(Number((progress * 100).toFixed(1)));
      setActiveProcessSteps(
        processStepRefs.current.map((el) =>
          el ? el.getBoundingClientRect().top + 24 < mid : false
        )
      );
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="bg-[var(--canvas)] text-[var(--text-primary)] transition-colors duration-200">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH INTERACTIVE WIREFRAME/LIVE BROWSER MOCKUP            */}
      {/* ========================================================================= */}
      <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 border-b border-[var(--border)] bg-[var(--surface)] overflow-hidden transition-colors duration-200">
        <StarWatermark size={680} position="top-right" variant="blue" opacity={0.03} rotate={15} />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-[var(--accent)]/[0.06] rounded-full blur-[140px] pointer-events-none transform-gpu" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs font-mono text-[var(--text-muted)]">
              <li>
                <Link href="/" className="hover:text-[var(--accent)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-[var(--border)]" />
              </li>
              <li>
                <Link href="/services/" className="hover:text-[var(--accent)] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-[var(--border)]" />
              </li>
              <li className="text-[var(--accent)] font-semibold">Website Development</li>
            </ol>
          </nav>

          {/* Hero Copy */}
          <div className="text-center max-w-4xl mx-auto space-y-5 mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] px-3.5 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              <span>Website designing &amp; web apps</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)] font-display">
              <StaggeredText text="Trusted Web Application" />{' '}
              <StaggeredText text="Development Company" isShimmer />
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[var(--text-muted)] font-normal leading-relaxed max-w-2xl mx-auto">
              With a team of dedicated engineers, Tech22Blocks offers personalised web application
              development services tailored to your unique requirements, from business websites to
              full SaaS platforms.
            </p>

            {/* Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact/"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] shadow-lg shadow-[var(--accent)]/20 transition-all flex items-center gap-2"
              >
                <span>Get Your Custom WebApp</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#our-works"
                className="px-5 py-3.5 rounded-xl text-sm font-semibold text-[var(--text-primary)] bg-[var(--surface-elevated)] hover:bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all"
              >
                See our work
              </a>
            </div>

            {/* 4 Key Features Row */}
            <ul className="pt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-[var(--text-muted)]">
              {['Mobile-first design', 'SEO-ready code', 'Easy CMS', 'Support after launch'].map(
                (pt, idx) => (
                  <li
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-primary)] font-medium flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    <span>{pt}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Interactive Browser Frame with Wireframe <-> Live Site Wipe & Desktop/Tablet/Phone Toggle */}
          <div className="wd-browser" data-size={browserSize}>
            <div className="wd-bar">
              <span aria-hidden="true" className="wd-dots">
                <i />
                <i />
                <i />
              </span>

              <span className="wd-url font-mono">nexusflow.tech22blocks.com</span>

              <div aria-label="Preview size" className="wd-sizes" role="group">
                <button
                  type="button"
                  aria-pressed={browserSize === 'desktop'}
                  onClick={() => setBrowserSize('desktop')}
                  className="inline-flex items-center gap-1.5"
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Desktop</span>
                </button>
                <button
                  type="button"
                  aria-pressed={browserSize === 'tablet'}
                  onClick={() => setBrowserSize('tablet')}
                  className="inline-flex items-center gap-1.5"
                >
                  <Tablet className="w-3.5 h-3.5" />
                  <span>Tablet</span>
                </button>
                <button
                  type="button"
                  aria-pressed={browserSize === 'phone'}
                  onClick={() => setBrowserSize('phone')}
                  className="inline-flex items-center gap-1.5"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Phone</span>
                </button>
              </div>
            </div>

            <div className="wd-view">
              <div
                ref={heroFrameRef}
                className="wd-frame"
                style={{ '--cut': `${wipeCut}%` } as React.CSSProperties}
              >
                <img
                  src={getAssetUrl('/images/web-hero-preview.jpg')}
                  alt="Responsive multi-device enterprise SaaS platform engineered by Tech22Blocks"
                  className="wd-live"
                />

                {/* Blueprint Wireframe Layer clipped dynamically by --cut */}
                <div aria-hidden="true" className="wd-wire">
                  <span className="w-nav">
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="w-title" />
                  <span className="w-line" />
                  <span className="w-line s" />
                  <span className="w-btn" />
                  <span className="w-img" />
                  <span className="w-cards">
                    <i />
                    <i />
                    <i />
                  </span>
                </div>

                {/* Interactive Range Handle & Knob */}
                <label className="wd-handle">
                  <span className="sr-only">
                    Drag to compare the wireframe with the finished site
                  </span>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={wipeCut}
                    onChange={(e) => {
                      wipeTouchedRef.current = true;
                      setWipeCut(Number(e.target.value));
                    }}
                  />
                  <span aria-hidden="true" className="wd-knob">
                    ⇆
                  </span>
                </label>

                <span aria-hidden="true" className="wd-tag l">
                  Wireframe
                </span>
                <span aria-hidden="true" className="wd-tag r">
                  Live site
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WEB APPLICATION DEVELOPMENT SERVICES WE OFFER                          */}
      {/* (Reference images & copy + Mobile App page 3D Cover Flow behavior!)       */}
      {/* ========================================================================= */}
      <section
        id="web-services"
        className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--canvas)] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="mb-2">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                Engineering Services
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              <StaggeredText text="Web Application Development" />{' '}
              <StaggeredText text="Services We Offer" isShimmer />
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              We adopt a tailored approach to developing web applications that seamlessly align
              with your business goals. From initial concept to final deployment, we guarantee that
              your digital solution is as distinctive as your vision.
            </p>
          </div>

          {/* 3D Cover Flow Carousel (.ms-flow) */}
          <div
            ref={serviceFlowRef}
            className="ms-flow focus:outline-none"
            tabIndex={0}
            onKeyDown={handleFlowKeyDown}
            onPointerDown={handleFlowPointerDown}
            onPointerMove={handleFlowPointerMove}
            onPointerUp={handleFlowPointerUp}
            onPointerCancel={handleFlowPointerUp}
            onPointerLeave={handleFlowPointerUp}
          >
            <ul className="ms-flow-track">
              {webServices.map((svc, idx) => {
                const off = idx - activeServiceFlow;
                const abs = Math.abs(off);
                const isFar = abs > 3;

                return (
                  <li
                    key={idx}
                    onClick={() => {
                      if (!dragMoved.current && idx !== activeServiceFlow) {
                        goServiceFlow(idx);
                      }
                    }}
                    className={`ms-flow-card ${isFar ? 'far' : ''}`}
                    aria-hidden={off !== 0}
                    style={
                      {
                        '--off': off,
                        '--abs': abs,
                        transform: `translateX(calc(${off} * 58%)) translateZ(calc(${abs} * -170px)) rotateY(calc(${off} * -38deg))`,
                        opacity: isFar ? 0 : Math.max(0, 1 - abs * 0.22),
                        zIndex: Math.max(1, 20 - abs),
                        filter: `brightness(${Math.max(0.45, 1 - abs * 0.14)})`,
                      } as React.CSSProperties
                    }
                  >
                    <Image
                      src={getAssetUrl(svc.image)}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 640px) 250px, 420px"
                      className="object-cover"
                      priority={idx === 2}
                    />
                    <b>{svc.title}</b>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Synchronized Side-by-Side / Center Caption Controls matching Mobile App page */}
          <div className="max-w-2xl mx-auto mt-8 flex flex-col items-center">
            <div className="flex items-center justify-between w-full gap-4">
              <button
                type="button"
                onClick={() => goServiceFlow(activeServiceFlow - 1)}
                disabled={activeServiceFlow === 0}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-elevated)] flex items-center justify-center text-[var(--text-primary)] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm flex-shrink-0"
                aria-label="Previous web development service"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="text-center px-2 sm:px-4 flex-1">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] font-display">
                  {webServices[activeServiceFlow]?.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2 leading-relaxed">
                  {webServices[activeServiceFlow]?.desc}
                </p>
                <Link
                  href="/contact/"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--accent)] hover:underline"
                >
                  <span>{webServices[activeServiceFlow]?.cta}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <button
                type="button"
                onClick={() => goServiceFlow(activeServiceFlow + 1)}
                disabled={activeServiceFlow === webServices.length - 1}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-elevated)] flex items-center justify-center text-[var(--text-primary)] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm flex-shrink-0"
                aria-label="Next web development service"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {webServices.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => goServiceFlow(dotIdx)}
                  className={`h-2 rounded-full transition-all ${
                    dotIdx === activeServiceFlow
                      ? 'w-6 bg-[var(--accent)]'
                      : 'w-2 bg-[var(--border)] hover:bg-[var(--text-muted)]'
                  }`}
                  aria-label={`Jump to service ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EXPLORE A WEBSITE WE DESIGN (INTERACTIVE SVG + 5 HOTSPOTS)             */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="mb-2">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                Anatomy &amp; Architecture
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              <StaggeredText text="Explore a Website" />{' '}
              <StaggeredText text="We Design" isShimmer />
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              Tap a number to see the building blocks of a fast, search-friendly website.
            </p>
          </div>

          <div className="sv-hs">
            {/* Left Interactive Stage with SVG Artwork + 5 Pulsing Hotspots */}
            <div
              ref={hotspotStageRef}
              className="sv-hs-stage"
              onPointerMove={handleHotspotMove}
              onPointerLeave={handleHotspotLeave}
            >
              <svg
                ref={hotspotSvgRef}
                aria-label="Explore a Website We Design"
                role="img"
                viewBox="0 0 520 420"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="t22WebBg" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#e8f4ff" />
                    <stop offset="1" stopColor="#d7ecff" />
                  </linearGradient>
                  <linearGradient id="t22WebHero" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0" stopColor="#0a85b1" />
                    <stop offset="1" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
                <g className="art-layer" data-depth="0.01">
                  <circle cx="260" cy="210" fill="url(#t22WebBg)" r="195" />
                </g>
                <g className="art-layer" data-depth="0.03">
                  <rect fill="#fff" height="250" rx="16" stroke="#d6e6f5" width="350" x="56" y="70" />
                  <rect fill="#eef3f8" height="30" rx="16" width="350" x="56" y="70" />
                  <rect fill="#eef3f8" height="14" width="350" x="56" y="86" />
                  <circle cx="76" cy="85" fill="#f87171" r="5" />
                  <circle cx="92" cy="85" fill="#fbbf24" r="5" />
                  <circle cx="108" cy="85" fill="#34d399" r="5" />
                  <rect fill="#fff" height="12" rx="6" width="180" x="128" y="79" />
                  <rect fill="url(#t22WebHero)" height="86" rx="10" width="314" x="74" y="114" />
                  <g fill="#fff">
                    <rect height="10" rx="4" width="130" x="92" y="134" />
                    <rect height="8" opacity=".75" rx="4" width="96" x="92" y="152" />
                  </g>
                  <rect className="art-pulse" fill="#fbbf24" height="18" rx="9" width="64" x="92" y="170" />
                  <circle cx="330" cy="157" fill="#fff" opacity=".2" r="28" />
                  <g fill="#eef3f8">
                    <rect height="88" rx="10" width="96" x="74" y="212" />
                    <rect height="88" rx="10" width="96" x="183" y="212" />
                    <rect height="88" rx="10" width="96" x="292" y="212" />
                  </g>
                  <g fill="#cfe2f3">
                    <rect height="40" rx="6" width="72" x="86" y="224" />
                    <rect height="40" rx="6" width="72" x="195" y="224" />
                    <rect height="40" rx="6" width="72" x="304" y="224" />
                  </g>
                  <g fill="#9fb2c4">
                    <rect height="7" rx="3" width="60" x="86" y="274" />
                    <rect height="7" rx="3" width="60" x="195" y="274" />
                    <rect height="7" rx="3" width="60" x="304" y="274" />
                  </g>
                </g>
                <g className="art-layer art-float" data-depth="0.08">
                  <rect fill="#0f172a" height="180" rx="18" width="96" x="382" y="170" />
                  <rect fill="#fff" height="156" rx="12" width="80" x="390" y="182" />
                  <rect fill="url(#t22WebHero)" height="40" rx="6" width="64" x="398" y="192" />
                  <g fill="#cfe2f3">
                    <rect height="26" rx="5" width="64" x="398" y="240" />
                    <rect height="26" rx="5" width="64" x="398" y="272" />
                  </g>
                  <g fill="#9fb2c4">
                    <rect height="6" rx="3" width="44" x="398" y="306" />
                    <rect height="6" rx="3" width="32" x="398" y="318" />
                  </g>
                </g>
                <g className="art-layer art-float delay" data-depth="0.09">
                  <rect fill="#fff" height="56" rx="14" stroke="#cfe0f0" width="128" x="30" y="300" />
                  <circle cx="62" cy="328" fill="none" r="18" stroke="#e5e7eb" strokeWidth="5" />
                  <circle
                    className="art-draw"
                    cx="62"
                    cy="328"
                    fill="none"
                    r="18"
                    stroke="#16a34a"
                    strokeDasharray="108 113"
                    strokeWidth="5"
                    transform="rotate(-90 62 328)"
                  />
                  <text
                    fill="#16a34a"
                    fontFamily="Arial"
                    fontSize="11"
                    fontWeight="700"
                    textAnchor="middle"
                    x="62"
                    y="332"
                  >
                    98
                  </text>
                  <text fill="#5c6b7a" fontFamily="Arial" fontSize="10" x="90" y="324">
                    Page speed
                  </text>
                  <text fill="#0f172a" fontFamily="Arial" fontSize="11" fontWeight="700" x="90" y="339">
                    Excellent
                  </text>
                </g>
                <g className="art-layer art-float" data-depth="0.07">
                  <rect fill="#fff" height="40" rx="20" stroke="#cfe0f0" width="92" x="410" y="60" />
                  <circle cx="430" cy="80" fill="#0a85b1" r="8" />
                  <circle cx="452" cy="80" fill="#38bdf8" r="8" />
                  <circle cx="474" cy="80" fill="#fbbf24" r="8" />
                </g>
              </svg>

              {hotspots.map((spot) => (
                <button
                  key={spot.id}
                  type="button"
                  aria-label={spot.title}
                  aria-pressed={activeHotspot === spot.id}
                  className="sv-hs-dot"
                  style={{ left: spot.left, top: spot.top }}
                  onClick={() => setActiveHotspot(spot.id)}
                  onMouseEnter={() => setActiveHotspot(spot.id)}
                >
                  {spot.id + 1}
                </button>
              ))}
            </div>

            {/* Right Interactive Hotspot Accordion List */}
            <ol className="sv-hs-list">
              {hotspots.map((spot) => {
                const isActive = activeHotspot === spot.id;
                return (
                  <li key={spot.id} className={isActive ? 'is-active' : ''}>
                    <button type="button" onClick={() => setActiveHotspot(spot.id)}>
                      <span>{spot.id + 1}</span>
                      {spot.title}
                    </button>
                    <p>{spot.desc}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WEB APPS BUILT FOR YOUR INDUSTRY                                       */}
      {/* (Reference 9 Industries + Mobile App page Stacking Cards & Sticky Nav)    */}
      {/* Note: NO overflow-hidden on this section so sticky nav & cards work!      */}
      {/* ========================================================================= */}
      <section
        id="industries"
        className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--canvas)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="mb-2">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                Domain Engineering
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              <StaggeredText text="Web Apps Built" />{' '}
              <StaggeredText text="for Your Industry" isShimmer />
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              To revolutionize digital innovation and optimize business operations, our web
              application development services are crafted to enhance your online presence and
              deliver tangible results.
            </p>
          </div>

          <div className="hp-scwrap">
            {/* Sticky Left Vertical Navigation */}
            <nav className="hp-sc-nav" aria-label="Industry Solutions Navigation">
              <ol>
                {industryStackCards.map((ind, idx) => {
                  const isCurrent = activeIndustryCard === idx;
                  return (
                    <li key={ind.id}>
                      <button
                        type="button"
                        onClick={() => handleIndustryNavClick(idx)}
                        aria-current={isCurrent ? 'true' : undefined}
                        style={{ '--ac': ind.ac } as React.CSSProperties}
                      >
                        <i aria-hidden="true" />
                        <span>{ind.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </nav>

            {/* Right Stacking Cards List */}
            <ol className="hp-stack-cards">
              {industryStackCards.map((ind, idx) => (
                <li
                  key={ind.id}
                  id={ind.id}
                  ref={(el) => {
                    industryCardRefs.current[idx] = el;
                  }}
                  data-ind-idx={idx}
                  className="hp-sc"
                  style={{ '--k': idx, '--ac': ind.ac } as React.CSSProperties}
                >
                  <article className="hp-sc-card">
                    {/* Left Copy */}
                    <div className="hp-sc-copy">
                      <div className="flex items-center gap-2">
                        <span className="hp-sc-num">
                          {ind.num} <i>/ 09</i>
                        </span>
                        <span className="hp-sc-name">· Industry Vertical</span>
                      </div>

                      <h3>{ind.title}</h3>
                      <p>{ind.desc}</p>

                      <ul className="hp-sol-points">
                        {ind.points.map((pt, pIdx) => (
                          <li key={pIdx}>{pt}</li>
                        ))}
                      </ul>

                      <Link href="/contact/" className="hp-sc-btn">
                        <span>Build for {ind.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Right Device Frame */}
                    <div className="hp-sc-device">
                      <div className="hp-sc-bar">
                        <i />
                        <i />
                        <i />
                        <span>{ind.deviceTitle}</span>
                      </div>

                      <div className="hp-sc-screen">
                        <div className="hp-sc-hello flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-white/95 p-1.5 flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Image
                              src={getAssetUrl(ind.image)}
                              alt={ind.title}
                              width={40}
                              height={40}
                              className="object-contain w-full h-full"
                            />
                          </div>
                          <div>
                            <b>{ind.title}</b>
                            <span className="text-[11px] text-white/85 block">
                              Production Web Architecture
                            </span>
                          </div>
                        </div>

                        <ul className="hp-sc-tiles">
                          {ind.tiles.map((tileName, tIdx) => (
                            <li key={tIdx}>
                              <span className="hp-sc-ic">
                                <Globe className="w-4 h-4 text-[var(--accent)]" />
                              </span>
                              <span>{tileName}</span>
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
      {/* 5. OUR WORKS (ONLY 2 DUMMY ITEMS SIMILAR TO REFERENCE)                    */}
      {/* ========================================================================= */}
      <section
        id="our-works"
        className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--surface)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <div className="mb-2">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                Selected Concept Works
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              <StaggeredText text="Our" />{' '}
              <StaggeredText text="Works" isShimmer />
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              Web platforms and enterprise systems designed with clean UX and sub-second response
              times.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-24">
            {/* DUMMY WORK 01 */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-6">
                <div className="wd-browser-window relative group">
                  <div className="wd-browser-bar">
                    <div className="wd-browser-dots">
                      <span className="bg-rose-500/80" />
                      <span className="bg-amber-500/80" />
                      <span className="bg-emerald-500/80" />
                    </div>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      nexusflow.tech22blocks.com
                    </span>
                    <span className="text-[10px] font-mono text-emerald-500 font-bold">
                      ● DUMMY WORK 01
                    </span>
                  </div>

                  {/* Interactive Vertical Scrollable Preview Window */}
                  <div className="bg-slate-950 p-5 sm:p-6 text-white space-y-4 h-[340px] overflow-y-auto scrollbar-thin">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div>
                        <div className="text-xs text-slate-400">Enterprise B2B Portal</div>
                        <div className="text-base font-bold">NexusFlow Industrial Portal</div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400">
                        Sub-0.6s LCP
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                        <div className="text-slate-400 text-[10px]">Real-Time Catalog</div>
                        <div className="font-bold text-white text-sm mt-1">12,400+ SKUs</div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                        <div className="text-slate-400 text-[10px]">Auto Invoicing</div>
                        <div className="font-bold text-white text-sm mt-1">Stripe Webhooks</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-2 text-xs">
                      <div className="flex items-center justify-between font-bold text-slate-200">
                        <span>Wholesale Order Pipeline</span>
                        <span className="text-sky-400">Active Sync</span>
                      </div>
                      <div className="space-y-1.5 text-[11px] text-slate-400 font-mono">
                        <div className="flex justify-between">
                          <span>PO #8821 — Bulk Switchgear</span>
                          <span className="text-emerald-400">Dispatched</span>
                        </div>
                        <div className="flex justify-between">
                          <span>PO #8822 — Grid Controllers</span>
                          <span className="text-amber-400">Processing</span>
                        </div>
                        <div className="flex justify-between">
                          <span>PO #8823 — Telemetry Gateways</span>
                          <span className="text-sky-400">Quoted</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1">
                      <div className="font-bold text-slate-200">Multi-Role Access Control</div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Department buyer budgets, manager sign-off gates, and instant ERP inventory
                        reservations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <span className="text-5xl sm:text-6xl font-extrabold font-mono text-[var(--accent)]/20 block leading-none select-none">
                  01
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] block">
                  Enterprise Portal &amp; B2B SaaS
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-display tracking-tight">
                  NexusFlow Enterprise Portal
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  A high-throughput B2B customer self-service platform engineered to replace manual
                  email ordering with live wholesale pricing, automated invoicing, and multi-tier
                  team permissions.
                </p>

                <div className="pt-2">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)] mb-2">
                    What we built
                  </div>
                  <dl className="space-y-1 border-t border-[var(--border)] pt-2 text-xs sm:text-sm">
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 py-1.5 border-b border-[var(--border)]/60">
                      <dt className="font-bold text-[var(--text-primary)] col-span-1">Catalog</dt>
                      <dd className="text-[var(--text-muted)] col-span-2 sm:col-span-3">
                        Real-time stock, tiered wholesale pricing &amp; backorders
                      </dd>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 py-1.5 border-b border-[var(--border)]/60">
                      <dt className="font-bold text-[var(--text-primary)] col-span-1">Invoicing</dt>
                      <dd className="text-[var(--text-muted)] col-span-2 sm:col-span-3">
                        Instant PDF billing generation &amp; Stripe payment gateway
                      </dd>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 py-1.5 border-b border-[var(--border)]/60">
                      <dt className="font-bold text-[var(--text-primary)] col-span-1">Security</dt>
                      <dd className="text-[var(--text-muted)] col-span-2 sm:col-span-3">
                        Multi-tenant isolation &amp; role-based RBAC permissions
                      </dd>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 py-1.5 border-b border-[var(--border)]/60">
                      <dt className="font-bold text-[var(--text-primary)] col-span-1">Speed</dt>
                      <dd className="text-[var(--text-muted)] col-span-2 sm:col-span-3">
                        Sub-second LCP (0.6s) across global edge CDN
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </article>

            {/* DUMMY WORK 02 */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-6 lg:order-2">
                <div className="wd-browser-window">
                  <div className="wd-browser-bar">
                    <div className="wd-browser-dots">
                      <span className="bg-rose-500/80" />
                      <span className="bg-amber-500/80" />
                      <span className="bg-emerald-500/80" />
                    </div>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      analytics.tech22blocks.com
                    </span>
                    <span className="text-[10px] font-mono text-emerald-500 font-bold">
                      ● DUMMY WORK 02
                    </span>
                  </div>

                  <div className="bg-slate-950 p-5 sm:p-6 text-white space-y-4 h-[340px] overflow-y-auto scrollbar-thin">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div>
                        <div className="text-xs text-slate-400">BI Telemetry Platform</div>
                        <div className="text-base font-bold">ApexAnalytics Cloud Console</div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/20 text-sky-400">
                        100k+ Pts/Sec
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                        <div className="text-slate-400 text-[10px]">Vector Rendering</div>
                        <div className="font-bold text-white text-sm mt-1">60 FPS Smooth</div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                        <div className="text-slate-400 text-[10px]">Uptime SLA</div>
                        <div className="font-bold text-white text-sm mt-1">99.99% Global</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-2 text-xs">
                      <div className="flex items-center justify-between font-bold text-slate-200">
                        <span>Automated Compliance Digest</span>
                        <span className="text-emerald-400">SOC2 Ready</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Weekly scheduled PDF executive reports, multi-currency rollups, and live
                        filter bookmarks across distributed cloud nodes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4 lg:order-1">
                <span className="text-5xl sm:text-6xl font-extrabold font-mono text-[var(--accent)]/20 block leading-none select-none">
                  02
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] block">
                  Analytics &amp; Cloud Platform
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-display tracking-tight">
                  ApexAnalytics SaaS Platform
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  A real-time telemetry and reporting web application processing daily streaming
                  metrics with interactive charts, instant filtering, and automated team exports.
                </p>

                <div className="pt-2">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)] mb-2">
                    What we built
                  </div>
                  <dl className="space-y-1 border-t border-[var(--border)] pt-2 text-xs sm:text-sm">
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 py-1.5 border-b border-[var(--border)]/60">
                      <dt className="font-bold text-[var(--text-primary)] col-span-1">Engine</dt>
                      <dd className="text-[var(--text-muted)] col-span-2 sm:col-span-3">
                        100k+ data points rendered with responsive vector charts
                      </dd>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 py-1.5 border-b border-[var(--border)]/60">
                      <dt className="font-bold text-[var(--text-primary)] col-span-1">Reporting</dt>
                      <dd className="text-[var(--text-muted)] col-span-2 sm:col-span-3">
                        Multi-parameter filtering &amp; scheduled CSV/PDF export
                      </dd>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 py-1.5 border-b border-[var(--border)]/60">
                      <dt className="font-bold text-[var(--text-primary)] col-span-1">Caching</dt>
                      <dd className="text-[var(--text-muted)] col-span-2 sm:col-span-3">
                        Global Edge KV caching for sub-50ms query responses
                      </dd>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 py-1.5 border-b border-[var(--border)]/60">
                      <dt className="font-bold text-[var(--text-primary)] col-span-1">Audit</dt>
                      <dd className="text-[var(--text-muted)] col-span-2 sm:col-span-3">
                        Append-only immutable action log across teams
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. REASONS TO INVEST IN WEB APPLICATION DEVELOPMENT                       */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="mb-2">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                Strategic ROI
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              <StaggeredText text="Reasons to Invest in" />{' '}
              <StaggeredText text="Web Application Development" isShimmer />
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              Building a custom web application isn’t merely an option; it’s a strategic decision.
              It opens the door to higher profitability, serves as a platform for ongoing
              innovation, and drives business growth. Let us transform your idea into clever and
              effective digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {reasonsToInvest.map((reason, idx) => (
              <div
                key={idx}
                className="group relative pl-16 pr-6 py-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-200 hover:-translate-y-0.5 flex items-center"
              >
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-3xl font-extrabold font-mono text-[var(--accent)]">
                  0{idx + 1}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-display">
                  {reason}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. TECH22BLOCKS IS YOUR ULTIMATE DESTINATION FOR WEB DEVELOPMENT SERVICES */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="mb-2">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                Why Tech22Blocks
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              <StaggeredText text="Tech22Blocks is Your Ultimate Destination" />{' '}
              <StaggeredText text="for Web Development Services" isShimmer />
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              Our web application development team offers comprehensive services designed to
              maximize ROI and enhance profitability for your business. We achieve this by
              implementing strategic solutions and innovative approaches tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinationBenefits.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[var(--canvas)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 hover:-translate-y-1 shadow-sm text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 p-3 flex items-center justify-center mb-4">
                  <Image
                    src={getAssetUrl(item.icon)}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-display mb-2">
                  <Link href="/contact/" className="hover:text-[var(--accent)] transition-colors">
                    {item.title}
                  </Link>
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. OUR WEB APP DEVELOPMENT COMPANY’S TECHNOLOGY STACK                     */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="mb-2">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                Technology Stack
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              <StaggeredText text="Our Web App Development Company’s" />{' '}
              <StaggeredText text="Technology Stack" isShimmer />
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              With a solid foundation in cutting-edge technologies, we guarantee that your web apps
              are future-proof and meet all user requirements.
            </p>
          </div>

          {/* Interactive Tab Buttons */}
          <div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10"
            role="tablist"
            aria-label="Technology Stack Categories"
          >
            {techStackTabs.map((tab, tIdx) => {
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

          {/* Active Category Icon Cards */}
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
            {techStackTabs[activeTechTab]?.items.map((tech) => (
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
                <small className="text-xs font-mono text-[var(--text-muted)] font-medium">
                  {tech.name}
                </small>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. OUR WEB APP DEVELOPMENT PROCESS (SCROLL-DRIVEN VERTICAL TIMELINE)      */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="mb-2">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                Engineering Roadmap
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              <StaggeredText text="Our Web App" />{' '}
              <StaggeredText text="Development Process" isShimmer />
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              We’ve carefully developed a strategic roadmap that guides you through each step with
              precision, ensuring your project reaches its full potential and achieves success.
            </p>
          </div>

          <div ref={processContainerRef} className="wd-steps">
            <span ref={processLineRef} aria-hidden="true" className="wd-steps-line">
              <i style={{ height: `${processFillPct}%` }} />
            </span>

            <ol>
              {webProcessStages.map((stage, sIdx) => {
                const isLit = activeProcessSteps[sIdx];
                return (
                  <li
                    key={stage.num}
                    ref={(el) => {
                      processStepRefs.current[sIdx] = el;
                    }}
                    className={`wd-step ${isLit ? 'in' : ''}`}
                  >
                    <span className="wd-step-num font-mono">{stage.num}</span>
                    <div className="wd-step-card">
                      <h3 className="font-display">{stage.title}</h3>
                      <p>{stage.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. WEB APPLICATION DEVELOPMENT FAQS                                      */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14">
            <div className="mb-2">
              <span className="heading-focus-underline text-xs font-extrabold uppercase tracking-widest text-[var(--accent)] font-mono">
                Clear Answers
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
              <StaggeredText text="Frequently Asked" />{' '}
              <StaggeredText text="Questions" isShimmer />
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[var(--text-muted)] leading-relaxed">
              Straightforward answers to common questions about web app architectures, SEO equity,
              CMS editing, and full code ownership.
            </p>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-[var(--text-primary)] font-display">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-[var(--accent)] border-[var(--accent)]' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed border-t border-[var(--border)]/60 pt-4">
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
      {/* 11. FINAL CALL TO ACTION (Triangle corner image already removed globally) */}
      {/* ========================================================================= */}
      <FinalCTA />
    </div>
  );
}
