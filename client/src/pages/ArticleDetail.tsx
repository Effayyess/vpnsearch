// VPN Vault UK — Article Detail Page
import { useParams, Link } from "wouter";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/lib/blogData";

export default function ArticleDetail() {
  const params = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Article not found</h1>
        <Link href="/articles" className="text-amber-600">← Back to articles</Link>
      </div>
    );
  }
  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  return (
    <>
      <SEOHead title={`${post.title} — VPN Vault UK`} description={post.excerpt} canonical={`/articles/${post.slug}`} type="article" />
      <div className="bg-zinc-50 border-b border-zinc-200">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
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
            <article className="lg:col-span-2">
              <Link href="/articles" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-amber-600 mb-6 transition-colors"><ChevronLeft className="w-4 h-4" />All articles</Link>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">{post.category}</span>
                <span className="flex items-center gap-1 text-xs text-slate-400"><Clock className="w-3 h-3" />{post.readTime}</span>
                <span className="text-xs text-slate-400">{post.date}</span>
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-4 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{post.title}</h1>
              <div className="aspect-[16/9] rounded-xl overflow-hidden mb-8">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-800 prose-p:text-slate-600 prose-p:leading-relaxed">
                {post.content.split("\n\n").map((para, i) => (
                  <p key={i} className="mb-4 text-slate-600 leading-relaxed">{para}</p>
                ))}
              </div>
            </article>
            <aside className="space-y-6">
              <div className="bg-white rounded-xl border border-amber-200 p-5">
                <div className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2">Our Top Pick</div>
                <div className="font-bold text-slate-900 text-lg mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>NordVPN</div>
                <p className="text-sm text-slate-500 mb-4">The best all-round VPN for UK users — fast, reliable for streaming, and independently audited.</p>
                <a href="#" rel="noopener noreferrer sponsored" target="_blank" className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-sm py-2.5 rounded-lg transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Get NordVPN Deal</a>
              </div>
              {related.length > 0 && (
                <div className="bg-white rounded-xl border border-zinc-200 p-5">
                  <h3 className="font-bold text-slate-900 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Related Articles</h3>
                  <div className="space-y-3">
                    {related.map((r) => (
                      <Link key={r.slug} href={`/articles/${r.slug}`} className="flex items-start gap-3 group">
                        <img src={r.imageUrl} alt={r.title} className="w-16 h-12 object-cover rounded-lg shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-slate-800 group-hover:text-amber-700 transition-colors leading-snug">{r.title}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{r.readTime}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              <div className="bg-white rounded-xl border border-zinc-200 p-5">
                <h3 className="font-bold text-slate-900 mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Quick Links</h3>
                <div className="space-y-2">
                  {[{ label: "Best VPNs UK 2026", href: "/best-vpns-uk" }, { label: "Best for Streaming", href: "/streaming-vpn" }, { label: "Best for Privacy", href: "/private-vpn" }, { label: "VPN Deals", href: "/vpn-deals" }].map((item) => (
                    <Link key={item.href} href={item.href} className="flex items-center gap-2 text-sm text-slate-600 hover:text-amber-700 transition-colors py-1">
                      <ChevronRight className="w-3.5 h-3.5 text-amber-400" />{item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
