// VPN Search — VPN Explained Guide
import { Link } from "wouter";
import { Shield, Zap, Lock, Globe, ChevronRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const SECTIONS = [
  { icon: Shield, title: "What is a VPN?", body: "A VPN (Virtual Private Network) creates an encrypted tunnel between your device and a server operated by the VPN provider. All your internet traffic passes through this tunnel, hiding it from your ISP, the government, and anyone else who might be monitoring your connection. Your real IP address is replaced with the VPN server's IP address, making it appear as though you're browsing from a different location." },
  { icon: Lock, title: "How does VPN encryption work?", body: "Modern VPNs use AES-256 encryption — the same standard used by governments and militaries worldwide. This means your data is scrambled using a 256-bit key, making it computationally impossible to crack. The VPN also uses a secure handshake protocol (typically TLS) to establish the connection, preventing man-in-the-middle attacks." },
  { icon: Zap, title: "VPN protocols explained", body: "The protocol determines how your data is transmitted. WireGuard is the newest and fastest — it uses modern cryptography and is significantly faster than older protocols. OpenVPN is the most established and widely audited. IKEv2 is fast and stable, particularly on mobile. Avoid PPTP and L2TP/IPSec — they are outdated and have known vulnerabilities." },
  { icon: Globe, title: "What a VPN can and cannot do", body: "A VPN can hide your IP address and location, encrypt your traffic, bypass geo-restrictions on streaming services, and protect you on public Wi-Fi. A VPN cannot make you completely anonymous (your accounts, browser fingerprint, and cookies still identify you), protect you from malware, or prevent websites from tracking you via cookies." },
];

export default function VpnExplained() {
  return (
    <>
      <SEOHead
        title="How Does a VPN Work? — VPN Explained for UK Users"
        description="A plain-English explanation of how VPNs work, what they protect you from, and what they cannot do. Written for UK users."
        canonical="/vpn-explained"
      />
      <div className="bg-zinc-950 py-14">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>How Does a VPN Work?</h1>
          <p className="text-zinc-400 max-w-2xl leading-relaxed">A plain-English guide to VPN technology — what it does, how it works, and what it cannot do.</p>
        </div>
      </div>
      <div className="bg-zinc-50 py-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {SECTIONS.map((section) => (
                <div key={section.title} className="bg-white rounded-xl border border-zinc-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center shrink-0"><section.icon className="w-4 h-4 text-amber-600" /></div>
                    <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{section.title}</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{section.body}</p>
                </div>
              ))}
            </div>
            <div className="space-y-5">
              <div className="bg-white rounded-xl border border-amber-200 p-5">
                <div className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2">Ready to get started?</div>
                <div className="font-bold text-slate-900 text-lg mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>See Our Top Picks</div>
                <p className="text-sm text-slate-500 mb-4">We've tested 15 VPNs so you don't have to.</p>
                <Link href="/best-vpns-uk" className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-sm py-2.5 rounded-lg transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>View Rankings</Link>
              </div>
              <div className="bg-white rounded-xl border border-zinc-200 p-5">
                <h3 className="font-bold text-slate-900 mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Related Guides</h3>
                <div className="space-y-2">
                  {[{ label: "Do I Need a VPN?", href: "/do-i-need-a-vpn" }, { label: "Is a VPN Legal in the UK?", href: "/is-vpn-legal-uk" }, { label: "VPN Setup Guide", href: "/vpn-setup-guide" }].map((item) => (
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
