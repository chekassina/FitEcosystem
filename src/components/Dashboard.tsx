import React from 'react';
import { 
  Users, UserCheck, DollarSign, ShoppingBag, 
  Store, UserPlus, ShoppingCart, CalendarCheck
} from 'lucide-react';
import { cn } from '../lib/utils';
import { RevenueChart } from './RevenueChart';
import { MembershipDistribution } from './MembershipDistribution';
import { RecentActivities } from './RecentActivities';
import { QuickActions } from './QuickActions';

const stats = [
  { label: 'Total Members', value: '2,845', change: '+12%', isPositive: true, icon: Users, color: 'text-primary-600', bg: 'bg-primary-100' },
  { label: 'Active Members', value: '2,512', change: '+5%', isPositive: true, icon: UserCheck, color: 'text-emerald-600', bg: 'bg-emerald-100' },
  { label: 'Monthly Revenue', value: '$124,500', change: '+18%', isPositive: true, icon: DollarSign, color: 'text-blue-600', bg: 'bg-blue-100' },
  { label: 'Product Sales', value: '$34,200', change: '+8%', isPositive: true, icon: ShoppingBag, color: 'text-violet-600', bg: 'bg-violet-100' },
  { label: 'Marketplace Rev', value: '$18,450', change: '+24%', isPositive: true, icon: Store, color: 'text-fuchsia-600', bg: 'bg-fuchsia-100' },
  { label: 'New Members', value: '145', change: '-2%', isPositive: false, icon: UserPlus, color: 'text-rose-600', bg: 'bg-rose-100' },
  { label: 'Pending Orders', value: '42', change: '+15%', isPositive: false, icon: ShoppingCart, color: 'text-amber-600', bg: 'bg-amber-100' },
  { label: 'Trainer Bookings', value: '856', change: '+11%', isPositive: true, icon: CalendarCheck, color: 'text-cyan-600', bg: 'bg-cyan-100' },
];

export function Dashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      
      {/* Top Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-secondary-100 flex flex-col justify-between h-24 relative overflow-hidden">
            <div className="flex items-center justify-between w-full">
              <p className="text-xs font-bold text-secondary-500 uppercase tracking-wider">{stat.label}</p>
              <stat.icon className={cn("w-4 h-4 opacity-40", stat.color)} />
            </div>
            <div className="flex items-baseline gap-2 mt-auto">
              <h3 className="text-2xl font-black text-secondary-900 font-mono">{stat.value}</h3>
              <span className={cn(
                "text-xs font-bold",
                stat.isPositive ? "text-emerald-500" : "text-rose-500"
              )}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Main Charts */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-2xl border border-secondary-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-secondary-900">Revenue Analytics</h2>
                <p className="text-sm text-secondary-500">Monthly breakdown across all channels</p>
              </div>
              <select className="bg-secondary-50 border border-secondary-200 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Last 6 Months</option>
                <option>This Year</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="h-80 w-full">
              <RevenueChart />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-secondary-100 shadow-sm p-6">
               <h2 className="text-lg font-bold text-secondary-900 mb-6">Trainer Performance</h2>
               <div className="space-y-4">
                  {[
                    { name: 'Marcus Johnson', role: 'Strength & Conditioning', bookings: 142, rating: 4.9, avatar: 'M' },
                    { name: 'Sarah Williams', role: 'Yoga & Pilates', bookings: 118, rating: 4.8, avatar: 'S' },
                    { name: 'David Chen', role: 'HIIT Specialist', bookings: 95, rating: 4.7, avatar: 'D' },
                    { name: 'Emma Davis', role: 'Personal Training', bookings: 84, rating: 4.9, avatar: 'E' },
                  ].map((trainer, i) => (
                    <div key={i} className="flex items-center justify-between p-3 hover:bg-secondary-50 rounded-lg transition-colors border border-transparent hover:border-secondary-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
                          {trainer.avatar}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-secondary-900">{trainer.name}</p>
                          <p className="text-xs text-secondary-500">{trainer.role}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-secondary-900">{trainer.bookings} sessions</p>
                        <p className="text-xs text-amber-500 font-medium">★ {trainer.rating}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="bg-white rounded-2xl border border-secondary-100 shadow-sm p-6">
               <h2 className="text-lg font-bold text-secondary-900 mb-6">Best-Selling Products</h2>
               <div className="space-y-4">
                  {[
                    { name: 'Whey Protein Isolate', category: 'Supplements', sales: 432, price: '$45.00', img: 'bg-blue-100' },
                    { name: 'Pre-Workout Energy', category: 'Supplements', sales: 384, price: '$35.00', img: 'bg-red-100' },
                    { name: 'Pro Yoga Mat', category: 'Equipment', sales: 215, price: '$28.00', img: 'bg-emerald-100' },
                    { name: 'Resistance Bands Set', category: 'Equipment', sales: 189, price: '$18.00', img: 'bg-amber-100' },
                  ].map((product, i) => (
                    <div key={i} className="flex items-center justify-between p-3 hover:bg-secondary-50 rounded-lg transition-colors border border-transparent hover:border-secondary-100">
                      <div className="flex items-center gap-3">
                        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", product.img)}>
                          <ShoppingBag className="w-5 h-5 text-secondary-600 opacity-50" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-secondary-900 line-clamp-1">{product.name}</p>
                          <p className="text-xs text-secondary-500">{product.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-secondary-900">{product.price}</p>
                        <p className="text-xs text-secondary-500">{product.sales} sold</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-2 space-y-6">
          
          <QuickActions />

          <div className="bg-[#1E1B4B] p-6 rounded-2xl shadow-xl flex flex-col text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 blur-3xl"></div>
            <h2 className="text-lg font-bold text-white mb-6 z-10 relative">Membership Distribution</h2>
            <div className="h-64 w-full z-10 relative">
              <MembershipDistribution />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 z-10 relative">
              {[
                { label: 'Active', value: '2,512', color: 'bg-primary-500' },
                { label: 'Expired', value: '184', color: 'bg-secondary-500' },
                { label: 'Pending', value: '96', color: 'bg-amber-400' },
                { label: 'Frozen', value: '53', color: 'bg-sky-400' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className={cn("w-3 h-3 rounded-full", item.color)}></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-200">{item.label}</span>
                  <span className="text-sm font-semibold text-white ml-auto">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-secondary-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-secondary-900">Recent Activities</h2>
              <button className="text-sm text-primary-600 font-medium hover:text-primary-700">View All</button>
            </div>
            <RecentActivities />
          </div>

        </div>
      </div>
    </div>
  );
}
