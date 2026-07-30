"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { HeartPulse, Calendar, Phone, Star, Clock, CheckCircle2 } from "lucide-react";

export function HealthcareDemo() {
  return (
    <div className="min-h-full bg-slate-50 text-slate-900 font-sans overflow-hidden pb-10">
      {/* Top Banner */}
      <div className="bg-teal-700 text-teal-50 text-[10px] font-medium py-1.5 text-center flex items-center justify-center gap-1">
        <Clock className="w-3 h-3" /> Walk-ins welcome until 8:00 PM today
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <HeartPulse className="w-6 h-6 text-teal-600" />
          <span className="font-bold text-sm text-slate-800 tracking-tight">NovaHealth</span>
        </div>
        <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
          <div className="w-4 h-0.5 bg-slate-600 rounded-full shadow-[0_3px_0_rgba(71,85,105,1),0_-3px_0_rgba(71,85,105,1)]" />
        </button>
      </nav>

      {/* Hero Section */}
      <div className="px-5 pt-8 pb-6 bg-white rounded-b-[2rem] shadow-sm relative z-10">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="relative z-10">
          <div className="flex items-center gap-1 mb-3">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
            <span className="text-[10px] font-semibold text-slate-600 ml-1">4.9/5 (2,400+ Reviews)</span>
          </div>
          
          <h1 className="text-3xl font-extrabold text-slate-900 leading-[1.15] mb-4">
            Modern Care, <br /> <span className="text-teal-600">Without the Wait.</span>
          </h1>
          
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Board-certified doctors, state-of-the-art facilities, and same-day appointments. Your health, prioritized.
          </p>
          
          {/* Interactive Booking Widget */}
          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl shadow-sm mb-2">
            <div className="flex gap-2 mb-3">
              <div className="flex-1 bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-center gap-2 text-sm font-semibold text-slate-700 shadow-sm cursor-pointer hover:border-teal-500 transition-colors">
                <Calendar className="w-4 h-4 text-teal-600" /> Book Visit
              </div>
              <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm cursor-pointer hover:border-teal-500 transition-colors">
                <Phone className="w-5 h-5 text-teal-600" />
              </div>
            </div>
            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 rounded-xl shadow-md shadow-teal-600/20 transition-all text-sm">
              Check Next Availability
            </button>
          </div>
        </motion.div>
      </div>

      {/* Services Checklist */}
      <div className="px-5 py-8">
        <h3 className="font-bold text-slate-900 text-lg mb-4">Comprehensive Care</h3>
        <div className="space-y-3">
          {["Primary & Urgent Care", "Advanced Diagnostics", "Pediatric Medicine", "Virtual Telehealth"].map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm"
            >
              <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
              </div>
              <span className="text-sm font-semibold text-slate-700">{service}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
