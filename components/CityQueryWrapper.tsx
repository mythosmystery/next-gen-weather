import React, { useContext } from 'react';
import { getStoredCity } from '../utils/localStorage';
import { AppContext } from './AppContext';
import { Dashboard } from './dashboard/Dashboard';
import { Loading } from './Loading';
import { useCoord } from '../utils/useCoordQuery';

interface CityQueryWrapperProps {}

export const CityQueryWrapper: React.FC<CityQueryWrapperProps> = ({}) => {
   const { city, setCity } = useContext(AppContext);
   const { data } = useCoord(city);
   console.log(data);
   if (data?.coord) {
      return <Dashboard coord={data?.coord} />;
   }
   if (data?.cod == 404) {
      setTimeout(() => {
         setCity(getStoredCity() ? getStoredCity() : 'New York');
      }, 1000);
      return (
         <>
            <h1 className='absolute z-20 text-6xl text-gray-500 text-center w-full my-24 cursor-wait'>
               Error: {data?.message}
            </h1>
            <div className='absolute z-0 top-0 lef-0 w-screen h-screen bg-gray-800 cursor-wait'></div>
         </>
      );
   }
   return <Loading />;
};
