import React, { FormEventHandler, useContext, useState } from 'react';
import { addCity } from '../../utils/localStorage';
import { AppContext } from '../AppContext';

interface SearchAreaProps {}

export const SearchArea: React.FC<SearchAreaProps> = ({}) => {
   const [searchText, setSearchText] = useState('');
   const { setCity, setSavedCityList } = useContext(AppContext);

   const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
      event.preventDefault();
      setCity(searchText);
      setSavedCityList(addCity(searchText));
   };
   const handleChange = ({ target }: any) => {
      setSearchText(target.value);
   };
   return (
      <form onSubmit={handleSubmit} onChange={handleChange}>
         <input
            placeholder='Search for a city!'
            className='bg-transparent resize-none outline-none w-full p-2 border-b-2 dark:border-gray-600 dark:text-gray-300 text-lg'
         />
      </form>
   );
};
