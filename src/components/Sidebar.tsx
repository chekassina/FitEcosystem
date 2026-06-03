import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  IdCard, 
  Dumbbell, 
  CalendarDays, 
  Activity, 
  Apple, 
  Clock, 
  Megaphone, 
  DollarSign, 
  CreditCard, 
  PieChart, 
  Package, 
  Store, 
  Building2, 
  BarChart4, 
  Bot, 
  Settings 
} from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, active: true },
  { name: 'Members', icon: Users },
  { name: 'Memberships', icon: IdCard },
  { name: 'Trainers', icon: Dumbbell },
  { name: 'Classes', icon: CalendarDays },
  { name: 'Workouts', icon: Activity },
  { name: 'Nutrition', icon: Apple },
  { name: 'Attendance', icon: Clock },
  { name: 'Marketing', icon: Megaphone },
  { name: 'Sales & POS', icon: DollarSign },
  { name: 'Payments', icon: CreditCard },
  { name: 'Finance', icon: PieChart },
  { name: 'Inventory', icon: Package },
  { name: 'E-Commerce Store', icon: Store },
  { name: 'Fitness Marketplace', icon: Building2 },
  { name: 'Reports & Analytics', icon: BarChart4 },
  { name: 'AI Assistant', icon: Bot },
  { name: 'Settings', icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-[#0F172A] h-screen fixed top-0 left-0 flex flex-col text-secondary-400 z-20 border-r border-secondary-800">
      <div className="h-16 flex items-center px-6 border-b border-secondary-800 gap-3">
        <div className="bg-primary-500 p-1.5 rounded-lg w-8 h-8 flex items-center justify-center">
          <Dumbbell className="w-5 h-5 text-white" />
        </div>
        <span className="font-bold text-white text-lg tracking-tight uppercase">FitEcosystem</span>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4 custom-scrollbar">
        <nav className="px-4 space-y-1 text-xs font-semibold uppercase tracking-wider">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group",
                item.active 
                  ? "bg-primary-600/20 text-primary-400 border border-primary-500/30" 
                  : "hover:bg-secondary-800 hover:text-white"
              )}
            >
              <item.icon className={cn(
                "w-4 h-4 transition-colors",
                item.active ? "text-primary-400" : "text-secondary-500 group-hover:text-secondary-300"
              )} />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
