import {
  contactEmail,
  githubUrl,
  linkedinUrl,
  portfolioUrl,
  resumePaths,
  siteUrl,
} from "@/lib/site-config";

export const siteConfig = {
  name: "Hari Milan Arora",
  brand: "HMA // REDLINE",
  title: "Hari Milan Arora | AI and Software Engineer",
  description:
    "Portfolio of Hari Milan Arora, an AI and software engineer working across AI engineering, machine learning, multi-agent systems, and software development.",
  url: siteUrl,
  email: contactEmail,
  githubUrl,
  linkedinUrl,
  portfolioUrl,
  resumePaths,
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export const resumeOptions = [
  {
    href: resumePaths.softwareEngineering,
    label: "Software Engineering",
    shortLabel: "SDE",
    description: "Backend systems, APIs, databases, and delivery.",
  },
  {
    href: resumePaths.aiEngineering,
    label: "AI / ML Engineering",
    shortLabel: "AI/ML",
    description: "LLM applications, machine learning, and agents.",
  },
  {
    href: resumePaths.forwardDeployed,
    label: "Forward Deployed Engineering",
    shortLabel: "FDE",
    description: "Cloud AI, multi-agent systems, and production deployment.",
  },
] as const;

export const experience = [
  {
    company: "Alobha Technologies Pvt. Ltd.",
    role: "AI System Development & LLM Intern",
    duration: "Jun — Sep 2026",
    stack: ["Python", "CrewAI", "scikit-learn", "NumPy", "Pandas"],
    summary:
      "Built practical machine-learning and multi-agent workflows across preprocessing, experimentation, retrieval, and LLM-enabled application paths.",
    bullets: [
      "Implemented Python ML workflows covering data preprocessing, model development, experimentation, and evaluation.",
      "Built CrewAI agents and multi-agent workflows using task decomposition and role-based collaboration.",
      "Developed a RAG pipeline and integrated retrieval and LLM calls into application workflows.",
      "Used NumPy, Pandas, and scikit-learn for data processing and foundational regression and Random Forest experiments.",
    ],
    certificate: "/certificates/Hari-Intership-Certificate-Alobha-Technologies.pdf",
  },
] as const;

export const education = [
  {
    qualification: "B.Tech — Computer Science Engineering (AI & ML)",
    institution: "ABES Institute of Technology, Ghaziabad",
    period: "2023 — 2027 expected",
  },
  {
    qualification: "GNIIT — Software Engineering",
    institution: "NIIT",
    period: "Ongoing",
  },
] as const;

export const skillGroups = [
  {
    label: "LLM & Agent Systems",
    items: ["LangChain", "LangGraph", "CrewAI", "RAG", "Embeddings", "LLM API integration"],
  },
  {
    label: "Machine Learning & NLP",
    items: ["scikit-learn", "PyTorch", "Hugging Face Transformers", "DistilBERT", "Regression", "Random Forest"],
  },
  {
    label: "Backend & APIs",
    items: ["Python", "FastAPI", "Node.js", "Express", "REST APIs", "Async processing"],
  },
  {
    label: "Data & Delivery",
    items: ["PostgreSQL", "MySQL", "SQLite", "Redis", "Qdrant", "Docker", "Docker Compose", "Vercel"],
  },
  {
    label: "Frontend & Languages",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "SQL"],
  },
] as const;

export const heroTechnologies = [
  { name: "Python", mark: "PY" },
  { name: "TypeScript", mark: "TS" },
  { name: "FastAPI", mark: "API" },
  { name: "LangGraph", mark: "LG" },
  { name: "React", mark: "RE" },
  { name: "PostgreSQL", mark: "PG" },
  { name: "Docker", mark: "DK" },
  { name: "Google Gemini API", mark: "GM" },
] as const;

