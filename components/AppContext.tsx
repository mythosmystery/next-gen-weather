import moment from 'moment';
import { createContext, FC, useEffect, useState } from 'react';
import { getSavedCities, getStoredCity, getStoredTheme, setStoredCity, setStoredTheme } from '../utils/localStorage';

export type AppContextType = {
   dark: boolean;
   toggleDark: () => void;

   city: string;
   setCity: (city: string) => void;
   saveCity: (city: string) => void;

   savedCityList: string[];
   setSavedCityList: (cityList: string[]) => void;

   currentDate: string;
};
const defaultContext = {
   dark: false,
   toggleDark: () => {},
   city: '',
   saveCity: () => {},
   setCity: () => {},
   savedCityList: [],
   setSavedCityList: () => {},
   currentDate: ''
};

export const AppContext = createContext<AppContextType>(defaultContext);

export const AppContextProvider: FC = ({ children }) => {
   const currentDate = moment().format('MM/DD/YYYY');

   const [dark, setDark] = useState(false);
   const [city, setCity] = useState('');
   const [savedCityList, setSavedCityList] = useState([] as string[]);

   useEffect(() => {
      setSavedCityList(getSavedCities());
      setCity(getStoredCity() ? getStoredCity() : 'New York');
      setDark(getStoredTheme());
   }, []);

   const toggleDark = () => {
      setDark(!dark);
      setStoredTheme(!dark);
   };
   const saveCity = (city: string) => {
      setStoredCity(city);
      setCity(city);
   };

   return (
      <AppContext.Provider
         value={{ dark, toggleDark, city, saveCity, setCity, savedCityList, setSavedCityList, currentDate }}>
         {children}
      </AppContext.Provider>
   );
};
