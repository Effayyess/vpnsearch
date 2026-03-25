// VPN Search — GDPR/PECR Cookie Consent Banner

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("vpnsearch_cookie_consent");
    if (!consent) {
      setTimeout(() => setVisible(true), 1500);
    }
  }, []);

  function acceptAll() {
    const all = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem("vpnsearch_cookie_consent", JSON.stringify(all));
    setVisible(false);
  }

  function rejectAll() {
    const minimal = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem("vpnsearch_cookie_consent", JSON.stringify(minimal));
    setVisible(false);
  }

  function savePreferences() {
    localStorage.setItem("vpnsearch_cookie_consent", JSON.stringify(prefs));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-40 bg-white rounded-xl shadow-2xl border border-zinc-200 overflow-hidden">
      {/* Header */}
      <div className="bg-slate-900 px-5 py-4 flex items-center gap-3">
        <Cookie className="w-5 h-5 text-amber-400 shrink-0" />
        <h3 className="text-white font-semibold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Cookie Preferences
        </h3>
      </div>

      <div className="p-5">
        {!showManage ? (
          <>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              We use cookies to improve your experience and analyse site traffic. You can accept all cookies, reject non-essential ones, or manage your preferences.
            </p>
            <div className="flex flex-col gap-2">
              <button
                onClick={acceptAll}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-sm py-2.5 rounded-md transition-colors"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Accept All
              </button>
              <button
                onClick={rejectAll}
                className="w-full bg-zinc-100 hover:bg-zinc-200 text-slate-700 font-medium text-sm py-2.5 rounded-md transition-colors"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={() => setShowManage(true)}
                className="w-full text-sm text-slate-500 hover:text-slate-700 py-1.5 transition-colors"
              >
                Manage Preferences
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-3 mb-4">
              {[
                {
                  key: "necessary" as const,
                  label: "Necessary",
                  description: "Required for the site to function. Cannot be disabled.",
                  locked: true,
                },
                {
                  key: "analytics" as const,
                  label: "Analytics",
                  description: "Help us understand how visitors use the site.",
                  locked: false,
                },
                {
                  key: "marketing" as const,
                  label: "Marketing",
                  description: "Used to track affiliate link performance.",
                  locked: false,
                },
              ].map((item) => (
                <div key={item.key} className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium text-slate-800">{item.label}</div>
                    <div className="text-xs text-slate-500">{item.description}</div>
                  </div>
                  <div className="shrink-0">
                    {item.locked ? (
                      <span className="text-xs text-slate-400 bg-zinc-100 px-2 py-1 rounded">Always on</span>
                    ) : (
                      <button
                        onClick={() => setPrefs((p) => ({ ...p, [item.key]: !p[item.key] }))}
                        className={`w-10 h-5 rounded-full transition-colors relative ${
                          prefs[item.key] ? "bg-amber-500" : "bg-zinc-200"
                        }`}
                        role="switch"
                        aria-checked={prefs[item.key]}
                      >
                        <span
                          className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${
                            prefs[item.key] ? "translate-x-5" : "translate-x-0.5"
                          }`}
                        />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={savePreferences}
                className="flex-1 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-sm py-2 rounded-md transition-colors"
              >
                Save
              </button>
              <button
                onClick={() => setShowManage(false)}
                className="flex-1 bg-zinc-100 hover:bg-zinc-200 text-slate-700 text-sm py-2 rounded-md transition-colors"
              >
                Back
              </button>
            </div>
          </>
        )}
        <p className="text-xs text-slate-400 mt-3 text-center">
          See our{" "}
          <a href="/cookie-policy" className="underline hover:text-slate-600">
            Cookie Policy
          </a>{" "}
          for details.
        </p>
      </div>
    </div>
  );
}
