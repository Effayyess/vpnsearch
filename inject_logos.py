#!/usr/bin/env python3
"""Inject logoUrl fields into vpnData.ts for all 15 VPN providers."""

CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663462511898/883qKzoc5iMmoQQShbBxNr"

logo_map = {
    "nordvpn":         f"{CDN}/nordvpn_b574654b.svg",
    "expressvpn":      f"{CDN}/expressvpn_ca26dee6.svg",
    "surfshark":       f"{CDN}/surfshark_948d09e0.svg",
    "cyberghost":      f"{CDN}/cyberghost_003f7713.svg",
    "protonvpn":       f"{CDN}/protonvpn_21d30722.svg",
    "ipvanish":        f"{CDN}/ipvanish_c6d76a1f.svg",
    "pia":             f"{CDN}/pia_069a5a24.svg",
    "mullvad":         f"{CDN}/mullvad_fcd149ca.svg",
    "purevpn":         f"{CDN}/purevpn_b3974698.svg",
    "hidemyass":       f"{CDN}/hidemyass_25fe36b2.svg",
    "hotspot-shield":  f"{CDN}/hotspot-shield_67f7d33d.svg",
    "tunnelbear":      f"{CDN}/tunnelbear_95871405.svg",
    "windscribe":      f"{CDN}/windscribe_711d398e.svg",
    "atlas-vpn":       f"{CDN}/atlas-vpn_0af419b1.svg",
    "avast-secureline":f"{CDN}/avast-secureline_a90c358b.svg",
}

path = "/home/ubuntu/vpn-vault-uk/client/src/lib/vpnData.ts"
with open(path, "r") as f:
    content = f.read()

# For each slug, find the affiliateUrl: "#", line within that provider's block
# and insert logoUrl just before it.
# We'll do a targeted replacement per provider.
import re

for slug, url in logo_map.items():
    # Pattern: find a block that has slug: "nordvpn" ... affiliateUrl: "#",
    # We insert logoUrl: "..." just before affiliateUrl: "#",
    # Strategy: replace the first occurrence of affiliateUrl: "#", that comes after slug: "slug"
    
    # Find position of slug: "slug"
    slug_pattern = f'slug: "{slug}"'
    slug_pos = content.find(slug_pattern)
    if slug_pos == -1:
        print(f"WARNING: slug not found: {slug}")
        continue
    
    # Find next affiliateUrl: "#", after slug_pos
    aff_pattern = '    affiliateUrl: "#",'
    aff_pos = content.find(aff_pattern, slug_pos)
    if aff_pos == -1:
        print(f"WARNING: affiliateUrl not found after slug: {slug}")
        continue
    
    # Check if logoUrl already inserted
    logo_check = content.find('    logoUrl:', slug_pos)
    if logo_check != -1 and logo_check < aff_pos:
        print(f"SKIP (already has logoUrl): {slug}")
        continue
    
    # Insert logoUrl before affiliateUrl
    logo_line = f'    logoUrl: "{url}",\n'
    content = content[:aff_pos] + logo_line + content[aff_pos:]
    print(f"✓ Inserted logoUrl for {slug}")

with open(path, "w") as f:
    f.write(content)

print("\nDone.")
