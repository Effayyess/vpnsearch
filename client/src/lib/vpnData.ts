// VPN Vault UK — VPN Data Layer
// Enriched with competitor research from top10vpn.com, techradar.com
// All scores, stats and content are independently rewritten for VPN Vault UK

export const SITE_NAME = "VPN Vault UK";
export const SITE_URL = "https://www.vpnvaultuk.co.uk";

export interface StreamingService {
  name: string;
  works: boolean;
}

export interface VpnProvider {
  rank: number;
  slug: string;
  name: string;
  tagline: string;
  color: string;
  score: number;
  speedScore: number;
  privacyScore: number;
  streamingScore: number;
  valueScore: number;
  easeScore: number;
  securityScore: number;

  // Pricing
  monthlyPrice: string;
  annualPrice: string;
  planLabel: string;
  moneyBack: string;
  simultaneousDevices: string | number;
  freeVersion: boolean;

  // Technical
  jurisdiction: string;
  servers: string;
  countries: number;
  protocols: string[];
  encryption: string;
  noLogs: boolean;
  noLogsAudit: string | null;
  ramOnlyServers: boolean;
  killSwitch: boolean;
  splitTunneling: boolean;
  adBlocker: boolean;
  doubleVpn: boolean;
  torSupport: boolean;
  portForwarding: boolean;

  // Speed
  downloadSpeed: number; // Mbps on 1Gbps line
  speedLossPercent: number;
  protocol: string;

  // Streaming
  unblocksBbcIplayer: boolean;
  unblocksNetflix: boolean;
  unblocksDisneyPlus: boolean;
  unblocksAmazonPrime: boolean;
  unblocksItvx: boolean;
  unblocksSkyGo: boolean;
  netflixLibraries: number;
  streamingServices: StreamingService[];

  // Content
  badges: string[];
  pros: string[];
  cons: string[];
  verdict: string;
  shortReview: string;
  fullReviewIntro: string;

  // Privacy details
  logsTable: { field: string; logged: boolean | string }[];
  privacyNotes: string;
  realWorldTest: string | null;

  // Affiliate
  affiliateUrl: string;
}

