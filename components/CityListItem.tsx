import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { RemoveButton } from './sidebar/RemoveButton';

interface CityListItemProps {
   city: string;
   i: number;
}

export const CityListItem: React.FC<CityListItemProps> = ({ city, i }) => {
   const { saveCity } = useContext(AppContext);
   return (
      <motion.div
         key={city}
         initial={{ x: -500 }}
         animate={{ x: 0 }}
         exit={{ x: -400 }}
         transition={{ duration: 0.15, delay: i * 0.03 }}
         whileTap={{ scale: 1.1, borderRadius: 5 }}
         whileHover={{ scale: 1.02 }}
         className='flex flex-row justify-evenly text-xl px-4 border-b dark:border-gray-600 dark:text-gray-300 capitalize hover:bg-gray-500 hover:cursor-pointer hover:text-gray-200'
      >
         <div className='flex-grow py-3' onClick={() => saveCity(city)}>
            {city}
         </div>
         <RemoveButton city={city} />
      </motion.div>
   );
};
