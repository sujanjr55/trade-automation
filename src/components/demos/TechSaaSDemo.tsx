"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Cpu, ChevronRight, BarChart3 } from "lucide-react";

export function TechSaaSDemo() {
  return (
    <div className="min-h-full bg-slate-950 text-slate-50 font-sans overflow-hidden pb-10">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-indigo-500 flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-sm tracking-tight">NexusAI</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <div className="w-4 h-0.5 bg-white/70 rounded-full shadow-[0_3px_0_rgba(255,255,255,0.7),0_-3px_0_rgba(255,255,255,0.7)]" />
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-5 pt-12 pb-8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/30 rounded-full blur-[60px]" />
        
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-bold tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" /> V2.0 is Live
          </div>
          <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight mb-4 bg-gradient-to-br from-white via-indigo-100 to-indigo-400 bg-clip-text text-transparent">
            Automate Logic. <br /> Scale Faster.
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 px-2">
            The intelligent infrastructure layer that transforms raw data into actionable revenue systems instantly.
          </p>
          
          <div className="flex flex-col gap-3">
            <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all flex items-center justify-center gap-2">
              Start Free Trial <ChevronRight className="w-4 h-4" />
            </button>
            <button className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium py-3.5 rounded-xl transition-all">
              View Documentation
            </button>
          </div>
        </motion.div>
      </div>

      {/* Feature Dashboard Preview */}
      <div className="px-4 py-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          className="w-full bg-slate-900 border border-white/10 rounded-2xl p-4 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
          
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold text-slate-300">Live Analytics</h3>
            <span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded font-mono">+14.2%</span>
          </div>

          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${i===1 ? 'bg-indigo-500/20 text-indigo-400' : i===2 ? 'bg-purple-500/20 text-purple-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                  {i === 1 ? <BarChart3 className="w-4 h-4" /> : i === 2 ? <Cpu className="w-4 h-4" /> : <Shield className="w-4 h-4" />}
                </div>
                <div className="flex-1">
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: `${60 + (i * 15)}%` }} 
                      transition={{ duration: 1 }}
                      className={`h-full ${i===1 ? 'bg-indigo-500' : i===2 ? 'bg-purple-500' : 'bg-emerald-500'}`} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Grid Features */}
      <div className="px-4 grid grid-cols-2 gap-3 mt-4">
        <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-4 hover:border-indigo-500/30 transition-colors">
          <Cpu className="w-6 h-6 text-indigo-400 mb-2" />
          <h4 className="text-sm font-bold text-slate-200 mb-1">Neural Core</h4>
          <p className="text-[10px] text-slate-400">Deep learning algorithms process instantly.</p>
        </div>
        <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-4 hover:border-purple-500/30 transition-colors">
          <Shield className="w-6 h-6 text-purple-400 mb-2" />
          <h4 className="text-sm font-bold text-slate-200 mb-1">Zero-Trust</h4>
          <p className="text-[10px] text-slate-400">Military-grade encryption standard.</p>
        </div>
      </div>
    </div>
  );
}
