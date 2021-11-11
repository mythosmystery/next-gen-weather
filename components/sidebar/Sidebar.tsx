import React, { useContext } from 'react';
import { SearchArea } from './SearchArea';
import { FaSearch } from 'react-icons/fa';
import { AppContext } from '../AppContext';
import { AnimatePresence, motion } from 'framer-motion';
import { RemoveButton } from './RemoveButton';

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = ({}) => {
   const { savedCityList, saveCity } = useContext(AppContext);
   return (
      <div className='dark:bg-gray-700 bg-gray-200 h-full hidden lg:block shadow-lg z-30'>
         <div className='flex justify-center mt-3 mb-1.5 dark:text-gray-500 w-full'>
            <FaSearch size='20' />
         </div>
         <SearchArea />
         <AnimatePresence>
            {savedCityList.map((city, i) => {
               return (
                  <motion.div
                     key={city}
                     initial={{ x: -500 }}
                     animate={{ x: 0 }}
                     exit={{ x: -400 }}
                     transition={{ duration: 0.15, delay: i * 0.03 }}
                     whileTap={{ scale: 1.1, borderRadius: 5 }}
                     className='flex flex-row justify-evenly text-xl px-4 py-2 border-b dark:border-gray-600 dark:text-gray-300 capitalize hover:bg-gray-500 hover:cursor-pointer hover:text-gray-200'>
                     <div className='flex-grow' onClick={() => saveCity(city)}>
                        {city}
                     </div>
                     <RemoveButton city={city} />
                  </motion.div>
               );
            })}
         </AnimatePresence>
      </div>
   );
};
