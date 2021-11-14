import { motion } from 'framer-motion';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { SearchArea } from '../sidebar/SearchArea';

interface ModalBGProps {
   show: boolean;
   handleClose: () => void;
}

export const ModalBG: React.FC<ModalBGProps> = ({ show, handleClose }) => {
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
         <div className='flex justify-center items-center w-full h-full'>
            <div className='flex justify-center h-16 items-center text-gray-600 dark:text-black mx-4'>
               <FaSearch size='32' />
            </div>
            <SearchArea onBlur={handleClose} onSubmitCallback={handleClose} />
         </div>
      </motion.div>
   );
};
