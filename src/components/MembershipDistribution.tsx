import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Active', value: 2512 },
  { name: 'Expired', value: 184 },
  { name: 'Pending', value: 96 },
  { name: 'Frozen', value: 53 },
];

const COLORS = ['#6366f1', '#64748b', '#fbbf24', '#38bdf8'];

export function MembershipDistribution() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          itemStyle={{ color: '#0f172a', fontWeight: 500 }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
