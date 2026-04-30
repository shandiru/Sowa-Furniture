import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const leftNav = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
];

const rightNav = [
  { label: "Contact", href: "/#contact" },
  { label: "FAQ", href: "/#faq" },
  { label: "Location", href: "/#location" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileNav = useMemo(() => [...leftNav, ...rightNav], []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`w-full px-4 backdrop-blur-xl transition-colors duration-300 md:px-6 ${scrolled ? "bg-black/85" : "bg-black/40"}`}>
        <div className="relative mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-4">
          <nav className="hidden items-center gap-8 lg:flex">
            {leftNav.map((item) => (
              <HashLink smooth key={item.label} to={item.href} className="sowa-nav-link">
                {item.label}
              </HashLink>
            ))}
          </nav>

          <HashLink
            smooth
            to="/#home"
            className="text-left text-2xl font-semibold tracking-[0.24em] text-white sm:text-3xl md:absolute md:left-1/2 md:-translate-x-1/2 md:text-4xl"
          >
            <img src="images/sowa-logo-without-bg.png" alt="Sowa Logo" className="h-8 w-auto sm:h-10 md:h-12" />
          </HashLink>

          <div className="hidden items-center justify-end gap-8 lg:flex">
            {rightNav.map((item) => (
              <HashLink smooth key={item.label} to={item.href} className="sowa-nav-link">
                {item.label}
              </HashLink>
            ))}
          </div>

          <button
            type="button"
            className="ml-auto rounded-full border border-white/15 bg-white/5 p-3 text-white transition hover:bg-white/10 lg:hidden"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 py-4 lg:hidden">
            <nav className="grid gap-3">
              {mobileNav.map((item) => (
                <HashLink
                  smooth
                  key={item.label}
                  to={item.href}
                  className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm uppercase tracking-[0.18em] text-white/88 transition hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </HashLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
