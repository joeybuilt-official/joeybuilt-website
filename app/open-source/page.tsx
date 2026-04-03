import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Source",
  description:
    "Joeybuilt is built in the open. AGPL-3.0 licensed. Self-hosted users are first-class.",
};

const repos = [
  {
    name: "plexo",
    description: "AI orchestration, memory, and event infrastructure",
    href: "https://github.com/joeybuilt-official/plexo",
  },
  {
    name: "pushd",
    description: "AI-native deployment platform",
    href: "https://github.com/joeybuilt-official/pushd",
  },
  {
    name: "koforje",
    description: "AI-native IDE",
    href: "https://github.com/joeybuilt-official/koforje",
  },
  {
    name: "nexalog",
    description: "AI knowledge management",
    href: "https://github.com/joeybuilt-official/nexalog",
  },
  {
    name: "fylo",
    description: "Predictive personal finance",
    href: "https://github.com/joeybuilt-official/fylo",
  },
];

export default function OpenSourcePage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="font-[family-name:var(--font-mono)] text-3xl font-bold text-base-100 md:text-4xl">
            Open source
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-base-400">
            Joeybuilt is built in the open. The core products are licensed under
            AGPL-3.0 — you can read every line, self-host everything, and
            contribute back. The SaaS is how the company sustains itself.
            Self-hosted users are not second-class.
          </p>
        </div>
      </section>

      {/* Repos */}
      <section className="border-y border-base-800/40 bg-base-900/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 font-[family-name:var(--font-mono)] text-2xl font-bold text-base-100">
            Repositories
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-base-800/60 bg-base-900/50 p-5 transition-colors hover:border-base-700/80"
              >
                <h3 className="font-[family-name:var(--font-mono)] text-lg font-semibold text-accent-400 group-hover:text-accent-300">
                  joeybuilt-official/{repo.name}
                </h3>
                <p className="mt-1 text-sm text-base-400">
                  {repo.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AGPL */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-[family-name:var(--font-mono)] text-2xl font-bold text-base-100">
            Why AGPL-3.0
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-base-400">
            <p>
              AGPL ensures that if someone runs a modified version of the
              software as a service, they must share their changes. This
              protects the community&apos;s investment in the codebase while
              keeping everything open.
            </p>
            <p>
              You can self-host Plexo and every Joeybuilt product without
              restriction. You can modify it for your own use. If you offer it
              as a service to others, your changes must be open-sourced under
              the same license. That&apos;s the deal.
            </p>
          </div>

          <h2 className="mt-16 font-[family-name:var(--font-mono)] text-2xl font-bold text-base-100">
            Contributing
          </h2>
          <div className="mt-6 max-w-2xl text-base-400">
            <p>
              Every repo in the{" "}
              <a
                href="https://github.com/joeybuilt-official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 hover:text-accent-300"
              >
                joeybuilt-official
              </a>{" "}
              org accepts contributions. Start with an issue. Read the
              CONTRIBUTING.md in the repo you&apos;re interested in. The
              codebase is TypeScript end-to-end — if you can write TypeScript,
              you can contribute.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
