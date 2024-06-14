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

export interface butttonsFilterProps {
    currentValue: string;
    action: (id: string) => void;
    options: string[];
    title: string
  }

export interface listCharactersProps {
    result: Character;
    addStarred: (id: string) => void;
  }
  
export interface dataProps {
    data: {
        character: Character
    }
}