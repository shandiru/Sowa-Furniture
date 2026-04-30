export default function TrustStatsBand() {
  const brands = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];

  return (
    <section className="bg-[var(--sowa-white)] px-5 py-14">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[var(--sowa-ink-muted)] md:text-base">
          Trusted by pubs, bars, restaurants and homeowners across Greater
          Manchester to breathe new life into their furniture.
        </p>

        <div className="mt-12 grid grid-cols-2 items-center gap-8 opacity-40 sm:grid-cols-3 lg:grid-cols-5">
          {brands.map((brand, index) => (
            <div
              key={index}
            className="flex items-center justify-center gap-2 text-[var(--sowa-gold-deep)]"
            >
              <span className="h-8 w-8 rounded-full bg-[var(--sowa-gold)]" />
              <span className="text-xl font-bold tracking-tight">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
