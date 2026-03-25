// VPN Search — Site Footer
// Design: Dark slate-900 background, amber accents, editorial layout

import { Link } from "wouter";
import { Shield } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber-500 rounded-md flex items-center justify-center">
                <Shield className="w-4 h-4 text-slate-900" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-base tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  VPN Search
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4 max-w-xs">
              Independent VPN reviews and rankings for UK users. We purchase and test every VPN ourselves — our rankings are never influenced by affiliate commissions.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              <strong className="text-slate-400">Affiliate Disclosure:</strong> VPN Search earns commission when you purchase a VPN through our links. This does not affect our rankings or reviews. We only recommend VPNs we have independently tested.
            </p>
          </div>

          {/* Rankings */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Rankings
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Best VPNs UK 2026", href: "/best-vpns-uk" },
                { label: "VPN Comparison Table", href: "/vpn-comparison" },
                { label: "Best for Streaming", href: "/streaming-vpn" },
                { label: "Best for Privacy", href: "/private-vpn" },
                { label: "VPN Deals & Offers", href: "/vpn-deals" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              VPN Reviews
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "NordVPN Review", href: "/review/nordvpn" },
                { label: "ExpressVPN Review", href: "/review/expressvpn" },
                { label: "Surfshark Review", href: "/review/surfshark" },
                { label: "CyberGhost Review", href: "/review/cyberghost" },
                { label: "Proton VPN Review", href: "/review/protonvpn" },
                { label: "All Reviews →", href: "/best-vpns-uk" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Learn
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "VPN Explained", href: "/vpn-explained" },
                { label: "Do I Need a VPN?", href: "/do-i-need-a-vpn" },
                { label: "Free VPN Guide", href: "/free-vpn-uk" },
                { label: "VPN Setup Guide", href: "/vpn-setup-guide" },
                { label: "Articles", href: "/articles" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} VPN Search. All rights reserved. VPN Search is an independent review site.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Cookie Policy", href: "/cookie-policy" },
              { label: "About", href: "/about" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
