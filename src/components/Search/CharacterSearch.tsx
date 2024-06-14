import { SearchSvg } from "../SvgIcons";
import SearchDropdown from "./SearchDropdown";
import useRootStore from "../../store/store";

const CharacterSearch: React.FC<{searchCharacters : ({}) => void }> = ({ searchCharacters}) => {
    const {
        speciez,
        searchz,
        updateSearchz,
      } = useRootStore();

    const handleSearch = (searchTerm: string) => {
        searchCharacters({
          variables: { searchTerm, specie: speciez },
        });
        updateSearchz(searchTerm);
      };

    return (
        <div className="relative flex">
        <input
          type="text"
          value={searchz}
          onChange={(e) => handleSearch(e.target.value)}
          className="ps-11  w-full border-none rounded-s-lg text-sm bg-gray-200 text-gray-600 focus:outline-none focus:border-gray-500 focus:ring-0 "
          placeholder="Search or filter results"
        />
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
          <SearchSvg />
        </div>
        <SearchDropdown />
      </div>
    )
}


export default CharacterSearch;