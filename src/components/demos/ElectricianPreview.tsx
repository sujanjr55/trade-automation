"use client";

import * as React from "react";
import { Zap, AlertTriangle, MessageSquare, Plus, Minus, Plug, Clock } from "lucide-react";

export function ElectricianPreview() {
  const [panels, setPanels] = React.useState(1);

  return (
    <div className="min-h-full bg-slate-950 text-white font-sans pb-20 relative">
      {/* Header */}
      <nav className="flex items-center justify-between px-4 pt-10 pb-4 bg-slate-900 border-b border-white/10 sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <div className="bg-yellow-400 p-1 rounded-sm">
            <Zap className="w-4 h-4 text-slate-900 fill-slate-900" />
          </div>
          <span className="font-extrabold text-sm tracking-widest uppercase">Volt Electric</span>
        </div>
        <div className="flex gap-2">
          <div className="text-yellow-400 text-[10px] font-bold px-3 py-1.5 rounded border border-yellow-400/30 uppercase tracking-widest">
            Call Now
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="px-5 pt-8 pb-10 relative overflow-hidden">
        {/* Neon Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-[100px]" />
        
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 bg-red-500/10 text-red-400 px-3 py-1.5 rounded-full text-[10px] font-black mb-6 uppercase tracking-widest border border-red-500/20">
            <AlertTriangle className="w-3.5 h-3.5" /> Emergency Dispatch Available
          </div>
          <h1 className="text-3xl font-black leading-[1.1] mb-4">
            Licensed Electricians On-Site in <span className="text-yellow-400">60 Mins.</span>
          </h1>
          <p className="text-slate-400 text-xs mb-8 font-medium leading-relaxed max-w-[280px] mx-auto">
            Power outage? Sparking outlets? Do not wait. Our rapid response team is standing by 24/7.
          </p>
          
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-black py-4 rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.3)] flex items-center justify-center gap-2 text-sm transition-transform active:scale-95 uppercase tracking-wide">
            <Clock className="w-4 h-4" /> Book Emergency Call
          </button>
        </div>
      </div>

      {/* Interactive Panel Upgrade Calculator */}
      <div className="px-5">
        <div className="bg-slate-900 rounded-xl border border-white/10 p-5 shadow-2xl">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Plug className="w-4 h-4 text-slate-400" />
            <h3 className="text-xs font-black text-white uppercase tracking-widest">Panel Upgrade Est.</h3>
          </div>
          <p className="text-[10px] text-slate-500 text-center mb-6">Calculate cost for modern 200A service</p>
          
          <div className="flex items-center justify-between bg-slate-950 p-2 rounded-lg border border-white/5 mb-6">
            <button 
              onClick={() => setPanels(Math.max(1, panels - 1))}
              className="w-10 h-10 bg-slate-800 rounded-md flex items-center justify-center hover:bg-slate-700 active:scale-95 transition-all"
            >
              <Minus className="w-4 h-4 text-slate-400" />
            </button>
            <div className="text-center">
              <span className="text-2xl font-black">{panels}</span>
              <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Panel(s)</span>
            </div>
            <button 
              onClick={() => setPanels(panels + 1)}
              className="w-10 h-10 bg-slate-800 rounded-md flex items-center justify-center hover:bg-slate-700 active:scale-95 transition-all"
            >
              <Plus className="w-4 h-4 text-slate-400" />
            </button>
          </div>
          
          <div className="flex items-end justify-between border-t border-white/10 pt-4">
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Starting at</p>
              <h4 className="text-2xl font-black text-yellow-400">${(panels * 1850).toLocaleString()}</h4>
            </div>
            <div className="text-[10px] font-bold bg-slate-800 text-slate-300 px-3 py-1.5 rounded cursor-pointer hover:bg-slate-700 transition-colors uppercase tracking-widest">
              Get Exact Quote
            </div>
          </div>
        </div>
      </div>

      {/* Floating Speed-to-Lead Widget */}
      <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
        <div className="bg-yellow-400 text-slate-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-slate-950 relative pointer-events-auto cursor-pointer shadow-yellow-400/20">
          <MessageSquare className="w-5 h-5 fill-current" />
          <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-slate-950" />
        </div>
      </div>
    </div>
  );
}
