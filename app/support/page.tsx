import Link from "next/link";

import { Section } from "@/components/Section";
import { budget, supportCta } from "@/content/home";
import { site } from "@/content/site";

export default function SupportPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="surface-card space-y-6">
          <p className="section-eyebrow">Support</p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-stone-50 sm:text-6xl">
            Invest in the permanent cultural imprint of an artist-built city.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-stone-300">{supportCta.body}</p>
        </div>
      </section>

      <Section
        eyebrow="Why now"
        title="Year X is a threshold, not a finale."
        description="The Biennale is evolving from a three-day event into a year-round cultural ecosystem stewarded by the Bombay Beach Institute."
      >
        <div className="surface-card space-y-5">
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
      </Section>

      <Section
        eyebrow="Budget"
        title="How support is allocated"
        description="No tickets. No VIPs. No commercial sponsorship. No commerce."
      >
        <div className="grid gap-4">
          {budget.items.map((item) => (
            <article
              key={item.name}
              className="surface-card grid gap-3 lg:grid-cols-[0.8fr_1.2fr_auto] lg:items-start"
            >
              <div>
                <h2 className="text-xl font-semibold text-stone-50">{item.name}</h2>
                <p className="mt-2 text-sm text-orange-300">{item.percent}% of budget</p>
              </div>
              <p className="text-sm leading-7 text-stone-300">{item.detail}</p>
              <p className="text-sm leading-7 text-stone-400">{item.impact}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Contact"
        title="Give, ask questions, or start a conversation."
        description="Reach out if you would like to make a wire donation."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <Link
            href={site.contact.website}
            className="surface-card transition hover:border-white/30 hover:bg-white/[0.06]"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-orange-300/85">Website</p>
            <p className="mt-4 text-lg text-stone-100">bombaybeachinstitute.org</p>
          </Link>
          <Link
            href={`mailto:${site.contact.email}`}
            className="surface-card transition hover:border-white/30 hover:bg-white/[0.06]"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-orange-300/85">Email</p>
            <p className="mt-4 text-lg text-stone-100">{site.contact.email}</p>
          </Link>
          <Link
            href={site.contact.social}
            className="surface-card transition hover:border-white/30 hover:bg-white/[0.06]"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-orange-300/85">Social</p>
            <p className="mt-4 text-lg text-stone-100">{site.contact.socialHandle}</p>
          </Link>
        </div>
      </Section>
    </main>
  );
}
