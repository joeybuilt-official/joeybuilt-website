export type ProductStatus = "live" | "beta" | "development" | "spec";

export interface Product {
  name: string;
  tagline: string;
  description: string;
  url: string;
  github?: string;
  status: ProductStatus;
  statusLabel: string;
  audience: string;
  cta?: { label: string; href: string }[];
}

export const products: Product[] = [
  {
    name: "Plexo",
    tagline: "The backbone.",
    description:
      "AI orchestration, memory, channels, agent execution, and event infrastructure for the entire Joeybuilt ecosystem. Self-hosted or SaaS. Every other Joeybuilt product is a Plexo App Profile.",
    url: "https://getplexo.com",
    github: "joeybuilt-official/plexo",
    status: "beta",
    statusLabel: "Beta — self-host now",
    audience: "Developers",
    cta: [
      { label: "Self-host Plexo", href: "https://github.com/joeybuilt-official/plexo" },
      { label: "Join the beta", href: "https://getplexo.com" },
    ],
  },
  {
    name: "Fylo",
    tagline: "Predictive personal finance.",
    description:
      "Connects your accounts, understands your patterns, predicts your future. Intelligent recurring transaction detection, merchant enrichment, AI categorization, and Gmail-synced document extraction.",
    url: "https://myfylo.com",
    status: "development",
    statusLabel: "Early access",
    audience: "Consumers",
  },
  {
    name: "Fonto",
    tagline: "Everything flows here.",
    description:
      "Document and digital asset management — the intake layer for the ecosystem. Receipts flow to Fylo. Knowledge artifacts flow to Nexalog. Action items flow to Plexo.",
    url: "https://myfonto.com",
    status: "development",
    statusLabel: "In development",
    audience: "Consumers & power users",
  },
  {
    name: "Nexalog",
    tagline: "Your second brain, with a backbone.",
    description:
      "Personal knowledge management built for how you actually think — not how note apps want you to think. All intelligence powered by Plexo.",
    url: "https://nexalog.com",
    github: "joeybuilt-official/nexalog",
    status: "development",
    statusLabel: "In development",
    audience: "Knowledge workers",
  },
  {
    name: "Levio",
    tagline: "Email, tasks, and calendar — unified.",
    description:
      "Gmail and Outlook sync, AI scheduling, intelligent task management. Built to do what the current generation of productivity tools can't: think.",
    url: "https://mylevio.com",
    status: "development",
    statusLabel: "In development",
    audience: "Professionals",
  },
  {
    name: "Koforje",
    tagline: "The AI-native IDE.",
    description:
      "LSP-native, agent-capable, built for the way software is actually written now. \"Ko\" evokes co-creation between developer and AI.",
    url: "https://koforje.com",
    github: "joeybuilt-official/koforje",
    status: "spec",
    statusLabel: "Spec complete, build imminent",
    audience: "Developers",
  },
  {
    name: "Pushd",
    tagline: "AI-native deployment.",
    description:
      "Competes with Netlify and Coolify. Plexo-optional — AI features activate when configured. Built for the teams that want deployment to think.",
    url: "https://pushd.sh",
    github: "joeybuilt-official/pushd",
    status: "development",
    statusLabel: "Architecture complete",
    audience: "Developers & DevOps",
  },
  {
    name: "Plexo Fabric",
    tagline: "The open extension framework.",
    description:
      "Individual installable units — Agents, Skills, Channels, Tools, Connectors — that extend Plexo. Community-extensible. The WordPress plugin model, rebuilt for AI-native infrastructure.",
    url: "https://getplexo.com",
    status: "development",
    statusLabel: "In development",
    audience: "Developers & ecosystem contributors",
  },
];
