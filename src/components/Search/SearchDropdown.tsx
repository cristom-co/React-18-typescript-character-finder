import { useState } from "react";
import DropdownButton from "./DropdownButton";
import { FilterSvg } from "../SvgIcons";
import useRootStore from "../../store/store";

const SearchDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const { filter, updateFilter, filterCharactersz } = useRootStore();

  const clickFilter = () => {
    filterCharactersz();
    setTimeout(() => {
      toggleDropdown();
    }, 200);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="py-2 px-3 text-sm rounded-e-md  border-transparent text-primary700 bg-gray-200"
        data-testid="toggleDropdown"
      >
        <FilterSvg isDropdownOpen={isDropdownOpen} />
      </button>

      {isDropdownOpen && (
        <div
          data-testid="boxDropdown"
          className="absolute mt-2 md:right-0 sm:right-[-16px] md:w-80 sm:w-screen px-4 pt-2 bg-white border rounded-md shadow-lg "
        >
          <DropdownButton
            title="Characters"
            action={(value) => updateFilter("character", value)}
            currentValue={filter.character.selected}
            options={filter.character.options}
          />
          <DropdownButton
            title="Species"
            action={(value) => updateFilter("species", value)}
            currentValue={filter.species.selected}
            options={filter.species.options}
          />
          <DropdownButton
            title="Status"
            action={(value) => updateFilter("status", value)}
            currentValue={filter.status.selected}
            options={filter.status.options}
          />
          <DropdownButton
            title="Gender"
            action={(value) => updateFilter("gender", value)}
            currentValue={filter.gender.selected}
            options={filter.gender.options}
          />
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

export default SearchDropdown;
