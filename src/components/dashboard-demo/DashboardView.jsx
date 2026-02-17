import React from 'react';
import { 
  LayoutDashboard, 
  PieChart, 
  Wallet, 
  Settings, 
  Bell, 
  Search, 
  TrendingUp, 
  Users, 
  DollarSign 
} from 'lucide-react';
import PropertyCard from './PropertyCard';

export default function DashboardView() {
  return (
    <div className="w-full max-w-6xl mx-auto bg-slate-50 rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-slate-900/5 flex flex-col md:flex-row h-[700px]">
      
      {/* 1. Sidebar (Mini) */}
      <div className="hidden md:flex w-20 bg-slate-900 flex-col items-center py-8 gap-8">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold italic">
          A
        </div>
        <nav className="flex flex-col gap-6">
          <LayoutDashboard className="text-blue-500 cursor-pointer" size={24} />
          <PieChart className="text-slate-500 hover:text-white cursor-pointer transition-colors" size={24} />
          <Wallet className="text-slate-500 hover:text-white cursor-pointer transition-colors" size={24} />
          <Users className="text-slate-500 hover:text-white cursor-pointer transition-colors" size={24} />
        </nav>
        <Settings className="text-slate-500 mt-auto hover:text-white cursor-pointer transition-colors" size={24} />
      </div>

      {/* 2. Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden bg-slate-50">
        
        {/* Top Header inside Dashboard */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search assets..." 
              className="pl-10 pr-4 py-2 bg-slate-100 rounded-lg text-xs outline-none w-64 focus:ring-1 ring-blue-500"
            />
          </div>
          <div className="flex items-center gap-4">
            <Bell size={20} className="text-slate-400" />
            <div className="h-8 w-8 bg-blue-100 rounded-full border border-blue-200 flex items-center justify-center text-[10px] font-bold text-blue-600">
              AD
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Executive Overview</h3>
              <p className="text-slate-500 text-sm">Real-time portfolio performance</p>
            </div>
            <div className="flex gap-2 bg-white p-1 rounded-lg border border-slate-200">
              <button className="px-3 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-md">ALL TIME</button>
              <button className="px-3 py-1 text-slate-500 text-[10px] font-bold">24H</button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-4 text-emerald-600 bg-emerald-50 w-fit p-2 rounded-lg">
                <DollarSign size={20} />
              </div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Total Assets</p>
              <h4 className="text-2xl font-black text-slate-900">$24,150,000</h4>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-4 text-blue-600 bg-blue-50 w-fit p-2 rounded-lg">
                <TrendingUp size={20} />
              </div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Growth Rate</p>
              <h4 className="text-2xl font-black text-slate-900">+12.40%</h4>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl shadow-xl text-white">
              <div className="flex justify-between items-start mb-4 text-blue-400 bg-slate-800 w-fit p-2 rounded-lg">
                <Users size={20} />
              </div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Active Investors</p>
              <h4 className="text-2xl font-black italic">1,842</h4>
            </div>
          </div>

          {/* Recent Listings Grid */}
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Featured Portfolio Assets</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
            <PropertyCard name="Skyline Apex Center" price="$4.2M" location="Main Boulevard, LHR" trend="+8.2%" />
            <PropertyCard name="Emerald Residency" price="$2.1M" location="Defense Phase 6" trend="+12.5%" />
          </div>
        </div>
      </div>
    </div>
  );
}