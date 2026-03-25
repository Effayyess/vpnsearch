// VPN Vault UK — VpnLogo component
// Renders inline SVG logos for all 15 VPN providers.
// Inline SVG bypasses CDN content-type issues and always renders correctly.

interface VpnLogoProps {
  slug: string;
  name: string;
  className?: string;
}

// Logo definitions: each returns an inline SVG string
const LOGOS: Record<string, { bg: string; fg: string; accent: string; abbr?: string }> = {
  nordvpn:       { bg: "#4687FF", fg: "#FFFFFF", accent: "#FFFFFF" },
  expressvpn:    { bg: "#DA3940", fg: "#FFFFFF", accent: "#FFFFFF" },
  surfshark:     { bg: "#1DBFBF", fg: "#FFFFFF", accent: "#FFFFFF" },
  cyberghost:    { bg: "#FFCC00", fg: "#1A1A2E", accent: "#1A1A2E" },
  protonvpn:     { bg: "#6D4AFF", fg: "#FFFFFF", accent: "#FFFFFF" },
  ipvanish:      { bg: "#70B244", fg: "#FFFFFF", accent: "#FFFFFF" },
  pia:           { bg: "#1C1C1C", fg: "#FFFFFF", accent: "#6DB33F", abbr: "PIA" },
  mullvad:       { bg: "#FFCC44", fg: "#2B2B2B", accent: "#2B2B2B" },
  hotspotshield: { bg: "#0066CC", fg: "#FFFFFF", accent: "#FFFFFF" },
  atlasvpn:      { bg: "#0D1B4B", fg: "#FFFFFF", accent: "#4FC3F7" },
  hidemevpn:     { bg: "#00A651", fg: "#FFFFFF", accent: "#FFFFFF" },
  tunnelbear:    { bg: "#F5A623", fg: "#FFFFFF", accent: "#FFFFFF" },
  windscribe:    { bg: "#1A3A5C", fg: "#FFFFFF", accent: "#4FC3F7" },
  vyprvpn:       { bg: "#C0392B", fg: "#FFFFFF", accent: "#FFFFFF" },
  strongvpn:     { bg: "#0A2240", fg: "#FFFFFF", accent: "#E8A020" },
};

export default function VpnLogo({ slug, name, className = "" }: VpnLogoProps) {
  const config = LOGOS[slug];

  if (!config) {
    // Fallback for unknown slugs
    return (
      <div
        className={`flex items-center justify-center rounded-lg font-bold text-sm ${className}`}
        style={{ background: "#334155", color: "#fff" }}
      >
        {name.slice(0, 3).toUpperCase()}
      </div>
    );
  }

  const { bg, fg, accent, abbr } = config;
  const displayName = abbr || name.toUpperCase();
  const letter = name[0].toUpperCase();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 60"
      className={className}
      role="img"
      aria-label={`${name} logo`}
    >
      {/* Background */}
      <rect width="200" height="60" rx="8" fill={bg} />

      {/* Icon circle */}
      <circle cx="34" cy="30" r="16" fill="rgba(255,255,255,0.18)" />
      <text
        x="34"
        y="30"
        fontFamily="Arial Black, Arial, sans-serif"
        fontSize="15"
        fontWeight="900"
        fill={fg}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {letter}
      </text>

      {/* Wordmark */}
      <text
        x="110"
        y="30"
        fontFamily="Arial Black, Arial, sans-serif"
        fontSize="14"
        fontWeight="900"
        fill={fg}
        textAnchor="middle"
        dominantBaseline="central"
        letterSpacing="1"
      >
        {displayName}
      </text>

      {/* Accent underline */}
      <rect x="60" y="50" width="130" height="3" rx="1.5" fill={accent} opacity="0.4" />
    </svg>
  );
}
