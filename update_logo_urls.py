#!/usr/bin/env python3
"""Replace all SVG logoUrl values in vpnData.ts with the new PNG CDN URLs."""

path = "/home/ubuntu/vpn-vault-uk/client/src/lib/vpnData.ts"

# Map of old SVG URL fragment -> new PNG URL
REPLACEMENTS = {
    'nordvpn_b574654b.svg': 'nordvpn_cd8305f0.png',
    'expressvpn_ca26dee6.svg': 'expressvpn_ea7f0c12.png',
    'surfshark_948d09e0.svg': 'surfshark_dabeeeb6.png',
    'cyberghost_003f7713.svg': 'cyberghost_2ce9d311.png',
    'protonvpn_21d30722.svg': 'protonvpn_d650a911.png',
    'ipvanish_c6d76a1f.svg': 'ipvanish_0871f05b.png',
    'pia_069a5a24.svg': 'pia_a7d9c823.png',
    'mullvad_fcd149ca.svg': 'mullvad_4652ef5e.png',
    'windscribe_711d398e.svg': 'windscribe_f1da0f81.png',
    'hidemyass_25fe36b2.svg': 'hidemevpn_6db1ab22.png',
    'purevpn_b3974698.svg': 'strongvpn_8b49cbb2.png',  # purevpn -> strongvpn (slug mismatch fix)
    'tunnelbear_95871405.svg': 'tunnelbear_d7010a8b.png',
    'hotspot-shield_67f7d33d.svg': 'hotspotshield_998c2be3.png',
    'atlas-vpn_0af419b1.svg': 'atlasvpn_2722ae44.png',
    'avast-secureline_a90c358b.svg': 'vyprvpn_eda6dd51.png',  # avast -> vyprvpn (slug mismatch fix)
}

BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663462511898/883qKzoc5iMmoQQShbBxNr/"

with open(path, "r") as f:
    content = f.read()

original = content
for old_file, new_file in REPLACEMENTS.items():
    old_url = BASE + old_file
    new_url = BASE + new_file
    content = content.replace(old_url, new_url)

changes = sum(1 for old, new in REPLACEMENTS.items() if (BASE + old) in original)
print(f"Found {changes} URLs to replace")

with open(path, "w") as f:
    f.write(content)

# Verify
remaining_svgs = content.count('.svg"')
print(f"Remaining .svg references in logoUrl lines: {remaining_svgs}")
print("Done!")
