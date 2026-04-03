import Link from "next/link";
import { EcosystemDiagram } from "@/components/EcosystemDiagram";
import { ProductCard } from "@/components/ProductCard";
import { platform, builtOnPlexo } from "@/lib/products";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pb-12 pt-24 md:pb-20 md:pt-36">
          <h1 className="max-w-4xl font-[family-name:var(--font-mono)] text-4xl font-bold leading-tight tracking-tight text-base-50 md:text-6xl">
            One founder and a team of agents
            <br />
            <span className="text-accent-500">built all of this.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-base-400 md:text-xl">
            Now we&apos;re building the tools so you can do it too. An IDE that
            thinks with you. A backbone that runs your agents. A deploy platform
            that gets out of the way. Everything you need to go from idea to
            shipped product &mdash; with AI that actually participates.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/joeybuilt-official/plexo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-2.5 font-[family-name:var(--font-mono)] text-sm font-medium text-base-950 transition-colors hover:bg-accent-400"
            >
              Start with Plexo
            </a>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg border border-base-700 px-5 py-2.5 font-[family-name:var(--font-mono)] text-sm font-medium text-base-200 transition-colors hover:border-base-500 hover:text-base-50"
            >
              See what we&apos;re building
            </Link>
          </div>
        </div>
      </section>

      {/* Ecosystem Diagram */}
      <section className="border-y border-base-800/40 bg-base-900/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="font-[family-name:var(--font-mono)] text-2xl font-bold text-base-100 md:text-3xl">
              One backbone. Everything connected.
            </h2>
            <p className="mt-3 text-base-400">
              Plexo is the shared infrastructure layer. Your apps, your agents,
              your data &mdash;
              <br className="hidden md:block" />
              all running on the same foundation. Not bolted together.
              Integrated.
            </p>
          </div>
          <EcosystemDiagram />
        </div>
      </section>

      {/* Platform — The Tools */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest text-accent-500">
            The platform
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-mono)] text-2xl font-bold text-base-100 md:text-3xl">
            Everything you need to build
          </h2>
          <p className="mt-3 max-w-2xl text-base-400">
            An AI backbone, a code editor, and a deploy platform. Three tools
            that work together so you can build real software with agents at
            every layer.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {platform.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Built on Plexo — The Proof */}
      <section className="border-y border-base-800/40 bg-base-900/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest text-accent-500">
            Built on Plexo
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-mono)] text-2xl font-bold text-base-100 md:text-3xl">
            We use our own tools
          </h2>
          <p className="mt-3 max-w-2xl text-base-400">
            Four products &mdash; finance, documents, knowledge, productivity
            &mdash; all built by one person using the same platform we&apos;re
            giving you. This is the proof that it works.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {builtOnPlexo.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-[family-name:var(--font-mono)] text-3xl font-bold text-base-100 md:text-4xl">
            What will you build?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-base-400">
            The tools that let one person build an ecosystem of products are
            becoming the tools that let anyone build anything. Start with Plexo.
            See where it takes you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/joeybuilt-official/plexo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-2.5 font-[family-name:var(--font-mono)] text-sm font-medium text-base-950 transition-colors hover:bg-accent-400"
            >
              Star on GitHub
            </a>
            <a
              href="https://getplexo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-base-700 px-5 py-2.5 font-[family-name:var(--font-mono)] text-sm font-medium text-base-200 transition-colors hover:border-base-500 hover:text-base-50"
            >
              Join the beta
            </a>
          </div>
        </div>
      </section>

      {/* Founder Anchor */}
      <section className="border-t border-base-800/40 py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-base-500">
            Built by{" "}
            <Link
              href="/about"
              className="text-base-300 underline underline-offset-4 transition-colors hover:text-accent-400"
            >
              Dustin Olenslager
            </Link>
            . Named for someone who showed him what building means.
          </p>
        </div>
      </section>
    </>
  );
}
