export default function LocationSection() {
  return (
    <section id="location" className="scroll-mt-24 bg-[var(--sowa-white)] py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="overflow-hidden rounded-2xl border border-[var(--sowa-gold-soft)] shadow-sm">
          <iframe
            title="Sowa Furniture Location"
            src="https://www.google.com/maps?q=M40%202HJ%2C%20Lord%20North%20Street%2C%20Gate%201&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
