import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';

export default function PropertyCard({ name, price, location, trend }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h5 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {name}
          </h5>
          <div className="flex items-center gap-1 text-slate-400 text-xs">
            <MapPin size={12} />
            {location}
          </div>
        </div>
        <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
          <ArrowUpRight size={16} />
        </div>
      </div>
      
      <div className="mt-6 flex justify-between items-end">
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Valuation</p>
          <p className="text-lg font-black text-slate-900">{price}</p>
        </div>
        <div className="px-2 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-md">
          {trend}
        </div>
      </div>
    </div>
  );
}