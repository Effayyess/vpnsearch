# VPN Affiliate Project — Full Handover Document
**Date:** March 2026  
**Prepared by:** Manus (secondary account session)  
**For:** Primary Manus account / project owner

---

## Project Overview

This is a two-site VPN affiliate marketing project targeting UK users searching for VPN recommendations. Both sites cover the same 15 VPN providers but are completely distinct in design, content, structure, and domain — the goal is to rank both independently on Google for UK VPN search terms.

---

## Site 1 — VPN Compare UK

| Field | Detail |
|---|---|
| **Domain** | www.vpncompareuk.co.uk |
| **Status** | Live and deployed |
| **Hosting** | Netlify (connected to GitHub) |
| **Domain registrar** | Hostinger |
| **GitHub repo** | Ask owner for repo name — was built on a different Manus account |
| **Design** | Dark navy / teal colour scheme |
| **VPNs covered** | 15 providers |
| **Pages** | ~14 pages including rankings, reviews, blog, quiz, legal |

### Pending actions for Site 1
- [ ] Add real VPN brand logos (currently uses letter-initial placeholders — same fix as was applied to Site 2)
- [ ] Populate all affiliate links (currently `href="#"` placeholders throughout)
- [ ] To update Site 1: owner needs to share the GitHub repo name/URL so the Manus agent can clone, edit, and push changes

---

## Site 2 — VPN Search

| Field | Detail |
|---|---|
| **Domain** | vpnsearch.co.uk (registered via Hostinger — DNS not yet pointed to Netlify) |
| **Netlify URL** | https://vpnsearch.netlify.app |
| **Netlify status** | Deployed — fix pushed for Page Not Found error (see below) |
| **GitHub repo** | https://github.com/Effayyess/vpnsearch |
| **GitHub username** | effayyess |
| **GitHub PAT** | [REDACTED — see private copy] |
| **Manus project name** | vpn-vault-uk (internal Manus project ID) |
| **Manus checkpoint** | 5da6b4fb (latest saved checkpoint) |
| **Design** | Off-white / slate / amber accent — "Digital Cartography" style |
| **Fonts** | Space Grotesk (headings), DM Mono (data/scores), DM Sans (body) |
| **Stack** | React 19 + Vite + Tailwind CSS 4 + shadcn/ui + Wouter routing |

### Site 2 — Pages built (20 pages)

| Route | Page |
|---|---|
| `/` | Homepage |
| `/best-vpns-uk` | Full rankings — all 15 VPNs |
| `/review/:slug` | Individual VPN review (dynamic, covers all 15) |
| `/vpn-comparison` | Side-by-side comparison table |
| `/streaming-vpn` | Best VPNs for streaming |
| `/private-vpn` | Best VPNs for privacy |
| `/vpn-for-gaming` | Best VPNs for gaming |
| `/vpn-for-travel` | Best VPNs for travel |
| `/vpn-explained` | What is a VPN? guide |
| `/do-i-need-a-vpn` | Do I need a VPN? guide |
| `/free-vpn-uk` | Free vs paid VPN guide |
| `/is-vpn-legal-uk` | Is VPN legal in UK? guide |
| `/vpn-setup-guide` | VPN setup guide |
| `/vpn-deals` | Current VPN deals page |
| `/articles` | Blog listing (24 articles) |
| `/articles/:slug` | Individual article (dynamic) |
| `/about` | About VPN Search |
| `/privacy-policy` | Privacy policy |
| `/cookie-policy` | Cookie policy |
| `/404` | Not found page |

### Site 2 — VPN providers covered (15)

NordVPN, ExpressVPN, Surfshark, CyberGhost, Proton VPN, IPVanish, Private Internet Access (PIA), Mullvad, Windscribe, Hide.me, PrivateVPN, TunnelBear, Hotspot Shield, Norton Secure VPN, Avast SecureLine VPN

### Site 2 — Blog posts (24 articles, all 1,200+ words)

All articles are in `/client/src/lib/blogData.ts`. Categories: Methodology, Legal & Privacy, Streaming, Security, Guides, How-To, Comparison, News.

### Site 2 — Components

| File | Purpose |
|---|---|
| `SiteNav.tsx` | Top navigation with mega-menu dropdowns |
| `SiteFooter.tsx` | Footer with links and legal |
| `VpnCard.tsx` | VPN ranking card used on listings pages |
| `VpnLogo.tsx` | Real VPN brand logos (scraped from provider websites) |
| `StickyBanner.tsx` | Bottom sticky NordVPN promo banner with countdown |
| `CookieBanner.tsx` | GDPR/PECR cookie consent with granular preferences |
| `SEOHead.tsx` | Dynamic SEO meta, Open Graph, JSON-LD structured data |
| `ScrollToTop.tsx` | Scroll to top on route change |

### Site 2 — Key data files

| File | Contents |
|---|---|
| `client/src/lib/vpnData.ts` | All 15 VPN providers with scores, features, specs, pros/cons |
| `client/src/lib/blogData.ts` | All 24 blog posts with full content |
| `client/public/sitemap.xml` | 56 URLs for vpnsearch.co.uk |
| `client/public/robots.txt` | Robots directives |
| `client/public/_redirects` | Netlify SPA routing fix |
| `netlify.toml` | Netlify build config (build cmd + publish dir) |

---

## Current Netlify Deployment Issue

**Problem:** When first deployed, Netlify showed "Page Not Found" for all pages.

