import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  copyClassName?: string;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  copyClassName,
  children,
}: SectionProps) {
  return (
    <section className={`section-shell ${className ?? ""}`.trim()}>
      <div
        id={id}
        className={`section-copy scroll-mt-20 ${copyClassName ?? ""}`.trim()}
      >
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h2 className="section-title">{title}</h2>
        {description ? <p className="section-description">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
