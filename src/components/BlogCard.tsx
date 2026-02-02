import React from "react";
import { Link } from "react-router-dom";
import type { BlogPost } from "../utils/blogPosts";

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group rounded-3xl overflow-hidden border border-gray-800 bg-gray-900/30 hover:border-cyan-500/25 transition-all"
    >
      {/* ✅ Fixed image wrapper */}
      <div className="relative aspect-video w-full overflow-hidden bg-black/30">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-contain"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      <div className="p-6">
        <h2 className="text-xl md:text-2xl font-black text-white leading-snug">
          {post.title}
        </h2>
        <div className="text-xs text-gray-500 mt-3">
          {post.date} • {post.author}
        </div>
        <p className="text-gray-400 mt-4 leading-relaxed">{post.excerpt}</p>
        <div className="mt-5 text-cyan-400 font-black text-sm">
          Read full guide →
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
