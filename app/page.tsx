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
            Your apps should
            <br />
            <span className="text-accent-500">actually talk to each other.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-base-400 md:text-xl">
            Finance, docs, knowledge, email, tasks &mdash; connected at
            the root instead of duct-taped at the edges. Joeybuilt apps
            share data, share intelligence, and get smarter the more you
            use them.
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
              See the products
            </Link>
          </div>
        </div>
      </section>

      {/* Ecosystem Diagram */}
      <section className="border-y border-base-800/40 bg-base-900/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="font-[family-name:var(--font-mono)] text-2xl font-bold text-base-100 md:text-3xl">
              One engine. Zero duct tape.
            </h2>
            <p className="mt-3 text-base-400">
              Plexo connects your apps, agents, and data at the
              infrastructure level &mdash;
              <br className="hidden md:block" />
              not through brittle integrations. One foundation. Everything
              flows.
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
            The stack under the stack
          </h2>
          <p className="mt-3 max-w-2xl text-base-400">
            AI engine. Code editor. Deploy platform. Three tools that
            handle the infrastructure so you can focus on the product.
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
            Apps that fix real problems
          </h2>
          <p className="mt-3 max-w-2xl text-base-400">
            Finance, documents, knowledge, productivity &mdash; each one
            built to replace a broken workflow. Together, they replace the
            mess of disconnected tools running your digital life.
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
            Stop managing tools.
            <br />
            Start getting things done.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-base-400">
            Plexo is open source and ready to run. The apps are rolling out
            now. Pick the problem you want solved first.
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
            . Named for{" "}
            <Link
              href="/about"
              className="text-base-300 underline underline-offset-4 transition-colors hover:text-accent-400"
            >
              Joe &ldquo;Joey&rdquo; Ipson
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
