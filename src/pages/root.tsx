import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";

//Apollo client
import { DocumentNode, useLazyQuery } from "@apollo/client";
import { SEARCH_CHARACTERS } from "../graphql/queries";

//types
import { responseSearch } from "../types/all";

//components
import Dropdown from "../components/Dropdown";
import ListCharacters from "../components/ListCharacters";

//svg
import { SearchSvg, OrderSvg } from "../components/SvgIcons";

//Store
import useRootStore from "../store/store";

export default function Root() {
  const isDetailRoute = !!useParams().characterId;

  const [searchCharacters, { loading, data }] = useLazyQuery<{
    searchResults: responseSearch;
  }>(SEARCH_CHARACTERS as DocumentNode);

  const {
    listCharactersz,
    updateCharactersz,
    speciez,
    searchz,
    updateSearchz,
    addStarredz,
    updateOrderCharactersz,
  } = useRootStore();

  const [flagOrder, setFlagOrder] = React.useState(false);

  const handleOrder = () => {
    updateOrderCharactersz(flagOrder);
    setFlagOrder(!flagOrder);
  };

  const handleSearch = (searchTerm: string) => {
    searchCharacters({
      variables: { searchTerm, specie: speciez },
    });
    updateSearchz(searchTerm);
  };

  useEffect(() => {
    if (!loading && data) {
      updateCharactersz(data.searchResults.results);
    }
  }, [loading]);

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
          <h1 className="text-2xl font-bold py-6 px-2">Rick and Morty list</h1>
          <div className="relative flex">
            <input
              type="text"
              value={searchz}
              onChange={(e) => handleSearch(e.target.value)}
              className="ps-11  w-full border-none rounded-s-lg text-sm bg-gray-200 text-gray-600 focus:outline-none focus:border-gray-500 focus:ring-0 "
              placeholder="Search or filter results"
            />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
              <SearchSvg />
            </div>
            <Dropdown />
          </div>

          {listCharactersz.length > 0 && (
            <>
              <div className="flex flex-row justify-between pr-5 mt-8">
                <h2 className="text-sm pb-6 pt-0 px-4 text-gray-600">
                  CHARACTERS
                </h2>
                <div onClick={handleOrder}>
                  <OrderSvg />
                </div>
              </div>
              <nav>
                <ul className="flex flex-col gap-2">
                  {listCharactersz.map((result, index) => (
                    <ListCharacters
                      key={index}
                      result={result}
                      addStarred={addStarredz}
                    />
                  ))}
                </ul>
              </nav>
            </>
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