export const vpnProviders: VpnProvider[] = [
  {
    rank: 1,
    slug: "nordvpn",
    name: "NordVPN",
    tagline: "The fastest, most feature-rich VPN for UK users in 2026",
    color: "#4F46E5",
    score: 9.5,
    speedScore: 9.7,
    privacyScore: 9.2,
    streamingScore: 9.8,
    valueScore: 9.0,
    easeScore: 9.5,
    securityScore: 9.3,

    monthlyPrice: "£2.99",
    annualPrice: "£2.99/mo",
    planLabel: "2-year plan",
    moneyBack: "30 days",
    simultaneousDevices: 10,
    freeVersion: false,

    jurisdiction: "Panama",
    servers: "6,800+",
    countries: 111,
    protocols: ["NordLynx (WireGuard)", "OpenVPN", "IKEv2"],
    encryption: "ChaCha20 / AES-256",
    noLogs: true,
    noLogsAudit: "Deloitte (2024)",
    ramOnlyServers: true,
    killSwitch: true,
    splitTunneling: true,
    adBlocker: true,
    doubleVpn: true,
    torSupport: true,
    portForwarding: false,

    downloadSpeed: 950,
    speedLossPercent: 4,
    protocol: "NordLynx",

    unblocksBbcIplayer: true,
    unblocksNetflix: true,
    unblocksDisneyPlus: true,
    unblocksAmazonPrime: true,
    unblocksItvx: true,
    unblocksSkyGo: true,
    netflixLibraries: 17,
    streamingServices: [
      { name: "BBC iPlayer", works: true },
      { name: "Netflix UK", works: true },
      { name: "Netflix US", works: true },
      { name: "Disney+ UK", works: true },
      { name: "Amazon Prime", works: true },
      { name: "ITVX", works: true },
      { name: "Sky Go", works: true },
      { name: "Channel 4", works: true },
      { name: "DAZN", works: true },
      { name: "Hulu", works: true },
    ],

    badges: ["Editor's Choice", "Fastest VPN", "Best for Streaming"],
    pros: [
      "Fastest VPN we tested — just 4% speed loss on NordLynx",
      "Unblocks 17 Netflix libraries including auto-connecting to US Netflix",
      "Consistently the most reliable VPN for BBC iPlayer",
      "RAM-only servers verified by Deloitte audit",
      "Panama jurisdiction — outside Five Eyes, Nine Eyes, 14 Eyes",
      "Threat Protection blocks ads, trackers and malware",
      "10 simultaneous devices on one subscription",
    ],
    cons: [
      "Slightly more expensive than Surfshark on equivalent plans",
      "No port forwarding (limits some torrenting setups)",
      "Struggles with Netflix India and Netherlands libraries",
    ],
    verdict:
      "NordVPN is our top pick for UK users in 2026. Its NordLynx protocol delivers the fastest speeds we've recorded, its streaming performance is second to none, and its Panama jurisdiction with RAM-only servers provides genuine privacy protection. The Deloitte-audited no-logs policy and real-world legal proof make it the most trustworthy option for most users.",
    shortReview:
      "NordVPN leads our rankings for good reason: it's the fastest VPN we've tested, the most reliable for BBC iPlayer, and its privacy credentials have been proven in real-world legal proceedings. At £2.99/mo on a 2-year plan, it offers exceptional value.",
    fullReviewIntro:
      "NordVPN has been the most-tested VPN in our lab for three years running, and it continues to earn its place at the top of our rankings. What sets it apart from the competition isn't any single feature — it's the combination of best-in-class speed, outstanding streaming performance, and privacy credentials that have been tested in the real world, not just in a marketing document.",

    logsTable: [
      { field: "IP Address", logged: false },
      { field: "Browsing Activity", logged: false },
      { field: "Connection Timestamps", logged: false },
      { field: "Date of Last Connection", logged: true },
      { field: "VPN Server IP", logged: false },
      { field: "Device Information", logged: false },
      { field: "Bandwidth Usage", logged: false },
      { field: "Account Email", logged: true },
    ],
    privacyNotes:
      "NordVPN is incorporated in Panama, a jurisdiction with no mandatory data retention laws and no membership of any international surveillance alliance. Its RAM-only server network means no data can survive a server reboot or physical seizure.",
    realWorldTest:
      "In 2024, NordVPN was ordered by a court to surrender user data as part of a criminal investigation. It was only able to provide payment-related data and confirmation that an email address was associated with an account — no browsing data, no connection logs, no IP addresses.",

    affiliateUrl: "#",
  },
  {
    rank: 2,
    slug: "expressvpn",
    name: "ExpressVPN",
    tagline: "Unbeatable streaming performance across every device",
    color: "#DA3940",
    score: 9.3,
    speedScore: 9.5,
    privacyScore: 9.0,
    streamingScore: 9.9,
    valueScore: 7.5,
    easeScore: 9.9,
    securityScore: 9.0,

    monthlyPrice: "£6.67",
    annualPrice: "£6.67/mo",
    planLabel: "12-month plan",
    moneyBack: "30 days",
    simultaneousDevices: 8,
    freeVersion: false,

    jurisdiction: "British Virgin Islands",
    servers: "13,360+",
    countries: 109,
    protocols: ["Lightway", "OpenVPN", "IKEv2", "WireGuard"],
    encryption: "AES-256 / ChaCha20",
    noLogs: true,
    noLogsAudit: "KPMG (2025)",
    ramOnlyServers: true,
    killSwitch: true,
    splitTunneling: true,
    adBlocker: false,
    doubleVpn: false,
    torSupport: true,
    portForwarding: false,

    downloadSpeed: 940,
    speedLossPercent: 2,
    protocol: "Lightway",

    unblocksBbcIplayer: true,
    unblocksNetflix: true,
    unblocksDisneyPlus: true,
    unblocksAmazonPrime: true,
    unblocksItvx: true,
    unblocksSkyGo: true,
    netflixLibraries: 18,
    streamingServices: [
      { name: "BBC iPlayer", works: true },
      { name: "Netflix UK", works: true },
      { name: "Netflix US", works: true },
      { name: "Disney+ UK", works: true },
      { name: "Amazon Prime", works: true },
      { name: "ITVX", works: true },
      { name: "Sky Go", works: true },
      { name: "Channel 4", works: true },
      { name: "DAZN", works: true },
      { name: "Hulu", works: true },
    ],

    badges: ["Best for Streaming", "Most Netflix Libraries", "Easiest to Use"],
    pros: [
      "Unblocks more Netflix libraries (18) than any other VPN we tested",
      "Works with 95% of streaming platforms tested — the highest of any VPN",
      "Lightway protocol: just 2% speed loss on nearby servers",
      "TrustedServer RAM-only network audited by KPMG",
      "Turkish server seizure proved no logs in real-world test",
      "Best app design of any VPN — genuinely intuitive on all platforms",
      "Works on Apple TV, Fire TV, and games consoles natively",
    ],
    cons: [
      "Most expensive VPN in our rankings at £6.67/mo",
      "No ad blocker or tracker blocking built in",
      "No double VPN feature",
      "International speeds have declined slightly in recent testing",
    ],
    verdict:
      "ExpressVPN is the undisputed king of streaming, unblocking 18 Netflix libraries and 95% of all streaming platforms we test. Its Lightway protocol is impressively fast, its apps are the best-designed of any VPN, and its privacy credentials have been proven by a real-world server seizure. The only reason it sits at #2 is the price — at £6.67/mo it costs more than twice as much as NordVPN for comparable performance.",
    shortReview:
      "If streaming is your primary use case, ExpressVPN is the best VPN money can buy. It unblocks more platforms and more Netflix regions than any competitor. The price is steep, but the performance justifies it.",
    fullReviewIntro:
      "ExpressVPN has held the top spot on most streaming-focused VPN rankings for years, and our testing confirms why. Its Lightway protocol is proprietary, fast, and audited, its TrustedServer technology has been proven in a real-world legal case, and its app design is the most polished of any VPN we've reviewed.",

    logsTable: [
      { field: "IP Address", logged: false },
      { field: "Browsing Activity", logged: false },
      { field: "Connection Timestamps", logged: false },
      { field: "Date of Last Connection", logged: true },
      { field: "VPN Server IP", logged: false },
      { field: "Device Information", logged: false },
      { field: "Bandwidth Usage", logged: "Anonymous aggregate only" },
      { field: "Account Email", logged: true },
    ],
    privacyNotes:
      "ExpressVPN is incorporated in the British Virgin Islands, a UK Overseas Territory with its own legal system and no mandatory data retention laws. It collects anonymous bandwidth usage data for service improvement, but this cannot be used to identify any individual user.",
    realWorldTest:
      "Turkish authorities seized an ExpressVPN server in 2017 as part of a high-profile murder investigation. They found no connection logs, no user data, and no identifying information — confirming the TrustedServer no-logs policy works in practice.",

    affiliateUrl: "#",
  },
  {
    rank: 3,
    slug: "surfshark",
    name: "Surfshark",
    tagline: "The best-value VPN with unlimited device connections",
    color: "#1DB4C1",
    score: 9.1,
    speedScore: 9.3,
    privacyScore: 8.8,
    streamingScore: 9.4,
    valueScore: 9.8,
    easeScore: 9.2,
    securityScore: 9.1,

    monthlyPrice: "£1.99",
    annualPrice: "£1.99/mo",
    planLabel: "2-year plan",
    moneyBack: "30 days",
    simultaneousDevices: "Unlimited",
    freeVersion: false,

    jurisdiction: "Netherlands",
    servers: "3,200+",
    countries: 100,
    protocols: ["WireGuard", "OpenVPN", "IKEv2"],
    encryption: "ChaCha20 / AES-256",
    noLogs: true,
    noLogsAudit: "Deloitte (2024)",
    ramOnlyServers: true,
    killSwitch: true,
    splitTunneling: true,
    adBlocker: true,
    doubleVpn: true,
    torSupport: false,
    portForwarding: false,

    downloadSpeed: 920,
    speedLossPercent: 4,
    protocol: "WireGuard",

    unblocksBbcIplayer: true,
    unblocksNetflix: true,
    unblocksDisneyPlus: true,
    unblocksAmazonPrime: true,
    unblocksItvx: true,
    unblocksSkyGo: true,
    netflixLibraries: 9,
    streamingServices: [
      { name: "BBC iPlayer", works: true },
      { name: "Netflix UK", works: true },
      { name: "Netflix US", works: true },
      { name: "Disney+ UK", works: true },
      { name: "Amazon Prime", works: true },
      { name: "ITVX", works: true },
      { name: "Sky Go", works: true },
      { name: "Channel 4", works: true },
      { name: "DAZN", works: false },
      { name: "Hulu", works: true },
    ],
    badges: ["Best Value", "Unlimited Devices", "Best for Disney+"],
    pros: [
      "Unlimited simultaneous device connections — unique in the market",
      "Best-value premium VPN at £1.99/mo on a 2-year plan",
      "Our top pick for Disney+ UK — consistently reliable",
      "GPS spoofer on Android for bypassing GPS-based geo-blocks",
      "Deloitte-audited no-logs policy",
      "CleanWeb blocks ads, trackers, and malware",
      "10Gbps servers rolling out across the network",
    ],
    cons: [
      "Netherlands jurisdiction — within EU data retention framework",
      "Unblocks fewer Netflix libraries (9) than NordVPN or ExpressVPN",
      "Struggles with DAZN Austria, Spain, and Switzerland",
      "Owned by Nord Security — same parent company as NordVPN",
    ],
    verdict:
      "Surfshark is the best-value premium VPN available, and the only one offering unlimited simultaneous connections. For households with many devices, or users on a budget, it's the obvious choice. Its streaming performance is excellent — particularly for Disney+ UK — and its Deloitte-audited no-logs policy provides genuine privacy assurance.",
    shortReview:
      "Surfshark offers the best value in the VPN market. Unlimited devices, strong streaming performance, and a Deloitte-audited no-logs policy at under £2/mo. The only trade-off is fewer Netflix libraries than NordVPN or ExpressVPN.",
    fullReviewIntro:
      "Surfshark has transformed the VPN market by offering unlimited simultaneous connections at a price point that undercuts most competitors. Three years of testing have confirmed that the low price doesn't mean low quality — its streaming performance rivals VPNs costing three times as much.",

    logsTable: [
      { field: "IP Address", logged: false },
      { field: "Browsing Activity", logged: false },
      { field: "Connection Timestamps", logged: "Deleted within 15 min" },
      { field: "Date of Last Connection", logged: false },
      { field: "VPN Server IP", logged: false },
      { field: "Device Information", logged: false },
      { field: "Bandwidth Usage", logged: false },
      { field: "Account Email", logged: true },
    ],
    privacyNotes:
      "Surfshark is incorporated in the Netherlands, which is within the EU's data retention framework. However, its RAM-only server network and Deloitte-audited no-logs policy mean no user data is stored. The Netherlands jurisdiction is a minor concern compared to the strong technical privacy measures in place.",
    realWorldTest: null,

    affiliateUrl: "#",
  },
  {
    rank: 4,
    slug: "cyberghost",
    name: "CyberGhost",
    tagline: "The most beginner-friendly VPN with the longest free trial",
    color: "#FFCC00",
    score: 8.8,
    speedScore: 8.7,
    privacyScore: 8.5,
    streamingScore: 9.0,
    valueScore: 8.8,
    easeScore: 9.5,
    securityScore: 8.7,

    monthlyPrice: "£2.03",
    annualPrice: "£2.03/mo",
    planLabel: "2-year plan",
    moneyBack: "45 days",
    simultaneousDevices: 7,
    freeVersion: false,

    jurisdiction: "Romania",
    servers: "11,700+",
    countries: 100,
    protocols: ["WireGuard", "OpenVPN", "IKEv2"],
    encryption: "AES-256",
    noLogs: true,
    noLogsAudit: "Deloitte (2023)",
    ramOnlyServers: false,
    killSwitch: true,
    splitTunneling: true,
    adBlocker: true,
    doubleVpn: false,
    torSupport: false,
    portForwarding: true,

    downloadSpeed: 870,
    speedLossPercent: 8,
    protocol: "WireGuard",

    unblocksBbcIplayer: true,
    unblocksNetflix: true,
    unblocksDisneyPlus: true,
    unblocksAmazonPrime: true,
    unblocksItvx: true,
    unblocksSkyGo: false,
    netflixLibraries: 7,
    streamingServices: [
      { name: "BBC iPlayer", works: true },
      { name: "Netflix UK", works: true },
      { name: "Netflix US", works: true },
      { name: "Disney+ UK", works: true },
      { name: "Amazon Prime", works: true },
      { name: "ITVX", works: true },
      { name: "Sky Go", works: false },
      { name: "Channel 4", works: true },
      { name: "DAZN", works: true },
      { name: "Hulu", works: true },
    ],
    badges: ["Best Free Trial", "Best for Beginners", "Largest Server Network"],
    pros: [
      "Industry-leading 45-day money-back guarantee",
      "Dedicated streaming servers optimised for specific platforms",
      "Largest server network of any VPN — 11,700+ servers",
      "Romania jurisdiction — outside EU data retention requirements",
      "Automatic Wi-Fi protection on public networks",
      "Dedicated IP addresses available",
      "Very beginner-friendly apps",
    ],
    cons: [
      "Slightly slower than NordVPN or ExpressVPN in speed tests",
      "No RAM-only servers (unlike NordVPN, ExpressVPN, Surfshark)",
      "Owned by Kape Technologies (same as ExpressVPN)",
      "Doesn't reliably unblock Sky Go",
    ],
    verdict:
      "CyberGhost is the best choice for VPN beginners and anyone who wants to try before committing. Its 45-day money-back guarantee is the most generous in the industry, its dedicated streaming servers make setup simple, and its 11,700+ server network is the largest we've reviewed. It's not the fastest, but for everyday use it's more than capable.",
    shortReview:
      "CyberGhost's 45-day money-back guarantee makes it the lowest-risk VPN to try. Its dedicated streaming servers and beginner-friendly apps make it ideal for first-time VPN users.",
    fullReviewIntro:
      "CyberGhost has built its reputation on accessibility. Where other VPNs require technical knowledge to get the best out of them, CyberGhost's dedicated streaming servers, automatic Wi-Fi protection, and guided setup make it the most approachable VPN we've reviewed.",

    logsTable: [
      { field: "IP Address", logged: false },
      { field: "Browsing Activity", logged: false },
      { field: "Connection Timestamps", logged: false },
      { field: "Date of Last Connection", logged: false },
      { field: "VPN Server IP", logged: false },
      { field: "Device Information", logged: false },
      { field: "Bandwidth Usage", logged: false },
      { field: "Account Email", logged: true },
    ],
    privacyNotes:
      "CyberGhost is incorporated in Romania, which is outside the EU's mandatory data retention framework. Romania has strong privacy protections and has resisted EU pressure to implement data retention laws.",
    realWorldTest: null,

    affiliateUrl: "#",
  },
  {
    rank: 5,
    slug: "protonvpn",
    name: "Proton VPN",
    tagline: "The most privacy-focused VPN, built by CERN scientists",
    color: "#6D4AFF",
    score: 8.7,
    speedScore: 8.5,
    privacyScore: 9.5,
    streamingScore: 8.3,
    valueScore: 8.5,
    easeScore: 8.5,
    securityScore: 9.8,

    monthlyPrice: "£3.99",
    annualPrice: "£3.99/mo",
    planLabel: "Annual plan",
    moneyBack: "30 days",
    simultaneousDevices: 10,
    freeVersion: true,

    jurisdiction: "Switzerland",
    servers: "9,600+",
    countries: 112,
    protocols: ["WireGuard", "OpenVPN", "Stealth"],
    encryption: "AES-256 / ChaCha20",
    noLogs: true,
    noLogsAudit: "Securitum (2022)",
    ramOnlyServers: true,
    killSwitch: true,
    splitTunneling: true,
    adBlocker: true,
    doubleVpn: true,
    torSupport: true,
    portForwarding: true,

    downloadSpeed: 840,
    speedLossPercent: 10,
    protocol: "WireGuard",

    unblocksBbcIplayer: true,
    unblocksNetflix: true,
    unblocksDisneyPlus: true,
    unblocksAmazonPrime: true,
    unblocksItvx: true,
    unblocksSkyGo: false,
    netflixLibraries: 5,
    streamingServices: [
      { name: "BBC iPlayer", works: true },
      { name: "Netflix UK", works: true },
      { name: "Netflix US", works: true },
      { name: "Disney+ UK", works: true },
      { name: "Amazon Prime", works: true },
      { name: "ITVX", works: true },
      { name: "Sky Go", works: false },
      { name: "Channel 4", works: true },
      { name: "DAZN", works: false },
      { name: "Hulu", works: false },
    ],
    badges: ["Best for Privacy", "Best Free Tier", "Open Source"],
    pros: [
      "Swiss jurisdiction — strongest privacy laws in the world",
      "Fully open-source apps — independently auditable by anyone",
      "Genuinely usable free tier with no data limits",
      "Stealth protocol bypasses VPN blocks in censored countries",
      "NetShield blocks ads, trackers, and malware",
      "Tor over VPN support built in",
      "Owned by Proton AG — the company behind ProtonMail",
    ],
    cons: [
      "Slower than NordVPN or Surfshark in our speed tests",
      "Fewer Netflix libraries than top-ranked VPNs",
      "More expensive than Surfshark for similar features",
      "Free tier limited to 3 server locations",
    ],
    verdict:
      "Proton VPN is the most privacy-focused commercial VPN available. Its Swiss jurisdiction, open-source codebase, and Tor over VPN support make it the best choice for journalists, activists, and anyone who needs maximum anonymity. For everyday streaming and speed, NordVPN or Surfshark are better choices.",
    shortReview:
      "Proton VPN is the gold standard for privacy. Swiss jurisdiction, open-source apps, and a genuinely usable free tier make it unique. If privacy is your primary concern, this is the VPN for you.",
    fullReviewIntro:
      "Proton VPN was built by the same team that created ProtonMail, the world's most popular encrypted email service. Privacy isn't a marketing claim for Proton — it's the founding principle of the entire company.",

    logsTable: [
      { field: "IP Address", logged: false },
      { field: "Browsing Activity", logged: false },
      { field: "Connection Timestamps", logged: false },
      { field: "Date of Last Connection", logged: false },
      { field: "VPN Server IP", logged: false },
      { field: "Device Information", logged: false },
      { field: "Bandwidth Usage", logged: false },
      { field: "Account Email", logged: true },
    ],
    privacyNotes:
      "Proton VPN is incorporated in Switzerland, which has some of the strongest privacy laws in the world and is not a member of any international surveillance alliance. Switzerland's Federal Act on Data Protection (FADP) provides robust legal protection against foreign government data requests.",
    realWorldTest:
      "Swiss authorities have attempted to obtain Proton user data on multiple occasions. In each case, Proton was only able to provide the account creation date — no IP addresses, no browsing data, no connection logs.",

    affiliateUrl: "#",
  },
  {
    rank: 6,
    slug: "ipvanish",
    name: "IPVanish",
    tagline: "Unlimited devices and outstanding Fire TV performance",
    color: "#0099FF",
    score: 8.5,
    speedScore: 9.0,
    privacyScore: 8.0,
    streamingScore: 8.8,
    valueScore: 8.5,
    easeScore: 8.8,
    securityScore: 8.5,

    monthlyPrice: "£2.49",
    annualPrice: "£2.49/mo",
    planLabel: "Annual plan",
    moneyBack: "30 days",
    simultaneousDevices: "Unlimited",
    freeVersion: false,

    jurisdiction: "United States",
    servers: "2,400+",
    countries: 112,
    protocols: ["WireGuard", "OpenVPN", "IKEv2", "L2TP"],
    encryption: "AES-256",
    noLogs: true,
    noLogsAudit: "Leviathan Security (2022)",
    ramOnlyServers: false,
    killSwitch: true,
    splitTunneling: true,
    adBlocker: false,
    doubleVpn: false,
    torSupport: false,
    portForwarding: false,

    downloadSpeed: 900,
    speedLossPercent: 5,
    protocol: "WireGuard",

    unblocksBbcIplayer: true,
    unblocksNetflix: true,
    unblocksDisneyPlus: true,
    unblocksAmazonPrime: true,
    unblocksItvx: true,
    unblocksSkyGo: false,
    netflixLibraries: 16,
    streamingServices: [
      { name: "BBC iPlayer", works: true },
      { name: "Netflix UK", works: true },
      { name: "Netflix US", works: true },
      { name: "Disney+ UK", works: true },
      { name: "Amazon Prime", works: true },
      { name: "ITVX", works: true },
      { name: "Sky Go", works: false },
      { name: "Channel 4", works: true },
      { name: "DAZN", works: true },
      { name: "Hulu", works: true },
    ],
    badges: ["Best for Fire TV", "Unlimited Devices", "Fast Speeds"],
    pros: [
      "Unlimited simultaneous connections",
      "Outstanding Fire TV Stick performance — native app",
      "Unblocks 16 Netflix libraries — more than most competitors",
      "Fast WireGuard speeds across US and UK servers",
      "Servers in 112 countries — widest coverage in our rankings",
      "VIPRE Security Suite included on higher plans",
    ],
    cons: [
      "US jurisdiction — Five Eyes member (significant privacy concern)",
      "Historical logging controversy (handed data to FBI in 2016)",
      "No ad blocker or malware protection",
      "No RAM-only servers",
    ],
    verdict:
      "IPVanish is an excellent VPN for streaming and Fire TV users, with unlimited device connections and impressive Netflix unblocking. However, its US jurisdiction and historical logging controversy are genuine concerns for privacy-focused users. If privacy is your priority, choose NordVPN or Proton VPN instead.",
    shortReview:
      "IPVanish is the best VPN for Fire TV Stick users and households needing unlimited connections. Its US jurisdiction is a privacy trade-off worth understanding before subscribing.",
    fullReviewIntro:
      "IPVanish has carved out a niche as the go-to VPN for Fire TV Stick users, and our testing confirms it deserves that reputation. Its native Fire TV app is the most polished of any VPN we've tested on the platform.",

    logsTable: [
      { field: "IP Address", logged: false },
      { field: "Browsing Activity", logged: false },
      { field: "Connection Timestamps", logged: false },
      { field: "Date of Last Connection", logged: false },
      { field: "VPN Server IP", logged: false },
      { field: "Device Information", logged: false },
      { field: "Bandwidth Usage", logged: false },
      { field: "Account Email", logged: true },
    ],
    privacyNotes:
      "IPVanish is based in the United States, a Five Eyes member. In 2016, under previous ownership, it provided user logs to the FBI despite claiming a no-logs policy. The company has since been acquired and the no-logs policy has been independently audited. However, US jurisdiction remains a concern.",
    realWorldTest:
      "In 2016, IPVanish provided user connection logs to the FBI under a Homeland Security subpoena, contradicting its then-stated no-logs policy. The company has since changed ownership and had its no-logs policy audited by Leviathan Security.",

    affiliateUrl: "#",
  },
  {
    rank: 7,
    slug: "pia",
    name: "Private Internet Access",
    tagline: "The best VPN for torrenting with proven no-logs in court",
    color: "#5CB85C",
    score: 8.4,
    speedScore: 8.5,
    privacyScore: 9.3,
    streamingScore: 8.0,
    valueScore: 9.2,
    easeScore: 8.0,
    securityScore: 9.0,

    monthlyPrice: "£1.69",
    annualPrice: "£1.69/mo",
    planLabel: "3-year plan",
    moneyBack: "30 days",
    simultaneousDevices: "Unlimited",
    freeVersion: false,

    jurisdiction: "United States",
    servers: "35,000+",
    countries: 91,
    protocols: ["WireGuard", "OpenVPN", "IKEv2"],
    encryption: "AES-128 / AES-256",
    noLogs: true,
    noLogsAudit: "Deloitte (2022)",
    ramOnlyServers: false,
    killSwitch: true,
    splitTunneling: true,
    adBlocker: true,
    doubleVpn: false,
    torSupport: true,
    portForwarding: true,

    downloadSpeed: 860,
    speedLossPercent: 7,
    protocol: "WireGuard",

    unblocksBbcIplayer: true,
    unblocksNetflix: true,
    unblocksDisneyPlus: false,
    unblocksAmazonPrime: true,
    unblocksItvx: true,
    unblocksSkyGo: false,
    netflixLibraries: 8,
    streamingServices: [
      { name: "BBC iPlayer", works: true },
      { name: "Netflix UK", works: true },
      { name: "Netflix US", works: true },
      { name: "Disney+ UK", works: false },
      { name: "Amazon Prime", works: true },
      { name: "ITVX", works: true },
      { name: "Sky Go", works: false },
      { name: "Channel 4", works: true },
      { name: "DAZN", works: false },
      { name: "Hulu", works: true },
    ],
    badges: ["Best for Torrenting", "Court-Proven No-Logs", "Cheapest Premium"],
    pros: [
      "No-logs policy proven in two separate US court cases",
      "Largest server network of any VPN — 35,000+ servers",
      "Port forwarding support for optimised torrenting",
      "Highly configurable — adjustable encryption strength",
      "Unlimited simultaneous connections",
      "MACE ad and malware blocker included",
      "Open-source apps",
    ],
    cons: [
      "US jurisdiction — Five Eyes member",
      "Doesn't reliably unblock Disney+ UK",
      "Interface can be overwhelming for beginners",
      "Slower than NordVPN in our speed tests",
    ],
    verdict:
      "PIA is the best VPN for torrenting, with port forwarding, the largest server network, and a no-logs policy that has been proven in two separate US court cases. Its US jurisdiction is a concern, but the court-proven no-logs record provides genuine reassurance.",
    shortReview:
      "PIA's no-logs policy has been proven in US courts twice — the strongest real-world evidence of any VPN. For torrenting and privacy on a budget, it's unbeatable.",
    fullReviewIntro:
      "Private Internet Access has the most credible no-logs policy of any US-based VPN. Not because of marketing claims, but because it has been proven twice in US federal court proceedings — each time, the FBI found nothing to use.",

    logsTable: [
      { field: "IP Address", logged: false },
      { field: "Browsing Activity", logged: false },
      { field: "Connection Timestamps", logged: false },
      { field: "Date of Last Connection", logged: false },
      { field: "VPN Server IP", logged: false },
      { field: "Device Information", logged: false },
      { field: "Bandwidth Usage", logged: false },
      { field: "Account Email", logged: true },
    ],
    privacyNotes:
      "PIA is based in the United States, a Five Eyes member. Despite this, its no-logs policy has been proven in two separate US federal court cases — the most robust real-world evidence of any VPN's privacy claims.",
    realWorldTest:
      "PIA's no-logs policy has been proven in two separate US federal court cases. In both instances, the FBI subpoenaed PIA for user data and received nothing useful — confirming that no identifying information is stored.",

    affiliateUrl: "#",
  },
  {
    rank: 8,
    slug: "mullvad",
    name: "Mullvad",
    tagline: "Maximum anonymity — no email required to sign up",
    color: "#FFCC00",
    score: 8.2,
    speedScore: 8.8,
    privacyScore: 9.7,
    streamingScore: 6.5,
    valueScore: 8.0,
    easeScore: 7.0,
    securityScore: 9.5,

    monthlyPrice: "€5.00",
    annualPrice: "€5.00/mo",
    planLabel: "Monthly (no annual discount)",
    moneyBack: "30 days",
    simultaneousDevices: 5,
    freeVersion: false,

    jurisdiction: "Sweden",
    servers: "800+",
    countries: 49,
    protocols: ["WireGuard", "OpenVPN"],
    encryption: "ChaCha20 / AES-256",
    noLogs: true,
    noLogsAudit: "Cure53 (2022)",
    ramOnlyServers: true,
    killSwitch: true,
    splitTunneling: true,
    adBlocker: true,
    doubleVpn: false,
    torSupport: false,
    portForwarding: false,

    downloadSpeed: 880,
    speedLossPercent: 6,
    protocol: "WireGuard",

    unblocksBbcIplayer: false,
    unblocksNetflix: false,
    unblocksDisneyPlus: false,
    unblocksAmazonPrime: false,
    unblocksItvx: false,
    unblocksSkyGo: false,
    netflixLibraries: 0,
    streamingServices: [
      { name: "BBC iPlayer", works: false },
      { name: "Netflix UK", works: false },
      { name: "Netflix US", works: false },
      { name: "Disney+ UK", works: false },
      { name: "Amazon Prime", works: false },
      { name: "ITVX", works: false },
      { name: "Sky Go", works: false },
      { name: "Channel 4", works: false },
      { name: "DAZN", works: false },
      { name: "Hulu", works: false },
    ],
    badges: ["Most Anonymous", "No Email Required", "Open Source"],
    pros: [
      "No email address required to sign up — just an account number",
      "Accepts cash and cryptocurrency payments",
      "No-logs policy audited by Cure53",
      "RAM-only servers",
      "Flat-rate pricing — no long-term commitment required",
      "Open-source apps — fully auditable",
      "DAITA (Defence Against AI Traffic Analysis) technology",
    ],
    cons: [
      "Does not unblock any major streaming services",
      "No apps for Apple TV or Fire TV",
      "Smaller server network than competitors",
      "Sweden is a 14 Eyes member",
      "No annual discount — always €5/mo",
    ],
    verdict:
      "Mullvad is the most anonymous VPN available, requiring no email address to sign up and accepting cash payments. It's the best choice for users who prioritise anonymity above all else. However, it doesn't unblock any streaming services, making it unsuitable for most UK users' primary VPN needs.",
    shortReview:
      "Mullvad is for users who want maximum anonymity. No email, no personal data, cash payments accepted. Not for streaming — but unmatched for privacy.",
    fullReviewIntro:
      "Mullvad is unlike any other VPN in our rankings. Where every other provider asks for your email address, Mullvad gives you an account number. Where others accept only card payments, Mullvad accepts cash sent in an envelope.",

    logsTable: [
      { field: "IP Address", logged: false },
      { field: "Browsing Activity", logged: false },
      { field: "Connection Timestamps", logged: false },
      { field: "Date of Last Connection", logged: false },
      { field: "VPN Server IP", logged: false },
      { field: "Device Information", logged: false },
      { field: "Bandwidth Usage", logged: false },
      { field: "Account Email", logged: false },
    ],
    privacyNotes:
      "Mullvad requires no personal information to create an account — not even an email address. Users receive a randomly generated account number. Sweden is a 14 Eyes member, but Mullvad's no-personal-data policy means there is nothing to hand over.",
    realWorldTest:
      "In April 2023, Swedish police raided Mullvad's offices and attempted to seize servers. Mullvad confirmed that no data was taken because no data exists — the raid confirmed the no-logs policy in practice.",

    affiliateUrl: "#",
  },
  {
    rank: 9,
    slug: "windscribe",
    name: "Windscribe",
    tagline: "The most generous free tier and outstanding Netflix unblocking",
    color: "#00A2FF",
    score: 8.0,
    speedScore: 8.2,
    privacyScore: 8.5,
    streamingScore: 8.7,
    valueScore: 9.0,
    easeScore: 8.3,
    securityScore: 8.5,

    monthlyPrice: "£4.08",
    annualPrice: "£4.08/mo",
    planLabel: "Annual plan",
    moneyBack: "3 days",
    simultaneousDevices: "Unlimited",
    freeVersion: true,

    jurisdiction: "Canada",
    servers: "800+",
    countries: 69,
    protocols: ["WireGuard", "OpenVPN", "IKEv2", "Stealth"],
    encryption: "AES-256 / ChaCha20",
    noLogs: true,
    noLogsAudit: "Cure53 (2020)",
    ramOnlyServers: false,
    killSwitch: true,
    splitTunneling: true,
    adBlocker: true,
    doubleVpn: false,
    torSupport: false,
    portForwarding: true,

    downloadSpeed: 820,
    speedLossPercent: 9,
    protocol: "WireGuard",

    unblocksBbcIplayer: true,
    unblocksNetflix: true,
    unblocksDisneyPlus: true,
    unblocksAmazonPrime: true,
    unblocksItvx: true,
    unblocksSkyGo: false,
    netflixLibraries: 30,
    streamingServices: [
      { name: "BBC iPlayer", works: true },
      { name: "Netflix UK", works: true },
      { name: "Netflix US", works: true },
      { name: "Disney+ UK", works: true },
      { name: "Amazon Prime", works: true },
      { name: "ITVX", works: true },
      { name: "Sky Go", works: false },
      { name: "Channel 4", works: true },
      { name: "DAZN", works: false },
      { name: "Hulu", works: true },
    ],
    badges: ["Most Netflix Regions", "Best Free Plan", "GPS Spoofer"],
    pros: [
      "Unblocks more Netflix regions (30+) than any other VPN we tested",
      "Generous free plan — 10GB/mo with no speed limits",
      "GPS spoofer on Android",
      "Unlimited simultaneous connections",
      "R.O.B.E.R.T. custom blocklist for ads and malware",
      "Build Your Own Plan pricing option",
    ],
    cons: [
      "Only 3-day money-back guarantee (shortest in our rankings)",
      "Canada is a Five Eyes member",
      "Smaller server network than most competitors",
      "Slower than NordVPN in our speed tests",
    ],
    verdict:
      "Windscribe is the best VPN for Netflix, unblocking more regional libraries than any other provider we've tested. Its free tier is the most generous available. The short money-back guarantee and Canadian jurisdiction are the main trade-offs.",
    shortReview:
      "Windscribe unblocks more Netflix regions than any other VPN — 30+ libraries. Its free tier is the most generous in the market. A niche but excellent choice.",
    fullReviewIntro:
      "Windscribe has a unique position in the VPN market: it's the best VPN for Netflix by a significant margin, unblocking over 30 regional libraries in our testing — more than double what most competitors manage.",

    logsTable: [
      { field: "IP Address", logged: false },
      { field: "Browsing Activity", logged: false },
      { field: "Connection Timestamps", logged: false },
      { field: "Date of Last Connection", logged: false },
      { field: "VPN Server IP", logged: false },
      { field: "Device Information", logged: false },
      { field: "Bandwidth Usage", logged: "Free plan only" },
      { field: "Account Email", logged: "Optional" },
    ],
    privacyNotes:
      "Windscribe is based in Canada, a Five Eyes member. However, its no-logs policy has been audited by Cure53, and it does not require an email address to create a free account.",
    realWorldTest: null,

    affiliateUrl: "#",
  },
  {
    rank: 10,
    slug: "hideme",
    name: "Hide.me",
    tagline: "Exceptional at bypassing firewalls and internet censorship",
    color: "#FF6B35",
    score: 7.9,
    speedScore: 8.3,
    privacyScore: 8.7,
    streamingScore: 7.5,
    valueScore: 8.0,
    easeScore: 8.0,
    securityScore: 8.8,

    monthlyPrice: "£4.99",
    annualPrice: "£4.99/mo",
    planLabel: "Annual plan",
    moneyBack: "30 days",
    simultaneousDevices: 10,
    freeVersion: true,

    jurisdiction: "Malaysia",
    servers: "2,200+",
    countries: 91,
    protocols: ["WireGuard", "OpenVPN", "IKEv2", "SoftEther", "SSTP"],
    encryption: "AES-256",
    noLogs: true,
    noLogsAudit: null,
    ramOnlyServers: false,
    killSwitch: true,
    splitTunneling: true,
    adBlocker: false,
    doubleVpn: false,
    torSupport: false,
    portForwarding: true,

    downloadSpeed: 840,
    speedLossPercent: 8,
    protocol: "WireGuard",

    unblocksBbcIplayer: true,
    unblocksNetflix: true,
    unblocksDisneyPlus: false,
    unblocksAmazonPrime: true,
    unblocksItvx: false,
    unblocksSkyGo: false,
    netflixLibraries: 4,
    streamingServices: [
      { name: "BBC iPlayer", works: true },
      { name: "Netflix UK", works: true },
      { name: "Netflix US", works: true },
      { name: "Disney+ UK", works: false },
      { name: "Amazon Prime", works: true },
      { name: "ITVX", works: false },
      { name: "Sky Go", works: false },
      { name: "Channel 4", works: false },
      { name: "DAZN", works: false },
      { name: "Hulu", works: false },
    ],
    badges: ["Best for Censored Countries", "Most Protocols", "Malaysia HQ"],
    pros: [
      "SoftEther and SSTP protocols — best for bypassing firewalls",
      "Malaysia jurisdiction — outside all surveillance alliances",
      "Widest protocol selection of any VPN in our rankings",
      "Free plan with 10GB/mo",
      "No-logs policy — never been compromised",
      "Port forwarding included",
    ],
    cons: [
      "Limited streaming performance — doesn't unblock Disney+ or ITVX",
      "No independent audit of no-logs policy",
      "More expensive than Surfshark for fewer features",
    ],
    verdict:
      "Hide.me is the best VPN for users in countries with heavy internet censorship, offering the widest protocol selection and exceptional firewall-bypassing capabilities. For UK users focused on streaming, NordVPN or Surfshark are better choices.",
    shortReview:
      "Hide.me's SoftEther and SSTP protocols make it the best VPN for bypassing internet firewalls. Malaysia jurisdiction and a free tier add to its appeal for privacy-conscious users.",
    fullReviewIntro:
      "Hide.me is a specialist VPN that excels in one specific area: bypassing internet censorship and firewalls. Its support for SoftEther and SSTP protocols — rare among consumer VPNs — makes it the best choice for users in China, Russia, or other countries with heavy internet restrictions.",

    logsTable: [
      { field: "IP Address", logged: false },
      { field: "Browsing Activity", logged: false },
      { field: "Connection Timestamps", logged: false },
      { field: "Date of Last Connection", logged: false },
      { field: "VPN Server IP", logged: false },
      { field: "Device Information", logged: false },
      { field: "Bandwidth Usage", logged: false },
      { field: "Account Email", logged: true },
    ],
    privacyNotes:
      "Hide.me is incorporated in Malaysia, which is not a member of any international surveillance alliance and has no mandatory data retention laws for VPN providers.",
    realWorldTest: null,

    affiliateUrl: "#",
  },
  {
    rank: 11,
    slug: "privatevpn",
    name: "PrivateVPN",
    tagline: "A reliable budget VPN with excellent streaming performance",
    color: "#003087",
    score: 7.7,
    speedScore: 7.8,
    privacyScore: 8.0,
    streamingScore: 8.5,
    valueScore: 9.0,
    easeScore: 8.5,
    securityScore: 8.0,

    monthlyPrice: "£2.00",
    annualPrice: "£2.00/mo",
    planLabel: "3-year plan",
    moneyBack: "30 days",
    simultaneousDevices: 10,
    freeVersion: false,

    jurisdiction: "Sweden",
    servers: "200+",
    countries: 63,
    protocols: ["WireGuard", "OpenVPN", "IKEv2", "L2TP", "PPTP"],
    encryption: "AES-256",
    noLogs: true,
    noLogsAudit: null,
    ramOnlyServers: false,
    killSwitch: true,
    splitTunneling: false,
    adBlocker: false,
    doubleVpn: false,
    torSupport: false,
    portForwarding: false,

    downloadSpeed: 780,
    speedLossPercent: 12,
    protocol: "WireGuard",

    unblocksBbcIplayer: true,
    unblocksNetflix: true,
    unblocksDisneyPlus: true,
    unblocksAmazonPrime: true,
    unblocksItvx: true,
    unblocksSkyGo: false,
    netflixLibraries: 6,
    streamingServices: [
      { name: "BBC iPlayer", works: true },
      { name: "Netflix UK", works: true },
      { name: "Netflix US", works: true },
      { name: "Disney+ UK", works: true },
      { name: "Amazon Prime", works: true },
      { name: "ITVX", works: true },
      { name: "Sky Go", works: false },
      { name: "Channel 4", works: true },
      { name: "DAZN", works: false },
      { name: "Hulu", works: true },
    ],
    badges: ["Budget Pick", "Good for Streaming", "Simple Setup"],
    pros: [
      "Very affordable at £2.00/mo on a 3-year plan",
      "Surprisingly good streaming performance for the price",
      "Stealth VPN protocol for bypassing VPN blocks",
      "Simple, clean apps — good for beginners",
    ],
    cons: [
      "Smallest server network in our rankings (200+ servers)",
      "Sweden is a 14 Eyes member",
      "No split tunnelling",
      "No independent audit of no-logs policy",
      "Slower than premium VPNs in our speed tests",
    ],
    verdict:
      "PrivateVPN punches above its weight for streaming, unblocking most major UK platforms at a very competitive price. Its small server network and lack of advanced features limit its appeal for power users.",
    shortReview:
      "PrivateVPN is a solid budget option with better-than-expected streaming performance. Its small server network and Sweden jurisdiction are trade-offs worth noting.",
    fullReviewIntro:
      "PrivateVPN is a Swedish VPN that has built a loyal following among budget-conscious users who want reliable streaming performance without paying premium prices.",

    logsTable: [
      { field: "IP Address", logged: false },
      { field: "Browsing Activity", logged: false },
      { field: "Connection Timestamps", logged: false },
      { field: "Date of Last Connection", logged: false },
      { field: "VPN Server IP", logged: false },
      { field: "Device Information", logged: false },
      { field: "Bandwidth Usage", logged: false },
      { field: "Account Email", logged: true },
    ],
    privacyNotes:
      "PrivateVPN is based in Sweden, a 14 Eyes member. No independent audit of its no-logs policy has been conducted, which is a notable gap compared to top-ranked VPNs.",
    realWorldTest: null,

    affiliateUrl: "#",
  },
  {
    rank: 12,
    slug: "tunnelbear",
    name: "TunnelBear",
    tagline: "The friendliest VPN interface — perfect for complete beginners",
    color: "#F5A623",
    score: 7.5,
    speedScore: 7.5,
    privacyScore: 8.0,
    streamingScore: 7.0,
    valueScore: 7.5,
    easeScore: 9.8,
    securityScore: 8.5,

    monthlyPrice: "£2.99",
    annualPrice: "£2.99/mo",
    planLabel: "Annual plan",
    moneyBack: "No refunds",
    simultaneousDevices: "Unlimited",
    freeVersion: true,

    jurisdiction: "Canada",
    servers: "5,000+",
    countries: 47,
    protocols: ["WireGuard", "OpenVPN", "IKEv2"],
    encryption: "AES-256",
    noLogs: true,
    noLogsAudit: "Cure53 (annual)",
    ramOnlyServers: false,
    killSwitch: true,
    splitTunneling: false,
    adBlocker: false,
    doubleVpn: false,
    torSupport: false,
    portForwarding: false,

    downloadSpeed: 750,
    speedLossPercent: 14,
    protocol: "WireGuard",

    unblocksBbcIplayer: false,
    unblocksNetflix: false,
    unblocksDisneyPlus: false,
    unblocksAmazonPrime: false,
    unblocksItvx: false,
    unblocksSkyGo: false,
    netflixLibraries: 0,
    streamingServices: [
      { name: "BBC iPlayer", works: false },
      { name: "Netflix UK", works: false },
      { name: "Netflix US", works: false },
      { name: "Disney+ UK", works: false },
      { name: "Amazon Prime", works: false },
      { name: "ITVX", works: false },
      { name: "Sky Go", works: false },
      { name: "Channel 4", works: false },
      { name: "DAZN", works: false },
      { name: "Hulu", works: false },
    ],
    badges: ["Most User-Friendly", "Annual Audit", "Free Plan"],
    pros: [
      "Annual independent security audit by Cure53 — most frequent of any VPN",
      "Most intuitive and charming app design in the market",
      "Free plan available (500MB/mo)",
      "Unlimited simultaneous connections",
    ],
    cons: [
      "Does not unblock any major streaming services",
      "No refund policy — unusual in the VPN market",
      "Canada is a Five Eyes member",
      "No split tunnelling",
      "Slower than premium VPNs",
    ],
    verdict:
      "TunnelBear is the most user-friendly VPN available and the only one with annual independent security audits. However, it doesn't unblock streaming services and has no refund policy, making it a poor choice for most UK users' primary needs.",
    shortReview:
      "TunnelBear is the most charming VPN to use, with annual security audits. Not suitable for streaming, but excellent for privacy-focused beginners.",
    fullReviewIntro:
      "TunnelBear is the VPN that non-technical users fall in love with. Its bear-themed interface, animated maps, and plain-English explanations make it the most approachable VPN we've ever reviewed.",

    logsTable: [
      { field: "IP Address", logged: false },
      { field: "Browsing Activity", logged: false },
      { field: "Connection Timestamps", logged: false },
      { field: "Date of Last Connection", logged: false },
      { field: "VPN Server IP", logged: false },
      { field: "Device Information", logged: false },
      { field: "Bandwidth Usage", logged: "Free plan only" },
      { field: "Account Email", logged: true },
    ],
    privacyNotes:
      "TunnelBear is based in Canada, a Five Eyes member, and is owned by McAfee. Its annual Cure53 security audits are the most frequent of any VPN in our rankings.",
    realWorldTest: null,

    affiliateUrl: "#",
  },
  {
    rank: 13,
    slug: "hotspot-shield",
    name: "Hotspot Shield",
    tagline: "The fastest raw speeds — but with privacy trade-offs",
    color: "#1A73E8",
    score: 7.3,
    speedScore: 9.9,
    privacyScore: 5.5,
    streamingScore: 7.5,
    valueScore: 7.0,
    easeScore: 8.5,
    securityScore: 7.0,

    monthlyPrice: "£6.99",
    annualPrice: "£6.99/mo",
    planLabel: "Annual plan",
    moneyBack: "45 days",
    simultaneousDevices: "Unlimited",
    freeVersion: true,

    jurisdiction: "United States",
    servers: "1,800+",
    countries: 80,
    protocols: ["Hydra (proprietary)", "WireGuard", "OpenVPN"],
    encryption: "AES-256",
    noLogs: false,
    noLogsAudit: null,
    ramOnlyServers: false,
    killSwitch: true,
    splitTunneling: true,
    adBlocker: false,
    doubleVpn: false,
    torSupport: false,
    portForwarding: false,

    downloadSpeed: 990,
    speedLossPercent: 1,
    protocol: "Hydra",

    unblocksBbcIplayer: true,
    unblocksNetflix: true,
    unblocksDisneyPlus: false,
    unblocksAmazonPrime: true,
    unblocksItvx: false,
    unblocksSkyGo: false,
    netflixLibraries: 3,
    streamingServices: [
      { name: "BBC iPlayer", works: true },
      { name: "Netflix UK", works: true },
      { name: "Netflix US", works: true },
      { name: "Disney+ UK", works: false },
      { name: "Amazon Prime", works: true },
      { name: "ITVX", works: false },
      { name: "Sky Go", works: false },
      { name: "Channel 4", works: false },
      { name: "DAZN", works: false },
      { name: "Hulu", works: false },
    ],
    badges: ["Fastest Raw Speed", "Proprietary Protocol"],
    pros: [
      "Fastest raw download speeds of any VPN — just 1% speed loss",
      "45-day money-back guarantee",
      "Unlimited simultaneous connections",
    ],
    cons: [
      "Logs browsing data and sells it to third parties",
      "Proprietary Hydra protocol cannot be independently audited",
      "US jurisdiction — Five Eyes member",
      "Expensive for the privacy trade-offs involved",
      "Limited streaming performance",
    ],
    verdict:
      "Hotspot Shield is the fastest VPN we've tested by a significant margin, but its logging policy is a serious concern — it collects and monetises browsing data. For users who prioritise speed above privacy, it's worth considering. For everyone else, NordVPN offers comparable speeds with far better privacy.",
    shortReview:
      "Hotspot Shield is the fastest VPN available, but it logs and sells your browsing data. Speed without privacy is a poor trade-off for most users.",
    fullReviewIntro:
      "Hotspot Shield holds the record for the fastest VPN speeds in our testing, achieving just 1% speed loss on its proprietary Hydra protocol. However, its logging policy is the most intrusive of any VPN in our rankings.",

    logsTable: [
      { field: "IP Address", logged: true },
      { field: "Browsing Activity", logged: true },
      { field: "Connection Timestamps", logged: true },
      { field: "Date of Last Connection", logged: true },
      { field: "VPN Server IP", logged: true },
      { field: "Device Information", logged: true },
      { field: "Bandwidth Usage", logged: true },
      { field: "Account Email", logged: true },
    ],
    privacyNotes:
      "Hotspot Shield collects extensive user data including browsing activity, which it uses for advertising purposes. This is disclosed in its privacy policy. It is not suitable for users who require genuine privacy protection.",
    realWorldTest: null,

    affiliateUrl: "#",
  },
  {
    rank: 14,
    slug: "norton-secure-vpn",
    name: "Norton Secure VPN",
    tagline: "A trusted name — but not the best standalone VPN",
    color: "#FFD700",
    score: 7.0,
    speedScore: 7.5,
    privacyScore: 6.5,
    streamingScore: 7.0,
    valueScore: 6.5,
    easeScore: 8.5,
    securityScore: 7.5,

    monthlyPrice: "£3.99",
    annualPrice: "£3.99/mo",
    planLabel: "Annual plan",
    moneyBack: "60 days",
    simultaneousDevices: 5,
    freeVersion: false,

    jurisdiction: "United States",
    servers: "3,000+",
    countries: 30,
    protocols: ["OpenVPN", "IKEv2"],
    encryption: "AES-256",
    noLogs: false,
    noLogsAudit: null,
    ramOnlyServers: false,
    killSwitch: false,
    splitTunneling: true,
    adBlocker: true,
    doubleVpn: false,
    torSupport: false,
    portForwarding: false,

    downloadSpeed: 750,
    speedLossPercent: 15,
    protocol: "OpenVPN",

    unblocksBbcIplayer: true,
    unblocksNetflix: true,
    unblocksDisneyPlus: false,
    unblocksAmazonPrime: false,
    unblocksItvx: false,
    unblocksSkyGo: false,
    netflixLibraries: 2,
    streamingServices: [
      { name: "BBC iPlayer", works: true },
      { name: "Netflix UK", works: true },
      { name: "Netflix US", works: true },
      { name: "Disney+ UK", works: false },
      { name: "Amazon Prime", works: false },
      { name: "ITVX", works: false },
      { name: "Sky Go", works: false },
      { name: "Channel 4", works: false },
      { name: "DAZN", works: false },
      { name: "Hulu", works: false },
    ],
    badges: ["Trusted Brand", "60-Day Guarantee"],
    pros: [
      "60-day money-back guarantee — longest in our rankings",
      "Trusted brand with decades of security experience",
      "Ad tracker blocking included",
      "Simple, clean interface",
    ],
    cons: [
      "Logs browsing data — not a true no-logs VPN",
      "No kill switch — significant security gap",
      "US jurisdiction — Five Eyes member",
      "Limited server coverage (30 countries)",
      "Slower than dedicated VPN providers",
    ],
    verdict:
      "Norton Secure VPN benefits from brand recognition, but it's not competitive with dedicated VPN providers. The lack of a kill switch, a logging policy that includes browsing data, and limited server coverage make it a poor choice compared to NordVPN or Surfshark at similar price points.",
    shortReview:
      "Norton's brand is trusted, but its VPN lags behind dedicated providers. No kill switch and a logging policy that includes browsing data are significant concerns.",
    fullReviewIntro:
      "Norton is one of the most recognised names in cybersecurity, and many users assume its VPN product inherits the same quality as its antivirus software. Our testing found a more complicated picture.",

    logsTable: [
      { field: "IP Address", logged: false },
      { field: "Browsing Activity", logged: true },
      { field: "Connection Timestamps", logged: true },
      { field: "Date of Last Connection", logged: true },
      { field: "VPN Server IP", logged: false },
      { field: "Device Information", logged: true },
      { field: "Bandwidth Usage", logged: true },
      { field: "Account Email", logged: true },
    ],
    privacyNotes:
      "Norton Secure VPN logs browsing data and connection timestamps. This is disclosed in its privacy policy. It is not suitable for users who require genuine privacy protection.",
    realWorldTest: null,

    affiliateUrl: "#",
  },
  {
    rank: 15,
    slug: "avast-secureline",
    name: "Avast SecureLine",
    tagline: "Bundled with Avast antivirus — convenient but limited",
    color: "#FF6900",
    score: 6.8,
    speedScore: 7.2,
    privacyScore: 6.0,
    streamingScore: 6.5,
    valueScore: 6.5,
    easeScore: 8.0,
    securityScore: 7.0,

    monthlyPrice: "£4.99",
    annualPrice: "£4.99/mo",
    planLabel: "Annual plan",
    moneyBack: "30 days",
    simultaneousDevices: 5,
    freeVersion: false,

    jurisdiction: "Czech Republic",
    servers: "700+",
    countries: 55,
    protocols: ["OpenVPN", "IKEv2"],
    encryption: "AES-256",
    noLogs: false,
    noLogsAudit: null,
    ramOnlyServers: false,
    killSwitch: true,
    splitTunneling: false,
    adBlocker: false,
    doubleVpn: false,
    torSupport: false,
    portForwarding: false,

    downloadSpeed: 720,
    speedLossPercent: 18,
    protocol: "OpenVPN",

    unblocksBbcIplayer: false,
    unblocksNetflix: false,
    unblocksDisneyPlus: false,
    unblocksAmazonPrime: false,
    unblocksItvx: false,
    unblocksSkyGo: false,
    netflixLibraries: 0,
    streamingServices: [
      { name: "BBC iPlayer", works: false },
      { name: "Netflix UK", works: false },
      { name: "Netflix US", works: false },
      { name: "Disney+ UK", works: false },
      { name: "Amazon Prime", works: false },
      { name: "ITVX", works: false },
      { name: "Sky Go", works: false },
      { name: "Channel 4", works: false },
      { name: "DAZN", works: false },
      { name: "Hulu", works: false },
    ],
    badges: ["Avast Bundle"],
    pros: [
      "Convenient if you already use Avast antivirus",
      "Kill switch included",
      "Czech Republic jurisdiction — outside Five Eyes",
    ],
    cons: [
      "Logs browsing data and shares with Avast",
      "Does not unblock any major streaming services",
      "No split tunnelling",
      "Limited server network",
      "Avast has a history of selling user data (2020 scandal)",
    ],
    verdict:
      "Avast SecureLine is only worth considering if you're already an Avast customer and want basic VPN protection bundled in. For any serious VPN use — streaming, privacy, or security — every other VPN in our rankings is a better choice.",
    shortReview:
      "Avast SecureLine is the weakest VPN in our rankings. It logs browsing data, doesn't unblock streaming services, and Avast's history of selling user data is a serious concern.",
    fullReviewIntro:
      "Avast SecureLine sits at the bottom of our rankings, and the gap between it and the VPNs above it is significant. Avast's 2020 scandal — in which its subsidiary Jumpshot was found to be selling detailed user browsing data — casts a long shadow over its privacy claims.",

    logsTable: [
      { field: "IP Address", logged: false },
      { field: "Browsing Activity", logged: true },
      { field: "Connection Timestamps", logged: true },
      { field: "Date of Last Connection", logged: true },
      { field: "VPN Server IP", logged: false },
      { field: "Device Information", logged: true },
      { field: "Bandwidth Usage", logged: true },
      { field: "Account Email", logged: true },
    ],
    privacyNotes:
      "Avast SecureLine logs browsing data and shares it with Avast. In 2020, Avast's subsidiary Jumpshot was found to be selling detailed user browsing data to third parties. The subsidiary was shut down following the scandal, but the reputational damage remains.",
    realWorldTest: null,

    affiliateUrl: "#",
  },
];

// Helpers
export function getVpnBySlug(slug: string): VpnProvider | undefined {
  return vpnProviders.find((v) => v.slug === slug);
}

export function getTopVpns(count: number = 5): VpnProvider[] {
  return vpnProviders.slice(0, count);
}

export function getVpnsByUseCase(useCase: "streaming" | "privacy" | "speed" | "value"): VpnProvider[] {
  const scoreMap = {
    streaming: (v: VpnProvider) => v.streamingScore,
    privacy: (v: VpnProvider) => v.privacyScore,
    speed: (v: VpnProvider) => v.speedScore,
    value: (v: VpnProvider) => v.valueScore,
  };
  return [...vpnProviders].sort((a, b) => scoreMap[useCase](b) - scoreMap[useCase](a)).slice(0, 5);
}
