import { useState } from "react";
import { Instagram, MessageCircle, Phone, Youtube } from "lucide-react";

const WHATSAPP_BASE_URL = "https://wa.me/447952971273";
const PHONE_LINK = "tel:+447952971273";
const PHONE_DISPLAY = "+44 7952 971273";
const INSTAGRAM_URL = "https://instagram.com";
const YOUTUBE_URL = "https://youtube.com";
const ADDRESS = {
  line1: "SOWA Furniture",
  line2: "Lord North Street, Gate 1",
  line3: "Manchester, M40 2HJ",
};

const initialFormState = {
  productType: "",
  quantity: "",
  colour: "",
  paint: "",
  upholsteryMaterial: "",
  upholsteryColour: "",
  finish: "",
  size: "",
  description: "",
};

const inputClassName =
  "w-full rounded-md border border-[var(--sowa-gold-soft)] bg-[var(--sowa-white)] px-3 py-2 text-sm text-[var(--sowa-ink)] outline-none transition placeholder:text-[var(--sowa-ink-muted)]/60 focus:border-[var(--sowa-gold)] focus:ring-1 focus:ring-[var(--sowa-gold)]";

export default function ContactSection() {
  const [form, setForm] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const messageLines = [
      "Hello SOWA Furniture, I'd like to place an order / request a quote.",
      "",
      `Product type: ${form.productType}`,
      `Quantity: ${form.quantity}`,
      `Colour: ${form.colour}`,
      `Paint: ${form.paint}`,
      `Upholstery material: ${form.upholsteryMaterial}`,
      `Upholstery colour: ${form.upholsteryColour}`,
      `Finish: ${form.finish}`,
      `Size: ${form.size}`,
      `Description: ${form.description}`,
    ];

    const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
      messageLines.join("\n"),
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setForm(initialFormState);
  };

  return (
    <section
      className="relative bg-[var(--sowa-white)] py-20 text-[var(--sowa-ink)]"
      id="contact"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage: "url('pexels-photo-17045319-2880w.webp')",
        }}
      ></div>

      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(248,248,245,0.9),rgba(239,226,178,0.45))]"></div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-2">
        <div className="rounded-[1.75rem] border border-[var(--sowa-gold-soft)] bg-[rgba(255,255,255,0.9)] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur-sm">
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.26em] text-[var(--sowa-gold-soft)]">
            ORDER ENQUIRY
          </p>
          <h2 className="mb-6 text-2xl font-bold leading-tight text-[var(--sowa-ink)] md:text-[2rem]">
            Send us a WhatsApp order request:
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-[var(--sowa-gold-deep)]">
                  Product type:
                </label>
                <input
                  type="text"
                  name="productType"
                  value={form.productType}
                  onChange={handleChange}
                  placeholder="Bar stool, chair, table..."
                  className={inputClassName}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[var(--sowa-gold-deep)]">
                  Quantity:
                </label>
                <input
                  type="number"
                  min="1"
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  className={inputClassName}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-[var(--sowa-gold-deep)]">
                  Colour:
                </label>
                <input
                  type="text"
                  name="colour"
                  value={form.colour}
                  onChange={handleChange}
                  className={inputClassName}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[var(--sowa-gold-deep)]">
                  Paint:
                </label>
                <input
                  type="text"
                  name="paint"
                  value={form.paint}
                  onChange={handleChange}
                  placeholder="Lacquer, satin, stain..."
                  className={inputClassName}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-[var(--sowa-gold-deep)]">
                  Upholstery material:
                </label>
                <input
                  type="text"
                  name="upholsteryMaterial"
                  value={form.upholsteryMaterial}
                  onChange={handleChange}
                  placeholder="Leather, vinyl, fabric..."
                  className={inputClassName}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[var(--sowa-gold-deep)]">
                  Upholstery colour:
                </label>
                <input
                  type="text"
                  name="upholsteryColour"
                  value={form.upholsteryColour}
                  onChange={handleChange}
                  className={inputClassName}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-[var(--sowa-gold-deep)]">
                  Finish:
                </label>
                <input
                  type="text"
                  name="finish"
                  value={form.finish}
                  onChange={handleChange}
                  placeholder="Matte, gloss, distressed..."
                  className={inputClassName}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[var(--sowa-gold-deep)]">
                  Size:
                </label>
                <input
                  type="text"
                  name="size"
                  value={form.size}
                  onChange={handleChange}
                  placeholder="W1200 x D700 x H750 mm"
                  className={inputClassName}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-[var(--sowa-gold-deep)]">
                Description
              </label>
              <textarea
                name="description"
                rows="4"
                value={form.description}
                onChange={handleChange}
                className={inputClassName}
                placeholder="Add notes about style, venue use, lead time or matching requirements."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--sowa-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--sowa-ink)] transition hover:bg-[var(--sowa-gold-soft)]"
            >
              Send via WhatsApp
            </button>
          </form>

          <p className="mt-5 text-center text-xs text-[var(--sowa-ink-muted)]">
            By submitting this form, you agree to us processing your details to
            respond to your enquiry. Your information is handled securely and in
            line with our Privacy Policy.
          </p>

          <div className="mt-6 h-60 w-full">
            <iframe
              src="https://www.google.com/maps?q=M40%202HJ%2C%20Lord%20North%20Street%2C%20Gate%201&output=embed"
              title="SOWA Furniture location map"
              height="240"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full rounded-md border border-[var(--sowa-gold)]/20"
            />
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-[var(--sowa-gold-soft)] bg-[rgba(255,255,255,0.82)] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-sm">
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.26em] text-[var(--sowa-gold-soft)]">
            CONTACT DETAILS
          </p>
          <h2 className="mb-4 text-2xl font-bold text-[var(--sowa-ink)] md:text-[2rem]">
            Contact details:
          </h2>

          <p className="leading-8 text-[var(--sowa-ink-muted)]">
            {ADDRESS.line1},
            <br />
            {ADDRESS.line2}, {ADDRESS.line3}
          </p>

          <p className="mt-4 text-[var(--sowa-ink-muted)]">
            <a href={PHONE_LINK} className="transition hover:text-[var(--sowa-gold-soft)]">
              {PHONE_DISPLAY}
            </a>
          </p>

          <p className="mt-4 text-[var(--sowa-ink-muted)]">
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-[var(--sowa-gold-soft)]"
            >
              <MessageCircle size={18} />
              WhatsApp us directly
            </a>
          </p>

          <div className="mt-6 flex items-center gap-4 text-xl">
            <a
              href={INSTAGRAM_URL}
              className="sowa-icon-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
            >
              <Instagram size={20} />
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our YouTube page"
              className="sowa-icon-link"
            >
              <Youtube size={20} />
            </a>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-[var(--sowa-ink)]">
            Business Hours
          </h3>

          <ul className="mt-2 space-y-1 text-sm text-[var(--sowa-ink-muted)]">
            <li>Monday: 8:00 AM - 8:00 PM</li>
            <li>Tuesday: 8:00 AM - 8:00 PM</li>
            <li>Wednesday: 8:00 AM - 8:00 PM</li>
            <li>Thursday: 8:00 AM - 8:00 PM</li>
            <li>Friday: 8:00 AM - 8:00 PM</li>
            <li>Saturday: 9:00 AM - 5:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>

          <div className="mt-10 rounded-[1.25rem] border border-[var(--sowa-gold)]/18 bg-[var(--sowa-cream)]/70 p-3">
            <p className="mb-3 text-sm text-[var(--sowa-gold-deep)]">
              Find us in Manchester
            </p>
            <div className="rounded border border-[var(--sowa-gold)]/18 bg-[var(--sowa-white)] p-4 text-sm leading-7 text-[var(--sowa-ink-muted)]">
              <p>SOWA Furniture</p>
              <p>Lord North Street, Gate 1</p>
              <p>Manchester, M40 2HJ</p>
              <a
                href={PHONE_LINK}
                className="mt-3 inline-flex items-center gap-2 text-[var(--sowa-ink)] transition hover:text-[var(--sowa-gold-deep)]"
              >
                <Phone size={16} />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
