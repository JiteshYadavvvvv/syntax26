import { useState, useMemo, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {

  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentHash(window.location.hash);
      setCurrentPath(window.location.pathname);
      setMenuOpen(false);
    };

    window.addEventListener("hashchange", handleLocationChange);
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("hashchange", handleLocationChange);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const isActive = (path: string) => currentPath === path;
  const isActiveHash = (hash: string) => currentHash === hash;

  const navItems = useMemo(() => [
    { label: 'Home', href: '/', isActive: () => isActive("/") && !currentHash },
    { label: 'Schedule', href: '#schedule', isHash: true, isActive: () => isActiveHash("#schedule") },
    { label: 'Mentors', href: '#mentors', isHash: true, isActive: () => isActiveHash("#mentors") },
    { label: 'Events', href: '#events', isHash: true, isActive: () => isActiveHash("#events") },
    { label: 'FAQs', href: '#faqs', isHash: true, isActive: () => isActiveHash("#faqs") },
  ], [currentPath, currentHash]);

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/10 bg-[#000000]/60 px-4 py-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-xl sm:top-6 sm:px-6 sm:py-5">

      <div className="flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full">
            <img
              src="/dsc_logo.webp"
              alt="GDG Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="font-semibold tracking-tight text-white">Syntax26</span>
        </div>

        {/* Center Section (desktop) */}
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = item.isActive();
            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  active ? "text-white" : "text-white/60"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-6">

          {/* Notes Button */}
          <a href="#" className="hidden sm:block">
            <button className="rounded-lg bg-white px-4 py-2 font-medium text-black transition-all hover:bg-gray-200">
              Notes
            </button>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="mt-3 flex flex-col gap-1 border-t border-white/10 pt-3 md:hidden">
          {navItems.map((item) => {
            const active = item.isActive();
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white ${
                  active ? "bg-white/5 text-white" : "text-white/60"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-lg bg-white px-4 py-2.5 text-center font-medium text-black transition-all hover:bg-gray-200"
          >
            Notes
          </a>
        </div>
      )}

    </nav>
  );
};
