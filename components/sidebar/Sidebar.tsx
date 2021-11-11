import React from 'react';

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
   return <div className='bg-gray-700 h-full hidden lg:block'>{children}</div>;
};
