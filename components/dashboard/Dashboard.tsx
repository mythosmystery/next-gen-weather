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
      return <h1>error</h1>;
   }
   if (isFetching) {
      return <Loading />;
   }
   console.log(data);
   return (
      <div className='lg:col-span-3 h-full flex flex-col gap-4'>
         <CurrentWeather current={data?.current as CurrentWeatherType} />
         <Forecast>
            {data?.daily.map(obj => {
               return <Forecast.Card key={obj.dt} weatherToday={obj}></Forecast.Card>;
            })}
         </Forecast>
      </div>
   );
};
