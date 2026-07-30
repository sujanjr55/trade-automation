"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { TrendingUp, PieChart, ArrowUpRight, ChevronRight } from "lucide-react";

export function ConsultingDemo() {
  return (
    <div className="min-h-full bg-slate-50 text-slate-900 font-sans overflow-hidden pb-10">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-5 bg-[#0A192F] text-white rounded-b-3xl">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 border-2 border-[#D4AF37] rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-[#D4AF37]" />
          </div>
          <span className="font-extrabold text-sm tracking-tight uppercase">Vanguard</span>
        </div>
        <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest border border-[#D4AF37]/30 px-3 py-1 rounded-full cursor-pointer hover:bg-[#D4AF37]/10 transition-colors">
          Client Login
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-5 pt-8 pb-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">Global Strategy</span>
          </div>
          
          <h1 className="text-3xl font-black text-[#0A192F] leading-[1.1] mb-4">
            Scale Operations. <br /> Maximize Equity.
          </h1>
          
          <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
            We partner with 8-figure founders to optimize operations, implement elite leadership, and prepare for exit.
          </p>
          
          <button className="w-full bg-[#0A192F] hover:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all text-sm flex justify-center items-center gap-2">
            Request Growth Audit <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
          </button>
        </motion.div>
      </div>

      {/* Metrics Dashboard Component */}
      <div className="px-5 py-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          className="w-full bg-white border border-slate-200 rounded-2xl p-5 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-[30px]" />
          
          <div className="flex items-center justify-between mb-6 relative z-10">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Average ROI</h3>
            <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
              <TrendingUp className="w-3 h-3" />
              <span className="text-[10px] font-bold">+314%</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 relative z-10">
            <div>
              <p className="text-[10px] text-slate-500 font-medium mb-1">EBITDA Growth</p>
              <h4 className="text-2xl font-black text-[#0A192F]">2.4x</h4>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-medium mb-1">Exit Multiples</p>
              <h4 className="text-2xl font-black text-[#0A192F]">12x</h4>
            </div>
          </div>
          
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5"><PieChart className="w-4 h-4 text-[#D4AF37]" /> Q3 Report Available</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </div>
        </motion.div>
      </div>

      {/* Client Logos / Ticker */}
      <div className="px-5 py-4">
        <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Trusted by Industry Leaders</p>
        <div className="flex justify-between items-center opacity-60 grayscale px-2">
          <div className="text-sm font-black font-serif">ACME Corp</div>
          <div className="text-sm font-black tracking-tighter">GLOBAL</div>
          <div className="text-sm font-black italic">Vertex</div>
        </div>
      </div>
    </div>
  );
}
