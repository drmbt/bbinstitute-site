import Link from "next/link";

import { site } from "@/content/site";

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "var(--bbi-border)", backgroundColor: "var(--bbi-header-bg)" }}
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.3fr_1fr] lg:px-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-orange-300/85">
            Bombay Beach Institute
          </p>
          <h2 className="text-2xl font-semibold text-stone-100">
            Building the next decade of art, community, and cultural renewal.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-stone-400">{site.description}</p>
        </div>
        <div className="grid gap-3 text-sm text-stone-300">
          <Link href={site.contact.website} className="transition hover:text-[var(--bbi-link-hover)]">
            {site.contact.website.replace("https://", "")}
          </Link>
          <Link
            href={`mailto:${site.contact.email}`}
            className="transition hover:text-[var(--bbi-link-hover)]"
          >
            {site.contact.email}
          </Link>
          <Link href={site.contact.social} className="transition hover:text-[var(--bbi-link-hover)]">
            {site.contact.socialHandle}
          </Link>
        </div>
      </div>
    </footer>
  );
}
