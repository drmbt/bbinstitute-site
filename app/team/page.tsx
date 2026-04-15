import { Section } from "@/components/Section";
import { advisors, boardDirectors, coFounders, founders, type TeamMember } from "@/content/team";

function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {members.map((member) => (
        <article key={`${member.name}-${member.bio}`} className="surface-card space-y-3">
          <h3 className="text-xl font-semibold text-stone-50">{member.name}</h3>
          {member.role ? <p className="text-sm text-orange-300">{member.role}</p> : null}
          <p className="text-sm leading-7 text-stone-300">{member.bio}</p>
        </article>
      ))}
    </div>
  );
}

export default function TeamPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="surface-card space-y-6">
          <p className="section-eyebrow">Team</p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-stone-50 sm:text-6xl">
            The people shaping BBI&apos;s next decade.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-stone-300">
            Co-founders, directors, advisors, and founders helping shape Bombay Beach
            as a site for experimental art, radical hospitality, and cultural renewal.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Co-founders"
        title="Core leadership"
        description="The producers and visionaries translating the Bombay Beach artist movement into a year-round institute."
      >
        <TeamGrid members={coFounders} />
      </Section>

      <Section
        eyebrow="Board"
        title="Board of directors"
        description="A mix of cultural producers, public art builders, and long-term stewards of place."
      >
        <TeamGrid members={boardDirectors} />
      </Section>

      <Section
        eyebrow="Advisors"
        title="Board of advisors"
        description="Global art and philosophy voices helping BBI sharpen its intellectual and cultural position."
      >
        <TeamGrid members={advisors} />
      </Section>

      <Section
        eyebrow="Origins"
        title="BBB founders"
        description="The original group that helped imagine Bombay Beach as a site for experimental culture."
      >
        <TeamGrid members={founders} />
      </Section>
    </main>
  );
}
