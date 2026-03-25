# VPN Vault UK — Design Brainstorm

## Design Constraint
Must look NOTHING like vpncompareuk.co.uk (dark navy, teal, orange CTAs, card-based VPN list).
Must be completely distinct in: colour, typography, layout structure, navigation, imagery, and feel.

---

<response>
<text>
**Approach A: "Digital Cartography" — Slate + Amber + Geometric**
- Design Movement: Technical Brutalism meets Data Journalism
- Core Principles: Grid-heavy layouts, data-forward presentation, amber/gold as the sole accent, slate/stone neutrals
- Color Philosophy: Off-white (#fafaf9) base, slate-800 (#1e293b) for text, amber-500 (#f59e0b) for all CTAs and highlights. Feels like a Bloomberg terminal crossed with a premium financial publication.
- Layout Paradigm: Asymmetric two-column layouts — left column anchors content, right column shows data/stats. Hero uses a large typographic lock-up with a bold stat (e.g. "15 VPNs. 200+ Hours. 1 Honest Verdict.") rather than a banner image.
- Signature Elements: Thick amber left-border accents on cards, monospaced score numbers, horizontal rule dividers with amber dots, data tables styled like financial dashboards
- Interaction Philosophy: Hover reveals additional data, accordion-style deep-dive sections, tab-based VPN comparison
- Animation: Subtle counter animations on stats, slide-in from left on scroll
- Typography: Space Grotesk (700/800) for display + DM Mono for scores/data + Lora for body text
</text>
<probability>0.07</probability>
</response>

<response>
<text>
**Approach B: "Glassmorphism Noir" — Deep Forest + Lime + Frosted Glass**
- Design Movement: Dark Glassmorphism / Cyberpunk Editorial
- Core Principles: Deep forest green (#0a1628 → #0d2137) background, frosted glass cards, lime-green (#84cc16) accent, layered depth
- Color Philosophy: Very dark green-black base (NOT navy — more forest/midnight green), lime as the electric accent. Feels like a premium cybersecurity brand, not a generic VPN site.
- Layout Paradigm: Full-bleed hero with a frosted glass card overlay, content sections alternate between dark and slightly lighter panels, VPN cards use glass effect with subtle green glow on hover
- Signature Elements: Frosted glass panels with backdrop-blur, lime glow effects on active elements, shield/lock iconography in lime, gradient text headings
- Interaction Philosophy: Glass cards lift on hover with glow, smooth parallax on hero, sticky comparison bar
- Animation: Glow pulse on featured VPN, fade-up on scroll, glass shimmer on hover
- Typography: Syne (800/900) for display + Figtree for body — both modern, neither Inter
</text>
<probability>0.05</probability>
</response>

<response>
<text>
**Approach C: "Broadsheet" — Pure White + Crimson + Ink Typography**
- Design Movement: Contemporary Newspaper / Editorial Modernism
- Core Principles: Pure white (#ffffff) background, ink-black (#111111) text, crimson (#dc2626) as the single accent, editorial column structure
- Color Philosophy: The restraint of a quality newspaper — white space is the hero, crimson is used sparingly for maximum impact (badges, CTAs, key stats only)
- Layout Paradigm: Multi-column editorial grid (like a newspaper front page) — VPN rankings presented as editorial "stories" with headline, deck, and score. Hero is typographic — a bold editorial statement, not a banner.
- Signature Elements: Thick crimson rule lines, editorial pull-quotes, numbered rankings styled as newspaper section headers, byline-style "tested by our experts" labels
- Interaction Philosophy: Clean, no-nonsense — content leads, interactions are subtle
- Animation: Minimal — fade-in on scroll only, no distracting motion
- Typography: Playfair Display (700/900) for headings + Source Serif 4 for body — classic editorial pairing
</text>
<probability>0.08</probability>
</response>

---

## CHOSEN APPROACH: Approach A — "Digital Cartography" (Slate + Amber)

**Rationale:** Maximally distinct from Site 1 (which is dark navy/teal/orange). This design is light, data-forward, and feels like a premium tech publication — Bloomberg meets Wirecutter. The amber accent is warm and trustworthy without being garish. Space Grotesk + DM Mono creates a unique typographic voice. The two-column asymmetric layout is structurally different from Site 1's single-column card stack.

### Final Design Tokens
- Background: #fafaf9 (off-white/stone-50)
- Surface: #ffffff (white cards)
- Surface alt: #f4f4f5 (zinc-100 for alternating sections)
- Dark sections: #0f172a (slate-900 for hero/footer)
- Text primary: #0f172a (slate-900)
- Text secondary: #64748b (slate-500)
- Accent: #f59e0b (amber-500) — ALL CTAs and highlights
- Accent hover: #d97706 (amber-600)
- Accent light: rgba(245,158,11,0.1)
- Green (positive/checkmarks): #16a34a
- Red (negative/crosses): #dc2626
- Border: #e4e4e7 (zinc-200)
- Display font: Space Grotesk (700/800) — Google Fonts
- Data/score font: DM Mono (400/500) — Google Fonts
- Body font: DM Sans (400/500) — Google Fonts

### Navigation (completely different from Site 1)
- Rankings (dropdown: Best VPNs UK, VPN Comparison Table, Speed Rankings, Value Rankings)
- By Need (dropdown: For Streaming, For Privacy, For Gaming, For Travel)
- Reviews (dropdown: all 15 individual VPN reviews)
- Learn (dropdown: VPN Explained, Do I Need a VPN?, Free vs Paid VPN, Is VPN Legal in UK?)
- Deals
- Articles
- [GET BEST DEAL] — amber pill CTA button (right-aligned)
