import Link from "next/link";

import { MobileSiteMapNav } from "@/components/MobileSiteMapNav";
import { mainNavigation, site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(12,10,8,0.78)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-3 lg:px-8 lg:py-2.5">
        <Link href="/#top" className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.35em] text-amber-200/80">
            {site.shortName}
          </span>
          <span className="text-xs font-medium text-stone-100 sm:text-sm">{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-3 text-[11px] text-stone-300 md:flex lg:gap-4 lg:text-xs xl:gap-5 xl:text-sm">
          {mainNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <MobileSiteMapNav />
      </div>
    </header>
  );
}
