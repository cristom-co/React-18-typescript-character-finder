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

export type RootContextType = {
    listCharacters: Character[];
    specie: string;
    search: string;
    characterFilter:  string;
    listCharactersFilter: Character[];
    updateCharacters: (characters: Character[]) => void;
    updateSpecie: (specie: string) => void;
    updateSearch: (search: string) => void;
    addStarred: (id: string) => void;
    updateCharacterFilter: (characterFilter: string) => void;
    filterCharacters: () => void;
    listComments: listComment[] ;
    updateComments: (comment: string, id: string) => void;
    listSoftDelete: string[];
    updateListSoftDelete: (id: string) => void;

    currentStatus: string;
    updateCurrentStatus: (status: string) => void
    currentGender: string;
    updateCurrentGender: (status: string) => void
};