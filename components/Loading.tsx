// import { motion } from 'framer-motion';
import React from 'react';

interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = ({}) => {
   return (
      <>
         <h1 className='absolute z-20 text-6xl text-gray-500 text-center w-full my-24'>loading...</h1>
         <div className='absolute z-0 w-screen h-screen top-0 lef-0 bg-gray-800'></div>
         {/* <motion.div className='absolute top-1/4 left-1/3 z-50 bg-green-400 h-64 w-64 rounded-full'></motion.div> */}
      </>
   );
};
