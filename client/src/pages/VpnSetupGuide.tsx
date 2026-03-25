// VPN Search — VPN Setup Guide
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const STEPS = [
  { step: 1, title: "Choose a VPN provider", body: "Pick a VPN from our rankings. For most UK users, NordVPN is the best starting point — it's fast, works with all streaming services, and has a simple app." },
  { step: 2, title: "Create an account and subscribe", body: "Go to the provider's website and sign up. The 2-year plan is almost always the best value. You'll be asked for an email address and payment details." },
  { step: 3, title: "Download the app", body: "Download the VPN app for your device — Windows, Mac, iOS, Android, or Linux. Most VPNs support all major platforms. Install it as you would any other app." },
  { step: 4, title: "Log in and connect", body: "Open the app and log in with your account details. Click the large connect button to connect to the fastest available server. You're now protected." },
  { step: 5, title: "Choose a server location (optional)", body: "By default, the VPN will connect you to the fastest nearby server. To access content from another country (e.g. US Netflix), select a server in that country from the server list." },
  { step: 6, title: "Verify your connection", body: "Visit a site like whatismyip.com to confirm your IP address has changed. If it shows the VPN server's IP address rather than your own, the VPN is working correctly." },
];

export default function VpnSetupGuide() {
  return (
    <>
      <SEOHead
        title="How to Set Up a VPN in the UK — Step-by-Step Guide"
        description="A simple step-by-step guide to setting up a VPN on any device in the UK. Works for Windows, Mac, iPhone, Android, and more."
        canonical="/vpn-setup-guide"
      />
      <div className="bg-zinc-950 py-14">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>How to Set Up a VPN in the UK</h1>
          <p className="text-zinc-400 max-w-2xl leading-relaxed">A simple step-by-step guide. Setting up a VPN takes less than 5 minutes on any device.</p>
        </div>
      </div>
      <div className="bg-zinc-50 py-10">
        <div className="container max-w-3xl">
          <div className="space-y-4 mb-10">
            {STEPS.map((step) => (
              <div key={step.step} className="bg-white rounded-xl border border-zinc-200 p-5 flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-slate-900 font-bold text-lg shrink-0" style={{ fontFamily: "'DM Mono', monospace" }}>{step.step}</div>
                <div>
                  <h2 className="font-bold text-slate-900 mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{step.title}</h2>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl border border-zinc-200 p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Platform-Specific Notes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[{ platform: "Windows", note: "Download the .exe installer from the VPN's website. Enable the kill switch in settings for maximum protection." }, { platform: "Mac", note: "Download from the VPN's website or the Mac App Store. Some features may be limited in the App Store version." }, { platform: "iPhone / iPad", note: "Download from the App Store. iOS 14+ has a privacy feature that may conflict with some VPNs — check the VPN's iOS guide." }, { platform: "Android", note: "Download from the Google Play Store. Enable 'Always-on VPN' in Android settings for automatic protection." }].map((item) => (
                <div key={item.platform} className="bg-zinc-50 rounded-lg p-4">
                  <div className="font-semibold text-slate-800 mb-1">{item.platform}</div>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Link href="/best-vpns-uk" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-base px-6 py-3 rounded-lg transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Choose a VPN to Get Started <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
