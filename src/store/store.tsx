import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

import storeType from "../types/storeType";
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
        }),
        updateCommentsz: (comment, id) => set((state) => {
          let response = []
          const t = state.listCommentsz.find(item => item.id === id);
          if(t){
            response = state.listCommentsz.map(item => {
              if(item.id === id){
                return {...item, comments: [...item.comments, comment]}
              }
              return item;
            })
          }else{
            response = [...state.listCommentsz, {id, comments: [comment]}]
          }
          return { listCommentsz: response}
        }),
        updateListSoftDeletez: (value) => set((state) => {
          return {
            listSoftDeletez: [...state.listSoftDeletez, value],
            listCharactersz : state.listCharactersz.filter(item=> item.id != value)
          }
        }),
        updateFilter: (category, selected) => set((state) => {
          return { 
            filter:{
              ...state.filter,
              [category]: {
                ...state.filter[category],
                selected
              }
            } 
          }
        }),
        filterCharactersz:() => set(() => {
          //TODO: filter
          return {}
        })
      }),
      {
        name: "root-storage",
      }
    )
  )
);

export default useRootStore;
