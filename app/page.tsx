import Link from "next/link";
import { EcosystemDiagram } from "@/components/EcosystemDiagram";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pb-12 pt-24 md:pb-20 md:pt-36">
          <h1 className="max-w-3xl font-[family-name:var(--font-mono)] text-4xl font-bold leading-tight tracking-tight text-base-50 md:text-6xl">
            One person built this.
            <br />
            <span className="text-accent-500">All of it.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-base-400 md:text-xl">
            Eight interconnected products sharing infrastructure, identity, and
            intelligence through a single backbone. What used to take a funded
            team and years now moves at a pace that shouldn&apos;t be possible.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/joeybuilt-official/plexo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-2.5 font-[family-name:var(--font-mono)] text-sm font-medium text-base-950 transition-colors hover:bg-accent-400"
            >
              Self-host Plexo
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
              The ecosystem
            </h2>
            <p className="mt-3 text-base-400">
              Every product is a Plexo App Profile — not a separate system.
              <br className="hidden md:block" />
              One database. One auth layer. One agent pool. One backbone.
            </p>
          </div>
          <EcosystemDiagram />
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 font-[family-name:var(--font-mono)] text-2xl font-bold text-base-100 md:text-3xl">
            Products
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Plexo Callout */}
      <section className="border-y border-base-800/40 bg-base-900/30 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest text-accent-500">
            The backbone
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-mono)] text-3xl font-bold text-base-100 md:text-4xl">
            Plexo makes it possible
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-base-400">
            AI orchestration, memory, event infrastructure, and agent execution.
            Self-host it. Extend it with Fabric. Or use the managed SaaS. Plexo
            is the reason one person can build an ecosystem.
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
      <section className="py-16">
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
