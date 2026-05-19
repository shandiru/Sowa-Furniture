import { ArrowRight } from "lucide-react";

const WHATSAPP_BASE_URL = "https://wa.me/447952971273";

const stockItems = [
  {
    title: "Scandinavian Oak Sideboard",
    price: "2,450",
    description:
      "Handcrafted solid oak sideboard with soft-close drawers and ample storage. A timeless piece that blends seamlessly with any interior.",
    imageSrc: "/Restaurant_Cafe_Furniture_Refurbishment_attachment_03_Before_1.jpeg",
    imageAlt: "Scandinavian Oak Sideboard",
  },
  {
    title: "Milano Accent Chair",
    price: "1,280",
    description:
      "Italian-inspired armchair featuring premium fabric upholstery and solid walnut legs. Designed for comfort and elegance.",
    imageSrc: "/Restaurant_Cafe_Furniture_Refurbishment_attachment_02_After_1.jpeg",
    imageAlt: "Milano Accent Chair",
  },
  {
    title: "Marble & Brass Coffee Table",
    price: "1,890",
    description:
      "Statement coffee table with Carrara marble top and brushed brass frame. The perfect centerpiece for modern living spaces.",
    imageSrc: "/Restaurant_Cafe_Furniture_Refurbishment_attachment_04_After2.jpeg",
    imageAlt: "Marble and Brass Coffee Table",
  },
];

function buildWhatsappUrl(itemTitle) {
  const message = `Hello SOWA Furniture, I'm interested in the ${itemTitle}. Could you share more details, availability, and price?`;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

export default function StockList() {
  return (
    <div className="bg-[#fcfaf6] pt-18 text-[var(--sowa-ink)]">
      <section className="px-5 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[var(--sowa-gold-deep)]">
            Stock List
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-medium leading-tight text-[var(--sowa-ink)] md:text-5xl lg:text-6xl">
            Curated pieces for considered living
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--sowa-ink-muted)] md:text-lg md:leading-8">
            Explore our carefully selected collection of furniture and homewares, each piece
            chosen for its quality, craftsmanship, and timeless design.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 md:pb-20 lg:pb-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stockItems.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-[1.45rem] border border-[var(--sowa-gold-soft)] bg-[var(--sowa-white)] shadow-[0_12px_28px_rgba(0,0,0,0.06)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--sowa-cream)]">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Added 'flex flex-1 flex-col' so the inner container grows to match the maximum grid card height */}
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <h2 className="text-lg font-medium leading-tight text-[var(--sowa-ink)]">
                    {item.title}
                  </h2>
                  <span className="shrink-0 text-lg font-semibold text-[var(--sowa-ink)]">
                    £ {item.price}
                  </span>
                </div>

                {/* Added 'flex-1' or 'grow' so the text element expands to push the button down */}
                <p className="mb-5 flex-1 text-sm leading-7 text-[var(--sowa-ink-muted)]">
                  {item.description}
                </p>

                {/* The button now stays pinned to the bottom because the description above occupies all available extra room */}
                <a
                  href={buildWhatsappUrl(item.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[var(--sowa-gold-soft)] bg-[var(--sowa-white)] px-4 py-3 text-sm font-semibold text-[var(--sowa-ink)] transition hover:bg-[var(--sowa-ink)] hover:text-[var(--sowa-white)]"
                >
                  Enquire Now
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}