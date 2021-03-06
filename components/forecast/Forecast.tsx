import React from 'react';
import { Card } from './Card';

interface ForecastProps {}

const Forecast: React.FC<ForecastProps> = ({ children }) => {
   return <div className='w-full row-span-3 grid sm:grid-cols-5 grid-cols-1 grid-flow-row gap-3'>{children}</div>;
};
export default Object.assign(Forecast, { Card });
