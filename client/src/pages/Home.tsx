// VPN Vault UK — Homepage
// Design: "Digital Cartography" — off-white, slate text, amber accent
// Layout: Asymmetric hero, horizontal score cards, editorial sections
// COMPLETELY DIFFERENT from vpncompareuk.co.uk

import { Link } from "wouter";
import { ArrowRight, Shield, Zap, Eye, Star, CheckCircle, ExternalLink, ChevronRight, Clock } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { vpnProviders, getVpnsByUseCase } from "@/lib/vpnData";
import { blogPosts } from "@/lib/blogData";

// Hero image from generation
const HERO_IMAGE = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&auto=format&fit=crop&q=80";

export default function Home() {
  const topVpns = vpnProviders.slice(0, 5);
  const streamingVpns = getVpnsByUseCase("streaming").slice(0, 3);
  const privacyVpns = getVpnsByUseCase("privacy").slice(0, 3);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <SEOHead
        title="Best VPN UK 2026 — Independent Reviews & Rankings"
        description="Independent, in-depth VPN reviews for UK users. We test every VPN ourselves — speed, streaming, privacy, and value. Find the best VPN for your needs."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "VPN Vault UK",
          url: "https://www.vpnvaultuk.co.uk",
          description: "Independent VPN reviews and rankings for UK users",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://www.vpnvaultuk.co.uk/best-vpns-uk",
          },
        }}
      />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-zinc-950 min-h-[580px] flex items-center">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/95 to-zinc-950/60" />

        <div className="relative container py-20">
          <div className="max-w-2xl">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <Shield className="w-3.5 h-3.5" />
              15 VPNs independently tested — March 2026
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Find the Best VPN
              <br />
              <span className="text-amber-400">for UK Users</span>
            </h1>

            <p className="text-lg text-zinc-300 leading-relaxed mb-8 max-w-xl">
              We purchase every VPN subscription ourselves and run hundreds of tests — speed, streaming, privacy, and value. No sponsored rankings. No paid placements. Just honest data.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/best-vpns-uk"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-base px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                See All Rankings
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/vpn-comparison"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-6 py-3 rounded-lg transition-all duration-200 border border-white/20"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Compare VPNs
              </Link>
            </div>

            {/* Stats row */}
            <div className="mt-10 flex flex-wrap gap-8">
              {[
                { value: "15", label: "VPNs tested" },
                { value: "500+", label: "Speed tests run" },
                { value: "3 yrs", label: "Testing experience" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-amber-400" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TOP 5 QUICK PICKS ─── */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <div className="container">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Our Rankings
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Best VPNs for UK Users — March 2026
              </h2>
            </div>
            <Link href="/best-vpns-uk" className="text-sm font-medium text-amber-600 hover:text-amber-700 flex items-center gap-1 transition-colors">
              View all 15 VPNs <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {topVpns.map((vpn, i) => (
              <div
                key={vpn.slug}
                className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-200 hover:shadow-sm ${
                  i === 0 ? "border-amber-300 bg-amber-50/50 ring-1 ring-amber-200" : "border-zinc-200 bg-white hover:border-amber-200"
                }`}
              >
                {/* Rank */}
                <div
                  className={`text-2xl font-bold w-10 text-center shrink-0 ${i === 0 ? "text-amber-500" : "text-zinc-300"}`}
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Logo */}
                <div className="w-16 h-10 rounded-lg overflow-hidden shrink-0 border border-zinc-100 bg-white flex items-center justify-center">
                  <img src={vpn.logoUrl} alt={`${vpn.name} logo`} className="w-full h-full object-contain" loading="lazy" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {vpn.name}
                    </span>
                    {i === 0 && (
                      <span className="text-xs bg-amber-500 text-slate-900 font-bold px-2 py-0.5 rounded">
                        Editor's Choice
                      </span>
                    )}
                    <span className="text-xs text-slate-500 hidden sm:inline">{vpn.tagline}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-1 flex-wrap">
                    <span className="text-xs text-slate-500">
                      <span className="font-medium text-slate-700">{vpn.monthlyPrice}/mo</span> · {vpn.planLabel}
                    </span>
                    <span className="text-xs text-slate-400">{vpn.countries} countries</span>
                    <span className="text-xs text-slate-400">{vpn.moneyBack} guarantee</span>
                  </div>
                </div>

                {/* Score */}
                <div className="text-right shrink-0 hidden sm:block">
                  <div className="text-xl font-bold text-slate-900" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {vpn.score}
                  </div>
                  <div className="text-xs text-slate-400">/ 10</div>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={vpn.affiliateUrl}
                    rel="noopener noreferrer sponsored"
                    target="_blank"
                    className={`inline-flex items-center gap-1 font-semibold text-sm px-3 py-1.5 rounded-md transition-colors ${
                      i === 0
                        ? "bg-amber-500 hover:bg-amber-400 text-slate-900"
                        : "bg-zinc-100 hover:bg-zinc-200 text-slate-700"
                    }`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Get Deal
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <Link href={`/review/${vpn.slug}`} className="hidden md:inline-flex text-xs text-amber-600 hover:text-amber-700 transition-colors">
                    Review →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/best-vpns-uk"
              className="inline-flex items-center gap-2 border border-zinc-200 hover:border-amber-300 text-slate-700 hover:text-amber-700 font-medium text-sm px-6 py-2.5 rounded-lg transition-all duration-200"
            >
              See all 15 VPN rankings
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── USE CASE SECTIONS ─── */}
      <section className="py-16 bg-zinc-50">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Find Your Perfect VPN
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Best VPNs by Use Case
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Streaming */}
            <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
              <div className="bg-slate-900 p-5 flex items-center gap-3">
                <div className="w-8 h-8 bg-amber-500 rounded-md flex items-center justify-center">
                  <Zap className="w-4 h-4 text-slate-900" />
                </div>
                <div>
                  <h3 className="text-white font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Best for Streaming
                  </h3>
                  <p className="text-zinc-400 text-xs">BBC iPlayer, Netflix, Disney+</p>
                </div>
              </div>
              <div className="p-5 space-y-3">
                {streamingVpns.map((vpn, i) => (
                  <div key={vpn.slug} className="flex items-center gap-3">
                    <span className="text-sm font-bold text-zinc-300 w-5" style={{ fontFamily: "'DM Mono', monospace" }}>
                      {i + 1}
                    </span>
                    <div className="w-12 h-7 rounded-md overflow-hidden shrink-0 border border-zinc-100 bg-white flex items-center justify-center">
                      <img src={vpn.logoUrl} alt={vpn.name} className="w-full h-full object-contain" loading="lazy" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-semibold text-slate-800">{vpn.name}</span>
                      <span className="text-xs text-slate-500 ml-2">{vpn.netflixLibraries} Netflix libraries</span>
                    </div>
                    <span className="text-sm font-bold text-amber-600" style={{ fontFamily: "'DM Mono', monospace" }}>
                      {vpn.streamingScore}
                    </span>
                  </div>
                ))}
                <Link href="/streaming-vpn" className="block text-center text-sm font-medium text-amber-600 hover:text-amber-700 pt-2 border-t border-zinc-100 transition-colors">
                  Full streaming guide →
                </Link>
              </div>
            </div>

            {/* Privacy */}
            <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
              <div className="bg-slate-900 p-5 flex items-center gap-3">
                <div className="w-8 h-8 bg-amber-500 rounded-md flex items-center justify-center">
                  <Eye className="w-4 h-4 text-slate-900" />
                </div>
                <div>
                  <h3 className="text-white font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Best for Privacy
                  </h3>
                  <p className="text-zinc-400 text-xs">No-logs, audited, strong jurisdiction</p>
                </div>
              </div>
              <div className="p-5 space-y-3">
                {privacyVpns.map((vpn, i) => (
                  <div key={vpn.slug} className="flex items-center gap-3">
                    <span className="text-sm font-bold text-zinc-300 w-5" style={{ fontFamily: "'DM Mono', monospace" }}>
                      {i + 1}
                    </span>
                    <div className="w-12 h-7 rounded-md overflow-hidden shrink-0 border border-zinc-100 bg-white flex items-center justify-center">
                      <img src={vpn.logoUrl} alt={vpn.name} className="w-full h-full object-contain" loading="lazy" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-semibold text-slate-800">{vpn.name}</span>
                      <span className="text-xs text-slate-500 ml-2">{vpn.jurisdiction}</span>
                    </div>
                    <span className="text-sm font-bold text-amber-600" style={{ fontFamily: "'DM Mono', monospace" }}>
                      {vpn.privacyScore}
                    </span>
                  </div>
                ))}
                <Link href="/private-vpn" className="block text-center text-sm font-medium text-amber-600 hover:text-amber-700 pt-2 border-t border-zinc-100 transition-colors">
                  Full privacy guide →
                </Link>
              </div>
            </div>
          </div>

          {/* Use case pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { label: "Gaming", href: "/vpn-for-gaming" },
              { label: "Travel", href: "/vpn-for-travel" },
              { label: "Torrenting", href: "/best-vpns-uk#torrenting" },
              { label: "Free VPNs", href: "/free-vpn-uk" },
              { label: "Budget VPNs", href: "/vpn-deals" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-1.5 border border-zinc-200 hover:border-amber-300 text-slate-600 hover:text-amber-700 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 bg-white"
              >
                {item.label}
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST SECTION ─── */}
      <section className="py-16 bg-white border-t border-b border-zinc-100">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Our Methodology
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                How We Test VPNs
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Every VPN in our rankings has been purchased with our own money and tested on a dedicated 1 Gbps fibre connection. We run a minimum of 500 speed tests per VPN, test every major UK streaming service weekly, and analyse privacy policies in detail — not just the marketing summary.
              </p>
              <div className="space-y-3">
                {[
                  "Speed tested on a dedicated 1 Gbps fibre connection",
                  "Streaming tested weekly — BBC iPlayer, Netflix, Disney+, ITVX, Sky Go",
                  "Privacy policies read in full, not just the summary",
                  "No sponsored rankings or paid placements",
                  "Affiliate commissions do not affect our scores",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
              >
                Read our full methodology
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Score breakdown visual */}
            <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-200">
              <h3 className="text-sm font-bold text-slate-700 mb-4 uppercase tracking-wide" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                How We Score Each VPN
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Speed & Performance", weight: "25%", description: "500+ tests on 1 Gbps line" },
                  { label: "Privacy & Logging", weight: "25%", description: "Policy analysis + real-world tests" },
                  { label: "Streaming Performance", weight: "20%", description: "10 UK & international services" },
                  { label: "Security & Encryption", weight: "15%", description: "Protocol, audit, leak tests" },
                  { label: "Value for Money", weight: "10%", description: "Price vs. features vs. competitors" },
                  { label: "Ease of Use", weight: "5%", description: "App quality across all platforms" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-slate-700">{item.label}</span>
                        <span className="text-xs font-bold text-amber-600" style={{ fontFamily: "'DM Mono', monospace" }}>
                          {item.weight}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED VPN ─── */}
      <section className="py-16 bg-zinc-950">
        <div className="container">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                #1 Ranked VPN
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Why NordVPN Tops Our Rankings
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main card */}
            <div className="lg:col-span-2 bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-12 rounded-xl overflow-hidden border border-slate-600 bg-slate-900 flex items-center justify-center">
                  <img src={vpnProviders[0].logoUrl} alt="NordVPN logo" className="w-full h-full object-contain p-1" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-white font-bold text-xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      NordVPN
                    </h3>
                    <span className="bg-amber-500 text-slate-900 text-xs font-bold px-2 py-0.5 rounded">
                      9.5 / 10
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm mt-1">Panama · 6,800+ servers · 111 countries</p>
                </div>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                NordVPN leads our rankings because it does everything well — and several things better than any competitor. Its NordLynx protocol delivers just 4% speed loss on our 1 Gbps test line, making it the fastest VPN we've tested. It's the most reliable VPN for BBC iPlayer, consistently unblocking it when others fail. And its Panama jurisdiction with RAM-only servers has been proven in a real-world legal case.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Speed", score: "9.7" },
                  { label: "Streaming", score: "9.8" },
                  { label: "Privacy", score: "9.2" },
                  { label: "Value", score: "9.0" },
                ].map((item) => (
                  <div key={item.label} className="bg-slate-700/50 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-amber-400" style={{ fontFamily: "'DM Mono', monospace" }}>
                      {item.score}
                    </div>
                    <div className="text-xs text-zinc-400 mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href="#"
                  rel="noopener noreferrer sponsored"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-sm px-5 py-2.5 rounded-lg transition-all duration-200"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Get NordVPN Deal
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link href="/review/nordvpn" className="text-sm text-zinc-400 hover:text-amber-400 transition-colors">
                  Read full review →
                </Link>
              </div>
            </div>

            {/* Key facts */}
            <div className="space-y-4">
              {[
                { icon: Zap, title: "Fastest VPN tested", body: "Just 4% speed loss on NordLynx — the fastest protocol in our tests" },
                { icon: Star, title: "Best for BBC iPlayer", body: "Consistently unblocks iPlayer when other VPNs fail" },
                { icon: Shield, title: "Proven no-logs", body: "Real-world legal case confirmed no data was stored" },
              ].map((item) => (
                <div key={item.title} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {item.title}
                      </div>
                      <div className="text-zinc-400 text-xs leading-relaxed">{item.body}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── LATEST ARTICLES ─── */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                VPN Knowledge Base
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Latest Articles
              </h2>
            </div>
            <Link href="/articles" className="text-sm font-medium text-amber-600 hover:text-amber-700 flex items-center gap-1 transition-colors">
              All articles <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/articles/${post.slug}`} className="group">
                <article className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-amber-200 hover:shadow-md transition-all duration-200 h-full flex flex-col">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 leading-snug mb-2 group-hover:text-amber-700 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed flex-1">{post.excerpt.slice(0, 100)}…</p>
                    <div className="mt-4 text-xs font-medium text-amber-600 group-hover:text-amber-700 transition-colors">
                      Read article →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-16 bg-amber-50 border-t border-amber-100">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Not sure which VPN to choose?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
            Our full rankings page compares all 15 VPNs across speed, streaming, privacy, and value — with expandable detail cards for each provider.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/best-vpns-uk"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-base px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              See Full Rankings
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/vpn-comparison"
              className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold text-base px-6 py-3 rounded-lg transition-all duration-200 bg-white"
            >
              Compare Side by Side
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
