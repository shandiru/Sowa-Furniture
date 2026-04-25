const sectionClass =
  "rounded-[1.75rem] border border-[var(--sowa-gold-soft)] bg-white/70 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-8";

export default function TermsConditions() {
  return (
    <section className="bg-[#f7f3ec] px-5 py-28 text-[var(--sowa-ink)] sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--sowa-gold-deep)]">
            Legal Information
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Website Terms & Conditions
          </h1>
          <p className="mt-5 text-base leading-8 text-[var(--sowa-ink-muted)] sm:text-lg">
            These terms explain how this website may be used and the conditions
            that apply when you browse, read, or rely on information from SOWA
            Furniture.
          </p>
          <p className="mt-4 text-sm text-[var(--sowa-ink-muted)]">
            Last updated: April 25, 2026
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <aside className="rounded-[2rem] border border-[var(--sowa-gold)]/25 bg-[var(--sowa-gold)]/10 p-6 lg:sticky lg:top-28 lg:h-fit">
            <h2 className="text-2xl font-semibold">Key Points</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--sowa-ink-muted)]">
              <li>Website content is for general information only.</li>
              <li>You must not misuse or copy content without permission.</li>
              <li>External links are provided for convenience only.</li>
              <li>These terms are governed by the laws of England and Wales.</li>
            </ul>
          </aside>

          <div className="space-y-6">
            <section className={sectionClass}>
              <h2 className="text-2xl font-medium">1. Use of Our Website</h2>
              <p className="mt-3 leading-8 text-[var(--sowa-ink-muted)]">
                You may browse this website for general information about our
                services. You must not use the site in any unlawful way or in a
                way that harms our reputation, systems, or availability.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-2xl font-medium">2. Accuracy of Information</h2>
              <p className="mt-3 leading-8 text-[var(--sowa-ink-muted)]">
                We aim to keep all content accurate and up to date, but we do not
                guarantee that every page will always be complete, current, or
                suitable for your specific circumstances. Please contact us for
                current quote or project information.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-2xl font-medium">3. Intellectual Property</h2>
              <p className="mt-3 leading-8 text-[var(--sowa-ink-muted)]">
                All text, graphics, branding, images, and other materials on this
                website belong to SOWA Furniture or are used with permission. You
                may not reproduce, distribute, or republish any content without
                prior written consent.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-2xl font-medium">4. External Links</h2>
              <p className="mt-3 leading-8 text-[var(--sowa-ink-muted)]">
                This website may include links to third-party websites. These are
                provided for convenience only, and we are not responsible for the
                content, policies, or availability of those websites.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-2xl font-medium">5. Liability</h2>
              <p className="mt-3 leading-8 text-[var(--sowa-ink-muted)]">
                To the fullest extent permitted by law, we are not liable for any
                direct or indirect loss arising from the use of this website or
                reliance on its content. Nothing in these terms excludes any
                liability that cannot be excluded by law.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-2xl font-medium">6. Privacy</h2>
              <p className="mt-3 leading-8 text-[var(--sowa-ink-muted)]">
                Our handling of personal data is described in our Privacy Policy,
                which should be read together with these terms.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-2xl font-medium">7. Changes to These Terms</h2>
              <p className="mt-3 leading-8 text-[var(--sowa-ink-muted)]">
                We may update these terms from time to time. Please check this
                page occasionally to make sure you are aware of the latest version.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-2xl font-medium">8. Governing Law</h2>
              <p className="mt-3 leading-8 text-[var(--sowa-ink-muted)]">
                These terms are governed by the laws of England and Wales. Any
                disputes relating to use of this website will be subject to the
                jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-2xl font-medium">9. Contact Us</h2>
              <p className="mt-3 leading-8 text-[var(--sowa-ink-muted)]">
                If you have questions about these Terms & Conditions, please
                contact SOWA Furniture in Manchester or send us a message on
                WhatsApp at +44 7952 971273.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
