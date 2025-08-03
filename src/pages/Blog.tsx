import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Shield, Eye, Lock, Search, Bitcoin, CreditCard } from 'lucide-react';

// Map titles to slugs that match your App.tsx articleContent keys
const getSlug = (title: string) => {
  switch (title) {
    case "The Ultimate Guide to Cryptocurrency Recovery in 2025":
      return "cryptocurrency-recovery-guide-2025";
    case "Phone Monitoring: Legal Considerations and Best Practices":
      return "phone-monitoring-legal-considerations-and-best-practices";
    case "iCloud Security: How to Protect Your Data from Breaches":
      return "icloud-security-how-to-protect-your-data-from-breaches";
    case "Digital Forensics in Corporate Investigations":
      return "digital-forensics-in-corporate-investigations";
    case "Credit Card Fraud: Prevention and Recovery Strategies":
      return "credit-card-fraud-prevention-and-recovery-strategies";
    case "Data Recovery: What to Do When Files Are Deleted":
      return "data-recovery-what-to-do-when-files-are-deleted";
    case "Cybersecurity Threats in 2025: What You Need to Know":
      return "cybersecurity-threats-in-2025-what-you-need-to-know";
    default:
      // fallback: slugify
      return title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }
};

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");

  const featuredPost = {
    title: "The Ultimate Guide to Cryptocurrency Recovery in 2025",
    excerpt: "Learn the latest techniques and best practices for recovering lost Bitcoin and other cryptocurrencies. Our experts share insider knowledge on wallet recovery, private key restoration, and scam investigation.",
    image: "https://media.istockphoto.com/id/2212182726/photo/futuristic-cryptocurrency-concept-with-digital-connections-and-blockchain-technology-around.jpg?s=612x612&w=0&k=20&c=GEF4ODhNcex34tuQuhQLOexF7c4Np6czMSIyjEJTLYU=",
    author: "Admin",
    date: "January 15, 2025",
    category: "Cryptocurrency Recovery",
  };

  // Updated images for Latest Articles section as per your instructions
  const blogPosts = [
    {
      title: "Phone Monitoring: Legal Considerations and Best Practices",
      excerpt: "Understanding the legal framework around phone monitoring and tracking services. What you need to know before implementing surveillance solutions.",
      image: "https://media.istockphoto.com/id/2148603307/photo/conceptual-of-a-scammer-using-mobile-phone-with-copy-space.jpg?s=612x612&w=0&k=20&c=HB_ZpDAEVL7EfKmjc0wCc0EMzTEVSbUMkuDkSuesycI=",
      author: "Admin",
      date: "June 12, 2025",
      category: "Phone Monitoring",
      icon: <Eye className="w-5 h-5" />
    },
    {
      title: "iCloud Security: How to Protect Your Data from Breaches",
      excerpt: "Essential security measures to protect your iCloud account and data. Learn about two-factor authentication, secure passwords, and backup strategies.",
      image: "https://media.istockphoto.com/id/2197373452/photo/digital-security-lock-icon-over-virtual-cityscape-with-programming-code-elements.jpg?s=612x612&w=0&k=20&c=l_JSuaLc_6BN5IZBC3GwKv2bJLfdoLZ-L0KH0WOhFNc=",
      author: "Admin",
      date: "June 10, 2025",
      category: "Data Security",
      icon: <Lock className="w-5 h-5" />
    },
    {
      title: "Digital Forensics in Corporate Investigations",
      excerpt: "How digital forensics plays a crucial role in corporate investigations. Case studies and methodologies used by professional investigators.",
      image: "https://media.istockphoto.com/id/2131702232/vector/digitalforensics.jpg?s=612x612&w=0&k=20&c=iBgIz0ttFLZyL_r-gdMGTJR8KbcOnrtRSumI_5iT5oo=",
      author: "Admin",
      date: "March 8, 2025",
      category: "Digital Forensics",
      icon: <Search className="w-5 h-5" />
    },
    {
      title: "Credit Card Fraud: Prevention and Recovery Strategies",
      excerpt: "Comprehensive guide to preventing credit card fraud and recovering from financial losses. Expert tips from cybersecurity professionals.",
      image: "https://media.istockphoto.com/id/2193247114/photo/global-financial-trends-displayed-through-coins-graphs-and-a-world-map-visualization.jpg?s=612x612&w=0&k=20&c=0gn5qbYFUvQcciVJ7HvQenOdb3KeHSQRtxegKRk4G_I=",
      author: "Admin",
      date: "April 5, 2025",
      category: "Financial Security",
      icon: <CreditCard className="w-5 h-5" />
    },
    {
      title: "Data Recovery: What to Do When Files Are Deleted",
      excerpt: "Step-by-step guide to recovering deleted photos, messages, and important files. Professional techniques and tools for data restoration.",
      image: "https://media.istockphoto.com/id/1180184611/video/animation-of-user-interface-hud-with-body-analysis-and-heart-moving-on-dark-background-for.jpg?s=640x640&k=20&c=FOgLBUmVEsrfSAvOdE-0bvB3aqmi681XFKdM_t60XxA=",
      author: "Admin",
      date: "December 3, 2024",
      category: "Data Recovery",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "Cybersecurity Threats in 2024: What You Need to Know",
      excerpt: "Latest cybersecurity threats and how to protect yourself. Insights from our team of security experts on emerging risks and prevention strategies.",
      image: "https://media.istockphoto.com/id/2166984584/photo/cyber-security-and-protection-personal-identity-concepts-digital-network-privacy-business.jpg?s=612x612&w=0&k=20&c=NKjfq95f5fBBs6RemDStZKJzd1meZ_VFElyiwR5Vm1E=",
      author: "Admin",
      date: "May 1, 2024",
      category: "Cybersecurity",
      icon: <Shield className="w-5 h-5" />
    }
  ];

  const filteredPosts = selectedCategory === "All Posts"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const categories = [
    "All Posts",
    "Cryptocurrency Recovery",
    "Phone Monitoring",
    "Data Security",
    "Digital Forensics",
    "Financial Security",
    "Data Recovery",
    "Cybersecurity"
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/2120247542/vector/hacker-in-a-hoodie-connected-to-globe.jpg?s=612x612&w=0&k=20&c=BQCjWdSZa9vScEHdF8wja_Qd-gzRHyRWjoS5EzX12PY=')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" style={{ color: "#fff" }}>
              Cybersecurity Insights
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" style={{ color: "#fff" }}>
              Expert insights, tips, and guides on cybersecurity, digital forensics, and data recovery from our team of professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section
        className="py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1488105137/photo/digital-security-biometric-fingerprint-authentication-biometric-safety-concept-modern.jpg?s=612x612&w=0&k=20&c=wnUCj6BJOEURZMtnLuEQ0p438-93waktq4IigIBxqNw=')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">Featured Article</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl shadow-2xl overflow-hidden"
            style={{
              background: "rgba(20, 20, 20, 0.78)",
              boxShadow: "0 8px 32px 0 rgba(31,38,135,0.37)",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,0.18)"
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.90)" }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center text-sm text-gray-300 mb-4">
                  <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs font-medium mr-4">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredPost.date}
                  </span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">{featuredPost.title}</h3>
                <p className="text-gray-200 text-lg mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-gray-200">{featuredPost.author}</span>
                  </div>
                  <Link
                    to={`/blog/${getSlug(featuredPost.title)}`}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-cyan-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-cyan-50 hover:text-cyan-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section
        className="py-20"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1204583475/photo/hardware-security-shield-icon.jpg?s=612x612&w=0&k=20&c=eoP2bUOEKyxbfuKUmpyQgK_lTqWGt35c-5kHgtF-3Ak=')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-4"
              style={{
                color: "#FFFFFF",
                textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                fontWeight: "bold",
                letterSpacing: "0.03em",
              }}
            >
              Latest Articles
            </h2>
            <p
              className="text-xl mb-4"
              style={{
                color: "#FFF",
                textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                fontWeight: "600",
                letterSpacing: "0.01em",
              }}
            >
              {selectedCategory === "All Posts"
                ? "Stay updated with the latest cybersecurity trends and insights"
                : `Articles about ${selectedCategory}`
              }
            </p>
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p
                  className="mb-4"
                  style={{
                    color: "#FFD700",
                    textShadow: "0 2px 8px rgba(0,0,0,0.85)",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  No articles found in this category.
                </p>
                <button
                  onClick={() => setSelectedCategory("All Posts")}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  View All Posts
                </button>
              </div>
            )}
          </div>

          {filteredPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      {post.icon}
                      <span className="ml-1">{post.category}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <span className="flex items-center mr-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${getSlug(post.title)}`}
                      className="text-cyan-600 hover:text-cyan-700 font-medium text-sm flex items-center"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section - Stay Informed */}
      <section
        className="py-20"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1296650655/photo/shield-icon-of-cyber-security-digital-data-technology-global-network-digital-data-protection.jpg?s=612x612&w=0&k=20&c=tz4Jrh3mfiJaInpBcLubVy9k5hirNKt3jUwvYEvzJeo=')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-12 text-center text-white"
            style={{
              background: "rgba(31, 48, 76, 0.7)", // deep blue blend, semi-transparent
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)",
              backdropFilter: "blur(1.5px)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest cybersecurity insights, tips, and industry updates delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
              <button className="bg-gray-900 hover:bg-gray-800 px-8 py-4 rounded-r-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-cyan-100 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Need Professional Cybersecurity Help? */}
      <section
        className="py-20"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1310856908/vector/vector-illustration-of-a-hacker-man-in-a-dark-hood-sitting-at-a-laptop-a-darknet-user-a-flat.jpg?s=612x612&w=0&k=20&c=mkEEzmUeFlmnicoxdJcJdE351elaTzkZcurdvaPiSmI=')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          style={{
            color: "#fff",
            background: "rgba(31, 38, 135, 0.60)", // blue overlay but lighter, more blend
            borderRadius: "1rem",
            boxShadow: "0 8px 32px 0 rgba(0,0,0,0.24)",
            backdropFilter: "blur(2px)",
            padding: "3rem 2rem",
          }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Need Professional Cybersecurity Help?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Don't just read about cybersecurity - get professional help from our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Expert Help
            </Link>
            <a
              href="tel:+17134281255"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Call Now: (713) 428-1255
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;