import useRootStore from "../../store/store";
import CharacterItem from "../Character/CharacterItem";
import CharactersOrder from "./CharactersOrder";

const CharacterList = () => {
  const { listCharactersz, addStarredz } = useRootStore();

  return (
    <>
      {listCharactersz.length > 0 && (
        <>
          <div className="flex flex-row justify-between pr-5 mt-8">
            <h2 className="text-sm pb-6 pt-0 px-4 text-gray-600">CHARACTERS</h2>
            <CharactersOrder />
          </div>
          <nav>
            <ul className="flex flex-col gap-2">
              {listCharactersz.map((result, index) => (
                <CharacterItem
                  key={index}
                  result={result}
                  addStarred={addStarredz}
                />
              ))}
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default CharacterList;
