export default function LocationSection() {
  return (
    <section id="location" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <iframe
            title="Sowa Furniture Location"
            src="https://www.google.com/maps?q=Manchester,UK&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}