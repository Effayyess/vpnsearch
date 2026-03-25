// VPN Vault UK — Cookie Policy
import SEOHead from "@/components/SEOHead";

export default function CookiePolicy() {
  return (
    <>
      <SEOHead title="Cookie Policy — VPN Vault UK" description="VPN Vault UK cookie policy." canonical="/cookie-policy" />
      <div className="bg-zinc-950 py-14">
        <div className="container">
          <h1 className="text-3xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Cookie Policy</h1>
          <p className="text-zinc-400 mt-2">Last updated: March 2026</p>
        </div>
      </div>
      <div className="bg-zinc-50 py-10">
        <div className="container max-w-3xl">
          <div className="bg-white rounded-xl border border-zinc-200 p-8 prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed">
            <h2>What are cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and understand how you use the site.</p>
            <h2>Cookies we use</h2>
            <h3>Essential cookies</h3>
            <p>These cookies are necessary for the website to function. They include cookies that remember your cookie consent choice. You cannot opt out of essential cookies.</p>
            <h3>Analytics cookies (optional)</h3>
            <p>We use a privacy-respecting analytics service to understand how visitors use our site. This service does not use cookies that track you across websites and does not collect personal data. You can opt out via the cookie consent banner.</p>
            <h2>Third-party cookies</h2>
            <p>When you click an affiliate link to a VPN provider, that provider may set their own cookies. We have no control over these cookies. Please review the cookie policy of the relevant VPN provider.</p>
            <h2>Managing cookies</h2>
            <p>You can manage cookies through your browser settings. Note that disabling cookies may affect the functionality of some websites. You can also update your cookie preferences at any time by clicking the cookie settings link in our footer.</p>
          </div>
        </div>
      </div>
    </>
  );
}
