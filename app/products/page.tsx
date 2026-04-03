import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { platform, builtOnPlexo } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "The platform that lets you build software with AI agents — plus the products we built to prove it works.",
};

export default function ProductsPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="font-[family-name:var(--font-mono)] text-3xl font-bold text-base-100 md:text-4xl">
          Products
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-base-400">
          Three tools to build with. Four products that prove it works.
          Everything runs on Plexo &mdash; the shared backbone that connects
          your apps, agents, and data.
        </p>

        <div className="mt-16">
          <p className="font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest text-accent-500">
            The platform
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {platform.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <p className="font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest text-accent-500">
            Built on Plexo
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {builtOnPlexo.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
