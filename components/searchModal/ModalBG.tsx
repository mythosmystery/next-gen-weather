import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { AppContext } from '../AppContext';
import { CityListItem } from '../CityListItem';
import { SearchArea } from '../sidebar/SearchArea';

interface ModalBGProps {
   show: boolean;
   handleClose: () => void;
}

export const ModalBG: React.FC<ModalBGProps> = ({ show, handleClose }) => {
   const { savedCityList } = useContext(AppContext);

   if (!show) {
      return null;
   }

   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         className={'fixed top-0 left-0 z-50 bg-gray-700/60 backdrop-blur-lg w-full h-full '}
      >
         <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='flex'>
               <div className='flex justify-center h-16 items-center text-gray-600 dark:text-black mx-4'>
                  <FaSearch size='32' />
               </div>
               <SearchArea onBlur={() => setTimeout(() => handleClose(), 200)} onSubmitCallback={handleClose} />
            </div>
            <div className='mt-8 mb-4 w-7/12 scrollbar-hide overflow-y-scroll overflow-x-hidden'>
               <AnimatePresence>
                  {savedCityList.map((city, i) => {
                     return <CityListItem key={i * 123} i={i} city={city} />;
                  })}
               </AnimatePresence>
            </div>
         </div>
      </motion.div>
   );
};
