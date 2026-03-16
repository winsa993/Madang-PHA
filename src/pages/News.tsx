import React from 'react';
import { motion } from 'motion/react';
import { NEWS } from '../constants';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const News = () => {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">News & Announcements</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Stay updated with the latest health alerts, press releases, and community activities from MPHA.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-12">
            {NEWS.map((item) => (
              <motion.article 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video rounded-[40px] overflow-hidden mb-8 border border-slate-200">
                  <img 
                    src={`https://picsum.photos/seed/${item.id}/1200/600`} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-6 mb-4 text-sm font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-2 text-emerald-600">
                    <Tag size={16} /> {item.category}
                  </span>
                  <span className="flex items-center gap-2 text-slate-400">
                    <Calendar size={16} /> {new Date(item.date).toLocaleDateString()}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  {item.summary}
                </p>
                <button className="text-emerald-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Full Article <ArrowRight size={20} />
                </button>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            {/* Categories */}
            <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Categories</h3>
              <div className="space-y-3">
                {['Health Alerts', 'Press Releases', 'Community Outreach', 'Awareness Campaigns'].map((cat, i) => (
                  <button key={i} className="w-full flex justify-between items-center text-slate-600 hover:text-emerald-600 font-medium transition-colors">
                    <span>{cat}</span>
                    <span className="bg-white px-2 py-1 rounded-lg text-xs border border-slate-200">12</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-emerald-900 p-8 rounded-[32px] text-white">
              <h3 className="text-xl font-bold mb-4">Health Updates</h3>
              <p className="text-emerald-100 text-sm mb-6">Subscribe to receive urgent health alerts and newsletters directly in your inbox.</p>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-emerald-300/50 mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-white py-3 rounded-xl font-bold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
