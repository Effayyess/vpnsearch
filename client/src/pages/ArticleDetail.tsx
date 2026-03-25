// VPN Search — Article Detail Page
// Design: Digital Cartography — off-white/slate, amber accent, Space Grotesk headings
// Full Markdown rendering with H2/H3, tables, bold, lists, code blocks

import { useParams, Link } from "wouter";
import { Clock, ChevronLeft, ChevronRight, Tag } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { blogPosts, getRelatedPosts } from "@/lib/blogData";

// ─── Minimal Markdown renderer ────────────────────────────────────────────────
function renderMarkdown(content: string): React.ReactNode[] {
  const lines = content.split("\n");
  const nodes: React.ReactNode[] = [];
  let i = 0;

  const parseInline = (text: string): React.ReactNode => {
    // Bold + italic, bold, italic, code, links
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let key = 0;

    while (remaining.length > 0) {
      // Bold
      const boldMatch = remaining.match(/^([\s\S]*?)\*\*([\s\S]+?)\*\*([\s\S]*)/);
      if (boldMatch) {
        if (boldMatch[1]) parts.push(<span key={key++}>{parseInline(boldMatch[1])}</span>);
        parts.push(<strong key={key++} className="font-semibold text-slate-800">{boldMatch[2]}</strong>);
        remaining = boldMatch[3];
        continue;
      }
      // Inline code
      const codeMatch = remaining.match(/^([\s\S]*?)`([\s\S]+?)`([\s\S]*)/);
      if (codeMatch) {
        if (codeMatch[1]) parts.push(<span key={key++}>{codeMatch[1]}</span>);
        parts.push(<code key={key++} className="bg-zinc-100 text-amber-700 px-1 py-0.5 rounded text-sm font-mono">{codeMatch[2]}</code>);
        remaining = codeMatch[3];
        continue;
      }
      parts.push(<span key={key++}>{remaining}</span>);
      break;
    }
    return parts.length === 1 ? parts[0] : <>{parts}</>;
  };

  while (i < lines.length) {
    const line = lines[i];

    // H2
    if (line.startsWith("## ")) {
      nodes.push(
        <h2 key={i} className="text-2xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-zinc-200" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      nodes.push(
        <h3 key={i} className="text-lg font-bold text-slate-800 mt-6 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    // Table (pipe-delimited)
    if (line.startsWith("|") && i + 1 < lines.length && lines[i + 1].match(/^\|[-| ]+\|/)) {
      const headers = line.split("|").filter((c) => c.trim()).map((c) => c.trim());
      i += 2; // skip header and separator
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        rows.push(lines[i].split("|").filter((c) => c.trim()).map((c) => c.trim()));
        i++;
      }
      nodes.push(
        <div key={`table-${i}`} className="overflow-x-auto my-6 rounded-lg border border-zinc-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-zinc-50 border-b border-zinc-200">
                {headers.map((h, hi) => (
                  <th key={hi} className="text-left px-4 py-2.5 font-semibold text-slate-700">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-2.5 text-slate-600 border-b border-zinc-100">{parseInline(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Unordered list
    if (line.startsWith("- ") || line.startsWith("* ")) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("* "))) {
        items.push(lines[i].slice(2));
        i++;
      }
      nodes.push(
        <ul key={`ul-${i}`} className="my-4 space-y-1.5 pl-5">
          {items.map((item, ii) => (
            <li key={ii} className="text-slate-600 leading-relaxed list-disc marker:text-amber-400">
              {parseInline(item)}
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\. /, ""));
        i++;
      }
      nodes.push(
        <ol key={`ol-${i}`} className="my-4 space-y-1.5 pl-5">
          {items.map((item, ii) => (
            <li key={ii} className="text-slate-600 leading-relaxed list-decimal marker:text-amber-500 marker:font-semibold">
              {parseInline(item)}
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Blank line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Regular paragraph
    nodes.push(
      <p key={i} className="text-slate-600 leading-relaxed mb-4">
        {parseInline(line)}
      </p>
    );
    i++;
  }

  return nodes;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function ArticleDetail() {
  const params = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Article not found</h1>
        <Link href="/articles" className="text-amber-600 hover:underline">← Back to articles</Link>
      </div>
    );
  }

  const related = getRelatedPosts(post.slug, 3);
  const metaDesc = (post as any).metaDescription || post.excerpt;
  const keywords = (post as any).keywords as string[] | undefined;

  return (
    <>
      <SEOHead
        title={`${post.title} | VPN Search`}
        description={metaDesc}
        canonical={`/articles/${post.slug}`}
        type="article"
      />

      {/* Breadcrumb */}
      <div className="bg-zinc-50 border-b border-zinc-200">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-amber-600 transition-colors">Articles</Link>
            <span>/</span>
            <span className="text-slate-800 truncate max-w-xs">{post.title}</span>
          </nav>
        </div>
      </div>

      <div className="bg-zinc-50 py-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── Main Article ── */}
            <article className="lg:col-span-2">
              <Link href="/articles" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-amber-600 mb-6 transition-colors">
                <ChevronLeft className="w-4 h-4" />All articles
              </Link>

              {/* Meta row */}
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" />{post.readTime}
                </span>
                <span className="text-xs text-slate-400">{post.date}</span>
                <span className="text-xs text-slate-400">By {post.author}</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {post.title}
              </h1>

              {/* Hero image */}
              <div className="aspect-[16/9] rounded-xl overflow-hidden mb-8 shadow-sm">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
              </div>

              {/* Excerpt / intro */}
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg px-5 py-4 mb-8">
                <p className="text-slate-700 leading-relaxed text-base font-medium">{post.excerpt}</p>
              </div>

              {/* Content */}
              <div className="article-content">
                {renderMarkdown(post.content)}
              </div>

              {/* Keywords */}
              {keywords && keywords.length > 0 && (
                <div className="mt-10 pt-6 border-t border-zinc-200">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-4 h-4 text-slate-400" />
                    {keywords.map((kw) => (
                      <span key={kw} className="text-xs text-slate-500 bg-zinc-100 px-2 py-0.5 rounded">{kw}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Author box */}
              <div className="mt-8 bg-white rounded-xl border border-zinc-200 p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <span className="text-amber-700 font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>VV</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>VPN Search Team</div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Our team tests VPNs daily on dedicated UK connections. Every recommendation is based on real-world testing, not sponsored placements.
                  </p>
                </div>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="space-y-6 lg:sticky lg:top-24 self-start">

              {/* Top pick CTA */}
              <div className="bg-white rounded-xl border border-amber-200 p-5 shadow-sm">
                <div className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2">Our Top Pick</div>
                <div className="font-bold text-slate-900 text-lg mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>NordVPN</div>
                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                  <span className="text-xs text-slate-500 ml-1">9.8/10</span>
                </div>
                <p className="text-sm text-slate-500 mb-4">The best all-round VPN for UK users — fast, reliable for streaming, and independently audited.</p>
                <a href="#" rel="noopener noreferrer sponsored" target="_blank"
                  className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-sm py-2.5 rounded-lg transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Get NordVPN Deal →
                </a>
              </div>

              {/* Related articles */}
              {related.length > 0 && (
                <div className="bg-white rounded-xl border border-zinc-200 p-5">
                  <h3 className="font-bold text-slate-900 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Related Articles</h3>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link key={r.slug} href={`/articles/${r.slug}`} className="flex items-start gap-3 group">
                        <img src={r.imageUrl} alt={r.title} className="w-16 h-12 object-cover rounded-lg shrink-0" loading="lazy" />
                        <div>
                          <div className="text-sm font-medium text-slate-800 group-hover:text-amber-700 transition-colors leading-snug">{r.title}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{r.readTime}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick links */}
              <div className="bg-white rounded-xl border border-zinc-200 p-5">
                <h3 className="font-bold text-slate-900 mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Quick Links</h3>
                <div className="space-y-1">
                  {[
                    { label: "Best VPNs UK 2026", href: "/best-vpns-uk" },
                    { label: "Best for Streaming", href: "/streaming-vpn" },
                    { label: "Best for Privacy", href: "/private-vpn" },
                    { label: "Best for Gaming", href: "/vpn-for-gaming" },
                    { label: "VPN Deals", href: "/vpn-deals" },
                    { label: "All Articles", href: "/articles" },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="flex items-center gap-2 text-sm text-slate-600 hover:text-amber-700 transition-colors py-1.5 border-b border-zinc-100 last:border-0">
                      <ChevronRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />{item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* All articles link */}
              <Link href="/articles" className="block text-center text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors py-2">
                View all {blogPosts.length} articles →
              </Link>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
