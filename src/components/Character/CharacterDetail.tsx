import { useState } from "react";
import useRootStore from "../../store/store";
import { LoveSvg, ArrowLeft } from "../SvgIcons";
import {  NavLink } from "react-router-dom";
import {dataProps} from "../../types/all"

const CharacterDetail: React.FC<dataProps> = ({ data }) => {
  const { listCharactersz, addStarredz } = useRootStore();

  const [starred, setStarred] = useState(false);

  const clickStarred = () => {
    setStarred(!starred);
    if (data) addStarredz(data?.character.id);
  };

  return (
    <>
      <NavLink to={"/"}>
        <ArrowLeft />
      </NavLink>
      <div className="pb-5 pt-5">
        {data?.character.image && (
          <div className="relative w-24">
            <img
              className="rounded-full w-20 mb-3"
              src={data?.character.image}
              alt={data?.character.name}
            />
            <div onClick={clickStarred}>
              <LoveSvg
                listCharacters={listCharactersz}
                id={data?.character.id}
              />
            </div>
          </div>
        )}
        <h1 className="text-2xl font-medium">{data?.character.name || ""}</h1>
      </div>
      <div className="">
        <div className="flex flex-col border-b-2 py-3 mb-3">
          <span className="font-medium">Specie</span>
          <span className="font-extralight">
            {data?.character.species || "---"}
          </span>
        </div>

        <div className="flex flex-col border-b-2 py-3 mb-3">
          <span className="font-medium">Status</span>
          <span className="font-extralight">
            {data?.character.status || "---"}
          </span>
        </div>

        <div className="flex flex-col border-b-2 py-3 mb-3">
          <span className="font-medium">Type</span>
          <span className="font-extralight">
            {data?.character.type || "---"}
          </span>
        </div>

        <div className="flex flex-col border-b-2 py-3 mb-3">
          <span className="font-medium">Gender</span>
          <span className="font-extralight">
            {data?.character.gender || "none"}
          </span>
        </div>
      </div>
    </>
  );
};

export default CharacterDetail;
