import { useState, useContext } from 'react';

import { RootContext } from "../context/rootContext";
import { RootContextType } from "../@types/all";

import ButtonsFilter from './ButtonsFilter';

const Dropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const {
    updateSpecie,
    specie,
    updateCharacterFilter,
    characterFilter,
    filterCharacters,
    currentGender,
    updateCurrentGender,
    currentStatus,
    updateCurrentStatus,
  } = useContext(RootContext) as RootContextType;

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
        className="py-2 px-3 text-sm rounded-e-md  border-transparent text-primary700 bg-gray-200"
        data-testid="toggleDropdown"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`"w-6 h-6 " ${ isDropdownOpen ? "bg-primary100": "bg-none" }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <div data-testid="boxDropdown"  className="absolute mt-2 md:right-0 sm:right-[-16px] md:w-80 sm:w-screen px-4 pt-2 bg-white border rounded-md shadow-lg ">
          <ButtonsFilter title="Characters" action={updateCharacterFilter} currentValue={characterFilter} options={["", "Starred", "Others"]} />
          <ButtonsFilter title="Species" action={updateSpecie} currentValue={specie} options={["", "Human", "Alien"]} />
          <ButtonsFilter title="Status" action={updateCurrentStatus} currentValue={currentStatus} options={["", "Alive", "Dead"]} />
          <ButtonsFilter title="Gender" action={updateCurrentGender} currentValue={currentGender} options={["", "Male", "Female"]} />
          <div className="div px-1 py-2">
            <button
              className="w-full rounded-md p-2 bg-primary600 text-white font-light "
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