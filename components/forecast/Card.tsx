import React from 'react';
import { iconURL } from '../../utils/api';
import { DailyWeatherType } from '../../utils/types';
import moment from 'moment-timezone';
import { motion } from 'framer-motion';

interface CardProps {
   weatherToday: DailyWeatherType;
   timezone: string;
}

export const Card: React.FC<CardProps> = ({ weatherToday, timezone }) => {
   return (
      <div className='dark:bg-green-400 bg-blue-400 rounded-md sm:h-full w-full shadow-md pb-3'>
         <motion.img
            whileHover={{ x: 20 }}
            whileTap={{ rotate: 90 }}
            src={iconURL + weatherToday.weather[0].icon + '.png'}
         />
         <div className='flex flex-row sm:flex-col pb-1 justify-evenly'>
            <div className='text-center'>
               <div className=''>High: {Math.round(weatherToday.temp.max)}&deg;</div>
               <div className=''>Low: {Math.round(weatherToday.temp.min)}&deg;</div>
               <div className='md:text-sm'>Wind: {weatherToday.wind_speed.toFixed(1)} Mph</div>
            </div>
            <div className='text-center'>
               <div className='md:text-sm capitalize'>{weatherToday.weather[0].description}</div>
               <div className='md:text-sm'>
                  Sunrise: {moment.unix(weatherToday.sunrise).tz(timezone).format('h:mm a')}
               </div>
               <div className='md:text-sm'>
                  Sunset: {moment.unix(weatherToday.sunset).tz(timezone).format('h:mm a')}
               </div>
            </div>
         </div>
      </div>
   );
};
