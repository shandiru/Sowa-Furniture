export default function ServiceHero({ service }) {
  const { theme, category, label, title, heroDescription, primaryAction, secondaryAction, heroVisual } =
    service;

  return (
    <section className="px-5 pb-14 pt-32 md:pb-16 md:pt-40">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-7">
          <div className="flex flex-wrap items-center gap-3">
            <p
              className="text-[12px] font-semibold uppercase tracking-[0.24em]"
              style={{ color: theme.ink }}
            >
              {label}
            </p>
            {category ? (
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#7f7367]">
                {category}
              </p>
            ) : null}
          </div>

          <div className="space-y-4">
            <h1 className="max-w-2xl text-4xl font-medium leading-[1.08] text-[#1a1715] md:text-[4rem]">
              {title}
            </h1>
            <p className="max-w-xl text-[17px] leading-8 text-[#61574d]">
              {heroDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={primaryAction.href}
              className="inline-flex min-w-[208px] items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              style={{ backgroundColor: theme.accent }}
            >
              {primaryAction.label}
            </a>
            <a
              href={secondaryAction.href}
              className="inline-flex min-w-[168px] items-center justify-center rounded-full border px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5"
              style={{
                backgroundColor: theme.accentSoft,
                color: theme.ink,
                borderColor: "transparent",
              }}
            >
              {secondaryAction.label}
            </a>
          </div>
        </div>

        <div
          className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_18px_60px_rgba(52,36,28,0.08)] md:min-h-[430px]"
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
              <div className="max-w-sm rounded-[1.5rem] bg-white/78 px-5 py-4 text-sm leading-7 text-[#544b43] backdrop-blur-sm">
                Add `heroVisual.imageSrc` in `serviceData.js` to show a real service image here.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
