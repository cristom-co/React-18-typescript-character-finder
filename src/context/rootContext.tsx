import * as React from 'react';
import { Character, RootContextType } from '../@types/all';

export const RootContext = React.createContext<RootContextType | null>(null);

const RootProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [specie, setSpecie] = React.useState<String>("");
  const [listCharacters, setListCharacters] = React.useState<Character[]>([]);
  const [search, setSearch] = React.useState<string>("");

  const updateCharacters = (characters: Character[]) => {
    setListCharacters(characters.map((item) => ({
      ...item,
      starred: false
    })))
  };

  const updateSpecie = (specie: String) => {
    setSpecie(specie);
  };

  const updateSearch = (search: string) => {
    setSearch(search);
  }

  const addStarred = (id: string) => {
    const modifiedArray: Character[] = listCharacters.map((item) => {
      if(item.id == id){
        return {
          ...item,
          starred: !item.starred,
        }
      }else{
        return item;
      }
      {
    }
    });
    setListCharacters(modifiedArray);
  }

  return <RootContext.Provider value={{ listCharacters,specie, search, updateCharacters, updateSpecie, updateSearch, addStarred }}>{children}</RootContext.Provider>;
}

export default RootProvider;
