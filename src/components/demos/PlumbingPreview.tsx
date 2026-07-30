"use client";

import * as React from "react";
import { Phone, Clock, ShieldCheck, Droplet, Star, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export function PlumbingPreview() {
  return (
    <div className="min-h-full bg-slate-50 text-slate-900 font-sans pb-20 relative">
      {/* Top Banner */}
      <div className="bg-red-600 text-white text-[10px] font-bold py-1.5 text-center flex items-center justify-center gap-1 uppercase tracking-wider">
        <Clock className="w-3 h-3" /> 24/7 Emergency Service Active
      </div>

      {/* Header */}
      <nav className="flex items-center justify-between p-4 bg-white shadow-sm sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <Droplet className="w-5 h-5 text-blue-600 fill-blue-600" />
          <span className="font-extrabold text-sm tracking-tight text-slate-900">ProPlumb</span>
        </div>
        <div className="flex gap-1">
          <div className="bg-amber-500 text-white rounded-full p-1.5 shadow-md shadow-amber-500/20">
            <Phone className="w-3.5 h-3.5" />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="px-5 pt-6 pb-8 bg-blue-900 text-white rounded-b-[2rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] opacity-20 mix-blend-overlay object-cover" />
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-md px-2 py-1 rounded-md text-[10px] font-bold mb-3 border border-white/20">
            <ShieldCheck className="w-3 h-3 text-emerald-400" /> Licensed & Insured
          </div>
          <h1 className="text-2xl font-black leading-tight mb-3">
            Fast Emergency Plumbing in <span className="text-amber-400">Austin, TX.</span>
          </h1>
          <p className="text-blue-100 text-xs mb-5 font-medium leading-relaxed">
            Burst pipe? Water heater leaking? Our trucks are fully stocked and ready to dispatch to your home right now.
          </p>
          
          <button className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-black py-4 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2 text-sm transition-transform active:scale-95">
            <span className="relative flex h-3 w-3 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            Call (555) 019-2834
          </button>
        </div>
      </div>

      {/* Trust Elements */}
      <div className="px-5 py-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-amber-500">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
          </div>
          <span className="text-xs font-bold text-slate-700">4.9/5 (1,280+ Reviews)</span>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {["$0 Dispatch Fee", "Upfront Pricing", "Same-Day Fix", "2 Year Warranty"].map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 p-3 rounded-xl flex items-center gap-2 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-[10px] font-bold text-slate-800 leading-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Speed-to-Lead Widget */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-4 right-4 z-50 pointer-events-none"
      >
        <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(37,99,235,0.5)] border-2 border-white ring-2 ring-blue-600/20 relative pointer-events-auto cursor-pointer">
          <MessageSquare className="w-5 h-5 fill-current" />
          <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
        </div>
      </motion.div>
    </div>
  );
}
