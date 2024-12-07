import React from 'react';
import { Home, User, GraduationCap, Briefcase, Heart, Settings } from 'lucide-react';

export function Sidebar() {
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '#' },
    { icon: User, label: 'Profile', href: '#' },
    { icon: GraduationCap, label: 'Academic', href: '#' },
    { icon: Briefcase, label: 'Career', href: '#' },
    { icon: Heart, label: 'Interests', href: '#' },
    { icon: Settings, label: 'Settings', href: '#' }
  ];

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4">
      <div className="space-y-4">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            
              key={index}
              href={item.href}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </aside>
  );
}