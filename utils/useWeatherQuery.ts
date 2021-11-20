import useSWR from 'swr';
import { getForecastUrl } from './api';
import { ForecastType } from './types';

interface Coord {
   lat: number;
   lon: number;
}

export const useWeather = (coord: Coord | null) => {
   const { data, error } = useSWR<ForecastType>(coord ? getForecastUrl(coord) : null);
   return { data, error, loading: !data && !error };
};
