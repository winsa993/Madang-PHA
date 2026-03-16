import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We are here to help. Reach out to us for any health-related enquiries or information.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {[
              { icon: Phone, title: 'Call Us', detail: '+675 422 2022', sub: 'Available 24/7 for emergencies', color: 'emerald' },
              { icon: Mail, title: 'Email Us', detail: 'info@madanghealth.gov.pg', sub: 'Response within 24 hours', color: 'blue' },
              { icon: MapPin, title: 'Visit Us', detail: 'Modilon Road, Madang Town', sub: 'Madang Province, PNG', color: 'amber' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <div className={`w-12 h-12 rounded-xl bg-${item.color}-50 flex items-center justify-center mb-6`}>
                  <item.icon className={`text-${item.color}-600`} size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-900 font-medium mb-1">{item.detail}</p>
                <p className="text-slate-500 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-12 rounded-[40px] border border-slate-200 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Subject</label>
                <select className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>General Enquiry</option>
                  <option>Health Service Feedback</option>
                  <option>Career Opportunity</option>
                  <option>Emergency Report</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea 
                  rows={5} 
                  placeholder="How can we help you?" 
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
              </div>
              <button className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-3">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-slate-200 rounded-[40px] h-[500px] overflow-hidden relative border border-slate-300">
          <div className="absolute inset-0 flex items-center justify-center text-slate-500 italic">
            <div className="text-center">
              <MapPin size={48} className="mx-auto mb-4 opacity-20" />
              <p>Google Maps Integration Placeholder</p>
              <p className="text-sm mt-2">Modilon Road, Madang Town</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
