import { useState, useContext } from 'react';

import { RootContext } from "../context/rootContext";
import { RootContextType, responseSearch } from "../@types/all";

import { SEARCH_CHARACTERS } from '../graphql/queries';
import { DocumentNode, useLazyQuery } from '@apollo/client';


const Dropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const { updateSpecie, specie } = useContext(RootContext) as RootContextType;

  const [searchCharacters, { loading, data }] = useLazyQuery<{ searchResults: responseSearch }>(
    SEARCH_CHARACTERS as DocumentNode
  );

  const clickFilter = () => {
    searchCharacters({
      variables: { searchTerm: "", specie },
    });
  }

    //TODO: SEND DATA TO CONTEXT
    console.log(loading,data)

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="py-2 px-3 text-sm rounded-e-md  border-transparent text-purple-500 bg-slate-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="absolute mt-2 right-0 w-80 p-4 bg-white border rounded-md shadow-lg">
            <div>
                <span>Character</span>
                <div className='flex flex-row justify-between px-4 py-2 gap-2' >
                    <button className='bg-slate-200 p-3 rounded-md w-1/3' onClick={() => null}>All</button>
                    <button className='bg-slate-200 p-3 rounded-md w-1/3' onClick={() => null}>Starred</button>
                    <button className='bg-slate-200 p-3 rounded-md w-1/3' onClick={() => null}>Others</button>
                </div>
            </div>
            <div>
                <span>Specie</span>
                <div className='flex flex-row justify-between px-4 py-2 gap-2'>
                    <button className='bg-slate-200 p-3 rounded-md w-1/3' onClick={() => updateSpecie("")}>All</button>
                    <button className='bg-slate-200 p-3 rounded-md w-1/3' onClick={() => updateSpecie("Human")}>Human</button>
                    <button className='bg-slate-200 p-3 rounded-md w-1/3' onClick={() => updateSpecie("Alien")}>Alien</button>
                </div>
            </div>
            <div className="div py-4">
                <button className='w-full rounded-md p-2 bg-slate-400' onClick={clickFilter}>Filter</button>
            </div>
            {/* {specie} */}
        </div>
      )}
    </div>
  );
};

export default Dropdown;