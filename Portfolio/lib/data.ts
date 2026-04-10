export const siteConfig = {
  name: "Hari Milan Arora",
  title: "Hari Milan Arora | Systems Builder and AI-First Founder",
  description:
    "Founder-level portfolio for Hari Milan Arora. AI-first systems, product execution, and the venture-scale thesis behind AEAAS.",
  // Replace these three fields when the live domain, preferred inbox, and AEAAS site are ready.
  url: "https://harimilanarora.com",
  email: "hello@harimilanarora.com",
  aeaasUrl: "https://example.com",
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/aeaas", label: "AEAAS" },
  { href: "/contact", label: "Contact" },
];

export const currentFocus = [
  {
    label: "Venture",
    title: "AEAAS",
    description:
      "The main build: an AI-first operating layer designed to turn fragmented execution into scalable, compounding systems.",
  },
  {
    label: "Infrastructure",
    title: "Decision-grade AI products",
    description:
      "Products that reduce cognitive drag, surface better decisions faster, and behave like infrastructure rather than novelty.",
  },
  {
    label: "Direction",
    title: "Leverage that survives growth",
    description:
      "Systems built for repeatability from day one, so scale strengthens the model instead of breaking it.",
  },
];

export const thinkingModels = [
  {
    title: "Build leverage before scale.",
    description:
      "Scaling an inefficient system just multiplies noise. The right sequence is clearer thinking, tighter infrastructure, then volume.",
  },
  {
    title: "Products should make decisions easier.",
    description:
      "The strongest products do more than automate tasks. They reduce ambiguity, compress decision cycles, and raise the quality of action.",
  },
  {
    title: "Execution matters most when it compounds.",
    description:
      "Shipping fast is useful. Shipping something that gets stronger with each cycle is where durable advantage actually starts.",
  },
];

