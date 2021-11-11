import Head from 'next/head';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { AppContext } from '../components/AppContext';
import { Dashboard } from '../components/dashboard/Dashboard';
import { Sidebar } from '../components/sidebar/Sidebar';
import { getCurrentWeather } from '../utils/api';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Loading } from '../components/Loading';
import { getStoredCity } from '../utils/localStorage';

export default function Home() {
   const { city, dark, toggleDark, setCity, saveCity } = useContext(AppContext);
   const { data, error, isFetching } = useQuery(['cities', city], () => getCurrentWeather(city));

   if (error) {
      return (
         <>
            <h1 className='absolute z-20 text-6xl text-gray-500 text-center w-full my-24'>
               An error has occured! Oopies!
            </h1>
            <div className='absolute z-0 w-screen h-screen top-0 lef-0 bg-gray-800'></div>
            {setTimeout(() => {
               setCity(getStoredCity() || 'dallas');
            }, 2000)}
         </>
      );
   }
   if (isFetching) {
      return <Loading />;
   }
   if (data) {
      saveCity(city);
   }
   return (
      <div className={dark ? 'dark' : ''}>
         <Head>
            <title>Weather Dashboard</title>
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <div className='fixed z-50 top-1 left-1'>
            <motion.button
               initial={{ opacity: 0, rotate: 0 }}
               animate={{ opacity: 1 }}
               whileHover={{ scale: 1.2 }}
               whileTap={{ scale: 1.5, rotate: 90 }}>
               <button
                  onClick={() => toggleDark()}
                  className='bg-blue-400 shadow-lg text-gray-900 dark:bg-green-500 p-2 m-1 rounded-full'>
                  {dark ? <FaSun size='24' /> : <FaMoon size='24' />}
               </button>
            </motion.button>
         </div>
         <div className='absolute z-30 overflow-y-scroll overscroll-x-contain grid grid-cols-1 lg:grid-cols-4 grid-flow-row h-screen w-full p-4 gap-4'>
            <Sidebar />
            <Dashboard coord={data.coord} />
         </div>
         <div className='absolute z-0 w-screen h-screen top-0 lef-0 dark:bg-gray-800'></div>
      </div>
   );
}
