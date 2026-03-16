import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Users, ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/about/1920/600" 
            alt="Madang" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About MPHA</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            The Madang Provincial Health Authority (MPHA) is responsible for the delivery of health services in Madang Province, Papua New Guinea.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-[40px] border border-slate-200 shadow-sm">
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8">
              <Target className="text-emerald-600" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              To provide high-quality, accessible, and equitable health services to all people of Madang Province through a sustainable and integrated health system.
            </p>
          </div>
          <div className="bg-white p-12 rounded-[40px] border border-slate-200 shadow-sm">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
              <Eye className="text-blue-600" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              A healthy and prosperous Madang Province where every citizen has access to the best possible healthcare services.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Leadership Team</h2>
            <p className="text-slate-500">Dedicated professionals leading the health sector in Madang.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Dr. Paul Mabong', role: 'Chief Executive Officer', image: 'https://i.pravatar.cc/300?u=paul' },
              { name: 'Sr. Mary Kila', role: 'Director of Nursing Services', image: 'https://i.pravatar.cc/300?u=mary' },
              { name: 'Mr. John Doe', role: 'Director of Public Health', image: 'https://i.pravatar.cc/300?u=john' },
              { name: 'Ms. Sarah Smith', role: 'Director of Corporate Services', image: 'https://i.pravatar.cc/300?u=sarah' },
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-slate-100 group-hover:border-emerald-500 transition-all">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-emerald-600 font-medium text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-slate-900 rounded-[40px] p-12 md:p-20 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Organizational Structure</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                MPHA operates under a structured framework that ensures accountability and efficient service delivery from the provincial level down to community health posts.
              </p>
              <div className="space-y-4">
                {['Provincial Health Board', 'Executive Management', 'Public Health Division', 'Curative Health Division', 'Corporate Services'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300">
                    <ChevronRight className="text-emerald-500" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
              <div className="aspect-video bg-slate-800 rounded-xl flex items-center justify-center text-slate-500 italic">
                Organizational Chart Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
