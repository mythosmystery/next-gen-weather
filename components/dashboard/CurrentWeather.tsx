import React, { useContext } from 'react';
import { CurrentWeatherType } from '../../utils/types';
import { AppContext } from '../AppContext';
import moment from 'moment-timezone';
import { iconURL } from '../../utils/api';

interface CurrentWeatherProps {
   current: CurrentWeatherType;
   timezone: string;
}

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({ current, timezone }) => {
   const { city } = useContext(AppContext);
   return (
      <div className=' dark:bg-gray-700 bg-gray-200 p-3 dark:text-gray-300 shadow-md'>
         <h1 className='text-xl capitalize text-blue-500 dark:text-green-400 text-center border-b border-gray-600 pb-2'>
            The Weather Today In {city}
         </h1>
         <div className='flex flex-col sm:flex-row gap-3 w-full p-2'>
            <div className='flex flex-grow flex-col gap-4'>
               <div>Temperature: {Math.round(current?.temp)}&deg;</div>
               <div>Feels like: {Math.round(current?.feels_like)}&deg;</div>
               <div>Humidity: {current?.humidity}%</div>
               <div>Wind Speed: {current?.wind_speed.toFixed(1)} Mph</div>
            </div>
            <div className='flex flex-col flex-grow gap-4'>
               <div>Sunrise: {moment.unix(current.sunrise).tz(timezone).format('h:mm a')}</div>
               <div>Sunset: {moment.unix(current.sunset).format('h:mm a')}</div>
               <div>UVI: {current.uvi}</div>
               <div>Air Pressure: {current.pressure}</div>
            </div>
            <div className='flex-grow flex flex-col gap-4'>
               <img src={iconURL + current.weather[0].icon + '.png'} className='absolute top-2 right-10 h-16 w-16' />
               <div>Dew Point: {current.dew_point}</div>
               <div className='capitalize'>{current.weather[0].description}</div>
               <div>Wind gusts: {current.wind_gust} Mph</div>
            </div>
         </div>
      </div>
   );
};
