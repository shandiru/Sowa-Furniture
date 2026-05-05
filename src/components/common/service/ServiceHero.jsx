import { Link } from "react-router-dom";

export default function ServiceHero({ service }) {
  const { theme, category, label, title, heroDescription, primaryAction, secondaryAction, heroVisual } =
    service;

  return (
    <section className="px-5 pb-14 pt-32 md:pb-16 md:pt-40">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-7">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[var(--sowa-gold-deep)]">
              {label}
            </p>
            {category ? (
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[var(--sowa-ink-muted)]">
                {category}
              </p>
            ) : null}
          </div>

          <div className="space-y-4">
            <h1 className="max-w-2xl text-4xl font-medium leading-[1.08] text-[var(--sowa-ink)] md:text-[4rem]">
              {title}
            </h1>
            <p className="max-w-xl text-[17px] leading-8 text-[var(--sowa-ink-muted)]">
              {heroDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to={primaryAction.href}
              className="inline-flex min-w-[208px] items-center justify-center rounded-full bg-[var(--sowa-gold)] px-6 py-3.5 text-sm font-semibold text-[var(--sowa-ink)] transition hover:-translate-y-0.5 hover:bg-[var(--sowa-gold-soft)]"
            >
              {primaryAction.label}
            </Link>
            <Link
              to={secondaryAction.href}
              className="inline-flex min-w-[168px] items-center justify-center rounded-full border border-[var(--sowa-gold-soft)] bg-[var(--sowa-white)] px-6 py-3.5 text-sm font-semibold text-[var(--sowa-ink)] transition hover:-translate-y-0.5"
            >
              {secondaryAction.label}
            </Link>
          </div>
        </div>

        <div
          className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-[var(--sowa-gold-soft)] shadow-[0_18px_60px_rgba(0,0,0,0.08)] md:min-h-[430px]"
          style={{ background: heroVisual.gradient }}
        >
          {heroVisual.imageSrc ? (
            <img
              src={heroVisual.imageSrc}
              alt={heroVisual.imageAlt || title}
              className="block h-full min-h-[360px] w-full object-cover md:min-h-[430px]"
            />
          ) : (
            <div className="flex min-h-[360px] items-end bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))] p-8 md:min-h-[430px]">
              <div className="max-w-sm rounded-[1.5rem] bg-white/78 px-5 py-4 text-sm leading-7 text-[var(--sowa-ink-muted)] backdrop-blur-sm">
                Add `heroVisual.imageSrc` in `serviceData.js` to show a real service image here.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
