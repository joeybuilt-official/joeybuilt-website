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
  hasLiveSite?: boolean;
}

// The platform — what enables you to build
export const platform: Product[] = [
  {
    name: "Plexo",
    tagline: "The backbone.",
    description:
      "AI orchestration, memory, agent execution, and event infrastructure. The shared layer that connects everything — your apps, your agents, your data. Self-host it or use the managed SaaS.",
    url: "https://getplexo.com",
    github: "joeybuilt-official/plexo",
    status: "beta",
    statusLabel: "Beta — self-host now",
    audience: "Developers",
    hasLiveSite: true,
  },
  {
    name: "Koforje",
    tagline: "The AI-native IDE.",
    description:
      "LSP-native, agent-capable, built for the way software is actually written now. Your agents live where your code lives. Co-creation between you and AI, not bolted-on autocomplete.",
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
      "From code to production with agents that understand your infrastructure. Plexo-optional — AI features activate when connected. Built for the teams that want deployment to think.",
    url: "https://pushd.sh",
    github: "joeybuilt-official/pushd",
    status: "development",
    statusLabel: "Architecture complete",
    audience: "Developers & DevOps",
  },
];

// Built on Plexo — proof that it works
export const builtOnPlexo: Product[] = [
  {
    name: "Fylo",
    tagline: "Predictive personal finance.",
    description:
      "Connects your accounts, understands your patterns, predicts your future. Intelligent recurring transaction detection, merchant enrichment, AI categorization.",
    url: "https://myfylo.com",
    status: "development",
    statusLabel: "Early access",
    audience: "Consumers",
    hasLiveSite: true,
  },
  {
    name: "Fonto",
    tagline: "Everything flows here.",
    description:
      "Document and digital asset management — the intake layer. Receipts flow to Fylo. Knowledge flows to Nexalog. Action items flow to Plexo.",
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
    hasLiveSite: true,
  },
];

export const allProducts = [...platform, ...builtOnPlexo];
