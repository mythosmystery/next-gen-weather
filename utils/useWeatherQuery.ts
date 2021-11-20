import useSWR from 'swr';
import { getForecastUrl } from './api';
import { ForecastType } from './types';

interface Coord {
   lat: number;
   lon: number;
}

export const useWeather = (coord: Coord) => {
   const { data, error } = useSWR<ForecastType>(getForecastUrl(coord));
   return { data, error, loading: !data && !error };
};
