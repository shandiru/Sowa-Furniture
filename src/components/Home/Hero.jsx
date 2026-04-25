import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://timbercompany.ancorathemes.com/wp-content/uploads/2023/09/168_1-1.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pb-28 pt-24 text-center sm:px-6 md:px-10">
        <div className="w-full max-w-6xl py-8 sm:py-10">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="mx-auto max-w-full text-[clamp(2.1rem,9vw,5.3125rem)] font-extrabold leading-[0.92] tracking-[0.03em] text-[var(--sowa-white)] sm:max-w-none sm:tracking-[0.06em] md:tracking-[0.08em]"
          >
            <span className="block sm:hidden">
              MANCHESTER'S
              <br />
              FURNITURE
              <br />
              REFURBISHMENT
              <br />
              SPECIALISTS
            </span>
            <span className="hidden sm:block">
              MANCHESTER'S FURNITURE <br />
              REFURBISHMENT SPECIALISTS
            </span>
          </motion.h1>

          {/* Sub text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7, delay: 0.3 }}
            className="mx-auto mt-5 max-w-xl text-xs font-semibold uppercase leading-relaxed tracking-[0.2em] text-[var(--sowa-gold-soft)] sm:text-sm sm:tracking-[0.28em] md:text-base md:tracking-[0.34em]"
          >
            Pub, bar & restaurant furniture - restored to last
          </motion.p>

          {/* Button */}
          <motion.a
            href="https://wa.me/447952971273"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7, delay: 0.6 }}
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 bg-[var(--sowa-gold)] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sowa-ink)] transition hover:bg-[var(--sowa-gold-soft)] sm:px-7 sm:text-xs sm:tracking-[0.24em]"
          >
            Get a Free Quote
            <ArrowRight size={16} />
          </motion.a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--sowa-white)]">
          Scroll
        </span>
        <span className="h-10 w-px animate-bounce bg-[var(--sowa-gold)]" />
      </div>
    </section>
  );
}
