import * as React from 'react';
import { Character, RootContextType, listComment } from '../@types/all';

export const RootContext = React.createContext<RootContextType | null>(null);

const RootProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [specie, setSpecie] = React.useState<string>("");
  const [listCharacters, setListCharacters] = React.useState<Character[]>([]);
  const [search, setSearch] = React.useState<string>("");
  const [characterFilter, setCharacterFilter] = React.useState<string>("");
  const [listStarred, setListStarred] = React.useState<string[]>([])
  const [listCharactersFilter, setListCharactersFilter] = React.useState<Character[]>([])
  const [listComments, setListComments] = React.useState<listComment[]>([])
  const [listSoftDelete, setListSoftDelete] = React.useState<string[]>([])

  const [currentStatus, setCurrentStatus] = React.useState<string>("")
  const [currentGender, setCurrentGender] = React.useState<string>("")

  const updateCharacters = (characters: Character[]) => {
    const idsStarred = listCharacters.filter(item => item.starred && !listStarred.includes(item.id)).map(item => item.id)
    const setStarred =  [...listStarred,...idsStarred];
    setListStarred(setStarred);

    let tmpList = characters.map((item) => ({
      ...item,
      starred: setStarred.includes(item.id) ? true: false
    }));

    if(listSoftDelete.length > 0)
      tmpList = tmpList.filter(item => !listSoftDelete.includes(item.id))

    
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

  const updateSpecie = (specieParam: string) => {
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
      let tmpCharacter, tmpSpecie, tmpStatus, tmpGender = false
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
      switch (currentStatus) {
        case "Alive":
          if(item.status === "Alive")
            tmpStatus = true
          break;
        case "Dead":
          if(item.status === "Dead")
            tmpStatus = true
          break;
        default:
          tmpStatus = true;
          break;
      }
      switch (currentGender) {
        case "Male":
          if(item.gender === "Male")
            tmpGender = true
          break;
        case "Female":
          if(item.gender === "Female")
            tmpGender = true
          break;
        default:
          tmpGender = true
          break;
      }

      return tmpCharacter && tmpSpecie && tmpStatus && tmpGender
    }));
  }

  const updateComments = (comment: string, id: string) => {
    if(id != ""){
      const t = listComments.find(item => item.id === id);
      if(t){
        const response = listComments.map(item => {
          if(item.id === id){
            return {...item, comments: [...item.comments, comment]}
          }else{
            return item;
          }
        })
        setListComments(response);
      }else{
        setListComments([...listComments, {id, comments: [comment]}]);
      }
    }
  }

  const updateListSoftDelete = (id: string) => {
    setListSoftDelete([...listSoftDelete, id])
    setListCharacters(listCharacters.filter(item => item.id != id))
  }

  const updateCurrentGender = (gender: string) => {
    setCurrentGender(gender === currentGender ? "" : gender)
  }

  const updateCurrentStatus = (status: string) => {
    setCurrentStatus(status === currentStatus ? "" : status)
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
        listCharactersFilter,
        listComments,
        updateComments,
        listSoftDelete,
        updateListSoftDelete,
        currentStatus,
        currentGender,
        updateCurrentGender,
        updateCurrentStatus
      }}
    >
      {children}
    </RootContext.Provider>
  );
}

export default RootProvider;
