import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { getCurrentWeather } from '../utils/api';
import { AppContext } from './AppContext';
import { Dashboard } from './dashboard/Dashboard';
import { Loading } from './Loading';

interface CityQueryWrapperProps {}

export const CityQueryWrapper: React.FC<CityQueryWrapperProps> = ({}) => {
   const { city } = useContext(AppContext);
   const { data, error, isFetching } = useQuery(['cities', city], () => getCurrentWeather(city));
   if (error || isFetching) {
      return <Loading />;
   }
   return <Dashboard coord={data.coord} />;
};