export const achievements = [
  {
    value: "B.Tech CSE (AI)",
    label: "Education",
    detail: "ABES Institute of Technology // CSE AI & ML",
  },
  {
    value: "03",
    label: "Projects",
    detail: "Verified engineering systems in the archive",
  },
  {
    value: "AI Systems",
    label: "Systems focus",
    detail: "Multi-agent // LLM applications // ML",
  },
  {
    value: "SIH 2025",
    label: "Hackathon",
    detail: "Institute-level shortlist // eConsultation AI",
  },
] as const;

export const currentFocus = [
  {
    label: "AI Engineering",
    title: "Deliberative systems",
    description:
      "Building AI systems that reason through context, constraints, and next actions instead of treating every workflow as a prompt-response loop.",
  },
  {
    label: "Machine Learning",
    title: "Useful intelligence",
    description:
      "Applying machine learning and language models to products where better interpretation, prioritization, or feedback improves the workflow.",
  },
  {
    label: "Software Engineering",
    title: "Systems that ship",
    description:
      "Turning product intent into maintainable software across interfaces, APIs, data flows, and the operational details between them.",
  },
];

export const thinkingModels = [
  {
    title: "Build from the decision backward.",
    description:
      "The useful question is not whether a model can produce an answer. It is whether the surrounding system helps someone make a better decision.",
  },
  {
    title: "Make intelligence inspectable.",
    description:
      "Trust grows when a system exposes its inputs, constraints, reasoning signals, and points where a person remains in control.",
  },
  {
    title: "Ship the whole system.",
    description:
      "Strong engineering includes the interface, the API, the data path, the failure modes, and the experience of using the result.",
  },
];

export const homeProof = [
  {
    value: "AI",
    label: "Engineering focus",
    description:
      "Products shaped around machine intelligence, explicit constraints, and useful human outcomes.",
  },
  {
    value: "ML",
    label: "Model-aware development",
    description:
      "Machine learning is treated as part of a product system, not as an isolated demo layer.",
  },
  {
    value: "Agents",
    label: "Multi-agent systems",
    description:
      "Exploring specialized agents, orchestration, planning, verification, and bounded action.",
  },
  {
    value: "Full stack",
    label: "Software delivery",
    description:
      "From product framing and interface direction through the implementation that makes the idea usable.",
  },
];

export const aboutSections = [
  {
    eyebrow: "How I Think",
    title: "I optimize for signal, not surface area.",
    description:
      "Good systems are opinionated about what matters. The work begins with clarity, then architecture, then execution.",
    points: [
      {
        title: "First principles over default patterns",
        description:
          "If a workflow is broken, I do not start by decorating it. I start by questioning the assumptions that created the inefficiency.",
      },
      {
        title: "Systems over isolated outputs",
        description:
          "A product becomes valuable when it can absorb complexity without becoming fragile. That means designing for repeatability from the start.",
      },
      {
        title: "Clarity as a competitive edge",
        description:
          "Clear framing shortens the path to good decisions. It also removes wasted movement across product, engineering, and operations.",
      },
    ],
  },
  {
    eyebrow: "What I Build",
    title: "AI systems with software underneath.",
    description:
      "My work sits across AI engineering, machine learning, multi-agent systems, and the software needed to make those systems useful.",
    points: [
      {
        title: "AI engineering",
        description:
          "Designing model-aware workflows that connect interpretation, planning, verification, and action.",
      },
      {
        title: "Machine learning",
        description:
          "Using language, classification, summarization, and evaluation systems to turn complex inputs into useful signals.",
      },
      {
        title: "Product software",
        description:
          "Building the interfaces, APIs, data flows, and feedback loops that allow intelligent features to work in practice.",
      },
    ],
  },
  {
    eyebrow: "How I Work",
    title: "Precision before noise. Execution after clarity.",
    description:
      "The goal is a smaller distance between a well-framed problem and a reliable piece of software.",
    points: [
      {
        title: "Make the constraint visible",
        description:
          "A clear boundary is a design tool. It keeps intelligence, architecture, and scope pointed at the real problem.",
      },
      {
        title: "Keep the human in the loop",
        description:
          "Automation should clarify and accelerate action while preserving the moments that require judgment or confirmation.",
      },
      {
        title: "Measure what the user can feel",
        description:
          "The meaningful result is a workflow that becomes clearer, safer, or more useful—not a claim that cannot be verified.",
      },
    ],
  },
];

