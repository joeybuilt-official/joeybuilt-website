import type { Metadata } from "next";
import { EcosystemDiagram } from "@/components/EcosystemDiagram";

export const metadata: Metadata = {
  title: "Plexo",
  description:
    "AI orchestration, memory, agent execution, and event infrastructure. The backbone that lets you build real software with AI agents.",
};

export default function PlexoPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest text-accent-500">
            The backbone
          </p>
          <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-mono)] text-3xl font-bold text-base-100 md:text-5xl">
            Your apps. Your agents. One foundation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-base-400">
            Plexo is the shared infrastructure layer that makes it possible to
            build and run interconnected products with AI at every level. One
            database. One agent pool. One event bus. One identity layer. Your
            apps plug in and inherit all of it.
          </p>
        </div>
      </section>

      <section className="border-y border-base-800/40 bg-base-900/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 font-[family-name:var(--font-mono)] text-2xl font-bold text-base-100">
            App Profile architecture
          </h2>
          <p className="mb-12 max-w-2xl text-base-400">
            Every app on Plexo is an App Profile. Each gets its own schema, its
            own agent scope, its own keyspace. But they share auth, share
            memory, and share the ability to talk to each other. Build one app
            or build ten &mdash; they all run on the same foundation.
          </p>
          <EcosystemDiagram />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="font-[family-name:var(--font-mono)] text-lg font-semibold text-base-100">
                Agent execution
              </h3>
              <p className="mt-2 text-base-400">
                Long-running agents with persistent memory, tool access, and
                channel subscriptions. Agents work across App Profiles &mdash; a
                finance agent can trigger a task, a knowledge agent can enrich a
                document. They don&apos;t just respond. They operate.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-mono)] text-lg font-semibold text-base-100">
                plexoDID
              </h3>
              <p className="mt-2 text-base-400">
                Federated identity across Plexo nodes. Every node has a
                decentralized identifier. Agents, users, and services
                authenticate across the mesh without a central authority.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-mono)] text-lg font-semibold text-base-100">
                Extensions
              </h3>
              <p className="mt-2 text-base-400">
                Agents, Skills, Channels, Tools, Connectors &mdash; individually
                installable units that extend what Plexo can do. Build your own.
                Share them with the community. The ecosystem gets more capable as
                more people build on it.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-mono)] text-lg font-semibold text-base-100">
                Telemetry
              </h3>
              <p className="mt-2 text-base-400">
                Honest, opt-in, documented publicly. Self-hosted users send
                nothing by default. The telemetry spec is in{" "}
                <code className="font-[family-name:var(--font-mono)] text-accent-400">
                  TELEMETRY.md
                </code>{" "}
                in the repo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-base-800/40 bg-base-900/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-[family-name:var(--font-mono)] text-2xl font-bold text-base-100">
            Run it yourself
          </h2>
          <p className="mt-4 max-w-2xl text-base-400">
            Plexo ships as Docker Compose. Clone the repo, set your env vars,
            docker compose up. Self-hosted users are first-class &mdash; the
            SaaS is how the lights stay on, not the priority.
          </p>
          <pre className="mt-6 overflow-x-auto rounded-lg border border-base-800 bg-base-950 p-4 font-[family-name:var(--font-mono)] text-sm text-base-300">
            <code>{`git clone https://github.com/joeybuilt-official/plexo.git
cd plexo/infra
cp .env.example .env    # configure your secrets
docker compose up -d`}</code>
          </pre>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/joeybuilt-official/plexo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-2.5 font-[family-name:var(--font-mono)] text-sm font-medium text-base-950 transition-colors hover:bg-accent-400"
            >
              GitHub repo
            </a>
            <a
              href="https://getplexo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-base-700 px-5 py-2.5 font-[family-name:var(--font-mono)] text-sm font-medium text-base-200 transition-colors hover:border-base-500 hover:text-base-50"
            >
              Managed SaaS
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
