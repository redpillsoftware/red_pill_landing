import React from "react";
import { motion } from "framer-motion";

function Blog() {
  const blogs = [
    { title: "The Future of AI", date: "2024-01-03" },
    { title: "Cloud Computing Trends", date: "2024-01-02" },
    { title: "Mobile App Development", date: "2024-01-01" },
  ];
  return (
    <section
      id="blog"
      className="py-24 bg-gradient-to-br from-gray-800 via-red-900/40 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.article
              key={blog.title}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(239, 68, 68, 0.4)",
              }}
              className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src="/api/placeholder/400/200"
                alt={blog.title}
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {blog.title}
                </h3>
                <time className="text-gray-300">{blog.date}</time>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
