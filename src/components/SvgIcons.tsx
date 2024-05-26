import { Character } from "../types/all";
import React from "react";

export const SearchSvg = () => {
  return (
    <svg
      className="flex-shrink-0 size-5 text-gray-600"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
};

export const OrderSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
      />
    </svg>
  );
};

const LovePath = () => {
  return (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
    />
  );
};

export const LoveSvg: React.FC<{ id: string; listCharacters: Character[] }> = ({
  id,
  listCharacters,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={
        listCharacters.find((item) => item.id === id)?.starred
          ? "#63D838"
          : "none"
      }
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={
        listCharacters.find((item) => item.id === id)?.starred
          ? "#63D838"
          : "grey"
      }
      className="w-9 h-9 absolute bottom-0 right-0 rounded-full bg-white p-1 cursor-pointer"
    >
      <LovePath />
    </svg>
  );
};

export const LoveSvg2: React.FC<{
  starred: boolean;
  characterId: string;
  id: string;
}> = ({ starred, characterId, id }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={starred ? "#63D838" : "none"}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={starred ? "#63D838" : "grey"}
      className={`" w-6 h-6 rounded-full cursor-pointer " ${
        characterId == id && "bg-white p-2 w-9 h-9"
      }`}
    >
      <LovePath />
    </svg>
  );
};

export const ArrowRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-9 h-9 p-2 bg-secondary600 rounded-full cursor-pointer text-white"
    >
      <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
    </svg>
  );
};

export const ArrowLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 cursor-pointer md:hidden"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  );
};

export const ArrowDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};

export const FilterSvg: React.FC<{ isDropdownOpen: boolean}> = ({isDropdownOpen}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`"w-6 h-6 " ${isDropdownOpen ? "bg-primary100" : "bg-none"}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
      />
    </svg>
  );
};
