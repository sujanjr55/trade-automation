"use client";

import * as React from "react";
import { Home, ShieldAlert, MessageSquare, Navigation } from "lucide-react";

export function RoofingPreview() {
  const [sliderPos, setSliderPos] = React.useState(50);

  return (
    <div className="min-h-full bg-slate-50 text-slate-900 font-sans pb-20 relative">
      {/* Header */}
      <nav className="flex items-center justify-between px-4 pt-10 pb-4 bg-slate-900 text-white shadow-sm sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <Home className="w-5 h-5 text-orange-500" />
          <span className="font-extrabold text-sm tracking-tight">Apex Roofing</span>
        </div>
        <div className="bg-orange-500 hover:bg-orange-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-sm shadow-sm transition-colors uppercase tracking-widest">
          Book Inspection
        </div>
      </nav>

      {/* Hero */}
      <div className="px-5 pt-8 pb-12 bg-slate-900 text-white relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1632759145355-6fb9b1f71df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] opacity-30 mix-blend-overlay object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900" />
        
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 bg-red-500/20 text-red-400 px-3 py-1.5 rounded-full text-[10px] font-black mb-4 uppercase tracking-widest border border-red-500/30">
            <ShieldAlert className="w-3.5 h-3.5" /> Storm Damage Alert
          </div>
          <h1 className="text-3xl font-black leading-tight mb-4 text-white">
            Free Drone Roof Inspection in 24 Hours.
          </h1>
          <p className="text-slate-400 text-xs mb-6 font-medium leading-relaxed max-w-[250px] mx-auto">
            We document the damage and fight the insurance company for you. 
          </p>
          
          <button className="w-full bg-orange-500 hover:bg-orange-400 text-white font-black py-4 rounded-lg shadow-[0_0_20px_rgba(249,115,22,0.4)] flex items-center justify-center gap-2 text-sm transition-transform active:scale-95 uppercase tracking-wide">
            Request Inspection <Navigation className="w-4 h-4 fill-current" />
          </button>
        </div>
      </div>

      {/* Interactive Before/After Slider */}
      <div className="px-5 -mt-6 relative z-20">
        <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-4">
          <h3 className="text-xs font-black text-slate-800 mb-3 uppercase tracking-widest text-center">Proof of Quality</h3>
          
          <div className="relative h-[200px] w-full rounded-lg overflow-hidden select-none bg-slate-200">
            {/* After Image (Background) */}
            <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-500 font-bold">
              New Roof Image
            </div>
            
            {/* Before Image (Foreground, clipped) */}
            <div 
              className="absolute inset-y-0 left-0 bg-slate-400 flex items-center justify-center text-slate-700 font-bold overflow-hidden border-r-2 border-orange-500"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="absolute w-[280px]">Damaged Roof</div>
            </div>

            {/* Labels */}
            <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm z-10">Before</div>
            <div className="absolute top-2 right-2 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm z-10">After</div>

            {/* Slider Control */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPos}
              onChange={(e) => setSliderPos(parseInt(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />
            
            {/* Slider Handle Visual */}
            <div 
              className="absolute inset-y-0 w-8 flex items-center justify-center -ml-4 pointer-events-none z-10"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-8 h-8 bg-orange-500 rounded-full shadow-lg border-2 border-white flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Speed-to-Lead Widget */}
      <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
        <div className="bg-slate-900 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white ring-2 ring-slate-900/20 relative pointer-events-auto cursor-pointer">
          <MessageSquare className="w-5 h-5 fill-current" />
          <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-orange-500 rounded-full border-2 border-white" />
        </div>
      </div>
    </div>
  );
}
