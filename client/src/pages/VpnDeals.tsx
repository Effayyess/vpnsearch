// VPN Vault UK — VPN Deals Page
import { Link } from "wouter";
import { ExternalLink, Tag, Clock } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { vpnProviders } from "@/lib/vpnData";
import VpnLogo from "@/components/VpnLogo";

export default function VpnDeals() {
  const deals = vpnProviders.slice(0, 10);
  return (
    <>
      <SEOHead
        title="Best VPN Deals UK 2026 — Discounts & Promo Codes"
        description="The best VPN deals and discounts available to UK users right now. We track prices daily and highlight the best value plans."
        canonical="/vpn-deals"
      />
      <div className="bg-zinc-950 py-14">
        <div className="container">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Updated Daily</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Best VPN Deals UK — March 2026</h1>
          <p className="text-zinc-400 max-w-2xl leading-relaxed">We track VPN prices daily and list the best available deals. Prices shown are for the longest available plan — always check the provider's site for the latest offer.</p>
        </div>
      </div>
      <div className="bg-zinc-50 py-10">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {deals.map((vpn, i) => (
              <div key={vpn.slug} className={`bg-white rounded-xl border p-5 flex items-center gap-4 flex-wrap ${i === 0 ? "border-amber-300 ring-1 ring-amber-200" : "border-zinc-200"}`}>
                <div className="w-16 h-10 rounded-lg overflow-hidden shrink-0 border border-zinc-100 bg-white flex items-center justify-center"><VpnLogo slug={vpn.slug} name={vpn.name} className="w-full h-full" /></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{vpn.name}</span>
                    {i === 0 && <span className="text-xs bg-amber-500 text-slate-900 font-bold px-2 py-0.5 rounded">Best Value</span>}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-500 flex-wrap">
                    <span className="flex items-center gap-1"><Tag className="w-3.5 h-3.5" /><strong className="text-slate-800">{vpn.monthlyPrice}/mo</strong></span>
                    <span>{vpn.planLabel}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{vpn.moneyBack} guarantee</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a href={vpn.affiliateUrl} rel="noopener noreferrer sponsored" target="_blank" className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-sm px-4 py-2 rounded-lg transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Get Deal <ExternalLink className="w-3.5 h-3.5" /></a>
                  <Link href={`/review/${vpn.slug}`} className="text-xs text-amber-600 hover:text-amber-700 transition-colors hidden sm:inline">Review →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-slate-600 leading-relaxed">
            <strong className="text-slate-800">Affiliate disclosure: </strong>
            We earn a commission when you purchase through our links. This does not affect our rankings or the price you pay. Prices are checked daily but may vary — always confirm on the provider's website.
          </div>
        </div>
      </div>
    </>
  );
}
