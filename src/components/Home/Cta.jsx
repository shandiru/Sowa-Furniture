import React from "react";

const CTA = () => {
  const whatsappShareUrl =
    "https://wa.me/?text=Hi%20Tomasz%2C%20I%27m%20looking%20for%20a%20quote%20for%20furniture%20refurbishment.";

  return (
    <section className="bg-[var(--sowa-white)] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-3xl lg:col-span-2">
            <img
              src="/Exterior-a.jpeg"
              alt="SOWA Furniture workshop support"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-[#1a1a1a]/60"></div>

            <div className="relative z-10 flex h-full flex-col justify-center p-10 md:p-14">
              <span className="mb-4 font-semibold uppercase tracking-[0.18em] text-[var(--sowa-gold-soft)]">
                Need a faster conversation about your project?
              </span>

              <h2 className="mb-8 text-4xl font-extrabold leading-tight text-[var(--sowa-white)] md:text-5xl">
                GOT FURNITURE THAT NEEDS A NEW LEASE OF LIFE?
              </h2>

              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[var(--sowa-white)]/90">
                Let&apos;s discuss your furniture and find the right
                refurbishment solution.
              </p>

              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center rounded-full bg-[var(--sowa-gold)] px-8 py-4 font-semibold text-[var(--sowa-ink)] transition hover:bg-[var(--sowa-gold-soft)]"
              >
                Get a Quote via WhatsApp
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-[var(--sowa-ink)] p-10">
            <div>
              <img
                src="/logo.jpg"
                alt="SOWA Furniture logo"
                className="mb-6 h-16 w-16 rounded-full border-2 border-[var(--sowa-gold)] bg-[var(--sowa-white)]/10 object-cover"
              />

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--sowa-gold-soft)]">
                This is Tomasz, founder of Sowa Furniture.
              </p>

              <h3 className="mb-8 text-lg font-semibold leading-relaxed text-[var(--sowa-white)]">
                I&apos;m here to personally answer your questions and help you
                find the best solution for your pub, bar, restaurant or home
                furniture.
              </h3>
            </div>

            <a
              href={whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[var(--sowa-gold)] px-8 py-4 font-semibold text-[var(--sowa-ink)] transition hover:bg-[var(--sowa-gold-soft)]"
            >
              Start a WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
