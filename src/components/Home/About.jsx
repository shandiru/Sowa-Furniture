import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";

const aboutImageSrc = "/images/gallery-sideboard.svg";
const aboutFrontImageSrc = "/images/gallery-pub-lounge.svg";

export default function AboutSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBack = useTransform(scrollYProgress, [0, 1], [30, -40]);
  const yFront = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" ref={ref} className="overflow-hidden bg-[var(--sowa-white)] py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <div className="relative order-1 lg:order-none">
          <div className="relative z-10 w-[92%] overflow-hidden rounded-[18px] border border-[var(--sowa-gold-soft)] shadow-xl lg:w-[80%]">
            <img
              src={aboutImageSrc}
              alt="Restored hospitality furniture at Sowa Furniture"
              className="h-[420px] w-full object-cover"
            />

            <Motion.div
              style={{ y: yBack }}
              className="absolute left-4 top-4 z-20 w-[58%] overflow-hidden rounded-[16px] border border-white/70 shadow-lg lg:left-6 lg:top-8"
            >
              <img
                src={aboutImageSrc}
                alt="Furniture restoration close-up"
                className="h-[220px] w-full object-cover"
              />
            </Motion.div>
          </div>

          <Motion.div
            style={{ y: yFront }}
            className="absolute -bottom-8 right-0 z-30 w-[58%] sm:w-[50%] lg:-right-5 lg:w-[78%]"
          >
            <div className="overflow-hidden rounded-[16px] border border-[var(--sowa-gold-soft)] bg-[var(--sowa-white)] shadow-lg">
              <img
                src={aboutFrontImageSrc}
                alt="Furniture refurbishment workshop showcase"
                className="h-[180px] w-full object-cover md:h-[220px]"
              />
            </div>
          </Motion.div>
        </div>

        {/* TEXT CONTENT */}
        <div className="mt-12 lg:mt-0 lg:pl-10">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.26em] text-[var(--sowa-gold-deep)] md:text-[13px]">
            ABOUT SOWA FURNITURE
          </p>

          <h2 className="mb-6 text-[30px] font-bold leading-[1.2] text-[var(--sowa-ink)] md:text-[42px]">
            Manchester's Go-To Workshop for
            <br className="hidden md:block" />
            Hospitality Furniture Restoration
          </h2>

          <p className="mb-8 max-w-xl text-sm leading-relaxed text-[var(--sowa-ink-muted)] md:text-base">
            We're a Manchester-based furniture refurbishment workshop specialising
            in pub, bar and restaurant furniture. From a single bar stool to a full
            venue refit - we strip, repair, refinish and re-upholster to a commercial
            standard that lasts. We also buy used hospitality furniture and build
            bespoke pieces to order.
          </p>

          <div className="mb-10 space-y-4">
            {[
              "Hospitality specialists - not a general carpenter",
              "We buy, refurbish and build - all under one roof",
              "Free quotes with no obligation and no hard sell",
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1 shrink-0 rounded-full border border-[var(--sowa-gold)] p-0.5">
                  <Check className="text-[var(--sowa-gold)]" size={14} strokeWidth={4} />
                </div>
                <p className="text-sm font-semibold leading-tight text-[var(--sowa-ink)] md:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <a
            href="/about"
            className="block w-full rounded-md bg-[var(--sowa-gold)] px-7 py-3.5 text-center text-[15px] font-semibold uppercase tracking-[0.18em] text-[var(--sowa-ink)] shadow-lg transition hover:bg-[var(--sowa-gold-soft)] md:w-auto"
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  );
}
