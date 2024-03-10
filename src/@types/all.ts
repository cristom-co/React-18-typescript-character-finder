export interface Character {
    id: string
    name: string
    image: string
    status: string
    species: string
    type: string
    gender: string
    starred: boolean
   }

export interface responseSearch {
    results: Character[]
}

export type RootContextType = {
    listCharacters: Character[];
    specie: String;
    search: string;
    characterFilter:  string;
    listCharactersFilter: Character[];
    updateCharacters: (characters: Character[]) => void;
    updateSpecie: (specie: String) => void;
    updateSearch: (search: string) => void;
    addStarred: (id: string) => void;
    updateCharacterFilter: (characterFilter: string) => void;
    filterCharacters: () => void
};