export const homeProof = [
  {
    value: "2",
    label: "AI systems in market-facing form",
    description:
      "Both projects target real workflow bottlenecks and were designed as products, not portfolio filler.",
  },
  {
    value: "1",
    label: "Primary venture under active build",
    description:
      "AEAAS acts as the strategic center of gravity, aligning current execution with a larger long-term platform.",
  },
  {
    value: "End-to-end",
    label: "Ownership across the full stack",
    description:
      "Strategy, product framing, interface direction, and execution are treated as one continuous operating layer.",
  },
  {
    value: "Compounding",
    label: "Bias toward durable advantage",
    description:
      "The target is not one-time output. The target is systems that continue creating value after the initial build.",
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
          "A product only becomes valuable when it can absorb complexity without becoming fragile. That means designing for repeatability from the start.",
      },
      {
        title: "Clarity as a competitive edge",
        description:
          "Clear framing shortens the path to good decisions. It also removes wasted movement across product, engineering, and operations.",
      },
    ],
  },
  {
    eyebrow: "What I Optimize For",
    title: "Leverage, speed to learning, and durable moats.",
    description:
      "Effort matters. But effort without leverage does not scale. The operating priority is to build systems that improve the ratio between input and result.",
    points: [
      {
        title: "Leverage",
        description:
          "Every product decision is judged by whether it increases the amount of value created per unit of attention, time, or effort.",
      },
      {
        title: "Learning velocity",
        description:
          "Fast iteration only matters when it sharpens judgment. The goal is not activity. The goal is faster access to truth.",
      },
      {
        title: "Durability",
        description:
          "Temporary spikes are easy to fake. Durable products come from decisions that continue paying off as complexity increases.",
      },
    ],
  },
  {
    eyebrow: "What I'm Building Toward",
    title: "A venture that behaves like infrastructure.",
    description:
      "The long-term arc is not freelance work, job-seeking, or isolated shipping. It is the creation of a company with structural advantage.",
    points: [
      {
        title: "AI-native operating systems",
        description:
          "Products that remove operational drag and make high-quality execution accessible, consistent, and scalable.",
      },
      {
        title: "A platform with asymmetric upside",
        description:
          "The best venture paths are those where each layer makes the next one cheaper, faster, and harder to replicate.",
      },
      {
        title: "AEAAS as the central vehicle",
        description:
          "AEAAS is where the thesis becomes concrete: intelligence, automation, and system design turned into a venture-scale product direction.",
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
  insight: string;
  leverage: string;
  outcome: string;
  tags: string[];
  details: {
    label: "Problem" | "Insight" | "Solution" | "Leverage" | "Outcome";
    text: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "ai-board-meeting-slide-generator",
    label: "Selected Work",
    title: "AI Board Meeting Slide Generator",
    summary:
      "Board reporting is still slowed down by repetitive deck creation, fragmented inputs, and time lost translating business context into presentation-ready narratives.",
    positioning:
      "This system reframes board preparation as a structured intelligence workflow, where raw updates become board-ready communication without the usual manual drag.",
    insight:
      "Leaders should spend time deciding what matters, not rebuilding the same presentation mechanics every cycle.",
    leverage:
      "Once the workflow is systematized, each reporting cycle becomes faster, more consistent, and easier to scale across teams.",
    outcome:
      "The result is a clearer path from operational data to executive communication, with stronger consistency and less wasted effort every reporting cycle.",
    tags: ["AI workflow", "Decision support", "Executive tooling"],
    details: [
      {
        label: "Problem",
        text: "Board meetings demand clarity and speed, but the path to a polished deck is usually manual, repetitive, and vulnerable to inconsistency.",
      },
      {
        label: "Insight",
        text: "The real problem is not slide design. It is the translation layer between scattered business inputs and the narrative required for executive decisions.",
      },
      {
        label: "Solution",
        text: "An AI-assisted system that structures raw updates, identifies the signal, and turns them into coherent slide content with board-level framing.",
      },
      {
        label: "Leverage",
        text: "The more often the system is used, the more reusable the reporting logic becomes. That turns a recurring bottleneck into repeatable infrastructure.",
      },
      {
        label: "Outcome",
        text: "Early execution signals point to tighter reporting cycles, less manual formatting overhead, and a more reliable standard for communicating decisions upward.",
      },
    ],
  },
  {
    slug: "econsultation-ai",
    label: "Selected Work",
    title: "eConsultation AI",
    summary:
      "Consultation workflows often lose time to fragmented context, slow information gathering, and inconsistent preparation before a real recommendation can even begin.",
    positioning:
      "eConsultation AI treats prep work as an intelligence problem, compressing the time between initial case intake and useful clinical or operational direction.",
    insight:
      "When context arrives late or incomplete, expertise gets spent on reconstruction instead of decision quality.",
    leverage:
      "Better context packaging improves every downstream action, from faster recommendations to cleaner collaboration across stakeholders.",
    outcome:
      "The product shows how AI can remove administrative friction while protecting the core human value: better judgment applied at the right moment.",
    tags: ["Health workflow", "AI assistance", "Operational efficiency"],
    details: [
      {
        label: "Problem",
        text: "Consultation processes are slowed down by scattered records, repeated intake work, and too much time spent reconstructing what should already be clear.",
      },
      {
        label: "Insight",
        text: "The highest-value experts should not be spending their attention assembling context. They should be using it to make better decisions.",
      },
      {
        label: "Solution",
        text: "An AI-assisted consultation layer that organizes relevant inputs, surfaces the important details, and prepares the case for faster downstream action.",
      },
      {
        label: "Leverage",
        text: "Once context is structured well, the same system improves speed, consistency, and handoff quality across the full consultation pipeline.",
      },
      {
        label: "Outcome",
        text: "The early signal is simple: less friction before the real work begins, and more of the workflow dedicated to judgment instead of reconstruction.",
      },
    ],
  },
];

export const aeaasPage = {
  summary:
    "AEAAS is the venture where product thinking, AI infrastructure, and leverage-focused execution converge into one operating thesis.",
  pillars: [
    {
      title: "AI as infrastructure",
      description:
        "The goal is not novelty. The goal is to build systems that make intelligence available where execution usually breaks down.",
    },
    {
      title: "Compounding workflows",
      description:
        "Each layer should reduce friction for the next. Better inputs lead to better decisions, which lead to better outputs, which strengthen the system over time.",
    },
    {
      title: "Venture-scale intent",
      description:
        "AEAAS is designed as a long-term platform direction, not a short-term experiment. The ambition is structural advantage, not temporary attention.",
    },
  ],
  outcomes: [
    {
      label: "01",
      title: "Higher-quality execution at lower operating drag",
      description:
        "AEAAS aims to reduce the overhead that keeps capable teams from moving at the speed their decisions require.",
    },
    {
      label: "02",
      title: "Clearer decision pathways",
      description:
        "When intelligence is structured properly, action becomes faster, cleaner, and less dependent on heroic individual effort.",
    },
    {
      label: "03",
      title: "A stronger base for scale",
      description:
        "Scale stops being a source of chaos when the core system is designed to carry more load without multiplying complexity.",
    },
    {
      label: "04",
      title: "A foundation for durable company building",
      description:
        "The venture is built to support a broader company thesis: products that become part of how meaningful work gets done.",
    },
  ],
};
