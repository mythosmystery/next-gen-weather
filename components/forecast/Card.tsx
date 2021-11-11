import React from 'react';
import { iconURL } from '../../utils/api';
import { DailyWeatherType } from '../../utils/types';
import moment from 'moment';
import { motion } from 'framer-motion';

interface CardProps {
   weatherToday: DailyWeatherType;
}

export const Card: React.FC<CardProps> = ({ weatherToday }) => {
   return (
      <div className='dark:bg-green-400 bg-blue-400 rounded-md h-32 sm:h-full w-full shadow-md'>
         <motion.img
            whileHover={{ x: 20 }}
            whileTap={{ rotate: 90 }}
            src={iconURL + weatherToday.weather[0].icon + '.png'}
         />
         <div className='px-2.5 flex flex-row md:flex-col py-1 justify-evenly'>
            <div className=''>
               <div className=''>Temp: {weatherToday.temp.day}&deg;</div>
               <div className='italic md:text-sm'>Feels like: {weatherToday.feels_like.day}</div>
               <div className='md:text-sm'>Wind: {weatherToday.wind_speed} Mph</div>
            </div>
            <div className=''>
               <div className='md:text-sm capitalize'>{weatherToday.weather[0].description}</div>
               <div className='md:text-sm'>Sunrise: {moment.unix(weatherToday.sunrise).format('hh:mm a')}</div>
               <div className='md:text-sm'>Sunset: {moment.unix(weatherToday.sunset).format('hh:mm a')}</div>
            </div>
         </div>
      </div>
   );
};
