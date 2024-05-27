import { useEffect, useState } from "react";
//Apollo client
import { useQuery } from "@apollo/client";
import { DETAIL_CHARACTER } from "../graphql/queries";

//Router
import { useParams, NavLink } from "react-router-dom";

//types
import { Character as typeCharacter } from "../types/all";

//components
import ModalComments from "../components/ModalComments";

//Svg
import { LoveSvg, ArrowRight, ArrowLeft } from "../components/SvgIcons";

//store
import useRootStore from "../store/store";

export default function Character() {
  const { characterId } = useParams<{ characterId: string }>();

  const { loading, data, refetch } = useQuery<{ character: typeCharacter }>(
    DETAIL_CHARACTER,
    {
      variables: { characterId },
    }
  );

  const {
    listCharactersz,
    addStarredz,
    listCommentsz,
    updateCommentsz,
    updateListSoftDeletez,
    listSoftDeletez,
  } = useRootStore();

  const [starred, setStarred] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    refetch();
  }, []);

  const clickStarred = () => {
    setStarred(!starred);
    if (data) addStarredz(data?.character.id);
  };

  const clickComment = () => {
    updateCommentsz(comment, data?.character.id || "");
    setComment("");
  };

  const clickSoftDelete = () => {
    if (data) updateListSoftDeletez(data?.character.id);
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {listSoftDeletez.find((item) => item === data?.character.id) ? (
        <div className="flex h-full w-full justify-center items-center">
          <h1 className="text-gray-500 font-bold">CHARACTER DELETED</h1>
        </div>
      ) : (
        <div className="px-16 flex flex-col ">
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
            <h1 className="text-2xl font-medium">
              {data?.character.name || ""}
            </h1>
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
          <div>
            <h2 className="py-2 font-medium">Actions</h2>
            <div className="flex flex-row gap-2">
              <ModalComments>
                <div className="flex flex-col">
                  <div className=" flex flex-row gap-2">
                    <textarea
                      className="block p-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                      placeholder="Write your thoughts here..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    <div className="self-center" onClick={clickComment}>
                      <ArrowRight />
                    </div>
                  </div>
                  <div className="p-4 overflow-scroll max-h-60">
                    {listCommentsz.find(
                      (item) => item.id === data?.character.id
                    ) &&
                      listCommentsz
                        .find((item) => item.id === data?.character.id)
                        ?.comments.map((item) => (
                          <p className="border-b-2 p-3 text-gray-600">{item}</p>
                        ))}
                  </div>
                </div>
              </ModalComments>
              <button
                className="bg-primary700 text-white px-4 rounded-md text-sm"
                onClick={clickSoftDelete}
              >
                Soft-Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
