import {
  Armchair,
  PanelTop,
  Recycle,
  Ruler,
  Sofa,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../../data/serviceData.js";

const iconMap = {
  Armchair,
  Utensils,
  PanelTop,
  Sofa,
  Ruler,
  Recycle,
};

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-[#f2ede4] px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p
            data-aos="fade-up"
            className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--sowa-gold-deep)]"
          >
            Our Services
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="80"
            className="text-3xl font-medium leading-tight text-[var(--sowa-ink)] md:text-5xl"
          >
            Expert Woodworking Solutions
            <br />
            for Every Space
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <article
                key={service.slug}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className="flex h-full flex-col rounded-2xl border border-black/6 bg-[var(--sowa-white)] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <Icon className="mb-12 h-10 w-10 text-[var(--sowa-gold-deep)]" strokeWidth={1.5} />

                <h3 className="mb-4 text-[25px] font-medium text-[var(--sowa-ink)]">
                  {service.title}
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-[var(--sowa-ink-muted)]">
                  {service.shortDescription}
                </p>

                <Link
                  to={service.detailPath}
                  className="mt-auto inline-flex w-fit whitespace-nowrap rounded-full bg-[var(--sowa-ink)] px-4 py-2 text-xs font-semibold text-[var(--sowa-white)] transition hover:bg-[var(--sowa-gold)] hover:text-[var(--sowa-ink)]"
                >
                  Learn More
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
