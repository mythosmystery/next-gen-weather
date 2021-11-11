import React, { useContext } from 'react';
import { SearchArea } from './SearchArea';
import { FaSearch } from 'react-icons/fa';
import { AppContext } from '../AppContext';
import { motion } from 'framer-motion';

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = ({}) => {
   const { savedCityList, saveCity } = useContext(AppContext);
   return (
      <div className='dark:bg-gray-700 bg-gray-200 h-full hidden lg:block shadow-lg'>
         <div className='flex justify-center mt-3 mb-1.5 dark:text-gray-500 w-full'>
            <FaSearch size='20' />
         </div>
         <SearchArea />
         {savedCityList.map(city => {
            return (
               <motion.div
                  key={city}
                  onClick={() => saveCity(city)}
                  whileTap={{ scale: 1.1, borderRadius: 5 }}
                  className='text-xl text-center py-2 border-b dark:border-gray-600 dark:text-gray-300 capitalize hover:bg-gray-500 hover:cursor-pointer hover:text-gray-200'>
                  {city}
               </motion.div>
            );
         })}
      </div>
   );
};
