import React, { useContext } from 'react';
import { SearchArea } from './SearchArea';
import { FaSearch } from 'react-icons/fa';
import { AppContext } from '../AppContext';
import { AnimatePresence, motion } from 'framer-motion';
import { CityListItem } from '../CityListItem';

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = ({}) => {
   const { savedCityList } = useContext(AppContext);
   return (
      <motion.div
         initial={{ x: -500 }}
         animate={{ x: 0 }}
         exit={{ x: -500 }}
         className='dark:bg-gray-700 bg-gray-200 h-full hidden lg:block shadow-lg z-30'
      >
         <div className='flex justify-center mt-3 mb-1.5 dark:text-gray-500 w-full'>
            <FaSearch size='20' />
         </div>
         <SearchArea />
         <AnimatePresence>
            <div className='h-screen overflow-y-scroll overflow-x-hidden scrollbar-hide'>
               {savedCityList.map((city, i) => {
                  return <CityListItem key={i * 13} i={i} city={city} />;
               })}
            </div>
         </AnimatePresence>
      </motion.div>
   );
};