export type Project = {
  slug: string;
  label: string;
  title: string;
  summary: string;
  positioning: string;
  tags: string[];
  techStack: string[];
  capabilities: string[];
  repository: string;
  code: string;
  visual: "sentinel" | "interview" | "consultation";
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    architecture: {
      summary: string;
      nodes: { label: string; detail: string }[];
      flow: string[];
    };
    implementation: { title: string; text: string }[];
    challenges: { title: string; text: string }[];
    contribution: string;
  };
};

export const projects: Project[] = [
  {
    slug: "sentinel-nova",
    label: "Mission 01 / Verified repository",
    title: "Sentinel Nova",
    summary:
      "A deliberative AI Chief of Staff for task planning, prioritization, and human-confirmed actions.",
    positioning: "Deliberative AI Chief of Staff.",
    tags: ["AI engineering", "Multi-agent systems", "Planning"],
    techStack: ["React 19", "TypeScript", "Node.js 22", "Express", "Tailwind CSS"],
    capabilities: [
      "Specialized agents for context inspection, prioritization, planning, memory, scheduling, and recovery.",
      "Human-confirmed action proposals with a mandatory review gate.",
      "SHA-256 parameter binding to detect changes between review and execution.",
      "Read-only calendar availability inputs with bounded recovery cycles.",
    ],
    repository: "https://github.com/Hari-Milan-Arora/Sentinel-Nova",
    code: "SENTINEL / NOVA",
    visual: "sentinel",
    caseStudy: {
      overview:
        "Sentinel Nova is an actively developed AI Chief of Staff for task planning, prioritization, and human-confirmed actions. Its repository combines a React interface, a Node and Express runtime, specialized agents, deterministic planning layers, and explicit safety controls.",
      problem:
        "A useful assistant cannot safely jump from an ambiguous request to an external action. Context, priorities, schedules, memory, and action constraints need to be assembled before a proposal can be reviewed.",
      solution:
        "The system uses a deliberative runtime: specialized agents inspect context, prioritize work, plan schedules, retrieve scoped memory, recover from bounded failures, and pass proposals through a reviewer gate before human confirmation.",
      architecture: {
        summary:
          "The verified repository separates the interaction layer, the Nova orchestration runtime, specialized agents, safety tooling, and persistent stores.",
        nodes: [
          { label: "Interface", detail: "React 19, TypeScript, Tailwind CSS SPA" },
          { label: "Runtime", detail: "Node.js, Express, NovaOrchestrator" },
          { label: "Agent layer", detail: "Context, prioritization, planning, memory, scheduling, recovery" },
          { label: "Safety gate", detail: "ReviewerAgent, human confirmation, SHA-256 parameter binding" },
          { label: "Stores", detail: "Tasks, goals, projects, memory, profiles, read-only calendar inputs" },
        ],
        flow: ["Request and context", "Deliberation and proposal", "Review and confirmation", "Bounded tool execution", "Persisted state and trace"],
      },
      implementation: [
        { title: "Deterministic decision layers", text: "Prioritization and scheduling are implemented as explicit engines, with the repository documenting multi-factor scoring, availability constraints, and scheduling strategies alongside model-assisted explanations." },
        { title: "Human-confirmed actions", text: "Action proposals pass through a ReviewerAgent gate. Canonical parameter hashes bind the reviewed proposal to execution and detect tampering or stale parameters." },
        { title: "Bounded recovery", text: "RecoveryAgent and its supporting engine limit recovery cycles, preventing an unsuccessful action from becoming an unbounded retry loop." },
      ],
      challenges: [
        { title: "Autonomy versus control", text: "The architecture keeps external action behind review and confirmation instead of allowing an unconstrained agent loop to mutate state." },
        { title: "Context without leakage", text: "Memory retrieval is scoped and paired with PII and secret scrubbing paths in the repository’s memory services." },
        { title: "Calendar safety", text: "Calendar data is treated as read-only availability input; task tools remain the action surface." },
      ],
      contribution:
        "The public repository is published under Hari-Milan-Arora. This portfolio attributes the repository implementation to Hari Milan Arora; the source does not document a separate role split.",
    },
  },
  {
    slug: "ai-interview-employee",
    label: "Mission 02 / Verified source",
    title: "AI Interview Employee",
    summary:
      "A multi-agent hiring intelligence platform for resume screening, adaptive technical interviews, and structured evaluation.",
    positioning: "Multi-agent hiring intelligence platform.",
    tags: ["AI engineering", "Hiring intelligence", "LangGraph"],
    techStack: [
      "FastAPI",
      "Python",
      "PyTorch",
      "LangGraph",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Qdrant",
      "Redis",
      "Docker",
      "n8n",
      "Ollama",
    ],
    capabilities: [
      "Planner, Executor, and Reviewer agents orchestrated with LangGraph.",
      "Resume screening and matching against job requirements.",
      "Adaptive technical interviews with multi-dimensional answer evaluation.",
      "ML-based hire prediction, bias detection, and evaluation consistency checks.",
    ],
    repository:
      "https://github.com/Hari-Milan-Arora/AEaas/tree/main/ai-interview-employee",
    code: "INTERVIEW / INTELLIGENCE",
    visual: "interview",
    caseStudy: {
      overview:
        "AI Interview Employee is a multi-agent hiring intelligence platform that combines adaptive interview workflows, machine-learning models, and an operational data layer.",
      problem:
        "The repository frames hiring as three connected problems: resume screening can be inconsistent, fixed interview flows do not adapt to responses, and evaluation needs structured checks for fairness and consistency.",
      solution:
        "A FastAPI service coordinates Planner, Executor, and Reviewer agents through LangGraph. The workflow connects resume matching, adaptive questions, multi-dimensional answer evaluation, hire prediction, bias checks, and automation hooks.",
      architecture: {
        summary:
          "The project presentation documents a frontend/API/agent/ML/data layout, with Docker Compose services around the application and supporting infrastructure.",
        nodes: [
          { label: "Frontend", detail: "Next.js 14, TypeScript, Tailwind CSS, React Query" },
          { label: "API", detail: "FastAPI, Python 3.11, Pydantic, auth and rate limiting" },
          { label: "Agents", detail: "Planner, Executor, Reviewer via LangGraph" },
          { label: "Models", detail: "PyTorch, Sentence-BERT, XGBoost, Llama3/Ollama" },
          { label: "Data services", detail: "PostgreSQL, Qdrant vector search, Redis queue" },
          { label: "Operations", detail: "Docker Compose, n8n automation, Prometheus metrics" },
        ],
        flow: ["Resume upload", "Match and qualify", "Adaptive interview", "Evaluate and predict", "Review bias and consistency", "Return decision and actions"],
      },
      implementation: [
        { title: "LangGraph workflow", text: "The documented three-agent flow gives planning, execution, and review separate responsibilities, with the executor feeding answer context back into the interview sequence." },
        { title: "Model-backed evaluation", text: "The project separates resume matching, answer evaluation, and hire prediction into distinct model responsibilities rather than treating the interview as one opaque prediction." },
        { title: "Operational boundaries", text: "PostgreSQL, Qdrant, and Redis are documented as separate data services, while Docker Compose and n8n support local orchestration and post-interview automation." },
      ],
      challenges: [
        { title: "Adaptive sequencing", text: "The interview loop must decide when to continue questioning and when to move to review, while preserving the candidate’s prior responses as context." },
        { title: "Evaluation consistency", text: "The documented reviewer stage combines bias detection and consistency validation so a final recommendation is not based on a single unexamined score." },
        { title: "Model and service coordination", text: "The system brings together API handling, agent state, model inference, vector search, queues, and local LLM configuration without collapsing those responsibilities into one layer." },
      ],
      contribution:
        "The project directory is published inside the user-provided GitHub source under Hari-Milan-Arora. Detailed individual role allocation is not separately documented in the inspected project files.",
    },
  },
  {
    slug: "econsultation-ai",
    label: "Mission 03 / Verified repository",
    title: "eConsultation AI",
    summary:
      "An AI-powered system for analyzing government consultation comments with sentiment analysis, summarization, and visualization.",
    positioning: "Smart Comment Analysis System.",
    tags: ["NLP", "Comment analysis", "Data visualization"],
    techStack: ["Python 3.11", "FastAPI 0.104.1", "React 18.2.0", "Docker"],
    capabilities: [
      "Single-comment submission and CSV bulk upload workflows.",
      "Sentiment labels, scores, stakeholder breakdowns, and trend views.",
      "AI-assisted summaries for consultation comments.",
      "Word-cloud and sentiment-specific visualization endpoints.",
    ],
    repository: "https://github.com/Hari-Milan-Arora/eConsultation-AI",
    code: "COMMENT / ANALYZE",
    visual: "consultation",
    caseStudy: {
      overview:
        "eConsultation AI is a Smart Comment Analysis System for government consultation feedback. Its public repository contains a React frontend, FastAPI backend, AI model utilities, SQLite persistence, visualization components, and Docker/deployment configuration.",
      problem:
        "Large sets of consultation comments are difficult to review consistently when sentiment, summaries, stakeholder context, and recurring topics must be assembled manually.",
      solution:
        "The system accepts individual comments or CSV uploads, processes them through sentiment and summarization paths, stores the results, and exposes dashboard, analytics, and word-cloud views for further inspection.",
      architecture: {
        summary:
          "The repository documents a frontend-to-FastAPI flow backed by AI model utilities, SQLite data persistence, generated visualization assets, and monitoring helpers.",
        nodes: [
          { label: "Frontend", detail: "React 18, Tailwind CSS, Recharts, Lucide React" },
          { label: "API", detail: "FastAPI on Uvicorn with async handlers and CORS" },
          { label: "Analysis", detail: "Transformer sentiment, summarization, and fallback paths" },
          { label: "Persistence", detail: "SQLite comments table, indexes, model/cache storage" },
          { label: "Views", detail: "Dashboard, comment cards, analytics, and word clouds" },
          { label: "Operations", detail: "Docker Compose, Nginx configuration, health and monitoring helpers" },
        ],
        flow: ["Comment or CSV input", "Validate and process", "Sentiment and summary", "Persist result", "Dashboard and visualization"],
      },
      implementation: [
        { title: "Input paths", text: "The documented application supports single-comment submission and bulk CSV upload, with frontend components for upload, comment display, dashboard views, and word-cloud presentation." },
        { title: "Model fallbacks", text: "The technical documentation describes transformer-backed sentiment and summarization alongside lighter fallback paths when the primary models are unavailable." },
        { title: "Analysis surface", text: "The repository includes API endpoints and frontend components for sentiment-filtered word clouds, dashboard statistics, comment summaries, and stakeholder-oriented analytics." },
      ],
      challenges: [
        { title: "Useful degradation", text: "The implementation documents fallback models and extractive processing so core analysis can remain available when heavier model paths are unavailable." },
        { title: "Bulk input reliability", text: "CSV validation and bulk-processing paths must preserve comment structure while surfacing errors instead of silently dropping feedback." },
        { title: "Model output to interface", text: "Sentiment labels, summaries, analytics, and generated word clouds need a shared data shape so the dashboard and individual comment views remain consistent." },
      ],
      contribution:
        "The public repository is published under Hari-Milan-Arora. The inspected documentation does not provide a separate contribution breakdown beyond the repository attribution.",
    },
  },
];
