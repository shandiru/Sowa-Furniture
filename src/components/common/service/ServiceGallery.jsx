export default function ServiceGallery({ service }) {
  return (
    <section id="service-gallery" className="px-5 py-12 md:py-16 scroll-m-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-[1.95rem] font-medium leading-tight text-[var(--sowa-ink)] md:text-[2rem]">
          {service.galleryHeading || "Design Showcase / Gallery"}
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {service.gallery.map((item, index) => (
            <article
              key={item.imageSrc || item.title || index}
              className="overflow-hidden rounded-[1.45rem] border border-[var(--sowa-gold-soft)] bg-[var(--sowa-white)] shadow-[0_8px_18px_rgba(0,0,0,0.04)]"
            >
              {item.imageSrc ? (
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt || service.galleryHeading || "Service gallery image"}
                  className="block h-72 w-full object-cover"
                />
              ) : (
                <div className="h-72 w-full" style={{ background: item.gradient }} />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
