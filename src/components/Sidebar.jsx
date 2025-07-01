import React, { useState } from 'react';
import { ChartPieIcon } from '@heroicons/react/24/solid';
import { CalendarDateRangeIcon } from '@heroicons/react/24/solid';

function Sidebar({ logo }) {
  const [activeItem, setActiveItem] = useState('Dashboard'); 

  const menuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: ChartPieIcon},
    { label: 'Manage Task', path: '/manage-task', icon: CalendarDateRangeIcon }, 
  ];

  return (
    <div className="w-64 min-h-screen bg-white shadow-md p-6 rounded-lg">

      {/* Logo placement */}
      {logo && (
        <div className="text-3xl font-bold text-center text-blue-600 mb-8">
          {logo}
        </div>
      )}
      
      {/* RENDERING MENU ITEMS DENGAN MAPPING */}
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={`flex items-center p-2 rounded-md cursor-pointer transition-colors
                        ${activeItem === item.label
                          ? 'bg-blue-600 text-white font-semibold'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                        }`}
            onClick={() => {
              setActiveItem(item.label);
              // TODO: Navigasi menggunakan React Router di sini
              // navigate(item.path);
            }}
          >
            {/* (2) --- KONDISIONAL RENDERING UNTUK IKON YANG DIIMPOR --- */}
            {item.icon ? (
                <item.icon className="w-5 h-5 mr-3" />
            ) : (
                <span className="mr-3 w-5 h-5 flex items-center justify-center">?</span> 
            )}
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;