import React from 'react';

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = ({ children }) => {
   return <div className='lg:col-span-3 bg-gray-500 h-full grid grid-rows-8 p-3 gap-4'>{children}</div>;
};
