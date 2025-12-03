import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BLOGS } from "../../data/blogs";
import Link from "next/link";
import type { Metadata } from "next";

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const idStr = `${params.id}`;
  const idNum = Number.parseInt(idStr, 10);
  const post = BLOGS.find((p) => String(p.id) === idStr || p.id === idNum) ?? null;
  const index = post ? BLOGS.findIndex((p) => p.id === post.id) : -1;

  const prev = index > 0 ? BLOGS[index - 1] : null;
  const next = index >= 0 && index < BLOGS.length - 1 ? BLOGS[index + 1] : null;

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          {post && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",
                  "headline": post.title,
                  "author": { "@type": "Person", "name": post.author },
                  "datePublished": post.date,
                  "dateModified": post.date,
                  "image": post.image,
                  "publisher": {
                    "@type": "Organization",
                    "name": "Imran Ansari",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://imrandev.in/assets/imran%20dubai3.jpg"
                    }
                  },
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://imrandev.in/blogs/${post.id}`
                  }
                })
              }}
            />
          )}
          {!post ? (
            <div className="text-center text-gray-400">
              <h1 className="text-2xl font-bold text-white mb-2">Blog not found</h1>
              <Link href="/blogs" className="text-blue-400 font-bold">Back to all blogs</Link>
            </div>
          ) : (
            <article className="bg-[#0f0f0f] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-6 md:p-10">
                <div className="flex items-center justify-between mb-6">
                  <Link href="/blogs" className="text-sm font-bold text-blue-400">Back to all blogs</Link>
                  <div className="flex items-center gap-2">
                    {prev && (
                      <Link href={`/blogs/${prev.id}`} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">Previous</Link>
                    )}
                    {next && (
                      <Link href={`/blogs/${next.id}`} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">Next</Link>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-xs text-gray-500 flex items-center gap-3">
                    <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300">{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                    <span className="text-gray-400">{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                    <span className="text-gray-400">{post.readTime}</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-3">{post.title}</h1>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300">
                      {/* fallback avatar */}
                      <span className="text-xs font-bold">{post.author?.charAt(0) ?? 'A'}</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{post.author}</div>
                      <div className="text-xs text-gray-500">Author</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-white/10 bg-black mb-8">
                  <img src={post.image} alt={post.title} className="w-full h-[280px] md:h-[380px] object-cover" />
                </div>

                <div className="prose prose-invert max-w-none">
                  {(post.content || post.excerpt).split('\n\n').map((para, i) => (
                    <p key={i} className="text-gray-300 leading-relaxed text-[15px]">{para}</p>
                  ))}
                </div>

                <div className="mt-10 flex items-center gap-2">
                  {post.tags.map((t) => (
                    <span key={t} className="text-[10px] text-gray-500 bg-white/5 px-2 py-1 rounded">#{t}</span>
                  ))}
                </div>
              </div>
            </article>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const idStr = `${params.id}`;
  const idNum = Number.parseInt(idStr, 10);
  const post = BLOGS.find((p) => String(p.id) === idStr || p.id === idNum) ?? null;
  return {
    title: post ? `${post.title} — Imran Ansari` : "Blog not found",
    alternates: { canonical: `https://imrandev.in/blogs/${idStr}` },
    robots: { index: !!post, follow: !!post },
  };
}

export async function generateStaticParams() {
  return BLOGS.map((b) => ({ id: String(b.id) }));
}
