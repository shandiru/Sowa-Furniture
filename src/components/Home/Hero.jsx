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
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 text-center">
        
        <div className="py-10">
          
          {/* Heading (2 lines + tight line height) */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-[42px] font-extrabold leading-[1.05] tracking-[0.08em] text-[var(--sowa-white)] sm:text-[56px] md:text-[70px] lg:text-[85px]"
          >
            MANCHESTER'S FURNITURE <br />
            REFURBISHMENT SPECIALISTS
          </motion.h1>

          {/* Sub text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7, delay: 0.3 }}
            className="mt-4 text-sm font-semibold uppercase tracking-[0.34em] text-[var(--sowa-gold-soft)] md:text-base"
          >
            Pub, bar & restaurant furniture - restored to last
          </motion.p>

          {/* Button (fixed spacing + alignment) */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7, delay: 0.6 }}
            className="mt-6 inline-flex items-center justify-center gap-3 bg-[var(--sowa-gold)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--sowa-ink)] transition hover:bg-[var(--sowa-gold-soft)]"
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
