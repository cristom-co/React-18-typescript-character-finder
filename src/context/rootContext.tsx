import * as React from 'react';
import { Character, RootContextType } from '../@types/all';

export const RootContext = React.createContext<RootContextType | null>(null);

const RootProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [specie, setSpecie] = React.useState<String>("");
  const [listCharacters, setListCharacters] = React.useState<Character[]>([]);
  const [search, setSearch] = React.useState<string>("");
  const [characterFilter, setCharacterFilter] = React.useState<string>("");
  const [listStarred, setListStarred] = React.useState<string[]>([])

  const [listCharactersFilter, setListCharactersFilter] = React.useState<Character[]>([])

  const updateCharacters = (characters: Character[]) => {

    const idsStarred = listCharacters.filter(item => item.starred && !listStarred.includes(item.id)).map(item => item.id)
    const setStarred =  [...listStarred,...idsStarred];
    setListStarred(setStarred);

    let tmpList = characters.map((item) => ({
      ...item,
      starred: setStarred.includes(item.id) ? true: false
    }));
    
    switch (characterFilter) {
      case "Starred":
        tmpList = [...tmpList.filter(item => item.starred)]
        break;
      case "Others":
        tmpList = [...tmpList.filter(item => !item.starred)]
        break;
      default:
        break;
    }

    setListCharacters(tmpList)
  };

  const updateSpecie = (specieParam: String) => {
    setSpecie(specieParam === specie ? "" : specieParam);
  };

  const updateCharacterFilter = (characterFilterParam: string) => {
    setCharacterFilter(characterFilterParam == characterFilter ? "" : characterFilterParam);
  }

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
        if(item.starred)  
          setListStarred(listStarred.filter(elem => elem != item.id))
      }else{
        return item;
      }
      {
    }
    });
    setListCharacters(modifiedArray);
  }

  const filterCharacters = () => {
    setListCharactersFilter(listCharacters.filter(item => {
      let tmpCharacter, tmpSpecie = false
      switch (characterFilter) {
        case 'Starred':
          if(item.starred)
            tmpCharacter = true
          break;
        case "Others":
          if(!item.starred)
            tmpCharacter = true;
          break;
        default:
          tmpCharacter = true;
          break;
      }
      switch (specie) {
        case "Human":
          if(item.species === "Human")
            tmpSpecie = true
        break
        case "Alien":
          if(item.species === "Alien")
            tmpSpecie = true
        break;
        default:
          tmpSpecie = true
        break;
      }

      return tmpCharacter && tmpSpecie
    }));
  }


  return (
    <RootContext.Provider
      value={{
        listCharacters,
        specie,
        search,
        characterFilter,
        updateCharacters,
        updateSpecie,
        updateSearch,
        addStarred,
        updateCharacterFilter,
        filterCharacters,
        listCharactersFilter
      }}
    >
      {children}
    </RootContext.Provider>
  );
}

export default RootProvider;
