import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, User } from "lucide-react";

const reviews = [
  {
    name: "Stuart Long",
    meta: "Verified Buyer",
    text: "The best service I have ever had. Every aspect of the job seemed to be about quality. Quick delivery and a professional finish.",
  },
  {
    name: "Andy Reid",
    meta: "GB · 25 reviews · Mar 3, 2026",
    text: "Excellent service from start to finish. The workmanship was excellent and the furniture looks brand new. Helpful team, clear communication and a great result.",
  },
  {
    name: "Danko",
    meta: "BA · 2 reviews · Oct 8, 2025",
    text: "A brilliant experience throughout. The finish was perfect and the attention to detail really stood out. Highly recommended.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(1);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  const getPosition = (index) => {
    if (index === current) return "center";
    if (index === (current - 1 + reviews.length) % reviews.length) return "left";
    return "right";
  };

  return (
    <section className="relative overflow-hidden bg-[#f7f4ed] px-4 py-14 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[var(--sowa-gold-deep)]">
            Testimonials
          </p>

          <h2 className="text-[34px] font-bold leading-none text-[var(--sowa-ink)] sm:text-[42px] md:text-[54px]">
            Testimonials
          </h2>

          <p className="mt-4 text-sm text-[var(--sowa-ink-muted)] sm:text-base">
            What our customers say?
          </p>
        </div>

        <div className="relative mx-auto h-[380px] max-w-7xl sm:h-[340px]">
          {reviews.map((review, index) => {
            const position = getPosition(index);

            return (
              <div
                key={index}
                className={`absolute top-0 rounded-xl border border-black/6 bg-[var(--sowa-white)] p-6 transition-all duration-500 sm:p-8 ${
                  position === "center"
                    ? "left-1/2 z-20 w-[calc(100vw-2rem)] max-w-[520px] -translate-x-1/2 opacity-100 shadow-sm sm:w-[520px]"
                    : position === "left"
                    ? "hidden left-[-70px] z-10 w-[430px] opacity-30 sm:block"
                    : "hidden right-[-70px] z-10 w-[430px] opacity-30 sm:block"
                }`}
              >
                <div className="mb-6 flex items-start gap-3 sm:mb-7 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--sowa-gold-soft)] text-[var(--sowa-gold-deep)] sm:h-11 sm:w-11">
                    <User size={20} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-[var(--sowa-ink)] sm:text-[15px]">
                      {review.name}
                    </h3>
                    <p className="break-words text-xs leading-5 text-[var(--sowa-ink-muted)]">
                      {review.meta}
                    </p>
                  </div>
                </div>

                <p className="min-h-[168px] text-[15px] leading-[1.75] text-[var(--sowa-ink)] sm:min-h-[138px] sm:text-[16px] sm:leading-[1.65]">
                  "{review.text}"
                </p>

                <div className="mt-6 flex gap-1 text-[var(--sowa-gold)] sm:mt-7">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={17} fill="currentColor" />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-2 flex items-center justify-center gap-5">
          <button
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-[var(--sowa-white)] text-[var(--sowa-ink)] transition hover:bg-[var(--sowa-gold)] hover:text-[var(--sowa-ink)]"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index ? "w-7 bg-[var(--sowa-gold)]" : "w-2 bg-[#d8d0c1]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-[var(--sowa-white)] text-[var(--sowa-ink)] transition hover:bg-[var(--sowa-gold)] hover:text-[var(--sowa-ink)]"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
