import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, MapPin, Download, AlertCircle, Users, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NEWS, PROGRAMS } from '../constants';

const Home = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/madang/1920/1080" 
            alt="Madang Province" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Activity size={14} />
              Official Health Portal
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Building a Healthier <span className="text-emerald-500">Madang</span> Together
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Providing accessible, quality healthcare services and vital health information to all residents of Madang Province.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/directory" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-emerald-600/20">
                Find a Facility <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-xl font-bold transition-all border border-white/20">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Alert Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-rose-600 rounded-2xl p-4 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 border border-rose-500">
          <div className="flex items-center gap-4 text-white">
            <div className="bg-white/20 p-2 rounded-lg">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-sm uppercase tracking-wider opacity-80">Health Alert</p>
              <p className="font-medium">Vaccination Drive: Polio & Measles campaign starts March 20th.</p>
            </div>
          </div>
          <Link to="/news" className="bg-white text-rose-600 px-6 py-2 rounded-xl font-bold text-sm hover:bg-rose-50 transition-colors">
            View Details
          </Link>
        </div>
      </div>

      {/* Quick Links Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Hospitals & Clinics', icon: MapPin, desc: 'Locate health facilities across the province.', link: '/directory', color: 'blue' },
            { title: 'Health Programs', icon: ShieldCheck, desc: 'Maternal health, immunization, and disease control.', link: '/programs', color: 'emerald' },
            { title: 'Downloads', icon: Download, desc: 'Access health reports, forms, and strategic plans.', link: '/downloads', color: 'amber' },
          ].map((item, i) => (
            <Link 
              key={i} 
              to={item.link}
              className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-emerald-500 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl bg-${item.color}-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className={`text-${item.color}-600`} size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Latest News & Updates</h2>
              <p className="text-slate-500">Stay informed about health initiatives in Madang.</p>
            </div>
            <Link to="/news" className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              All News <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {NEWS.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row gap-6 bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:shadow-md transition-all">
                <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden shrink-0">
                  <img 
                    src={`https://picsum.photos/seed/${item.id}/400/400`} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col justify-between py-2">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm line-clamp-3 mb-4">{item.summary}</p>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">{new Date(item.date).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Health Programs</h2>
          <p className="text-slate-500">We run specialized programs to address the most pressing health challenges in our province.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program) => (
            <div key={program.id} className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-emerald-500 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-4">{program.title}</h3>
              <p className="text-slate-500 mb-6 line-clamp-2">{program.description}</p>
              <ul className="space-y-2 mb-8">
                {program.services.slice(0, 3).map((service, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {service}
                  </li>
                ))}
              </ul>
              <Link to={`/programs`} className="text-emerald-600 font-bold text-sm flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[120px]" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Have a Health Enquiry?</h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Our team is here to help. Contact us for information about health services, programs, or general health advice.
            </p>
            <Link to="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl font-bold transition-all inline-flex items-center gap-3">
              Get in Touch <Users size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
