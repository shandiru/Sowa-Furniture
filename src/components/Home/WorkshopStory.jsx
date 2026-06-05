const leftImageSrc = "/n1.jpg";
const rightImageSrc = "/n2.jpg";

export default function WorkshopStorySection() {
  return (
    <section className="bg-[var(--sowa-white)] py-15">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)_minmax(0,1fr)] lg:gap-12">
          <div
            data-aos="fade-right"
            className="order-1 overflow-hidden rounded-[18px] border border-[var(--sowa-gold-soft)] bg-[var(--sowa-white)] shadow-[0_18px_45px_rgba(5,5,5,0.08)] lg:order-none"
          >
            <img
              src={leftImageSrc}
              loading="lazy"
              alt="Workshop and hospitality venue restoration"
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[560px]"
            />
          </div>

          <div className="order-2 text-center lg:order-none">
            <h2
              data-aos="fade-up"
              data-aos-delay="80"
              className="mx-auto max-w-xl text-[30px] font-bold leading-[1.14] text-[var(--sowa-ink)] md:text-[42px] lg:text-[44px]"
            >
              Manchester&apos;s Go-To Workshop for Hospitality Furniture Restoration
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="120"
              className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[var(--sowa-ink-muted)] md:text-base lg:text-[1.1rem]"
            >
              For years, we&apos;ve helped pubs, bars, restaurants and commercial
              venues extend the life of their furniture through expert
              restoration, reupholstery and bespoke craftsmanship. Our experienced
              team combines traditional woodworking skills with modern finishing
              techniques to deliver durable, high-quality results.
            </p>
          </div>

          <div
            data-aos="fade-down"
            className="order-3 "
          >
            <div className="flex items-center justify-center px-6">
              <img
                src={rightImageSrc}
                loading="lazy"
                alt="Sowa Furniture logo"
                className="h-[320px] rounded-[18px] w-full object-cover sm:h-[420px] lg:h-[560px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
