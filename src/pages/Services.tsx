import React from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Ambulance, HeartPulse, Shield, Activity, Users } from 'lucide-react';

const Services = () => {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-blue-900 py-24 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Health Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive healthcare services delivered through our network of hospitals and clinics across Madang.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Curative Services', icon: Stethoscope, desc: 'Diagnosis and treatment of illnesses and injuries at our hospitals and health centers.', color: 'blue' },
            { title: 'Emergency Care', icon: Ambulance, desc: '24/7 emergency response and ambulance services for critical health situations.', color: 'rose' },
            { title: 'Maternal Health', icon: HeartPulse, desc: 'Comprehensive care for mothers and infants, including antenatal and postnatal services.', color: 'emerald' },
            { title: 'Disease Prevention', icon: Shield, desc: 'Immunization, health education, and screening programs to prevent disease outbreaks.', color: 'amber' },
            { title: 'Specialist Clinics', icon: Activity, desc: 'Specialized medical services including dental, eye care, and chronic disease management.', color: 'indigo' },
            { title: 'Community Outreach', icon: Users, desc: 'Bringing healthcare services to remote communities through mobile clinics and health posts.', color: 'teal' },
          ].map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[40px] border border-slate-200 hover:border-blue-500 transition-all shadow-sm hover:shadow-xl"
            >
              <div className={`w-16 h-16 rounded-2xl bg-${service.color}-50 flex items-center justify-center mb-8`}>
                <service.icon className={`text-${service.color}-600`} size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Levels of Care */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Network of Care</h2>
            <p className="text-slate-400">A tiered system ensuring healthcare reaches every corner of the province.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { level: 'Level 1', title: 'Community Health Posts', desc: 'The first point of contact for basic health needs in rural villages.' },
              { level: 'Level 2', title: 'District Health Centers', desc: 'Comprehensive primary care and minor surgical procedures at the district level.' },
              { level: 'Level 3', title: 'Provincial Hospital', desc: 'Advanced medical care, major surgeries, and specialist services in Madang Town.' },
            ].map((item, i) => (
              <div key={i} className="relative p-8 rounded-3xl bg-white/5 border border-white/10">
                <span className="absolute -top-4 left-8 bg-emerald-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {item.level}
                </span>
                <h3 className="text-2xl font-bold mb-4 mt-2">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
