// VPN Search — SEO Head Component
// Injects dynamic meta tags, Open Graph, Twitter Cards, and JSON-LD structured data

import { useEffect } from "react";
import { SITE_NAME, SITE_URL } from "@/lib/vpnData";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  type?: "website" | "article";
  jsonLd?: object;
}

export default function SEOHead({
  title,
  description = "Independent, in-depth VPN reviews and rankings for UK users. We test every VPN ourselves so you don't have to.",
  canonical,
  ogImage = `${SITE_URL}/og-image.png`,
  type = "website",
  jsonLd,
}: SEOHeadProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Independent VPN Reviews for UK Users`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Meta description
    setMeta("name", "description", description);

    // Canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.rel = "canonical";
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.href = canonicalUrl;

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:type", type);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "en_GB");

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);

    // Robots
    setMeta("name", "robots", "index, follow");

    // JSON-LD
    const defaultJsonLd = {
      "@context": "https://schema.org",
      "@type": type === "article" ? "Article" : "WebSite",
      name: SITE_NAME,
      url: canonicalUrl,
      description,
    };

    let scriptEl = document.querySelector('script[data-vpnvault-jsonld]') as HTMLScriptElement;
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.type = "application/ld+json";
      scriptEl.setAttribute("data-vpnvault-jsonld", "true");
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(jsonLd || defaultJsonLd);

    return () => {
      // Cleanup not needed for meta tags
    };
  }, [fullTitle, description, canonicalUrl, ogImage, type, jsonLd]);

  return null;
}

function setMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = value;
}
