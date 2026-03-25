// VPN Vault UK — Best VPNs UK Rankings Page

import { useState } from "react";
import { Filter } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import VpnCard from "@/components/VpnCard";
import { vpnProviders, getVpnsByUseCase } from "@/lib/vpnData";

type SortKey = "rank" | "speed" | "streaming" | "privacy" | "value";

export default function BestVpnsUk() {
  const [sortBy, setSortBy] = useState<SortKey>("rank");

  const sorted = [...vpnProviders].sort((a, b) => {
    switch (sortBy) {
      case "speed": return b.speedScore - a.speedScore;
      case "streaming": return b.streamingScore - a.streamingScore;
      case "privacy": return b.privacyScore - a.privacyScore;
      case "value": return b.valueScore - a.valueScore;
      default: return a.rank - b.rank;
    }
  });

  return (
    <>
      <SEOHead
        title="Best VPNs UK 2026 — All 15 VPNs Ranked & Reviewed"
        description="Our ranked list of the 15 best VPNs for UK users in 2026. Every VPN independently tested for speed, streaming, privacy, and value. Updated monthly."
        canonical="/best-vpns-uk"
      />

      {/* Header */}
      <div className="bg-zinc-950 py-14">
        <div className="container">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Updated March 2026
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Best VPNs for UK Users — 2026 Rankings
          </h1>
          <p className="text-zinc-400 max-w-2xl leading-relaxed">
            We've tested 15 VPN services on a dedicated 1 Gbps UK connection, running 500+ speed tests and checking every major streaming service weekly. These are our honest, data-backed rankings.
          </p>
        </div>
      </div>

      {/* Sort bar */}
      <div className="bg-white border-b border-zinc-200 sticky top-0 z-30">
        <div className="container py-3 flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Filter className="w-4 h-4" />
            <span>Sort by:</span>
          </div>
          {(["rank", "speed", "streaming", "privacy", "value"] as SortKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setSortBy(key)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors capitalize ${
                sortBy === key
                  ? "bg-amber-500 text-slate-900"
                  : "text-slate-600 hover:bg-zinc-100"
              }`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {key === "rank" ? "Our Ranking" : key}
            </button>
          ))}
        </div>
      </div>

      {/* Rankings list */}
      <div className="bg-zinc-50 py-10">
        <div className="container">
          <div className="space-y-4">
            {sorted.map((vpn, i) => (
              <VpnCard key={vpn.slug} vpn={vpn} featured={sortBy === "rank" && i === 0} />
            ))}
          </div>

          {/* Methodology note */}
          <div className="mt-12 bg-white rounded-xl border border-zinc-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              How We Rank VPNs
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Every VPN in our rankings has been purchased with our own money. We test on a dedicated 1 Gbps fibre connection in the UK, running a minimum of 500 speed tests per VPN across different times of day and server locations. Streaming tests are conducted weekly on BBC iPlayer, Netflix, Disney+, ITVX, Sky Go, and Amazon Prime. Privacy policies are read in full and cross-referenced with independent audits and real-world legal cases where available.
            </p>
            <p className="text-sm text-slate-500">
              <strong>Affiliate disclosure:</strong> We earn commission when you purchase a VPN through our links. This does not affect our rankings or scores. Our methodology is designed to be immune to financial incentives — we score each VPN on objective, measurable criteria.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
