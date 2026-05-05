export default function ServiceOverview({ service }) {
  return (
    <section id="service-overview" className="border-t border-[var(--sowa-gold-soft)] scroll-m-10 px-5 py-12 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <h2 className="text-[1.95rem] font-medium leading-tight text-[var(--sowa-ink)] md:text-[2rem]">
            Overview
          </h2>
          <div className="mt-4 space-y-3">
            {service.overview.map((paragraph) => (
              <p key={paragraph} className="max-w-[70rem] text-[14px] leading-7 text-[var(--sowa-ink-muted)] md:text-[15px]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-7 max-w-5xl">
          <h3 className="text-[1.95rem] font-medium leading-tight text-[var(--sowa-ink)] md:text-[2rem]">
            {service.offeringsHeading || "What We Offer"}
          </h3>
          <ul className="mt-4 space-y-2">
            {service.offerings.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[14px] leading-7 text-[var(--sowa-ink-muted)] md:text-[15px]">
                <span
                  className="mt-[10px] h-[5px] w-[5px] rounded-full"
                  style={{ backgroundColor: "var(--sowa-gold)" }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
