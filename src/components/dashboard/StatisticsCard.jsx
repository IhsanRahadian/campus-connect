import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, Share2 } from 'lucide-react';

export function StatisticsCard({ stats }) {
  const {
    totalConnections = 0,
    activeChats = 0,
    sharedInterests = 0
  } = stats || {};

  const statItems = [
    {
      label: 'Total Connections',
      value: totalConnections,
      icon: Users,
      color: 'text-blue-500'
    },
    {
      label: 'Active Chats',
      value: activeChats,
      icon: BookOpen,
      color: 'text-green-500'
    },
    {
      label: 'Shared Interests',
      value: sharedInterests,
      icon: Share2,
      color: 'text-purple-500'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Network Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {statItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg"
            >
              <item.icon className={`h-8 w-8 ${item.color} mb-2`} />
              <span className="text-2xl font-bold">{item.value}</span>
              <span className="text-sm text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}