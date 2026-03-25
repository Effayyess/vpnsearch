#!/usr/bin/env python3
"""Inject logoUrl fields into vpnData.ts for remaining providers."""

CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663462511898/883qKzoc5iMmoQQShbBxNr"

# Map actual slugs to CDN URLs (reusing closest brand logos for the ones we generated)
logo_map = {
    "hideme":           f"{CDN}/hidemyass_25fe36b2.svg",      # closest match
    "privatevpn":       f"{CDN}/purevpn_b3974698.svg",        # closest match
    "norton-secure-vpn":f"{CDN}/atlas-vpn_0af419b1.svg",      # closest match
}

path = "/home/ubuntu/vpn-vault-uk/client/src/lib/vpnData.ts"
with open(path, "r") as f:
    content = f.read()

for slug, url in logo_map.items():
    slug_pattern = f'slug: "{slug}"'
    slug_pos = content.find(slug_pattern)
    if slug_pos == -1:
        print(f"WARNING: slug not found: {slug}")
        continue
    
    aff_pattern = '    affiliateUrl: "#",'
    aff_pos = content.find(aff_pattern, slug_pos)
    if aff_pos == -1:
        print(f"WARNING: affiliateUrl not found after slug: {slug}")
        continue
    
    logo_check = content.find('    logoUrl:', slug_pos)
    if logo_check != -1 and logo_check < aff_pos:
        print(f"SKIP (already has logoUrl): {slug}")
        continue
    
    logo_line = f'    logoUrl: "{url}",\n'
    content = content[:aff_pos] + logo_line + content[aff_pos:]
    print(f"✓ Inserted logoUrl for {slug}")

with open(path, "w") as f:
    f.write(content)

print("\nDone.")
