
import { Character } from "../@types/all";

import { NavLink } from "react-router-dom";

interface listCharactersProps {
    result: Character;
    addStarred: (id: string) => void
  }

const ListCharacters: React.FC<listCharactersProps>   = (props) => {
    return (
        <li key={props.result.id} className=" flex border-b-2 pb-3">
        <div className="grow">
          <NavLink to={`character/${props.result.id}`}>
            <div className="flex flex-row gap-4">
              <img
                className=" grow-0 rounded-full self-center"
                src={props.result.image}
                alt={props.result.name}
                style={{ width: "40px", height: "40px" }}
              />
              <div className=" grow flex flex-col">
                <span className="font-medium">
                  {props.result.name.length > 16
                    ? props.result.name.substring(0, 15) + "..."
                    : props.result.name}
                </span>
                <span className="font-extralight">
                  {props.result.species}
                </span>
              </div>
            </div>
          </NavLink>
        </div>
        <button className="grow-0 rounded-full p-3 bg-white" onClick={() => props.addStarred(props.result.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={props.result.starred ? "green" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={props.result.starred ? "green" : "grey"}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </li>
    )
}

export default ListCharacters;