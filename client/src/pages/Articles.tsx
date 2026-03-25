// VPN Vault UK — Articles / Blog Index
import { Link } from "wouter";
import { Clock, ChevronRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/lib/blogData";

const CATEGORIES = ["All", "Guides", "Privacy", "Streaming", "News", "Comparisons"];

export default function Articles() {
  return (
    <>
      <SEOHead
        title="VPN Articles & Guides — VPN Vault UK"
        description="In-depth VPN guides, privacy articles, and streaming tips for UK users. Written by our team of independent VPN experts."
        canonical="/articles"
      />
      <div className="bg-zinc-950 py-14">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>VPN Articles & Guides</h1>
          <p className="text-zinc-400 max-w-2xl leading-relaxed">Practical guides, privacy explainers, and streaming tips — all written by our independent testing team.</p>
        </div>
      </div>
      <div className="bg-zinc-50 py-10">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((cat) => (
              <button key={cat} className="px-4 py-1.5 rounded-full text-sm font-medium border border-zinc-200 bg-white text-slate-600 hover:border-amber-300 hover:text-amber-700 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{cat}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/articles/${post.slug}`} className="group">
                <article className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-amber-200 hover:shadow-md transition-all duration-200 h-full flex flex-col">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">{post.category}</span>
                      <span className="flex items-center gap-1 text-xs text-slate-400"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <h2 className="font-bold text-slate-900 leading-snug mb-2 group-hover:text-amber-700 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{post.title}</h2>
                    <p className="text-sm text-slate-500 leading-relaxed flex-1">{post.excerpt.slice(0, 120)}…</p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-medium text-amber-600 group-hover:text-amber-700 transition-colors">Read article <ChevronRight className="w-3.5 h-3.5" /></div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
