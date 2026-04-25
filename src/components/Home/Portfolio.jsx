import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  { title: "Pub & Bar Furniture Refurbishment" },
  { title: "Restaurant & Café Furniture Refurbishment" },
  { title: "Wooden Tabletop & Bar Top Renewal" },
  { title: "Commercial Reupholstery" },
  { title: "Made-to-Measure Furniture" },
  { title: "We Buy Used Hospitality Furniture" }
];

export default function Portfolio() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef(null);
  const autoRef = useRef(null);

  const goTo = useCallback((idx) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(Math.max(0, Math.min(idx, services.length - 1)));
    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating]);

  const resetAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent((c) => (c + 1 >= services.length ? 0 : c + 1));
    }, 5000);
  }, []);

  useEffect(() => {
    resetAuto();
    return () => clearInterval(autoRef.current);
  }, [resetAuto]);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* HEADER (Massey Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <div>
            <span className="text-sm font-semibold text-[#b18857] uppercase tracking-wider">
              Our Services
            </span>

            <h2 className="mt-3 text-4xl font-semibold text-[#111]">
              Expert Furniture Restoration
              <br />
              & Craftsmanship
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-4">
            <p className="text-gray-600 max-w-lg">
              We collaborate with pubs, restaurants and homeowners across Manchester 
              to restore, repair and transform wooden furniture to a high standard.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => { goTo(current - 1); resetAuto(); }}
                disabled={current === 0}
                className="w-10 h-10 rounded-full border border-gray-200 text-[#111] hover:bg-[#b18857] hover:text-white transition"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={() => { goTo(current + 1); resetAuto(); }}
                disabled={current === services.length - 1}
                className="w-10 h-10 rounded-full border border-gray-200 text-[#111] hover:bg-[#b18857] hover:text-white transition"
              >
                <ChevronRight size={18} />
              </button>

              <span className="text-sm text-gray-500">
                <span className="font-semibold text-[#111]">
                  {String(current + 1).padStart(2, "0")}
                </span>{" "}
                / {String(services.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* SLIDER */}
        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-8 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(-${current} * (min(360px, 85vw) + 32px)))`,
            }}
          >
            {services.map((item, i) => (
              <div
                key={i}
                className="flex-none transition-all duration-500"
                style={{
                  width: "min(360px, 85vw)",
                  opacity: Math.abs(i - current) <= 1 ? 1 : 0.3,
                  transform: i === current ? "scale(1)" : "scale(0.95)",
                }}
              >
                <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">

                  {/* IMAGE PLACEHOLDER (Blank as requested) */}
                  <div className="h-[220px] m-4 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                    Image Placeholder
                  </div>

                  {/* TEXT */}
                  <div className="px-6 pb-6">
                    <h3 className="text-lg font-semibold text-[#111] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-600">
                      High-quality refurbishment and restoration tailored for long-term durability.
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); resetAuto(); }}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? "26px" : "6px",
                height: "6px",
                background: i === current ? "#b18857" : "#ddd",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}