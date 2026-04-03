import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing from Joeybuilt. More coming.",
};

export default function BlogPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-[family-name:var(--font-mono)] text-3xl font-bold text-base-100 md:text-4xl">
          Blog
        </h1>
        <p className="mt-6 text-lg text-base-400">More coming.</p>
        <p className="mt-2 text-base-500">
          When there is something worth saying, it will be here.
        </p>
      </div>
    </section>
  );
}
