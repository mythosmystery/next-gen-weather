import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import { AppContextProvider } from '../components/AppContext';
import { SWRConfig } from 'swr';
import axios from 'axios';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <Head>
            <title>Weather Dashboard</title>
            <link rel='icon' href='/favicon.ico' />
            <link rel='manifest' href='/manifest.json' />
         </Head>
         <SWRConfig
            value={{
               fetcher: (url: string) => axios.get(url).then(res => res.data),
               revalidateIfStale: false,
               dedupingInterval: 1000 * 60 * 5,
               refreshWhenHidden: false
            }}
         >
            <AppContextProvider>
               <Component {...pageProps} />
            </AppContextProvider>
         </SWRConfig>
      </>
   );
}
