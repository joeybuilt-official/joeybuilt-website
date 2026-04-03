import type { Product } from "@/lib/products";
import { StatusBadge } from "./StatusBadge";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group rounded-xl border border-base-800/60 bg-base-900/50 p-6 transition-colors hover:border-base-700/80">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="font-[family-name:var(--font-mono)] text-xl font-semibold text-base-100">
          {product.name}
        </h3>
        <StatusBadge status={product.status} label={product.statusLabel} />
      </div>

      <p className="mb-1 font-[family-name:var(--font-mono)] text-sm text-accent-500">
        {product.tagline}
      </p>

      <p className="mb-4 text-sm leading-relaxed text-base-400">
        {product.description}
      </p>

      <div className="flex flex-wrap items-center gap-3 text-sm">
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-400 transition-colors hover:text-accent-300"
        >
          {product.url.replace("https://", "")}
        </a>
        {product.github && (
          <a
            href={`https://github.com/${product.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base-500 transition-colors hover:text-base-300"
          >
            GitHub &rarr;
          </a>
        )}
      </div>
    </article>
  );
}
