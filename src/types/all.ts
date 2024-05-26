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

export interface listComment {
    id: string, comments: string[]
}

export interface RootContextType {
    listCharacters: Character[];
    specie: string;
    search: string;
    characterFilter:  string;
    listCharactersFilter: Character[];
    listComments: listComment[] ;
    listSoftDelete: string[];
    currentStatus: string;
    currentGender: string;
    updateCharacters: (characters: Character[]) => void;
    updateSpecie: (specie: string) => void;
    updateSearch: (search: string) => void;
    addStarred: (id: string) => void;
    updateCharacterFilter: (characterFilter: string) => void;
    filterCharacters: () => void;
    updateComments: (comment: string, id: string) => void;
    updateListSoftDelete: (id: string) => void;
    updateCurrentStatus: (status: string) => void
    updateCurrentGender: (status: string) => void,
    updateOrderCharacters: () => void
};