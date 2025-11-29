"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User, Tag, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { BLOGS } from '../data/blogs';

const BLOG_POSTS = BLOGS;

const CATEGORIES = ["All", "Engineering", "Design", "Technology", "Performance"];

const Blogs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  // Featured post is always the first one in the filtered list (or just the first one overall if you prefer)
  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <section id="blogs" className="py-32 bg-background relative min-h-screen">
       {/* Background Decor */}
       <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl"
            >
                <div className="flex items-center gap-2 mb-4">
                    <div className="h-1 w-8 bg-blue-500 rounded-full"></div>
                    <span className="text-blue-400 font-medium text-sm uppercase tracking-widest">Insights & Thoughts</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                    Latest Articles
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Thoughts on software engineering, design patterns, and the future of technology.
                </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
            >
                {CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            activeCategory === cat 
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                            : 'bg-[#1a1a1a] text-gray-400 hover:bg-[#252525] hover:text-white border border-white/5'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </motion.div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 group cursor-pointer relative rounded-3xl overflow-hidden border border-white/10 bg-[#0f0f0f]"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="h-[300px] lg:h-[450px] overflow-hidden relative">
                        <img 
                            src={featuredPost.image} 
                            alt={featuredPost.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                        <div className="absolute top-6 left-6">
                            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                                Featured
                            </span>
                        </div>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/5 to-transparent pointer-events-none"></div>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                            <span className="text-blue-400 font-medium">{featuredPost.category}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                            <div className="flex items-center gap-1"><Calendar size={14}/> {featuredPost.date}</div>
                            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                            <div className="flex items-center gap-1"><Clock size={14}/> {featuredPost.readTime}</div>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-blue-400 transition-colors">
                            {featuredPost.title}
                        </h3>
                        <p className="text-gray-400 text-lg mb-8 line-clamp-3">
                            {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center text-gray-400">
              <User size={18} />
            </div>
            <div>
              <div className="text-sm font-bold text-white">{featuredPost.author}</div>
              <div className="text-xs text-gray-500">Author</div>
            </div>
          </div>
          <Link href={`/blogs/${featuredPost.id}`} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
            <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
)}

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
                <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-[#121212] border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-blue-500/5"
                >
                    <div className="h-56 overflow-hidden relative">
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                         <div className="absolute top-4 left-4">
                            <span className="px-2 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold rounded border border-white/10 uppercase tracking-wider">
                                {post.category}
                            </span>
                        </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                            <div className="flex items-center gap-1"><Calendar size={12}/> {post.date}</div>
                            <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                            <div className="flex items-center gap-1"><Clock size={12}/> {post.readTime}</div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                            {post.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1">
                            {post.excerpt}
                        </p>
                        
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex gap-2">
                        {post.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-[10px] text-gray-500 bg-white/5 px-2 py-1 rounded">#{tag}</span>
                        ))}
                    </div>
                    <Link href={`/blogs/${post.id}`} className="text-sm font-bold text-white flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <ChevronRight size={14} className="text-blue-500" />
                    </Link>
                </div>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Blogs;
