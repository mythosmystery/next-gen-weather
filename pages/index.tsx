import Head from 'next/head';
import { useContext, useState } from 'react';
import { AppContext } from '../components/AppContext';
import { Sidebar } from '../components/sidebar/Sidebar';
import { FaSun, FaMoon, FaSearch } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { ModalBG } from '../components/searchModal/ModalBG';
import { Dashboard } from '../components/dashboard/Dashboard';

export default function Home() {
   const { dark, toggleDark } = useContext(AppContext);
   const [showModal, setShowModal] = useState(true);
   return (
      <div className={dark ? 'dark' : ''}>
         <Head>
            <title>Weather Dashboard</title>
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <div className='fixed z-50 top-1 left-1'>
            <motion.button
               initial={{ opacity: 0, rotate: 0, y: -100 }}
               animate={{ opacity: 1, y: 0 }}
               whileHover={{ scale: 1.2 }}
               whileTap={{ scale: 1.5, rotate: 90 }}
            >
               <button
                  onClick={() => toggleDark()}
                  className='bg-blue-400 shadow-lg text-gray-900 dark:bg-green-500 p-2 m-1 rounded-full'
               >
                  {dark ? <FaSun size='24' /> : <FaMoon size='24' />}
               </button>
            </motion.button>
         </div>
         <div className={'fixed z-50 top-1 right-1 lg:hidden'}>
            <motion.button
               initial={{ opacity: 0, rotate: 0, y: -100 }}
               animate={{ opacity: 1, y: 0 }}
               whileHover={{ scale: 1.2 }}
               whileTap={{ scale: 1.5, rotate: 90 }}
            >
               <button
                  onClick={() => setShowModal(true)}
                  className={'bg-blue-400 shadow-lg text-gray-900 dark:bg-green-500 p-2 m-1 rounded-full '}
               >
                  <FaSearch size='24' />
               </button>
            </motion.button>
         </div>
         <div className='absolute z-30 overflow-x-hidden grid grid-cols-1 lg:grid-cols-4 grid-flow-row max-h-full w-full p-4 gap-4'>
            <AnimatePresence>
               <Sidebar key={1} />
               <Dashboard key={2} />
               <ModalBG key={3} show={showModal} handleClose={() => setShowModal(false)} />
            </AnimatePresence>
         </div>
         <div className='absolute z-0 w-screen h-screen top-0 lef-0 dark:bg-gray-800'></div>
      </div>
   );
}
