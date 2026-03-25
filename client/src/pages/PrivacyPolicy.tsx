// VPN Search — Privacy Policy
import SEOHead from "@/components/SEOHead";

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead title="Privacy Policy — VPN Search" description="VPN Search privacy policy." canonical="/privacy-policy" />
      <div className="bg-zinc-950 py-14">
        <div className="container">
          <h1 className="text-3xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Privacy Policy</h1>
          <p className="text-zinc-400 mt-2">Last updated: March 2026</p>
        </div>
      </div>
      <div className="bg-zinc-50 py-10">
        <div className="container max-w-3xl">
          <div className="bg-white rounded-xl border border-zinc-200 p-8 prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed">
            <h2>1. Information We Collect</h2>
            <p>VPN Search collects minimal data. When you visit our website, our hosting provider may collect standard server logs including your IP address, browser type, and pages visited. We do not collect personal information unless you voluntarily provide it (e.g. via a contact form).</p>
            <h2>2. Cookies</h2>
            <p>We use essential cookies to ensure the website functions correctly. We also use analytics cookies (via a privacy-respecting analytics platform) to understand how visitors use our site. You can opt out of analytics cookies via our cookie consent banner. We do not use advertising cookies or sell your data to third parties.</p>
            <h2>3. Affiliate Links</h2>
            <p>Our site contains affiliate links to VPN providers. When you click these links and make a purchase, we may earn a commission. The VPN provider may set their own cookies. We recommend reviewing the privacy policy of any VPN provider before purchasing.</p>
            <h2>4. Third-Party Services</h2>
            <p>We use a privacy-respecting analytics service that does not use cookies and does not collect personal data. We do not use Google Analytics, Facebook Pixel, or any advertising networks.</p>
            <h2>5. Your Rights</h2>
            <p>Under UK GDPR, you have the right to access, correct, or delete any personal data we hold about you. To exercise these rights, please contact us at privacy@vpnsearch.co.uk.</p>
            <h2>6. Changes to This Policy</h2>
            <p>We may update this policy from time to time. The date at the top of this page indicates when it was last updated. Continued use of the site constitutes acceptance of the updated policy.</p>
          </div>
        </div>
      </div>
    </>
  );
}
