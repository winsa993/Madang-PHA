import React from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Baby, Syringe, Bug, Activity, Apple, Send, HeartPulse } from 'lucide-react';
import { PROGRAMS } from '../constants';

const iconMap: Record<string, any> = {
  Baby: Baby,
  ShieldCheck: Syringe, // Using Syringe for ShieldCheck in this context
};

const Programs = () => {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-emerald-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400 via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Public Health Programs</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Our specialized programs are designed to improve health outcomes for all citizens of Madang Province.
          </p>
        </div>
      </section>

      {/* Program List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-12">
          {PROGRAMS.map((program, i) => {
            const Icon = iconMap[program.icon] || Activity;
            return (
              <motion.div 
                key={program.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[40px] border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-12">
                    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8">
                      <Icon className="text-emerald-600" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">{program.title}</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {program.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-xs">Objectives</h4>
                        <ul className="space-y-3">
                          {program.objectives.map((obj, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                              {obj}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-xs">Services Provided</h4>
                        <ul className="space-y-3">
                          {program.services.map((service, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 relative">
                    <img 
                      src={`https://picsum.photos/seed/${program.id}/800/800`} 
                      alt={program.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-emerald-900/10" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Additional Programs Grid */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Other Key Initiatives</h2>
            <p className="text-slate-500">Continuous efforts in various health domains.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Tuberculosis Control', icon: Activity, color: 'rose' },
              { title: 'HIV/AIDS Awareness', icon: HeartPulse, color: 'red' },
              { title: 'Nutrition Programs', icon: Apple, color: 'emerald' },
              { title: 'Hygiene & Sanitation', icon: Stethoscope, color: 'blue' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-emerald-500 transition-all text-center">
                <div className={`w-12 h-12 mx-auto rounded-xl bg-${item.color}-50 flex items-center justify-center mb-4`}>
                  <item.icon className={`text-${item.color}-600`} size={24} />
                </div>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
