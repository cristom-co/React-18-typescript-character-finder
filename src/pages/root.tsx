import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";

//Apollo client
import { DocumentNode, useLazyQuery } from "@apollo/client";
import { SEARCH_CHARACTERS } from "../graphql/queries";

//types
import { responseSearch } from "../types/all";

//components
import CharacterSearch from "../components/Search/CharacterSearch";
import CharactersList from "../components/Characters/CharactersList";

//Store
import useRootStore from "../store/store";

export default function Root() {
  const isDetailRoute = !!useParams().characterId;

  const [searchCharacters, { loading, data }] = useLazyQuery<{
    searchResults: responseSearch;
  }>(SEARCH_CHARACTERS as DocumentNode);

  const { updateCharactersz } = useRootStore();

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
          <CharacterSearch searchCharacters={searchCharacters} />
          <CharactersList />
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
