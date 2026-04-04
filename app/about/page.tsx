import type { Metadata } from "next";
import { JoeDedication } from "@/components/JoeDedication";

export const metadata: Metadata = {
  title: "About",
  description:
    'Built by Dustin Olenslager. Named for Joe "Joey" Ipson — a self-taught engineer who solved real problems and shipped real things.',
};

export default function AboutPage() {
  return (
    <>
      {/* Founder */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-[family-name:var(--font-mono)] text-3xl font-bold text-base-100 md:text-4xl">
            About
          </h1>

          <div className="mt-10 space-y-5 text-lg leading-relaxed text-base-300">
            <p>
              I&apos;m not a traditional software engineer. I&apos;m a builder
              who learned what I needed to build what I imagined.
            </p>
            <p>
              AI changed the equation &mdash; not by replacing the work, but by
              letting one person hold more of it at once. Architecture,
              frontend, backend, infrastructure, data modeling, agent systems.
              The breadth that used to require a team became something one person
              could actually maintain, if that person was willing to work at the
              pace the tools now allow.
            </p>
            <p>
              Joeybuilt is what happens when you combine that with a reason to
              build.
            </p>
            <p>
              Eight products. One shared backbone. Real users. Real
              infrastructure. All of it maintained by one person. Not because
              I&apos;m trying to prove something about solo founders &mdash; but
              because the tools finally let someone like me build at the scale
              of what I can imagine, not the scale of what I can hire.
            </p>
            <p>
              The hard part is not the code. The hard part is holding the whole
              system in your head &mdash; the data flows, the failure modes, the
              user experience across eight interconnected products. AI makes the
              typing faster. Caring about the craft is still on you.
            </p>
          </div>

          <p className="mt-10 font-[family-name:var(--font-mono)] text-sm text-base-500">
            &mdash; Dustin Olenslager, founder
          </p>
        </div>
      </section>

      {/* Joe's dedication — visually distinct */}
      <JoeDedication />
    </>
  );
}
