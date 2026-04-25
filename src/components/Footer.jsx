import { Instagram, Youtube } from "lucide-react";

const pageLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Collection", href: "#collections" },
  { label: "Showroom", href: "#showroom" },
  { label: "Clients", href: "#clients" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="overflow-hidden bg-black px-5 pb-8 pt-12 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-t border-white/8 pt-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-2xl font-medium text-white">Stockholm, Sweden</p>
            <p className="mt-2 max-w-xs text-lg leading-8 text-white/70">
              Lofstromsvagen 8, 57 office
            </p>
            <div className="mt-6 flex items-center gap-4 text-white/82">
              <a href="https://x.com" className="sowa-icon-link" aria-label="X">
                X
              </a>
              <a
                href="https://instagram.com"
                className="sowa-icon-link"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                className="sowa-icon-link"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <p className="text-sm uppercase tracking-[0.28em] text-white/46">
              Pages
            </p>
            <div className="mt-5 grid gap-3 text-lg text-white/82">
              {pageLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/8 pt-6 text-sm text-white/58 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} SOWA Furniture. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white/58">
            <a href="#contact" className="transition hover:text-white">
              Privacy
            </a>
            <span>/</span>
            <a href="#contact" className="transition hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none mt-6 overflow-hidden text-[22vw] font-semibold leading-none tracking-[0.18em] text-white/[0.06]">
        SOWA
      </div>
    </footer>
  );
}

export default Footer;
