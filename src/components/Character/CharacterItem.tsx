import { NavLink, useParams } from "react-router-dom";
import { LoveSvg2 } from "../SvgIcons";
import { listCharactersProps } from "../../types/all";

const CharacterItem: React.FC<listCharactersProps> = (props) => {
  let { characterId } = useParams();

  return (
    <li
      key={props.result.id}
      className={`" flex border-b-2 px-4 py-2 rounded-lg " ${
        characterId == props.result.id ? "bg-primary100" : "bg-transparent"
      }`}
    >
      <div className="grow">
        <NavLink to={`character/${props.result.id}`}>
          <div className="flex flex-row gap-4">
            <img
              className=" grow-0 rounded-full self-center w-8"
              src={props.result.image}
              alt={props.result.name}
            />
            <div className=" grow flex flex-col">
              <span className="font-medium">
                {props.result.name.length > 16
                  ? props.result.name.substring(0, 15) + "..."
                  : props.result.name}
              </span>
              <span className="font-extralight">{props.result.species}</span>
            </div>
          </div>
        </NavLink>
      </div>
      <div
        className="self-center"
        onClick={() => props.addStarred(props.result.id)}
      >
        <LoveSvg2
          starred={props.result.starred}
          characterId={characterId || ""}
          id={props.result.id}
        />
      </div>
    </li>
  );
};

export default CharacterItem;
