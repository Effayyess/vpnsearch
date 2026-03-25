// VPN Vault UK — VPN for Travel
import { Link } from "wouter";
import { Globe, ExternalLink, ChevronRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { vpnProviders } from "@/lib/vpnData";

export default function VpnForTravel() {
  const travelVpns = vpnProviders.slice(0, 5);
  return (
    <>
      <SEOHead
        title="Best VPN for Travel UK 2026 — Watch UK TV Abroad"
        description="The best VPNs for UK travellers in 2026. Watch BBC iPlayer, ITVX, and Channel 4 from anywhere in the world."
        canonical="/vpn-for-travel"
      />
      <div className="bg-zinc-950 py-14">
        <div className="container">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Updated March 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Best VPN for Travel — 2026</h1>
          <p className="text-zinc-400 max-w-2xl leading-relaxed">Whether you want to watch BBC iPlayer from Spain or stay safe on hotel Wi-Fi in Thailand, these are the VPNs we recommend for UK travellers.</p>
        </div>
      </div>
      <div className="bg-zinc-50 py-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl border border-zinc-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Why UK Travellers Need a VPN</h2>
                <div className="space-y-3">
                  {[{ icon: Globe, title: "Watch UK TV abroad", body: "BBC iPlayer, ITVX, Channel 4, and Sky Go all require a UK IP address. A VPN with UK servers lets you watch from anywhere in the world." }, { icon: Globe, title: "Stay safe on hotel Wi-Fi", body: "Hotel, airport, and cafe Wi-Fi networks are prime targets for hackers. A VPN encrypts all your traffic, protecting your passwords and banking details." }, { icon: Globe, title: "Bypass censorship", body: "Many countries block popular websites and apps. A VPN lets you access the open internet from countries with internet censorship." }].map((item) => (
                    <div key={item.title} className="flex items-start gap-3 bg-zinc-50 rounded-lg p-4">
                      <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center shrink-0"><item.icon className="w-4 h-4 text-amber-600" /></div>
                      <div><div className="font-semibold text-slate-800 text-sm mb-1">{item.title}</div><div className="text-xs text-slate-500 leading-relaxed">{item.body}</div></div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Best VPNs for UK Travellers</h2>
                <div className="space-y-4">
                  {travelVpns.map((vpn, i) => (
                    <div key={vpn.slug} className={`bg-white rounded-xl border p-5 ${i === 0 ? "border-amber-300 ring-1 ring-amber-200" : "border-zinc-200"}`}>
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="text-2xl font-bold text-zinc-200 w-8 shrink-0" style={{ fontFamily: "'DM Mono', monospace" }}>{String(i + 1).padStart(2, "0")}</div>
                        <div className="w-16 h-10 rounded-lg overflow-hidden shrink-0 border border-zinc-100 bg-white flex items-center justify-center"><img src={vpn.logoUrl} alt={`${vpn.name} logo`} className="w-full h-full object-contain" loading="lazy" /></div>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-slate-900 mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{vpn.name}</div>
                          <div className="text-sm text-slate-500">{vpn.countries} countries · {vpn.monthlyPrice}/mo · {vpn.moneyBack} guarantee</div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <a href={vpn.affiliateUrl} rel="noopener noreferrer sponsored" target="_blank" className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-sm px-4 py-2 rounded-lg transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Get Deal <ExternalLink className="w-3.5 h-3.5" /></a>
                          <Link href={`/review/${vpn.slug}`} className="text-xs text-amber-600 hover:text-amber-700 transition-colors hidden sm:inline">Review →</Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <div className="bg-white rounded-xl border border-amber-200 p-5">
                <div className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2">Best for Travel</div>
                <div className="font-bold text-slate-900 text-lg mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>ExpressVPN</div>
                <p className="text-sm text-slate-500 mb-4">94 countries, works in China, and the most reliable for BBC iPlayer from abroad.</p>
                <a href="#" rel="noopener noreferrer sponsored" target="_blank" className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-sm py-2.5 rounded-lg transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Get ExpressVPN Deal</a>
              </div>
              <div className="bg-white rounded-xl border border-zinc-200 p-5">
                <h3 className="font-bold text-slate-900 mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Related Guides</h3>
                <div className="space-y-2">
                  {[{ label: "Best for Streaming", href: "/streaming-vpn" }, { label: "Best for Privacy", href: "/private-vpn" }, { label: "All Rankings", href: "/best-vpns-uk" }].map((item) => (
                    <Link key={item.href} href={item.href} className="flex items-center gap-2 text-sm text-slate-600 hover:text-amber-700 transition-colors py-1">
                      <ChevronRight className="w-3.5 h-3.5 text-amber-400" />{item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
