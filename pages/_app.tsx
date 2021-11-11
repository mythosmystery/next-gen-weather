import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';
import { AppContextProvider } from '../components/AppContext';

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
   return (
      <QueryClientProvider client={queryClient}>
         <AppContextProvider>
            <Component {...pageProps} />
         </AppContextProvider>
      </QueryClientProvider>
   );
}
