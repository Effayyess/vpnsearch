// VPN Vault UK — Sticky Promotional Banner
// Design: Slate-900 background, amber CTA, countdown timer

import { useState, useEffect } from "react";
import { X, Clock } from "lucide-react";

function useCountdown(targetHours: number = 48) {
  const [timeLeft, setTimeLeft] = useState(() => {
    const stored = sessionStorage.getItem("vpnvault_banner_end");
    if (stored) return Math.max(0, parseInt(stored) - Date.now());
    const end = Date.now() + targetHours * 60 * 60 * 1000;
    sessionStorage.setItem("vpnvault_banner_end", String(end));
    return targetHours * 60 * 60 * 1000;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const next = Math.max(0, prev - 1000);
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { hours, minutes, seconds, expired: timeLeft <= 0 };
}

export default function StickyBanner() {
  const [dismissed, setDismissed] = useState(() => {
    return sessionStorage.getItem("vpnvault_banner_dismissed") === "true";
  });
  const { hours, minutes, seconds } = useCountdown(48);

  if (dismissed) return null;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-700 shadow-2xl">
      <div className="container py-3">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {/* Left: VPN info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center text-white font-bold text-sm shrink-0" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              N
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  NordVPN
                </span>
                <span className="bg-amber-500 text-slate-900 text-xs font-bold px-2 py-0.5 rounded">
                  75% OFF
                </span>
              </div>
              <p className="text-slate-400 text-xs">From £2.59/mo · 3 months FREE · 30-day money-back guarantee</p>
            </div>
          </div>

          {/* Centre: Countdown */}
          <div className="flex items-center gap-2 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="text-xs text-slate-400">Deal ends in</span>
            <div className="flex items-center gap-1" style={{ fontFamily: "'DM Mono', monospace" }}>
              <span className="bg-slate-800 text-amber-400 text-sm font-bold px-2 py-1 rounded min-w-[2rem] text-center">
                {pad(hours)}
              </span>
              <span className="text-slate-500 text-xs">:</span>
              <span className="bg-slate-800 text-amber-400 text-sm font-bold px-2 py-1 rounded min-w-[2rem] text-center">
                {pad(minutes)}
              </span>
              <span className="text-slate-500 text-xs">:</span>
              <span className="bg-slate-800 text-amber-400 text-sm font-bold px-2 py-1 rounded min-w-[2rem] text-center">
                {pad(seconds)}
              </span>
            </div>
          </div>

          {/* Right: CTA + dismiss */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              rel="noopener noreferrer sponsored"
              target="_blank"
              className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-sm px-5 py-2 rounded-md transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Claim Deal
            </a>
            <button
              onClick={() => {
                setDismissed(true);
                sessionStorage.setItem("vpnvault_banner_dismissed", "true");
              }}
              className="text-slate-500 hover:text-slate-300 transition-colors p-1"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
