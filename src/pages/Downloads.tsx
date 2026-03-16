import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download as DownloadIcon, FileSpreadsheet, FileCheck } from 'lucide-react';

const Downloads = () => {
  const documents = [
    { title: 'Provincial Health Plan 2022-2030', category: 'Strategic Plans', size: '2.4 MB', type: 'PDF' },
    { title: 'Annual Health Performance Report 2025', category: 'Reports', size: '4.1 MB', type: 'PDF' },
    { title: 'MPHA Organizational Structure', category: 'Policies', size: '1.2 MB', type: 'PDF' },
    { title: 'Job Application Form (Standard)', category: 'Forms', size: '0.5 MB', type: 'PDF' },
    { title: 'Complaint Submission Form', category: 'Forms', size: '0.3 MB', type: 'PDF' },
    { title: 'Madang Health Statistics Q4 2025', category: 'Statistics', size: '1.8 MB', type: 'PDF' },
  ];

  return (
    <div className="pb-20">
      <section className="bg-slate-900 py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Downloads</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Access official health reports, policy documents, strategic plans, and public forms.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-emerald-500 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                  <FileText className="text-slate-400 group-hover:text-emerald-600" size={24} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-2 py-1 rounded">
                  {doc.type}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                {doc.title}
              </h3>
              <p className="text-sm text-slate-500 mb-6">{doc.category}</p>
              <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                <span className="text-xs font-medium text-slate-400">{doc.size}</span>
                <button className="flex items-center gap-2 text-emerald-600 font-bold text-sm hover:text-emerald-700 transition-colors">
                  <DownloadIcon size={16} />
                  Download
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Downloads;
