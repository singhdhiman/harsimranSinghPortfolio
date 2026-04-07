export type ProjectLink = {
  label: "Live" | "GitHub";
  href: string;
};

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  stack: string[];
  links: ProjectLink[];
  problem: string;
  solution: string;
  impact: string[];
};

export const projects: ProjectCaseStudy[] = [
  {
    slug: "concierto-cloud",
    title: "Concierto Cloud",
    tagline: "Zero-code SaaS platform for cloud adoption & FinOps analytics",
    image: "/Images/backend.jpg",
    stack: [
      "React.js",
      "Redux",
      "Redux-Saga",
      "Node.js",
      "Azure",
      "Tailwind CSS",
      "Microservices",
    ],
    links: [{ label: "Live", href: "https://www.concierto.cloud/" }],
    problem:
      "Enterprise cloud teams needed a faster way to migrate, automate, and optimize cloud operations across multi-cloud environments—without building custom tooling for every workflow.",
    solution:
      "Built modular dashboards and workflows on a microservices architecture, with reliable state management and analytics views to track automation, cost, and usage in real time.",
    impact: [
      "Enabled automation at scale with 600+ tasks for hybrid/multi-cloud operations.",
      "Delivered interactive analytics dashboards for actionable insights.",
      "Built a ticketing system inspired by ServiceNow to streamline service requests.",
    ],
  },
  {
    slug: "auto-part-shop",
    title: "The Auto Part Shop",
    tagline: "High-scale e-commerce with 1M+ catalog and GraphQL data layer",
    image: "/Images/ecommerce.png",
    stack: ["Next.js", "SCSS", "Relay", "GraphQL", "Node.js"],
    links: [{ label: "Live", href: "https://www.theautopartsshop.com/" }],
    problem:
      "Users needed to quickly find and purchase the right part from a massive catalog while maintaining performance, accessibility, and secure checkout flows.",
    solution:
      "Implemented a Next.js storefront with optimized UI performance and GraphQL queries for efficient data retrieval; collaborated with teams to raise accessibility and scalability standards.",
    impact: [
      "Improved UX performance and accessibility across customer-facing flows.",
      "Strengthened scalability/security of the storefront experience.",
      "Supported order and payment integrations via backend services.",
    ],
  },
  {
    slug: "bimedis",
    title: "Bimedis",
    tagline: "Marketplace experience for medical equipment listings & discovery",
    image: "/Images/Webapp.jpg",
    stack: ["React.js", "Nest.js", "Node.js", "REST APIs", "SEO", "Responsive UI"],
    links: [{ label: "Live", href: "https://in.bimedis.com/" }],
    problem:
      "A marketplace needs strong discovery (search, categories, filters) while keeping pages fast and SEO-friendly for organic traffic.",
    solution:
      "Delivered a responsive listing and detail experience, with clean navigation patterns and SEO-aware structure to improve discoverability and conversion.",
    impact: [
      "Created clear listing → detail → contact flows for seller inquiries.",
      "Designed for performance and SEO to support discoverability.",
      "Improved browsing patterns with category-driven navigation.",
    ],
  },
  {
    slug: "eve-ai",
    title: "Eve AI",
    tagline: "Web workspace for AI chat, SQL, dbt-style Studio, analytics & metadata",
    image: "/Images/fullStack.jpg",
    stack: ["React", "TypeScript", "AI Chat", "RAG", "SQL", "Superset", "OpenMetadata"],
    links: [],
    problem:
      "Teams needed one governed place to chat with AI, query databases, manage knowledge bases, and access analytics/metadata—without switching across multiple tools.",
    solution:
      "Designed a workspace with authentication, a collapsible sidebar, AI chat modes (web search, analyst SQL, RAG), database connections + SQL execution, and embedded analytics/metadata apps.",
    impact: [
      "Centralized AI + data workflows (chat, SQL, analytics, metadata) in one app.",
      "Improved navigation and deep-linking through a structured sidebar IA.",
      "Enabled knowledge-base driven experiences for analyst and document search modes.",
    ],
  },
  {
    slug: "plus-more",
    title: "Plus More",
    tagline: "E-commerce with rewards-based product reviews and shipment tracking",
    image: "/Images/story1.png",
    stack: ["React.js", "Node.js", "GraphQL", "Redux", "ShipStation API"],
    links: [],
    problem:
      "Increase customer engagement and trust for niche e-commerce by incentivizing reviews while keeping order/shipping updates transparent.",
    solution:
      "Implemented backend services for order/vendor/inventory flows, integrated ShipStation for real-time tracking, and optimized GraphQL + Redux state patterns for fast product and order experiences.",
    impact: [
      "Enabled rewards-based reviews to drive user-generated feedback and repeat engagement.",
      "Added real-time shipment tracking for better customer transparency and fewer support queries.",
      "Improved performance by reducing redundant fetches through GraphQL query design and state normalization.",
    ],
  },
  {
    slug: "waste-trucking-ops",
    title: "Waste Management & Trucking Operations Platform",
    tagline: "SEO site + driver mobile app + dispatcher panel with live tracking",
    image: "/Images/MobileApp.jpg",
    stack: [
      "Next.js",
      "React.js",
      "React Native",
      "AWS Location Services",
      "React DnD",
      "NetSuite APIs",
      "AWS",
    ],
    links: [{ label: "Live", href: "https://www.prioritywaste.com/" }],
    problem:
      "Operations teams needed a single workflow to assign jobs, track trucks in real time, and keep drivers aligned—while maintaining a strong public web presence.",
    solution:
      "Delivered a multi-platform system: a performance-focused Next.js site, a React Native driver app for job/document handling, and a React dispatcher dashboard with drag-and-drop assignment and live tracking via AWS Location Services.",
    impact: [
      "Improved dispatch efficiency with drag-and-drop job assignment and real-time location visibility.",
      "Reduced driver friction via mobile-first job flows and document uploads.",
      "Strengthened SEO and digital presence with an optimized Next.js public website.",
    ],
  },
  {
    slug: "tricera",
    title: "Tricera",
    tagline: "Online photo & document editor with social login and Shopify payments",
    image: "/Images/story.png",
    stack: ["React.js", "Node.js", "REST APIs", "Shopify"],
    links: [],
    problem:
      "Users needed a fast in-browser editor for images and PDFs with easy authentication and a clean path to unlock premium features.",
    solution:
      "Built a React + Node experience for editing workflows, integrated social login and file/storage APIs, and implemented Shopify payments for premium feature access.",
    impact: [
      "Enabled smooth editing flows for images and PDFs in the browser.",
      "Improved conversion through a clearer premium upgrade/payment flow.",
      "Increased stability and scalability through performance tuning and debugging.",
    ],
  },
  {
    slug: "extrica",
    title: "Extrica",
    tagline: "Cloud-native data mesh UI with AI-driven analytics and federated ownership",
    image: "/Images/fullStack.jpg",
    stack: ["React.js", "TypeScript", "Redux Toolkit", "RTK Query", "Material UI", "GraphQL", "Java"],
    links: [{ label: "Live", href: "https://avriodata.ai/" }],
    problem:
      "Organizations needed a secure way to query and interact with data across multiple domains while preserving federated ownership and governance.",
    solution:
      "Built a React + TypeScript UI using Redux Toolkit/RTK Query for efficient caching and data fetching, and integrated GraphQL APIs to support federated access patterns and analytics workflows.",
    impact: [
      "Improved responsiveness by leveraging RTK Query caching and request deduplication.",
      "Enabled clearer domain ownership and secure federated access via GraphQL-driven workflows.",
      "Delivered enterprise-grade UI patterns aligned with governance and analytics needs.",
    ],
  },
];