**Root cause:** Two issues were fixed:
1. React SPA routing — Netlify needs a `_redirects` file to serve `index.html` for all routes (fixed in commit `25a7168`)
2. Wrong publish directory — Vite outputs to `dist/public` not `dist` (fixed in commit `d09bcfd`)

**Current status:** Both fixes are pushed to GitHub. Netlify should auto-redeploy. If the site still shows 404 after the latest deploy completes, check the Netlify deploy log for build errors.

**Netlify build settings (should be auto-detected from netlify.toml):**
- Build command: `pnpm run build`
- Publish directory: `dist/public`

---

## Pending Actions — Both Sites

### High Priority (before launch)
1. **Populate affiliate links** — Search for `href="#"` in both repos and replace with live affiliate URLs for each VPN provider. NordVPN, ExpressVPN, and Surfshark typically offer the best commission rates.
2. **Point vpnsearch.co.uk domain to Netlify** — In Hostinger DNS, add a CNAME record pointing `vpnsearch.co.uk` to the Netlify URL, or use Netlify's custom domain settings.
3. **Verify Netlify deployment** — Confirm https://vpnsearch.netlify.app loads correctly after the latest redeploy.

### Medium Priority
4. **Add VPN logos to Site 1** — Site 1 (vpncompareuk.co.uk) still uses letter-initial placeholders. The same `VpnLogo` component approach used in Site 2 can be applied. Requires access to the Site 1 GitHub repo.
5. **Submit sitemaps to Google Search Console** — Submit `https://www.vpnsearch.co.uk/sitemap.xml` and `https://www.vpncompareuk.co.uk/sitemap.xml` to accelerate indexing.
6. **Add "Last tested" dates** — Add a visible "Last tested: March 2026" badge to each VPN review page to improve Google E-E-A-T trust signals.

### Nice to Have
7. **VPN quiz / recommendation tool** — A "Which VPN is right for me?" quiz (3–4 questions) is a high-converting feature that differentiates Site 2 from Site 1.
8. **Expand blog posts further** — Some posts could be extended to 2,000+ words with additional sections (FAQs, comparison tables) for stronger keyword targeting.
9. **Add user reviews / ratings** — A simple star rating widget on each VPN review page improves trust and can generate rich snippet stars in Google results.

---

## Technical Notes for Next Agent

### How to continue development on Site 2
1. The Manus project is named `vpn-vault-uk` (internal name) — look for it in the webdev project list
2. Latest checkpoint: `5da6b4fb`
3. The project path in the sandbox is `/home/ubuntu/vpn-vault-uk`
4. Dev server runs on port 3000
5. All changes should be committed and pushed to `https://github.com/Effayyess/vpnsearch` using the PAT above

### How to update Site 1
1. Ask the owner for the Site 1 GitHub repo URL (built on a different Manus account)
2. Clone the repo, apply changes, push back
3. Netlify will auto-redeploy on push to main

### Design system (Site 2)
- Background: `#fafaf9` (stone-50 / off-white)
- Text: `#0f172a` (slate-900)
- Accent: `#f59e0b` (amber-500) — used for all CTAs, highlights, and interactive elements
- Dark sections: `#0f172a` (slate-900) with white text
- Border/divider: `#e2e8f0` (slate-200)
- Heading font: Space Grotesk (Google Fonts)
- Data/score font: DM Mono (Google Fonts)
- Body font: DM Sans (Google Fonts)
- Border radius: `0.65rem` (default), `9999px` for pills/badges
- Design philosophy: "Digital Cartography" — editorial, data-forward, premium tech publication feel

### Affiliate link placeholders
All affiliate links use `href="#"` as placeholders. To find them all:
```bash
grep -rn 'href="#"' client/src/ | grep -i "affiliate\|deal\|get\|visit\|try"
```

### Adding a new VPN provider
1. Add an entry to the `vpnProviders` array in `client/src/lib/vpnData.ts`
2. Add the logo to `VpnLogo.tsx` (add a new case to the `logos` object)
3. The review page is dynamic — it will automatically work at `/review/{slug}`

### Adding a new blog post
1. Add an entry to the `blogPosts` array in `client/src/lib/blogData.ts`
2. Add the URL to `client/public/sitemap.xml`
3. The article detail page is dynamic — it will automatically work at `/articles/{slug}`

---

## Credentials Summary

| Service | Credential | Value |
|---|---|---|
| GitHub | Username | effayyess |
| GitHub | Personal Access Token | [REDACTED — see private copy] |
| GitHub | Site 2 repo | https://github.com/Effayyess/vpnsearch |
| Netlify | Site 2 URL | https://vpnsearch.netlify.app |
| Hostinger | Site 1 domain | vpncompareuk.co.uk |
| Hostinger | Site 2 domain | vpnsearch.co.uk |

> **Security note:** Rotate the GitHub PAT after sharing this document, as it grants write access to the repository.

---

## Git Commit History (Site 2)

| Commit | Description |
|---|---|
| `d09bcfd` | Fix Netlify publish dir: dist → dist/public |
| `25a7168` | Fix Netlify SPA routing: add _redirects and netlify.toml |
| `d465ddf` | Complete brand alignment: VPN Search / vpnsearch.co.uk |
| `3d270a1` | Rebrand: VPN Vault UK → VPN Search / vpnsearch.co.uk |
| `ff448da` | Initial commit: VPN Vault UK — Site 2 |

---

*Document generated: March 2026*
