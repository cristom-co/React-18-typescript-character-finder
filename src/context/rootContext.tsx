import * as React from 'react';
import { Character, RootContextType } from '../@types/all';

export const RootContext = React.createContext<RootContextType | null>(null);

const RootProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [specie, setSpecie] = React.useState<String>("");
  const [starred, setStarred] = React.useState<Character[]>([]);

  const updateStarred = (characters: Character[]) => {
    setStarred(characters)
  };

  const updateSpecie = (specie: String) => {
    setSpecie(specie);
  };

  return <RootContext.Provider value={{ starred,specie, updateStarred, updateSpecie }}>{children}</RootContext.Provider>;
}

export default RootProvider;
