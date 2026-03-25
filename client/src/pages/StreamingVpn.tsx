// VPN Search — Best VPN for Streaming UK page
import { Link } from "wouter";
import { Check, X, ExternalLink, Tv, ChevronRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { getVpnsByUseCase } from "@/lib/vpnData";
import VpnLogo from "@/components/VpnLogo";

const STREAMING_SERVICES = [
  { name: "BBC iPlayer", note: "UK-only, requires UK IP. Frequently blocks VPNs." },
  { name: "Netflix UK", note: "Geo-restricted catalogue. US library also popular." },
  { name: "Disney+", note: "Stricter than Netflix. Fewer VPNs work reliably." },
  { name: "ITVX", note: "UK-only. Moderate VPN detection." },
  { name: "Sky Go", note: "UK-only. Aggressive VPN blocking." },
  { name: "Amazon Prime UK", note: "Less strict — most VPNs work." },
  { name: "Channel 4", note: "UK-only. Moderate detection." },
  { name: "NOW TV", note: "UK-only. Moderate detection." },
];

export default function StreamingVpn() {
  const streamingVpns = getVpnsByUseCase("streaming");
  return (
    <>
      <SEOHead
        title="Best VPN for Streaming UK 2026 — BBC iPlayer, Netflix & More"
        description="The best VPNs for streaming in the UK in 2026. We test BBC iPlayer, Netflix, Disney+, ITVX, and Sky Go weekly."
        canonical="/streaming-vpn"
      />
      <div className="bg-zinc-950 py-14">
        <div className="container">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Updated March 2026</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Best VPN for Streaming UK — 2026</h1>
          <p className="text-zinc-400 max-w-2xl leading-relaxed">We test every VPN against BBC iPlayer, Netflix, Disney+, ITVX, Sky Go, and Amazon Prime every week. These are the only VPNs that consistently unblock UK streaming services.</p>
        </div>
      </div>
      <div className="bg-zinc-50 py-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl border border-zinc-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Why Most VPNs Fail for Streaming</h2>
                <p className="text-slate-600 leading-relaxed mb-4">Streaming platforms — especially BBC iPlayer — maintain large blocklists of known VPN IP addresses. When you connect through a VPN, the platform checks your IP against this list. If it's flagged, you get a proxy error. The best streaming VPNs rotate their IP addresses frequently and maintain dedicated streaming servers that stay ahead of these blocklists.</p>
                <p className="text-slate-600 leading-relaxed">We test every VPN in our rankings against all major UK streaming services weekly. A VPN only makes our streaming list if it reliably unblocks BBC iPlayer in at least 9 out of 10 tests.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Best VPNs for Streaming — Ranked</h2>
                <div className="space-y-4">
                  {streamingVpns.map((vpn, i) => (
                    <div key={vpn.slug} className={`bg-white rounded-xl border p-5 ${i === 0 ? "border-amber-300 ring-1 ring-amber-200" : "border-zinc-200"}`}>
                      <div className="flex items-start gap-4 flex-wrap">
                        <div className="text-2xl font-bold text-zinc-200 w-8 shrink-0" style={{ fontFamily: "'DM Mono', monospace" }}>{String(i + 1).padStart(2, "0")}</div>
                        <div className="w-16 h-10 rounded-lg overflow-hidden shrink-0 border border-zinc-100 bg-white flex items-center justify-center"><VpnLogo slug={vpn.slug} name={vpn.name} className="w-full h-full" /></div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{vpn.name}</h3>
                            <span className="text-xs bg-amber-50 border border-amber-200 text-amber-700 px-2 py-0.5 rounded font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>Streaming: {vpn.streamingScore}/10</span>
                          </div>
                          <p className="text-sm text-slate-500 mb-3">{vpn.tagline}</p>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {vpn.streamingServices.slice(0, 4).map((s) => (
                              <div key={s.name} className={`flex items-center gap-1.5 text-xs px-2 py-1 rounded ${s.works ? "bg-green-50 text-green-700" : "bg-zinc-50 text-zinc-400"}`}>
                                {s.works ? <Check className="w-3 h-3 shrink-0" /> : <X className="w-3 h-3 shrink-0" />}
                                {s.name}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2 shrink-0">
                          <a href={vpn.affiliateUrl} rel="noopener noreferrer sponsored" target="_blank" className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-sm px-4 py-2 rounded-lg transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Get Deal <ExternalLink className="w-3.5 h-3.5" /></a>
                          <Link href={`/review/${vpn.slug}`} className="text-xs text-amber-600 hover:text-amber-700 transition-colors">Full review →</Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl border border-zinc-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>UK Streaming Services — What You Need to Know</h2>
                <div className="space-y-4">
                  {STREAMING_SERVICES.map((s) => (
                    <div key={s.name} className="flex items-start gap-3 border-b border-zinc-100 pb-4 last:border-0 last:pb-0">
                      <div className="w-8 h-8 bg-zinc-100 rounded-lg flex items-center justify-center shrink-0"><Tv className="w-4 h-4 text-slate-500" /></div>
                      <div><div className="font-semibold text-slate-800 text-sm">{s.name}</div><div className="text-sm text-slate-500 mt-0.5">{s.note}</div></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <div className="bg-white rounded-xl border border-amber-200 p-5">
                <div className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2">Top Pick</div>
                <div className="font-bold text-slate-900 text-lg mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>NordVPN</div>
                <p className="text-sm text-slate-500 mb-4">Best overall for UK streaming — unblocks iPlayer, Netflix, Disney+ reliably.</p>
                <a href="#" rel="noopener noreferrer sponsored" target="_blank" className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-sm py-2.5 rounded-lg transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Get NordVPN Deal</a>
              </div>
              <div className="bg-white rounded-xl border border-zinc-200 p-5">
                <h3 className="font-bold text-slate-900 mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Related Guides</h3>
                <div className="space-y-2">
                  {[{ label: "Best VPN for Privacy", href: "/private-vpn" }, { label: "Best VPN for Gaming", href: "/vpn-for-gaming" }, { label: "All VPN Rankings", href: "/best-vpns-uk" }].map((item) => (
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
