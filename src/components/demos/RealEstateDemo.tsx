"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, MapPin, Building2, SlidersHorizontal, ArrowRight } from "lucide-react";

export function RealEstateDemo() {
  return (
    <div className="min-h-full bg-[#FAF9F6] text-[#2C3E50] font-serif overflow-hidden pb-10">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-5 bg-transparent absolute top-0 w-full z-50">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg tracking-widest uppercase text-white drop-shadow-md">Aura</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
          <div className="w-4 h-0.5 bg-white rounded-full shadow-sm" />
          <div className="w-4 h-0.5 bg-white rounded-full shadow-sm absolute mt-2" />
        </div>
      </nav>

      {/* Hero Section with Full-Bleed Image */}
      <div className="relative h-[350px] w-full bg-slate-900 rounded-b-[2.5rem] overflow-hidden shadow-xl">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Luxury Home" 
          fill
          className="object-cover scale-105 transform origin-bottom"
        />
        
        <div className="absolute bottom-10 left-5 right-5 z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h1 className="text-3xl font-normal text-white mb-2 leading-tight drop-shadow-lg">
              Find Your <br /> <span className="font-bold italic">Sanctuary.</span>
            </h1>
            
            {/* Interactive Search Widget */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2 mt-4 flex items-center shadow-2xl font-sans">
              <div className="flex-1 flex items-center gap-2 px-3 border-r border-slate-200">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-semibold text-slate-800">Beverly Hills</span>
              </div>
              <div className="px-3 flex items-center">
                <SlidersHorizontal className="w-4 h-4 text-slate-600" />
              </div>
              <div className="w-10 h-10 bg-[#2C3E50] rounded-xl flex items-center justify-center shrink-0">
                <Search className="w-4 h-4 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Curated Listings */}
      <div className="px-5 py-8 font-sans">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h3 className="font-bold text-[#2C3E50] text-lg font-serif">Curated Estates</h3>
            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest mt-1">Exclusive Access</p>
          </div>
          <span className="text-xs font-bold text-[#C9A959] flex items-center gap-1 cursor-pointer">View All <ArrowRight className="w-3 h-3" /></span>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x hide-scrollbar">
          {[1, 2].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-[220px] shrink-0 snap-center bg-white rounded-3xl p-3 shadow-md border border-slate-100"
            >
              <div className="h-[140px] rounded-2xl bg-slate-200 mb-3 overflow-hidden relative">
                <Image 
                  src={i === 1 ? "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" : "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"}
                  alt="Property" 
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 bg-black/60 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded-full">
                  Just Listed
                </div>
              </div>
              <div className="px-1">
                <h4 className="font-bold text-sm text-[#2C3E50] truncate">{i === 1 ? "$8,500,000" : "$12,250,000"}</h4>
                <p className="text-[10px] text-slate-500 mt-0.5 truncate">1240 Benedict Canyon Dr</p>
                <div className="flex gap-3 mt-3 text-[10px] font-semibold text-slate-700">
                  <span className="flex items-center gap-1"><Building2 className="w-3 h-3 text-slate-400" /> {i===1?'5 Beds':'7 Beds'}</span>
                  <span className="flex items-center gap-1">6 Baths</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
