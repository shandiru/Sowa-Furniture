import React from "react";

const CTA = () => {
  return (
    <section className="bg-[var(--sowa-white)] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">

          {/* LEFT CTA CARD */}
          <div className="relative overflow-hidden rounded-3xl lg:col-span-2">
            {/* Background Image */}
            <img
              src="/Exterior-a.jpeg"
              alt="Plumbing Service"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-[#1a1a1a]/60"></div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-center p-10 md:p-14">
              <span className="mb-4 font-semibold uppercase tracking-[0.18em] text-[var(--sowa-gold-soft)]">
                Looking for Professional Window Tinting or Headlight Services?
              </span>

              <h2 className="mb-8 text-4xl font-extrabold leading-tight text-[var(--sowa-white)] md:text-5xl">
                Let’s discuss your vehicle needs and provide the right solution.
              </h2>

              <a
                href="https://wa.me/447851823807"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center rounded-full bg-[var(--sowa-gold)] px-8 py-4 font-semibold text-[var(--sowa-ink)] transition hover:bg-[var(--sowa-gold-soft)]"
              >
                Get a Quote via WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT AGENT CARD */}
          <div className="flex flex-col justify-between rounded-3xl bg-[var(--sowa-ink)] p-10">
            <div>
              {/* Agent Image */}
              <img
                src="tag.jpeg"
                alt="Wade Warren"
                className="mb-6 h-16 w-16 rounded-full border-2 border-[var(--sowa-gold)] bg-[var(--sowa-white)]/10 object-cover"
              />

              {/* Text */}
              <h3 className="mb-8 text-lg font-semibold leading-relaxed text-[var(--sowa-white)]">
                This is Tomas, Founder of Tomas Exterior. <br />
                I’m here to personally answer your questions and help you choose the best window tinting or headlight solution for your vehicle.
              </h3>
            </div>

            {/* Call Button */}
            <a
              href="https://wa.me/447851823807"
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
