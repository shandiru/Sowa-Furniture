export default function ServiceProcess({ service }) {
  return (
    <section id="service-process" className="px-5 py-4 md:py-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-[2rem] font-medium leading-tight text-[#1f1a17] md:text-[2.1rem]">
          {service.processHeading || "Our Process"}
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {service.process.map((step, index) => (
            <article
              key={step.title}
              className="min-h-[220px] rounded-[1.25rem] px-5 py-4 md:min-h-[240px] md:px-6 md:py-5"
              style={{
                backgroundColor: service.theme.panel,
                border: "1px solid rgba(222, 205, 184, 0.22)",
              }}
            >
              <p className="text-[1.15rem] font-normal tracking-[-0.02em]" style={{ color: service.theme.accent }}>
                {String(index + 1).padStart(2, "0")}.
              </p>
              <h3 className="mt-12 text-[1.05rem] font-medium leading-[1.25] text-[#221d19] md:text-[1.15rem]">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[26ch] text-[14px] leading-7 text-[#5c554d] md:text-[15px]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
