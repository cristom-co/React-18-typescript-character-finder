
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
  
  const { specie, listCharacters, updateCharacters, search, updateSearch , addStarred, listCharactersFilter} = React.useContext(RootContext) as RootContextType;

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
        <div className="grid grid-cols-4 lg:grid-cols-4 gap-0 h-screen">
          <div className="bg-slate-50 p-4 overflow-scroll bg-gray-100">
            <h1 className="text-xl font-medium py-6 px-2">
              Rick and Morty list
            </h1>
            <div className="relative flex">
              <input
                type="text"
                value={search}
                onChange={(e) => updateSearch(e.target.value)}
                onBlur={handleSearch}
                className="ps-11  w-full border-none rounded-s-lg text-sm bg-gray-200 text-gray-600 focus:outline-none focus:border-gray-500 focus:ring-0 "
                placeholder="Search or filter results"
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                <svg
                  className="flex-shrink-0 size-5 text-gray-600"
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

            {/* starred list */}
            {listCharacters.filter((item) => item.starred).length > 0 && (
              <h2 className="text-sm pb-6 pt-5 px-4 text-gray-600">
                STARRED CHARACTERS (
                {listCharacters.filter((item) => item.starred).length})
              </h2>
            )}
            {listCharacters && (
              <nav className="pb-7">
                <ul className="flex flex-col">
                  {listCharacters
                    .filter((item) => item.starred)
                    .map((result) => (
                      <ListCharacters result={result} addStarred={addStarred} />
                    ))}
                </ul>
              </nav>
            )}

            {/* characters filter */}
            {listCharactersFilter.length > 0 && (
              <>
                <div className="flex flex-row justify-between px-4 pb-2">
                  <span className="text-blue-900">
                    {listCharactersFilter.length + listCharacters.length}{" "}
                    Results
                  </span>
                  <span className="bg-secondary600 bg-opacity-50 px-2 rounded-3xl text-sm text-gray-600">
                    {listCharactersFilter.length} Filter
                  </span>
                </div>
                <nav>
                  <ul className="flex flex-col pb-6">
                    {listCharactersFilter.map((result) => (
                      <ListCharacters result={result} addStarred={addStarred} />
                    ))}
                  </ul>
                </nav>
              </>
            )}

            {listCharacters.length > 0 && (
              <div className="flex flex-row justify-between pr-5">
                <h2 className="text-sm pb-6 pt-0 px-4 text-gray-600">
                  CHARACTERS (
                  {listCharacters.filter((item) => !item.starred).length})
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                  />
                </svg>
              </div>
            )}

            {listCharacters && (
              <nav>
                <ul className="flex flex-col gap-2">
                  {listCharacters
                    .filter((item) => !item.starred)
                    .map((result) => (
                      <ListCharacters result={result} addStarred={addStarred} />
                    ))}
                </ul>
              </nav>
            )}
          </div>
          <div className="col-span-3 lg:col-span-3 bg-white p-4">
            <Outlet />
          </div>
        </div>
      </>
    );
  }
  