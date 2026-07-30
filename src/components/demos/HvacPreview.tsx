"use client";

import * as React from "react";
import { Wind, Snowflake, Flame, ArrowRight, Shield, BadgeCheck, MessageSquare } from "lucide-react";

export function HvacPreview() {
  const [temp, setTemp] = React.useState(72);

  return (
    <div className="min-h-full bg-slate-50 text-slate-900 font-sans pb-20 relative">
      {/* Header */}
      <nav className="flex items-center justify-between px-4 pt-10 pb-4 bg-white shadow-sm sticky top-0 z-40 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Wind className="w-5 h-5 text-cyan-600" />
          <span className="font-extrabold text-sm tracking-tight text-slate-900">Breeze HVAC</span>
        </div>
        <div className="bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm">
          Get Quote
        </div>
      </nav>

      {/* Hero */}
      <div className="px-5 pt-8 pb-10 bg-cyan-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px]" />
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1 bg-cyan-500/20 text-cyan-200 px-2 py-1 rounded-md text-[10px] font-bold mb-4 uppercase tracking-widest border border-cyan-500/30">
            <Snowflake className="w-3 h-3" /> Summer Special
          </div>
          <h1 className="text-3xl font-black leading-tight mb-3">
            Instant $89 AC Tune-Up & Same-Day Repair.
          </h1>
          <p className="text-cyan-100 text-xs mb-6 font-medium leading-relaxed">
            Don&apos;t sweat through the summer. Our certified techs are in your area now.
          </p>
        </div>
      </div>

      {/* Interactive Temperature Slider (Quote Gen) */}
      <div className="px-5 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-5">
          <h3 className="text-sm font-bold text-slate-800 mb-1 text-center">What&apos;s your current indoor temp?</h3>
          <p className="text-[10px] text-slate-500 text-center mb-6">Drag to calculate repair urgency</p>
          
          <div className="flex items-center gap-4 mb-6">
            <Snowflake className="w-5 h-5 text-blue-500 shrink-0" />
            <input 
              type="range" 
              min="65" 
              max="95" 
              value={temp}
              onChange={(e) => setTemp(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
            />
            <Flame className="w-5 h-5 text-red-500 shrink-0" />
          </div>
          
          <div className="text-center mb-6">
            <span className="text-4xl font-black text-slate-900">{temp}°</span>
            <div className={`text-[10px] font-bold px-2 py-1 rounded-full mt-2 inline-block ${temp > 80 ? 'bg-red-100 text-red-700' : temp > 74 ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
              {temp > 80 ? 'Emergency Repair Recommended' : temp > 74 ? 'System Checkup Needed' : 'Optimal Efficiency'}
            </div>
          </div>
          
          <button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3.5 rounded-xl shadow-[0_5px_15px_rgba(8,145,178,0.3)] flex items-center justify-center gap-2 text-sm transition-transform active:scale-95">
            Claim $89 Tune-Up <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Guarantees */}
      <div className="px-5 py-8">
        <div className="flex items-center gap-3 bg-slate-100 p-4 rounded-xl border border-slate-200 mb-3">
          <Shield className="w-6 h-6 text-slate-700 shrink-0" />
          <div>
            <h4 className="text-xs font-bold text-slate-900">100% Satisfaction Guarantee</h4>
            <p className="text-[10px] text-slate-600">Fixed right the first time, or it&apos;s free.</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-slate-100 p-4 rounded-xl border border-slate-200">
          <BadgeCheck className="w-6 h-6 text-slate-700 shrink-0" />
          <div>
            <h4 className="text-xs font-bold text-slate-900">NATE Certified Techs</h4>
            <p className="text-[10px] text-slate-600">Background-checked and highly trained.</p>
          </div>
        </div>
      </div>
      
      {/* Floating Speed-to-Lead Widget */}
      <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
        <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white ring-2 ring-cyan-600/20 relative pointer-events-auto cursor-pointer">
          <MessageSquare className="w-5 h-5 fill-current" />
          <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
        </div>
      </div>
    </div>
  );
}
