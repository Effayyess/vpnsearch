// VPN Search — About Page
import { Link } from "wouter";
import { Shield, CheckCircle, ChevronRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function About() {
  return (
    <>
      <SEOHead
        title="About VPN Search — Independent VPN Testing"
        description="VPN Search is an independent VPN review site. We purchase every VPN ourselves and test it on a dedicated 1 Gbps UK connection. No sponsored rankings."
        canonical="/about"
      />
      <div className="bg-zinc-950 py-14">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>About VPN Search</h1>
          <p className="text-zinc-400 max-w-2xl leading-relaxed">Independent VPN testing and reviews for UK users. We buy every VPN ourselves. No sponsored rankings.</p>
        </div>
      </div>
      <div className="bg-zinc-50 py-10">
        <div className="container max-w-3xl">
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-zinc-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Who We Are</h2>
              <p className="text-slate-600 leading-relaxed mb-4">VPN Search is an independent review site focused exclusively on VPNs for UK users. We were founded because we were frustrated with VPN review sites that ranked VPNs based on affiliate commission rates rather than actual performance. Every VPN in our rankings has been purchased with our own money and tested on our own hardware.</p>
              <p className="text-slate-600 leading-relaxed">Our testing team has been evaluating VPNs for over three years. We run a dedicated 1 Gbps fibre connection specifically for VPN testing, conduct weekly streaming tests, and read every privacy policy in full.</p>
            </div>
            <div className="bg-white rounded-xl border border-zinc-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our Testing Methodology</h2>
              <div className="space-y-3">
                {[
                  { title: "Speed testing", body: "500+ speed tests per VPN on a dedicated 1 Gbps fibre connection. Tests run at different times of day and across multiple server locations." },
                  { title: "Streaming testing", body: "Weekly tests on BBC iPlayer, Netflix, Disney+, ITVX, Sky Go, Amazon Prime, Channel 4, and NOW TV." },
                  { title: "Privacy analysis", body: "Full privacy policy review, cross-referenced with independent audits and real-world legal cases." },
                  { title: "Security testing", body: "DNS leak tests, WebRTC leak tests, kill switch verification, and protocol analysis." },
                  { title: "Value assessment", body: "Price comparison across all plan lengths, feature-to-price ratio analysis." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-800 text-sm">{item.title}</div>
                      <div className="text-sm text-slate-500 mt-0.5">{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl border border-zinc-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Affiliate Disclosure</h2>
              <p className="text-slate-600 leading-relaxed mb-3">VPN Search earns commission when you purchase a VPN through our links. This is how we fund our testing operation. However, our methodology is designed to be immune to financial incentives — we score each VPN on objective, measurable criteria, and our rankings reflect our honest assessment of each product.</p>
              <p className="text-slate-600 leading-relaxed">We have turned down sponsored placement requests from VPN providers. Our rankings are not for sale.</p>
            </div>
            <div className="text-center">
              <Link href="/best-vpns-uk" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-base px-6 py-3 rounded-lg transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                See Our Rankings <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
