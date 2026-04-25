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
    <section className="bg-[#e8dcc9] px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#3b241d]">
            Our Services
          </p>

          <h2 className="text-3xl font-medium leading-tight text-[#141414] md:text-5xl">
            Expert Woodworking Solutions
            <br />
            for Every Space
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <article
                key={service.slug}
                className="rounded-2xl bg-[#f8f3ed] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <Icon className="mb-12 h-10 w-10 text-[#4a2b24]" strokeWidth={1.5} />

                <h3 className="mb-4 text-xl font-medium text-[#1f1f1f]">
                  {service.title}
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-[#5f5a55]">
                  {service.shortDescription}
                </p>

                <Link
                  to={`/service/${service.slug}`}
                  className="inline-flex rounded-full bg-[#3b1f1a] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#b18857]"
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
