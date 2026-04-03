import type { ProductStatus } from "@/lib/products";

const styles: Record<ProductStatus, string> = {
  live: "bg-live/15 text-live border-live/30",
  beta: "bg-accent-500/15 text-accent-400 border-accent-500/30",
  development: "bg-dev/15 text-dev border-dev/30",
  spec: "bg-spec/15 text-spec border-spec/30",
};

export function StatusBadge({
  status,
  label,
}: {
  status: ProductStatus;
  label: string;
}) {
  return (
    <span
      className={`inline-block rounded-full border px-3 py-0.5 font-[family-name:var(--font-mono)] text-xs ${styles[status]}`}
    >
      {label}
    </span>
  );
}
