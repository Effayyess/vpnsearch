// VPN Vault UK — VpnLogo component
// Uses real VPN brand icons (apple-touch-icon quality) from CDN.
// Falls back to a branded colour badge if the image fails to load.

import { useState } from "react";

interface VpnLogoProps {
  slug: string;
  name: string;
  className?: string;
}

const BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663462511898/883qKzoc5iMmoQQShbBxNr/";

// Real icon URLs sourced from each VPN provider's website (apple-touch-icon / Google favicon)
const LOGO_URLS: Record<string, string> = {
  nordvpn:       BASE + "nordvpn_22ff2754.png",
  expressvpn:    BASE + "expressvpn_428ea4ec.png",
  surfshark:     BASE + "surfshark_54cae1c3.png",
  cyberghost:    BASE + "cyberghost_5241e8d3.png",
  protonvpn:     BASE + "protonvpn_2654120c.png",
  ipvanish:      BASE + "ipvanish_432c5f13.png",
  pia:           BASE + "pia_45f458a3.png",
  mullvad:       BASE + "mullvad_bede291e.png",
  windscribe:    BASE + "windscribe_9f71d4b8.png",
  hidemevpn:     BASE + "hidemevpn_c167ffd7.png",
  tunnelbear:    BASE + "tunnelbear_78d23ff6.png",
  hotspotshield: BASE + "hotspotshield_1a1a25d7.png",
  atlasvpn:      BASE + "atlasvpn_24eeab76.png",
  vyprvpn:       BASE + "vyprvpn_57b95442.png",
  strongvpn:     BASE + "strongvpn_407c8728.png",
};

// Brand colours for the fallback badge
const BRAND_COLORS: Record<string, { bg: string; fg: string }> = {
  nordvpn:       { bg: "#4687FF", fg: "#fff" },
  expressvpn:    { bg: "#DA3940", fg: "#fff" },
  surfshark:     { bg: "#1DBFBF", fg: "#fff" },
  cyberghost:    { bg: "#FFCC00", fg: "#1a1a2e" },
  protonvpn:     { bg: "#6D4AFF", fg: "#fff" },
  ipvanish:      { bg: "#FF6B35", fg: "#fff" },
  pia:           { bg: "#4CAF50", fg: "#fff" },
  mullvad:       { bg: "#FFCC44", fg: "#2b2b2b" },
  windscribe:    { bg: "#1A3A5C", fg: "#fff" },
  hidemevpn:     { bg: "#00A651", fg: "#fff" },
  tunnelbear:    { bg: "#F5A623", fg: "#fff" },
  hotspotshield: { bg: "#0066CC", fg: "#fff" },
  atlasvpn:      { bg: "#0D1B4B", fg: "#fff" },
  vyprvpn:       { bg: "#C0392B", fg: "#fff" },
  strongvpn:     { bg: "#0A2240", fg: "#fff" },
};

export default function VpnLogo({ slug, name, className = "" }: VpnLogoProps) {
  const [imgError, setImgError] = useState(false);
  const logoUrl = LOGO_URLS[slug];
  const brand = BRAND_COLORS[slug] ?? { bg: "#334155", fg: "#fff" };

  if (!logoUrl || imgError) {
    // Branded colour fallback — shows first letter in brand colour
    return (
      <div
        className={`flex items-center justify-center rounded-lg font-black text-sm select-none ${className}`}
        style={{ background: brand.bg, color: brand.fg }}
        aria-label={`${name} logo`}
      >
        {name[0].toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={logoUrl}
      alt={`${name} logo`}
      className={`object-contain ${className}`}
      loading="lazy"
      onError={() => setImgError(true)}
    />
  );
}
