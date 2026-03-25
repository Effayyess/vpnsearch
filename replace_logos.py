#!/usr/bin/env python3
"""Replace all remaining letter-initial logo divs with real logo img tags."""

import re
import os

files = [
    "/home/ubuntu/vpn-vault-uk/client/src/pages/VpnReview.tsx",
    "/home/ubuntu/vpn-vault-uk/client/src/pages/StreamingVpn.tsx",
    "/home/ubuntu/vpn-vault-uk/client/src/pages/PrivateVpn.tsx",
    "/home/ubuntu/vpn-vault-uk/client/src/pages/VpnDeals.tsx",
    "/home/ubuntu/vpn-vault-uk/client/src/pages/VpnComparison.tsx",
    "/home/ubuntu/vpn-vault-uk/client/src/pages/FreeVpnUk.tsx",
    "/home/ubuntu/vpn-vault-uk/client/src/pages/VpnForGaming.tsx",
    "/home/ubuntu/vpn-vault-uk/client/src/pages/VpnForTravel.tsx",
]

# Pattern 1: w-10 h-10 rounded-lg ... {vpn.name.charAt(0)}
pattern1 = re.compile(
    r'<div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold shrink-0" style=\{\{ backgroundColor: vpn\.color, fontFamily: "\'Space Grotesk\', sans-serif" \}\}>\{vpn\.name\.charAt\(0\)\}</div>'
)
replacement1 = '<div className="w-16 h-10 rounded-lg overflow-hidden shrink-0 border border-zinc-100 bg-white flex items-center justify-center"><img src={vpn.logoUrl} alt={`${vpn.name} logo`} className="w-full h-full object-contain" loading="lazy" /></div>'

# Pattern 2: w-8 h-8 in VpnComparison
pattern2 = re.compile(
    r'<div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm mx-auto mb-1" style=\{\{ backgroundColor: vpn\.color \}\}>\{vpn\.name\.charAt\(0\)\}</div>'
)
replacement2 = '<div className="w-14 h-8 rounded-lg overflow-hidden mx-auto mb-1 border border-zinc-100 bg-white flex items-center justify-center"><img src={vpn.logoUrl} alt={`${vpn.name} logo`} className="w-full h-full object-contain" loading="lazy" /></div>'

# Pattern 3: VpnReview "other" VPN cards
pattern3 = re.compile(
    r'\{other\.name\.charAt\(0\)\}'
)
replacement3 = '<img src={other.logoUrl} alt={`${other.name} logo`} className="w-full h-full object-contain" loading="lazy" />'

for filepath in files:
    with open(filepath, "r") as f:
        content = f.read()
    
    original = content
    content = pattern1.sub(replacement1, content)
    content = pattern2.sub(replacement2, content)
    content = pattern3.sub(replacement3, content)
    
    if content != original:
        with open(filepath, "w") as f:
            f.write(content)
        print(f"✓ Updated: {os.path.basename(filepath)}")
    else:
        print(f"- No change: {os.path.basename(filepath)}")

print("\nDone.")
