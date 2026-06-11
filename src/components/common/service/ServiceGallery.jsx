import { useState } from "react";
import { FaArrowsLeftRight } from "react-icons/fa6";

export default function ServiceGallery({ service }) {
  const galleryItems = service.gallery || [];
  const isGridGallery = service.galleryLayout === "grid";

  const pairs = [];
  for (let i = 0; i < galleryItems.length; i += 2) {
    if (galleryItems[i]) {
      pairs.push({
        before: galleryItems[i],
        after: galleryItems[i + 1] || galleryItems[i], // fallback if odd number
      });
    }
  }

  return (
    <section id="service-gallery" className="scroll-m-10 px-5 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-[1.95rem] font-medium leading-tight text-[var(--sowa-ink)] md:text-[2rem]">
          {service.galleryHeading || "Before And After Gallery"}
        </h2>

        {isGridGallery ? (
          <div className="mt-5 w-full max-w-6xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* ^ CHANGED: Added max-w-6xl and mx-auto to control overall width if needed */}

            {galleryItems.map((item, index) => (
              <figure
                key={`${item.imageSrc || "gallery-item"}-${index}`}
                className="overflow-hidden rounded-[1.45rem] border border-[var(--sowa-gold-soft)] bg-[var(--sowa-white)] shadow-[0_8px_18px_rgba(0,0,0,0.04)]"
              >
                {/* TWEAK HEIGHT HERE: Change aspect-[2/3] to aspect-square, aspect-[4/3], or a fixed h-[350px] */}
                <div className="aspect-square w-full overflow-hidden bg-[#f4efe8]">
                  {item.imageSrc ? (
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt || "Gallery image"}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="h-full w-full" style={{ background: item.gradient }} />
                  )}
                </div>
              </figure>
            ))}
          </div>
        ) : (
          <div className="mt-5 grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {pairs.map((pair, index) => (
              <BeforeAfterSlider key={index} before={pair.before} after={pair.after} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// Sub-component to manage individual slider states safely
function BeforeAfterSlider({ before, after }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <article className="relative aspect-[3/3] w-full overflow-hidden rounded-[1.45rem] border border-[var(--sowa-gold-soft)] bg-[var(--sowa-white)] shadow-[0_8px_18px_rgba(0,0,0,0.04)] select-none">

      {/* After Image (The Background) */}
      <div className="absolute inset-0 h-full w-full">
        {after.imageSrc ? (
          <img
            src={after.imageSrc}
            alt={after.imageAlt || "After"}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full" style={{ background: after.gradient }} />
        )}
        <span className="absolute bottom-3 right-3 rounded bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-sm">
          After
        </span>
      </div>

      {/* Before Image (The Foreground / Clipped Layer) */}
      <div
        className="absolute inset-0 h-full w-full overflow-hidden"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        {before.imageSrc ? (
          <img
            src={before.imageSrc}
            alt={before.imageAlt || "Before"}
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
            style={{ width: '100%', maxWidth: 'none' }}
          />
        ) : (
          <div className="h-full w-full" style={{ background: before.gradient }} />
        )}
        <span className="absolute bottom-3 left-3 rounded bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-sm">
          Before
        </span>
      </div>

      {/* The Interactive Slider Line & Handle */}
      <div
        className="absolute bottom-0 top-0 w-1 bg-white cursor-ew-resize pointer-events-none"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="absolute top-1/2 left-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_4px_10px_rgba(0,0,0,0.2)] flex items-center justify-center border border-gray-100">
          <FaArrowsLeftRight className="w-5 h-5 text-[var(--sowa-ink)] stroke-[2.5]" />
        </div>
      </div>

      {/* Invisible HTML range input stretched over the container for perfect touch/mouse controls */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 h-full w-full opacity-0 cursor-ew-resize z-10 native-slider"
      />
    </article>
  );
}
