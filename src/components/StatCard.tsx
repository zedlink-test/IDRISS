import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, icon }) => {
  return (
    <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex justify-center mb-3">
        <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full">
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{number}</div>
      <div className="text-gray-600 dark:text-gray-300 font-medium">{label}</div>
    </div>
  );
};

export default StatCard;