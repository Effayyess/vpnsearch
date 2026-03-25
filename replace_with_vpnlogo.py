#!/usr/bin/env python3
"""
Replace all <img src={vpn.logoUrl} ...> patterns with <VpnLogo slug={vpn.slug} name={vpn.name} ... />
and add the VpnLogo import to each affected file.
"""
import re, os

FILES = [
    "/home/ubuntu/vpn-vault-uk/client/src/components/VpnCard.tsx",
    "/home/ubuntu/vpn-vault-uk/client/src/pages/Home.tsx",
    "/home/ubuntu/vpn-vault-uk/client/src/pages/VpnReview.tsx",
    "/home/ubuntu/vpn-vault-uk/client/src/pages/StreamingVpn.tsx",
    "/home/ubuntu/vpn-vault-uk/client/src/pages/PrivateVpn.tsx",
    "/home/ubuntu/vpn-vault-uk/client/src/pages/VpnDeals.tsx",
    "/home/ubuntu/vpn-vault-uk/client/src/pages/VpnComparison.tsx",
    "/home/ubuntu/vpn-vault-uk/client/src/pages/FreeVpnUk.tsx",
    "/home/ubuntu/vpn-vault-uk/client/src/pages/VpnForGaming.tsx",
    "/home/ubuntu/vpn-vault-uk/client/src/pages/VpnForTravel.tsx",
]

IMPORT_LINE = 'import VpnLogo from "@/components/VpnLogo";\n'

for fpath in FILES:
    with open(fpath, "r") as f:
        content = f.read()

    original = content

    # Pattern 1: <img src={vpn.logoUrl} alt={`${vpn.name} logo`} className="w-full h-full object-contain" loading="lazy" />
    # Replace with <VpnLogo slug={vpn.slug} name={vpn.name} className="w-full h-full" />
    content = re.sub(
        r'<img\s+src=\{vpn\.logoUrl\}\s+alt=\{`\$\{vpn\.name\} logo`\}\s+className="w-full h-full object-contain"\s+loading="lazy"\s*/>',
        '<VpnLogo slug={vpn.slug} name={vpn.name} className="w-full h-full" />',
        content
    )

    # Pattern 2: <img src={vpn.logoUrl} alt={vpn.name} className="w-full h-full object-contain" loading="lazy" />
    content = re.sub(
        r'<img\s+src=\{vpn\.logoUrl\}\s+alt=\{vpn\.name\}\s+className="w-full h-full object-contain"\s+loading="lazy"\s*/>',
        '<VpnLogo slug={vpn.slug} name={vpn.name} className="w-full h-full" />',
        content
    )

    # Pattern 3: <img src={other.logoUrl} alt={`${other.name} logo`} className="w-full h-full object-contain" loading="lazy" />
    content = re.sub(
        r'<img\s+src=\{other\.logoUrl\}\s+alt=\{`\$\{other\.name\} logo`\}\s+className="w-full h-full object-contain"\s+loading="lazy"\s*/>',
        '<VpnLogo slug={other.slug} name={other.name} className="w-full h-full" />',
        content
    )

    # Pattern 4: VpnCard.tsx specific — src={vpn.logoUrl} with different class structure
    content = re.sub(
        r'<img\s+src=\{vpn\.logoUrl\}\s+alt=\{`\$\{vpn\.name\} logo`\}\s+className="w-full h-full object-contain"\s+loading="lazy"\s*/>',
        '<VpnLogo slug={vpn.slug} name={vpn.name} className="w-full h-full" />',
        content
    )

    # Pattern 5: NordVPN specific in Home.tsx
    content = content.replace(
        '<img src={vpnProviders[0].logoUrl} alt="NordVPN logo" className="w-full h-full object-contain p-1" />',
        '<VpnLogo slug={vpnProviders[0].slug} name={vpnProviders[0].name} className="w-full h-full" />'
    )

    # Add import if we made changes and it's not already there
    if content != original and IMPORT_LINE.strip() not in content:
        # Add after the last existing import line
        lines = content.split('\n')
        last_import_idx = 0
        for i, line in enumerate(lines):
            if line.startswith('import '):
                last_import_idx = i
        lines.insert(last_import_idx + 1, IMPORT_LINE.rstrip())
        content = '\n'.join(lines)

    if content != original:
        with open(fpath, "w") as f:
            f.write(content)
        changed = content.count('VpnLogo') - original.count('VpnLogo')
        print(f"  ✓ {os.path.basename(fpath)} — {changed} replacements")
    else:
        print(f"  - {os.path.basename(fpath)} — no changes")

print("\nDone!")
