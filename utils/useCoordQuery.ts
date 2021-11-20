import useSWR from 'swr';
import { getCurrentWeatherUrl } from './api';
import { CoordQueryData } from './types';

export const useCoord = (city: string) => {
   const { data, error } = useSWR<CoordQueryData>(getCurrentWeatherUrl(city));
   return {
      data,
      loading: !error && !data,
      error
   };
};
