import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import { AppContextProvider } from '../components/AppContext';
import { SWRConfig } from 'swr';
import axios from 'axios';
import Head from 'next/head';

const __basepath__ = '/next-gen-weather';

export default function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <Head>
            <meta charSet='utf-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta
               name='viewport'
               content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
            />
            <meta name='description' content='Description' />
            <meta name='keywords' content='Keywords' />
            <title>Next Gen Weather</title>

            <link rel='manifest' href={__basepath__ + '/manifest.json'} />
            <link href={__basepath__ + '/icons/favicon-16x16.png'} rel='icon' type='image/png' sizes='16x16' />
            <link href={__basepath__ + '/icons/favicon-32x32.png'} rel='icon' type='image/png' sizes='32x32' />
            <link rel='apple-touch-icon' href={__basepath__ + '/apple-icon.png'}></link>
            <meta name='theme-color' content='#317EFB' />
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
