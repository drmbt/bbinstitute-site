import Link from "next/link";

import { Section } from "@/components/Section";
import { impactMetrics, impactPillars } from "@/content/impact";

export default function ImpactPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="surface-card space-y-6">
          <p className="section-eyebrow">Impact</p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-stone-50 sm:text-6xl">
            A cultural experiment with measurable local force.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-stone-300">
            Beyond cultural value, the Institute contributes directly to the town&apos;s
            economic vitality while shaping cultural influence and sustained community
            programming.
          </p>
        </div>
      </section>

      <Section
        eyebrow="At a glance"
        title="Signals of scale"
        description="These metrics anchor the story in participation, grants, and public reach."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {impactMetrics.map((stat) => (
            <article key={stat.label} className="surface-card">
              <p className="text-3xl font-semibold text-stone-50">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-stone-400">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Impact pillars"
        title="Why the work matters beyond the event itself."
        description="Economic impact, cultural influence, and community programming move together here."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {impactPillars.map((pillar) => (
            <article key={pillar.title} className="surface-card space-y-4">
              <h2 className="text-2xl font-semibold text-stone-50">{pillar.title}</h2>
              <p className="text-sm leading-7 text-stone-300">{pillar.summary}</p>
              <ul className="space-y-3 text-sm leading-7 text-stone-200">
                {pillar.points.map((point) => (
                  <li key={point} className="rounded-2xl border border-white/10 px-4 py-3">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Next step"
        title="Support the conditions that make this possible."
        description="The impact story is strongest when paired with a concrete funding invitation."
      >
        <div className="surface-card flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-3xl text-base leading-8 text-stone-300">
            Support helps the Institute grow responsibly while preserving the
            non-commercial spirit that made the movement possible in the first place.
          </p>
          <Link href="/support" className="button-primary w-fit">
            Go to support
          </Link>
        </div>
      </Section>
    </main>
  );
}
