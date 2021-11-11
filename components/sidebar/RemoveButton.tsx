import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { removeCity } from '../../utils/localStorage';
import { motion } from 'framer-motion';
import { AppContext } from '../AppContext';

interface RemoveButtonProps {
   city: string;
}

export const RemoveButton: React.FC<RemoveButtonProps> = ({ city }) => {
   const { setSavedCityList } = useContext(AppContext);
   return (
      <motion.button
         whileHover={{ scale: 1.1, rotate: 10 }}
         whileTap={{ scale: 1.4, rotate: 60 }}
         onClick={() => setSavedCityList(removeCity(city))}
         className='text-red-600 text-center hover:text-yellow-600'>
         <FaTrash size='20' />
      </motion.button>
   );
};
