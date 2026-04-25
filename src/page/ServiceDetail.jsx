import { Link, useParams } from "react-router-dom";

import ServiceGallery from "../components/common/service/ServiceGallery.jsx";
import ServiceHero from "../components/common/service/ServiceHero.jsx";
import ServiceOverview from "../components/common/service/ServiceOverview.jsx";
import ServiceProcess from "../components/common/service/ServiceProcess.jsx";
import { getServiceBySlug } from "../data/serviceData.js";

function ServiceNotFound() {
  return (
    <section className="min-h-[70vh] bg-[#f7f4ed] px-5 py-32 text-[var(--sowa-ink)]">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-[var(--sowa-gold-soft)] bg-[var(--sowa-white)] p-10 text-center shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--sowa-gold-deep)]">
          Service not found
        </p>
        <h1 className="mt-4 text-4xl font-semibold">That service page does not exist yet.</h1>
        <p className="mt-5 text-base leading-8 text-[var(--sowa-ink-muted)]">
          Add a new entry in <code>src/data/serviceData.js</code> and the page will become available
          automatically.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-[var(--sowa-gold)] px-6 py-3 text-sm font-semibold text-[var(--sowa-ink)] transition hover:-translate-y-0.5 hover:bg-[var(--sowa-gold-soft)]"
        >
          Back To Home
        </Link>
      </div>
    </section>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <ServiceNotFound />;
  }

  return (
    <div className="bg-[#fcfaf6] text-[var(--sowa-ink)]">
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <ServiceProcess service={service} />
      <ServiceGallery service={service} />
    
    </div>
  );
}
