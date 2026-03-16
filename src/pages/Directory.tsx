import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Search, Filter } from 'lucide-react';
import { FACILITIES } from '../constants';

const Directory = () => {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-6 text-center">Facility Directory</h1>
          <p className="text-slate-500 text-center max-w-2xl mx-auto mb-10">
            Find hospitals, health centers, and community posts across Madang Province.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto flex gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search by facility name or location..." 
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            <button className="bg-slate-100 text-slate-700 px-6 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-200 transition-colors">
              <Filter size={20} />
              Filter
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* List */}
          <div className="lg:col-span-2 space-y-6">
            {FACILITIES.map((facility) => (
              <motion.div 
                key={facility.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-emerald-500 transition-all shadow-sm"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3">
                      {facility.type}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">{facility.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-emerald-600 flex items-center justify-end gap-1">
                      <Clock size={14} /> {facility.hours}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-600">
                      <MapPin size={18} className="text-slate-400" />
                      <span>{facility.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                      <Phone size={18} className="text-slate-400" />
                      <span>{facility.phone}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {facility.services.map((service, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="flex-grow bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors">
                    View Details
                  </button>
                  <button className="px-6 py-3 rounded-xl border border-slate-200 font-bold hover:bg-slate-50 transition-colors">
                    Get Directions
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-slate-200 rounded-3xl h-[600px] flex flex-col items-center justify-center text-slate-500 p-8 text-center border border-slate-300">
              <MapPin size={48} className="mb-4 opacity-20" />
              <h3 className="text-xl font-bold mb-2">Interactive Map</h3>
              <p className="text-sm">Select a facility to view its location on the map.</p>
              <div className="mt-8 w-full h-64 bg-slate-300 rounded-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Directory;
