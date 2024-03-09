
import React, {  } from "react";
import { Outlet, NavLink } from "react-router-dom";

import { DocumentNode, useLazyQuery } from '@apollo/client';
import { SEARCH_CHARACTERS } from '../graphql/queries';
import { responseSearch } from "../@types/all";

import { RootContext } from '../context/rootContext';
import { RootContextType, } from '../@types/all';


import Dropdown from "../components/Dropdown";

export default function Root() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchCharacters, { loading, data }] = useLazyQuery<{ searchResults: responseSearch }>(
    SEARCH_CHARACTERS as DocumentNode
  );
  
  const { specie } = React.useContext(RootContext) as RootContextType;

  const handleSearch = () => {
    searchCharacters({
      variables: { searchTerm, specie },
    });
  };

    return (
      <>
        <div className="grid grid-cols-4 gap-0 h-screen">
          <div className="bg-slate-50 p-4 overflow-scroll">
            <h1 className="text-2xl font-medium py-4">Rick and Morty list</h1>
            <div>
              <div className="relative flex rounded-lg mb-5">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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
                <Dropdown/>
                
              </div>
            </div>

            {loading && <p>Loading...</p>}

            {/* list favorites */}

            {/* list others */}
            {data && data.searchResults.results && (
              <nav>
                <ul className="flex flex-col gap-5">
                  {data.searchResults.results.map((result) => (
                    <li key={result.id} className=" flex border-b-2 pb-3">
                      <div className="grow">
                        <NavLink to={`character/${result.id}`}>
                          <div className="flex flex-row gap-4">
                            <img
                              className=" grow-0 rounded-full self-center"
                              src={result.image}
                              alt={result.name}
                              style={{ width: "40px", height: "40px" }}
                            />
                            <div className=" grow flex flex-col">
                              <span className="font-medium">
                                {result.name.length > 16
                                  ? result.name.substring(0, 15) + "..."
                                  : result.name}
                              </span>
                              <span className="font-extralight">
                                {result.species}
                              </span>
                            </div>
                          </div>
                        </NavLink>
                      </div>
                      <button className="grow-0 rounded-full p-3 bg-white">
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
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                          />
                        </svg>
                      </button>
                    </li>
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
  