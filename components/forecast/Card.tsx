import React from 'react';

interface CardProps {}

export const Card: React.FC<CardProps> = ({ children }) => {
   return <div className='bg-green-400 rounded-md h-32 sm:h-full w-full'>{children}</div>;
};
