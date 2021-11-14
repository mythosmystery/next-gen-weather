import React, { FormEventHandler, useContext, useEffect, useRef, useState } from 'react';
import { addCity } from '../../utils/localStorage';
import { AppContext } from '../AppContext';

interface SearchAreaProps {
   onBlur?: () => void;
   onSubmitCallback?: () => void;
}

export const SearchArea: React.FC<SearchAreaProps> = ({ onBlur, onSubmitCallback }) => {
   const [searchText, setSearchText] = useState('');
   const { setCity, setSavedCityList } = useContext(AppContext);
   const inputRef = useRef(null as any);

   useEffect(() => {
      inputRef.current.focus();
   }, []);

   const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
      event.preventDefault();
      setCity(searchText);
      setSavedCityList(addCity(searchText));
      setSearchText('');
      onSubmitCallback ? onSubmitCallback() : null;
   };
   const handleChange = ({ target }: any) => {
      setSearchText(target.value);
   };
   return (
      <form onSubmit={handleSubmit}>
         <input
            ref={inputRef}
            onBlur={onBlur}
            value={searchText}
            onChange={handleChange}
            placeholder='Search for a city!'
            className='bg-transparent resize-none outline-none w-full p-2 border-b-2 dark:border-gray-600 dark:text-gray-300 text-lg'
         />
      </form>
   );
};
