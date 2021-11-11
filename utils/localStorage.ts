export const SAVED_CITIES = 'saved_cities';
export const CITY = 'city';
export const DARK_MODE = 'dark_mode';

export const getStoredCity = (): string => {
   return localStorage.getItem(CITY) ? JSON.parse(localStorage.getItem(CITY) as string) : '';
};
export const setStoredCity = (city: string) => {
   localStorage.setItem(CITY, JSON.stringify(city));
};

export const getStoredTheme = (): boolean => {
   return localStorage.getItem(DARK_MODE) ? JSON.parse(localStorage.getItem(DARK_MODE) as string) : false;
};
export const setStoredTheme = (isDark: boolean) => {
   localStorage.setItem(DARK_MODE, JSON.stringify(isDark));
};

export const getSavedCities = (): string[] => {
   const savedCities = localStorage.getItem(SAVED_CITIES)
      ? JSON.parse(localStorage.getItem(SAVED_CITIES) as string)
      : [];

   return savedCities;
};

export const saveCities = (cityArr: string[]) => {
   if (cityArr.length) {
      localStorage.setItem(SAVED_CITIES, JSON.stringify(cityArr));
   } else {
      localStorage.removeItem(SAVED_CITIES);
   }
};
export const addCity = (cityName: string) => {
   const savedCities = getSavedCities();
   let invalid = false;
   if (savedCities.length) {
      savedCities.forEach(city => {
         if (city === cityName) invalid = true;
      });
   }

   if (!invalid) {
      savedCities.push(cityName);
      saveCities(savedCities);
   }
   return savedCities;
};
export const removeCity = (cityName: string) => {
   const savedCities = getSavedCities();
   if (savedCities.length) {
      const index = savedCities.indexOf(cityName);
      savedCities.splice(index, 1);
      saveCities(savedCities);
   }
   return savedCities;
};
