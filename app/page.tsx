import Link from "next/link";

import { Section } from "@/components/Section";
import { impactMetrics } from "@/content/impact";
import { advisors, boardDirectors, coFounders, founders, type TeamMember } from "@/content/team";
import {
  budget,
  hero,
  impactPreview,
  institute,
  mission,
  origin,
  snapshot,
  supportCta,
  timeline,
} from "@/content/home";
import { homeNavigation, site } from "@/content/site";

function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {members.map((member) => (
        <article key={`${member.name}-${member.bio}`} className="surface-card space-y-3">
          <h3 className="text-xl font-semibold text-stone-50">{member.name}</h3>
          {member.role ? <p className="text-sm text-amber-200">{member.role}</p> : null}
          <p className="text-sm leading-7 text-stone-300">{member.bio}</p>
        </article>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="space-y-8 lg:max-w-5xl">
          <p className="section-eyebrow">{hero.eyebrow}</p>
          <div className="space-y-6">
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-stone-50 sm:text-6xl lg:text-7xl">
              {hero.title}
            </h1>
            <p className="max-w-2xl text-xl text-amber-100/90">{hero.subtitle}</p>
            <p className="max-w-3xl text-lg leading-8 text-stone-300">{hero.intro}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href={hero.primaryCta.href} className="button-primary">
              {hero.primaryCta.label}
            </Link>
            <Link href={hero.secondaryCta.href} className="button-secondary">
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>
        <div className="surface-card mt-8 flex max-h-[100svh] flex-col justify-between gap-5 bg-gradient-to-br from-amber-200/10 via-white/[0.06] to-transparent md:hidden">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Year X</p>
            <p className="text-sm leading-6 text-stone-300">
              The ten year anniversary of the Biennale. The Institute produces three
              months of free and public programming in Bombay Beach while expanding its
              year-round commitment to place.
            </p>
          </div>
          <div className="grid gap-2.5 text-sm text-stone-200">
            {homeNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-2.5 transition hover:border-white/30 hover:bg-white/5"
              >
                <span>{item.label}</span>
                <span aria-hidden="true">/</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Section id="mission" eyebrow="Mission" title={mission.title}>
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="surface-card space-y-5">
            {mission.body.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-stone-300">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="surface-card">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">
              Core principles
            </p>
            <ul className="mt-4 space-y-3 text-base leading-7 text-stone-200">
              {mission.principles.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 px-4 py-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="scale"
        title={snapshot.title}
        description={snapshot.description}
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {snapshot.stats.map((stat) => (
            <article key={stat.label} className="surface-card">
              <p className="text-3xl font-semibold text-stone-50">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-stone-400">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
        <div className="surface-card grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">
              Year X programs
            </p>
            <h3 className="text-2xl font-semibold text-stone-100">
              A multi-day gathering built from a full creative season.
            </h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {snapshot.programs.map((program) => (
              <div
                key={program}
                className="rounded-2xl border border-white/10 px-4 py-4 text-sm text-stone-200"
              >
                {program}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="budget"
        eyebrow="Budget and why now"
        title={budget.title}
        description={budget.intro}
        className="lg:min-h-[100svh] lg:justify-center lg:gap-5 lg:py-10"
        copyClassName="lg:max-w-5xl lg:space-y-3"
      >
        <div className="grid gap-3 lg:grid-cols-2 lg:gap-4">
          {budget.items.map((item) => (
            <article
              key={item.name}
              className="surface-card space-y-1.5 px-3.5 py-2.5 lg:space-y-1 lg:px-3.5 lg:py-2.5"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-stone-50 lg:text-[15px]">
                    {item.name}
                  </h3>
                  <p className="mt-0.5 max-w-3xl text-sm leading-5 text-stone-300 lg:text-[11px] lg:leading-4">
                    {item.detail}
                  </p>
                </div>
                <p className="text-lg font-semibold text-amber-200 lg:text-base">{item.percent}%</p>
              </div>
              <div className="h-1.5 rounded-full bg-white/10">
                <div
                  className="h-1.5 rounded-full bg-amber-300"
                  style={{ width: `${item.percent}%` }}
                />
              </div>
              <p className="text-xs text-stone-400 lg:text-[10px] lg:leading-4">
                Impact: {item.impact}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="origin"
        eyebrow="Origin story"
        title={origin.title}
        description={origin.summary}
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {origin.cards.map((card) => (
            <article key={card.title} className="surface-card space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">
                {card.title}
              </p>
              <p className="text-base leading-8 text-stone-300">{card.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="timeline"
        eyebrow="2016-2026"
        title="From grassroots happening to cultural movement."
        description="From Year 0 to Year X, the artist movement grows from a local experiment into a year-round cultural ecosystem."
        className="lg:min-h-[100svh] lg:justify-center lg:gap-5 lg:py-10"
        copyClassName="lg:max-w-5xl lg:space-y-3"
      >
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5 xl:gap-2.5">
          {timeline.map((item) => (
            <article key={item.year} className="surface-card px-4 py-3 xl:px-3.5 xl:py-3">
              <div className="flex flex-wrap items-baseline justify-between gap-1.5">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">
                    {item.label}
                  </p>
                  <h3 className="mt-0.5 text-xl font-semibold text-stone-50 xl:text-lg">
                    {item.year}
                  </h3>
                </div>
                <p className="text-xs text-stone-400 xl:max-w-[8rem] xl:text-right">
                  {item.theme}
                </p>
              </div>
              <p className="mt-2 text-sm leading-5 text-stone-300 xl:mt-1.5 xl:text-[11px] xl:leading-4">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="institute"
        eyebrow="Introducing BBI"
        title={institute.title}
        description={institute.question}
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-card space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">
              Experiments in
            </p>
            <ul className="space-y-3 text-lg text-stone-100">
              {institute.experiments.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 px-4 py-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card space-y-5">
            {institute.mission.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-stone-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {institute.values.map((value) => (
            <article key={value.title} className="surface-card">
              <h3 className="text-xl font-semibold text-stone-50">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-300">{value.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="impact"
        eyebrow="Impact"
        title="Cultural renewal with tangible local effects."
        description="The Institute's impact is economic, cultural, and communal at once."
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
        <div className="grid gap-5 lg:grid-cols-3">
          {impactPreview.map((pillar) => (
            <article key={pillar.title} className="surface-card space-y-4">
              <h3 className="text-xl font-semibold text-stone-50">{pillar.title}</h3>
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
        id="team"
        eyebrow="Leadership"
        title="Artists, producers, philosophers, and builders."
        description="Co-founders, directors, advisors, and founders shaping the Institute's cultural, civic, and philosophical work."
      >
        <div className="grid gap-10">
          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Co-founders</p>
              <h3 className="text-2xl font-semibold text-stone-100">Core leadership</h3>
            </div>
            <TeamGrid members={coFounders} />
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Board</p>
              <h3 className="text-2xl font-semibold text-stone-100">Board of directors</h3>
            </div>
            <TeamGrid members={boardDirectors} />
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Advisors</p>
              <h3 className="text-2xl font-semibold text-stone-100">Board of advisors</h3>
            </div>
            <TeamGrid members={advisors} />
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Origins</p>
              <h3 className="text-2xl font-semibold text-stone-100">BBB founders</h3>
            </div>
            <TeamGrid members={founders} />
          </div>
        </div>
      </Section>

      <Section
        id="support"
        eyebrow="Support"
        title={supportCta.title}
        description={supportCta.body}
      >
        <div className="surface-card flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="text-lg leading-8 text-stone-200">{supportCta.detail}</p>
            <p className="text-sm leading-7 text-stone-400">
              Reach out if you would like to make a wire donation, start a giving
              conversation, or support the long-term future of this cultural experiment.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href={site.contact.website} className="button-primary">
              Visit BBI
            </Link>
            <Link href={`mailto:${site.contact.email}`} className="button-secondary">
              Email Dulcinee
            </Link>
          </div>
        </div>
        <div className="surface-card space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Why now</p>
          <p className="text-base leading-8 text-stone-300">
            Support at this stage does not simply sustain the Biennale. It shapes what
            the Bombay Beach artist movement becomes next: residencies, public
            programming, and durable local partnerships.
          </p>
          <p className="text-base leading-8 text-stone-300">
            Funding is part of how BBI protects radical accessibility while building
            the infrastructure needed for the next decade of cultural experimentation.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          <Link
            href={site.contact.website}
            className="surface-card transition hover:border-white/30 hover:bg-white/[0.06]"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Website</p>
            <p className="mt-4 text-lg text-stone-100">bombaybeachinstitute.org</p>
          </Link>
          <Link
            href={`mailto:${site.contact.email}`}
            className="surface-card transition hover:border-white/30 hover:bg-white/[0.06]"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Email</p>
            <p className="mt-4 text-lg text-stone-100">{site.contact.email}</p>
          </Link>
          <Link
            href={site.contact.social}
            className="surface-card transition hover:border-white/30 hover:bg-white/[0.06]"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Social</p>
            <p className="mt-4 text-lg text-stone-100">{site.contact.socialHandle}</p>
          </Link>
        </div>
      </Section>
    </main>
  );
}
