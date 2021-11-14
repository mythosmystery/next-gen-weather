import React, { useContext, useMemo } from 'react';
import { getCurrentWeatherUrl } from '../utils/api';
import { CoordQueryData } from '../utils/types';
import { useFetch } from '../utils/useFetch';
import { AppContext } from './AppContext';
import { Dashboard } from './dashboard/Dashboard';
import { Loading } from './Loading';

interface CityQueryWrapperProps {}

export const CityQueryWrapper: React.FC<CityQueryWrapperProps> = ({}) => {
   const { city } = useContext(AppContext);
   const url = useMemo(() => getCurrentWeatherUrl(city), [city]);
   const { data } = useFetch<CoordQueryData>(url);
   console.log(data);
   if (data?.coord) {
      return <Dashboard coord={data?.coord} />;
   }
   return <Loading />;
};
