import { useState, useContext } from 'react';

import { RootContext } from "../context/rootContext";
import { RootContextType } from "../@types/all";

const Dropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const { updateSpecie, specie, updateCharacterFilter, characterFilter, filterCharacters } = useContext(RootContext) as RootContextType;

  const clickFilter = () => {
    filterCharacters()
    setTimeout(() => {
      toggleDropdown();
    }, 200);
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="py-2 px-3 text-sm rounded-e-md  border-transparent text-purple-500 bg-slate-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="absolute mt-2 right-0 w-80 p-4 bg-white border rounded-md shadow-lg">
          <div>
            <span>Character</span>
            <div className="flex flex-row justify-between px-4 py-2 gap-2">
              <button
                className={`p-3 rounded-md w-1/3 ${
                  characterFilter == "" ? "bg-purple-500" : "bg-white"
                }`}
                onClick={() => updateCharacterFilter("")}
              >
                All
              </button>
              <button
                className={`p-3 rounded-md w-1/3 ${
                  characterFilter == "Starred" ? "bg-purple-500" : "bg-white"
                }`}
                onClick={() => updateCharacterFilter("Starred")}
              >
                Starred
              </button>
              <button
                className={`p-3 rounded-md w-1/3 ${
                  characterFilter == "Others" ? "bg-purple-500" : "bg-white"
                }`}
                onClick={() => updateCharacterFilter("Others")}
              >
                Others
              </button>
            </div>
          </div>
          <div>
            <span>Specie</span>
            <div className="flex flex-row justify-between px-4 py-2 gap-2">
              <button
                className={`p-3 rounded-md w-1/3 ${
                  specie == "" ? "bg-purple-500" : "bg-white"
                }`}
                onClick={() => updateSpecie("")}
              >
                All
              </button>
              <button
                className={`p-3 rounded-md w-1/3 ${
                  specie == "Human" ? "bg-purple-500" : "bg-white"
                }`}
                onClick={() => updateSpecie("Human")}
              >
                Human
              </button>
              <button
                className={`p-3 rounded-md w-1/3 ${
                  specie == "Alien" ? "bg-purple-500" : "bg-white"
                }`}
                onClick={() => updateSpecie("Alien")}
              >
                Alien
              </button>
            </div>
          </div>
          <div className="div py-4">
            <button
              className="w-full rounded-md p-2 bg-slate-400 text-white"
              onClick={clickFilter}
            >
              Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;