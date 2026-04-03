import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Eight interconnected products — finance, knowledge, productivity, development tools — all powered by Plexo.",
};

export default function ProductsPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="font-[family-name:var(--font-mono)] text-3xl font-bold text-base-100 md:text-4xl">
          Products
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-base-400">
          Every product is a Plexo App Profile — sharing identity,
          infrastructure, and intelligence through a single backbone. They are
          not separate apps bolted together. They are one system.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
