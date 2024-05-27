import { Character, listComment } from "./all"

type voidFunctionString = (value: string) => void
type filterOption = {
  selected: string,
  options: string[] 
}
type filterType =  {
  character: filterOption
  species: filterOption,
  status: filterOption,
  gender: filterOption
}

export default interface StoreState {
  //states
  speciez: string
  listCharactersz: Character[]
  originalListCharacters: Character[]
  searchz: string
  listCommentsz: listComment[]
  listSoftDeletez: string[],
  filter: filterType

  //actions
  updateSpeciez: voidFunctionString
  updateCharactersz: (value: Character[]) => void 
  updateSearchz: voidFunctionString
  addStarredz: voidFunctionString
  updateOrderCharactersz: (value: Boolean) =>  void
  updateCommentsz: (comment: string, id: string ) => void
  updateListSoftDeletez: voidFunctionString
  updateFilter: (category: keyof filterType, selected: string) => void
  filterCharactersz: () => void
}
