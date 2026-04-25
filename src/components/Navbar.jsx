import { useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

const leftNav = [
  { label: "Collections", href: "#collections" },
  { label: "Concept", href: "#concept" },
  { label: "Showroom", href: "#showroom" },
  { label: "Fabrics", href: "#fabrics" },
];

const rightNav = [
  { label: "Delivery", href: "#delivery" },
  { label: "Research", href: "#research" },
  { label: "Basket (2)", href: "#basket" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileNav = useMemo(() => [...leftNav, ...rightNav], []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 w-[min(96%,1880px)] rounded-full border border-white/10 bg-black/30 px-4 backdrop-blur-xl md:px-6">
        <div className="grid min-h-20 grid-cols-[1fr_auto_1fr] items-center gap-4">
          <nav className="hidden items-center gap-8 lg:flex">
            {leftNav.map((item) => (
              <a key={item.label} href={item.href} className="sowa-nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#home"
            className="justify-self-center text-center text-3xl font-semibold tracking-[0.32em] text-white sm:text-4xl"
          >
            SOWA
          </a>

          <div className="hidden items-center justify-end gap-8 lg:flex">
            {rightNav.map((item) => (
              <a key={item.label} href={item.href} className="sowa-nav-link">
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="justify-self-end rounded-full border border-white/15 p-3 text-white lg:hidden"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 py-4 lg:hidden">
            <nav className="grid gap-3">
              {mobileNav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm uppercase tracking-[0.2em] text-white/88"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
