
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { DocumentNode, useLazyQuery } from '@apollo/client';
import { SEARCH_CHARACTERS } from '../graphql/queries';
import { responseSearch } from "../@types/all";

import { RootContext } from '../context/rootContext';
import { RootContextType, } from '../@types/all';


import Dropdown from "../components/Dropdown";
import ListCharacters from "../components/ListCharacters";

export default function Root() {
  const [searchCharacters, { loading, data }] = useLazyQuery<{ searchResults: responseSearch }>(
    SEARCH_CHARACTERS as DocumentNode
  );
  
  const { specie, listCharacters, updateCharacters, search, updateSearch , addStarred} = React.useContext(RootContext) as RootContextType;

  const handleSearch = () => {
    searchCharacters({
      variables: { searchTerm: search, specie },
    });
  };

  useEffect(() => {
    if(!loading && data){
      updateCharacters(data.searchResults.results)
    }
  }, [loading])

    return (
      <>
        <div className="grid grid-cols-4 gap-0 h-screen">
          <div className="bg-slate-50 p-4 overflow-scroll">
            <h1 className="text-2xl font-medium py-4">Rick and Morty list</h1>
            <div>
              <div className="relative flex rounded-lg mb-5">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => updateSearch(e.target.value)}
                  onBlur={handleSearch}
                  className="ps-11  w-full border-none rounded-s-lg text-sm bg-slate-100"
                  placeholder="Input search"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                  <svg
                    className="flex-shrink-0 size-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <Dropdown />
              </div>
            </div>

            {loading && <p>Loading...</p>}

            {listCharacters.filter((item) => item.starred).length > 0 && (
              <h2>
                Starred characters (
                {listCharacters.filter((item) => item.starred).length})
              </h2>
            )}
            {listCharacters && (
              <nav>
                <ul className="flex flex-col gap-5">
                  {listCharacters
                    .filter((item) => item.starred)
                    .map((result) => (
                      <ListCharacters result={result} addStarred={addStarred} />
                    ))}
                </ul>
              </nav>
            )}

            <h2>
              Characters ({listCharacters.filter((item) => !item.starred).length})
            </h2>

            {listCharacters && (
              <nav>
                <ul className="flex flex-col gap-5">
                  {listCharacters
                    .filter((item) => !item.starred)
                    .map((result) => (
                      <ListCharacters result={result} addStarred={addStarred} />
                    ))}
                </ul>
              </nav>
            )}
          </div>
          <div className="col-span-3 bg-white p-4">
            <Outlet />
          </div>
        </div>
      </>
    );
  }
  