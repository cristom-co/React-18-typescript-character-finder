export interface Character {
    id: string
    name: string
    image: string
    status: string
    species: string
    type: string
    gender: string
   }

export interface responseSearch {
    results: Character[]
}

export type RootContextType = {
    starred: Character[];
    specie: String;
    updateStarred: (characters: Character[]) => void;
    updateSpecie: (specie: String) => void;
};


export interface ITodo {
    id: number;
    title: string;
    description: string;
    status: boolean;
  }
  export type TodoContextType = {
    todos: ITodo[];
    saveTodo: (todo: ITodo) => void;
    updateTodo: (id: number) => void;
  };