import { useEffect, useMemo, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const leftNav = [
  { label: "Home", href: "/#" },
  {
    label: "Services",
    href: "/#services",
    children: [
      { label: "Pub & Bar Furniture Refurbishment", href: "/service/pub-bar-furniture-refurbishment" },
      { label: "Restaurant & Cafe Furniture Refurbishment", href: "/service/restaurant-cafe-furniture-refurbishment" },
      { label: "Wooden Tabletop & Bar Top Renewal", href: "/service/wooden-tabletop-bar-top-renewal" },
      { label: "Commercial Reupholstery", href: "/service/commercial-reupholstery" },
      { label: "Made-to-Measure Furniture", href: "/service/made-to-measure-furniture" },
      { label: "We Buy Used Hospitality Furniture", href: "/service/we-buy-used-hospitality-furniture" },
    ],
  },
  { label: "About", href: "/#about" },
];

const rightNav = [
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Location", href: "/#location" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Track which mobile submenu is currently expanded
  const [expandedItem, setExpandedItem] = useState(null);
  
  const { pathname } = useLocation();
  const mobileNav = useMemo(() => [...leftNav, ...rightNav], []);
  const isHomePage = pathname === "/";
  
  const navbarBackgroundClass = isHomePage
    ? scrolled ? "bg-black/90 shadow-lg" : "bg-transparent"
    : "bg-black/90 shadow-lg";

  // Toggle dropdown logic for mobile
  const toggleSubmenu = (label) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    // Reset dropdowns when mobile menu is closed
    if (!mobileOpen) setExpandedItem(null);
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`w-full px-4 backdrop-blur-xl transition-all duration-300 md:px-6 ${navbarBackgroundClass}`}>
        <div className="relative mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-4">
          
          {/* Desktop Left Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {leftNav.map((item) => (
              <div key={item.label} className="group relative py-4">
                <HashLink smooth to={item.href} className="sowa-nav-link flex items-center gap-1 font-bold">
                  {item.label}
                  {item.children && <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />}
                </HashLink>

                {item.children && (
                  <div className="invisible absolute left-0 top-full w-64 origin-top-left translate-y-2 rounded-xl border border-white/10 bg-black/95 p-2 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <HashLink
                        key={child.label}
                        to={child.href}
                        className="block rounded-lg px-4 py-3 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
                      >
                        {child.label}
                      </HashLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Logo */}
          <HashLink smooth to="/#" className="text-left text-2xl font-semibold tracking-[0.24em] text-white sm:text-3xl md:absolute md:left-1/2 md:-translate-x-1/2 md:text-4xl">
            <img src="/sowa-logo-without-bg.png" alt="Sowa Logo" className="h-20 w-auto sm:h-10 md:h-20" />
          </HashLink>

          {/* Desktop Right Navigation */}
          <div className="hidden items-center justify-end gap-8 lg:flex">
            {rightNav.map((item) => (
              <HashLink smooth key={item.label} to={item.href} className="sowa-nav-link font-bold">
                {item.label}
              </HashLink>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="ml-auto rounded-full border border-white/15 bg-white/5 p-3 text-white transition hover:bg-white/10 lg:hidden"
            onClick={() => setMobileOpen((current) => !current)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="max-h-[80vh] overflow-y-auto border-t border-white/10 py-4 lg:hidden">
            <nav className="grid gap-2">
              {mobileNav.map((item) => (
                <div key={item.label} className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <HashLink
                      smooth
                      to={item.href}
                      className="flex-grow rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm uppercase tracking-[0.18em] text-white/88 transition hover:bg-white/10"
                      onClick={() => !item.children && setMobileOpen(false)}
                    >
                      {item.label}
                    </HashLink>
                    
                    {/* Separate Toggle Button for Dropdowns */}
                    {item.children && (
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className="rounded-2xl border border-white/8 bg-white/4 p-3 text-white transition hover:bg-white/10"
                      >
                        <ChevronDown 
                          size={18} 
                          className={`transition-transform duration-300 ${expandedItem === item.label ? "rotate-180" : ""}`} 
                        />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Sub-menu: Only visible if expandedItem matches */}
                  {item.children && expandedItem === item.label && (
                    <div className="mb-2 ml-4 grid gap-1 border-l border-white/10 pl-4 transition-all">
                      {item.children.map((child) => (
                        <HashLink
                          key={child.label}
                          to={child.href}
                          className="py-2 text-xs uppercase tracking-wider text-white/60 hover:text-white"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </HashLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;