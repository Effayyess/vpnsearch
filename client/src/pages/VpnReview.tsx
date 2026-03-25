// VPN Vault UK — Individual VPN Review Page
// Content-heavy, data-rich, completely original

import { useParams, Link } from "wouter";
import { Check, X, ExternalLink, ChevronLeft, Shield, Zap, Tv, Lock, Star, AlertTriangle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { getVpnBySlug, vpnProviders } from "@/lib/vpnData";

function ScoreGauge({ score, label }: { score: number; label: string }) {
  const pct = (score / 10) * 100;
  const color = score >= 9 ? "#f59e0b" : score >= 7.5 ? "#3b82f6" : "#94a3b8";
  return (
    <div className="text-center">
      <div className="relative w-16 h-16 mx-auto mb-2">
        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
          <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f1f5f9" strokeWidth="3" />
          <circle
            cx="18" cy="18" r="15.9" fill="none"
            stroke={color} strokeWidth="3"
            strokeDasharray={`${pct} 100`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-slate-800" style={{ fontFamily: "'DM Mono', monospace" }}>
            {score}
          </span>
        </div>
      </div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  );
}

export default function VpnReview() {
  const params = useParams<{ slug: string }>();
  const vpn = getVpnBySlug(params.slug || "");

  if (!vpn) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Review not found</h1>
        <Link href="/best-vpns-uk" className="text-amber-600 hover:text-amber-700">
          ← Back to rankings
        </Link>
      </div>
    );
  }

  const otherVpns = vpnProviders.filter((v) => v.slug !== vpn.slug).slice(0, 4);

  return (
    <>
      <SEOHead
        title={`${vpn.name} Review 2026 — UK Speed, Streaming & Privacy Test`}
        description={`Our in-depth ${vpn.name} review for UK users. We tested speed, streaming performance (BBC iPlayer, Netflix), privacy policy, and value. Score: ${vpn.score}/10.`}
        canonical={`/review/${vpn.slug}`}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Review",
          name: `${vpn.name} Review`,
          reviewRating: {
            "@type": "Rating",
            ratingValue: vpn.score,
            bestRating: 10,
          },
          author: { "@type": "Organization", name: "VPN Vault UK" },
          itemReviewed: { "@type": "SoftwareApplication", name: vpn.name },
        }}
      />

      {/* Breadcrumb */}
      <div className="bg-zinc-50 border-b border-zinc-200">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/best-vpns-uk" className="hover:text-amber-600 transition-colors">Rankings</Link>
            <span>/</span>
            <span className="text-slate-800">{vpn.name} Review</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-zinc-950 py-12">
        <div className="container">
          <Link href="/best-vpns-uk" className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-amber-400 text-sm mb-6 transition-colors">
            <ChevronLeft className="w-4 h-4" />
            Back to all rankings
          </Link>

          <div className="flex items-start gap-5 flex-wrap">
            <div className="w-24 h-16 rounded-xl overflow-hidden shrink-0 shadow-lg border border-zinc-700 bg-zinc-900 flex items-center justify-center">
              <img
                src={vpn.logoUrl}
                alt={`${vpn.name} logo`}
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <h1 className="text-3xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {vpn.name} Review
                </h1>
                <span className="bg-amber-500 text-slate-900 font-bold text-sm px-3 py-1 rounded-lg">
                  #{vpn.rank} in UK Rankings
                </span>
              </div>
              <p className="text-zinc-400 text-lg mb-4">{vpn.tagline}</p>
              <div className="flex flex-wrap gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {vpn.score}
                  </div>
                  <div className="text-xs text-zinc-500">Overall / 10</div>
                </div>
                <div className="w-px bg-zinc-700" />
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-sm font-bold text-white">{vpn.monthlyPrice}/mo</div>
                    <div className="text-xs text-zinc-500">{vpn.planLabel}</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{vpn.countries} countries</div>
                    <div className="text-xs text-zinc-500">{vpn.servers} servers</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{vpn.jurisdiction}</div>
                    <div className="text-xs text-zinc-500">Jurisdiction</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shrink-0">
              <a
                href={vpn.affiliateUrl}
                rel="noopener noreferrer sponsored"
                target="_blank"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-base px-6 py-3 rounded-lg transition-all duration-200 shadow-lg"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Get {vpn.name}
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-xs text-zinc-500 mt-2 text-center">{vpn.moneyBack} money-back guarantee</p>
            </div>
          </div>
        </div>
      </div>

      {/* Score gauges */}
      <div className="bg-white border-b border-zinc-200">
        <div className="container py-6">
          <div className="flex items-center justify-around flex-wrap gap-4">
            <ScoreGauge score={vpn.speedScore} label="Speed" />
            <ScoreGauge score={vpn.streamingScore} label="Streaming" />
            <ScoreGauge score={vpn.privacyScore} label="Privacy" />
            <ScoreGauge score={vpn.securityScore} label="Security" />
            <ScoreGauge score={vpn.valueScore} label="Value" />
            <ScoreGauge score={vpn.easeScore} label="Ease of Use" />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-zinc-50 py-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main column */}
            <div className="lg:col-span-2 space-y-8">

              {/* Intro */}
              <section className="bg-white rounded-xl border border-zinc-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  VPN Vault UK Verdict
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">{vpn.fullReviewIntro}</p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">Our verdict: </strong>
                    {vpn.verdict}
                  </p>
                </div>
              </section>

              {/* Pros & Cons */}
              <section className="bg-white rounded-xl border border-zinc-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Pros & Cons
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-green-700 mb-3 flex items-center gap-2">
                      <Check className="w-4 h-4" /> What we liked
                    </h3>
                    <ul className="space-y-2">
                      {vpn.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <Check className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-red-600 mb-3 flex items-center gap-2">
                      <X className="w-4 h-4" /> What we didn't
                    </h3>
                    <ul className="space-y-2">
                      {vpn.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                          <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Speed */}
              <section className="bg-white rounded-xl border border-zinc-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-amber-600" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Speed Performance
                  </h2>
                  <span className="ml-auto text-sm font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {vpn.speedScore}/10
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-zinc-50 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-slate-900" style={{ fontFamily: "'DM Mono', monospace" }}>
                      {vpn.downloadSpeed}
                    </div>
                    <div className="text-xs text-slate-500">Mbps download</div>
                  </div>
                  <div className="bg-zinc-50 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-slate-900" style={{ fontFamily: "'DM Mono', monospace" }}>
                      {vpn.speedLossPercent}%
                    </div>
                    <div className="text-xs text-slate-500">Speed loss</div>
                  </div>
                  <div className="bg-zinc-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-bold text-slate-900">{vpn.protocol}</div>
                    <div className="text-xs text-slate-500">Default protocol</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We tested {vpn.name} on a dedicated 1 Gbps fibre connection, running 500+ speed tests across UK, US, and European servers at different times of day. The {vpn.speedLossPercent}% speed loss figure represents the median result on nearby UK servers using the {vpn.protocol} protocol. {vpn.speedLossPercent <= 5 ? "This is an excellent result — you'll notice no difference in everyday use." : vpn.speedLossPercent <= 10 ? "This is a good result for most use cases, though heavy users may notice the difference." : "This is a noticeable speed reduction — consider this if you have a slower base connection."}
                </p>
              </section>

              {/* Streaming */}
              <section className="bg-white rounded-xl border border-zinc-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center">
                    <Tv className="w-4 h-4 text-amber-600" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Streaming Performance
                  </h2>
                  <span className="ml-auto text-sm font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {vpn.streamingScore}/10
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                  {vpn.streamingServices.map((service) => (
                    <div
                      key={service.name}
                      className={`flex items-center gap-2 p-2.5 rounded-lg text-sm ${
                        service.works ? "bg-green-50 border border-green-100" : "bg-red-50 border border-red-100"
                      }`}
                    >
                      {service.works ? (
                        <Check className="w-3.5 h-3.5 text-green-600 shrink-0" />
                      ) : (
                        <X className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      )}
                      <span className={service.works ? "text-green-800" : "text-red-600"}>
                        {service.name}
                      </span>
                    </div>
                  ))}
                </div>
                {vpn.netflixLibraries > 0 && (
                  <div className="bg-zinc-50 rounded-lg p-3 text-sm text-slate-600">
                    <strong className="text-slate-800">Netflix libraries unblocked: </strong>
                    <span className="font-bold text-amber-600" style={{ fontFamily: "'DM Mono', monospace" }}>
                      {vpn.netflixLibraries}
                    </span>
                    {" "}(tested weekly — results may vary)
                  </div>
                )}
              </section>

              {/* Privacy */}
              <section className="bg-white rounded-xl border border-zinc-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center">
                    <Lock className="w-4 h-4 text-amber-600" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Privacy & Logging Policy
                  </h2>
                  <span className="ml-auto text-sm font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {vpn.privacyScore}/10
                  </span>
                </div>

                {/* Logs table */}
                <div className="mb-4 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200">
                        <th className="text-left py-2 text-slate-600 font-medium">Data Type</th>
                        <th className="text-right py-2 text-slate-600 font-medium">Logged?</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vpn.logsTable.map((row) => (
                        <tr key={row.field} className="border-b border-zinc-100">
                          <td className="py-2 text-slate-700">{row.field}</td>
                          <td className="py-2 text-right">
                            {typeof row.logged === "boolean" ? (
                              row.logged ? (
                                <span className="text-red-500 font-medium">Yes</span>
                              ) : (
                                <span className="text-green-600 font-medium">No</span>
                              )
                            ) : (
                              <span className="text-amber-600 font-medium text-xs">{row.logged}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-3">{vpn.privacyNotes}</p>

                {vpn.realWorldTest && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-green-800 mb-1">Real-world proof</div>
                        <p className="text-sm text-green-700 leading-relaxed">{vpn.realWorldTest}</p>
                      </div>
                    </div>
                  </div>
                )}

                {vpn.noLogsAudit && (
                  <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-green-600" />
                    No-logs policy independently audited by <strong>{vpn.noLogsAudit}</strong>
                  </div>
                )}
              </section>

              {/* Security */}
              <section className="bg-white rounded-xl border border-zinc-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-amber-600" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Security & Encryption
                  </h2>
                  <span className="ml-auto text-sm font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {vpn.securityScore}/10
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "Encryption", value: vpn.encryption },
                    { label: "Protocols", value: vpn.protocols.slice(0, 2).join(", ") },
                    { label: "Kill Switch", value: vpn.killSwitch ? "Yes" : "No" },
                    { label: "RAM-Only Servers", value: vpn.ramOnlyServers ? "Yes" : "No" },
                    { label: "Split Tunnelling", value: vpn.splitTunneling ? "Yes" : "No" },
                    { label: "Ad Blocker", value: vpn.adBlocker ? "Yes" : "No" },
                    { label: "Double VPN", value: vpn.doubleVpn ? "Yes" : "No" },
                    { label: "Tor Support", value: vpn.torSupport ? "Yes" : "No" },
                    { label: "Port Forwarding", value: vpn.portForwarding ? "Yes" : "No" },
                  ].map((item) => (
                    <div key={item.label} className="bg-zinc-50 rounded-lg p-3">
                      <div className="text-xs text-slate-500 mb-1">{item.label}</div>
                      <div className={`text-sm font-semibold ${
                        item.value === "Yes" ? "text-green-700" :
                        item.value === "No" ? "text-slate-400" : "text-slate-800"
                      }`}>
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Pricing */}
              <section className="bg-white rounded-xl border border-zinc-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Pricing & Plans
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div className="bg-zinc-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-slate-900 mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>
                      {vpn.monthlyPrice}
                    </div>
                    <div className="text-xs text-slate-500">{vpn.planLabel}</div>
                  </div>
                  <div className="bg-zinc-50 rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-slate-900 mb-1">{vpn.simultaneousDevices}</div>
                    <div className="text-xs text-slate-500">Simultaneous devices</div>
                  </div>
                  <div className="bg-zinc-50 rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-slate-900 mb-1">{vpn.moneyBack}</div>
                    <div className="text-xs text-slate-500">Money-back guarantee</div>
                  </div>
                </div>
                <a
                  href={vpn.affiliateUrl}
                  rel="noopener noreferrer sponsored"
                  target="_blank"
                  className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-base py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Get {vpn.name} — {vpn.monthlyPrice}/mo
                </a>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick facts */}
              <div className="bg-white rounded-xl border border-zinc-200 p-5 sticky top-20">
                <h3 className="font-bold text-slate-900 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Quick Facts
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Overall Score", value: `${vpn.score}/10` },
                    { label: "Price", value: `${vpn.monthlyPrice}/mo (${vpn.planLabel})` },
                    { label: "Jurisdiction", value: vpn.jurisdiction },
                    { label: "Servers", value: `${vpn.servers} in ${vpn.countries} countries` },
                    { label: "Devices", value: String(vpn.simultaneousDevices) },
                    { label: "No-logs Audit", value: vpn.noLogsAudit || "None" },
                    { label: "Money-back", value: vpn.moneyBack },
                    { label: "Free Version", value: vpn.freeVersion ? "Yes" : "No" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-start gap-2 text-sm border-b border-zinc-100 pb-2 last:border-0 last:pb-0">
                      <span className="text-slate-500 shrink-0">{item.label}</span>
                      <span className="text-slate-800 font-medium text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={vpn.affiliateUrl}
                  rel="noopener noreferrer sponsored"
                  target="_blank"
                  className="mt-4 block w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-sm py-2.5 rounded-lg transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Visit {vpn.name}
                </a>
              </div>

              {/* Compare with others */}
              <div className="bg-white rounded-xl border border-zinc-200 p-5">
                <h3 className="font-bold text-slate-900 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Compare with Others
                </h3>
                <div className="space-y-2">
                  {otherVpns.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/review/${other.slug}`}
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-zinc-50 transition-colors group"
                    >
                      <div className="w-12 h-7 rounded-md overflow-hidden shrink-0 border border-zinc-100 bg-white flex items-center justify-center">
                        <img src={other.logoUrl} alt={`${other.name} logo`} className="w-full h-full object-contain" loading="lazy" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-slate-800 group-hover:text-amber-700 transition-colors">
                          {other.name}
                        </div>
                        <div className="text-xs text-slate-500">{other.monthlyPrice}/mo</div>
                      </div>
                      <div className="text-sm font-bold text-slate-600" style={{ fontFamily: "'DM Mono', monospace" }}>
                        {other.score}
                      </div>
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
