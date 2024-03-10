import React, { useEffect, useState } from "react";
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { DETAIL_CHARACTER } from '../graphql/queries';
import { Character as typeCharacter } from "../@types/all";

import { RootContext } from '../context/rootContext';
import { RootContextType, } from '../@types/all';

import ModalComments from "../components/ModalComments";

export default function Character() {
  const { characterId } = useParams<{ characterId: string }>();

  const { loading, data, refetch } = useQuery<{ character: typeCharacter }>(DETAIL_CHARACTER,{
    variables: { characterId }
  });

  const { listCharacters, addStarred, listComments, updateComments} = React.useContext(RootContext) as RootContextType;

  const [starred, setStarred] = useState(false)
  const [comment, setComment] = useState("")

  useEffect(() => {
    refetch();
  }, [refetch]);

  const clickStarred = () => {
    setStarred(!starred)
    if(data)
      addStarred(data?.character.id);
  }

  const clickComment = () => {
      updateComments(comment, data?.character.id||""); 
      setComment("")
  }

  {loading && <p>Loading...</p>}

  return (
    <div className="px-16 flex flex-col ">
      <div className="pb-5 pt-5">
        <div className="relative w-24">
          <img
            className="rounded-full w-24 mb-3"
            src={data?.character.image}
            alt={data?.character.name}
          />
          <svg
            onClick={clickStarred}
            xmlns="http://www.w3.org/2000/svg"
            fill={
              listCharacters.find((item) => item.id === data?.character.id)
                ?.starred
                ? "green"
                : "none"
            }
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={
              listCharacters.find((item) => item.id === data?.character.id)
                ?.starred
                ? "green"
                : "grey"
            }
            className="w-9 h-9 absolute bottom-0 right-0 rounded-full bg-white p-1 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-medium">
          {data?.character.name || "none"}
        </h1>
      </div>
      <div className="">
        <div className="flex flex-col border-b-2 py-3 mb-3">
          <span className="font-medium">Specie</span>
          <span className="font-extralight">
            {data?.character.species || "none"}
          </span>
        </div>

        <div className="flex flex-col border-b-2 py-3 mb-3">
          <span className="font-medium">Status</span>
          <span className="font-extralight">
            {data?.character.status || "none"}
          </span>
        </div>

        <div className="flex flex-col border-b-2 py-3 mb-3">
          <span className="font-medium">type</span>
          <span className="font-extralight">
            {data?.character.type || "none"}
          </span>
        </div>

        <div className="flex flex-col border-b-2 py-3 mb-3">
          <span className="font-medium">gender</span>
          <span className="font-extralight">
            {data?.character.gender || "none"}
          </span>
        </div>
      </div>
      <div>
        <ModalComments>
          <div className="flex flex-col">
            <div className=" flex flex-row gap-2">
              <textarea
                className="block p-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                placeholder="Write your thoughts here..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <div className="self-center">
                <svg
                  onClick={clickComment}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-9 h-9 p-2 bg-purple-400 rounded-full"
                >
                  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
              </div>
            </div>
            <div className="p-4">
              {listComments.find((item) => item.id === data?.character.id) &&
                listComments
                  .find((item) => item.id === data?.character.id)
                  ?.comments.map((item) => <p>{item}</p>)}
            </div>
          </div>
        </ModalComments>
      </div>
    </div>
  );
}

