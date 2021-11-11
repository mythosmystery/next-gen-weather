import { motion } from 'framer-motion';
import React from 'react';
import { useQuery } from 'react-query';
import { getForecast } from '../../utils/api';
import { CurrentWeatherType, ForecastType } from '../../utils/types';
import Forecast from '../forecast/Forecast';
import { Loading } from '../Loading';
import { CurrentWeather } from './CurrentWeather';

interface DashboardProps {
   coord: {
      lat: number;
      lon: number;
   };
}

export const Dashboard: React.FC<DashboardProps> = ({ coord }) => {
   const { data, error, isFetching } = useQuery<ForecastType>(['current', coord.lon], () => getForecast(coord));

   if (error) {
      return (
         <>
            <h1 className='absolute z-20 text-6xl text-gray-500 text-center w-full my-24 cursor-wait'>loading...</h1>
            <div className='absolute z-0 top-0 lef-0 w-screen h-screen bg-gray-800 cursor-wait'></div>
         </>
      );
   }
   if (isFetching) {
      return <Loading />;
   }
   console.log(data);
   return (
      <div className='lg:col-span-3 h-full flex flex-col gap-4'>
         <CurrentWeather current={data?.current as CurrentWeatherType} />
         <Forecast>
            {data?.daily.map((obj, i) => {
               return (
                  <motion.div
                     initial={{ opacity: 0, translateY: 500 }}
                     animate={{ opacity: 1, translateY: 0 }}
                     transition={{ duration: 0.25, delay: i * 0.05 }}
                     className='flex justify-center'>
                     <Forecast.Card key={obj.dt} weatherToday={obj}></Forecast.Card>
                  </motion.div>
               );
            })}
         </Forecast>
      </div>
   );
};
