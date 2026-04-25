const sectionClass =
  "rounded-[1.75rem] border border-[var(--sowa-gold-soft)] bg-white/70 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-8";

export default function PrivacyPolicy() {
  return (
    <section className="bg-[#f7f3ec] px-5 py-28 text-[var(--sowa-ink)] sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--sowa-gold-deep)]">
            Legal Information
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-base leading-8 text-[var(--sowa-ink-muted)] sm:text-lg">
            This page explains what information SOWA Furniture collects, how we
            use it, and the rights you have regarding your personal data.
          </p>
          <p className="mt-4 text-sm text-[var(--sowa-ink-muted)]">
            Last updated: April 25, 2026
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <aside className="rounded-[2rem] border border-[var(--sowa-gold)]/25 bg-[var(--sowa-gold)]/10 p-6 lg:sticky lg:top-28 lg:h-fit">
            <h2 className="text-2xl font-semibold">Quick Summary</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--sowa-ink-muted)]">
              <li>We only collect details needed to respond to enquiries and quotes.</li>
              <li>We do not sell or trade customer information.</li>
              <li>You can ask what personal data we hold about you at any time.</li>
              <li>We keep your information only as long as reasonably necessary.</li>
            </ul>
          </aside>

          <div className="space-y-6">
            <section className={sectionClass}>
              <h2 className="text-2xl font-medium">1. Information We Collect</h2>
              <p className="mt-3 leading-8 text-[var(--sowa-ink-muted)]">
                When you contact us, request a quote, or communicate with us
                through our website or WhatsApp, we may collect your name, phone
                number, email address, business name, and details about your
                furniture refurbishment enquiry.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-2xl font-medium">2. How We Use Your Information</h2>
              <p className="mt-3 leading-8 text-[var(--sowa-ink-muted)]">
                We use your information to respond to messages, provide quotes,
                arrange collections or deliveries, manage projects, and maintain
                business records connected with our services.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-2xl font-medium">3. Lawful Basis</h2>
              <p className="mt-3 leading-8 text-[var(--sowa-ink-muted)]">
                We process personal data where it is necessary for our legitimate
                interests, to perform a contract with you, to comply with legal
                obligations, or where you have given consent.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-2xl font-medium">4. Sharing Your Data</h2>
              <p className="mt-3 leading-8 text-[var(--sowa-ink-muted)]">
                We do not sell your personal information. We may share data only
                with trusted providers who help us operate our business, such as
                website, hosting, or communications services, where necessary.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-2xl font-medium">5. Data Retention</h2>
              <p className="mt-3 leading-8 text-[var(--sowa-ink-muted)]">
                We keep personal information only for as long as needed to fulfil
                the purpose for which it was collected, including any accounting,
                legal, or customer service requirements.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-2xl font-medium">6. Your Rights</h2>
              <p className="mt-3 leading-8 text-[var(--sowa-ink-muted)]">
                Under applicable data protection law, you may request access to
                your data, ask for corrections, object to certain processing, or
                request deletion where legally permitted.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-2xl font-medium">7. Contact</h2>
              <p className="mt-3 leading-8 text-[var(--sowa-ink-muted)]">
                If you have any questions about this Privacy Policy, please
                contact SOWA Furniture in Manchester or message us on WhatsApp at
                +44 7952 971273.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
