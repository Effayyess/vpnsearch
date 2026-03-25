// VPN Vault UK — VPN Comparison Table
import { useState } from "react";
import { Check, X } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { vpnProviders } from "@/lib/vpnData";

export default function VpnComparison() {
  const [selected, setSelected] = useState<string[]>(["nordvpn", "expressvpn", "surfshark"]);
  const vpns = vpnProviders.filter((v) => selected.includes(v.slug));
  const allVpns = vpnProviders;

  const toggle = (slug: string) => {
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : prev.length < 4 ? [...prev, slug] : prev
    );
  };

  return (
    <>
      <SEOHead
        title="Compare VPNs Side by Side — VPN Vault UK"
        description="Compare the best VPNs for UK users side by side. Speed, streaming, privacy, price, and features — all in one table."
        canonical="/vpn-comparison"
      />
      <div className="bg-zinc-950 py-14">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Compare VPNs Side by Side</h1>
          <p className="text-zinc-400 max-w-2xl leading-relaxed">Select up to 4 VPNs to compare across speed, streaming, privacy, and price.</p>
        </div>
      </div>
      <div className="bg-zinc-50 py-10">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-8">
            {allVpns.map((vpn) => (
              <button
                key={vpn.slug}
                onClick={() => toggle(vpn.slug)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${selected.includes(vpn.slug) ? "bg-amber-500 border-amber-500 text-slate-900" : "bg-white border-zinc-200 text-slate-600 hover:border-amber-300"}`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {vpn.name}
              </button>
            ))}
          </div>
          {vpns.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl border border-zinc-200 overflow-hidden text-sm">
                <thead>
                  <tr className="border-b border-zinc-200">
                    <th className="text-left p-4 text-slate-500 font-medium w-40">Feature</th>
                    {vpns.map((vpn) => (
                      <th key={vpn.slug} className="p-4 text-center">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm mx-auto mb-1" style={{ backgroundColor: vpn.color }}>{vpn.name.charAt(0)}</div>
                        <div className="font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{vpn.name}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Overall Score", key: (v: typeof vpns[0]) => `${v.score}/10` },
                    { label: "Speed Score", key: (v: typeof vpns[0]) => `${v.speedScore}/10` },
                    { label: "Streaming Score", key: (v: typeof vpns[0]) => `${v.streamingScore}/10` },
                    { label: "Privacy Score", key: (v: typeof vpns[0]) => `${v.privacyScore}/10` },
                    { label: "Price (best plan)", key: (v: typeof vpns[0]) => `${v.monthlyPrice}/mo` },
                    { label: "Jurisdiction", key: (v: typeof vpns[0]) => v.jurisdiction },
                    { label: "Servers", key: (v: typeof vpns[0]) => v.servers },
                    { label: "Countries", key: (v: typeof vpns[0]) => String(v.countries) },
                    { label: "Devices", key: (v: typeof vpns[0]) => String(v.simultaneousDevices) },
                    { label: "Money-back", key: (v: typeof vpns[0]) => v.moneyBack },
                    { label: "No-logs Audit", key: (v: typeof vpns[0]) => v.noLogsAudit || "None" },
                    { label: "Kill Switch", key: (v: typeof vpns[0]) => v.killSwitch },
                    { label: "RAM-Only Servers", key: (v: typeof vpns[0]) => v.ramOnlyServers },
                    { label: "Ad Blocker", key: (v: typeof vpns[0]) => v.adBlocker },
                    { label: "Double VPN", key: (v: typeof vpns[0]) => v.doubleVpn },
                    { label: "BBC iPlayer", key: (v: typeof vpns[0]) => v.unblocksBbcIplayer },
                    { label: "Netflix", key: (v: typeof vpns[0]) => v.unblocksNetflix },
                    { label: "Disney+", key: (v: typeof vpns[0]) => v.unblocksDisneyPlus },
                  ].map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                      <td className="p-4 text-slate-600 font-medium">{row.label}</td>
                      {vpns.map((vpn) => {
                        const val = row.key(vpn);
                        return (
                          <td key={vpn.slug} className="p-4 text-center">
                            {typeof val === "boolean" ? (
                              val ? <Check className="w-4 h-4 text-green-600 mx-auto" /> : <X className="w-4 h-4 text-red-400 mx-auto" />
                            ) : (
                              <span className="text-slate-800 font-medium">{val}</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
