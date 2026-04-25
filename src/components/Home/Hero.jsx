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
            className="font-['Bebas_Neue'] text-[42px] leading-[1.05] text-[#f0eddf] sm:text-[56px] md:text-[70px] lg:text-[85px]"
          >
            MANCHESTER'S FURNITURE <br />
            REFURBISHMENT SPECIALISTS
          </motion.h1>

          {/* Sub text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7, delay: 0.3 }}
            className="mt-4 font-['Bebas_Neue'] text-sm uppercase tracking-wider text-[#f0eddf] md:text-base"
          >
            Pub, bar & restaurant furniture - restored to last
          </motion.p>

          {/* Button (fixed spacing + alignment) */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7, delay: 0.6 }}
            className="mt-6 inline-flex items-center justify-center gap-3 bg-[#b18857] px-7 py-3 font-['Bebas_Neue'] text-xs uppercase text-[#f0eddf] transition hover:bg-[#956935]"
          >
            Get a Free Quote
            <ArrowRight size={16} />
          </motion.a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="font-['Bebas_Neue'] text-xs uppercase text-[#f0eddf]">
          Scroll
        </span>
        <span className="h-10 w-px animate-bounce bg-[#f0eddf]" />
      </div>
    </section>
  );
}