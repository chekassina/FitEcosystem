import React from 'react';
import { UserPlus, ShoppingBag, CreditCard, Calendar } from 'lucide-react';
import { cn } from '../lib/utils';

const activities = [
  { 
    id: 1, 
    type: 'member', 
    title: 'New Member Registered', 
    description: 'Sarah Jenkins signed up for Premium Annual', 
    time: '10 mins ago',
    icon: UserPlus,
    color: 'text-primary-600',
    bg: 'bg-primary-100'
  },
  { 
    id: 2, 
    type: 'order', 
    title: 'Product Purchased', 
    description: 'Order #4829 - Whey Protein Isolate', 
    time: '25 mins ago',
    icon: ShoppingBag,
    color: 'text-blue-600',
    bg: 'bg-blue-100'
  },
  { 
    id: 3, 
    type: 'payment', 
    title: 'Membership Renewed', 
    description: 'Michael Chang renewed Basic Monthly', 
    time: '1 hour ago',
    icon: CreditCard,
    color: 'text-emerald-600',
    bg: 'bg-emerald-100'
  },
  { 
    id: 4, 
    type: 'booking', 
    title: 'PT Session Booked', 
    description: 'Emma Davis with trainer Marcus Johnson', 
    time: '2 hours ago',
    icon: Calendar,
    color: 'text-amber-600',
    bg: 'bg-amber-100'
  }
];

export function RecentActivities() {
  return (
    <div className="space-y-6">
      {activities.map((activity, index) => (
        <div key={activity.id} className="relative pl-4">
          {index !== activities.length - 1 && (
            <div className="absolute left-6 top-10 bottom-[-24px] w-px bg-secondary-100"></div>
          )}
          <div className="flex gap-4">
            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10", activity.bg)}>
              <activity.icon className={cn("w-5 h-5", activity.color)} />
            </div>
            <div>
              <p className="text-sm font-semibold text-secondary-900">{activity.title}</p>
              <p className="text-sm text-secondary-500 mt-0.5">{activity.description}</p>
              <span className="text-xs text-secondary-400 mt-1 block">{activity.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
