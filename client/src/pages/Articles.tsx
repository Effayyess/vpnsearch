// VPN Search — Articles / Blog Index
// Design: Digital Cartography — off-white/slate, amber accent, Space Grotesk headings
// Shows all 24 blog posts with live category filtering

import { useState } from "react";
import { Link } from "wouter";
import { Clock, ChevronRight, BookOpen } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/lib/blogData";

const ALL_CATEGORIES = ["All", "Guides", "Privacy", "Streaming", "Comparisons", "Technical", "News"];

export default function Articles() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  // Featured post = first in filtered list
  const [featured, ...rest] = filtered;

  return (
    <>
      <SEOHead
        title="VPN Articles & Guides 2026 — VPN Search"
        description={`${blogPosts.length} in-depth VPN guides, privacy articles, and streaming tips for UK users. Written by our independent testing team.`}
        canonical="/articles"
      />

      {/* Hero */}
      <div className="bg-zinc-950 py-14">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium uppercase tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>
              {blogPosts.length} articles
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            VPN Articles & Guides
          </h1>
          <p className="text-zinc-400 max-w-2xl leading-relaxed">
            Practical guides, privacy explainers, streaming tips, and comparison pieces — all written by our independent UK testing team and updated for 2026.
          </p>
        </div>
      </div>

      <div className="bg-zinc-50 py-10">
        <div className="container">

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  activeCategory === cat
                    ? "bg-amber-500 border-amber-500 text-slate-900"
                    : "border-zinc-200 bg-white text-slate-600 hover:border-amber-300 hover:text-amber-700"
                }`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1.5 text-xs opacity-60">
                    ({blogPosts.filter((p) => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-slate-400">No articles in this category yet.</div>
          ) : (
            <>
              {/* Featured article */}
              {featured && (
                <Link href={`/articles/${featured.slug}`} className="group block mb-10">
                  <article className="bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:border-amber-200 hover:shadow-lg transition-all duration-200 grid grid-cols-1 md:grid-cols-2">
                    <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                      <img
                        src={featured.imageUrl}
                        alt={featured.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
                          {featured.category}
                        </span>
                        <span className="text-xs text-amber-500 font-semibold uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace" }}>
                          Featured
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-amber-700 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {featured.title}
                      </h2>
                      <p className="text-slate-500 leading-relaxed mb-6">{featured.excerpt}</p>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                          <Clock className="w-3 h-3" />{featured.readTime}
                        </span>
                        <span className="text-xs text-slate-400">{featured.date}</span>
                        <span className="flex items-center gap-1 text-sm font-medium text-amber-600 group-hover:text-amber-700 transition-colors ml-auto">
                          Read article <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              )}

              {/* Grid of remaining articles */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post) => (
                  <Link key={post.slug} href={`/articles/${post.slug}`} className="group">
                    <article className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-amber-200 hover:shadow-md transition-all duration-200 h-full flex flex-col">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-400">
                            <Clock className="w-3 h-3" />{post.readTime}
                          </span>
                        </div>
                        <h2 className="font-bold text-slate-900 leading-snug mb-2 group-hover:text-amber-700 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {post.title}
                        </h2>
                        <p className="text-sm text-slate-500 leading-relaxed flex-1">
                          {post.excerpt.slice(0, 120)}…
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-xs text-slate-400">{post.date}</span>
                          <span className="flex items-center gap-1 text-xs font-medium text-amber-600 group-hover:text-amber-700 transition-colors">
                            Read <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
