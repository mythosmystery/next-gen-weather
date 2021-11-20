import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import { AppContextProvider } from '../components/AppContext';
import { SWRConfig } from 'swr';
import axios from 'axios';

export default function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
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
