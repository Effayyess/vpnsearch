// VPN Search — Site Navigation
// Design: "Digital Cartography" — clean white nav, amber CTA pill
// Structure: Rankings | By Need | Reviews | Learn | Deals | Articles
// Structure is completely distinct from Site 1

import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Menu, X, Shield } from "lucide-react";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Rankings",
    children: [
      { label: "Best VPNs UK 2026", href: "/best-vpns-uk", description: "Our full ranked list of 15 VPNs" },
      { label: "VPN Comparison Table", href: "/vpn-comparison", description: "Side-by-side feature comparison" },
      { label: "Speed Rankings", href: "/best-vpns-uk#speed", description: "Fastest VPNs we tested" },
      { label: "Value Rankings", href: "/best-vpns-uk#value", description: "Best VPNs for the price" },
    ],
  },
  {
    label: "By Need",
    children: [
      { label: "For Streaming", href: "/streaming-vpn", description: "BBC iPlayer, Netflix & more" },
      { label: "For Privacy", href: "/private-vpn", description: "Maximum anonymity & security" },
      { label: "For Gaming", href: "/vpn-for-gaming", description: "Low latency, no throttling" },
      { label: "For Travel", href: "/vpn-for-travel", description: "Stay connected abroad" },
    ],
  },
  {
    label: "Reviews",
    children: [
      { label: "NordVPN Review", href: "/review/nordvpn" },
      { label: "ExpressVPN Review", href: "/review/expressvpn" },
      { label: "Surfshark Review", href: "/review/surfshark" },
      { label: "CyberGhost Review", href: "/review/cyberghost" },
      { label: "Proton VPN Review", href: "/review/protonvpn" },
      { label: "IPVanish Review", href: "/review/ipvanish" },
      { label: "PIA Review", href: "/review/pia" },
      { label: "Mullvad Review", href: "/review/mullvad" },
      { label: "All 15 Reviews →", href: "/best-vpns-uk#reviews" },
    ],
  },
  {
    label: "Learn",
    children: [
      { label: "VPN Explained", href: "/vpn-explained", description: "What is a VPN?" },
      { label: "Do I Need a VPN?", href: "/do-i-need-a-vpn", description: "Honest answer" },
      { label: "Free vs Paid VPN", href: "/free-vpn-uk", description: "Is free ever good enough?" },
      { label: "Is VPN Legal in UK?", href: "/is-vpn-legal-uk", description: "UK law explained" },
      { label: "VPN Setup Guide", href: "/vpn-setup-guide", description: "Get started in 5 minutes" },
    ],
  },
  {
    label: "Deals",
    href: "/vpn-deals",
  },
  {
    label: "Articles",
    href: "/articles",
  },
];

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav className="site-nav" ref={navRef} role="navigation" aria-label="Main navigation">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-amber-500 rounded-md flex items-center justify-center shadow-sm group-hover:bg-amber-400 transition-colors">
              <Shield className="w-4 h-4 text-slate-900" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-base font-800 text-slate-900 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }}>
                VPN Search
              </span>
              <span className="text-[10px] font-medium text-slate-500 tracking-widest uppercase">UK</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <button
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeDropdown === item.label
                        ? "bg-amber-50 text-amber-700"
                        : "text-slate-600 hover:text-slate-900 hover:bg-zinc-50"
                    }`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href!}
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-zinc-50 transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-zinc-100 py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 hover:bg-amber-50 transition-colors group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="text-sm font-medium text-slate-800 group-hover:text-amber-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {child.label}
                        </div>
                        {child.description && (
                          <div className="text-xs text-slate-500 mt-0.5">{child.description}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/vpn-deals"
              className="hidden sm:inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-sm px-4 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Get Best Deal
            </Link>
            <button
              className="lg:hidden p-2 rounded-md text-slate-600 hover:bg-zinc-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-zinc-100 bg-white">
          <div className="container py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium text-slate-700 hover:bg-zinc-50 transition-colors"
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-slate-600 hover:text-amber-700 hover:bg-amber-50 rounded-md transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className="block px-3 py-2.5 rounded-md text-sm font-medium text-slate-700 hover:bg-zinc-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-zinc-100">
              <Link
                href="/vpn-deals"
                className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-sm px-4 py-2.5 rounded-full transition-colors"
              >
                Get Best Deal
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
