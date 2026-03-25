// VPN Search — VPN Ranking Card Component
// Design: White card, amber left-border, DM Mono for scores, expandable details

import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown, ChevronUp, Check, X, ExternalLink, Zap, Lock, Tv, DollarSign } from "lucide-react";
import type { VpnProvider } from "@/lib/vpnData";
import VpnLogo from "@/components/VpnLogo";

interface VpnCardProps {
  vpn: VpnProvider;
  featured?: boolean;
}

function ScoreBar({ score, label }: { score: number; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-slate-500 w-16 shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-500 rounded-full transition-all duration-500"
          style={{ width: `${score * 10}%` }}
        />
      </div>
      <span className="text-xs font-mono text-slate-600 w-6 text-right" style={{ fontFamily: "'DM Mono', monospace" }}>
        {score}
      </span>
    </div>
  );
}

export default function VpnCard({ vpn, featured = false }: VpnCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`bg-white rounded-lg border transition-all duration-200 ${
        featured
          ? "border-amber-300 shadow-md ring-1 ring-amber-200"
          : "border-zinc-200 hover:border-amber-200 hover:shadow-sm"
      }`}
    >
      {/* Featured badge */}
      {featured && (
        <div className="bg-amber-500 text-slate-900 text-xs font-bold px-4 py-1.5 rounded-t-lg flex items-center gap-1.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          <span>★</span>
          <span>Editor's Choice — Best VPN UK 2026</span>
        </div>
      )}

      {/* Main card content */}
      <div className={`p-5 ${featured ? "border-l-4 border-l-amber-500" : ""}`}>
        <div className="flex items-start gap-4">
          {/* Rank number */}
          <div className="shrink-0 text-center">
            <div
              className={`text-3xl font-bold leading-none ${featured ? "text-amber-500" : "text-zinc-300"}`}
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {String(vpn.rank).padStart(2, "0")}
            </div>
          </div>

          {/* VPN logo */}
          <div className="w-20 h-12 rounded-lg overflow-hidden shrink-0 shadow-sm border border-zinc-100 bg-white flex items-center justify-center">
            <VpnLogo slug={vpn.slug} name={vpn.name} className="w-full h-full" />
          </div>

          {/* VPN info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-slate-900 text-lg leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {vpn.name}
                  </h3>
                  {vpn.badges.slice(0, 1).map((badge) => (
                    <span
                      key={badge}
                      className="inline-block text-xs font-medium bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-200"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-slate-500 mt-0.5">{vpn.tagline}</p>
              </div>

              {/* Score */}
              <div className="text-right shrink-0">
                <div
                  className="text-2xl font-bold text-slate-900"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {vpn.score}
                </div>
                <div className="text-xs text-slate-400">/ 10</div>
              </div>
            </div>

            {/* Key specs row */}
            <div className="mt-3 flex flex-wrap gap-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>{vpn.downloadSpeed} Mbps</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <Lock className="w-3.5 h-3.5 text-amber-500" />
                <span>{vpn.jurisdiction}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <Tv className="w-3.5 h-3.5 text-amber-500" />
                <span>{vpn.countries} countries</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <DollarSign className="w-3.5 h-3.5 text-amber-500" />
                <span>
                  <strong className="text-slate-900">{vpn.monthlyPrice}/mo</strong>
                </span>
              </div>
              <div className="text-xs text-slate-400">{vpn.planLabel}</div>
            </div>

            {/* CTA row */}
            <div className="mt-4 flex items-center gap-3 flex-wrap">
              <a
                href={vpn.affiliateUrl}
                rel="noopener noreferrer sponsored"
                target="_blank"
                className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-sm px-4 py-2 rounded-md transition-all duration-200 shadow-sm hover:shadow-md"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Get {vpn.name}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href={`/review/${vpn.slug}`}
                className="text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
              >
                Read full review →
              </Link>
              <button
                onClick={() => setExpanded(!expanded)}
                className="ml-auto flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 transition-colors"
              >
                {expanded ? (
                  <>
                    Less detail <ChevronUp className="w-3.5 h-3.5" />
                  </>
                ) : (
                  <>
                    More detail <ChevronDown className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded detail */}
      {expanded && (
        <div className="border-t border-zinc-100 p-5 bg-zinc-50/50 rounded-b-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Score breakdown */}
            <div>
              <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Score Breakdown
              </h4>
              <div className="space-y-2">
                <ScoreBar score={vpn.speedScore} label="Speed" />
                <ScoreBar score={vpn.privacyScore} label="Privacy" />
                <ScoreBar score={vpn.streamingScore} label="Streaming" />
                <ScoreBar score={vpn.valueScore} label="Value" />
                <ScoreBar score={vpn.easeScore} label="Ease" />
              </div>
            </div>

            {/* Pros & Cons */}
            <div>
              <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Pros & Cons
              </h4>
              <ul className="space-y-1.5">
                {vpn.pros.slice(0, 3).map((pro, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                    <Check className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                    {pro}
                  </li>
                ))}
                {vpn.cons.slice(0, 2).map((con, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
                    <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key features */}
            <div>
              <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Key Features
              </h4>
              <div className="space-y-1.5">
                {[
                  { label: "No-logs policy", value: vpn.noLogs },
                  { label: "Audited", value: !!vpn.noLogsAudit, extra: vpn.noLogsAudit },
                  { label: "Kill switch", value: vpn.killSwitch },
                  { label: "Split tunnelling", value: vpn.splitTunneling },
                  { label: "Ad blocker", value: vpn.adBlocker },
                  { label: "BBC iPlayer", value: vpn.unblocksBbcIplayer },
                  { label: "Netflix", value: vpn.unblocksNetflix },
                ].map((feat) => (
                  <div key={feat.label} className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">{feat.label}</span>
                    <span className={`font-medium ${feat.value ? "text-green-600" : "text-red-400"}`}>
                      {feat.value ? (feat.extra ? feat.extra : "Yes") : "No"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Verdict */}
          <div className="mt-4 pt-4 border-t border-zinc-200">
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Our verdict: </strong>
              {vpn.verdict}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
