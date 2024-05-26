import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";

//Apollo client
import { DocumentNode, useLazyQuery } from "@apollo/client";
import { SEARCH_CHARACTERS } from "../graphql/queries";

//types
import { responseSearch } from "../types/all";

//context
import { RootContext } from "../context/rootContext";
import { RootContextType } from "../types/all";

//components
import Dropdown from "../components/Dropdown";
import ListCharacters from "../components/ListCharacters";

//svg
import {SearchSvg, OrderSvg} from "../components/SvgIcons";

export default function Root() {
  const [searchCharacters, { loading, data }] = useLazyQuery<{
    searchResults: responseSearch;
  }>(SEARCH_CHARACTERS as DocumentNode);

  const {
    specie,
    listCharacters,
    updateCharacters,
    search,
    updateSearch,
    addStarred,
    listCharactersFilter,
    updateOrderCharacters,
  } = React.useContext(RootContext) as RootContextType;

  const handleSearch = (searchTerm: string) => {
    searchCharacters({
      variables: { searchTerm, specie },
    });
    updateSearch(searchTerm);
  };

  useEffect(() => {
    if (!loading && data) {
      updateCharacters(data.searchResults.results);
    }
  }, [loading]);

  const isDetailRoute = !!useParams().characterId;

  return (
    <>
      <div className="grid grid-cols-4 gap-0 h-screen">
        <div
          className={`" bg-slate-50 p-4 overflow-scroll bg-gray-100 "${
            isDetailRoute
              ? " sm:hidden md:block "
              : " sm:col-span-4 md:col-span-1 "
          }`}
        >
          <h1 className="text-xl font-medium py-6 px-2">Rick and Morty list</h1>
          <div className="relative flex">
            <input
              type="text"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="ps-11  w-full border-none rounded-s-lg text-sm bg-gray-200 text-gray-600 focus:outline-none focus:border-gray-500 focus:ring-0 "
              placeholder="Search or filter results"
            />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
              <SearchSvg />
            </div>
            <Dropdown />
          </div>

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
                  .map((result, index) => (
                    <ListCharacters key={index} result={result} addStarred={addStarred} />
                  ))}
              </ul>
            </nav>
          )}

          {listCharactersFilter.length > 0 && (
            <>
              <div className="flex flex-row justify-between px-4 pb-2">
                <span className="text-blue-900">
                  {listCharactersFilter.length + listCharacters.length} Results
                </span>
                <span className="bg-secondary600 bg-opacity-50 px-2 rounded-3xl text-sm text-gray-600">
                  {listCharactersFilter.length} Filter
                </span>
              </div>
              <nav>
                <ul className="flex flex-col pb-6">
                  {listCharactersFilter.map((result, index) => (
                    <ListCharacters key={index} result={result} addStarred={addStarred} />
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
              <div onClick={updateOrderCharacters}>
                <OrderSvg />
              </div>
            </div>
          )}

          {listCharacters && (
            <nav>
              <ul className="flex flex-col gap-2">
                {listCharacters
                  .filter((item) => !item.starred)
                  .map((result, index) => (
                    <ListCharacters key={index} result={result} addStarred={addStarred} />
                  ))}
              </ul>
            </nav>
          )}
        </div>
        <div
          className={`" md:col-span-3 bg-white p-4 "${
            isDetailRoute ? " sm:col-span-4  " : " sm:hidden md:block "
          }`}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}
