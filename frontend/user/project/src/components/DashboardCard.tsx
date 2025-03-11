import React from 'react';

interface DashboardCardProps {
  title: string;
  value: number;
  icon: React.ElementType;
  description: string;
}

export function DashboardCard({ title, value, icon: Icon, description }: DashboardCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-500">{description}</p>
    </div>
  );
}
export default DashboardCard; 