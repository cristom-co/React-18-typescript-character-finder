import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

import storeType from "./storeType";
import states from "./stateStore";

const useRootStore = create<storeType>()(
  devtools(
    persist(
      (set) => ({
        ...states,
        updateSpeciez: (value) => set((state) => ({ speciez: value === state.speciez ? "" : value })),
        updateCharactersz: (value) => set(() => ({ listCharactersz: value })),
        updateSearchz: (value) => set(() => ({searchz: value})),
        addStarredz: (value) => set((state) => {
          const response = state.listCharactersz.map((item) => {
            if(item.id === value)
              return { ...item, starred: !item.starred}
            return item
          })
          return { listCharactersz : response}
        }),
        updateOrderCharactersz: (value) => set((state) => {
          let response = []
          if(value){
            response = [...state.listCharactersz].sort((a, b) => a.name.localeCompare(b.name));
          }else{
            response = [...state.listCharactersz].sort((a, b) => b.name.localeCompare(a.name));
          }
          return { listCharactersz: response }
        })
      }),
      {
        name: "root-storage",
      }
    )
  )
);

export default useRootStore;
