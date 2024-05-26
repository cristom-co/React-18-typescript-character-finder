import { Character } from "../types/all"

type voidFunctionString = (value: string) => void



export default interface StoreState {
  //states
  speciez: string
  listCharactersz: Character[]
  searchz: string

  //actions
  updateSpeciez: voidFunctionString
  updateCharactersz: (value: Character[]) => void 
  updateSearchz: voidFunctionString
  addStarredz: voidFunctionString
  updateOrderCharactersz: (value: Boolean) =>  void
}
