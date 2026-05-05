import { Instagram, MessageCircle, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const pageLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

function Footer() {
  return (
    <footer className="overflow-hidden bg-black px-5 pb-8 pt-12 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-t border-white/8 pt-10 lg:grid-cols-[1.15fr_0.85fr_0.7fr]">
          <div>
            <p className="text-2xl font-semibold text-white">SOWA Furniture</p>
            <p className="mt-3 max-w-md text-base leading-8 text-white/70">
              Manchester furniture refurbishment specialists for pubs, bars,
              restaurants, and bespoke hospitality spaces.
            </p>
            <div className="mt-4 space-y-2 text-sm text-white/64">
              <p>M40 2HJ, Lord North Street, Gate 1</p>
              <a
                href="tel:+447952971273"
                className="block transition hover:text-white"
              >
                +44 7952 971273
              </a>
              <a
                href="https://wa.me/447952971273"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--sowa-gold-soft)] transition hover:text-white"
              >
                <MessageCircle size={16} />
                WhatsApp Quote
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-white/82">
              <a href="https://instagram.com" className="sowa-icon-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com" className="sowa-icon-link" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-white/46">
              Pages
            </p>
            <div className="mt-5 grid gap-3 text-lg text-white/82">
              {pageLinks.map((item) => (
                <HashLink
                  smooth
                  key={item.label}
                  to={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </HashLink>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-end">
            <p className="text-sm uppercase tracking-[0.28em] text-white/46">
              Legal
            </p>
            <div className="mt-5 grid gap-3 text-lg text-white/82">
              <Link to="/privacy-policy" className="transition hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="transition hover:text-white">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/8 pt-6 text-sm text-white/58 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} SOWA Furniture. All rights reserved.</p>
          <p className="flex items-center gap-2 text-white/70">
            Powered by
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--sowa-gold-soft)] transition hover:text-white"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>

      <div className="pointer-events-none mt-6 overflow-hidden text-[22vw] font-semibold leading-none tracking-[0.18em] text-white/[0.06]">
        SOWA
      </div>
    </footer>
  );
}

export default Footer;
