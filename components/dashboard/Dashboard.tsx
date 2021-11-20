import { AnimateSharedLayout, motion } from 'framer-motion';
import React, { useContext } from 'react';
import { getStoredCity } from '../../utils/localStorage';
import { CurrentWeatherType } from '../../utils/types';
import { useCoord } from '../../utils/useCoordQuery';
import { useWeather } from '../../utils/useWeatherQuery';
import { AppContext } from '../AppContext';
import Forecast from '../forecast/Forecast';
import { Loading } from '../Loading';
import { CurrentWeather } from './CurrentWeather';

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
   const { city, setCity } = useContext(AppContext);
   const { data: coordData, error } = useCoord(city);
   const { data, loading } = useWeather(coordData?.coord ? coordData.coord : null);

   if (error) {
      setTimeout(() => {
         setCity(getStoredCity() ? getStoredCity() : 'New York');
      }, 1000);
      return (
         <>
            <h1 className='absolute z-20 text-6xl text-gray-500 text-center w-full my-24 cursor-wait'>
               Error <p className='text-3xl'>{error.message}</p>
            </h1>
            <div className='absolute z-0 top-0 lef-0 w-screen h-screen bg-gray-800 cursor-wait'></div>
         </>
      );
   }
   if (loading) {
      return <Loading />;
   }
   console.log(data);
   return (
      <AnimateSharedLayout>
         <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            className='lg:col-span-3 h-full flex flex-col gap-4'
         >
            <CurrentWeather current={data?.current as CurrentWeatherType} timezone={data?.timezone as string} />
            <Forecast>
               {data?.daily.map((obj, i) => {
                  return (
                     <motion.div
                        key={obj.dt}
                        layout
                        initial={{ opacity: 0, translateY: 500 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.05, type: 'spring', stiffness: 700, damping: 30 }}
                        whileHover={{ scale: 1.05 }}
                     >
                        <Forecast.Card timezone={data?.timezone as string} weatherToday={obj}></Forecast.Card>
                     </motion.div>
                  );
               })}
            </Forecast>
         </motion.div>
      </AnimateSharedLayout>
   );
};
