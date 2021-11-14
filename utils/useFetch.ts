import { useMemo, useState } from 'react';

type FetchState<Type> = {
   data: Type | null;
   loading: boolean;
   error: null | boolean;
};

export const useFetch = <Type>(url: string): FetchState<Type> => {
   const [state, setState] = useState({ data: null, loading: true, error: null } as FetchState<Type>);
   useMemo(() => {
      setState((state: FetchState<Type>) => ({ data: state.data, loading: true, error: null }));
      fetch(url)
         .then(x => x.json())
         .then((y: Type) => {
            setState({ data: y, loading: false, error: false });
         })
         .catch(err => {
            console.error(err);
            setState({ data: null, loading: false, error: true });
         });
   }, [url]);

   return state;
};
