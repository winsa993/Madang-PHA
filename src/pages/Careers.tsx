import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, ArrowRight, MapPin, Clock } from 'lucide-react';

const Careers = () => {
  const jobs = [
    { title: 'Registered Nurse', department: 'Nursing Services', location: 'Madang Town', type: 'Full-time', deadline: 'April 15, 2026' },
    { title: 'Medical Officer', department: 'Clinical Services', location: 'Bogia District', type: 'Full-time', deadline: 'April 20, 2026' },
    { title: 'Health Extension Officer', department: 'Public Health', location: 'Karkar Island', type: 'Full-time', deadline: 'May 01, 2026' },
    { title: 'Administrative Assistant', department: 'Corporate Services', location: 'Madang Town', type: 'Contract', deadline: 'April 10, 2026' },
  ];

  return (
    <div className="pb-20">
      <section className="bg-slate-900 py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Careers at MPHA</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join our team of dedicated professionals and help us build a healthier Madang.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Vacancies */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Current Vacancies</h2>
            {jobs.map((job, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-emerald-500 transition-all shadow-sm"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1"><Briefcase size={14} /> {job.department}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                    </div>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-3">Deadline: {job.deadline}</p>
                    <button className="bg-emerald-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-emerald-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Internship & Info */}
          <div className="space-y-8">
            <div className="bg-emerald-50 p-8 rounded-[32px] border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Internship Opportunities</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                We offer internships for medical and nursing students looking to gain practical experience in a provincial health setting.
              </p>
              <button className="text-emerald-600 font-bold text-sm flex items-center gap-2">
                Learn about Internships <ArrowRight size={16} />
              </button>
            </div>

            <div className="bg-slate-900 p-8 rounded-[32px] text-white">
              <h3 className="text-xl font-bold mb-4">How to Apply</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Please download the standard job application form from our downloads section and submit it along with your CV and credentials.
              </p>
              <button className="w-full bg-white text-slate-900 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">
                Application Instructions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
