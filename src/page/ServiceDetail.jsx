import { Link, useParams } from "react-router-dom";

import ServiceGallery from "../components/common/service/ServiceGallery.jsx";
import ServiceHero from "../components/common/service/ServiceHero.jsx";
import ServiceOverview from "../components/common/service/ServiceOverview.jsx";
import ServiceProcess from "../components/common/service/ServiceProcess.jsx";
import { getServiceBySlug } from "../data/serviceData.js";

function ServiceNotFound() {
  return (
    <section className="min-h-[70vh] bg-[#f7f2eb] px-5 py-32 text-[#1f1a17]">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#ddcfbf] bg-white p-10 text-center shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6f5347]">
          Service not found
        </p>
        <h1 className="mt-4 text-4xl font-semibold">That service page does not exist yet.</h1>
        <p className="mt-5 text-base leading-8 text-[#5d564e]">
          Add a new entry in <code>src/data/serviceData.js</code> and the page will become available
          automatically.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-[#5a372d] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
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
    <div className="bg-[#fcf8f2] text-[#1f1a17]">
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <ServiceProcess service={service} />
      <ServiceGallery service={service} />
    
    </div>
  );
}
