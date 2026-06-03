import React from 'react';
import { Search, Bell, Plus, ChevronDown } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-secondary-200 flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-64 md:w-96">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" />
          <input
            type="text"
            placeholder="Search records..."
            className="w-full pl-10 pr-4 py-2 bg-secondary-100 border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all placeholder:text-secondary-400"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-primary-200">
          <Plus className="w-4 h-4" />
          Quick Actions
        </button>
        
        <div className="w-px h-6 bg-secondary-200 mx-2"></div>
        
        <button className="relative p-2 text-secondary-500 hover:text-secondary-700 hover:bg-secondary-50 rounded-full transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
        </button>
        
        <button className="flex items-center gap-3 pl-2">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-primary-100 border border-primary-200">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=e2e8f0" alt="Admin user" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-start hidden md:flex">
            <span className="text-sm font-semibold text-secondary-900 leading-tight">Admin User</span>
            <span className="text-xs text-secondary-500">Gym Manager</span>
          </div>
        </button>
      </div>
    </header>
  );
}
