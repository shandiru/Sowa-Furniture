import { motion } from "framer-motion";

export default function TrustStatsBand() {
  // Replace these with your actual image paths
  const brands = [
    { name: "la turaka", src: "/images/l1.png" },
    { name: "Z", src: "/images/l3.png" },
    { name: "Istanbull grill", src: "/images/l2.png" },
    { name: "Bar 51", src: "/images/l4.png" },
  ];

  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="bg-[var(--sowa-white)] py-14 overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[var(--sowa-ink-muted)] md:text-base mb-12">
          Trusted by pubs, bars, restaurants and homeowners across Greater
          Manchester to breathe new life into their furniture.
        </p>

        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex flex-nowrap gap-16 items-center" // Increased gap for logos
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25, // Slightly slower for readability of logos
              repeat: Infinity,
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={index}
                className="flex flex-shrink-0 items-center justify-center min-w-[120px]"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-20 w-auto object-contain transition-all"
                  // h-12 keeps them consistent; object-contain prevents stretching
                />
              </div>
            ))}
          </motion.div>

          {/* Faded Edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--sowa-white)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--sowa-white)] to-transparent" />
        </div>
      </div>
    </section>
  );
}