// VPN Search — 404 Not Found
import { Link } from "wouter";
import { Shield, ChevronRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Page Not Found — VPN Search"
        description="The page you're looking for doesn't exist. Head back to our VPN rankings."
        canonical="/404"
      />
      <div className="min-h-[60vh] flex items-center justify-center bg-zinc-50">
        <div className="text-center px-4">
          <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Shield className="w-8 h-8 text-slate-900" />
          </div>
          <div className="text-8xl font-bold text-zinc-200 mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>404</div>
          <h1 className="text-2xl font-bold text-slate-900 mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Page not found
          </h1>
          <p className="text-slate-500 mb-8 max-w-sm mx-auto leading-relaxed">
            The page you're looking for doesn't exist. Head back to our rankings to find the best VPN for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/best-vpns-uk"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-sm px-5 py-2.5 rounded-lg transition-colors"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              View VPN Rankings <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white border border-zinc-200 hover:border-amber-300 text-slate-700 font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
