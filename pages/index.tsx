import Head from 'next/head';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { AppContext } from '../components/AppContext';
import { CurrentWeather } from '../components/dashboard/CurrentWeather';
import { Dashboard } from '../components/dashboard/Dashboard';
import Forecast from '../components/forecast/Forecast';
import { Sidebar } from '../components/sidebar/Sidebar';
import { getCurrentWeather } from '../utils/api';

export default function Home() {
   const { city } = useContext(AppContext);
   const { data, error, isFetching } = useQuery(['cities', city], () => getCurrentWeather(city));

   if (error) {
      return <h1>error:</h1>;
   }
   if (isFetching) {
      return <h1>loading...</h1>;
   }
   console.log(data);
   return (
      <>
         <Head>
            <title>Weather Dashboard</title>
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <div className='absolute z-30 overflow-y-scroll overscroll-x-contain grid grid-cols-1 lg:grid-cols-4 grid-flow-row h-screen w-full p-3 gap-4'>
            <Sidebar></Sidebar>
            <Dashboard>
               <CurrentWeather />
               <Forecast>
                  <Forecast.Card></Forecast.Card>
                  <Forecast.Card></Forecast.Card>
                  <Forecast.Card></Forecast.Card>
                  <Forecast.Card></Forecast.Card>
                  <Forecast.Card></Forecast.Card>
               </Forecast>
            </Dashboard>
         </div>
         <div className='absolute z-0 w-screen h-screen top-0 lef-0 bg-gray-800'></div>
      </>
   );
}
