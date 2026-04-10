import { useState, useMemo, useEffect } from "react";

export const Navbar = () => {

  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentHash(window.location.hash);
      setCurrentPath(window.location.pathname);
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
    <nav className="fixed top-6 left-1/2 z-50 flex w-[90%] max-w-6xl -translate-x-1/2 items-center justify-between rounded-2xl border border-white/10 bg-[#000000]/60 px-6 py-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full">
          <img 
            src="/logo.png" 
            alt="OSS Logo" 
            className="h-full w-full object-cover" 
          />
        </div>
        <span className="font-semibold tracking-tight text-white">Sparkx26</span>
      </div>

      {/* Center Section */}
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
      <div className="flex items-center gap-6">
        
        {/* Theme Toggle */}
        {/* <div className="flex items-center gap-2">
          <Sun className="h-4 w-4 text-gray-500" />
          <button 
            onClick={() => setIsDark(!isDark)}
            className="relative flex h-5 w-10 items-center rounded-full bg-gray-800 px-[2px] transition-colors focus:outline-none"
          >
            <div 
              className={`h-4 w-4 rounded-full bg-white transition-transform duration-300 ${
                isDark ? 'translate-x-5' : 'translate-x-0'
              }`} 
            />
          </button>
          <Moon className="h-4 w-4 text-blue-500" />
        </div> */}

        {/* Notes Button */}
        <button className="rounded-lg bg-white px-4 py-2 font-medium text-black transition-all hover:bg-gray-200">
          Notes       
        </button>
      </div>
      
    </nav>
  );
};
